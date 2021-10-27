---
sidebar_label: 'Create a project'
sidebar_position: 2
---

# Create a project

First, create a project, move to it and initialize Git.

Then, we need to initialize a new Holium project on our file system with the command provisionned by
the CLI. The Holium CLI allows us to use [DVC](https://dvc.org/) (Data Version Control) in our projects.
In this tutorial we will not be using it.

```shell
$ holium init --no-dvc

Initializing a repository without data version control may lead to commit large files.
Consider using DVC : https://dvc.org/

To track changes in the Holium project, run :

   git add .holium

Initialized Holium repository.
```

This command will have created a `.holium` folder in it that contains all the files related to your 
Holium project. To refer to the structure of an Holium project see [here](../reference/cli/project-structure.md).

We are now ready to build our first pipeline.
