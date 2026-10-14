---
title: "When agents flood the queue, review capacity is the real gate"
description: "Aug 7 Assembled: agent PRs left humans behind (TTF review 3.5h→16h); dual-model auto-approver + policy ridge hit 2.4× merges, 3.5× large-PR throughput, 43% auto-approvals — without raising reverts."
date: 2026-08-07
kind: field-note
source:
  title: "Code review bottlenecks: How we hill climbed our way to higher PR throughput"
  url: https://www.assembled.com/blog/code-review-bottlenecks-how-we-hill-climbed-our-way-to-higher-pr-throughput
project: steward
---

[John Wang at Assembled](https://www.assembled.com/blog/code-review-bottlenecks-how-we-hill-climbed-our-way-to-higher-pr-throughput) (Aug 7) reports the classic agent hangover: engineers *felt* faster, but merges barely moved. Open PRs piled up; Graphite stacks regularly hit twenty deep for one project; median time to first review went from **3.5 hours** (Dec 2025) to **over 16 hours** (May 2026); PR size rose about **2.5×**. More code, same number of human reviewers.

Their fix was not a bigger Claude session — it was a **review harness**. Inside [143.dev](http://143.dev), two independent cloud reviewers (Codex and Claude Code, simple `/review` prompts) run in separate sandboxes; an orchestrator applies a written approval policy (deterministic caps such as under 1,000 lines, plus LLM rules that refuse auth, billing, secrets, crypto, and new architecture) and may auto-approve. Rollout was phased: trusted alpha with human double-checks on every decision, then broader use with audits and per-engineer usage dashboards. The operating ridge is explicit — too loose and bugs compound in master; too strict and people abandon the lane after two rejections.

Early observational results after full-team launch: **PRs merged at 2.4×** the pre-agent baseline (lines of code **2.8×**, so not just thinner slices); auto-approvals reached **43%** of merges over three weeks; **large PRs (600+ lines) gained 3.5× throughput** even though they mostly stayed human-gated; refactors **7.5×**, tests **3.4×**; bugs reported per week down **27%** with reverts steady at **0.8%** (short window, they caveat). Mechanism they favor: an eight-minute predictable fast lane changed which work people attempted, raised evidence quality on *all* PRs, and cleared small conventional diffs so humans could concentrate on judgment-heavy ones. Cost sample: about **$3.57** LLM usage per automated review attempt.

## Why it matters for code review

Always-on agent factories do not fail first on generation — they fail when verification and admission cannot keep pace. Assembled’s numbers are a receipt that continuous harnessed review capacity compounds past peak-session heroics: modest dual-model gates plus a policy you can tune beat a heroic human queue that absorbs overnight FOMO as a sixteen-hour wait. The productive complication is that bursts still win on auth, billing, and new architecture — the harness’s job is to make those the scarce exceptions, not the default backlog.
