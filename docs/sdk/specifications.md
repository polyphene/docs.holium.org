---
sidebar_position: 2
---

# Specifications

`entry point` will have the same name as the exported `pure transformation` they will lead to.

When passing data from the `host` to the `guest` Wasm is currently limited. To bypass that limit we 
will directly interact with the `guest` `linear memory`. By using pointers and lengths we will be able
to read and write complex data from and to our `module`.

Here is an overview of a given execution:

![Sequence diagram](../../static/img/sdk/sequence_diagram.png)

All `transformation` must have the same signature:

`fn (ret_ptr: u32, input_ptr: u32, input_len: u32) -> ()`

All pointers and lengths refer to pointers and lengths of data on the `linear memory` of our `guest`.

`ret_ptr` contains data in a tuple of format `(u32, u32)` being the pointer and length of our return
payload of HoliumCBOR.

`input_ptr` and `input_len` are the pointer and length of the input payload in HoliumCBOR format that
we will use for our transformation.
