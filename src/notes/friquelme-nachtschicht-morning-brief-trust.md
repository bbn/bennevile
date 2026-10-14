---
title: "NachtSchicht: the morning brief is the product — merge without re-reading"
description: "Apr 30 Florian Riquelme: Claude Code night-shift queue with a trust protocol — worktree isolation, blast-radius verify, halt-on-ambiguity, immutable evidence; the brief is a contract, not a transcript dump."
date: 2026-04-30
kind: field-note
source:
  title: "NachtSchicht — an autonomous task queue for Claude Code with a trust protocol"
  url: https://github.com/FlorianRiquelme/nachtschicht
project: steward
---

Florian Riquelme’s Apr 30 [NachtSchicht](https://github.com/FlorianRiquelme/nachtschicht) (*night shift* in German) names the overnight failure mode most “just leave Claude running” setups ignore: capability is fine; **trust** is not. Reading five thousand streamed tool calls to decide whether a PR is mergeable defeats the automation. The North Star is one question — *can the developer merge without re-reading?* — and the product is the **morning brief**, not the agent run that produced it.

Lifecycle is hard-protocol: `queue → execute → verify → report`. You `nacht add` / `nacht import` during the day; `nacht run` works the queue in isolated git worktrees; each task is verified against its blast radius and either commits cleanly or **halts with a question** for morning. Ambiguity does not improvise. Six non-negotiables: the brief is the product; rigor scales with blast radius; ambiguity halts; reversibility is architecture (irreversible ops need pre-authorization); evidence compounds into earned autonomy; UX collapses to one word (`nacht` alone routes you to the next safe move). The brief is a **contract about what is true**, backed by an immutable evidence trail — not a confidence narrative. Alpha, solo-first, dogfooded on itself (every NachtSchicht change queued through NachtSchicht); TypeScript strict with a large vitest suite; MIT.

## Why it matters for code review

Overnight harnessed throughput only compounds when morning review is a short contract, not a transcript archaeology dig. Continuous factories need blast-radius-scaled verify gates and halt-on-ambiguity so unattended Claude Code hours produce mergeable inventory — and park the judgment calls that still need daylight — instead of manufacturing confident unverified diffs that recreate the review bottleneck the night was meant to shrink.
