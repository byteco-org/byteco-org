---
title: Governance Reference
tags: governance, documentation
---

byteco protocol is goverened and upgraded by UNI token holders, using three distinct components; the UNI token, governance module, and Timelock. Together, these contracts allow the community to propose, vote, and implement changes to the byteco protocol.

Any addresses with more than 10M UNI delegated to it may propose governance actions, which contain finished, executable code. When a proposal is created, the community can cast their votes during a 3 day voting period. If a majority, and at least 4M votes are cast for the proposal, it is queued in the Timelock, and may be executed in a minimum of 2 days.

## Timelock

The Timelock contract can modify system parameters, logic, and contracts in a 'time-delayed, opt-out' upgrade pattern. Timelock has a hard-coded minimum delay of 2 days, which is the least amount of notice possible for a governance action. Each proposed action will be published at a minimum of 2 days in the future from the time of announcement. Major upgrades, such as changing the risk system, may have up to a 30 day delay. Timelock is controlled by the governance module; pending and completed governance actions can be monitored on the Timelock Dashboard.

![](images/gov_diagram-1.png)



# Key Events

## DelegateChanged


Emitted when an account changes its delegate.

## DelegateVotesChanged


Emitted when a delegate account's vote balance changes.

## ProposalCreated


Emitted when a new proposal is created.

## VoteCast



## ProposalCanceled



Emitted when a proposal has been canceled.

## ProposalQueued

```solidity
ProposalQueued(uint id, uint eta)
```
Emitted when a proposal has been queued in the Timelock.

## ProposalExecuted



Emitted when a proposal has been executed in the Timelock.


# Read-Only Functions: UNI
 
## Get Current Votes

```solidity
function getCurrentVotes(address account) returns (uint96)
```

Returns the balance of votes for an account as of the current block.

| Name           | Type      |                                                                                                                |
| :------------- | :-------- | :------------------------------------------------------------------------------------------------------------- |
| account        | `address` | Address of the account of which to retrieve the number of votes.                                               |

## Get Prior Votes


Returns the prior number of votes for an account at a specific block number. The block number passed must be a finalized block or the function will revert.

| Name           | Type      |                                                                                                                |
| :------------- | :-------- | :------------------------------------------------------------------------------------------------------------- |
| account        | `address` | Address of the account of which to retrieve the prior number of votes.                                         |
| blocknumber    | `uint`    | The block number at which to retrieve the prior number of votes.                                               |
|                |           |                                                                                                                |
| unnamed        | `uint96`  | The number of prior votes                                                                                      |

# State-Changing Functions: UNI

## Delegate



## Delegate By Signature



# Read-Only Functions: Governor Alpha

## Quorum Votes



## Proposal Threshold



## Proposal Max Operations



## Voting Delay




## Voting Period


## Get Actions


## Get Receipt


Returns a proposal ballot receipt of a given voter.

| Name           | Type      |                                                                                                                    |
| :------------- | :-------- | :----------------------------------------------------------------------------------------------------------------- |
| proposalId     | `uint`    | ID of the proposal in which to get a voter’s ballot receipt.                                                       |
| voter          | `address` | Address of the account of a proposal voter.                                                                        |
|                |           |                                                                                                                    |
| Receipt        | `struct`  | A Receipt struct for the ballot of the voter address.                                                              |

## State




## Queue

                                   |

## Cast Vote



## Cast Vote By Signature

