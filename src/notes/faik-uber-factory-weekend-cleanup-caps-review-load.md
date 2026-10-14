---
title: "Uber's software factory runs cleanup on weekends and caps what lands on Monday"
description: "Oct 5 Adam Faik walks Uber's factory through 70+ public sources. Engineers' first review grew from 3 hours in 2024 to 9 in 2026. The useful details are the shape of the response: a flag-cleanup loop that runs when CI is idle but limits how many diffs reach engineers, checks moved before CI, and a PR that arrives with a table of everything it passed."
date: 2026-10-05
kind: field-note
source:
  title: "How to build an AI-native software factory"
  url: https://www.theaithinker.com/p/how-to-build-an-ai-native-software
project: steward
---

Adam Faik's guide follows Uber's software factory step by step, built from more than 70 public sources listed at the end, with Stripe, Spotify, DoorDash, Ramp and Shopify for contrast. Uber's point is that none of its six building blocks is a coding agent. Developers keep Claude Code, Codex and OpenCode, and the company builds what surrounds them: a model gateway, an MCP gateway, warm cloud dev machines, shared skills, a context graph and one front-door assistant.

## Review is the limit that shows up last

Faik lists four limits that no coding tool fixes alone, and review only appears once the other three are solved and output goes up. Uber's review team said it at AI Engineer in August: "Back in 2024, we were seeing that engineers would get their first review within 3 hours. Now in 2026, that has grown to 9 hours." Spotify had 76 percent more pull requests to review after adopting AI. Faik ran his own measurement on PostHog's public repo: across 200 merged PRs, the median wait for a first human review was 6.1 hours, the slowest tenth waited about 6.7 days, and 40 percent merged with no human review. Counting bot reviewers, the median drops to about four minutes.

## Run when the machines are idle, land when people can read

The detail worth stealing is how Uber schedules maintenance. When an experiment ends, the stale feature flag goes on a managed cleanup loop that "runs over the weekend, when CI has spare capacity, and caps how many diffs land on engineers when they're back." Whether those diffs land or get rejected becomes data to improve the cleanup skill. Feature work runs differently: the coding agent stops at a draft PR so new features don't load up CI, checks run before CI (a simulator screenshot compared against the Figma mock-up, the service brought up in staging), and the PR reaches a person with a table of every check it passed.

## Why it matters for code review

Weekend cleanup is a plain answer to the question of always-on agents. Compute that would otherwise sit idle does the work, and the human side is protected by a limit on how much arrives. The factory keeps moving, but its output is shaped to the size of the Monday queue. Faik also flags how slippery the headline numbers are: Uber said in August that more than 70 percent of its PRs involved agents, while its background-agent team had talked about 11 percent of merged PRs in May. Compare [a dispatcher that idles when the review queue is full](/posts/legendev-build-engine-max-open-review-human-rate-limiter/), [measuring agent capacity in review-minutes](/posts/lawzava-review-queue-real-agent-limit-review-minutes/), and [software factories as five gates](/posts/firecrawl-ai-software-factory-gates/).
