---
title: "Nom Army: a worker's 'done' is a claim; the repository is the evidence"
description: "Sep 27 RaysonTech open-sources nomArmy. Of 21 implementation jobs that reported done, 5 (24%) failed independent evidence checks — including tests that still passed after the production change was reverted. Of the 15 that passed both checks, review still found real defects in 5. Worker, orchestrator, harness, and validator should not trust one another."
date: 2026-09-27
kind: field-note
source:
  title: "nomArmy — Every byte verified (RaysonTech)"
  url: https://github.com/rayson-tech/nomarmy
project: steward
---

[RaysonTech's nomArmy](https://github.com/rayson-tech/nomarmy) (Apache-2.0, alpha; [Show HN](https://news.ycombinator.com/item?id=49863042)) starts from a failure mode that shows up whenever you leave coding agents alone: they are good at saying they finished something they did not finish. A General keeps intent and acceptance authority. Bounded workers (Claude Code, Codex, Grok, Muse, local models) implement pieces in isolated git worktrees and sandboxes. When a worker reports finished, nomArmy treats the report as a claim and checks the repository itself.

## What the evidence check actually does

Verification is not the worker's self-report. nomArmy reads the real diff from git, reruns the verification profile in a fresh sandbox, scans for secrets, and can revert the production change and rerun the relevant test. A test that still passes after revert proves nothing, so the job goes to review instead of being committed. Commits land on the worker's branch only; merge stays with the General and the human. Policy in `.nomarmy.yml` makes verification and the revert check mandatory rather than something the General can waive.

## Early numbers from one repository

Since September 25, one repo put 42 jobs through: 31 implementation, 11 scouts, plus three verify-only runs. Of 21 implementation jobs that reported "done," five (24%) did not survive the evidence checks — three failed independent verification despite claiming tests passed, and two passed verification but their tests still passed after the production change was reverted. That is the failure mode the tool was built for. The more interesting result is the next line: of the 15 that passed both checks, integration and review still found real defects in five, including deployment-bundle failures not exercised locally, a backward-incompatible contract change, an incorrect security classification, and a cross-tenant authorization problem. "You can independently verify the wrong things really well." The author's conclusion: the worker, orchestrator, test harness, and validator should not necessarily be the same system or even trust one another.

## How it fits

This is the continuous-verification half of always-on agent work made concrete with receipts. Steady throughput only compounds if "done" is checked outside the session that claimed it — and even then, verification coverage has to match the risk. Pair it with [Cockayne's rule that every agent fix must fail on untouched main first](/posts/cockayne-twenty-one-green-fixes-prove-bug-red-first/) and [VisionForge Foreman forbidding workers from writing the pass bit](/posts/visionforge-foreman-builder-grader-separation/). The complication is already in the numbers: independent green is necessary and still not sufficient.
