---
sidebar_label: 'Add data sources'
sidebar_position: 3
---

# Add data sources

To start of our pipeline we will first add two **data sources**.

**Data sources** are a node that are usually uniquely connected as tail nodes, meaning that they do
not receive data inputs but will output data to node connected to them. Developers can define the structure
of output data when creating the source node.

We will create two data sources for our tutorial project. One for our avocado sales details and one that
will serve as a parameter to select the year want to conduct our price inspection on. 

To import a **data source** we can use the `holium source add` sub-command:

```shell
$ holium source create avocado_sales --json-schema '{"type": "array","prefixItems": [{"type": "array","items": {"type": "object","properties": {"4046": {"type": "number"},"4225": {"type": "number"},"4770": {"type": "number"},"date": {"type": "string"},"average_price": {"type": "number"},"total_volume": {"type": "number"},"total_bags": {"type": "number"},"small_bags": {"type": "number"},"large_bags": {"type": "number"},"xlarge_bags": {"type": "number"},"type": {"type": "string"},"year": {"type": "number"},"geography": {"type": "string"}}}}]}'
new object created: avocado_sales

$ holium source create selected_year --json-schema '{"type": "array", "prefixItems": [{"type": "number"}]}'
new object created: selected_year
```


Make sure to run the sub-command for all **data sources** available so that all assets are available in the
Holium project.

Once is is done we are able to list all of our **data sources** with the sub-command [`holium source ls`](TODO_LINK_TO_LIST_SOURCES):

```shell
$ holium source list

┌───────────────┬──────────────────────────────┐
│ NAME          │ JSON Schema                  │
├───────────────┼──────────────────────────────┤
│ avocado_sales │ {                            │
│               │   "prefixItems": [           │
│               │     {                        │
│               │       "items": {             │
│               │         "properties": {      │
│               │           "4046": {          │
│               │             "type": "number" │
│               │           },                 │
│               │           "4225": {          │
│               │             "type": "number" │
│               │           },                 │
│               │           "4770": {          │
│               │             "type": "number" │
│               │           },                 │
│               │   ...                        │
├───────────────┼──────────────────────────────┤
│ selected_year │ {                            │
│               │   "prefixItems": [           │
│               │     {                        │
│               │       "type": "number"       │
│               │     }                        │
│               │   ],                         │
│               │   "type": "array"            │
│               │ }                            │
└───────────────┴──────────────────────────────┘
```

Now that we have all necessary **data sources** for our project we will import Holium modules that will be used
to transform our data.
