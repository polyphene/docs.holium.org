---
sidebar_label: 'Install'
sidebar_position: 1
---

# Install

The Holium protocol benefits from a reference starter implementation
in the form of a command-line interface (CLI) specifically tailored to
easily get started with the protocol on local projects with smooth integration
of version control systems like [git](https://git-scm.com/) and [dvc](https://dvc.org/). 

## Cargo

The reference implementation is available as a package on [crates.io](https://crates.io/).

Newcomers to the Rust toolchain may find [instructions](https://www.rust-lang.org/tools/install) for its 
installation through a one-line script.

Wit cargo installed, the `holium` CLI in one step away:

```shell
cargo install holium
```

Check the version to verify installation:

```shell
holium -V
# Holium 1.0.0
```

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