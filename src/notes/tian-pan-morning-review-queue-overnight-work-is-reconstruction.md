---
title: "Tian Pan: the morning review queue turns overnight agent work into reconstruction, not review"
description: "Jul 2 Tian Pan: unattended agents move the bottleneck to 9 a.m.; assign trust tiers at dispatch, demand a provenance receipt with a deferred list, and batch the night's questions into one decision queue."
date: 2026-07-02
kind: field-note
source:
  title: "The Morning Review Queue: Triaging Eight Hours of Unattended Agent Work"
  url: https://tianpan.co/blog/2026-07-02-the-morning-review-queue
project: steward
---

Tian Pan starts from what overnight agents actually deliver: not finished pull requests but a **queue**, with six branches, two failed runs, a dependency bump nobody asked for, and a refactor that is either brilliant or subtly wrong. Citing telemetry from more than 10,000 developers, he notes that high-adoption teams merged 98% more PRs while review time rose 91% and PR size grew 154%. The bottleneck did not vanish when agents took the night shift. It moved to the first ninety minutes of the morning.

His fixes are all decided **before** the night starts. Trust tiers are assigned at dispatch time and earned per task type, not per agent: fifty clean dependency bumps earn unattended dependency bumps and nothing about migrations, and demotion is automatic when revert rates slip. Each run owes its reviewer a compact provenance receipt with the intent as understood, a decision log, real command output rather than "tests pass," anomalies such as retries and self-reverts, and a **deferred list** of what the agent chose not to do. That last part turns an absence a diff can never show into an explicit claim a reviewer can check. Unattended agents should defer and continue: pick the conservative reading, finish what can be finished, and route the question to a single morning decision queue instead of hiding ten guesses in ten branches.

## Why it matters for code review

Pan's key distinction is that reviewing a colleague's PR is verification of a journey you mostly shared, while reviewing eight hours of agent output is reconstruction of decisions you were not there for. Always-on agents only compound if the morning stays short, and that depends on dispatch-time tiers and receipts the harness enforces, not on a reviewer's stamina. Pair with [Pan's mixed PR queue throughput piece](/posts/tianpan-mixed-pr-queue-reviewer-throughput/), [Mouse's overnight house rules](/posts/mouse-overnight-code-agents-house-rules/), and [Rahman et al. on evidence and ownership in AI-authored PR review](/posts/rahman-plausible-not-enough-aipr-trust-evidence-ownership/).
