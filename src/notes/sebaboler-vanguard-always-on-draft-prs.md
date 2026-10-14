---
title: "Vanguard: always-on factory that stops at draft PRs"
description: "Jun 5 Vanguard (still pushing Sep 23): watch loop claims tickets from GitHub/GitLab/Linear, plan→implement→review→adversary→repair in Docker, Proof-of-Work verify, then draft PR only — humans own merge."
date: 2026-06-05
kind: field-note
source:
  title: "Vanguard — Autonomous Software Factory"
  url: https://github.com/SebaBoler/vanguard
project: steward
---

[SebaBoler/vanguard](https://github.com/SebaBoler/vanguard) (created Jun 5; still shipping as of Sep 23) is an always-on software factory you leave running on a Synology, Hetzner box, or any Docker host. It pulls tasks from GitHub Issues, GitLab, or Linear, runs a staged agent pipeline inside an isolated sandbox, and opens a **draft** PR or MR. Humans review and merge. Vanguard does the toil.

The pipeline is deliberate, not “Claude in a while loop.” A **spec pass** (read-only planner) triages vague tickets to needs-info, posts a `<tech_spec>` comment, and advances state so a human can reject the plan before spend. The **agent pass** then runs implementer → reviewer → simplifier (with optional adversary and conformance stages), each with its own model/provider knobs. After the agents finish, a host-owned **Proof-of-Work** command must succeed; failures flag the PR instead of silently greenwashing. Every run leaves an auditable trail under `.vanguard/runs/`: per-stage transcript, a **git bundle of the exact changes**, diff, and a `run_complete` metric line (cost, tokens, cache efficiency, duration, exit reason). The watch loop lists ready tasks, claims them, and processes end-to-end while budget/rate/circuit-breaker **Guard** controls keep the fleet bounded.

Design posture matches continuous factories that survive overnight: **harness over code** (each agent failure becomes a permanent instruction/skill/sandbox fix), token efficiency by construction (reported 97–99% cache on real runs), evals-first regressions on prompt/model changes, and optional fork-and-select to trade tokens for quality before review. Secrets stay out of argv; `--llm-proxy` keeps real credentials on a trusted sidecar. The factory never auto-merges.

## Why it matters for code review

Always-on harnessed throughput only beats peak-session heroics when admission stays human-owned. Vanguard’s useful receipt is the stop line: overnight workers may plan, implement, review, repair, and prove work — but the merge button stays with a person reading a draft PR backed by PoW and a run bundle. Idle Claude is still FOMO; an unsupervised merge queue is worse. Bursts still win for forming intent and refusing bad specs; the harness’s job is to clear the loading dock overnight without promoting the dock into production.
