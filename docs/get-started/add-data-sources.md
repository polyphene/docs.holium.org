---
sidebar_label: 'Add data sources'
sidebar_position: 3
---

# Add data sources

To start of our pipeline we will first add a few **data sources**.

Current supported **data sources** format for our CLI are: JSON, CBOR and binary files. 

The **data sources** for this tutorial can be found [here](TODO_LINK_TO_DATA_SOURCES_IN_REPO).

To import a **data source** we can use the [`holium source add`](TODO_LINK_TO_SOURCE_ADD) sub-command:

```shell
$ holium source add input_1.json --type json

TODO 
```

Make sure to run the sub-command for all **data sources** available so that all assets are available in the
Holium project.

Once is is done we are able to list all of our **data sources** with the sub-command [`holium source ls`](TODO_LINK_TO_LIST_SOURCES):

```shell
$ holium source ls

TODO
```

Now that we have all necessary **data sources** for our project we will import Holium modules that will be used
to transform our data.
