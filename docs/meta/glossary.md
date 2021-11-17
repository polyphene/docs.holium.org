---
sidebar_label: 'Glossary'
sidebar_position: 1
---

# Glossary

## Concise Binary Object Representation (CBOR) {#cbor}

The Concise Binary Object Representation is a data format based on JSON, featuring small code and message size,
and extensibility.
In the Holium protocol, it is extended in a representation freed from any semantic lock, known as **HoliumCBOR**.
Read more on CBOR [documentation](https://cbor.io/).

## Connection {#connection}

A connection links two transformations in a pipeline. They are they edges of the underlying DAG.
See [Selector](#selector) for more details.

## Content Identifier (CID) {#cid}

A Content Identifier is a self-describing content-addressed label used to point to data in the interplanetary area or 
in [IPFS](https://ipfs.io/).
It is the core identifier used for IPFS and IPLD.
Find more on IPFS [documentation](https://docs.ipfs.io/concepts/content-addressing/).

## Directed acyclic graph (DAG) {#dag}

A directed acyclic graph (DAG) formally is a directed graph with no directed cycles.
It is made of nodes and edges, with each edge directed from one node to another, such that following those
directions will never form a closed loop.
They offer the characteristic of being capable of being topologically ordered,
by arranging the nodes as a linear ordering that is consistent with all edge directions.

In Holium, all transformation pipelines are directed acyclic graphs.

## HoliumCBOR

See [CBOR](#cbor).

## Module {#module}

[WebAssembly](#wasm) programs are organized into modules, which are the unit of deployment, loading, and compilation.
A module collects definitions for types, functions, tables, memories, and globals.

In Holium, the code for several pure functions can be placed in the same module.
For this reason, a [transformation](#transformation) holds a module bytecode and a *handle*.

## Multiformats

The Multiformats project is a collection of protocols that aim to future-proof systems today, used by [CIDs](#cid).
A key design principle is enhancing format values with self-description allowing for interoperability and protocol agility.
Read more about Multiformats [documentation](https://multiformats.io/).

## Pipeline

A pipeline, or transformation pipeline, is the structure in Holium that links atomic transformations. It is specified
as a [DAG](#dag) of nodes which hold data, sometimes [Wasm](#wasm) code, and are linked by [connections](#connection).

## Selector {#selector}

A selector is an expression, often represented as a JSON literal, describing traversal over a tree (or more generally a DAG)
and selecting a subset of nodes by *marking* them during the walk.

In Holium, selectors allow shaping data between transformations (nodes) of a pipeline (dag).
In that purpose, any connection (edge) holds a tail selector informing the parts of data from the parent node to handle,
and a head selector matching its cardinality and describing how to shape it into parts of the input parameter of the
child node.

Selectors used in Holium and specified in the reference [schema](../reference/design.md#selectors-and-connections)
are a subset of IPLD Selectors. Read more on IPLD [documentation](https://ipld.io/specs/selectors/).

## Transformation {#transformation}

Nodes of a pipeline effectively executing code to manipulate data are known in the Holium protocol as transformations.

They can be considered as pure functions taking one parameter in HoliumCBOR format, executing, and returning on HoliumCBOR
value in case of success.

In practice, a transformation is made of a Wasm [module](#module) and a string named *handle* informing on the name of the
function to be run.

## WebAssembly {#wasm}

WebAssembly (Wasm) is a *safe, portable, low-level code format* designed for efficient execution and compact
representation. In the Holium protocol, it is used as the common code format for all transformation nodes of a pipeline.
Read more on the [documentation](https://www.w3.org/TR/wasm-core-1/#introduction%E2%91%A2) by the World Wide Web Consortium.
