---
title: "Least privilege for agents: delegated identity, ephemeral tokens, MCP intersection"
description: "Harness field note: an agent holds no standing privilege — scoped subset of the triggerer’s access, server-side RBAC/OPA, and connector∩agent tool allow-lists on every call."
date: 2026-07-16
kind: field-note
source:
  title: "Identity and Permissions for AI Worker Agents in Harness"
  url: https://www.harness.io/blog/identity-and-permissions-for-ai-worker-agents-in-harness
project: steward
---

Isolation answers “what if the agent is compromised?” Srivastava and Jindal’s companion note answers the quieter question: when the agent is doing exactly what you asked, what is it *allowed* to reach? Invariant: an agent holds no standing privilege of its own. Effective access is a bounded subset of the triggering principal’s — the minimum the task needs — minted per run and deleted when the run ends.

Five controls, two phases. Before it runs: RBAC splits author / publish / execute (and connector attach) so building an agent is not a free pass into production; OPA Policy-as-Code evaluates the agent definition (models, connectors, turn caps) at save and trigger. While it runs: a scoped ephemeral token that can only narrow the parent’s grants; an MCP gateway that allows only `connector.allowedTools ∩ agent.allowedTools` per call; structured attribution naming the real human through the token. High-blast-radius verbs default-deny. None of this trusts the model — every check is server-side.

## Why it matters for code review

Same shape as [CapScope](https://arxiv.org/abs/2609.08371) ([our note](/posts/capscope-capability-scoped-harness/)) and the cross-substrate authority gap, written as delivery-platform practice: authority is not a prompt instruction, and “the coding agent opened the PR” is not an identity model. If your factory’s review bot, autofix agent, and deploy agent share a long-lived keyring or a full connector toolbox, merge gates are theatre. Scope the caller, expire the token, intersect the tools — then review whether those grants still match the change.
