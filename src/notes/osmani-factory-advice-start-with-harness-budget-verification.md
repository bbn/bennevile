---
title: "Start with the harness, budget the verification, and expect each feature to get slower"
description: "Aug 19 Addy Osmani, advice file in his reference software factory for Claude Code and Codex: a plain harness plus a clear issue gets surprisingly far, the factory layer earns its place through back-pressure and independent verification, and ten features with an independent verifier cost at least 160 minutes of suite time before any human looks."
date: 2026-08-19
kind: field-note
source:
  title: "Pragmatic advice: start with the harness (addyosmani/factory ADVICE.md)"
  url: https://github.com/addyosmani/factory/blob/main/ADVICE.md
project: steward
---

Addy Osmani's [reference software factory](https://github.com/addyosmani/factory) for Claude Code and Codex ships with an advice file that argues against reaching for it too early: "You can get surprisingly far with a coding harness, a clear work item, and repository-level instructions. Start there." The minimal loop is a GitHub issue, `CLAUDE.md` or `AGENTS.md` rules, a goal or schedule to keep it moving, and a prompt that ends "Open a draft pull request with the checks you ran, the remaining risks, and any decision a human still needs to make. Do not merge." He would stay there while "one person or a small team can still understand the active queue" and a PR plus its checks is "a sufficient audit trail."

## What the factory layer is for

The factory becomes worth it "when the prompt is no longer the hard part": keeping separate runs consistent, preventing two sessions from claiming the same issue, preserving evidence, "and stopping production when human review is falling behind." The listed controls include gate scripts that "fail closed when a required check is missing," implementation and independent verification as separate roles, and "back-pressure [that] stops new work when the review queue exceeds its human-owned limit." Every successful run still ends at a draft PR, and Osmani is candid about the cost: "An individual feature may finish more slowly because it now passes through more boundaries."

## The verification bill under volume

The arithmetic is the useful part. With an eight-minute suite, "ten separately claimed features consume at least 80 minutes of full-suite time," and if an independent verifier reruns the suite, "the lower bound becomes 160 minutes before retries, environment setup, browser checks, or human review. The implementation can be quick while the batch still feels slow." His answer is to treat verification as a budget: fast checks while shaping, the full suite at the PR boundary, deep security or mutation checks only where risk warrants, capped retries that hand ambiguity to a human, and measurement of "reruns, false rejections, escaped defects, and human review time." "A two-minute documentation fix and an authentication migration should not pay the same verification cost."

## Why it matters for code review

This is the sober version of always-on agent work: steady unattended throughput comes from consistency, evidence, and a review queue that can push back, and each of those makes a single change slower. The design puts the human at two fixed points, choosing what becomes ready and merging the draft, and spends the rest of the effort keeping what reaches them worth reading. Compare [a build engine that rate-limits agents to the human's open-review count](/posts/legendev-build-engine-max-open-review-human-rate-limiter/), [the verification tax as the real agent bill](/posts/bluelupin-verification-tax-real-agent-bill/), [a factory where merge time fell as output rose](/posts/augment-factory-follow-the-queue-merge-time-fell-as-output-rose/), and [an orchestrator that never auto-merges](/posts/nokto-orchestrator-never-auto-merge/).
