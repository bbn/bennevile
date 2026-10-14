---
title: Authority as inventory — why the boring capability ceiling wins
description: CapScope’s lesson isn’t “spot the injection.” It’s freeze what an agent may do outside the model, then put an owner on that inventory. Fleet management of ceilings across a software factory is the natural next layer — and it’s exactly the kind of platform-dependency objective stewards are good at enforcing.
date: 2026-09-10
kind: editorial
project: steward
---

Coding agents usually get ambient authority: name a path or a tool and they can act on it. Prompt injection then just asks them to use power they already have.

The [CapScope](https://arxiv.org/abs/2609.08371) shape is deliberately boring ([our note](/posts/capscope-capability-scoped-harness/)). Before the agent reads untrusted text, the harness freezes a task-wide authority ceiling and gives each sub-agent typed capabilities *outside* the model context. Every tool call is checked against that inventory. The model can want something; it can’t mint permission the harness didn’t grant.

That pattern scales past one agent. A software factory is a graph of ceilings — MCP allowlists, pinned skills, subsystem credential boundaries, “this lane never talks to prod.” Someone has to own that graph so code never ships in a way that compromises it. Those are stable objectives with clear right/wrong labels: platform dependencies, not vibes.

## Why it matters for code review

Review that’s only about the diff misses the factory. The interesting gate is whether the change respects the authority inventory — and whether you have a narrow owner whose job is never letting that inventory rot. Boring beats clever when the asset is permission.
