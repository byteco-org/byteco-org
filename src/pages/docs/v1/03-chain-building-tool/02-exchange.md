---
title: Exchange
---

<Info>
Byteco V1, while still fully functional, is no longer under active development. Looking for <Link to='/docs/v2/'>V2 documentation</Link>?
</Info>

# setup

| Parameter  |                        Description |
| :--------- | ---------------------------------: |
| token_addr | Ethereum address of an ERC20 Token |


## Web3



# addLiquidity

| Parameter     | Type    |                Description |
| :------------ | :------ | -------------------------: |
| msg.value     | uint256 |        Amount of ETH added |
| min_liquidity | uint256 |   Minimum minted liquidity |
| max_tokens    | uint256 | Maximum ERC20 tokens added |
| deadline      | uint256 |       Transaction deadline |

| Returns |                                   |
| :------ | --------------------------------: |
| uint256 | Amount of liquidity tokens minted |



## Web3

```javascript
exchangeContract.methods.addLiquidity(min_liquidity, max_tokens, deadline).send({ value: ethValue })
```

# removeLiquidity

| Parameter  | Type    |                  Description |
| :--------- | :------ | ---------------------------: |
| amount     | uint256 |   Amount of liquidity burned |
| min_eth    | uint256 |          Minimum ETH removed |
| min_tokens | uint256 | Minimum ERC20 tokens removed |
| deadline   | uint256 |         Transaction deadline |

| Returns |                                 |
| :------ | ------------------------------: |
| uint256 |           Amount of ETH removed |
| uint256 | Amount of ERC20 tokens removed. |

## Smart Contract

```python
removeLiquidity(
    amount: uint256;
    min_eth: uint256,
    min_tokens: uint256,
    deadline: uint256
): (uint256, uint256)
```

## Web3

