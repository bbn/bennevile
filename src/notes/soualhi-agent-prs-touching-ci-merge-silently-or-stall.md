---
title: "Agent PRs that touch CI either stall for days or merge unreviewed in 31 minutes"
description: "A matched study of 26,999 pull requests finds agent changes that edit application code plus CI or provisioning files take 3.24× longer to merge when reviewed, while 43–56% skip human review entirely, sometimes passing a pipeline they just edited."
date: 2026-10-09
kind: paper
source:
  title: "Co-Modifying Application Code and Deployment Infrastructure: A Causal Study of AI Agent Pull Requests"
  url: https://arxiv.org/abs/2610.12849
project: steward
---

**Mohammad Wathiq Soualhi and Basem Suleiman (UNSW)** looked at what happens when a coding agent edits application code *and* the deployment plumbing in the same pull request. Across **26,999** PRs from two datasets (AIDev v5 and MOSAIC-3M, six agents plus a human baseline, repos over 100 stars), these "dual-scope" PRs are rare: about **4.5%** of agent PRs. Pure chores (docs, tests, lockfiles, README edits) are four to six times more common, at **17.7–25.4%**.

To isolate the cost of touching infrastructure, the authors matched each dual-scope PR to an application-only PR from the same agent, archetype, test status and language, with near-identical application file counts. When maintainers review these PRs, adding infrastructure files adds a median **+13.13 hours** and multiplies time-to-merge by **3.24×**. CI manifests (**3.8×**) and provisioning templates (**2.7×**) drive the delay; scripts and container files don't. Changes that touch core source code alongside infrastructure took a median **19.6 hours**, versus **1.1 hours** when only config files were touched alongside it.

The other half of the result is the uncomfortable one. Human authors who touch infrastructure get reviewed at a steady rate (**72.2%** to **73.4%**). Agents don't: in MOSAIC-3M the review rate for agent dual-scope PRs *fell* from **52.5%** to **36.2%**. Even among outside contributors with no write access, an agent author cut the odds of human review by **63.7%**. The result is a bimodal trap: **43.1–56.2%** of agent dual-scope PRs merge with zero external human comments in a median of under **31 minutes**, while the reviewed ones wait **15.6–49.8 hours**. A PR that edits `.github/workflows/` and then passes that workflow is, in the authors' phrase, a circular verification failure. The green check is not independent evidence.

## Why it matters for code review

Always-on factories mostly produce chores, and the rare PR that reaches into the pipeline is exactly the one where volume teaches maintainers to stop looking. The fix the paper recommends is boring and structural: path-based CODEOWNERS on workflow and provisioning directories, auto-merge disabled whenever a PR touches them, and agents that dry-run CI locally before opening the PR. That is the same lesson as [DispatchSEO's path allowlist as the real merge gate](/posts/dispatchseo-40-agent-prs-merged-in-2-minutes-path-rule-is-the-gate/) and [HarnessSecurity-Bench's auto-approve result](/posts/zhu-harnesssecurity-bench-auto-approve-raises-attack-success/): steady overnight merging only compounds if the gate sits outside the code the agent can rewrite. Read beside [Ehsani's taxonomy of failed agent PRs](/posts/ehsani-agentic-pr-failures-abandonment-duplicates-ci/), which found CI-touching agent PRs failing more often.
