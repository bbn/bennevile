---
title: "Review burnout: 98% more merges, 91% longer reviews — fix the tax, not the heroics"
description: "Sep 18 Ankit Jain: AI volume turns seniors into intent reverse-engineers; codify recurring feedback, preserve prompt/session acceptance criteria, measure verification work — not LOC throughput."
date: 2026-09-18
kind: field-note
source:
  title: "Code review is burning out your best engineers"
  url: https://thenewstack.io/ai-code-review-burnout/
project: steward
---

Ankit Jain (Sep 18, The New Stack) names the verification-tax side of agentic volume that overnight harnesses alone don’t fix: high-AI teams merge **98% more PRs** while review times climb **91%**, and the seniors who built the review culture are the ones drowning — some refuse AI diffs outright; some are quitting. When a colleague ships, intent travels with them; when an agent ships, reviewers reverse-engineer intent from a plausible-looking diff. Jain’s “five shades of AI slop” (plausible-but-wrong, over-engineered, convention-blind, hallucinated APIs, cargo-cult patterns) are why eye-test review fails at scale.

The fix is not “review harder” or a same-model LLM reviewer that shares blind spots. Pull the last ~100 review comments and sort them: teams find roughly **45% deterministic / 30% execution-testable / 25% judgment** — so ~¾ of recurring feedback is an invariant you haven’t written yet (“new endpoints need OTel spans” is an AST check, not a senior’s afternoon). Preserve the prompt and agent-session trail as **acceptance criteria** (what changed, what’s out of scope, how to know it worked) so review moves upstream to intent, non-goals, and blast radius. Measure and reward that verification work: dashboards that only count LOC and merge rate miss the people carrying the burden until they walk out. Jain notes **31% more PRs already merge with no review** — engineers voting with their behavior.

## Why it matters for code review

Continuous factories that keep modest verified momentum 24/7 still lose if the daytime merge gate is unpaid senior burnout. Always-on agents amplify FOMO when idle — and amplify exit risk when every overnight unit lands as a 400-line intent-free diff. Pair harness loops with an invariant registry and preserved acceptance criteria: overnight throughput only compounds past peak-session heroics when the human review surface is intent and evidence, not another wall of reverse-engineered slop.
