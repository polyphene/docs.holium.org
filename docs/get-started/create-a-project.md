---
sidebar_label: 'Create a project'
sidebar_position: 2
---

# Create a project

To ease the tutorial we will start from an already prepared directory [Getting started](https://github.com/polyphene/getting-started).

Let's clone it:
```shell
$ git clone https://github.com/polyphene/getting-started.git
$ cd getting-started
```

Then, we need to initialize a new Holium project on our file system with the dedicated command in the CLI.

```shell
$ holium init --no-dvc
Initializing a repository without data version control may lead to commit large files.
Consider using DVC : https://dvc.org/

To track changes in the Holium project, run :

        git add .holium

Initialized Holium repository.
```

This command creates a `.holium` folder that contains all the files related to your 
Holium project. To refer to the structure of a Holium project see [here](../reference/cli.md#project-structure).

By adding that folder to version control we will ease the process of sharing our transformation pipeline.

```shell
$ git add .holium

$ git commit -m "Holium init"
[main (root-commit) 53f9041] Holium init
```

We are now ready to build our first pipeline.
