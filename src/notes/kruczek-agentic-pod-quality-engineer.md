---
title: "Make checking the work a job with a number, not a rushed PR step"
description: "June 2026 org field note: AI-coauthored PRs carry ~1.7× more review findings — rebuild around four-person pods (lead, two directors, quality engineer) so judgment and verification scale with agent output."
date: 2026-06-01
kind: field-note
source:
  title: "If I Built My Engineering Organization From Scratch Today"
  url: https://matthewkruczek.ai/blog/agentic-engineering-org.html
project: steward
---

Matthew Kruczek’s rebuild-from-scratch note names the gap every throughput dashboard hides: developers got faster; companies often did not. The org chart was tuned when writing correct code was the scarce step. Agents made code cheap. What is scarce now is deciding what to build, saying it clearly, and confirming the result is right. Flood a structure built to ration authorship with endless cheap diffs and you get exactly the receipts he cites — more merged PRs without matching company-level delivery, and AI-coauthored pull requests carrying roughly 1.7× more review findings than human-only ones (Faros / CodeRabbit figures as attributed).

The proposed atom is a four-person *pod* directing a large flexible agent set: a pod lead who turns vague asks into parallelizable plans and owns the result; two engineers whose job is design, specs, directing agents, and stitching output; and one *quality engineer* who owns checking as a real job with a number to hit — tests and automatic gates every agent artifact must clear before human attention is spent. Work moves on clear, testable specs shared by people and agents. The org above is three layers: thin direction (risk tiers and quality bar), stream-aligned pods, and a deep shared platform (skills, harness, testing, guardrails). The career ladder has to move with it — promote for specs that survive execution, judgment that catches almost-right answers, and bugs that never shipped — or people keep writing code by hand to look busy.

## Why it matters for code review

Review capacity is headcount design, not a bot setting. If checking stays an underfunded end-of-line step while agents multiply authors, you staff a flood. Name the quality engineer before you open the floodgates, put machine checks in front of scarce human attention, and measure cost per result at the quality bar — not velocity that flatters generation.
