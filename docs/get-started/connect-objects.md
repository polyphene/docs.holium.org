---
sidebar_label: 'Connect objects'
sidebar_position: 6
---

# Connect objects

In the previous steps of the tutorial, we created all desired nodes that have a role to play in our 
pipeline. To finalize the construction of our pipeline and run it, we now need to connect all 
those nodes.

The **connections** model for Holium is based on [IPLD selectors](http://ipld.io.ipns.localhost:48084/specs/selectors/).
Nonetheless, they are adapted in a subset to fit our specification. More to read in our [dedicated
section](http://localhost:3000/reference/design#selectors-and-connections).

We will start by connecting our **data sources** to the **transformation**. 

To connect objects in our pipeline, the CLI has a dedicated sub-command `holium connection create`.

Let's create our first connections, one to send avocado sales data to our **transformation** and one to
send year choice to the **transformation**:

```shell
$ holium connection create \
--tail-type source --tail-name avocado_sales --tail-selector '{"i": {"i": 0, ">": {".": {}}}}' \
--head-type transformation --head-name avocado_operations --head-selector '{"i": {"i": 0, ">": {".": {}}}}' 
new object created: source:avocado_sales→transformation:avocado_operations

$ holium connection create \
--tail-type source --tail-name selected_year --tail-selector '{"i": {"i": 0, ">": {".": {}}}}' \
--head-type transformation --head-name avocado_operations --head-selector '{"i": {"i": 1, ">": {".": {}}}}' 
new object created: source:selected_year→transformation:avocado_operations
```

Before moving forward to the connection between our **transformation** and our **shaper** let's print
the list of connections we just created. To do so, we can leverage the sub-command `holium connection list`:

```shell
$ holium connection list
┌────────────────────────────────────────────────────────┬─────────────────────────────┬─────────────────────────────┐
│ ID                                                     │ TAIL SELECTOR (JSON Schema) │ HEAD SELECTOR (JSON Schema) │
├────────────────────────────────────────────────────────┼─────────────────────────────┼─────────────────────────────┤
│ source:avocado_sales→transformation:avocado_operations │ {                           │ {                           │
│                                                        │   "i": {                    │   "i": {                    │
│                                                        │     "i": 0,                 │     "i": 0,                 │
│                                                        │     ">": {                  │     ">": {                  │
│                                                        │       ".": {}               │       ".": {}               │
│                                                        │     }                       │     }                       │
│                                                        │   }                         │   }                         │
│                                                        │ }                           │ }                           │
├────────────────────────────────────────────────────────┼─────────────────────────────┼─────────────────────────────┤
│ source:selected_year→transformation:avocado_operations │ {                           │ {                           │
│                                                        │   "i": {                    │   "i": {                    │
│                                                        │     "i": 0,                 │     "i": 1,                 │
│                                                        │     ">": {                  │     ">": {                  │
│                                                        │       ".": {}               │       ".": {}               │
│                                                        │     }                       │     }                       │
│                                                        │   }                         │   }                         │
│                                                        │ }                           │ }                           │
└────────────────────────────────────────────────────────┴─────────────────────────────┴─────────────────────────────┘
```

Finally, we will create the last **connection** linking our **transformation** to our **shaper**:

```shell
$ holium connection create \
--tail-type transformation --tail-name avocado_operations --tail-selector '{".": {}}' \
--head-type shaper --head-name sales_results --head-selector '{".": {}}'
new object created: transformation:avocado_operations→shaper:sales_results

$ holium connection list
┌────────────────────────────────────────────────────────┬─────────────────────────────┬─────────────────────────────┐
│ ID                                                     │ TAIL SELECTOR (JSON Schema) │ HEAD SELECTOR (JSON Schema) │
├────────────────────────────────────────────────────────┼─────────────────────────────┼─────────────────────────────┤
│ source:avocado_sales→transformation:avocado_operations │ {                           │ {                           │
│                                                        │   "i": {                    │   "i": {                    │
│                                                        │     "i": 0,                 │     "i": 0,                 │
│                                                        │     ">": {                  │     ">": {                  │
│                                                        │       ".": {}               │       ".": {}               │
│                                                        │     }                       │     }                       │
│                                                        │   }                         │   }                         │
│                                                        │ }                           │ }                           │
├────────────────────────────────────────────────────────┼─────────────────────────────┼─────────────────────────────┤
│ source:selected_year→transformation:avocado_operations │ {                           │ {                           │
│                                                        │   "i": {                    │   "i": {                    │
│                                                        │     "i": 0,                 │     "i": 1,                 │
│                                                        │     ">": {                  │     ">": {                  │
│                                                        │       ".": {}               │       ".": {}               │
│                                                        │     }                       │     }                       │
│                                                        │   }                         │   }                         │
│                                                        │ }                           │ }                           │
├────────────────────────────────────────────────────────┼─────────────────────────────┼─────────────────────────────┤
│ transformation:avocado_operations→shaper:sales_results │ {                           │ {                           │
│                                                        │   ".": {}                   │   ".": {}                   │
│                                                        │ }                           │ }                           │
└────────────────────────────────────────────────────────┴─────────────────────────────┴─────────────────────────────┘
```

Now that we have connected all of our nodes, we will check that the transformation pipeline DAG is valid,
export it to the **interplanetary area** to version it and finally execute it !
