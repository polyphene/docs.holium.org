---
sidebar_label: 'Connect objects'
sidebar_position: 5
---

# Connect objects

In the previous steps of the tutorial we imported all desired objects that had a role to play in our 
pipeline. To build our pipeline and make it possible to run we now need to connect all those objects
together to define the DAG (Directed Acyclic Graph) that will represent our pipeline.

We will start by connecting our data sources to the modules. 

To connect objects in our pipeline the CLi has a dedicated sub-command [`holium connexion add`](TODO_LINK_TO_CONNEXION_ADD).

Let's create our first connexions:

TODO_CONNECT_ALL_DATA_SOURCES
```shell
$ holium connexion add

TODO
```

Now that our data sources are connected lets connect all the modules together:

TODO_CONNECT_ALL_MODULES
```shell
$ holium connexion add

TODO
```

And finally let's connect the module to our shaper:

TODO_CONNECT_ALL_SHAPER
```shell
$ holium connexion add

TODO
```

As our pipeline is now built we will run it and produce data from the ran transformation.
