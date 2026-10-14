---
title: "Five subagents, five truths: orthogonal review without self-grading"
description: "Sep 11 field note: Abouwarda forks Claude Code review into five subagents that disagree on what is authoritative — ADR, spec, live HTTP, config — so the writer’s session never grades its own diff."
date: 2026-09-11
kind: field-note
source:
  title: "How I Split Code Review Across Five Claude Code Subagents"
  url: https://dev.to/ysfwrda/how-i-split-code-review-across-five-claude-code-subagents-fbl
project: steward
---

Youssef Abouwarda names the awkward property of reviewing agent-written code in the same session that wrote it: the reviewer already justified the decisions it is now judging. A fresh session kills the bias and burns the context budget. His fix on a HealthTech booking platform is not one smarter reviewer — it is five Claude Code subagents, each with a different *source of truth*, forked in parallel.

- **code-reviewer** trusts the ADRs and judges the code (security, quality, project patterns).
- **adr-consistency-checker** trusts the code and judges the ADRs — including a documented session timeout that was never built.
- **spec-to-diff-reviewer** maps each spec requirement to the diff as implemented or missing, with evidence and no quality prose.
- **endpoint-tester** drives real HTTP against changed REST endpoints.
- **config-dependency-auditor** cross-checks YAML, Maven, and Compose so declared env vars actually exist.

A seeded JWT/patient-ID bug was caught independently by three of them. A later real outbox PR surfaced a prune query with no supporting index. Humans still own the final read; most of the reconstruction work is already done.

## Why it matters for code review

Self-grading is the default failure mode of same-session agent review. Split the panel by *what each agent is allowed to believe*, not by buzzword role names. Spec, ADR, live behavior, and config are different contracts — one agent that “reviews everything” collapses them back into theater.
