---
title: "Roborev: continuous commit review inside the agent loop"
description: "Kenn.io roborev: post-commit background reviews + agent hooks feed findings back while context is fresh; fix/refine loops in worktrees; compact verifies findings against current code before the PR flood."
date: 2026-09-17
kind: field-note
source:
  title: "roborev — Continuous background code review database for agents"
  url: https://github.com/roborev-dev/roborev
project: steward
---

[roborev](https://github.com/roborev-dev/roborev) (kenn.io; README last edited Sep 17, actively pushed) treats review as infrastructure that keeps up with agent commit rate, not as a morning pile. `roborev init` installs a post-commit hook: every commit queues a background review while agents keep writing. A second layer — `roborev agent-hook install` — watches supported sessions (Claude Code, Codex, Copilot CLI, Cursor, Factory Droid, Gemini CLI, Hermes, Qwen, and more) and injects open findings back into the active turn so the worker sees them while context is still warm.

The close-the-loop surface is explicit. `roborev fix` feeds findings to an agent that patches and commits; the new commit is reviewed automatically. `roborev refine` runs that cycle in an **isolated worktree** until reviews pass or `--max-iterations` trips. `roborev compact` re-checks open findings against current code, drops false positives, and consolidates related issues — so the queue does not become a museum of stale complaints. Analysis jobs (duplication, complexity, security, dead code, test fixtures, …) land in the same review queue and can auto-fix. Local daemon + TUI/browser UI keep the review database on the machine you already use; optional hooks file failures into beads/kata issue trackers.

Honest scope: roborev orchestrates agents you already have (no hosted review service required), and the security model says run it on trusted codebases — review prompts include diffs and commit messages, so untrusted PRs belong in a sandbox. Hooks fail open if the daemon is down so they never block the coding agent.

## Why it matters for code review

Verification tax under sustained agent volume is not “more humans reading diffs at 2am” — it is review that runs on every commit and re-enters the worker before context dies. Continuous harnessed throughput compounds when morning inventory is already refine-clean; peak-session heroics that dump unreviewed commits into a remote PR queue just move the flood downstream. Pair with [Prusik’s prove layer](/posts/prusik-independent-prove-execution-evidence/) when “tests pass” still needs execution evidence, and with [verify-first’s rejection tax](/posts/verify-first-harness-agent-pr-rejection-tax/) when in-loop gates beat post-merge triage.
