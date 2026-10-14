---
title: "ShopBack: prompts plateaued; the harness made MRs land"
description: "Jun 22 Yan: production AI engineering harness — Shadow Explorer + multi-agent review + backtrack loops; first-pass review ~40%→70%; Agent = Model + Harness."
date: 2026-06-22
kind: field-note
source:
  title: "From Prompt Hacks to Autopilot: How We Built an AI Engineering Harness at ShopBack"
  url: https://medium.com/shopback-tech-blog/from-prompt-hacks-to-autopilot-how-we-built-an-ai-engineering-harness-at-shopback-9fb9e7f3f282
project: steward
---

[Yongkang Yan](https://medium.com/shopback-tech-blog/from-prompt-hacks-to-autopilot-how-we-built-an-ai-engineering-harness-at-shopback-9fb9e7f3f282) (ShopBack, Jun 22) opens with the bug every always-on factory eventually ships: the agent read a ticket, wrote a clean MR, lint and tests passed — and missed the *second* of two services it was supposed to touch. Prompt rewrites (v12…v27) barely moved the needle. The fix was structural. Framing: **Agent = Model + Harness** (Hashimoto): the model sets the ceiling; the harness decides whether you ship.

They walk three eras — prompt → context → harness — and land on a 7-phase autopilot: **Context → Plan → Implement → Review → Refine → Validate → Ship**, with mandatory human gates after Plan and Validate. Load-bearing pieces: a parallel **Shadow Explorer** that independently maps affected services before coding (the missed-service bug dies in Context); **multi-agent Review** with separate dimensions (acceptance-criteria traceability, quality, architecture); **Progressive Disclosure** via a lightweight domain index before deep reads; and **backtrack loops** so Review can send the agent back to Plan instead of shipping a workaround. An earlier four-stage gate (no plan without research, no code without plan, no ship without review) alone lifted first-pass review from ~**40% to over 70%**. Same model; different scaffolding. Ops agents reuse the pattern (merchant/content), with write ops still requiring explicit human confirmation and a mutable incident knowledge base cutting known-pattern investigation from 15+ min to under 5.

## Why it matters for code review

Continuous modest throughput compounds only when review is relocated into the harness — independent explorers and acceptance reviewers — not into “try harder” prompts. Peak-session Claude mastery still wins on ambiguous intent; the always-on path needs a shadow map and a criteria gate so a confident MR that touches half the blast radius never reaches the morning queue as “done.”
