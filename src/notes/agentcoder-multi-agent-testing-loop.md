---
title: "AgentCoder: programmer + test designer + test executor"
description: Multi-agent code generation with iterative testing and optimization—explicit separation of writing code and writing/running tests.
kind: paper
date: 2023-12-20
source:
  title: "AgentCoder: Multi-Agent-based Code Generation with Iterative Testing and Optimisation"
  url: https://arxiv.org/abs/2312.13010
project: steward
---
AgentCoder splits roles: a programmer agent, a test-designer agent, and a test-executor loop that feeds failures back for optimization. The architectural claim is that iterative testing should be a first-class multi-agent protocol, not an afterthought tool call.

It is an early, clear example of verification-oriented multi-agent coding—closer to review/QA structure than to a single chat session that sometimes runs pytest.

## Why it matters for code review

Review quality climbs when someone other than the author owns the failing tests. AgentCoder’s role split is a template: do not let the same agent that wrote the patch monopolize the definition of “done.”
