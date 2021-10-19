---
sidebar_label: 'Design'
sidebar_position: 1
---

# Design

On this page are defined the inner workings of the lowest storage layer in Holium, based on linked data, that gives
every component in the framework their unique identifiers.

In line with the vision and principles of the project, some objectives of the protocol are directly linked to
this layer: providing a way to always share bits of data together with their history, so that datasets are never cut
away from any lineage information; facilitate collaboration on data transformation pipelines;…

To define an object, it is often as useful to specify what it is not than what it is.

on one hand, the purpose of this layer is a **description** purpose. It basically serves as the lowest *self-describing
/ autonomous* storage layer, where archives of any information related to data transformation could lie. Its
construction focuses on **completeness** of stored objects, so that one identifier could identify whole unforgeable
archives, and **modularity** to foster re-usability of any component stored.

On the other hand, querying datasets based on or related to transformation pipelines, or comparing these assets, does
not figure in the scope of this architectural layer.

## Reference schema

:::note info
This document serves as the actual reference schema for all objects in the Holium framework. Indications related to testing and contributing can be found at the end of the document.
:::

To unlock collaboration in open networks, common loose frames of data representations are not enough and the very
representations need to be unified. Truly universal identifiers are required. That is why Holium takes advantage
of [multiformats](https://multiformats.io/) and [Content IDentifiers (CID)](https://github.com/multiformats/cid). With
these self-describing content-addressed identifiers, ready for distributed systems, the aim is to ensure that any object
in the framework may be represented in one unique way, that only depends on its content, never on external elements like
its location or creator. Users can then go beyond any problem of data representation and focus one what they actually
want to do with these objects.

Throughout this document, some rules are specified with the primary goal of enforcing deterministic representation of
all objects. Among these, the first ones are related to multiformat configuration. For any CID in the protocol:

- Multihashes use the BLAKE3 algorithm (code `0x1e`) with its default 32 byte output length.
- The `cbor` (code `0x51`) multicodec is used for serialization.

The model is defined as an [IPLD schema](https://ipld.io/docs/schemas/). For ease of understanding, the focus is first
put on the three important kinds enabling the representation of the transformation history of datasets, but the same
model also supports the description of other objects (data-free pipeline structures, metadata,...) specified afterwards.

#### Data

First kinds to be studied are the one in charge of data and datasets themselves. As covered in the design introduction,
scalar values are stored as they are while recursive structures are only made of links to other scalar or recursive data
structures.

Apart from the use of the `AnyScalar` union type to encompass all scalar values, this first excerpt of the schema also
introduces the [versioning strategy](#versioning) covered in more details in a dedicated section of this document.

```ipdsch
## =====
## This schema describes structures used in the Holium Framework.
##
## Version : 0
## =====

## AnyScalar defines a union of the basic non-complex kinds.
## Reference: https://github.com/ipld/ipld/blob/master/specs/schemas/schema-schema.ipldsch
type AnyScalar union {
	| Bool bool
	| String string
	| Bytes bytes
	| Int int
	| Float float
} representation kinded

## ScalarData_v0, the first kind of holium data objects, is a simple Copy of IPLD AnyScalar.
type ScalarData_v0 = AnyScalar

## ScalarDataEnvelope_v0 is an enveloped content pointing to ScalarData_v0.
type ScalarDataEnvelope_v0 &ScalarData_v0

## ScalarDataEnvelope_Typed_v0 is the typed version of ScalarData envelopes for protocol v0.
type ScalarDataEnvelope_Typed_v0 union {
    | ScalarDataEnvelope_v0 "sde_0"
} representation envelope {
    discriminantKey "typedVersion"
    contentKey "content"
}
```

As foreseen, the schema acknowledges recursive data structures as lists of links to other data values, scalar or
recursive.

```ipldsch
## RecursiveData_v0, the second kind of holium data objects, is a list of links towards other holium data blocks.
type RecursiveData_v0 [RecursiveDataElement_v0]

## RecursiveDataElement_v0 is a simple Copy of the Link kind.
## It is mostly a placeholder for the day IPLD specifications allows to create an expressive kinded union of links to both scalar
## and recursive data types.
type RecursiveDataElement_v0 = Link

## RecursiveDataEnvelope_v0 is an enveloped content pointing to RecursiveData_v0.
type RecursiveDataEnvelope_v0 &RecursiveData_v0

## RecursiveDataEnvelope_Typed_v0 is the typed version of RecursiveData envelopes for protocol v0.
type RecursiveDataEnvelope_Typed_v0 union {
    | RecursiveDataEnvelope_v0 "rde_0"
} representation envelope {
    discriminantKey "typedVersion"
    contentKey "content"
}
```

With these two first kinds, any data, either structured or complex, can equally be introduced in the Holium framework
and included in virtually any dataset. In the process, data re-usability is maximized as any data, scalar or not, will
always be represented in the exact same way and benefit from the exact content-based universal identifier, while
recursive data only hold links and never copies of the original data.

#### Execution

The second important kind is the one in charge of describing the result of the execution of a transformation. This part
of the architecture has also been introduced in the design introduction and, as a reminder, involves WebAssembly
functions ingesting and digesting datasets. More precisely, a transformation always ingest a single `RecursiveData`
object as an input parameter and, in case of success, also outputs a single `RecursiveData` object which respectively
hold all the input and output parameters of the transformation and may be (de)structured with the help of a
transformation SDK.

First, a module bytecode is represented with a dedicated kind.

```ipldsch
## ModuleBytecode_v0 is the type of data storing Wasm module bytecode.
## At some point, the [FlexibleByteLayout](https://github.com/ipld/specs/blob/master/data-structures/flexible-byte-layout.md)
## could be a better implementation choice.
type ModuleBytecode_v0 bytes

## ModuleBytecodeEnvelope_v0 is an enveloped content pointing to ModuleBytecode_v0.
type ModuleBytecodeEnvelope_v0 &ModuleBytecode_v0

## ModuleBytecodeEnvelope_Typed_v0 is the typed version of ModuleBytecode envelopes for protocol v0.
type ModuleBytecodeEnvelope_Typed_v0 union {
    | ModuleBytecodeEnvelope_v0 "mbe_0"
} representation envelope {
    discriminantKey "typedVersion"
    contentKey "content"
}
```

Then comes the kind describing the result of an execution itself. That is, for a given module and handle, pointing to a
specific pure function in the module, and given an input value, one may use this type to express the result of the
execution, attaching an exit status and, in case of success, an output data.

This very kind is a fundamental element of the expression of the history of transformations of any dataset.

```ipldsch
## Execution_v0 is a kind that allows expressing the result of the execution of a specific transformation on specific
## data. The transformation is identified through its bytecode and handle, input and (optional) output of the
## execution are of the RecursiveData kind, while the exit status is a 0 or 1 exit code, coding for success or 
## failure respectively.
type Execution_v0 struct {
  bytecode  	&ModuleBytecodeEnvelope_Typed_v0
  handle    	String
  input     	&RecursiveDataEnvelope_Typed_v0
  exitStatus	bool
  output    	&RecursiveDataEnvelope_Typed_v0
} representation tuple

## Execution_Typed_v0 is the typed version of Execution for protocol v0.
type Execution_Typed_v0 union {
    | Execution_v0 "ex_0"
} representation inline {
    discriminantKey "typedVersion"
}
```

#### Pipelines

To connect transformed datasets to all source data sets that it originates from, a last kind is necessary, that
basically connects each execution as intermediary stages of a complete transformation process. This last kind is the one
describing shapes of pipelines.

As introduced in the design overview, chaining transformations basically comes down to the connexions of indexes. As, in
Holium, the input parameter of a transformation is a single list structure, holding nested lists and/or scalars, each
input element can be precisely identified with a set of indices. This is the purpose of *selectors*: targeting precise
elements inside input and output parameters. To connect a transformation to others and form a pipeline, one needs to
connect each element of its input parameter to elements of output parameters from its preceding transformations,
through *connexions*, introduced here and described in more detail in [another section](#selectors-and-connexions).

```ipldsch
## Selector_v0, used in protocol v0, is a Copy of SelectorEnvelope.
type Selector_v0 = SelectorEnvelope

## The Connexion type is used to connect a tail selector, basically selecting pieces of a transformation output,
## to a head selector of same topology, selecting parts of a transformation input.
type Connexion_v0 struct {
  tailSelector 	&Selector_v0
  headSelector 	&Selector_v0
} representation tuple

## Connexion_Typed_v0 is the typed version of Connexion for protocol v0.
type Connexion_Typed_v0 union {
    | Connexion_v0 "cx_0"
} representation inline {
    discriminantKey "typedVersion"
}
```

To be accurate, more than chains, pipelines are really Directed Acyclic Graphs (DAG) of transformations.

```ipldsch
## Pipeline vertices are of type PipelineVertex.
## See the Pipeline structure for more details.
## TODO
type PipelineVertex_v0 {String:Link} representation map

## Pipeline edges are of type PipelineEdge.
## See the Pipeline structure for more details.
## TODO
type PipelineEdge_v0 struct {
  tailIndex 	int
  headIndex 	int
  connexion 	&Connexion_Typed_v0
} representation tuple

## The Pipeline structure describes topologies of Directed Acyclic Graphs (DAG) defined primarily by their edges.
## Firstly, in these DAGs, vertices represent transformations and can be conceived as containers which content may
## vary according to the context. They may be empty in the only purpose of the pipeline is topological; they may
## hold transformations only to represent transformation pipelines at rest; they may also, of course, hold data and
## executions to trace the transformation history of datasets. In the end, any type of information may be
## attached to these vertices.
## Secondly, edges connect these vertices together through pairs of IPLD selectors. They connect pieces of output
## parameters from preceding transformations (tail of the edge) to parts of input parameters of following
## transformations.
## Assembled together, they should form a DAG, eventually made of transformations and datasets: the pipeline.
type Pipeline_v0 struct {
  vertices 	[PipelineVertex_v0]
  edges 	[PipelineEdge_v0]
} representation tuple

## Pipeline_Typed_v0 is the typed version of Pipeline for protocol v0.
type Pipeline_Typed_v0 union {
    | Pipeline_v0 "pl_0"
} representation inline {
    discriminantKey "typedVersion"
}
```

In summary, the `Pipeline` structure defines topologies of DAGs which vertices are connected with pairs of selectors
identifying parts of Holium data structures.

Nodes for their part, may link to various kind of information, from dry transformations to datasets and executions. They
are made of maps from String keys to IPLD Links, in which keys should use the same lexicon as the short descriptors
defined in the [versioning](#versioning) specification (`rde` for Recursive Data envelopes, `ex` for Executions, `dt`
for Dry Transformations,…), arranged in alphabetical order.

To ensure determinism of their representations, additional rules based on a simple lexical ordering are explained in
a [subsequent section](#pipeline-dag-lexical-order).

#### Other kinds

##### Dry transformation

```ipldsch
## DryTransformation_v0 is a kind specifying a module bytecode and a handle, that may be introduced in a pipeline
## and that does not encompass its execution, thus does not link to any specific data value.
type DryTransformation_v0 struct {
  bytecode      &ModuleBytecodeEnvelope_Typed_v0
  handle        String
} representation tuple

## DryTransformation_Typed_v0 is the typed version of DryPipe for protocol v0.
type DryPipe_Typed_v0 union {
    | DryPipe_v0 "dt_0"
} representation inline {
    discriminantKey "typedVersion"
}
```

##### Selectors and connexions {#selectors-and-connexions}

```ipldsch
## Selectors used in Holium are a subset of IPLD Selectors.
## Reference: https://ipld.io/specs/selectors/

## SelectorEnvelope is the recommended top-level value for serialized messages
## that don't have established existing context with marks the start of a selector:
## it's a single-member union used to kick us towards "nominative typing".
##
## See https://github.com/ipld/specs/tree/master/schemas/migration.md
## for a background on the theory behind this gentle-nominative concept.
type SelectorEnvelope union {
	| Selector "selector"
} representation keyed

type Selector union {
	| Matcher "."
	| ExploreIndex "i"
	| ExploreRange "r"
	| ExploreUnion "|"
} representation keyed

## Matcher marks a node to be included in the "result" set.
## (All nodes traversed by a selector are in the "covered" set (which is a.k.a.
## "the merkle proof"); the "result" set is a subset of the "covered" set.)
##
## In libraries using selectors, the "result" set is typically provided to
## some user-specified callback.
##
## A selector tree with only "explore*"-type selectors and no Matcher selectors
## is valid; it will just generate a "covered" set of nodes and no "result" set.
type Matcher struct {
	onlyIf optional Condition # match is true based on position alone if this is not set.
	label optional String # labels can be used to match multiple different structures in one selection.
}

## ExploreIndex traverses a specific index in a list, and applies a next
## selector to the reached node.
type ExploreIndex struct {
	index Int (rename "i")
	next Selector (rename ">")
}

## ExploreRange traverses a list, and for each element in the range specified,
## will apply a next selector to those reached nodes.
type ExploreRange struct {
	start Int (rename "^")
	end Int (rename "$")
	next Selector (rename ">")
}

## ExploreUnion allows selection to continue with two or more distinct selectors
## while exploring the same tree of data.
##
## ExploreUnion can be used to apply a Matcher on one node (causing it to
## be considered part of a (possibly labelled) result set), while simultaneously
## continuing to explore deeper parts of the tree with another selector,
## for example.
type ExploreUnion [Selector]
```

:::caution
**Work in progress.** Additional specifications to come in order to enforce determinism of representations. 🚧
:::

### Additional considerations

#### Versioning strategy {#versioning}

All complex schemas in the framework are versioned at the protocol level.

The simple strategy is based on discriminant keys coding for both the structure and the protocol version.

The schema for _execution_ (coded `ex`) for protocol version 0 will for instance have the key `ex_0`.

Here is the index of short kind descriptors :

| Kind                     | Short Descriptor |
| ------------------------ | ---------------- |
| Scalar Data envelope     | `sde`            |
| Recursive Data envelope  | `rde`            |
| Module Bytecode envelope | `mbe`            |
| Execution                | `ex`             |
| Dry Transformation       | `dt`             |
| Connexion                | `cx`             |
| Pipeline                 | `pl`             |

When defining schemas for a new version of the protocol, each complex schema should have a _versionized_ version. If a
kind does not change, then just use Copy :

```ipldsch
type Type_vY = Type_vX
```

Then, a simple enumeration should implement the keyed versioning strategy. Here is an example with the schema of _wet
executions_ at protocol version 1.

```ipldsch
type WetExecution_Typed_v1 union {
    | WetExecution_v1 "we_1"
    | WetExecution_v0 "we_0"
} representation keyed
```

For more information on versioning strategies, have a look at
the [official documentation](https://specs.ipld.io/schemas/migration.html).

#### Lexical ordering of pipeline vertices {#pipeline-dag-lexical-order}

:::caution
**Work in progress. 🚧**
:::

## Contributing

### Holium Improvement Proposal (HIP)

:::caution
**Work in progress. 🚧**
:::

### Validation

The `ipld-schema` module should be used to validate the format of the schema, working directly on current
file: `npx ipld-schema validate ./holium-schema.md`.

### Resources

More information on IPLD [website](https://ipld.io/), [documentation](https://docs.ipld.io/)
and [specifications](https://specs.ipld.io/).