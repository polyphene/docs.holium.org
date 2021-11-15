---
sidebar_label: 'Version the pipeline DAG'
sidebar_position: 8
---
# Version the transformation pipeline DAG

After building a working transformation pipeline DAG we might want to version it and share it with
different collaborators. As previously seen when initializing our project we generated a `.holium`
folder at the root of our project. This is the folder we will add to our version control system tool.

At the current state of the tutorial we have only been interacting with a **local context** to store 
the different information about our transformation pipeline DAG. We now aim to mode the relevent data
from this **local context** to an **interplanetary context** (our `.holium` folder) as to version/share it.

To do so we have dedicated subcommand, `holium project export`:
```shell
$ holium project export

project exported with pipeline cid: bafyr4ifri76sjsvnizy7obgmjbu5ut5rt5iw3rzwtq74hzrexbr5ktibee
```

Now all relevent data for our transformation pipeline DAG have been exported in the `.holium/interplanetary`.
By adding the folder to our VCS it can then be pushed on a remote repository for anyone to clone.

When the repository is cloned on another machine it can be imported to local context by using the
`holium project import` sub-command:
```shell
$ holium project import

```

That is all for this tutorial ! If you have anymore questions feel free to reach us on our social media.
