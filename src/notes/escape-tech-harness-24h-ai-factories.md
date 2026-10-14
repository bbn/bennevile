---
title: "Leaving agents idle overnight is shutting down CI every evening"
description: "Apr 3 Escape/Carossio SF field report: harness + AI-factory layers; FOMO as asset utilization — overnight produces candidates not commits; verification beats advice."
date: 2026-04-03
kind: field-note
source:
  title: "Everything I Learned About Harness Engineering and AI Factories in San Francisco (April 2026)"
  url: https://escape.tech/blog/everything-i-learned-about-harness-engineering-and-ai-factories-in-san-francisco-april-2026/
project: steward
---

Antoine Carossio’s Apr 3 Escape Tech field report from a late-March SF week (YC DevTool Day, All Things Dev, CTO/CPO conversations) is the clearest public articulation of the psychological half of continuous factories: **leaving agents idle from 7pm to 9am is the equivalent of shutting down CI every evening**. Agents are infrastructure; unused overnight capacity is a deliberate choice to slow the build-review-ship-learn loop, not a lifestyle preference. The receipts he cites are logged runs — Rakuten’s ~7h autonomous Claude Code pass on a 12.5M-line codebase, OpenAI’s 25h Codex stress test — not demos. Strongest teams push work at end of day; overnight agents write tests, review, refactor, and scan; morning is triage; **nothing merges without human approval** — candidates, not commits.

Around that claim he maps harness engineering as the system outside the model: intent → framed issue → context/skills → execution → verification → isolation/permissions → feedback. Weak verification is “vibe coding at scale”; weak isolation is parallelism without control. Practical playbook: two weeks of real agent work logging reverts before inventing guardrails; autonomy tiers (typo/test bumps vs schema/auth); convert recurring review comments into deterministic checks; keep root `AGENTS.md` lean (ETH Zurich warning that bloated context can hurt). Tooling table is bottleneck-indexed (worktree isolation, second-model review plugins, always-on PR review) rather than a install-everything stack.

## Why it matters for code review

Continuous harnessed momentum compounds past peak-session heroics only when idle hours are a product surface with reviewable candidates waiting — and when verification is a gate, not advice in a prompt. Pair overnight candidate queues with human promote and cheap left-of-merge sensors: the FOMO that nothing ran on your behalf overnight is real capacity dying on the table, but only after the factory already refuses to treat agent claims as evidence.
