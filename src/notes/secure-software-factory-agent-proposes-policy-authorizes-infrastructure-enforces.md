---
title: "The Secure Software Factory: the agent proposes, policy authorizes, infrastructure enforces, and passing tests don't prove it stayed in bounds"
description: "Practitioners from Docker, Keycard, Socket, Barclays and others published an open reference architecture for AI software factories. It puts four boundaries (sandbox, network, supply chain, identity and access) outside the agent, keeps them fixed across three levels of autonomy, and argues that the more an agent decides, the less it can be trusted to police itself."
date: 2026-10-13
kind: paper
source:
  title: "The Secure Software Factory: A Reference Architecture"
  url: https://agentbaseline.org/reference-architecture
project: steward
---

A new open reference architecture defines a software factory as one that [uses AI agents to turn a prompt, ticket or specification into tested code, and increasingly to deploy and operate it](https://agentbaseline.org/reference-architecture). Version 1 is dated [13 October 2026 and open for comment](https://agentbaseline.org/reference-architecture), drafted by [authors from Docker, Keycard, Barclays, Socket and Secure Theory](https://agentbaseline.org/reference-architecture). Docker's announcement says it grew from teams reporting [faster delivery, but also agents doing things nobody asked for, like escaping sandboxes, dropping databases and pushing to production without approval](https://www.docker.com/blog/from-baseline-to-secure-software-factory-securing-the-systems-that-build-your-software/).

## Boundaries outside the agent

The core rule is that [the agent proposes, policy authorizes, and infrastructure enforces](https://agentbaseline.org/reference-architecture). Four boundaries do the enforcing: [sandbox, network, supply chain, and identity and access](https://agentbaseline.org/reference-architecture), applied [from outside its own decisions, whether it cooperates or not](https://agentbaseline.org/reference-architecture). The reasoning, in Docker's summary, is that [the more autonomy you give an agent, the less you can rely on it to police itself](https://www.docker.com/blog/from-baseline-to-secure-software-factory-securing-the-systems-that-build-your-software/), because it [can be redirected at runtime by a prompt, a poisoned dependency or a malicious tool description](https://www.docker.com/blog/from-baseline-to-secure-software-factory-securing-the-systems-that-build-your-software/).

## Tests are a different question

For reviewers, the sharpest line is that [tests are a separate check: code can pass every one and still come from an agent that reached too far](https://agentbaseline.org/reference-architecture). A green merge gate says the output works; it says nothing about what the agent touched to produce it. That matters most when a factory runs unattended, which is where the paper's three levels go: [a developer, a predefined workflow, or an agent](https://agentbaseline.org/reference-architecture) chooses the next step. The boundaries [stay the same; what grows is the share of supervision the infrastructure takes over from people](https://agentbaseline.org/reference-architecture). At the top level, [an agent chooses the next step, so its plans must not become its permissions](https://agentbaseline.org/reference-architecture).

The paper [starts from real failures, like an agent that deleted a production database in nine seconds, and names the control each one lacked](https://agentbaseline.org/reference-architecture). Tailscale's Avery Pennarun put the same principle in plain terms: [give them the authority to do a particular job, make that authority expire, and keep the policies and audit trail somewhere the agent can't rewrite them](https://www.docker.com/blog/from-baseline-to-secure-software-factory-securing-the-systems-that-build-your-software/). Compare [Claude Code Review reading its rules only from the base branch](/posts/claude-code-review-ga-review-levels-never-approves-or-blocks/), another case of keeping the grading rules out of the agent's reach.
