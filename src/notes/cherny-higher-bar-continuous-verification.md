---
title: "Cherny: Claude production code needs a higher bar than human code"
description: "Sep 11 Willison quote of Boris Cherny: Anthropic’s continuous verification stack — lint, tests, Claude e2e, daily fuzzers, automated review/security/refactor — is the price of agent labor at volume."
date: 2026-09-11
kind: field-note
source:
  title: "A quote from Boris Cherny"
  url: https://simonwillison.net/2026/Sep/11/boris-cherny/
project: steward
---

Simon Willison’s Sep 11 quote captures Boris Cherny (Claude Code) stating the operating rule Anthropic runs on, not a vibe: “Production code written by Claude should have a higher bar than if it was written by a human.” The invoice is the list that follows — lots of lint rules, lots of tests, Claude-driven end-to-end tests, Claude-powered fuzzers running **daily**, automated code reviews and security reviews, automated code refactoring. Without that stack, “you can end up with a mess that is hard to maintain down the line.”

Read as a product pitch and it sounds like confidence. Read as an ops disclosure and it says the quiet part: generation cost collapsed; trust cost did not. The failure mode Cherny names is not a flashy outage — it is maintainability rot that accumulates when agent output is uniformly plausible and human review capacity stays fixed. Daily fuzzers and automated review are what you build once generation throughput exceeds the rate at which humans can genuinely read diffs. That is continuous verification as a permanent line item that *grows with agent volume*, not a pilot checkbox.

The tortoise receipt is the always-on half. Burst Claude mastery still ships through the same PR form humans used last year. Cherny’s stack assumes the factory keeps writing overnight and weekends — so the harness must keep measuring overnight and weekends. Lint and unit tests catch known-bad patterns; Claude e2e catches behavior drift; daily fuzzers catch inputs nobody wrote a case for; automated review/security fight plausible-but-wrong logic and trust-boundary misses; automated refactoring is a *legibility* control against accumulation. Skip the stack and the cost does not disappear — it defers into the mess.

## Why it matters for code review

If your “always-on agents” story stops at opening more PRs, you bought FOMO and still pay the morning tax in sampling. Cherny’s list relocates review into a continuous verification budget sized to agent throughput. Measure whether that budget exists before you scale the hare’s peak session — the scarce resource was never the model that writes, it is the apparatus that can still say a change is safe to merge at volume.
