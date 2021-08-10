---
sidebar_label: import
sidebar_position: 1
---

# `data import`

## Description

TODO

- import of CBOR maps
    - order of keys is not preserved
    - in fact, sorted with oreder of keys as [`serde_cbor::Value`s](https://docs.rs/serde_cbor/0.11.1/serde_cbor/enum.Value.html)
- import of CSV
    - how it works : always import as array ( = list of records) of array ( = record) of strings ( = fields)
    - parsed line by line; if a error occurs, the record/line is ignored
    - for now, CSV files with no header are NOT handled (a header is mandatory)
    - for now, binary values (that is, not utf8) are NOT handled

## 

## Options

- `-t|--type <json|csv|…>` - TODO.
