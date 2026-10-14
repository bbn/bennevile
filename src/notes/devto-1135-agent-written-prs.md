---
title: "1,135 agent PRs: shared blind spots and lying evidence"
description: "Lessons from an autonomous GitHub team: same-model author/reviewer blindness, dry-run evidence that lied, roles-as-data, structured envelopes, and refuse-to-guess gates."
kind: field-note
date: 2026-09-04
source:
  title: What 1,135 agent-written pull requests taught me about reviewing AI code
  url: https://dev.to/john_problems_/what-1135-agent-written-pull-requests-taught-me-about-reviewing-ai-code-593j
project: steward
---
Five months, 26 roles, 1,135 merged PRs in one repo. The uncomfortable lesson set starts with: if author and reviewer are the same kind of mind, you sampled one opinion twice. Surface slips get caught; races and wrong-side guards still “read fine.”

The standout failure is epistemological. A cleanup script’s `--dry-run` reported 116 removals; the live run removed zero because a skip path only runs when not dry-running. Two reviews had already cited the dry-run output as verification. The reviews weren’t lazy—the evidence lied. Verdicts need provenance of how the artifact was produced.

Other durable moves: roles as Markdown+JSON data (diffable policy), structured final envelopes instead of regexing prose, an `unknowns[]` field that routes to research instead of confident wrong PRs, and automation that halts rather than guessing intent.

## Why it matters for code review

Trusting agent review means auditing the proof chain, not just the comment text. Heterogeneous reviewers and labeled evidence modes are load-bearing, not polish.
