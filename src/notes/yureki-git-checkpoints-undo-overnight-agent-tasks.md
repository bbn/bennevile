---
title: "Build the undo button before the tenth guardrail: per-task git checkpoints for overnight agents"
description: "Oct 5 yureki_lab: after one bad 'cleanup' task poisoned four later tasks overnight, every task now gets a full working-tree snapshot on a hidden git ref, automatic rollback when verification fails, one commit per passing task with a Task-Id trailer, and a permission rule sorted by whether an action can be taken back."
date: 2026-10-05
kind: field-note
source:
  title: "How I Built Git Checkpoints So I Can Undo Anything My AI Coding Agent Does"
  url: https://dev.to/yureki_lab/how-i-built-git-checkpoints-so-i-can-undo-anything-my-ai-coding-agent-does-4bik
project: steward
---

yureki_lab runs an orchestrator that hands tasks to parallel headless Claude Code agents overnight. One morning the queue had seven tasks, and task 3, "clean up the config loader," passed its tests while quietly changing how defaults were resolved. Tasks 4 through 7 were built on top of it. The options at 7 a.m. were all bad: reset everything and lose the good work, untangle a diff smeared across the same files, or ask the agent to "undo task 3," which produces a new change that approximates the old behavior rather than an undo. A second night, a half-finished failed task leaked uncommitted edits into the next task, which got blamed for breakage it didn't cause.

The fix is about 40 lines of shell on stock git:

- **Snapshot before every task.** The whole working tree, untracked files included, is written as a commit on a hidden `refs/checkpoints/` ref using a temporary index, so the branch, the real index and `git log` never change.
- **Roll back automatically.** After three failed verification attempts, the attempt is saved as its own checkpoint plus a diff, and the tree is restored exactly to the pre-task state. The restore takes its own checkpoint first, so undo is undoable.
- **One passing task, one commit.** Each landed task carries a `Task-Id` trailer, so reverting a single overnight task is one `git revert` instead of archaeology.

The author found a gap by deliberately trashing a scratch repo: gitignored state like `.env` files and local databases isn't covered, so it gets a plain file copy per task. Anything outside the machine, such as deploys, third-party API writes or pushed commits, has no undo and waits for a human.

## Why it matters for code review

Most overnight-harness writing is about preventing bad changes. This piece argues the cheaper lever is making changes reversible, and that it changes what review has to do. Guardrails are probabilistic; undo is deterministic. Once rollback cost dropped to one command, the author loosened several rules that had been slowing the agents, because the worst case went from a lost morning to a lost task. Sorting every action by "can I take it back?" simplified the permission rules more than any allowlist. Two rules here are worth keeping even without the scripts: undo should involve no model calls, and a task you can't revert in one command was too big or landed wrong. Pair with [the same author's replay-gated loop that turns failed runs into rules](/posts/yureki-post-mortem-loop-replay-gated-agent-rules/) and [Nightshift's four small bash guardrails for unattended runs](/posts/toolshedlabs-nightshift-four-bash-guardrails/).
