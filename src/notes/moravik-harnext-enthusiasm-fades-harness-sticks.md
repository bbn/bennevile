---
title: "Personal agent use swung from 44% to 4%; the harness held it at 92%"
description: "Jun 10 Štefan Moravík, FlowHunt: across 1,409 merged PRs in ten months at QualityUnit, agent work tracked individual enthusiasm until a risk-tier policy file and a staged, bounded pipeline arrived. Then it jumped and stayed, with a human still making every merge."
date: 2026-06-10
kind: field-note
source:
  title: "Developing a Full-Fledged Enterprise Application with the harnext Coding Agent"
  url: https://www.flowhunt.io/blog/developing-enterprise-app-with-harnext-coding-agent/
project: steward
---

Štefan Moravík audited ten months of merges in QualityUnit's production monorepo (live customers, live billing) three ways: PR metadata for all 1,409 merged PRs, trailers across 5,000+ commits, and a manual pass over every unmarked 2026 PR. In May, 133 of 144 development PRs (92%) carried hard agent signals. The more interesting finding is the shape of the curve before that.

## Enthusiasm fades; infrastructure sticks

In 2025, adoption was personal and "oscillated exactly like personal habits do: 44% one month, barely 4% in November when the heaviest users paused." Within a month of a risk-tier policy arriving the share hit 89%, and "with the full pipeline it reached 92% and stayed there." His summary is "Each layer of rules increased adoption more than any individual's enthusiasm ever did." This is real-repo evidence that steady, harnessed throughput outlasts bursts of individual skill. When the strongest users took a break, output fell with them; the pipeline didn't take a break.

## What the harness actually is

It's a machine-readable file classifying every path into risk tiers that CI and merge policy enforce. Migrations, payments, and auth are protected paths "no agent may touch." Issues move through staged agents (tag, triage, plan, implement, review), and the review loop is bounded: "agents converge or escalate to a human, they don't thrash." Before writing code, an agent has to load the project's conventions and output a confirmation block that reviewers can check. Without these rules, he writes, "a coding agent is a very fast generator of plausible-looking liabilities." The side effect is a change in team habits: a bug noticed mid-task becomes an issue the pipeline picks up, so the backlog "quietly became a queue of things waiting for approval."

## Why it matters for code review

Every merge stayed human, and the stated goal is "to make human review architectural, not to remove it." Two caveats apply. The author builds harnext and FlowHunt sells this setup. And "21 of 22 independent review agents reached the same verdict" measures consistency, not correctness. A queue that never empties is also the condition where [review capacity sets fleet size](/posts/baldwin-heat-death-codebase-review-sets-fleet-size/). Compare [Mastra's full-auto factory, too bursty to review](/posts/mastra-factory-full-auto-was-bursty-stages-went-manual/), [the FOMO of idle agent sessions](/posts/sieg-agentic-coding-fomo-idle-sessions-weaker-review/), [a small factory with gates that can refuse](/posts/launchdarkly-small-factory-gates-that-can-refuse/), and [why agreeing reviewers can still be wrong](/posts/adversarial-review-false-consensus/).
