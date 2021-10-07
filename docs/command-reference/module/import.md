---
sidebar_label: import
sidebar_position: 1
---

# `import`

## Description

Command used to import a new Holium module in a project. The bytecode specified for the module has
to be a wasm bytecode compiled using one of the holium SDKs.

### Usage

`holium module add <module-bytecode-path>`

## Options

| Flag                           | Description          | Optional |
| -----------------------------  | -------------------- |-------------------- |
| `--metadata`                   | Path to a valid metadata file representing our module  | true |

## Return

The command will return either a code `0` (success) or `1` (error).

It will also produce a CID, referring to the imported module.
