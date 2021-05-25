---
title: Building an Oracle
tags: oracles, documentation
---

To build a price oracle on Byteco V2, you must first understand the
requirements for your use case. Once you understand the kind of price
average you require, it is a matter of storing the cumulative price
variable from the pair as often as necessary, and computing
the average price using two or more observations of the
cumulative price variables.

# Understanding requirements

To understand your requirements, you should first research the answer to the
following questions:

- Is data freshness important?
  I.e.: must the price average include the current price?
- Are recent prices more important than historical prices?
  I.e.: is the current price given more weight than historical prices?

Note your answers for the following discussion.

# Oracle Strategies

## Fixed windows

In the case where data freshness is not important and recent prices
are weighted equally with historical prices, it is enough to
store the cumulative price once per period (e.g. once per 24 hours.)



This example does not limit the maximum size of the fixed window, i.e.
it only requires that the window size is greater than 1 period (e.g. 24 hours).

## Moving averages


## Computing average prices



## No-maintenance option


Keydonix has developed a general purpose price feed oracle built on Byteco v2 that supports arbitrary time windows (up to 256 blocks) and doesn't require any active maintenance.
