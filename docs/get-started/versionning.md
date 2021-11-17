---
sidebar_label: 'Version the pipeline DAG'
sidebar_position: 7
---
# Version the transformation pipeline

In the previous steps of this tutorial we spent some time to create components and connect
them all together to form our pipeline DAG. The first step before getting to a proper running pipeline
is to make sure that the DAG we created is valid.

To do so, the sub-command `holium project export --no-write` is available:
```shell
$ holium project export --no-write
current local project holds a healthy transformation pipeline
```

After building a healthy transformation pipeline DAG, we might want to version it and share it with
different collaborators. As previously seen when initializing our project we generated a `.holium`
folder at the root of our project. This is the folder we will add to our version control system tool.

At the current stage of the tutorial we have only been interacting with a **local context** to store 
the information about our transformation pipeline. We now aim to move the relevant data
from this **local context** to an **interplanetary context** (our `.holium` folder) as a way to version/share it.

To do so, we have dedicated subcommand, `holium project export`:
```shell
$ holium project export
project exported with pipeline cid: bafyr4ifri76sjsvnizy7obgmjbu5ut5rt5iw3rzwtq74hzrexbr5ktibee
```

Now all relevant data for our transformation pipeline have been exported in the `.holium/interplanetary` directory.
By adding the folder to our VCS it can then be pushed on a remote repository for anyone to clone,
or even pushed to IPFS.

When the repository is cloned on another machine, it may be imported to local context by using the
`holium project import` sub-command:
```shell
$ holium project import
```

For the last step of our tutorial we will execute our transformation pipeline DAG over some real world
data!
