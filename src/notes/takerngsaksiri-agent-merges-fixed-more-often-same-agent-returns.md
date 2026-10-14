---
title: "A merged agent PR isn't finished: agent merges need follow-up fixes 1.6 times as often, and the same agent usually ships the fix"
description: "Sep 22 Takerngsaksiri, Duong and Barnett followed 6,774 merged agent PRs in popular GitHub repos into the fixes that came after them. Agent merges drew verified fixes at 1.62 times the odds of human merges in the same repos, about 70% of those fixes came from the same agent, and nothing visible at merge time reliably flagged which ones would need it."
date: 2026-09-22
kind: paper
source:
  title: "Who Finishes the Job? A Study of Follow-Up Fixes and Commit Authorship on AI Coding Agent Pull Requests"
  url: https://arxiv.org/abs/2609.26847
project: steward
---

Wannita Takerngsaksiri, Nhat Duong and Scott Barnett (Deakin University) asked a question most agent-PR studies skip: what happens after the merge? They followed 6,774 merged pull requests from Codex, Devin, Copilot, Cursor and Claude Code in GitHub repositories with at least 500 stars, and compared them against 5,044 human PRs merged in the same repositories over the same period. A follow-up counted as a verified fix only when it repaired something the original PR introduced or left behind, confirmed by two human annotators on a sample and then by an LLM judge that matched their agreement (90% precision on spot checks).

## What they found

Within 30 days, 22.9% of merged agent PRs were followed by a candidate fix and 4.5% by a verified one. Compared within the same repositories and time window, agent merges drew verified fixes at 1.62 times the odds of human merges (3.68% against 2.34%). The fixes came quickly: half of the 30-day total landed in the first week.

The cleanup mostly stayed in the family. About 70% of verified fixes on agent merges were opened by the same agent that shipped the original change, 27% by a human and 3% by a different agent. Humans fixed their own merges 89% of the time. Inside the agent-opened fix PRs, on average 87% of commits were agent-authored, and the authors treat that as a floor because unmarked agent commits count as human.

## The part a reviewer should sit with

At merge time, the PRs that later needed fixing looked almost exactly like the ones that didn't. Time under review, churn and review comments showed negligible-to-small differences. The clearest signal appeared only when comparing PRs inside the same repository: a merge that took ten times as many commits to finish had about six times the odds of needing a fix afterward. The PRs that needed many rounds of work to land were the ones most likely to need more work after landing.

The authors also cite earlier work finding that 61.4% of agent PRs never received a recorded human review. Their conclusion is that the merge isn't the end of the job, that the warning signs live in the code rather than in the PR metadata, and that someone has to keep watching agent work after it ships.

## Why it matters for always-on factories

For a fleet that merges around the clock, this is the bill that comes due after the green check. A modest fix rate becomes a steady stream when the merge rate is high, and when the agent that made the mistake is also the one fixing it, nobody new has to learn that part of the code. The data covers agent PRs from December 2024 to July 2025, before most of today's verification harnesses existed, so treat it as a baseline rather than a verdict. Compare [agent PR merge and reject labels that overstate what agents did](/posts/peralta-agentic-pr-merge-reject-interaction-aware/), [agent performance PRs merged on reputation rather than measured speed-ups](/posts/qi-merged-not-measured-coding-agent-performance-prs/), [why merge-rate scoreboards disagree](/posts/pipelinemag-merge-rate-scoreboard-disagreement/), and [a two-engineer factory where guardrails cut hotfixes to one a month](/posts/huston-twill-factory-guardrails-cut-hotfixes-slowed-merges/).
