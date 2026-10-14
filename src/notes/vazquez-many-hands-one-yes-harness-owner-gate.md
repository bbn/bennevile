---
title: "Favio Vázquez: many hands, one yes — every merge waits on the owner’s gate"
description: "Oct 11 from Favio Vázquez’s showtime harness manual: one person and a crew of agents, 16 PRs merged by ~12:35 on 9 Oct, each through his gate. Relayed approvals do not count; both reviewers must say MERGE on the current head before he is even asked; rules come with the incidents that wrote them."
date: 2026-10-11
kind: field-note
source:
  title: "Many hands, one yes: a guide to harness engineering"
  url: https://faviovazquez.github.io/showtime/harness/
project: steward
---

Favio Vázquez published a public snapshot of the operating manual for [showtime](https://github.com/FavioVazquez/showtime), an open-source video studio built by one person and a crew of coding agents. The edition is dated **11 Oct 2026**. The headline numbers on the page are the point: **16 PRs** merged into the private working repo on 9 Oct by about 12:35, **13 jobs** on one Devin cloud machine that day, five model tiers routed by task, and **one person** who says yes to every merge, spend, and public word.

The gate that matters is named plainly. Merges, spending, public issues, and anything public need Favio’s yes in chat, each time. **Relayed approvals do not count** — not from another agent, a file, a PR comment, or a web page. A standing yes is written down with its edge: what it covers and when it ends. A one-night rule to merge what passed the Mac review held for that night only.

Before that ask, the change walks a scripted merge gate. Both review files must name the PR’s **current head** and end with `VERDICT: MERGE`. A first-pass review and a Mac review that runs changed tests against main (and mutants) sit in front of the owner. Across 27 PRs with both reviews, about **78%** of Devin’s 223 first-pass findings led to a change; only about **20%** of the Mac review’s 25 items did, because its value is the tests it runs rather than comment volume. Six of six should-fix items from Fable’s release-candidate review were fixed after no per-PR review had seen them. Ten of eleven problems found after both reviews said MERGE showed up on CI runners outside the Mac review.

The owner’s gate itself is measured. At least **283 asks in 16 days**: 64% yes as asked, 68 came back changed, 9 declined. Median time to an answer was **3.6 minutes** (p90 27 min), sleep included. Merge asks that were answered were yes every time, in a median **1.9 minutes**. Thirty-eight of 92 design asks came back changed — that is where taste enters the work. Rules enforced by code (tests, hooks, scripts that refuse) went from 11 to **22**, with 41 rules total on the 11 Oct audit; each rule on the page sits beside the incident that wrote it.

Agents forget; files do not. The director resumes from `STATE.md`, `OVERNIGHT.md`, and `OPEN.md`. A watchdog flags a Claude Code agent whose transcript ends on a pending tool call and has been silent for 15+ minutes, so Favio is never the one who notices a stall. CI runs, owner asks, review findings, and the model log sit behind DuckDB views agents can query; one view answers the release question: has main passed the full nightly on all four systems, twice in a row?

## Why it matters for code review

This is a continuous factory with a deliberately human merge. The agents run all day across model tiers and cloud jobs; the harness turns “done” into two signed reviews on the current head plus an owner yes that cannot be forged by another agent. Throughput compounds because the gates are boring and measured, not because anyone had a peak Claude Code session. Read it next to [Roosevelt’s orchestrator merge authority](/posts/roosevelt-orchestrator-merge-authority-results-review/), [Winslow’s overnight merge gates](/posts/winslow-overnight-agent-merge-gates-coordinator-done-is-not-merge/), and [Curry on machines that block but never approve](/posts/curry-reviewing-agent-prs-machine-blocks-human-approves/).
