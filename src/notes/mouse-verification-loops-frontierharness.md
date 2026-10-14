---
title: "Mouse verification loops: same model, 15/30 → 25/30"
description: "Sep 9 Mouse: on Runta’s FrontierHarness (Kimi K3 held fixed), OpenCode scored 15/30; Mouse’s deterministic post-turn verify loop hit 25/30 — checks, deleted-test block, MOUSE_AUDIT evidence, and cache-friendly retries."
date: 2026-09-09
kind: field-note
source:
  title: "How Mouse uses verification loops to keep coding agents working"
  url: https://mouse.dev/blog/verification-loops/
project: steward
---

Pete’s Sep 9 Mouse note is the receipt that “harness over heroics” is not a slogan. Runta’s FrontierHarness holds the model fixed (Kimi K3) across harnesses on the same 30 tasks (21 Terminal-Bench CLI, 9 DeepSWE). OpenCode — Mouse’s base — landed last at **15/30**. Mouse, built on OpenCode plus a completion loop, scored **25/30** (Runta’s own infra run: 24 then 25). Cost per pass ~$2.79 with a ~90.6% median cache hit rate — third-cheapest on the board, highest cache hit rate published. On the nine long DeepSWE bug-fixes Mouse passed eight; some runs exceeded an hour and 200 steps before checks went green. Mouse also passed three tasks none of the twelve published harnesses solved.

The loop is the product. Most harnesses end a session when the model’s last message is not a tool call. Mouse enforces a fixed sequence after every turn, and only that sequence can end a run: (1) `git status` / `git diff` — if nothing changed, demand implementation; (2) run repo checks (`build` / `test` / `lint`) separately with timeouts; (3) block if tests or workflows were deleted (the classic “pass by removing the failing check”); (4) read `MOUSE_AUDIT` — each requirement marked `[done]` with a supporting file, test, or command output, or `[todo]`; (5) finish only when the workspace changed, checks pass, and the audit is complete — otherwise feed failures/todos back and repeat in the same session (prefix stays cached). Pete borrows from pstack: repo checks must pass before completion, and house rules are enforced in the harness, not merely in the prompt. The run is still provisional pending Runta’s published replication; trajectories and verifier verdicts are released with the open-source MIT loop (~800 lines).

## Why it matters for code review

Continuous factories win when verification is control flow, not a polite suggestion after a confident “done.” Same model, different harness, +10/30 tasks and three previously unsolved — that is overnight/always-on momentum as infrastructure, not a better Claude Code afternoon. Pair with Mouse’s overnight house-rules note and verify-first rejection-tax receipts: unattended throughput only compounds when “done” means executed evidence a morning reviewer can trust.
