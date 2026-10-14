---
title: "Ten agents, one reviewer: cap work in progress and measure time to an accepted change"
description: "Oct 11 from Chris Vella: more parallel agents can just grow the review queue while the branch moves under it. He proposes coherent slices with explicit acceptance criteria and stop conditions, an evidence handoff on every PR, a two-in-progress / two-awaiting-review limit per reviewer, and a scorecard that ends at acceptance."
date: 2026-10-11
kind: field-note
source:
  title: "Ten AI Agents, One Reviewer: We Automated the Wrong Bottleneck"
  url: https://blog.promptly.mt/ai-agent-review-bottleneck/
project: steward
---

**Chris Vella** starts from a line in Superset's Hacker News launch: with five or ten agents running, remembering what each is doing and reviewing its output become the bottleneck. "Ten agents writing code at once sounds productive. Ten pull requests waiting for the same person sounds like Monday." If agents produce review-ready changes faster than one person can accept them, the queue grows, the target branch moves, contracts shift, and queued work needs another pass before anyone opens it. He also walks back over-reading the METR study: its 2025 slowdown result is now marked outdated by METR itself, and neither study establishes an optimal agent count.

His workflow needs only a tracker, isolated workspaces, CI and a PR template: **Ready → Implementing → Checking → Review-ready → Accepted**, with a Blocked/Needs-decision exit from every stage. "Ready" means outcome, boundaries, acceptance criteria and reviewer are known; the worked example turns "improve invoice validation" into six testable criteria, a scope fence and an explicit *stop and report* condition. "Small" means one coherent behaviour with its tests, not a line count; splitting validator, response and UI across three agents just makes them negotiate a contract. Every PR carries a handoff: outcome, evidence per criterion with the commands actually run, review map, boundaries, risks and gaps, and the commit the results apply to. A second agent agreeing with the first "is not independent proof."

The control is a **WIP limit**: for a one-reviewer pilot, at most two changes implementing or checking and two awaiting review. When review fills, stop starting new work. The scorecard ends at acceptance: elapsed time from commitment, human minutes per accepted change, time waiting for review, rework rounds, accepted changes per week, and reverts after acceptance. Increase concurrency only if completed work justifies it.

## Why it matters for code review

This is the counterweight to always-on fleets: momentum only compounds if it reaches acceptance, and an unthrottled fleet can turn into inventory that goes stale in the queue. Vella's limit makes the reviewer's capacity the throttle on purpose. It pairs with [Lawzava on review minutes as the real agent limit](/posts/lawzava-review-queue-real-agent-limit-review-minutes/) and [Chen & Stratton's finding that more PRs didn't mean more finished software](/posts/chen-stratton-agents-more-code-not-more-software-review-absorbs-it/).
