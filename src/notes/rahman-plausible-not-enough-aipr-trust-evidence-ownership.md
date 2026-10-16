---
title: "Plausible is not enough: reviewers raise the evidence bar — and the block rate — for AI-authored PRs"
description: "Oct 15 survey of 239 practitioners (matched HPR vs AIPR questions): 64.9% start with lower trust in AI PRs; 61.1% demand more evidence; would-block under residual uncertainty rises from 19.4% to 43.9%. Review becomes an evidence-ownership problem."
date: 2026-10-15
kind: paper
source:
  title: "Plausible Is Not Enough: Trust and Evidence in AI-Authored Pull Request Review"
  url: https://arxiv.org/abs/2610.21144
project: steward
---

**Md Shamimur Rahman, Khairul Alam, Banani Roy and Chanchal K. Roy (University of Saskatchewan)** follow their reviewability-debt survey with a sharper within-respondent comparison: the same **239** practitioners from **31** countries answer matched questions about human-authored PRs (HPRs) and AI-authored PRs (AIPRs). The claim is not that reviewers ban agent diffs. It is that the *criteria that earn trust* shift when the author is an agent.

**64.9%** report lower initial trust in AIPRs. Author track record and subsystem familiarity matter less; human prompter expertise and a *bounded* change size matter more. For approval, **55.2%** say their own reasoning through critical cases is enough for an AIPR, versus **28.5%** for an HPR — and they lean less on test coverage alone. Overall, **61.1%** report higher evidence requirements for AIPRs. The share who would **block approval under residual uncertainty** jumps from **19.4%** (HPR) to **43.9%** (AIPR). Preferred verification moves toward inspecting the tests, reading project context, running the change locally, and — more often than for human PRs — partially reimplementing non-trivial logic. Unclear ownership pauses AIPR review **29.3%** of the time versus **14.6%** for HPRs. Open answers keep returning to the same friction: code that *looks* right without reliable context or a named human accountable for it.

The authors name the frame **evidence-ownership**: AIPR review is not only a correctness check. Reviewers need a chain from generated change → validated behavior → responsible maintainer. Their prescription for tools and agentic workflows is concrete — expose provenance, separate generated claims from human-validated evidence, and make residual uncertainty visible before the approve click.

## Why it matters for code review

Always-on factories that optimize for merge rate under sustained load still collide with this trust wall: plausible green diffs get a higher verification tax, not a free pass. Pair with the same authors’ [reviewability-debt survey](/posts/rahman-who-pays-review-cost-reviewability-debt/) (CI is not reviewability), [CRBugBench’s limit on lights-off for consequential changes](/posts/crbugbench-lights-off-software-factory-review-agents-miss-known-bugs/), and [Amp’s move of verification into agent loops, signed commits, and merge-blocking CI](/posts/amp-no-mandatory-pr-reviews-agent-loops-push-to-main/). Continuous harnessed throughput compounds only when the factory makes ownership and evidence as legible as the patch — otherwise overnight volume just queues on humans who refuse to approve under uncertainty.
