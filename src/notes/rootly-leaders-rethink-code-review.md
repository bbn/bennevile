---
title: "Five leaders, one split: review intent and risk — not every line"
description: "Sep 4 Rootly field note: Flare, Airbyte, CircleCI, Moloco, Twingate leaders on agent PR volume — spec-first review, risk tiers that skip low, earlier machine verification, and a named human who owns the merge."
date: 2026-09-04
kind: field-note
source:
  title: "Nobody wants to review 1,000 lines of AI-generated code"
  url: https://rootly.com/blog/how-engineering-leaders-rethink-code-review-in-the-ai-era
project: steward
---

Sylvain Kalache asks five engineering leaders the same question: what replaces line-by-line review when agents write more than teammates can read? The answers diverge on tooling and converge on a split of jobs the PR used to smuggle into one ritual.

Flare (Benoit Doyon) moves review upstream: code-level specs, agent-implemented MR stacks, team review of intent and demo rather than every diff — restarts cost tokens, not calendar weeks. Airbyte (Davin Chia) tiers by risk and indexes on the ticket, not the PR; low-risk ships through automation, high-risk fails gates into a human, medium is choose-your-own-adventure — unhealthy connectors down 60–70% with fewer people. CircleCI’s Rob Zuber says the PR was already a bad internal gate before agents; when something proposes a flaky-test fix, run it a hundred times before a developer sees it. Moloco admits PR-review bankruptcy on thousand-line agent diffs and keeps accountability on the person who clicks merge (some firms: own it ninety days). Twingate (Eran Kampf) scores judgment density × risk; named human owner on every AI-authored change, second person for knowledge survival.

Kalache’s synthesis: intent earlier (spec), defects continuous (tests/gates), risk routes scrutiny, merge ownership stays human. You cannot treat every generated line as equally worthy of attention — and you cannot automate responsibility away.

## Why it matters for code review

This is the operating manual the factory posts keep circling. Separate the three jobs the PR used to hold, publish the risk tiers, and put a name on the merge button. Queues that still demand full human reading of agent output are not “high standards” — they are a capacity plan that already failed.
