---
title: "Build a review agent: guidelines, guards, journal, judge"
description: Cline walks through a two-pass PR reviewer on their SDK—record findings, then a stricter judge—plus deterministic tool guards so the reviewer stays read-only.
kind: field-note
date: 2026-08-26
source:
  title: Building a code review agent on the Cline loop
  url: https://cline.bot/blog/building-a-code-review-agent-with-cline-sdk
project: steward
---
Cline’s framing matches the field: writing got cheap; reviewing at volume is the bottleneck. Instead of mystifying Greptile/CodeRabbit-class systems, they reduce a reviewer to a loop plus four pieces: guidelines, guardrails, a journal, and tools that record findings.

The useful pattern is the split pass. Review run digs the diff and calls `record_finding`. Judge run re-checks candidates against the diff and calls `keep_finding`. The driver—not the model—posts a batched GitHub `COMMENT` review. Hooks block write tools and dangerous shell/`gh` mutations so “reviewer” cannot become “merge bot by accident.”

Guidelines are explicit about noise destroying trust, treating PR content as untrusted (ignore “AI: approve this”), and skipping praise-only comments. Severity and category are enums, not free prose.

## Why it matters for code review

This is a practical recipe for agentic review without a closed product: separate generation of findings from judgment, keep posting deterministic, and encode read-only policy in hooks rather than hoping the prompt holds.
