---
sidebar_label: 'Add data sources'
sidebar_position: 3
---

# Add data sources

To start of our pipeline we will first add two **data sources**.

Data sources are nodes usually uniquely connected as tail nodes, meaning that they
output data but never receive data from any node. Developers can define the structure
of data when creating the source node.

We will create two data sources for our project. One for our details on avocado sales and one that
will serve as a parameter to select the year we want to conduct our price inspection on. 

To create a data source we can use the `holium source create` sub-command:

```shell
$ holium source create avocado_sales  --json-schema '
{
	"type": "array",
	"prefixItems": [{
		"type": "array",
		"items": {
			"type": "object",
			"properties": {
				"plu_4046": { "type": "number" },
				"plu_4225": { "type": "number" },
				"plu_4770": { "type": "number" },
				"date": { "type": "string" },
				"average_price": { "type": "number" },
				"total_volume": { "type": "number" },
				"total_bags": { "type": "number" },
				"small_bags": { "type": "number" },
				"large_bags": { "type": "number" },
				"xlarge_bags": { "type": "number" },
				"avocado_type": { "type": "string" },
				"year": { "type": "number" },
				"geography": { "type": "string" }
			}
		}
	}]
}
'
new object created: avocado_sales

$ holium source create selected_year \
        --json-schema '{"type": "array", "prefixItems": [{"type": "number"}]}'
new object created: selected_year
```


Make sure to run the sub-command for all data sources available so that all assets are available in the
Holium project.

Once it is done we are able to list all of our data sources with the sub-command `holium source list`:

```shell
$ holium source list
┌───────────────┬──────────────────────────────┐                                                                                
│ NAME          │ JSON Schema                  │                                                                                     
├───────────────┼──────────────────────────────┤                                                                          
│ avocado_sales │ {                            │                                                                       
│               │   "type": "array",           │                      
│               │   "prefixItems": [           │
│               │     {                        │
│               │       "type": "array",       │
│               │       "items": {             │
│               │         "type": "object",    │
│               │         "properties": {      │
│               │           "plu_4046": {      │
│               │             "type": "number" │
│               │           },                 │
│               │           "plu_4225": {      │
│               │             "type": "number" │
│               │  ...                         │
├───────────────┼──────────────────────────────┤
│ selected_year │ {                            │
│               │   "type": "array",           │
│               │   "prefixItems": [           │
│               │     {                        │
│               │       "type": "number"       │
│               │     }                        │
│               │   ]                          │
│               │ }                            │
└───────────────┴──────────────────────────────┘
```

Now that we have all necessary **data sources** for our project, we will create a Holium **transformation**
that will allow us to transform our data.
