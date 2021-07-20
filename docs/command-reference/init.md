# `init`

## Description

- Main goal : create `.holium/` and initializes everything inside.
- Usage of the Holium Framework through the CLI works better with code and data version control.
  - By default, will prevent initialization in the absence of data version control, to prevent committing large files to code version control.
  - By default, will prevent initialization with no code version control.

## Options

- `-f`, `--force` - 
- `--no-scm` - 
- `--no-dvc` - 

## Integration of code and data version control tools

- Today, support `git` and `dvc`.
- Implementation with _drivers_ to easily add other tools.
- `git` and `dvc` only used to call `dvc add` and `git add` once  after `holium init` for user comfort. That's all !