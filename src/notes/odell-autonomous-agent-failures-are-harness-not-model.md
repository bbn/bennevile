---
title: "When an autonomous coding agent fails, it is almost never the model"
description: "Oct 5 Bob Odell: audit of 14 unsupervised local-lane tasks — ~36% first-pass success, five rescues, one 11-hour freeze, one prod revert — and zero failures at a model-capability ceiling. Deadlocked test gates, scope leaks, blind green checks, and broken recovery paths were the seams. Prefer gates over prompts."
date: 2026-10-05
kind: field-note
source:
  title: "Why AI coding agents fail: the harness, not the model"
  url: https://bobodell.com/blog/autonomous-coding-agent-failure-modes-harness
project: steward
---

[Bob Odell's Oct 5 post](https://bobodell.com/blog/autonomous-coding-agent-failure-modes-harness) is a forensic audit of a self-hosted coding agent that pulls small tasks from a board and is supposed to merge without a human. The July snapshot looks damning: 5 of 14 first-pass successes (~36% vs an 85% target), 8 of 14 done within two rounds, five rescues, one task frozen nearly eleven hours, one production incident reverted. The line that drives the piece: **zero** of those failures was the model hitting a capability ceiling. Every one started in harness, gate, or routing seams. An overnight stress test the day before found nine root causes — all scaffolding — and the one genuine coding mistake that night was caught by the review gate.

## Deadlocks, blind greens, and recovery that cannot recover

The dominant seam was the test gate. A separate test-writing agent and a stronger cloud reviewer did not share a definition of what is testable in each part of the codebase. The reviewer demanded browser-style component tests where the runner had no browser; three rounds later the task was held. Elsewhere the same gate waved through tests that never exercised the real path, or accepted "nothing to test" on a dialog change that then applied board-wide — the incident. Scope discipline failed three times by doing the right thing in the wrong place (shared click handler, wrong UI fragment, global refresh setting). Six automated checks stayed green on a missing import because each check was configured not to see that file. And when the gate held work, the recovery path skipped held tasks unconditionally, so a real fix and green checks could still leave the board frozen for ~eight hours per incident.

His rule for the July remediation plan: own the fix in the harness, not the prompt. Prompts carry facts (both agents learn "no browser here"); gates enforce outcomes (shared testability verdict, reject impossible tests, require real coverage for behavior changes, turn the linter back on, thaw held tasks when implementer commits land green, retry reviewer outages without burning rounds, route ops tasks off a lane that cannot touch the host). A prompt is a request; a gate is a guarantee. First-pass rate mostly measures scaffolding.

## How it fits

This productively stresses continuous factories: always-on throughput without shared verification contracts and a tested recovery path just compounds stalls and silent greens. It pairs with [Stack Overflow's disciplined-build operating system for long-running agents](/posts/stackoverflow-disciplined-build-harness-os-for-agents/) and with [Rayson's point that a worker saying "done" is a claim, not evidence](/posts/rayson-nomarmy-worker-done-is-a-claim-not-evidence/). The diagnostic he leaves is portable: for the last 20 failures, find where each *started*, bucket harness vs model, and count the last bucket — that is your real capability number.
