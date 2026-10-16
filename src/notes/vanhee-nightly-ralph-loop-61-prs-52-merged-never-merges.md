---
title: "A nightly agent loop opened 61 PRs in a weekend; the human merged 52, because the loop is not allowed to"
description: "Peter Vanhee's adapted Ralph loop runs headless Claude Code 18:00–06:00 on an always-on laptop: GitHub issues labelled ready become one PR each, merging is denied at the permission level, a usage gate fails closed, and the morning is a review shift."
date: 2026-10-12
kind: field-note
source:
  title: "The nightly Ralph loop"
  url: https://cloudwired.dev/notes/the-nightly-ralph-loop
project: steward
---

**Peter Vanhee** switched on a loop one Friday evening that turns GitHub issues into pull requests while he is away. By Sunday night it had opened **61 PRs** across five repositories; he merged **52**, closed one, and eight were still waiting. The loop merged none: "it isn't allowed to."

It is Geoffrey Huntley's Ralph idea — the same prompt fed to a coding agent in a loop, with continuity in files and git rather than the model's context — run as headless Claude Code (`claude -p`) on an always-on Linux laptop: about 340 lines of bash, two prompts, a permissions file and four systemd units. A timer starts the night at 18:00 and a second polls every 30 minutes, so a breakfast comment is picked up within the half hour. Issues labelled `ready` are approved work; anything else is invisible. Each gets a fresh worktree and its own branch. Before new work, the loop answers feedback on its open PRs — his comments, Copilot reviews capped at **two rounds**, or a conflict with `main`.

The safety comes from boring mechanisms. Merging, force-pushing and publishing are on a deny list, not just discouraged in a prompt. A 23-line usage gate ends the night if tonight's share of the weekly subscription limit, the week overall or the five-hour window crosses a threshold, and reports 100% if it can't read the numbers. Each issue has a 90-minute timeout and a $25 ceiling. When only he can decide — a price, a name — the agent writes one question with a recommended answer, labels it `needs-decision` and stops: "A clear question is a good night's work. A guess that costs a morning is not." The first real failure was the loop's own PRs colliding on shared files; the fix was less collision (additive edits, an `After #N` ordering line), not smarter conflict resolution.

## Why it matters for code review

This is the overnight harness at personal scale, and it makes the trade explicit: "the cost of writing code has moved to reviewing it, which was the point." The next number he plans to watch is review minutes per merged PR. Pair with [Crosley's Ralph loop overnight harness](/posts/crosley-ralph-loop-overnight-harness/) and [the review queue as the real limit on agents](/posts/lawzava-review-queue-real-agent-limit-review-minutes/).
