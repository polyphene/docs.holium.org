---
sidebar_label: 'Setting up'
sidebar_position: 1
---

# Setting up

In this tutorial, we will go through the creation of a Holium project that is tested, documented, 
and deployed — you can check out the generated project from the tutorial [here](https://github.com/polyphene/getting-started).

This tutorial is geared towards first-time users who want detailed instructions on how to go from scratch to
a working Holium project. As we aim to get used to all facets of the Holium CLI we choose a simple use case.

The tutorial data are sourced from [Kaggle](https://www.kaggle.com/neuromusic/avocado-prices). They represent figures on
avocado sales in the United States. The goal of our transformation pipeline is to create a data
pipeline to get numbers of avocado type sales for a given year.

To be able to follow this tutorial you will first need to install Rust on your machine.
Newcomers to the Rust toolchain may find [instructions](https://www.rust-lang.org/tools/install) for its 
installation through a one-line script.

Once Rust is installed we will be able to leverage [`cargo`](https://doc.rust-lang.org/cargo/) to 
install the Holium CLI. Execute the command:
```shell
$ cargo install holium
```

Check the version to verify installation:
```shell
$ holium -V
Holium 1.0.0
```

You will also need [Git](https://git-scm.com/). It will prove useful to version our Holium project and the different pipelines
we build in it. You can find about installation procedure [here](https://git-scm.com).

## Embedded help

For all commands and subcommands of the CLI, the `-h` argument will provide
detailed help information about their usage.

Tab-completion scripts are also available for multiple shells (_bash_, _powershell_, _zsh_,…)
and can be printed with the command `generate-shell-completions` or its alias `gsc`.
Just evaluate the script for your favorite shell as follows:

```shell
eval "$(holium gsc bash)"
```

At this point, everything is in place to start operating the protocol.
