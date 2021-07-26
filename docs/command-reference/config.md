# `config`

## Description

Configuration modifies the behaviour of the CLI.
It is fetched from the following, in decreasing order of priority :
1. local git-ignored conf file
2. repo conf file
3. global conf file

The files are TOML files.

> NB : some configuration options may also be overridden by CLI options that always have priority over configuration from configuration files.

### Configuration files

Some are specific to a repository.

| Flag                          | Priority | Config file location |
| ----------------------------- | -------- | -------------------- |
| `--local`                     | 1        | `.holium/config.local`  |
| None or `--project` (default) | 2        | `.holium/config`        |

It is also possible to set a common configuration options for all projects.

| Flag       | Priority | macOS location                                  | Linux location             | Windows location                                          |
| ---------- | -------- | ----------------------------------------------- | -------------------------- | --------------------------------------------------------- |
| `--global` | 3        | `$HOME/Library/Application\ Support/holium/config` | `$XDG_CONFIG_HOME/holium/config` or `$HOME/.config/holium/config` | `%LocalAppData%\Roaming\holium\config` |

## Configuration sections

### core

- `core.no_scm` - 
- `core.no_dvc` - 