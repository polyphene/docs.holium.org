---
sidebar_label: inspect
sidebar_position: 2
---

# `inspect`

## Description

Command used to print metadata from a module.

### Usage

`holium module inspect <module-CID>`

### Return

The command will return either a code `0` (success) or `1` (error).

It will also print the metadata attached to a given module CID. If no metadata were provided when
importing the module nothing will be printed.
