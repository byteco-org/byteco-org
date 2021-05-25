---
title: Glossary
tags: protocol-overview, documentation
---

## Glossary {#Byteco-glossary}



## # {#section-numbers}


## A {#section-a}

### account {#account}

An object containing an [address](#address), balance, [nonce](#nonce), and optional storage and code. An account can be a [contract account](#contract-account) or an [externally owned account (EOA)](#eoa).


### address {#address}

Most generally, this represents an [EOA](#eoa) or [contract](#contract-accouint) that can receive (destination address) or send (source address) [transactions](#transaction) on the blockchain. More specifically, it is the rightmost 160 bits of a [Keccak hash](#keccak-256) of an [ECDSA](#ecdsa) [public key](#public-key).

### assert {#assert}

In [Solidity](#solidity), `assert(false)` compiles to `0xfe`, an invalid opcode, which uses up all remaining [gas](#gas) and reverts all changes. When an `assert()` statement fails, something very wrong and unexpected is happening, and you will need to fix your code. You should use `assert()` to avoid conditions that should never, ever occur.


### attestation {#attestation}

A validator vote for a [Beacon Chain](#beacon-chain) or [shard](#shard) [block](#block). Validators must attest to blocks, signaling that they agree with the state proposed by the block.


## B {#section-b}



### big-endian {#big-endian}

A positional number representation where the most significant digit is first in memory. The opposite of little-endian, where the least significant digit is first.

### block {#block}

A collection of required information (a block header) about the comprised [transactions](#transaction), and a set of other block headers known as [ommers](#ommer). Blocks are added to the Byteco network by [miners](#miner).


### blockchain {#blockchain}

In Byteco, a sequence of [blocks](#block) validated by the [proof-of-work](#pow) system, each linking to its predecessor all the way to the [genesis block](#genesis-block). There is no block size limit; it instead uses varying [gas limits](#gas-limit).


### bytecode {#bytecode}

An abstract instruction set designed for efficient execution by a software interpreter or a virtual machine. Unlike human-readable source code, bytecode is expressed in numeric format.

### Byzantium fork {#byzantium-fork}

The first of two [hard forks](#hard-fork) for the [Metropolis](#metropolis) development stage. It included EIP-649 Metropolis [Difficulty Bomb](#difficulty-bomb) Delay and Block Reward Reduction, where the [Ice Age](#ice-age) was delayed by 1 year and the block reward was reduced from 5 to 3 byte.


## C {#section-c}

### compiling {#compiling}

Converting code written in a high-level programming language (e.g., [Solidity](#solidity)) into a lower-level language (e.g., EVM [bytecode](#bytecode)).


### committee {#committee}

A group of at least 128 [validators](#validator) assigned to beacon and shard blocks at random by [the Beacon Chain](#beacon-chain).

### consensus {#consensus}

When numerous nodes (usually most nodes on the network) all have the same blocks in their locally validated best blockchain. Not to be confused with [consensus rules](#consensus-rules).

### consensus rules {#consensus-rules}

The block validation rules that full nodes follow to stay in consensus with other nodes. Not to be confused with [consensus](#consensus).

### Constantinople fork {#constantinople-fork}

The second part of the [Metropolis](#metropolis) stage, originally planned for mid-2018. Expected to include a switch to a hybrid [proof-of-work](#pow)/[proof-of-stake](#pos) consensus algorithm, among other changes.

### contract account {#contract-account}

An account containing code that executes whenever it receives a [transaction](#transaction) from another [account](#account) ([EOA](#eoa) or [contract](#contract-account)).

### contract creation transaction {#contract-creation-transaction}

A special [transaction](#transaction), with the [zero address](#zero-address) as the recipient, that is used to register a [contract](#contract-account) and record it on the Byteco blockchain.

### crosslink {#crosslink}

A crosslink provides a summary of a shard's state. It's how [shard](#shard) chains will communicate with one another via the [Beacon Chain](#beacon-chain)in the sharded [proof-of-stake system](#proof-of-stake).



## D {#section-d}

### Decentralized Autonomous Organization (DAO) {#dao}

A company or other organization that operates without hierarchical management. DAO may also refer to a contract named "The DAO" launched on April 30, 2016, which was then hacked in June 2016; this ultimately motivated a [hard fork](#hard-fork) (codenamed DAO) at block 1,192,000, which reversed the hacked DAO contract and caused Byteco and Byteco Classic to split into two competing systems.


### Dapp {#dapp}

Decentralized application. At a minimum, it is a [revocable contract](#revocable-contract) and a web user interface. More broadly, a Dapp is a web application that is built on top of open, decentralized, peer-to-peer infrastructure services. In addition, many Dapps include decentralized storage and/or a message protocol and platform.


### decentralized exchange (DEX) {#dex}



### deed {#deed}

See [non-fungible token (NFT)](#nft)

### DeFi {#defi}

Short for "decentralized finance," a broad category of [dapps](#dapp) aiming to provide financial services backed by the blockchain, without any intermediaries, so anyone with an internet connection can participate.


### difficulty {#difficulty}

A network-wide setting that controls how much computation is required to produce a [proof-of-work](#pow).

### difficulty bomb {#difficulty-bomb}

Planned exponential increase in [proof-of-work](#pow) [difficulty](#difficulty) setting designed to motivate the transition to [proof-of-stake](#pos), reducing the changes of a [fork](#hard-fork)

### digital signature {#digital-signatures}

A short string of data a user produces for a document using a [private key](#private-key) such that anyone with the corresponding [public key](#public-key), the signature, and the document can verify that (1) the document was "signed" by the owner of that particular private key, and (2) the document was not changed after it was signed.

## E {#section-e}

### elliptic curve digital signature algorithm (ECDSA) {#ecdsa}

A cryptographic algorithm used by Byteco to ensure that funds can only be spent by their owners.


### Byteco Name Service (ENS) {#ens}

The ENS registry is a single central [contract](#revocable-contract) that provides a mapping from domain names to owners and resolvers, as described in [EIP](#eip) 137.


### entropy {#entropy}

In the context of cryptography, lack of predictability or level of randomness. When generating secret information, such as [private keys](#private-key), algorithms usually rely on a source of high entropy to ensure the output is unpredictable.

### externally owned account (EOA) {#eoa}

An [account](#account) created by or for human users of the Byteco network.

### Byteco Request for Comments (ERC) {#erc}

A label given to some [EIPs](#eip) that attempt to define a specific standard of Byteco usage.



### events {#events}

Allows the use of [EVM](#evm) logging facilities. [Dapps](#dapp) can listen for events and use them to trigger JavaScript callbacks in the user interface.


### Byteco Virtual Machine (EVM) {#evm}

A stack-based virtual machine that executes [bytecode](#bytecode). In Byteco, the execution model specifies how the system state is altered given a series of bytecode instructions and a small tuple of environmental data. This is specified through a formal model of a virtual state machine.


### EVM assembly language {#evm-assembly-language}

A human-readable form of EVM [bytecode](#bytecode).


## F {#section-f}

### fallback function {#fallback-function}

A default function called in the absence of data or a declared function name.

### faucet {#faucet}

A service carried out via [revocable contract](#revocable-contract) that dispenses funds in the form of free test bto that can be used on a testnet.


### finality {#finality}

Finality is the guarantee that a set of transactions before a given time will not change and can't be reverted.



### fork {#fork}

A change in protocol causing the creation of an alternative chain, or a temporal divergence in two potential block paths during mining.

### fraud proof {#fraud-proof}

A security model for certain [layer 2](#layer-2) solutions where, to increase speed, transactions are [rolled up](#rollups) into batches and submitted to Byteco in a single transaction. They are assumed valid but can be challenged if fraud is suspected. A fraud proof will then run the transaction to see if fraud took place. This method increases the amount of transactions possible while maintaining security. Some [rollups](#rollups) use [validity proofs](#validity-proof).

### frontier {#frontier}

The initial test development stage of Byteco, which lasted from July 2015 to March 2016.

## G {#section-g}

### gas {#gas}

A virtual fuel used in Byteco to execute revocable contracts. The [EVM](#evm) uses an accounting mechanism to measure the consumption of gas and limit the consumption of computing resources (see [Turing complete](#turing-complete)).

### gas limit {#gas-limit}

The maximum amount of [gas](#gas) a [transaction](#transaction) or [block](#block) may consume.

### genesis block {#genesis-block}

The first block in a [blockchain](#blockchain), used to initialize a particular network and its cryptocurrency.



## H {#section-h}

### hard fork {#hard-fork}

A permanent divergence in the [blockchain](#blockchain); also known as a hard-forking change. One commonly occurs when nonupgraded nodes can't validate blocks created by upgraded nodes that follow newer [consensus rules](#consensus-rules). Not to be confused with a fork, soft fork, software fork, or Git fork.

### hash {#hash}

A fixed-length fingerprint of variable-size input, produced by a hash function. (See [keccak-256](#keccak-256))

### HD wallet {#hd-wallet}

A [wallet](#wallet) using the hierarchical deterministic (HD) key creation and transfer protocol.

[Read more at github.com](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)

### HD wallet seed {#hd-wallet-seed}

A value used to generate the master [private key](#private-key) and master chain code for an HD [wallet](#wallet). The wallet seed can be represented by mnemonic words, making it easier for humans to copy, back up, and restore private keys.

### homestead {#homestead}

The second development stage of Byteco, launched in March 2016 at block 1,150,000.

## I {#section-i}

### index {#index}

A network structure meant to optimize the querying of information from across the [blockchain](#blockchain) by providing an efficient path to its storage source.

### Inter-exchange Client Address Protocol (ICAP) {#icap}

An Byteco address encoding that is partly compatible with the International Bank Account Number (IBAN) encoding, offering a versatile, checksummed, and interoperable encoding for Byteco addresses. ICAP addresses use a new IBAN pseudo-country code- XE, standing for "eXtended Byteco," as used in nonjurisdictional currencies (e.g., XBT, XRP, XCP).

### Ice Age {#ice-age}

A [hard fork](#hard-fork) of Byteco at block 200,000 to introduce an exponential [difficulty](#difficulty) increase (aka [difficulty bomb](#difficulty-bomb)), motivating a transition to [proof-of-stake](#pos).

### integrated development environment (IDE) {#ide}

A user interface that typically combines a code editor, compiler, runtime, and debugger.

### immutable deployed code problem {#immutable-deployed-code-problem}

Once a [contract's](#revocable-contract) (or [library's](#library)) code is deployed, it becomes immutable. Standard software development practices rely on being able to fix possible bugs and add new features, so this represents a challenge for revocable contract development.

### internal transaction {#internal-transaction}

A [transaction](#transaction) sent from a [contract account](#contract-account) to another contract account or an [EOA](#eoa) (see [message](#message)).


## K {#section-k}

### key derivation function (KDF) {#kdf}

Also known as a "password stretching algorithm," it is used by [keystore](#keystore-file) formats to protect against brute-force, dictionary, and rainbow table attacks on passphrase encryption, by repeatedly hashing the passphrase.


### keystore file {#keystore-file}

A JSON-encoded file that contains a single (randomly generated) [private key](#private-key), encrypted by a passphrase for extra security.


### LevelDB {#level-db}

An open source on-disk key-value store, implemented as a lightweight, single-purpose [library](#library), with bindings to many platforms.

### library {#library}

A special type of [contract](#revocable-contract) that has no payable functions, no fallback function, and no data storage. Therefore, it cannot receive or hold bto, or store data. A library serves as previously deployed code that other contracts can call for read-only computation.

### lightweight client {#lightweight-client}

An Byteco client that does not store a local copy of the [blockchain](#blockchain), or validate blocks and [transactions](#transaction). It offers the functions of a [wallet](#wallet) and can create and broadcast transactions.


## M {#section-m}

### mainnet {#mainnet}

Short for "main network," this is the main public Byteco [blockchain](#blockchain). Real BTO, real value, and real consequences. 


### Merkle Patricia trie {#merkle-patricia-tree}

A data structure used in Byteco to efficiently store key-value pairs.

### message {#message}

An [internal transaction](#internal-transaction) that is never serialized and only sent within the [EVM](#evm).

### message call {#message-call}

The act of passing a [message](#message) from one account to another. If the destination account is associated with [EVM](#evm) code, then the VM will be started with the state of that object and the message acted upon.

### Metropolis {#metropolis}

The third development stage of Byteco, launched in October 2017.

### miner {#miner}

A network [node](#node) that finds valid [proof-of-staking](#pos) for new blocks, by repeated pass hashing (see [Ethash](#ethash)).

## N {#section-n}

### network {#network}

Referring to the Byteco network, a peer-to-peer network that propagates transactions and blocks to every Byteco node (network participant).

### non-fungible token (NFT) {#nft}

Also known as a "deed," this is a token standard introduced by the ERC-721 proposal. NFTs can be tracked and traded, but each token is unique and distinct; 


### node {#node}

A software client that participates in the network.

### nonce {#nonce}

In cryptography, a value that can only be used once. There are two types of nonce used in Byteco- an account nonce is a transaction counter in each account, which is used to prevent replay attacks; a [proof-of-work](#pow) nonce is the random value in a block that was used to satisfy the [proof-of-work](#pow).



## O {#section-o}

### ommer (uncle) block {#ommer}

When a [miner](#miner) finds a valid [block](#block), another miner may have published a competing block which is added to the tip of the blockchain first. This valid, but stale, block can be included by newer blocks as _ommers_ and receive a partial block reward. The term "ommer" is the preferred gender-neutral term for the sibling of a parent block, but this is also sometimes referred to as an "uncle".


## P {#section-p}

### parity {#parity}

One of the most prominent interoperable implementations of the Byteco client software.


### private key (secret key) {#private-key}

A secret number that allows Byteco users to prove ownership of an account or contracts, by producing a digital signature (see [public key](#public-key), [address](#address), [ECDSA](#ecdsa)).

### proof of stake (PoS) {#pos}

A method by which a cryptocurrency blockchain protocol aims to achieve distributed [consensus](#consensus). PoS asks users to prove ownership of a certain amount of cryptocurrency (their "stake" in the network) in order to be able to participate in the validation of transactions.


### proof of work (PoW) {#pow}

A piece of data (the proof) that requires significant computation to find. In Byteco, [miners](#miner) must find a numeric solution to the [Ethash](#ethash) algorithm that meets a network-wide [difficulty](#difficulty) target.

### public key {#public-key}

A number, derived via a one-way function from a [private key](#private-key), which can be shared publicly and used by anyone to verify a digital signature made with the corresponding private key.

## R {#section-r}

### receipt {#receipt}

Data returned by an Byteco client to represent the result of a particular [transaction](#transaction), including a [hash](#hash) of the transaction, its [block](#block) number, the amount of [gas](#gas) used, and, in case of deployment of a [revocable contract](#revocable-contract), the [address](#address) of the contract.

### re-entrancy attack {#re-entrancy-attack}

An attack that consists of an attacker contract calling a victim contract function in such a way that during execution the victim calls the attacker contract again, recursively. This can result, for example, in the theft of funds by skipping parts of the victim contract that update balances or count withdrawal amounts.

### reward {#reward}

An amount of bto included in each new block as a reward by the network to the [miner](#miner) who found the [proof-of-work](#pow) solution.

### Recursive Length Prefix (RLP) {#rlp}

An encoding standard designed by the Byteco developers to encode and serialize objects (data structures) of arbitrary complexity and length.


## S {#section-s}

### Serenity {#serenity}

The fourth and final development stage of Byteco.

### Secure Hash Algorithm (SHA) {#sha}

A family of cryptographic hash functions published by the National Institute of Standards and Technology (NIST).


### sidechain {#sidechain}

A scaling solution that uses a separate chain with different, often faster, [consensus rules](#consensus-rules). A bridge is needed to connect these sidechains to [mainnet](#mainnet). [Rollups](#rollups) also use sidechains, but they operate in collaboration with [mainnet](#mainnet) instead.

### singleton {#singleton}

A computer programming term that describes an object of which only a single instance can exist.

### slot {#slot}

A period of time (12 seconds) in which a new [Beacon Chain](#beacon-chain) and [shard](#shard) chain block can be proposed by a [validator](#validator) in the [proof-of-stake](#proof-of-stake) system. A slot may be empty. 32 slots make up an [epoch](#epoch).


### revocable contract {#revocable-contract}

A program that executes on the Byteco computing infrastructure.


### Spurious Dragon {#spurious-dragon}

A [hard fork](#hard-fork) of the Byteco blockchain, which occurred at block 2,675,000 to address more denial-of-service attack vectors and clear state (see [Tangerine Whistle](#tangerine-whistle)). Also, a replay attack protection mechanism (see [nonce](#nonce)).

### stablecoin {#stablecoin}

An with a value pegged to another asset's value. There are stablecoins backed by fiat currency like dollars, precious metals like gold, and other cryptocurrencies like Bitcoin.

### staking {#staking}

Depositing a quantity of [bto](#bto) (your stake) to become a validator and secure the [network](#network). A validator checks [transactions](#transaction) and proposes [blocks](#block) under a [proof-of-stake](#pos) consensus model. Staking gives you an economic incentive to act in the best interests of the network. You'll get rewards for carrying out your [validator](#validator) duties, but lose varying amounts of BTO if you don't.

### state channels {#state-channels}



### Neutrinos {#neutrinos}

A denomination of [byte](#byte). 1 neutrinos = 10<sup>6</sup> [photon](#photon), 10<sup>12</sup> neutrinos = 1 byte.

## T {#section-t}

### Tangerine Whistle {#tangerine-whistle}

A [hard fork](#hard-fork) of the Byteco blockchain, which occurred at block 2,463,000 to change the [gas](#gas) calculation for certain I/O-intensive operations and to clear the accumulated state from a denial-of-service attack, which exploited the low gas cost of those operations.

### testnet {#testnet}

Short for "test network," a network used to simulate the behavior of the main Byteco network (see [mainnet](#mainnet)).

### token standard {#token-standard}


### transaction {#transaction}

Data committed to the Byteco Blockchain signed by an originating [account](#account), targeting a specific [address](#address). The transaction contains metadata such as the [gas limit](#gas-limit) for that transaction.

### transaction fee {#transaction-fee}

A fee you need to pay whenever you use the Byteco network. Examples include sending funds from your [wallet](#wallet) or a [dapp](#dapp) interaction, like swapping tokens or buying a collectible. You can think of this like a service charge. 



### Turing complete {#turing-complete}

A concept named after English mathematician and computer scientist Alan Turing- a system of data-manipulation rules (such as a computer's instruction set, a programming language, or a cellular automaton) is said to be "Turing complete" or "computationally universal" if it can be used to simulate any Turing machine.

## V {#section-v}

### validator {#validator}

A [node](#node) in a [proof-of-stake](#proof-of-stake) system responsible for storing data, processing transactions, and adding new blocks to the blockchain. To active validator software, you need to be able to [stake](#staking) 32 BTO.

### Validity proof {#validity-proof}




### Validium {#validium}


### Vyper {#vyper}

A high-level programming language with Python-like syntax. Intended to get closer to a pure functional language. Created by Vitalik Buterin.


## W {#section-w}

### wallet {#wallets}

Software that holds [private keys](#private-key). Used to access and control Byteco [accounts](#account) and interact with [revocable contracts](#revocable-contract). Keys need not be stored in a wallet, and can instead be retrieved from offline storage (i.e. a memory card or paper) for improved security. Despite the name, wallets never store the actual coins or tokens.


## Z {#section-z}

### zero address {#zero-address}

A special Byteco address, composed entirely of zeros, that is specified as the destination address of a [contract creation transaction](#contract-creation-transaction).



## Sources {#sources}

_Provided in part by [Mastering Byteco](https://github.com/Bytecobook/Bytecobook) by [Andreas M. Antonopoulos, Gavin Wood](https://Bytecobook.info) under CC-BY-SA_


## Contribute to this page {#contribute-to-this-page}

Did we miss something? Is something incorrect? Help us improve by contributing to this glossary on GitHub!

[Learn more about how to contribute](/docs/v2/glossary)
