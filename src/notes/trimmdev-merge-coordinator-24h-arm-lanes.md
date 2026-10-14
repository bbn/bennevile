---
title: "Merge-coordinator: 24/7 arming that never bypasses your checks"
description: "Jul 5 trimmdev: workers/agents open PRs; a GitHub Actions coordinator arms, serializes risky lanes, revalidates stale heads, re-arms when GitHub drops auto-merge — and cannot merge past required checks."
date: 2026-07-05
kind: field-note
source:
  title: "merge-coordinator — 24/7 GitHub Actions PR landing"
  url: https://github.com/trimmdev/merge-coordinator
project: steward
---

[`trimmdev/merge-coordinator`](https://github.com/trimmdev/merge-coordinator) (Jul 5; still shipping) is the landing half of an always-on factory: **workers (people or coding agents) open PRs; the coordinator owns merging them**. It runs on GitHub Actions with your machine off — arms every eligible PR so GitHub merges on green, keeps path-globs you flag in a **serial lane** (one at a time), **revalidates** stale heads against current base before arming, re-arms the instant GitHub silently disables auto-merge, and can open a revert PR when a configured post-merge workflow fails.

The hard rule is what it will *not* do: push to base, merge past required checks/branch protection, arm two serial-lane PRs at once, arm forks by default, or arm branches reserved for another sign-off system. A `hold` label / draft is the human brake. Fine-grained tokens that cannot read check-runs use `checkWorkflow` conclusions instead of `statusCheckRollup` so “green” still means your CI, not a missing permission. Inspired by [jremick/agent-merge-batch-protocol](https://github.com/jremick/agent-merge-batch-protocol)’s “workers don’t merge; one coordinator owns the write path,” but implemented as lane-aware arming rather than batch retest of everything.

## Why it matters for code review

Merge-rate under sustained agent load is where continuous factories die: green PRs stall, stale heads sneak in, auto-merge flakes leave overnight work on the tarmac. A 24/7 coordinator that only *arms* — and never bypasses the gate — is harnessed throughput after the verify tax is paid. Pair it with independent review gates upstream; the FOMO worth acting on is a morning queue of armed, revalidated PRs waiting for green, not a burst session that merges by hand while the rest of the fleet idles.
