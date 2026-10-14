---
title: "AfterVibe: recover specs and review those, not just the code"
description: Extract NL specs from vibe-coding sessions and validate them by blind regeneration—specs as the human-review artifact when AI code outpaces review.
kind: paper
date: 2026-07-10
source:
  title: "AfterVibe: What Remains When the Conversation Ends"
  url: https://arxiv.org/abs/2607.09900
project: steward
---
AfterVibe attacks a growing mismatch: AI can generate code faster than humans can review line-by-line. From a vibe-coding transcript and artifact, it extracts an abstract natural-language spec, then validates that spec by asking a blind second agent to re-implement from the spec alone.

On 72 real internal projects, regenerated implementations score high on a multi-tier validation pipeline while staying diverse in details—evidence the spec constrains what without over-prescribing how. Iterative refinement pushes scores higher still.

## Why it matters for code review

When volume explodes, the scarce human attention should sit on intent and contracts. AfterVibe argues the primary review artifact may be the recovered specification, with code as a regenerable consequence. Worth testing anywhere “vibe coding” already outruns traditional PR review.
