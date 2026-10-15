---
title: "Where agentic PRs fail: abandonment, duplicates, and CI — not just bad code"
description: "Jan 21 study of 33k agent-authored GitHub PRs: docs/CI/build merge most; performance and fix least. Among 562 labeled rejections, 38% closed with no meaningful human review, 23% were duplicates, 17% failed CI — agent misalignment was only ~2%."
date: 2026-01-21
kind: paper
source:
  title: "Where Do AI Coding Agents Fail? An Empirical Study of Failed Agentic Pull Requests in GitHub"
  url: https://arxiv.org/abs/2601.15195
project: steward
---

**Ramtin Ehsani, Sakshi Pathak, Shriya Rawal, Abdullah Al Mujahid, Mia Mohammad Imran and Preetha Chatterjee** ask why agent-authored pull requests do not merge, using AIDev-pop’s **33,596** PRs from five agents on 100+-star repos.

**Quantitative cut:** overall merge rate is **71.5%**, with Codex highest (**82.6%**) and Copilot lowest (**43.0%**). Documentation, CI, and build tasks merge most often; performance and bug-fix fare worst. Not-merged PRs skew larger in LOC and files, and carry more failed CI checks (Cliff’s δ ≈ 0.24 for CI fails). Review comment and revision counts differ only modestly.

**Qualitative cut:** 600 stratified rejected PRs (562 still readable) yield a four-level taxonomy. **Reviewer-level abandonment** is the largest bucket — **228 (38%)** closed with no meaningful human engagement. **Pull-request-level** issues are **31%**, led by **duplicates (142 / 23%)**, then unwanted features and non-functional scaffolding. **Code-level** failures are **22%**, dominated by **CI/test failure (99 / 17%)**. True **agentic** failures — misalignment with reviewer instructions, license/CLA problems — are only about **2%**.

## Why it matters for code review

The failure mode for always-on factories is often coordination, not model stupidity: agents open work nobody picks up, re-implement an open PR, or skip the repo’s gates. A harness that dedupes against open work, fails closed on CI before requesting review, and WIP-caps agent PRs so humans can actually engage will raise merge rates more than another overnight burst of commits. Read beside [Nachuma on actionable review loops](/posts/nachuma-agent-prs-actionable-review-loops-beat-iteration/) and [Winslow on overnight merge gates where coordinator-done is not merge](/posts/winslow-overnight-agent-merge-gates-coordinator-done-is-not-merge/).
