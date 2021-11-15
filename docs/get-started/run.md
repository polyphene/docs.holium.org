---
sidebar_label: 'Run the transformation pipeline'
sidebar_position: 8
---

# Run the transformation pipeline

Now that we know that our pipeline DAG is sane and we versioned it we will focus on the execution.

The only thing left to do before executing our transformation pipeline is to define **portations** to
import data to Holium and export data from Holium. In our case we will apply two import **portations**
to our sources and one export **portation** to our shaper.

The different files that we will use as our imported data can be found [in our dedicated repository](https://github.com/polyphene/getting-started/tree/main/assets/wasm).

In the first file, `avocado.json` we can find all retails sales details for avocado in the US. The second
file is the year we want to conduct our operation on.

To create a new **portation** the `holium portation create` sub-command can be used. We will also review
the created **portations** by using the sub-command `holium portation list` :
```shell
$ holium portation create --direction toHolium --node-type source --node-name avocado_sales \
--file-path avocado.json  --file-format json
new object created: to:source:avocado_sales

$ holium portation create --direction toHolium --node-type source --node-name selected_year \
--file-path selected_year.json  --file-format json
new object created: to:source:selected_year

$ holium portation create --direction fromHolium --node-type shaper --node-name sales_results \
--file-path sales_results.json  --file-format json
new object created: from:shaper:sales_results
```

As we have now defined all necessary information to have a proper transformation pipeline DAG and data 
sourcing we can execute it !

To do so the sub-command `holium project run` is at your disposal:
```shell
$ holium project run
successfully ran the transformation pipeline

1 successful export(s) during execution:
shaper:sales_results → sales_results.json
```

Now if we open our `sales_results.json` file we can find the generated json object:
```json
[[["4046",1709447236.0],["4225",1761051252.0],["4770",142770478.0]]]
```

With that we have created a valid pipeline that can run to produce data based on our connections and 
transformations. 

This is the end of the base tutorial ! If you have any more questions please feel free to reach us on
our social media.
