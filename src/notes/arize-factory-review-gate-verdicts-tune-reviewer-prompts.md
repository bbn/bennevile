---
title: "Arize: a software factory that uses its own review-gate verdicts to test reviewer prompts before they ship"
description: "Oct 22, Jim Bennett at Arize built a seven-station factory and turned every human gate verdict into a label for its three reviewer agents. A \"look harder\" prompt fix changed nothing; an optimizer-written prompt took correctness misses from 2–3 PRs per run to zero across 19 PRs, and a retuned router cut unnecessary human reviews from 9 of 17 to 6 with no unsafe auto-merges."
date: 2026-10-22
kind: field-note
source:
  title: "How to build a software factory that tests its own prompts — Arize AI"
  url: https://arize.com/blog/how-to-build-a-software-factory-that-tests-its-own-prompts/
project: steward
---

Jim Bennett's factory turns GitHub issues into released code through seven stations: spec, build, CI with a babysit agent that gets up to three fix attempts, three parallel reviewer agents (correctness, security, tests), a router, a human review gate that answers `/ship` or `/changes`, and release. Each station is a Claude Agent SDK agent with its own prompt, tool allowlist, turn limit and spending cap. The agents never touch GitHub; they return JSON and plain Python does the pushing and merging.

The useful move is treating the gate as free ground truth. A harvester runs continuously, writes the gate's first verdict, first-pass CI, babysit count, merge and seven-day revert back onto each issue's trace, then labels every reviewer as agree, miss (approved, but the gate asked for changes or it was reverted) or false alarm. Two real misses surfaced: on PR #34 all three reviewers approved pagination that the crew list never reads; on PR #38 they approved private-repo support that silently ignored an explicit token.

The first fix came from intuition, "follow the data to where it's used", and changed nothing: the old and new prompts missed the same 2 PRs. Traces showed why. The reviewer had noticed the gap on #34, called it out of scope, and approved anyway, so it was a calibration problem, not a looking problem. An optimizer step that read the judges' explanations wrote three rules instead (spec goals are in scope, check every branch of a changed function, any noticed mismatch must become a finding). Over three runs on 19 PRs the old prompt missed 2, 3 and 2 PRs; the new one missed none, with no false alarms, and was promoted only because it cleared a gate of fewer misses and no more false alarms. The same loop cut the router's unnecessary reviews from 9 of 17 PRs to 6, with no unsafe auto-merges from either version.

Bennett is honest about limits. The 19-PR result is in-sample. A held-out test with eight planted bugs and five clean controls was a tie: both prompts caught all eight and approved all five every run, because planted bugs are easier than the real misses. And the human gate made two mistakes of its own in the third batch, including shipping a rate limiter with a hole the security reviewer had correctly flagged.

## Why it matters for code review

A factory that runs continuously produces review verdicts as exhaust, and those verdicts are the dataset that makes the reviewers better. That only compounds if prompt changes are tested against the verdicts before promotion, which is exactly the step [ROBOCO found almost no open-source factory takes](/posts/roboco-failures-into-rules-self-improving-factories-skip-the-check/). It also shows why a reviewer agent's approval is weak evidence on its own: here the reviewer saw the bug and talked itself out of it. Compare [Warp on self-improving code review inside the factory](/posts/warp-self-improving-code-review-factory/) and [Spotify Honk's verification loops before the PR exists](/posts/spotify-honk-part-3-feedback-loops/).
