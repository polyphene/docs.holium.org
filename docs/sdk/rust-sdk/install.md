---
sidebar_position: 1
---

# Install

The Rust SDK is the Rust implementation of the [SDK specifications](../specifications.md).

It leverages [procedural macros](https://doc.rust-lang.org/reference/procedural-macros.html) to be embedded
as seamlessly as possible in a codebase.

_Rust target_

- Add rust compilation target for `wasm32-unknown-unknwon`.

_Cargo file_

- Configure Cargo.toml with `crate-type = ["cdylib"]`
- Add `holium-rs-sdk` as a dependency.

