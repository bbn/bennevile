---
title: "Dependabot Janitor: overnight merges only when the suite can prove boring"
description: "ZenBusiness (Witt, Aug 14): nightly Dependabot Janitor — deterministic semver/scope filter, then Claude Managed Agent skills; ~250 auto-merges / 800+ parked with receipts across ~30 repos in seven weeks."
date: 2026-08-14
kind: field-note
source:
  title: "Toss the Keys & Don't Watch the Catch: How We Let AI Merge Dependabot PRs Overnight"
  url: https://tech.zenbusiness.com/toss-the-keys-dont-watch-the-catch-how-we-let-ai-merge-dependabot-prs-overnight/
project: steward
---

[ZenBusiness](https://tech.zenbusiness.com/toss-the-keys-dont-watch-the-catch-how-we-let-ai-merge-dependabot-prs-overnight/) (Witt; Aug 14) ships a **Dependabot Janitor** that runs unattended every night across opted-in repos: merge the boring patch/minor bumps when required checks are green *and* the CI suite looks regression-catching; park everything interesting with investigation, labels, and prose a human can act on. Majors may get a reasoned recommendation and even an approval — they still never auto-merge. The scary story is “an LLM merges PRs overnight”; the useful product is a narrow promise made **structurally hard to break**.

Architecture is the thesis in code. A cheap TypeScript prefilter drops out-of-scope and above-ceiling PRs *before* any agent session exists — the model never sees what it must not merge. Survivors go to a Claude Managed Agent skill sequence (`assess-test-suite` → `check-if-can-merge` → major recommend-only → optional CI diagnosis → `execute-batch-actions`). The agent never holds a GitHub credential string: deny-by-default MCP tools inject the token server-side; there is no shell/`gh`, no push-a-file path. After seven weeks on ~30 early-access repos: **~250** boring bumps merged themselves, **800+** returned to humans with receipts (~245 of those already cleared from the Janitor’s reasoning). Standardization of Dependabot config came first — unpredictable PR shapes defeat overnight automation.

## Why it matters for code review

Always-on factories beat bursty heroics when overnight work is **admission-controlled**: determinism contains scope, judgment only touches what remains, and merge rights sit behind tool allow-lists rather than prompt hope. FOMO that nothing drained the Dependabot pile by morning is real — but so is review debt from an agent that merges everything green. Prefer a janitor that parks three for every one it merges over another peak Claude session clicking the same buttons.
