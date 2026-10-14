---
title: "Unattended agents need containment, not more approval dialogs"
description: "May 25 Anthropic: 93% approve rate → approval fatigue; environment boundaries (sandbox/VM/egress) cap blast radius so always-on loops can run without a human watching every tool call."
date: 2026-05-25
kind: field-note
source:
  title: "How we contain Claude across products"
  url: https://www.anthropic.com/engineering/how-we-contain-claude
project: steward
---

Anthropic’s May 25 containment post answers the overnight question reviewers keep asking sideways: if agents are going to keep working when nobody is staring at the terminal, **what caps the blast radius**? Supervision via per-turn approvals looked correct on paper. Telemetry said users approved ~93% of prompts — and the more dialogs they saw, the less each one meant. Auto mode reduces friction; it still misses a slice of overeager actions. Probabilistic oversight alone cannot carry continuous factories.

They separate three risks (user misuse, model misbehavior, external attack) and three defense surfaces (environment, model, external content), then insist the **environment layer goes first**. Three patterns map to product audiences:

- **Ephemeral gVisor container** (claude.ai) — minimal blast radius, no persistent workspace.
- **HITL + OS sandbox** (Claude Code) — Seatbelt/bubblewrap cut permission prompts ~84%; still assumes a developer who can read bash. Pre-trust hooks and “run this for me” phishing showed why config-before-consent and egress matter more than another approve button.
- **Local VM** (Cowork) — hard filesystem/network bounds for users who should not be judging `find | rm`. Moving the agent loop outside the guest kept the product alive when the VM failed, without giving the model an escape-hatch key.

The failures that taught them most were egress through *allowed* paths: an attacker key talking to `api.anthropic.com`, credentials readable because they lived beside the agent. Model classifiers cannot catch “the user asked for it.” Deterministic boundaries — credentials never in the sandbox, proxies that bind destination *and* capability — are what fire when everything probabilistic misses. Persistent memory and scheduled long-running agents make the stakes higher: an injection that lands in durable state reloads every wake.

## Why it matters for code review

Harnessed overnight momentum is not “leave Claude Code open and hope.” It is **admission of work into an environment whose reach you can name in a sentence**, with merge/review still owning judgment. FOMO about idle agents is rational only after containment makes unattended loops a bounded risk — otherwise the morning review inherits not progress, but an unbounded blast radius that happened to look busy.
