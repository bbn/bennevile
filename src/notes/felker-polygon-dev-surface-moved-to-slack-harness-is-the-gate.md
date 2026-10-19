---
title: "Polygon moved agent coding from laptops into Slack, and made the harness the gate"
description: "Oct 16, Donn Felker (Polygon): a remote Claude agent invited into Slack channels now opens PRs for engineers, product owners, marketing and the CEO. Every PR gets AI review, then a human review. The safeguard they lean on is the repo harness and merge rules, not who typed the request."
date: 2026-10-16
kind: field-note
source:
  title: "Why we moved software development into Slack"
  url: https://polygon.technology/blog/engineering/we-moved-software-development-into-slack
project: steward
---

[Donn Felker](https://polygon.technology/blog/engineering/we-moved-software-development-into-slack), a Staff AI developer productivity engineer at Polygon, explains why the team stopped treating a coding agent as something that runs in one person's terminal. His one-line summary, from [his post announcing it](https://x.com/donnfelker/status/2112257140262146433): "An agent on your laptop is yours. An agent in the channel is the team's."

What they built and what they say it changed:

- **The agent lives in the channel.** A Claude agent runs remotely in Slack (Anthropic's Claude Tag). Each channel gets its own instructions and its own bundle of access: repos, Atlassian, crash reporting, internal systems. Anyone in a channel such as a private `#ui-dev` can ask for a change. The agent starts a cloud session and reports back with a PR.
- **Review stays two-step.** "Every PR goes through our automated AI code review first, then a human review. Upon approval it's merged and shipped." Everyone in the org can contribute to internal repos. Felker says the safeguard is "our harness and merge requirements… and a human still has the last word."
- **Volume moved to non-engineers.** The marketing team now ships "dozens of updates to our website daily, all without an engineer," and the CEO updates the site too. The post doesn't say how many of those PRs a human reviewer actually reads, or how that load has changed.
- **Work is handed between agents through tickets.** One agent files a ticket. Another agent in the background, or in a different channel, picks it up. Felker calls this "agentic event composition." A scrum-master agent also asks each person for a status update at the end of their day, after first gathering their closed tickets and merged PRs.
- **The harness comes first.** His checklist calls "a rock solid agent harness for your repositories" the most important item: an AGENTS.md with a list of things never to do, tests, linters, and deterministic hooks and GitHub Actions "that can tell the agent whether it's making a good or bad choice." He includes a prompt for having an agent tighten the harness itself.
- **Cost.** Channels default to Sonnet. Channel owners can switch to a bigger model, for example in the incidents channel.

## Why it matters for code review

This is how a factory that runs all day actually gets wired up. The agent stops depending on one engineer's session, any teammate can feed it work from their phone, and a merge gate built from tests and hooks takes the place of trust in whoever asked. It also moves the cost. When dozens of PRs a day come from people who can't judge a diff, the final human review is the slowest step, and the whole system relies on how strict the harness is. Felker gives no merge, revert or review-time numbers, so his own claim is the only evidence it holds up. Compare [Spotify's Honk, where review became the bottleneck after generation was solved](/posts/spotify-honk-1500-prs/), [Anthropic's risk-tiered approvals for Claude Code](/posts/anthropic-claude-code-team-risk-tiered-review-reverts-down/), and [the survey finding reviewers want more evidence and clear ownership before approving AI-authored PRs](/posts/rahman-plausible-not-enough-aipr-trust-evidence-ownership/).
