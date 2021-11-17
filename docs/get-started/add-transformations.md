---
sidebar_label: 'Add a transformation'
sidebar_position: 4
---

# Add modules

Following the creation of data sources, we will now add the next elements in line: Holium **transformations**.

Holium **transformations** are contained in **modules** and can be considered as functions. Holium
**modules** are compiled Wasm bytecodes that follow the [SDK specifications](../reference/sdk/specifications.md).

In this tutorial we will be using **modules** compiled from Rust code that makes use of the Rust SDK. For 
more information on how it works please refer to the [dedicated reference](../reference/sdk/rust-sdk/usage.md).

As we want to keep our pipeline simple we will only add a single **transformation** in our pipeline DAG.

The **module** code that we are using can be found in the `./module/avocado_operations` folder of the
_Getting started_ repostiory.

To build the module we use native `cargo build` sub-command:
```shell
$ cd module/avocado_operation
$ cargo build --target wasm32-unknown-unknown --release
```

Following the build, the wasm bytecode can be found at `./module/avocado_operations/target/wasm32-unknown-unknown/release/avocado_operations.wasm`.
If you do not wish to build the wasm file yourself it can be found in `./assets/wasm/avocado_operations.wasm`.

To create a **transformation** we may then use the `holium transformation create` sub-command:

```shell
$ holium transformation create avocado_operations \
        --bytecode ./assets/wasm/avocado_operations.wasm \
        --handle get_sales_by_year \
        --json-schema-in '
        {
            "type": "array",
            "prefixItems": [{
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "plu_4046": { "type": "number" },
                        "plu_4225": { "type": "number" },
                        "plu_4770": { "type": "number" },
                        "date": { "type": "string" },
                        "average_price": { "type": "number" },
                        "total_volume": { "type": "number" },
                        "total_bags": { "type": "number" },
                        "small_bags": { "type": "number" },
                        "large_bags": { "type": "number" },
                        "xlarge_bags": { "type": "number" },
                        "avocado_type": { "type": "string" },
                        "year": { "type": "number" },
                        "geography": { "type": "string" }
                    }
                }
            }, {
                "type": "number"
            }]
        }
        ' \
        --json-schema-out '
         {
            "type": "array",
            "prefixItems": [{
                "type": "array",
                "items": {
                    "type": "array",
                    "prefixItems": [{
                        "type": "string"
                    }, {
                        "type": "number"
                    }]
                }
            }]
        }
        '
new object created: avocado_operation
```


Once it is done we can list our available **transformation** by using the `holium transformation list`
sub-command:

```shell
$ holium transformation list
┌────────────────────┬───────────────────┬─────────────────┬──────────────────────────────┬──────────────────────────────┐
│ NAME               │ HANDLE            │ BYTECODE (size) │ IN (JSON Schema)             │ OUT (JSON Schema)            │
├────────────────────┼───────────────────┼─────────────────┼──────────────────────────────┼──────────────────────────────┤
│ avocado_operations │ get_sales_by_year │ 2.09 MB         │ {                            │ {                            │
│                    │                   │                 │   "type": "array",           │   "type": "array",           │
│                    │                   │                 │   "prefixItems": [           │   "prefixItems": [           │
│                    │                   │                 │     {                        │     {                        │
│                    │                   │                 │       "type": "array",       │       "type": "array",       │
│                    │                   │                 │       "items": {             │       "items": {             │
│                    │                   │                 │         "type": "object",    │         "type": "array",     │
│                    │                   │                 │         "properties": {      │         "prefixItems": [     │
│                    │                   │                 │           "plu_4046": {      │           {                  │
│                    │                   │                 │             "type": "number" │             "type": "string" │
│                    │                   │                 │           },                 │           },                 │
│                    │                   │                 │           "plu_4225": {      │           {                  │
│                    │                   │                 │             "type": "number" │             "type": "number" │
│                    │                   │                 │  ...                         │           }                  │
│                    │                   │                 │                              │         ]                    │
│                    │                   │                 │                              │    ...                       │
└────────────────────┴───────────────────┴─────────────────┴──────────────────────────────┴──────────────────────────────┘
```

Currently, we have two types of objects in our project, **data sources** and **modules**. Before building our
pipeline we will need to add one last element: a **shaper**.

