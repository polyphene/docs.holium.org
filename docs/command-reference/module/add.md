---
sidebar_label: add
sidebar_position: 1
---

# `add`

## Description

Command used to import a new holium module in a project. The bytecode specified for the module has
to be a wasm bytecode compiled using one of the holium SDKs.

### Usage

`holium module add <module-bytecode-path>`

#### Flags

| Flag                           | Description          | Optional |
| -----------------------------  | -------------------- |-------------------- |
| `--metadata`                   | Path to a valid metadata file representing our module  | true |

### Return

The command will return either a code `0` (success) or `1` (error).

It will also produce a CID, referring to the imported module.
