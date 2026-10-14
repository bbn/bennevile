---
title: "Agentic PR merge/reject labels overstate what agents did"
description: "May 21 Peralta et al. (MSR ’26): of 717 inspected AIDev Agentic-PRs, only 35.7% of rejections were clear agent failures; 31.2% workflow, 33.1% no rationale; 15.4% of merges needed reviewer feedback or commits—outcomes ≠ capability."
date: 2026-05-21
kind: paper
source:
  title: "Why Are Agentic Pull Requests Merged or Rejected? An Empirical Study"
  url: https://arxiv.org/abs/2605.22534
project: steward
---

Sien Reeve O. Peralta, Fumika Hoshi, Hironori Washizaki, Naoyasu Ubayashi, and colleagues (Waseda / Osaka / Ritsumeikan / Kyushu / NAIST) argue that coding-agent scoreboards built on merge and reject rates misread what happened in review. From AIDev they take **11,048** closed Agentic-PRs in ≥500-star repos, refine to **9,799** with human review, and manually code a stratified **717** (353 rejected, 364 merged) for decision rationale in comments, CI, commits, and closure context.

Rejections do not mostly mean “the agent failed.” Only **35.7%** show clear agentic failure (broken checks, failing tests, reviewer “this doesn’t work”). **31.2%** close on workflow constraints—duplicates, superseded work, inactivity templates, wrong submission context—and **33.1%** leave **no observable rationale** (silent close). On the merge side, **79.1%** land with no feedback loop, but **15.4%** need explicit human involvement (**7.7%** feedback then agent-only revisions; **7.7%** reviewer-applied commits), and **5.5%** have ambiguous traces. Patterns split by agent: Copilot and Devin sit in reviewer-mediated workflows more often; Codex and Cursor merges usually show minimal interaction—so cross-agent merge-rate tables compare deployment contexts as much as models.

## Why it matters for code review

Factories that chase overnight merge rate under sustained load will over-credit agents when silence and workflow close the PR, and under-credit them when a human finishes the last mile. Interaction-aware evaluation—feedback loops, author swaps, CI-without-comment, inactivity bots—belongs next to the outcome label before anyone ranks harnesses or declares continuous throughput a win. Steady harnessed momentum still beats bursty heroics, but only if “merged” means reviewed completion rather than an unexplained green cell. Pair with [Qi’s merged-not-measured performance PRs](/posts/qi-merged-not-measured-coding-agent-performance-prs/) when the claim is speed, and with [Bindschaedler’s guarded commits](/posts/bindschaedler-guarded-commits-approval-as-workflow-state/) when approval itself must become workflow state instead of a silent merge.
