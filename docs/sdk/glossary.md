---
sidebar_position: 1
---

# Glossary

We are on a **host** running **guest** wasm bytecode on a given **runtime**.

Compiled wasm bytecode is called a **module**.

In each **module** we can find between 1..n **transformation wrapper(s)**. A **transformation wrapper**
is the equivalent of a developed **pure transformation** (a function).

When instantiating a **module** in a runtime, access points to **transformation wrapper**
are called **entry points**.
