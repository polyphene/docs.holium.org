e---
sidebar_position: 2
---

# Glossary

We are on a **host** running **guest** Wasm bytecode on a given **runtime**.

Compiled Wasm bytecode is called a **module**.

In each **module** we can find between one or multiple **transformation wrapper(s)**. A **transformation wrapper**
is the equivalent of a developed **pure transformation** (a function).

When instantiating a **module** in a runtime, access points to **transformation wrapper**
are called **entry points**.
