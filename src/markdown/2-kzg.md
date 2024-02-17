---
title: KZG Polynomial Commitments
description: Polynomical commitments are alternatives to merkle trees.
category: ["General Cryptography", "Zero-Knowledge Proofs"]
date : 24 Oct 2023
---



# KZG Polynomial Commitments

Imagine we want to commit to a vector of secret values, and later we want to make proofs that certain values exist in that list, without revealing the entire list.

Most naive implementation of such a tool is a merkle tree. With a merkle tree you can commit to `2^n` values and make proofs of size `log(2^n)=n`. (Proof size: `O(log(n))`)

A KZG commitment is a cryptographic tool which can generate proofs for a list of values with `O(1)` proof sizes.

## Math

Imagine our list is `[2, 0, 6]`.

We can represent this list as a polynomial $P(x)$ where $P(1) = 2$, $P(2) = 0$ and $P(3) = 6$. You can find such polynomials for arbitrary lists using an algorithm called **Polynomial Interpolation**.

For the mentioned list, the polynomial will be: $P(x) = 4x^2-14x+12$.

***Fact:*** Value $v$ exists at index $k$ of polynomial commitment $P(x)$ if and only if there exists a polynomial $Q(x)$ where: $Q(x).(x-k) = P(x) - v$.
It can be computed by doing a polynomial division: $Q(x)=\frac{P(x)-v}{x-k}$

Now imagine we choose a random value $\tau$ and commit to the list by calculating $c=P(\tau)$. (Commitment will be a number)

***Note:*** You can compute $Q(\tau)$ only when you know $Q(x)$.

Therefore the proof will be $\pi=Q(\tau)$. Verifier can check the proof by checking if: $\pi.(\tau - k) = c - v$

This protocol can be easily hacked since it works with numbers. We can easily calculate a fake proof by calculating $\pi = \frac{c - v}{\tau - k}$.

### Switching to elliptic curve points

Instead of using numbers, we can use elliptic curve points.

The commitment will be $c=g^{P(\tau)}$.

The proof will be $\pi=g^{Q(\tau)}$

The verification check will be: $g^{Q(\tau).(\tau - k)} = g^{P(\tau) - v}$, which in other words is: $\pi^{\tau - k}.g^v=c$

(Notice that one can't easily calculate \pi because of the discrete logarithm problem on elliptic curves)

The verification check can also be done by a elliptic curve pairing function.

(Pairing function: $e(g^a, g^b) = G^{ab}$)

Check: $e(\frac{c}{g^v}, g) = e(\pi, \frac{g^\tau}{g^k})$

***Question:*** how can we do elliptic curve division here?

***Possible Answer:*** Maybe the prover is also giving $\frac{c}{g^v}$ and $\frac{g^\tau}{g^k}$ as part of the proof (The prover can calculate those values).
Verifier can check their correctness by checking if:

$\frac{c}{g^v}.g^v = c$ and $\frac{g^\tau}{g^k}.g^k=g^\tau$
