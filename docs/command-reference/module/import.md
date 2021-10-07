---
sidebar_label: import
sidebar_position: 1
---

# `import`

## Description

Command used to import a new Holium module in a project. The bytecode specified for the module has
to be a wasm bytecode compiled using one of the Holium SDKs.

### Usage

`holium module import <OPTIONS>`

## Options

| Flag                           | Description          | Optional |
| -----------------------------  | -------------------- |-------------------- |
| `--bytecode`                   | Path to a valid bytecode file of a Holium package  | true |
| `--metadata`                   | Path to a valid metadata file representing our module  | true |

## Return

It will also produce a CID, referring to the imported module.
