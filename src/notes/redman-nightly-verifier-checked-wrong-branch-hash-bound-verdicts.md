---
title: "Redman: a nightly agent pipeline's final check passed for months because it was testing the wrong branch"
description: "A 20-agent overnight pipeline reported green every morning while its last verification job re-tested a tree that had already passed. Binding each verdict to file hashes and re-checking them at merge then refused all 23 open agent PRs."
date: 2026-10-23
kind: field-note
source:
  title: "Our AI verification job passed for months. It was checking the wrong branch."
  url: https://dev.to/paulredman/our-ai-verification-job-passed-for-months-it-was-checking-the-wrong-branch-l6p
project: steward
---

Paul Redman runs a nightly pipeline of more than 20 AI agents covering research, architecture, security audit, build and QA, with a report every morning of what passed. For months, everything passed. Then he found out why: [the final verification job was checking out the wrong branch](https://dev.to/paulredman/our-ai-verification-job-passed-for-months-it-was-checking-the-wrong-branch-l6p). It re-tested a tree that had already passed, so it could never fail.

Nothing crashed or errored, which is the point. **Monitoring pages on things that break; a gate that reports green about the wrong code never trips an alarm.** Redman lists the agent-shaped versions of the same failure: a reviewer says "pass" and the file changes ten minutes later while the pass stays put, an agent checks code "against the spec" without saying which version, or an agent never produces a verdict and nothing notices the gap.

His fix is deliberately dull. Each agent verdict records the SHA-256 of every file it was based on. Before merge, a gate re-hashes those files on the exact tree being merged. A file that changed after the verdict voids it, a required file nobody attested is a refusal, a non-pass verdict is a refusal, and an empty gate is a refusal rather than a silent pass. No model calls, same answer every time. Pointed at the 23 open agent pull requests, it refused all 23. Redman calls it a bad morning and the most useful thing the pipeline had told him in months.

He is plain about the limits. The gate doesn't judge whether the reviewer was right; a bad review of the right file still passes. It's strict, so a formatter run after review voids the verdict. The tool is open-sourced by the author as Slipmark. A commenter adds the next hole: hashes can all match while the list of required files quietly leaves out a new implementation file, so the coverage policy belongs outside the change being reviewed too.

## Why it matters for code review

A pipeline that runs every night compounds whatever its last check is actually measuring. If that check is about stale bytes, months of green reports are months of unreviewed merges. Tying each verdict to the content it read, and checking that at the merge, is cheap insurance before trusting an always-on loop's morning summary.
