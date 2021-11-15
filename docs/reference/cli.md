---
sidebar_label: 'CLI'
sidebar_position: 2
---

# Command-line interface

## Introduction

The CLI holds the reference implementation of the Holium protocol. It allows creating transformation pipelines locally,
running them locally and exporting them for collaboration on a remote repository.

It all revolves around a few concepts.

With the CLI, transformation pipelines are directed acyclic graphs (DAGs) of nodes that transform data.
Each node is an isolated function which solely focuses on transforming data, either by reorganizing it or
running functions on them. In the latter case, these functions are executed in an isolated sandbox, do not react to
any external event except to the data they are provided with as input parameters.

When running a pipeline on actual data, the node are sorted and successively executed. An execution can simply succeed
or fail. In the former case, by the end of the execution each node of the pipeline holds the result of their own 
transformation.
From a logical standpoint, data is transformed at each node of the pipeline, and each node holds the data at their 
respective stage.

This data is serialized as HoliumCBOR values, thus freed from any semantic lock. Edges of the DAG are connections in
charge of selecting and reordering parts of data to hand over to the next node. Simple linear DAGs are thus handled with
1-to-1 connections, but data at a node can just as well be used multiple times (the node has multiple children nodes) and
multiple nodes may also *collaborate* to form the input parameter of another node (multiple nodes share the same child node).

In the context of the CLI, we may define three types of nodes to ease local construction of pipelines:
- **Sources** acting as head nodes of the pipeline, hold source data.
- **Shapers**, once connected to other nodes, perform simple manipulations of datasets, like merging, sorting,….
- **Transformations** also re-shape data but most importantly also run WebAssembly transformations on them.

While these nodes only manipulate data within the Holium protocol, serialized with HoliumCBOR, bridges called **portations**
are in charge of importing data from local files (JSON files, binary files,…) to pipeline source nodes or, in the opposite
direction, export data hold by any node of the pipeline to a new file in the repository.

## Project structure

The Holium CLI is first and foremost intended for use in a local project, set up with [git](https://git-scm.com/) and
[dvc](https://dvc.org/) versioning. When initializing a project with the `holium init` command, a directory structure
will be automatically set up using a common architecture followed by other tools like [Pachyderm](https://www.pachyderm.com/)
and organized around three areas:
- The *local* area holds your local work with Holium. It is not tracked by any version control system and serves as the basic storage layer for local pipeline construction.
- The *interplanetary* area, named after the InterPlanetary Linked Data it holds, can be exported from and imported into the local area, is tracked by the version control system, and focus on sharing and collaborating on pipeline construction and execution.
- Finally, the *repository* area refers to all other assets of your project, whether scripts, raw data, transformed data or others, that Holium interacts with only through portations.

By default, the two first areas are initialized in a `.holium` directory at the root of the project, with the 
following main components.

- 🟢 `.holium/.gitignore`
- 🟡 `.holium/interplanetary/`
- 🔴 `.holium/local/`
- 🟢 `.holium/portations`

> - 🟢 handled by git.
> - 🟡 handled by dvc.
> - 🔴 ignored by git. 


## Pipeline construction

As discussed in the introduction, usage of the CLI is facilitated by the introduction of three types of nodes: sources,
shapers and transformations. Their models are kept as simple as possible, adn their manipulation follows a strict
_Create, Read, Update, Delete, List_ (CRUDL) interface.

```plantuml 

object source {
    **name** //(string)//
    json_schema //(JSON literal)//
}

object shaper {
    **name** //(string)//
    json_schema //(JSON literal)//
}

object transformation {
    **name** //(string)//
    json_schema_in //(JSON literal)//
    json_schema_out //(JSON literal)//
    bytecode //(Wasm byte string)//
    handle //(string)//
}
```

For each type pipeline node, refer to the embedded help commands to get more details on expected arguments:

```shell
holium source --help
# Lists the available CRUDL commands for *source* objects.

holium source create --help
# Provides all required details on the expected arguments
# of the CREATE function for *source* objects.  
```

Pipeline nodes in the local area can be connected through pipeline edges known as *connections* that use *selectors* to
select parts of data from a tail node to be handed over to a head node. Their model is also kept simple and objects are
manipulated through CRUDL commands.

```plantuml 
object connection {
    **id** //(""<tail_vertex>→<head_vertex>"")//
    tail_selector //(JSON literal)//
    head_selector //(JSON literal)//
}
```

## Portations

Portations are smart bridges between files in the repository area and Holium data in the local area.
They support multiple serialization formats like JSON for the formers, and can work in two directions, whether to
import data from files to sources of the local pipeline, or to export Holium data transformed in the local pipeline into
actual files in the repository.

One project may for instance hold two input files, `input.json` and `input.jpeg`, in the repository. Portations can be 
created to use these two files as input of a Holium pipeline, connected them its *source* nodes, while results of the execution
could be stored in a new `result.json` file in the repository through another portation working in the other direction and connected
to a tail *shaper* or *transformation* node of the pipeline.

```plantuml 
object portation {
    **id** //(""<direction>:<vertex>"")//
    file_path //(path literal)//
    file_format //([bin|json|…])//
}
```

The model behind portations is self-explicit and objects are also manipulated with CRUDL commands.

## Pipeline running

Once a pipeline is ready for execution, with all of its node connected and forming a proper node, transformations can
actually be executed with a simple command: `holium project run`. Nodes of the pipeline will automatically be sorted
to be run in the right order, data will automatically be fetched from files targeted by import portations or data locally
stored in the pipeline, and results will be written to files targeted by export portations.

## Versioning and collaboration

Finally, at each step of the construction of a pipeline, before or after any execution, a local Holium project can be 
exported to the interplanetary area with a simple command: `holium project export`. Objects will automatically
be added to your interplanetary area that strictly represents the current state of your pipeline through linked-data
files, including node data if any.

The interplanetary area can efficiently be stored and shared on a remote repository or on [IPFS](https://ipfs.io/)
so that collaborators can fetch it and import it to their own local area with the `holium project import` command.