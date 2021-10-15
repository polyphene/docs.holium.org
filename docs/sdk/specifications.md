---
sidebar_position: 3
---

# Specifications

**Entry points** have the same name as the exported **pure transformation** they lead to.

When passing data from the **host** to the **guest**, Wasm is currently limited. To bypass that limit we 
directly interact with the guest's **linear memory**. By using pointers and lengths we are able
to read and write complex data from and to our **module**.

Here is an overview of a given execution:

```plantuml 
skinparam maxMessageSize 200

database    "Data Repository"   as DR
actor       "Holium Client"     as HC
participant "**Transformations Wrapper**\nbuilt during compilation\nwith the procedural macro,\npart of the WASM module,\nexecuted in a WASM runtime" as Wrapper
participant "**Pure Transformation**,\nother part of the WASM module,\nexecuted in a WASM runtime" as Transformation

group Recursively fetching fragments of Holium data\nfrom a repository like IPFS
DR -> HC: Fetch ""DAG-CBOR"" fragment #1.
DR -> HC: Fetch ""DAG-CBOR"" fragment #2.
DR -> HC: …
DR -> HC: Fetch ""DAG-CBOR"" fragment #N.
end

group Defragmenting Holium data
HC -> HC: Create a valid ""HoliumCBOR"" object.
end

group Executing the transformation

HC -> Wrapper: Request execution of a transformation, providing its identifier and input ""HoliumCBOR"" parameter.

alt input parameter of right type

Wrapper -> Wrapper: Deserialize the ""HoliumCBOR"" input parameter into ""Rust-type"" input parameters expected by the pure transformation.
Wrapper -> Transformation: A switch selects the right method and hands it over the ""Rust-type"" input parameters for execution..

alt successful execution
Transformation -> Transformation: Execute the pure transformation.
Transformation -> Wrapper: Return success code together with ""Rust-type"" output parameters.
Wrapper -> Wrapper: Serialize ""Rust-type"" output parameters into a ""HoliumCBOR"" object.
Wrapper -> HC: Return success code and the result of the execution as a ""HoliumCBOR"" object.
HC -> HC: Fragment ""HoliumCBOR"" object into ""DAG-CBOR"" storable fragments.
HC -> DR: Push all new ""DAG-CBOR"" fragments to the repository.
else failing execution
Transformation ->x Transformation: Fail executing the transformation.
Transformation -> Wrapper: Return failure code together with an error object.
Wrapper -> : Return failure code and the error object.
end

else input parameter of wrong type

Wrapper -> Wrapper: Fail deserializing the ""HoliumCBOR"" input parameter into ""Rust-type"" objects expected by the pure transformation.
Wrapper -> HC: Return failure code together with an error object.

end

end
``` 

All **wrapped transformations** must have the same signature:

`fn (ret_ptr: u32, input_ptr: u32, input_len: u32) -> ()`

All pointers and lengths refer to pointers and lengths of data on the **linear memory** of our **guest**.

`ret_ptr` contains data in a tuple of format `(u32, u32)` being the pointer and length of HoliumCBOR 
return payload.

`input_ptr` and `input_len` are the pointer and length of the input payload in HoliumCBOR format that
should be used to run the transformation.
