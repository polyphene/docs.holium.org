---
sidebar_label: 'Contributing'
sidebar_position: 6
---

# Contributing

## Foreword

The Holium protocol is a community-driven project and first implementations and related utilities follow
the *free and open-source software* (FOSS) principles. Be sure to check at our [design principles](about-holium/design-principles.md)
for more details on the ethos.

In this regard, any amendment to the protocol can be discussed as a Holium Improvement Proposal (HIP) taking part in a 
framework described [below](#hip).

The primary [changelog](meta/changelog.md) can also be found on the current documentation.

Most discussions within the community takes place on [Discord](https://discord.gg/A3t5ZFSbCG).

## Repositories

Early software related to the Holium protocol can be found on GitHub.

Main repositories include:
- [`holium-rs`](https://github.com/polyphene/holium-rs): the reference CLI-enabled implementation of the protocol.
- [`holium-rs-sdk`](https://github.com/polyphene/holium-rs-sdk): the SDK for developers of Rust transformations, detailed in a dedicated [page](reference/sdk/rust-sdk/install.md).
- [`HIPs`](https://github.com/polyphene/HIPs): reference of Holium Improvement Proposals.

## Holium Improvement Proposals (HIP) {#hip}

### Project goal

The Holium Improvement Proposals [repository](https://github.com/polyphene/HIPs) is meant to create a space where users
and members of the Holium community can discuss and track standards for the protocol.

### Proposal validation

HIPs must pass some validation tests that can be enforced with the [hip-validator](https://github.com/polyphene/hip-validator).

### Proposal lifecycle


A Holium Improvement Proposal (HIP) is a design document providing information to the
Holium community, or describing a new feature for Holium or its processes or environment. The HIP
should provide a concise technical specification of the feature and a rationale for the feature. The
HIP author is responsible for building consensus within the community and documenting dissenting
opinions.

A HIP can go through 5 different phases:

```plantuml
hide empty description

state "HIP Process" as HipProcess {
  
  state Draft #aliceblue;line:blue
  state Accepted #palegreen;line:green;line.bold
  state Withdrawn #pink;line:red;line.bold
  state "Last Call" as LastCall
  
  Draft -> Review
  Review -> LastCall
  LastCall -> Review
  LastCall -> Accepted
  
  Review --> Withdrawn
  LastCall --> Withdrawn
}
```

#### Draft

The first formally tracked stage of a HIP in development. A Pull Request is opened on the HIP
repository by any contributor. Then, the HIP is merged by a maintainer into the HIP repository.

Maintainers are initially members of the Polyphene team. The circle of maintainers will be extended
later according to conditions that are still to be defined.

A HIP should be written in Markdown format and a template should be followed. The template can be found
on the [HIP GitHub repository](https://github.com/polyphene/HIPs).

#### Review

A HIP author marks a HIP as ready for and requesting peer review.

#### Last call

This is the final review window for a HIP before moving to **accepted**. A maintainer will assign **last call**
status at the request of a HIP author and set an end date, typically 14 days later.

A HIP is moved to **accepted** when it has been in **last call** for at least 2 weeks and any technical
change that was requested has been addressed by the author. The process for implementation
developers to decide whether to integrate a HIP into their clients is not part of the HIP process.

If this period results in necessary normative changes (at a maintainer’s discretion), it will revert
the HIP to the **review** status.

#### Accepted

The HIP becomes a final standard. An **accepted** HIP exists in a state of finality and should only be
updated to correct errata and add non-normative clarifications.

#### Withdrawn

The HIP authors have withdrawn the proposed HIP, or the HIP in **draft** or **review** is inactive
for a period of 6 months or more. This state has finality and the HIP can not be resurrected using
a similar HIP number. If the idea is continued at a later date, it is considered a new proposal.
