---
title: "Who pays the review cost? 239 reviewers say passing CI doesn't make an agent PR reviewable"
description: "A survey of 239 practitioners finds reviewers don't reject AI-authored PRs outright. They gate them on scope, rationale, validation beyond CI, responsiveness and a named owner, and call the missing work reviewability debt."
date: 2026-10-08
kind: paper
source:
  title: "Who Pays the Review Cost? Triage, Fairness, and Accountability in AI-authored Pull Requests"
  url: https://arxiv.org/abs/2610.11179
project: steward
---

**Md Shamimur Rahman, Khairul Alam, Banani Roy and Chanchal K. Roy (University of Saskatchewan)** surveyed **239** practitioners from **31** countries who review code, most of them heavy reviewers of AI-authored PRs (**78.2%** had reviewed at least 10, **49.4%** more than 40). Since AI PRs became common, **77.8%** report more PRs needing review, and **74.1%** say review communication has changed moderately or significantly.

The sharpest number is about trust in green builds. Asked whether they would accept a CI-passing change without further explanation, reviewers were less willing for AI-authored PRs on all eight change types. Even low-risk cleanup dropped from **86.2%** to **73.6%**. The biggest drop was for refactors that claim no behavior change: **52.3%** for human authors, **19.7%** for AI authors. Before reviewing, **66.5%** want CI or tests passing first and **56.9%** want a clear statement of intent, and **41.8%** want evidence a known human will maintain the code. The most common reason to defer was a vague, generic AI-written description (**64.9%**), followed by very large undivided PRs and missing tests for behavior changes (both **51.0%**).

Reviewers did not want blanket bans. For suspected drive-by AI PRs from newcomers, only **12.6%** would close unmodified AI output; **55.6%** would first ask the contributor to show they understand the change. The credibility signals that mattered were behaviors in the current review: professional response to feedback (**82.4%** rated highly influential) and testing evidence beyond "it works for me" (**81.2%**), far above an active GitHub profile (**23.4%**). The authors name the gap *reviewability debt*: the explanation, validation and ownership work a reviewer must absorb when a PR looks finished but nobody human stands behind it.

## Why it matters for code review

This is the human side of running agents around the clock. Generating more PRs overnight is cheap; reviewer attention is not, and reviewers say plainly that they shift from mentoring into "audit mode" when a submission offloads its validation onto them. Respondents asked for rules over vigilance: evidence bundles matched to the change type, caps on open AI PRs per contributor, routing to domain owners, and feeding review corrections back into agent instructions. A harness that ships modest, owned, well-evidenced PRs earns review; one that ships volume runs up debt. Read beside [the enterprise 2× mandate study](/posts/he-enterprise-2x-mandate-review-shifted-to-automation/), where AI PRs spent 20% longer between first review and merge, and [Nachuma on actionable review loops](/posts/nachuma-agent-prs-actionable-review-loops-beat-iteration/).
