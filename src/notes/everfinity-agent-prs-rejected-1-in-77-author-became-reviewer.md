---
title: "Everfinity: Claude Code PRs are rejected once in 77, because the person who asked is now the only reviewer"
description: "Oct 19, Everfinity counted two weeks of public GitHub: 14.5% of opened PRs came from agent branches, Claude Code PRs were closed unmerged 1.3% of the time against 6.3% for everything else, and drew about eleven times fewer change requests per merge. AI bots wrote 37% of reviews, but 92.6% of those were comments, not approvals."
date: 2026-10-19
kind: field-note
source:
  title: "Who actually reviews the pull requests AI agents write? — Everfinity"
  url: https://everfinity.com/knowledge/who-reviews-ai-pull-requests
project: steward
---

Everfinity pulled every hourly GH Archive file from 4 to 18 October 2026, about 260,000 opened pull requests and 155,000 reviews, and classified agent work by branch prefix (`claude/`, `codex/`, `cursor/`, `copilot/`). The archive is a thin, evenly sampled slice of public GitHub, so the authors report only ratios between classes, not counts.

The headline ratios: **14.5% of opened PRs came from an agent branch**, up from 0.2% in April 2025. Of Claude Code PRs that reached a decision, **1.3% were closed without merging**, one in 77. Codex was 2.4%, Cursor 3.6%, and everything else 6.3%. People requested changes on Claude Code PRs **about eleven times less often per merge** than on the baseline.

The authors' explanation is mechanical. Claude Code, Codex, and Cursor's background agent open PRs under the prompting developer's account, so the old pair of an author who wrote the code and a reviewer who had to read it collapses into one person who did neither. The one exception points the same way: Copilot's coding agent opens PRs as its own account, GitHub won't let the requester count as its approver, and its PRs are rejected **11.4%** of the time, the highest of any class.

They test the obvious objection, that agent PRs are just small and good. Partly true: 95.4% of Claude Code PRs landed in repositories where only one person appeared in two weeks. But in busier repositories with three or more people, Codex PRs drew roughly baseline scrutiny while Claude Code PRs got less than half the approvals and a third of the pushback, on a sample of a few hundred merges. AI reviewers don't fill the gap: bots wrote **37% of all reviews**, and **92.6%** of those were comment-only.

## Why it matters for code review

A near-perfect merge rate under sustained agent volume is a measurement of the review process, not the model. LinearB's company data, which Everfinity cites, has agent PRs merging within 30 days only 32.7% of the time, because a second person is there. The practical fixes are cheap: tag agent work by branch prefix, require one approving review so the prompter cannot self-approve, require re-approval after the latest push, and track agent versus human rejection rates side by side. The post includes a `gh` plus `jq` script to run that check on your own repositories. Compare [LinearB on agentic PR yield and the ownership gap](/posts/linearb-agentic-pr-yield-ownership-gap/), [Faros on unreviewed merges up 76%](/posts/faros-speed-trap-unreviewed-merges-up-76-percent-restarts-up-67/), and [PipelineMag on why merge-rate scoreboards disagree](/posts/pipelinemag-merge-rate-scoreboard-disagreement/).
