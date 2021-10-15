---
sidebar_position: 1
---

# Rationale

The transformations ran in the Holium protocol are Wasm based, meaning that code developed to run on the CLI
has to be compiled to Wasm bytecode.

As we aim for a global approach with our protocol we try to encompass as many languages as possible, allowing
for many codebase to be usable. In that regard, one SDK should be developed per language that we wish
to be usable in the Holium protocol. 

The role of an Holium SDK is to adapt a codebase to run within the Holium protocol by following the 
[specifications](./specifications.md). 

At first the focus is most likely to be pointed on languages that currently support direct compilation 
to Wasm (mostly statically typed languages). About dynamically typed languages some research are currently
underway to study how they could be integrated as a base for transformation.



