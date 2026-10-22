---
title: "469 merged PRs in a week from ten people, while skipping the step that compounds"
description: "Oct 15 Kacharov (Juma Labs): a fixed plan → work → simplify → review → PR loop took a ten-person team from ~70 to 469 merged PRs a week. Review is the busiest station; the learning-capture step ran 8 times against 187 reviews."
date: 2026-10-15
kind: field-note
source:
  title: "Compound engineering is our factory floor"
  url: https://kachar.dev/blog/compound-engineering-is-our-factory-floor
project: steward
---

Ilko Kacharov, CTO of Juma Labs, counted every merged pull request in his GitHub organization for a year. Roughly ten engineers merged about **70 PRs a week** a year ago and **469 in the week of 5 October**, with the same headcount at both ends and bots adding only 7 to 13 a week. That is about six merged PRs per engineer per week then and about forty-six now. He is careful about attribution: models and Claude Code improved over the same year, and the climb past 200 a week only holds from mid-August, after the team adopted the loop gradually over the summer.

The loop is Every's open-source compound engineering plugin: the same stations every time (brainstorm, plan, work, simplify, review, compound). Humans sit at the two ends. A person reads and approves the plan, agents run the middle unattended (execute, simplify the diff, open the PR, babysit CI and answer review comments), and a person reads the review and merges. On his own machine, review is the busiest station by far: **89 hand-typed and 98 model-invoked** code-review calls, with "review, then simplify" the most common transition (57 times in two months). His practical habits are review-shaped: review the plan before the code, steer the reviewer toward merge-blocking issues, run reviewers in sub-agents "so no previous reasoning is shared," and hand findings to the next agent rather than to yourself. The cost shows up there too; one public issue reports a 32-line change consuming 17.1 million input tokens in the full review panel.

## Why it matters for code review

This is a clean field case for steady harnessed throughput over individual heroics: the gains came from a repeatable line whose stations don't change when the model does, not from anyone's peak session. Review didn't disappear; it became the station that runs most often, mostly agent-on-agent, with humans signing off at the plan and the merge. The productive complication is his own data gap. The compound step, which writes down symptom, root cause, and fix so the next plan starts smarter, ran **6 times by hand and twice by the model** against 187 reviews. The team runs "the four loud steps every day and the quiet one when we remember," so a 6.7× throughput gain so far comes from repetition, not from a factory that improves itself. See also [Camplight's dark factory test](/posts/camplight-dark-factory-two-independences/) and [the Claude Code team's risk-tiered review](/posts/anthropic-claude-code-team-risk-tiered-review-reverts-down/).
