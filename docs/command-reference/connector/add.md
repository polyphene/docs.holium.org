---
sidebar_label: add
sidebar_position: 1
---

# `add`

## Description

Command used to create a new connection, linking a module input connector to another module 
output connector.

## Usage

`holium connector add <parent_transformation_idx>:<connector_selector> <child_transformation_idx>:<connector_selector>`

<!-- TODO properly specify ways to connect two transformations -->

## Return

The command will return either a code `0` (success) or `1` (error).

It will also produce a CID, referring to the new connector.
