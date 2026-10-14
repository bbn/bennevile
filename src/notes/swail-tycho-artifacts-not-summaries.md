---
title: "Tycho: never accept the model’s summary — only artifacts it can’t narrate"
description: "Jul 30 Swail Tycho: completion-hook ledger that checks files, commands, exit codes, and claims against git/FS — no LLM in the trust path; VERIFIED/FAILED/STALE for overnight review."
date: 2026-07-30
kind: field-note
source:
  title: "Tycho — Verify what your AI coding agent actually did"
  url: https://github.com/swail-labs/tycho
project: steward
---

[Swail Labs](https://github.com/swail-labs/tycho)’s Tycho (CLI/`tycho-cli`; Claude Code and Codex hooks; Jul 30 public trail) is the boring half of overnight coding: a **completion hook that records what the turn did and checks it against artifacts the model cannot fake by narrating**. Files touched, commands run and their exit codes, claims in the agent’s own output — then git, the filesystem, and the harness event stream as ground truth. The motto is literal: never accept the model’s summary as evidence. No API key, no second model, nothing leaves the machine; stdlib-only Python (or a standalone binary). On Claude Code the human channel carries the verdict for free; on Codex the same offline checker spends a little context because that harness has one shared field.

The receipt that matters for morning review is the **acceptance ladder**: `attempted → executed → artifact_changed → claim_supported`. Gaps render as empty rungs, not invented failures. Verdicts are `VERIFIED`, `FAILED`, `STALE` (evidence older than the code), or backfilled `UNVERIFIED`. `tycho blame` ties a file to the turns that touched it; `tycho review` flags hunks no test or command exercised; exit codes are one-per-adverse-kind so CI can choose what blocks (`FAILED`, `STALE`, unexercised, trailer mismatch). Honest limits stay in the open: unkeyed SHA-256 is tamper-evidence against accidents, not authenticity against a motivated agent; some provenance families are advisory; a backfilled transcript never gets a live verdict.

## Why it matters for code review

Always-on harnessed momentum compounds only when overnight “done” is checked against process evidence, not session prose. Peak-session Claude mastery still wins on a single change you can watch; continuous factories lose the night when green summaries outrun anything a hook recorded. FOMO that agents aren’t working overnight is cheaper than waking to PRs whose only proof is the builder’s diary.
