# Stealth Addresses

Stealth Addresses are a privacy technique primarily used in Monero Cryptocurrency.

In this scheme, the receiver is able to generate a "meta/master public key", from which senders can derive infinite new public-keys that the meta-address owner can spend.

This protocol can be implemented using Elliptic Curve Cryptography:

 - Bob generates a key $m$ (Master private key), and computes $M = g^m$ (Master public key), where $g$ is a commonly-agreed generator point for the elliptic curve.
 - Alice generates an ephemeral key $r$, and publishes the ephemeral public key $R = g^r$.
 - Alice can compute a shared secret $S = M^r$, and Bob can compute the same shared secret $S = m^R$ (Diffie–Hellman key exchange).
 - A new public-key can be derived for Bob: $P = M + g^{hash(S)}$ (Elliptic-curve point addition).
 - Bob (and Bob alone, since he only knows the value of $m$) can compute corresponding private-key $p = m + hash(S)$ (Scalar addition).

## How can the receiver find his funds?

A naive method would be to:

 - Loop through all published ephemeral-keys ($R$ s) and check if funds have been sent into public-keys that are spendable by the receiver: $M + hash(m^R)$
 - If there are funds sent to those public-keys, receiver can generate their corresponding private keys.

There are smarter methods too, check [Vitalik's blog post on Stealth Addresses](https://vitalik.ca/general/2023/01/20/stealth.html)

## Stealth Addresses cannot be used for NFTs on Ethereum.

Suppose someone sends an asset to a stealth address. There are no ETH in that address. Sending ETH to that address will reveal a public link, breaking privacy.

We can use paymasters, but paymasters will only solve this problem for ERC-20 fungible tokens.

Check Vitalik's blog post for more on this.
