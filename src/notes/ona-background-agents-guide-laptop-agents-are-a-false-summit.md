---
title: "Ona's background-agents guide: laptop agents are a false summit"
description: "Ona's engineering-leader guide, built from its May 2026 Background Agents Summit with Stripe, Ramp, Spotify, Uber and Harvey, argues that faster individual agent sessions don't move org throughput; triggered, sandboxed agents that can verify their own work do."
date: 2026-05-22
kind: field-note
source:
  title: "An engineering leader's guide to background agents"
  url: https://ona.com/guides/background-agents
project: steward
---

[Ona's guide to background agents](https://ona.com/guides/background-agents) distills the company's May 2026 [Background Agents Summit](https://ona.com/stories/background-agents-summit) and public write-ups from Stripe, Ramp, Spotify, Uber, Harvey and OpenAI into a maturity model: code assistants, then background agents, then a software factory. Its sharpest claim is about the first step. Running agents on a laptop, buying a Mac Mini, or getting very good at Claude Code or Codex "optimizes personal throughput without changing organizational throughput." The guide calls that a false summit: the bottleneck was never typing speed but coordination, review cycles, and the 47 repos that need the same patch applied, reviewed and merged.

The adopters it surveys converged on the same shape. Every one sandboxes agents and keeps them off production. Every one built a trigger system so that Slack, Jira, cron or CI events start work instead of a person typing a prompt. And every one gives agents the same verification tools humans use: tests, linting, telemetry, screenshots. The guide states the trade plainly: "The more an agent can verify autonomously, the longer it can run before needing human review." The receipts are uneven in kind but large in scale: Stripe merging 1,000+ agent PRs a week, Ramp attributing 30% of merged PRs to agents, Spotify past 1,500 merged migration PRs, Uber's test agent shipping 5,000+ unit tests a month.

It is a vendor guide, and the build-versus-buy section is a pitch for Ona's platform. But its list of warning signs reads like a review-health checklist: developers spending more time reviewing agent PRs than writing code, agent PRs merging at a lower rate than human ones, nobody able to say how many agent-hours ran last week, and agents with no access to tests or CI.

## Why it matters for code review

The guide's argument is that steady, event-triggered work by agents that check their own output beats heroic local sessions, because only the former reaches the review queue in a form the organization can absorb. Its own warning signs are the counterweight: if merge rate falls and reviewers drown, the factory has moved the bottleneck rather than removed it.
