---
title: "Latch: converge agent PRs to mergeable, then stop — a human always merges"
description: "Jul 18 Latch: independent reviewer≠fixer identities, recursion-guarded fix pushes, 3-cycle cap, anti-tamper on workflows/policy — clears the agent-PR firehose without ever pressing merge."
date: 2026-07-18
kind: field-note
source:
  title: "Latch — the independent merge gate for the agent era"
  url: https://github.com/nishantkumar1292/latch
project: steward
---

[Latch](https://github.com/nishantkumar1292/latch) (nishantkumar1292; launched ~18 Jul 2026, site [latchgate.dev](https://latchgate.dev)) is a bounded **review⇄fix** loop aimed at the morning swarm: dozens of agent-authored PRs before anyone is at a keyboard. It converges a pull request — human- or agent-written — to *mergeable*, then **stops**. The product slogan is the control surface: “Two AIs argue about your PR until it's mergeable. You click merge.” Latch never merges.

Mechanics are the thesis. Reviewer and fixer run under **distinct GitHub identities** so nothing self-approves and GitHub’s recursion guard keeps the loop directional: a review can trigger a fix; a fix push with the default `GITHUB_TOKEN` triggers **no** workflow, so the fixer must explicitly `workflow_dispatch` the next review — every hop is its own auditable Actions run. The fixer may disagree with a finding (fix, refuse, leave open for a human) rather than comply blindly. Anti-tamper skips any PR that touches `.github/workflows/` or `.latch/`. A hard **3-cycle cap** escalates with an @-mention and stops. Verdicts (`MERGE` / `MERGE-WITH-FIXES` / `DO-NOT-MERGE`) are non-blocking commit statuses by default; teams can require them once they trust false-positive rates. Model-independence is a real knob — review with a family unlike the author-agent to decorrelate shared blind spots. The honest wedge is the green-CI-but-wrong class of bug (their middle-tile math-drill story): tests that pass while the product is still wrong.

v1 is the OSS Action + CLI transparency layer (your minutes, your audit trail, your key). A static console configures Actions variables and a kill switch without committing YAML; a hosted App and pre-push MCP gate are roadmap, not shipped as the growth story yet.

## Why it matters for code review

Always-on factories that auto-merge everything green optimize for FOMO relief and sometimes for regret. Latch productively complicates continuous ownership: harnessed overnight momentum can clear mechanically-verifiable debris and argue findings to a conclusion **without** surrendering the merge button. Review capacity under agent volume is the bottleneck; a converge-then-human-merges gate spends that capacity on judgment, not on re-triaging CI flakes the fixer already owned. Prefer a morning queue of mergeable PRs with an independent adversarial pass over another burst session that both writes and rubber-stamps its own diff.
