# Design

The design of Holium closely followed aforementioned principles to describe in a very expressive and modular way any
data and transformation pipeline. While reference specifications can also be found in the documentation, this page is
dedicated to explain how it works in three simple incremental steps:

1. The representation of data and datasets.
2. The architecture of transformations.
3. The description of transformation pipelines.

## Representation of data

Any data in the Holium framework is serialized with one format: *Holium CBOR*. It is based on
the [Concise Binary Object Representation (CBOR)](https://cbor.io/), a standard supported by
the [Internet Engineering Task Force (IETF)](https://www.ietf.org/) and based on the popular JSON format. It requires no
schema and embraces a concise typed encoding system. Therefore, **anything that can be represented in a JSON file can be
used** in Holium. And most importantly, **any complex data (audio, image and video files for instance) can also be
used** thanks to CBOR type n°2, which natively handles byte strings.

Two edits are made to CBOR in order to make it truly modular in the framework.

First and foremost, *mappings* are prohibited. **Data representations are freed from any *key* that would lock it into a
specific semantics.** That way, the format **fosters data re-usability**, while contextual meta-data are freely attached
and detached at another level. One of the main benefit is that when it comes to data manipulation, transformations never
have to know specific string keys: they only manipulate arrays and indexes.

![holium-cbor-key-layer](/img/docs/design/holium-cbor-key-layer.svg)

As an example, in Holium, a transformation responsible for performing a euclidean division would never require a fixed
naming of its input parameters. At the protocol-level, it would never manipulate mapping
like `{ "dividend": 1071, "divisor": 462 }`, but only an array containing data to be transformed: `[ 1071, 462 ]`.
However, this array is later used, whatever the semantics, it will consistently stay the same array, with a unique identifier,
to which any contextual information (in this case, the keys `"dividend"` and `"divisor"`) can be attached at any moment.

The second adjustment to the original CBOR specification is the introduction of linked data to represent any recursive
structure. In Holium, scalar data (booleans, numbers, strings,…) are represented in individual blocks, each one with
their own unique identifier, to which points any recursive structure through linked data.

![holium-data-fragmentation-without-links](/img/docs/design/holium-data-fragmentation-without-links.svg)

In this example, three scalar values are represented on the left: the numbers `21`,  `462` and `1071`. Each one of their
resides in its own block, can be formatted as a proper Holium CBOR object, and has a unique identifier.

On the right are shown representations of two recursive values: `[ 1071, 462 ]` and `[ [ 1071, 462 ], 21 ]`. When
formatted with Holium CBOR, such arrays do not hold scalar values directly, but identifiers of these values instead.

![holium-data-fragmentation-with-links](/img/docs/design/holium-data-fragmentation-with-links.svg)

Arrays thus only hold identifiers recursively linking them towards atomized scalar data. Values of all types, scalar or
recursive, thus benefit from identifiers that both uniquely identify their content and maximize their re-usability.

## The architecture of transformations

Building on the modularity of the data representation format, data is repeatedly transformed
by [pure functions](https://en.wikipedia.org/wiki/Pure_function) executed in a WebAssembly (Wasm) runtime.

WebAssembly is an open standard designed and maintained by the [World Wide Web Consortium (W3C)](https://www.w3.org/).
In the words of its creators, it is *a safe, portable, low-level code format designed for efficient execution and
compact representation*.[^1]

[^1]: [Introduction of the WebAssembly Core Specification](https://www.w3.org/TR/wasm-core-1/#introduction%E2%91%A2), W3C.

Looking at the evolution of serverless architectures, WebAssembly is a logical successor to containers, enabling to move
focus from stack implementation to business logic, embracing the benefits of function-based designs.

![execution-environment-json](/img/docs/design/execution-environment-json.svg)

Each transformation thus run in an efficient sandboxed environment. A program responsible for running a euclidean
division could for instance be written in Rust, compiled into Wasm bytecode and executed in this environment. With
Holium, the modularity of the data format allows to instantiate the program with just the data it requires, let it
execute its logic and return the result.

![execution-environment](/img/docs/design/execution-environment.svg)

As mentioned in the previous section, input and output data, at the edges of the execution, are formatted with Holium
CBOR and hold no semantic information. To allow transformation developers to still use their own internal semantics
while not imposing it to pipeline designers and any other layer in the architecture, SDKs allow to easily translate
input and output Holium CBOR parameters from and to internal structures.

This is one of the core elements of the design of Holium: **pure functions, given some input parameters in Holium CBOR
format, are executed in WebAssembly runtimes and return output data in Holium CBOR format**. As both data and
transformation designs are extremely modular, this logically leads to flexible definitions of pipeline structures.

## Description of pipelines

As in Holium every data items are ultimately united by a common format, and this format is the only one used for input
and output parameters of transformations, it becomes very handy to chain transformations. This, combined with the fact
that Holium CBOR allows extensive manipulation of values using indexes only, chaining transformations and creating
pipelines of any complexity and size basically comes down to describing simple connections between indexes.

![holium-cbor-connections](/img/docs/design/holium-cbor-connections.svg)

In this example, transformations are chained to perform the euclidean algorithm and find the greatest common divisor of
two initial values. The remainder (second output) of the first transformation is simply connected to the divisor entry (
second input) of the second one.

![holium-cbor-connections-with-pipeline-info](/img/docs/design/holium-cbor-connections-with-pipeline-info.svg)

Identifying this construction with indexes, we manage to express complex pipelines with fairly simple structures.
Pipelines, internally described as directed acyclic graph, of any shapes can all in the end be reduced to this kind of
set of connections. Depending on the type of information the nodes of these graphs hold, we may use them to describe
data itself with its history like in this example, as well as to share only its paths made of *dry* transformations with
no specific data, or to attach any other information of interest in the context of data processing.

![holium-data-fragmentation-all-types](/img/docs/design/holium-data-fragmentation-all-types.svg)

Apart from scalar and recursive data studied above, all these other components are also built on linked data, preserving
their readiness for modularity and scalability, and offering them unique identifiers.

To conclude this introduction to the core design of Holium, we may synthesize its main characteristics with the three
same steps:

1. The Holium CBOR format allows to represent any data (scalar and recursive, structured and complex) in a unified way.
   It frees data from any semantic lock at the transformation layer, fosters its re-usability by atomizing it, and
   provides any item of data with a unique identifier.
2. Transformations are pure functions run inside a WebAssembly environment that only ingests and digests data in Holium
   CBOR format. SDKs in multiple languages allow developers of transformations to seamlessly translate input and output
   data into any internal structure, and integrate their modules into the Holium framework.
3. Pipeline structures of any topology can be described in a unified way, connecting input and output indexes of chained
   transformations. The construction of these structures offers them unique identifiers and make them capable of holding
   information of many types (results of execution, actual Wasm bytecode,…), efficiently attached with linked data.