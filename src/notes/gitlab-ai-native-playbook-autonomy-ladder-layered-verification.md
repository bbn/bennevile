---
title: "GitLab's AI-native playbook: agents earn autonomy rung by rung, and a checkpoint nobody exercises is worse than none"
description: "Oct 20, Chandler Gibbons (GitLab). Launching an AI-Native Engineering Playbook built with IT Revolution, GitLab cites its April survey of 1,528 practitioners: 85% say AI moved the bottleneck from writing code to reviewing and validating it, and 78% say review was not designed for AI-scale code. Its answers are a four-stage autonomy ladder with no skipped rungs and a layered verification system where humans leave the loop only when risk and evidence justify it."
date: 2026-10-20
kind: field-note
source:
  title: "Redesign how your team ships software with AI agents"
  url: https://about.gitlab.com/blog/redesign-how-your-team-ships-software-with-ai-agents/
project: steward
---

GitLab's [Chandler Gibbons](https://about.gitlab.com/blog/redesign-how-your-team-ships-software-with-ai-agents/) introduces the [AI-Native Engineering Playbook](https://about.gitlab.com/ai-native-playbook/), built with [IT Revolution](https://itrevolution.com/) and GitLab's engineering-leader community. The post leans on GitLab's [AI Accountability Report](https://about.gitlab.com/resources/ai-accountability-survey-2026/), an April 2026 survey of 1,528 DevSecOps professionals. In it, [79% agreed](https://about.gitlab.com/blog/redesign-how-your-team-ships-software-with-ai-agents/) that individual productivity improved with AI while overall delivery has not sped up at the same pace, and 85% agreed AI has shifted the bottleneck from writing code to reviewing and validating it.

The arithmetic is the point. Gibbons works through a [281-day delivery cycle](https://about.gitlab.com/blog/redesign-how-your-team-ships-software-with-ai-agents/) with about 32 days of coding: make coding 50% faster and you save about 16 days, roughly 6%, and even taking coding to zero leaves about 88% of lead time untouched. The first job is to [trace one small change from request to production](https://about.gitlab.com/ai-native-playbook/topics/redesigning-the-work/find-the-real-bottleneck/) and mark every wait.

## Autonomy tied to evidence

The playbook's [autonomy ladder](https://about.gitlab.com/ai-native-playbook/topics/working-with-agents/earn-autonomy-with-evidence/) has four stages, from a human in the loop at every step to a zero-touch workflow that calls a human only at predefined thresholds. No rung can be skipped, and each step up needs evidence from the rung below. Gibbons calls rubber-stamping the trap: a person nominally in the loop who approves everything gives the look of control without the benefit, and "a checkpoint nobody actually exercises is worse than none." He also says an agent that stops more often to ask for help is a healthy sign, because it is refusing to outrun its evidence.

## Review at agent volume

On review, [78% of survey respondents](https://about.gitlab.com/blog/redesign-how-your-team-ships-software-with-ai-agents/) agreed existing code review was not designed for the scale of code AI tools enable, and 80% said adoption has outrun governance. The proposed answer is a [layered verification system](https://about.gitlab.com/ai-native-playbook/topics/governing-and-scaling/verify-what-agents-produce/): objective checks such as formatting, types and dependency policy move as close to authoring as possible, changes stay small, expected behavior is defined up front, an independent reviewer checks the work, review depth matches risk, and every agentic review decision is recorded for later inspection. Humans leave the loop only when risk and evidence justify it, never by default. The review material draws on IT Revolution's paper [Agentic AI and Code Reviews](https://itrevolution.com/product/agentic-ai-and-code-reviews/).

This is a vendor launching a vendor playbook, and the survey is GitLab's own. Read with [Elstner's trust ladder for AI review](/posts/trust-ladder-supervised-autonomy-review/), [Stolze and Strässle on layered supervision](/posts/stolze-layered-supervision-review-no-longer-scales/), and [LinearB's benchmark on agent PR yield and ownership](/posts/linearb-agentic-pr-yield-ownership-gap/).
