---
title: 🔥 Burnth / 🪱 WormCash
description: A practical implementation of EIP-7503
category: ["Zero-Knowledge Proofs"]
date : 9 Mar 2024
---


 # 🔥 Burnth / 🪱 WormCash

Burnth is just eth, but burnt!

Burnth is a practical implementation of [EIP-7503](https://eip7503.org). It's a relatively minimal ERC-20 smart-contract, deployed on Ethereum blockchain, allowing people to provide private proofs of burn and mint BURNTH tokens in exchange. The minting is done in a 1:1 scale, which means, for each 1 ETH you burn, you'll get 1 BURNTH.

It uses zkSNARKs under the hood to validate the proof-of-burns. The zero-knowledge protocol argues that there is an account within the state-root of a `blockRoot` (Which is a public `bytes32` value, that can be accessed in smart-contracts by: `block.blockRoot` or `blockroot(idx)`, and can be fed as a public input to zero-knowledge proof circuits), with an unspendable address (I.e burn-address). The circuit checks the unspendability by checking if the address is in fact equal with the output of a hash-function (In case we use MiMC7, which is a ZK friendly hash function).

WormCash on the other hand, is a separate crypto-token which can be minted by spending Burnth, but unlike Burnth, its emission is limited. This is done in order to make it economically viable to use it as an independent and valuable cryptoasset. A limited number of WormCashs can be generated per ethereum block, and the generated tokens are distributed based on amount of Burnth tokens consumed per user on that block.

People can burn ETH, convert it into WormCash, and swap it back with ETH on a decentralized exchange. This makes the philosophy behind EIP-7503 viable, without needing any change to the core Ethereum protocol!

## The circuit

The proof checks existence of some balance in a burn-address (Addresses which provably have no private-keys), by verifying a Merkle-Patricia-Trie proof.

Since Merkle-Patricia-Tries in Ethereum use keccak as their hash-function, and given that keccak is not a SNARK-friendly hash function, a circuit validating an entire MPT proof would be huge, making it practically impossible to generate proofs for using consumer-grade hardware (E.g laptops).

Instead of having a giant circuit validating a complete MPT-proof, we'll decompose our proofs into smaller arguments, and check that they are chained together outside the circuit.

Our Modified-Merkle-Patricia-Trie-Proof-Verifier consists of 3 R1CS circuits, as described below:

1. MPT-middle circuit: There exists a layer $l_i$ with commitment $h(l_i | s)$, such that $keccak(l_i)$ is a substring of $l_{i-1}$, with commitment $h(l_{i-1} | s)$ (Where $h$ is a SNARK-friendly hash function and $s$ is a random salt, added while commiting to the layer, so that verifier cannot guess the layer)
2. MPT-last circuit: There exists an an account within a layer $l_{last}$, with commitment $h(l_i | s)$ that it's public-key is MiMC7 of some preimage $p$ ($MiMC7(p,p)$). Nullifier is $MiMC7(p,0)$

There is also an extra Spend circuit, allowing you to partially mint your burnt amounts, ***without exposing the remaining amounts!***

- ***The parameter files are approximately 500MB and it takes around 1 minute to generate a single proof of burn.***
- ***The source code for the Burnth project is available on [GitHub](https://github.com/nobitex/burnth).***