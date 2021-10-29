---
sidebar_label: 'Holium Improvement Proposal'
sidebar_position: 1
---

# Holium Improvement Proposal

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

## Draft

The first formally tracked stage of a HIP in development. A Pull Request is opened on the HIP 
repository by any contributor. Then, the HIP is merged by a maintainer into the HIP repository.

Maintainers are initially members of the Polyphene team. The circle of maintainers will be extended 
later according to conditions that are still to be defined.

A HIP should be written in Markdown format and a template should be followed. The template can be found
on the [HIP GitHub repository](https://github.com/polyphene/HIPs).

**Review**

A HIP author marks a HIP as ready for and requesting peer review. 

**Last call**

This is the final review window for a HIP before moving to **accepted**. A maintainer will assign **last call**
status at the request of a HIP author and set an end date, typically 14 days later.

An HIP is moved to **accepted** when it has been in **last call** for at least 2 weeks and any technical 
change that was requested has been addressed by the author. The process for implementation 
developers to decide whether to integrate a HIP into their clients is not part of the HIP process.

If this period results in necessary normative changes (at a maintainer’s discretion), it will revert
the HIP to the **review** status.

**Accepted**

The HIP becomes a final standard. An **accepted** HIP exists in a state of finality and should only be
updated to correct errata and add non-normative clarifications.

**Withdrawn**

The HIP authors have withdrawn the proposed HIP, or the HIP in **draft** or **review** is inactive 
for a period of 6 months or more. This state has finality and the HIP can not be resurrected using
a similar HIP number. If the idea is continued at a later date, it is considered a new proposal.
