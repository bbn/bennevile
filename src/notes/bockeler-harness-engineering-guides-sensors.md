---
title: "Guides before, sensors after: Böckeler’s map for trusting agent code"
description: "Apr 2 Thoughtworks/Fowler: coding-agent harness as feedforward guides + feedback sensors, computational vs inferential, keep quality left — and why behaviour harnesses still demand human supervision."
date: 2026-04-02
kind: field-note
source:
  title: "Harness engineering for coding agent users"
  url: https://martinfowler.com/articles/harness-engineering.html
project: steward
---

Birgitta Böckeler’s Apr 2 Thoughtworks essay on martinfowler.com is the clearest user-side map yet for outer harnesses around coding agents: Agent = Model + Harness is too wide; for *users*, the job is building the outer layer that raises first-pass odds and self-corrects before human eyes. Two axes organize the practice.

**Direction:** *guides* (feedforward) steer before the agent acts — `AGENTS.md`, skills, bootstrap scripts, code mods. *Sensors* (feedback) observe after and feed LLM-consumable signals back — ArchUnit hooks, custom linter messages that include the fix instruction (positive prompt injection), review skills. Guides-only never learns whether rules worked; sensors-only repeats the same mistakes.

**Execution type:** *computational* controls are deterministic and cheap (tests, types, structural analysis) — fast enough to run on every change. *Inferential* controls are semantic (AI review, LLM-as-judge) — slower, non-deterministic, useful when a strong model adds judgment computational tools cannot. Timing still matters: keep quality left — cheap sensors before commit; expensive ones post-integration; continuous drift sensors outside the change lifecycle.

She splits regulation into maintainability (easiest — existing tooling), architecture fitness (fitness functions), and **behaviour** (the elephant): most high-autonomy setups still feed-forward a functional spec and feed-back “AI-written tests are green,” which puts too much faith in generated suites. Harnessability and “ambient affordances” explain why greenfield typed modular codebases leash agents better than debt-heavy legacy — the places that most need a harness are hardest to harness. Templates and Ashby’s requisite variety argue for topology-narrowing service shapes so a comprehensive harness is even possible. Humans remain the scarce judgment: externalize conventions into guides/sensors, but aim the human at where input still matters — not rubber-stamp every token.

Open questions land on continuous factories: how to keep a growing harness coherent when guides and sensors contradict; how to measure harness coverage the way mutation testing measures tests; tooling to sync controls as a system rather than scattered CI steps. She cites OpenAI’s environment/feedback/control-system turn and Stripe Minions’ shift-left hooks as practice receipts.

## Why it matters for code review

Overnight and always-on agents only beat peak-session heroics when the outer harness already ran computational sensors on every unit and reserved inferential review for what tests cannot see. Böckeler’s vocabulary makes the verification tax designable: put cheap gates left of the morning queue, stop treating green AI-authored tests as a behaviour proof, and spend human review on the residual — intent, tradeoffs, and the behaviour harness gap — not on re-deriving style and structure the sensors should have caught while you slept.
