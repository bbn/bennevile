---
title: "engrams: Cortex open-sources the always-on cloud factory around Claude Code and Codex"
description: "Sep 24 Unni: open-source engrams runs agents in your cloud — scheduled CVE/dep PRs, Datadog hotspot rewrites, error triage with dedupe, Linear+Slack end-to-end with microVM sub-agents."
date: 2026-09-24
kind: field-note
source:
  title: "Introducing engrams: an open source software factory"
  url: https://builders.cortex.io/blog/introducing-engrams/
project: steward
---

Nikhil Unni’s Sep 24 Cortex builders note open-sources **engrams** — a platform for running Claude Code, Codex, or your own harness in *your* cloud (Firecracker / nested virt on GKE or EKS; Apple Virtualization or KVM locally). Internally, Cortex already uses it daily via UI or Slack mention, but the claim is that **scheduled automations** are where cloud agents beat interactive peak sessions. You bring Anthropic/OpenAI keys or route through OpenRouter so each workload picks a cost-appropriate model.

Four factory loops they describe as live: (1) **Dependency / CVE upgrades** on a schedule — open each upgrade, run tests, fix breakages, one PR per change, with a review automation before a human; escalate when a runtime jump outruns the suite. (2) **Memory hot spots** — daily Datadog profile query → task on the owning service → rewrite with before/after numbers in the PR. (3) **Bug triage** — every new runtime error gets reproduce/diagnose, then a fix or a rooted issue; repeat fires join the in-flight run instead of spawning duplicates; noise is named as noise rather than forced into a PR. (4) **End-to-end delivery experiment** — one long-running agent owns a Linear project and a Slack channel, picks issues, opens PRs, answers threads, posts a daily status, and babysits failing CI until green, spawning microVM sub-agents per ticket. Repo: [cortexapps/engrams](https://github.com/cortexapps/engrams) (0.x; APIs will move).

## Why it matters for code review

Always-on factories that only mint more diffs overnight are optimizing the wrong layer — engrams’ useful unit is a *verified automation with an escalation path*, not a longer Claude Code burst. Review continuous cloud runs the way you review a merge queue: one PR per upgrade, before/after receipts on perf PRs, deduped error work, and explicit human gates when the suite cannot speak. Steady harnessed throughput compounds when the night owns the janitor and triage loops; FOMO for idle agents is wasted if daytime heroes still do the CVE grind by hand.
