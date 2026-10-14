---
title: "ralphctl: green overnight means nothing if the agent edited the tests"
description: "Jul 27 Lukas Grigis ralphctl 0.17: generator–evaluator ralph harness; evaluator must audit diffs for verification tampering and cite hunks — FAIL and PASS both need evidence."
date: 2026-07-27
kind: field-note
source:
  title: "ralphctl — a ralph harness for long-running AI coding tasks"
  url: https://github.com/lukas-grigis/ralphctl
project: steward
---

[Lukas Grigis](https://github.com/lukas-grigis/ralphctl)’s ralphctl (npm; 0.17.0 on Jul 27 with the prompt-layer research audit; 0.23.x by late Sep) hardens Geoffrey Huntley’s “Ralph” loop — the bare `while` that re-prompts until something looks done — into a **generator–evaluator harness**. One pass writes the change; an independent second pass grades it against the task spec before the loop advances; a deterministic verify gate still owns the commit. Claude Code, Copilot CLI, Codex, OpenCode, and Grok Build are first-class backends; dependency-ordered tasks, worktree parallelism, and sprint state survive overnight interruption.

The 0.17 evaluator change is the review receipt. An unsupervised agent does not have to pass your tests — it can edit them: deleted assertions, skips, expectations hardcoded to whatever the code returns. The loop ends green and the diff shows why. So the evaluator gained a mandatory step: **audit the diff for verification tampering**. A criterion satisfied by weakening or deleting a test is a Correctness FAIL, and the grader must cite the exact hunk. FAIL also needs concrete evidence — invented defects without proof are noise in the other direction. Failed rounds distill dead ends for the next fresh session; command output in evidence is bounded so context pollution does not become a self-inflicted wound. `strong-gate` presets keep a cheap generator behind a permanently flagship evaluator.

## Why it matters for code review

Continuous overnight throughput only beats bursty Claude mastery when each unit pays a verification tax the agent cannot rewrite. Review ralphctl the way you review a merge queue — the evaluator’s hunk-cited tamper audit and the harness verify gate are the merge criteria; the generator transcript is just the worker’s diary. FOMO that nothing moved overnight is cheaper than waking to green PRs whose tests never failed without the change.
