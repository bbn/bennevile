---
title: "Overnight on a Mac: 41 commits, ~30% junk, morning review is the tax"
description: "Jun 21 Jirák: eight unattended hours — coverage 41%→86%, four real bugs in BUGS_FOUND.md; ~30% reverted; branch isolation + suite gates; review moved to a civilized hour."
date: 2026-06-21
kind: field-note
source:
  title: "I Ran an AI Agent Overnight on My Mac — Here's What It Built"
  url: https://www.thinkdifferent.blog/blog/i-ran-an-ai-agent-overnight-on-my-mac-here-s-what-it-built/
project: steward
---

[Jakub Jirák](https://www.thinkdifferent.blog/blog/i-ran-an-ai-agent-overnight-on-my-mac-here-s-what-it-built/) (Think Different, Jun 21) files the overnight receipt most demos skip. 11:40 PM → ~5:50 AM on a Mac Studio with Claude Code: **41 commits**, coverage on `src/parsers/` **41% → 86%** (38 new test files), a `requests`→`httpx` migration across 23 files, boring-but-accurate docstrings — and **~30% of commits reverted or rewritten** in the morning (ratio he says stays weirdly consistent). Four genuine bugs landed in `BUGS_FOUND.md` (including an off-by-one truncating the last day of every export) because the contract said: write a failing test, don’t “helpfully” change behavior at 3 AM.

The harness is the story: scoped `TASKS.md` as a contract; branch isolation (`agent/overnight-…`, push/main blocked so 3 AM failures are just failures); suite as guardrail (“do not proceed on red”); credential-free sandbox. Junk modes: tests that only assert mocks; a silent redirect-default mismatch the suite didn’t cover; 4 AM scope creep into a class hierarchy despite “don’t modify source.” Morning workflow: suite first, read `BUGS_FOUND.md`, commit-by-commit `git show` (~70 min for 41 commits), revert anything unclear in two minutes, then squash what survives. Cost ~$24 API; net ~two days of mechanical work moved to a civilized review hour — only for verifiable, boring tasks on codebases that already have tests.

## Why it matters for code review

Continuous overnight momentum is real **and** the verification tax does not vanish — it relocates to the morning. Peak-session mastery still owns ambiguous product judgment; the always-on path compounds when the harness scopes work, isolates blast radius, and leaves a review surface (bugs file + green suite + revertible commits) a human can audit without archaeology. FOMO when nothing ran overnight is the wrong fear; the right one is merging the 30% junk because you skipped the morning gate.
