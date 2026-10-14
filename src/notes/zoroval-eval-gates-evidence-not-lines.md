---
title: "When agents outpace reading: review evidence, not lines"
description: "Oct 12 Zoroval / Chandan KS: an Intelligence Change Gate fingerprints protected diffs, requires a matching eval report, and lets evidence go stale the moment the protected code changes again."
date: 2026-10-12
kind: field-note
source:
  title: "Code review can’t keep up with agents. Gates can."
  url: https://zoroval.com/blog/llm-eval-gates-agentic-coding/
project: steward
---

**Chandan KS** (Zoroval) starts from a volume problem: coding agents write most of their code, median PRs are ~133 lines, about one in eight exceeds 1,000 — and reading every line or blocking until someone has time both fail. Their third path is **review evidence, not lines**. The failure that forced it: on July 13 their LLM-as-a-judge missed every known failure in a 1,138-call monitoring run. The model and prompt template were unchanged; the context builder had drifted, and evals only fired on model or prompt changes.

The Intelligence Change Gate is the mechanism. A policy lists protected paths (prompts, context builders, model settings, retrieval). CI fingerprints the exact protected diff. A matching eval report must name that fingerprint, baseline, candidate, and per-stage results; the gate recomputes pass/fail from the numbers. Any later edit to a protected file changes the fingerprint, so old evidence dies automatically. Owner overrides are per-PR, named, expiring, and shown as `owner_override`, never as a pass. Gate failure output is written as a work order for the next agent turn. Production approval binds to an exact SHA; agents must not own the gate files (`CODEOWNERS` + required checks). Staging holds 43 eval reports; overrides were used on 9 PRs.

## Why it matters for code review

This is how continuous agent throughput stays reviewable without pretending humans will read every line: gates talk to agents, evidence is bound to exact content, and the human reads a one-page packet instead of a thousand-line diff. It productively complicates “always-on factories” too — a one-line context-builder edit can demand a live eval, and the gate only proves what the golden dataset covers. Their open skill packages the setup for Claude Code or Codex: [github.com/Zoroval/agent-gates](https://github.com/Zoroval/agent-gates). Compare [DispatchSEO’s path allowlist as the real gate](/posts/dispatchseo-40-agent-prs-merged-in-2-minutes-path-rule-is-the-gate/) and [Firmo’s proof-as-merge requirement](/posts/firmo-agents-on-production-hooks-proof-second-model/).
