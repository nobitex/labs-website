---
title: Crypto 101
description: Your journey to becoming a blockchain expert!
category: ["General Cryptography"]
date : 24 Oct 2023
---


# Your journey to becoming a blockchain expert!

Got zero knowledge of blockchains and the underlying technology? Use this reading list to get an extensive knowledge of blockchain-related math and cryptography!

## Math:
- [Finite/Prime Fields](https://medium.loopring.io/learning-cryptography-finite-fields-ced3574a53fe)
- ***(Easy) Benchmark: Implement a Prime-Field add/sub/mul library in Python!***
- ***(Easy) Benchmark: Implement Prime-Field division (Inversion) in Python! (Using euclidean algorithm)***
- [Elliptic Curve Cryptography](https://www.johannes-bauer.com/compsci/ecc/)
- [ECDSA](https://cryptobook.nakov.com/digital-signatures/ecdsa-sign-verify-messages)
- ***(Medium) Benchmark: Implement Secp256k1 curve point addition in pure Python!***
- ***(Hard) Benchmark: Implement Secp256k1 sign/verify in pure Python!***
- [Fiat-Shamir heuristic](https://www.zkdocs.com/docs/zkdocs/protocol-primitives/fiat-shamir/)
- [Time-locks and Verifiable Delay Functions](https://medium.com/iovlabs-innovation-stories/verifiable-delay-functions-8eb6390c5f4)

## Blockchain/Consensus:
- [Proof-of-Work](https://www.geeksforgeeks.org/implementing-the-proof-of-work-algorithm-in-python-for-blockchain-mining/)
- ***(Easy) Benchmark: Implement SHA256 Proof-of-Work in pure Python!***
- [A Blockchain from scratch](https://cranklin.wordpress.com/2017/07/11/lets-create-our-own-cryptocurrency/)
- ***(Hard) Benchmark: Implement a complete PoW blockchain in Python!***
- [Verifiable Random Functions](https://chain.link/education-hub/verifiable-random-function-vrf)
- [Proof-of-Stake/Ouroboros/BABE](https://wiki.polkadot.network/docs/learn-consensus)
- ***(Very Hard) Benchmark: Implement a VRF-based validator election mechanism, using a VRF library!***

## Scalability:
- [Payment Channels](https://happypeter.github.io/binfo/payment-channels.html)
- ***(Medium) Benchmark: Design a simple payment channel contract with Solidity***
- [HTLC](https://en.bitcoin.it/wiki/Hash_Time_Locked_Contracts)
- [Sparse-Merkle-Trees](https://medium.com/@kelvinfichter/whats-a-sparse-merkle-tree-acda70aeb837)
- ***(Medium) Benchmark: Implement a Sparse-Merkle-Tree in pure Python!***
- [Plasma / Plasma Cash](https://habr.com/en/articles/455988/)
- ***(Hard) Benchmark: Design a simple Plasma Cash contract with Solidity***
- [zkRollup](https://github.com/tanpx12/zk-rollup-tutorial)
- ***(Very Hard) Benchmark: Implement a simple zkRollup with Circom***

## Privacy:
- [CoinJoin](https://en.bitcoin.it/wiki/CoinJoin)
- [Stealth Addresses](https://vitalik.ca/general/2023/01/20/stealth.html)
- ***(Hard) Benchmark: Implement Stealth Addresses on Secp256k1 curve***
- [Ring Signatures](https://shainer.github.io/crypto/2017/10/15/ring-signatures.html)
- [Zcash/TornadoCash](https://github.com/tornadocash/tornado-core)
- ***(Hard) Benchmark: Implement a simple TornadoCash circuit with Circom***

## Zero-Knowledge Proofs:
- [R1CS and QAP](https://medium.com/@VitalikButerin/quadratic-arithmetic-programs-from-zero-to-hero-f6d558cea649)
- ***(Hard) Benchmark: Implement a library for generation of R1CS circuits and QAP polynomials***
- [Zero-Knowledge proof circuit design](https://github.com/ziesha-network/zoro)
- ***(Medium) Benchmark: Design and implement various primitive circuits: bit-decomposition, is-zero, equality-check, comparison, multiplexer, hash-function***
- [Circom language](https://docs.circom.io/)
- [zkSTARKs](https://vitalik.ca/general/2017/11/09/starks_part_1.html)
- ***(Super Hard) Benchmark: Implement the zkSTARKs protocol in pure Python!***
- [Pinocchio protocol](https://eprint.iacr.org/2013/279.pdf)
- ***(Super Hard) Benchmark: Implement the Pinocchio zkSNARKs protocol in pure Python!***
