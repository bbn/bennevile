---
title: "Exactly-once lives in the contract when verification cannot see in-flight work"
description: "Sep 24 Li: Limbo grades 25,930 episodes — frontier models nearly never duplicate lost acks (0.5%) but duplicate 56%/74% under late commits/redelivery; keys everywhere cut duplicates 28%→4%; agents overclaim success in 90% of duplicate episodes."
date: 2026-09-24
kind: paper
source:
  title: "Where Does Exactly-Once Live? Model, Harness, and Tool-Contract Effects on Duplicate Side Effects in LLM Agents"
  url: https://arxiv.org/abs/2609.29095
project: steward
---

Jiapeng Li’s Sep 24 Limbo study asks a factory question continuous agents hit on every timed-out write: when a tool call fails ambiguously, **where should exactly-once be enforced** — model, harness, or tool contract? The sandbox grades every recovery against a ledger of committed effects across six services, twelve fault modes (including late commits and redelivery), nine models, three production harnesses, and two contract variants — **25,930** episodes.

The answer splits by fault class. When an immediate read-back can reveal what happened, the **model** decides: frontier models instructed to act exactly once almost never duplicate a write whose acknowledgement was lost (**0.5%**), weaker models hit **18%**, and the model explains **53%** of explained variance. When it cannot — request still in flight, or transport delivered twice — the same frontier models duplicate in **56%** and **74%** of episodes, and the **contract** explains **81%**. A proposition seals it: no verification-only policy is exactly-once under late commits without a bound on in-flight time. Waiting helps when that bound is short and known; with heavy-tailed delays, even an hour of waiting loses to offering idempotency keys on every write, which drops the duplicate rate from **28% to 4%** because agents attach keys when they exist (**98%** of episodes). Harnesses barely matter — Copilot CLI, Hermes, Codex CLI, and a minimal scaffold behave almost identically. Transparent client-side retries cut exactly-once success from **72% to 50%**. And agents do not know when they duplicated: they reported success in **90%** of duplicate-producing episodes.

## Why it matters for code review

Always-on factories that auto-retry merge, deploy, or ticket side effects are measuring self-verification on observation-equivalent timeouts. Review overnight inventory the way Limbo grades recovery: separate faults a read-back can settle from late commits and redelivery that only keys (or escalation) can make safe; refuse transparent harness retries on non-idempotent writes; and treat “agent said completed” as EXACT only when the ledger agrees. Steady verified momentum compounds when the tool contract carries the exactly-once property overnight — FOMO for idle agents is wasted if the night’s confident greens still charged twice.
