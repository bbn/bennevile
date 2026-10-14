---
title: "The Factory: tickets in, gated PRs out — humans keep the merge button"
description: "Sep 9 mikeroySoft: label-driven always-on factory (triage→worktree→CI gate→evidence-bound review→merge); self-declared done is unreliable; 14 self-merged tickets; events.jsonl accountability, not autonomy theater."
date: 2026-09-09
kind: field-note
source:
  title: "The Factory: Tickets In, Reviewed PRs Out, Humans Keep the Merge Button"
  url: https://www.mikeroysoft.com/post/the-factory-tickets-in-prs-out/
project: steward
---

[mikeroySoft’s Sep 9 field note](https://www.mikeroysoft.com/post/the-factory-tickets-in-prs-out/) describes a small Python factory that turns labeled GitHub issues into gated, reviewed PRs on a systemd timer — MIT, repo-agnostic via `.factory.toml`, state in labels/comments/PRs plus an append-only `events.jsonl`. The label contract is the pipeline: `needs-triage` → local-model triage to `ready-for-agent` (it may *propose* `wontfix`, never apply it) → worktree worker on `agent/<n>` → deterministic gate from the repo’s *real* CI checks (timeouts, process groups) → evidence-bound reviewer (every blocking finding cites an acceptance criterion, documented rule, or concrete defect; `VERDICT: APPROVE|REVISE`) → merge only when gate PASS + `factory-approved` + green CI (fail-closed if checks missing) + freshness vs tip of `main`. Humans keep the merge button and `wontfix`.

The load-bearing claim: **self-declared completion is unreliable; deterministic verification is the defense.** The factory found bugs in itself — a wedged gate that held a GPU lock for two hours (#5 → per-check timeouts), empty-branch PR destruction on refresh (#49), and the reviewer catching a double-count in `factory stats` (#62). Fourteen self-merged tickets on the factory repo. Continuous always-on with accountability receipts, not autonomy theater.

## Why it matters for code review

Always-on factories that only ask whether the night’s agents claimed done are measuring the wrong gate. mikeroySoft’s useful receipt for harnessed throughput: every stage distrusts the previous one, the human still owns merge/`wontfix`, and `events.jsonl` makes the night auditable. Review continuous factories the way this merge stage does — gate + labeled approval + green CI + freshness as a single conjunction — and treat FOMO for idle agents as wasted if daytime heroes still trust “LGTM, I finished” without a deterministic check.
