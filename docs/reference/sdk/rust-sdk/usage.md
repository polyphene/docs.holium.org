---
sidebar_position: 2
---

# Usage

## Build a module

- Use the `#[holium_bindgen]` procedural macro on every public functions and structures that should be exported.
- Compile using `cargo build --target wasm32-unkown-unknwon --release`
- Wasm bytecode can be found in `<crate_root>/target/wasm32-unkown-unknwon/release/<crate_name>.wasm`

## How does it work?

- Adds `Serialize` & `Deserialize` derive code for exported structure
- Implements `GenerateNode` trait to all exported structures
- Generates wrapper function around exported function that will handle input payload and output payload

In execution :
- Receive data node as CBOR serialized from the host
- Deserialize data node and fuse it with key node to generate input payload
- Run client function with corresponding arguments
- Convert return value to data node
- Serialize data node as CBOR and send it to the host

