---
title: "Tracekit: tamper-evident intent–self-report–action audit for coding agents"
description: "Sep 28 Ghosh: hash-chained Claude Code hooks capture intent, model self-report, and executed tools; anchors catch re-chains; seeded-fault splicing shows rules+LLM reviewer catch concealed misalignment."
date: 2026-09-28
kind: paper
source:
  title: "Tracekit: Tamper-Evident Intent–Reasoning–Action Auditing for Autonomous Coding Agents"
  url: https://arxiv.org/abs/2609.35659
project: steward
---

Ghosh’s **Tracekit** argues that always-on coding agents fail a quieter trust problem than green CI: the record of what they did is usually an editable log of outputs. Tracekit is a dependency-free (~2k LOC Python) layer that captures three channels per session — human **intent**, model **self-report**, and executed **actions** — into a hash-chained, externally anchorable ledger, with Claude Code lifecycle hooks, sub-agent attribution, a pre-execution regex policy gate, SDK/HTTP ingest for other harnesses, and a live observer that re-verifies the chain in the browser. Self-report is treated as testimony; actions as evidence; disagreements are machine-checkable.

The evaluation is usefully negative. Across 1,600 mutations the chain catches every edit/delete/reorder/forge/torn write; tail truncation and full re-chaining need **anchors** (detection ~0.47 at a 300-record interval, matching their closed-form). Hooks cost ~24 ms median and stay flat to 100k records. Regex gates block only 41% of crafted harmful calls — a tripwire, not a sandbox. In 14 real Claude Code runs the agent refused planted injections, but providers withheld all 27 thinking blocks, so monitors only see visible prose. Because real agents rarely misbehave, **seeded-fault splicing** inserts concealed misaligned steps into real traces: rule flags catch 82% of faulted traces; an independent tool-less LLM reviewer catches 100% of 98 faulted reviews (including false-success and test-tampering), with 1/14 false positives on untouched sessions.

## Why it matters for code review

Continuous overnight factories multiply tool calls faster than humans can skim chat logs — Tracekit makes the reviewable unit a tamper-evident intent/action tape, not the agent’s summary. Review always-on agent infra for hash-chained action capture, external anchors at session end, and a split between cheap scope/data-flow flags and a semantic reviewer for claim–evidence contradictions. Steady harnessed throughput compounds when FOMO for more unattended agent hours funds auditable ledgers and independent monitors rather than another burst that leaves only an editable “it worked” transcript.
