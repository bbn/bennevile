---
title: "Pre-commit review gate: the agent cannot commit until CLEAN"
description: "Apr 22 Johnston (IMTI): PreToolUse git-commit hook + adversarial sub-agent — Verdict CLEAN pinned to diff hash; blocks review theater and post-commit fix loops."
date: 2026-04-22
kind: field-note
source:
  title: "The Pre-Commit Review Gate"
  url: https://imti.co/pre-commit-review-gate/
project: steward
---

[Craig Johnston](https://imti.co/pre-commit-review-gate/) (IMTI, Apr 22) names the loop that burns overnight capacity: agent writes, claims done, human asks for critical review, real bugs appear, fix-commit, push, repeat — three or four rounds per PR. Memory checklists and Stop hooks failed (vibe-check; commit already landed). The fix is a **`PreToolUse` hook on `git commit`**: the agent literally cannot commit until an adversarial sub-agent reviews the working-tree diff and writes a `Verdict: CLEAN` artifact whose hash matches that exact diff.

Architecture: allow trivial (<20 lines) and doc-only diffs; otherwise deny with the full review prompt. Sub-agent must emit numbered `file:line` findings (real defects only — “could be cleaner” is Suggestions, not Findings), paired-backend / doc-vs-code / test-vs-claim audits, then CLEAN or N findings. Parent may fix, dispute-in-writing, or defer-with-TODO; re-spawn until CLEAN; cap ~2 rounds (3 only for substantive bugs). Artifact at `.claude/.last-review.md` binds `reviewed_hash` to the diff — any edit invalidates it. Soft 800-line size warn on edits. Fail-open on hook bugs. Metrics: minimize post-commit “address review” commits (gate too soft); watch rounds-per-PR drifting above two (gate tipped into review theater).

## Why it matters for code review

Always-on factories need review *before* the commit tax compounds. A mechanical pre-commit gate relocates adversarial checking into the harness so overnight momentum leaves cleaner first commits, not a morning pile of fix-fix-fix noise. Bursts still win when intent is mushy; continuous throughput wins when “done” is a hash-pinned CLEAN, not chat confidence.
