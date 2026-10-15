---
title: "22 nights, 56 PRs, 54 merged: the overnight loop stalled on tickets, not code"
description: "Yohei Nakamura audited his attended overnight coding-agent loop against its records: 72 tickets, 56 PRs, 54 merged, 0 reverted. Ticket defects outnumbered code failures 4.5 to 1, 18 of 38 constraints were learned only by failing, and verification needed a layer that distrusts the evidence itself."
date: 2026-08-17
kind: field-note
source:
  title: "Auditing 22 Days of an Overnight Coding-Agent Loop"
  url: https://yoheinakamura.dev/night-loop-audit/
project: steward
---

**Yohei Nakamura** built an overnight loop as a Claude Code skill for a music-software rewrite: pull ready Linear tickets, run a **Judge** that rejects unready tickets before any attempt, implement in isolated worktrees on Sonnet, then verify with a separate **adversarial Opus reviewer** plus UI and audio checks. A human always merges. Parallelism grew from one ticket a night to ten.

Then he audited **July 11 – August 1** against the ledger. **72 tickets → 65 attempted → 56 PRs → 54 merged** (the other two merged days later), **0 closed unmerged, 0 reverted**, and only **2 of 56** PRs took a later human commit. Median PR: **397 lines, 3 files**, about 24.7k lines in total. Most nights ran under the cap because *ready tickets* were the limiter.

**What stalled was the ticket.** Of 23 inbox notes asking for a human decision, 18 came from wrong premises, missing product decisions, or thin specs; only 4 were code the loop rejected twice. **Boundaries were designed, traps were learned:** all 13 up-front constraints govern what the agent may do, while every one of the 18 added later covers what silently breaks around the loop — runtimes, cron, a formatter that printed "success" while exiting non-zero — and 14 of those lived only on one laptop. **Evidence needed its own check:** a verification harness reported MATCH with the bug fully present, so verdicts now count only after hashes and freshness tie the evidence to the change. The rule that came out of it: *inputs are claims, not facts* — including the operator's own questions.

## Why it matters for code review

This is what steady overnight throughput looks like when it works: modest per-night batches, a human final gate, and a merge rate near 100% because readiness was judged *before* compute was spent. The audit also shows where the verification tax really lands at volume — on ticket quality, on shared memory of learned traps, and on proving the evidence is real — not on the reviewer model. Read beside [Osmani on loop engineering](/posts/addy-osmani-loop-engineering/) and [Sinatra's 306 agent PRs behind a human merge gate](/posts/sinatra-306-agent-prs-94-percent-human-merge-gate/).
