---
sidebar_label: run
sidebar_position: 6
---

# `run`

## Description

The run command executes a transformation by taking data as input.

### Usage

`holium run <transformation-cid> <data-cid>`

Data can be either specified in the CLI or coming from a portation.
<!-- TODO how to integrate portation -->

### Return

The command will return either a code `0` (success) or `1` (error) for now.

It will also produce a CID, referring to the generated data by the execution.
