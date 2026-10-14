---
title: "Two months of scheduled routines: 82 merges, then review can’t keep up"
description: "Sep 6 Hodalog: Claude Code Routines grew 2→8; 119 Issues, 78% adopted, 95% PR merge — plus a weekly PR-care bot; adoption decision and Issue readability become the bottleneck."
date: 2026-09-06
kind: field-note
source:
  title: "Two Months of Running an Autonomous Improvement Loop with Claude Code Routines"
  url: https://hodalog.com/en/autonomous-improvement-loop-two-months-review/
project: steward
---

Hodalog’s Sep 6 field report is a measured always-on loop on a personal development environment — not a glory session. Claude Code Routines investigate, file GitHub Issues, implement adopted ones as draft PRs, and (new) babysit those PRs when CI fails or branches conflict. Over ~two months the scheduled set grew from **2 to 8** routines; from a settled labeling window (2026-06-28 → 2026-09-04) the ledger is concrete: **119 Issues**, **78% adoption** (93/119), **89% of adopted Issues became PRs** (83/93), **95% merge rate** on opened PRs (82/86), median Issue→merge **3.4 days**, median PR→merge **0 days**.

The interesting half is what they added once “open a draft and stop” stalled. A **Weekly PR Care Bot** fixes CI failures and conflicts on the auto-generated PRs at the start of the week — continuous motion after the implement step, not just generation. Investigation scope widened beyond Neovim to CLI tools, environment, agent config, and CI, with at most one scan per day. Prompts moved into the repo (`routines/prompts/*.md`) so the routine config is a one-liner that reads the file — the harness, not the cloud UI form, owns the durable instructions. Measurement is first-class: a Go aggregator + weekly Actions overwrite a single status Issue with adoption/merge/age; alerts fire below 60% adoption or when the oldest undecided Issue exceeds 14 days; a monthly routine opens a PR to improve the *worst* investigation prompt.

The productive complications are the ones FOMO skips. AI-written Issues became unreadable at volume (median body ~5.4k characters across 60 Issues) until length, title, and citation caps landed in the prompt. One Issue a day sounded manageable; at seven a week the **adoption decision** — not Issue creation — became the scarce resource, especially when proposals were too advanced to triage cheaply. Code-writing targets (CLI tools) showed the lowest adoption (50%) because review and ongoing maintenance cost outweighed benefit. Cloud routines also don’t inherit local skills/hooks/rules, so implementation quality drifts from what the author gets interactively.

## Why it matters for code review

This is harnessed overnight/always-on throughput with a merge funnel you can count — and a warning that sustained factories relocate scarcity to **human adopt/merge bandwidth** and Issue readability, not model tokens. Pair with verify-first and Audit Tax receipts: a 95% merge rate on a personal config stack is not a license to skip independent gates when the surface is production code. Continuous routines compound past peak-session heroics only when care bots, measurement, and prompt-as-code keep the morning queue judgeable.
