---
title: "When the answer to ‘how do you keep up with agent PRs?’ is ‘we’re not’"
description: "Harness field CTO on Sep 9: PR floods at 1.5–10× (sometimes claimed 50×), reviewers who should see the real change not the dependency scaffolding, and a delivery knowledge graph so review context is cheap."
date: 2026-09-09
kind: field-note
source:
  title: "Harness rebuilt its Git repository for nonstop AI agent traffic"
  url: https://thenewstack.io/harness-ai-code-review/
project: steward
---
Frederic Lardinois talks to Harness field CTO Martin Reynolds a few days after they shipped a rebuilt Code Repository and an AI Code Review product. The hallway question is blunt: how are you keeping up with agent PRs? One eng leader’s answer was two words — “we’re not” — and a quieter admission that the production bar had dropped.

Reynolds’s early Copilot/CodeWhisperer trials already stuck PRs while test teams shouted; he now hears 1.5–10× volume, with some claims at 50×. Triage splits three ways: raised risk tolerance, unmanageable backlog, or “another AI tool in the middle that doesn’t necessarily solve it.” The useful design claims are smaller than autonomy theater: put the most important change first, pull reviewers from people who have worked that code (not the person who wrote the prompt), and stop making humans re-read thirty dependency-bump files. Harness’s software delivery knowledge graph — pipelines, deployments, incidents, policies — is how the reviewer pulls context without burning tokens; their own example flags a migration because an earlier incident review caught an unindexed `CREATE INDEX` that locked production for 14 minutes. They claim >10k hours/month of manual review saved. The repo rebuild pitch (agents don’t work nine-to-five; GitHub was built for daytime human teams) sits beside a quieter point: deterministic test runners stay; enhance them, don’t replace them. Most teams will touch the GitHub-resident reviewer first — the one that tells you which files still need a human.

## Why it matters for code review

The failure mode is not “we need a smarter bot.” It is silent bar-lowering under flood, plus reviewers drowning in scaffolding. Priority ranking, prior-owner routing, and cheap delivery context are review-capacity engineering. Autonomy can wait; telling a human which thirty files are noise is the near-term unlock.
