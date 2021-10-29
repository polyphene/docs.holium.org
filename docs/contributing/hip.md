---
sidebar_label: 'Holium Improvement Proposal'
sidebar_position: 1
---

# Holium Improvement Proposal

An Holium Improvement Proposal (HIP) is a design document providing information to the
Holium community, or describing a new feature for Holium or its processes or environment. The HIP 
should provide a concise technical specification of the feature and a rationale for the feature. The 
HIP author is responsible for building consensus within the community and documenting dissenting 
opinions.

An HIP can go through 5 different phases:

![HIP States](/img/hip/states.png)

## Draft

The first formally tracked stage of an HIP in development. A Pull Request is opened on the HIP 
repository by a person. Then, the HIP is merged by a maintainer  into the HIP repository.

Maintainers are initially members of the Polyphene team, the circle of maintainers will be extended 
later according to conditions that are still to be defined.

HIP should be written in Markdown format and a template should be followed. The template can be found
on the [HIP repository](https://github.com/polyphene/HIPs).

**Review**

An HIP Author marks an HIP as ready for and requesting Peer Review. 

**Last call**

This is the final review window for an HIP before moving to **accepted**. A maintainer will assign **last call**
status at the request of an HIP author and set an end date, typically 14 days later.

An HIP is moved to **accepted** when it has been in **last call** for at least 2 weeks and any technical 
changes that were requested have been addressed by the author. The process for implementation 
developers to decide whether to encode an HIP into their clients is not part of the HIP process.

If this period results in necessary normative changes (at a maintainer’s discretion), it will revert
the HIP to **review**.

**Accepted**

The HIP becomes a final standard. A Final HIP exists in a state of finality and should only be
updated to correct errata and add non-normative clarifications.

**Withdrawn**

The HIP Author(s) have withdrawn the proposed HIP or the HIP in **draft** or **review** is inactive 
for a period of 6 months or greater. This state has finality and the HIP can not be resurrected using
this HIP number. If the idea is pursued at later date it is considered a new proposal.
