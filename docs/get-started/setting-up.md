---
sidebar_label: 'Setting up'
sidebar_position: 1
---

# Setting up

In this tutorial, we will go through the creation of an Holium project that is tested, documented, 
and deployed — you can check out the generated project from the tutorial [here](https://github.com/polyphene/getting-started).

This tutorial is geared at first-time users who want detailed instructions on how to go from zero to
a deployed Holium project. As we aim to get use to all facets of the Holium CLI we chose a simple use case.

The tutorial data are sourced from [Kaggle](https://www.kaggle.com/). They represents numbers on
avocado sales in the United States. The goal of our transformation pipeline is to create a data
pipeline to get numbers of avocado type sales based on a given year.

To be able to follow this tutorial you will first need to install Rust on your machine. They have various
ways of installing it on your machine.

Once Rust is installed we will be able to leverage [`cargo`](https://doc.rust-lang.org/cargo/) to 
install the Holium CLI. Execute the command:
```shell
$ cargo install holium

    Updating crates.io index
  Downloaded holium v1.0.0
              ...
  Installing
   Installed package `holium v1.0.0`
```

Then to proceed in the tutorial we will have the need of two version control tools. 

The first one is [Git](https://git-scm.com/). It will prove useful to version our Holium project and the different pipeline
we build in it. You can find about installation procedure on [their dedicated page](https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git).

Finally we will install [DVC](https://dvc.org/) to handle versions on the data that we will import to
and export from the Holium Framework. Their [installation page](https://dvc.org/doc/install) contains all necessary steps to access
their CLI.


_Note: For this tutorial we will use the [Holium Rust SDK](https://github.com/polyphene/holium-rs-sdk) to 
compile needed Holium modules._