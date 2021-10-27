---
sidebar_label: 'Add modules'
sidebar_position: 4
---

# Add modules

Following the importation of data sources we will now add the next elements in line: Holium **modules**.

Holium **modules** are compiled Wasm bytecodes that follows the [SDK specifications](../reference/sdk/specifications.md).

In this tutorial we will be using **modules** compiled from Rust code that integrates the Rust SDK. For 
more information on how it works please refer to the [dedicated reference](../reference/sdk/rust-sdk/usage.md).

The **modules** we will be using can be found in the [tutorial repository](TODO_LINK_TO_THE_TUTORIAL_REPOSITORY).
A dedicated folder is also provided with [compiled assets](TODO_LINK_TO_COMPILE_ASSETS).

To add a module to the project we can use the [`holium transformation add`](TODO_LINK_TO_ADD_TRANSFORMATION):

```shell
$ holium transformation add --bytecode calculus.wasm

TODO
```

Make sure to add all **modules**' bytecode to your project. 

Once it is done we can list all available **modules** by using the [`holium transformation ls`](TODO_LINK_TRANSFORMATION_LS)
sub-command

```shell
$ holium transformation ls

TODO
```

Currently we have two types of objects in our project, data sources and **modules**. Before building our
pipeline we will need add one last element: a shaper.

