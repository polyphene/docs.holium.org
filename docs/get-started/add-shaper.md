---
sidebar_label: 'Add a shaper'
sidebar_position: 5
---

# Add shaper

**Shapers** are nodes usually uniquely connected as head nodes, meaning that they receive 
data inputs but will output no data to another node. Developers can define the structure of output 
data when creating the source node.

We will connect it to our transformation afterwards.

To create a new shaper to our project we may use the sub-command `holium shaper create`:

```shell
$ holium shaper create sales_results --json-schema '
        {
            "type": "array",
            "prefixItems": [{
                "type": "array",
                "items": {
                    "type": "array",
                    "prefixItems": [{
                        "type": "string"
                    }, {
                        "type": "number"
                    }]
                }
            }]
        }
        '
new object created: sales_results
```

Once it is done we are able to list all of our shapers with the sub-command `holium shaper list`:

```shell
$ holium shaper list
┌───────────────┬──────────────────────────────┐ 
│ NAME          │ JSON Schema                  │
├───────────────┼──────────────────────────────┤
│ sales_results │ {                            │
│               │   "type": "array",           │
│               │   "prefixItems": [           │
│               │     {                        │
│               │       "type": "array",       │
│               │       "items": {             │
│               │         "type": "array",     │
│               │         "prefixItems": [     │
│               │           {                  │
│               │             "type": "string" │
│               │           },                 │
│               │           {                  │
│               │             "type": "number" │
│               │           }                  │
│               │         ]                    │
│               │    ...                       │
└───────────────┴──────────────────────────────┘
```

With this last object created, we have all objects necessary for us to build our pipeline. To finalize the 
pipeline build the final step is to connect all previously elements together.


