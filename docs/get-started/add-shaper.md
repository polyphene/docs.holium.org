---
sidebar_label: 'Add shaper'
sidebar_position: 5
---

# Add shaper

**Shapers** are elements that allows to render data in a desired format. Currently, the supported format
are JSON, CBOR and binary files. They can be placed anywhere in our pipeline DAG.

For our project we will use one shaper to export data. The shaper we will use can be found in the [tutorial
repository](TODO_LINK_TO_TUTO_REPO).

To add a new **shaper** to our project we can use the sub-command [`holium shaper add`](TODO_LINK_TO_SHAPER_ADD):

```shell
$ holium shaper add

TODO
```

With this last object added we have all objects necessary for us to build our pipeline. To build the 
pipeline the next step is to connect all previously elements together.


