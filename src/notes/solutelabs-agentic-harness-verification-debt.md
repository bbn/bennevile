---
title: "SoluteLabs’ Agentic Harness: verification debt is the real bottleneck"
description: "Oct 12 SoluteLabs field note: INFORM → SPEC → BUILD → VERIFY after a three-line Tailwind change broke sticky nav — named failure modes include verification debt when AI produces faster than the team can prove safe."
date: 2026-10-12
kind: field-note
source:
  title: "The Agentic Harness: How We Rebuilt Our SDLC for AI-Augmented Product Engineering"
  url: https://www.solutelabs.com/blog/ai-augmented-product-engineering
project: steward
---

**SoluteLabs** rebuilt their SDLC after a three-line Tailwind change broke `position: sticky` across nav and header — and the fix lived in one engineer’s head. The Agentic Harness is the operating system they put around AI-generated work: **INFORM → SPEC → BUILD → VERIFY**, each phase with a defined artifact and a human checkpoint. The failure modes they name are the ones always-on factories hit first: context hallucination (agents “clean up” protective weirdness), self-confirming code (same agent writes and validates), silent regressions, and **verification debt** — AI produces faster than the team can prove the output is safe to ship.

INFORM turns briefs and incidents into requirement IDs with a traceability matrix and checks `CLAUDE.md` in as operational memory — constraints learned from real failures, including the sticky-nav cleanup pattern. BUILD runs on Claude Code; for non-trivial diffs an independent agent review runs before a human sees the PR. VERIFY is a dedicated review pass separate from the implementer, plus visual regression, production probes and revert-detection canaries, and human sign-off on evidence before release. Architecture, security-sensitive work, and irreversible decisions stay with named human ownership.

## Why it matters for code review

Verification debt is the review bottleneck dressed as a throughput win: more diffs arrive than evidence can keep up with. SoluteLabs’ answer is phase gates and a second-pass reviewer before humans, so continuous agent output lands as inspected work rather than first-draft volume. Pair with [Reed’s Evidence Ledger and draft-PR-or-BLOCKED exits](/posts/reed-production-harness-walk-away-draft-pr/) and [Firmo’s second-model signed review](/posts/firmo-agents-on-production-hooks-proof-second-model/).
