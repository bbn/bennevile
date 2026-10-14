---
title: "Pento: from agent harnesses to software factories — 2027 stays lights-on"
description: "Sept 24 from Leonardo Piñeyro (Pento): Stripe merged 1,300+ no-human-code PRs a week; Ramp’s agent writes 3 of 4 merged PRs. Factories sell the queue and gate, not the model. Autonomy only as wide as cheap verification; the lit factory keeps a person on merge while the gate moves upstream to specs and risk."
date: 2026-09-24
kind: field-note
source:
  title: "From Agent Harnesses to Software Factories"
  url: https://www.pento.ai/blog/agent-harness
project: steward
---

Leonardo Piñeyro’s Sept 24 essay at Pento is a layer map with a bet at the end. The opening receipts set the tempo: as of February 2026, **Stripe** was merging more than **1,300** pull requests a week that contained no human-written code; **Ramp** says its in-house agent now writes **three of every four** PRs it merges. Neither treats the agent as a chat window — work enters as a ticket or Slack message, and a pull request comes out for a person to review. That shape is the industry’s **software factory**: many agents on a queue, with a review gate between them and production. Factory and 8090 alone raised **$285 million** this year to sell one.

The middle of the piece sorts what teams keep conflating. A **framework** is building blocks you assemble (LangGraph, Agents SDK, Mastra). A **harness** is a finished agent you tailor — loop, tools, context, permissions, subagents (Claude Code, Codex, OpenCode, Pi). A **platform** hosts and governs either. LangChain’s coding agent moved from **52.8% to 66.5%** on Terminal Bench 2.0 without changing the model underneath; the harness changed. When models sit this close, the wrapper often decides whether a long task finishes or drifts after fifty steps — hence the 2026 shorthand **agent = model + harness**.

Point that stack at a backlog instead of a user and you get the factory table that matters for review:

| | Coding agent | Software factory |
|---|---|---|
| Unit of work | A session | A backlog |
| Runs | One task at a time | Many in parallel |
| Engineer’s job | Steer, then read the diff | Spec, tune the loop, own the gate |
| Bottleneck | Attention | How fast a change can be verified |

Vendors split on the source of truth. Autonomous loops (Factory, Devin) aim ticket → PR with less human time in the loop. Spec-governed factories (8090, Pento’s Steer) keep the spec as the record and attach evidence — tests, screenshots, traces — to every pull request. What they sell is less the agent than the queue, sandboxes, specs, evals, and audit trail around it.

The live argument is the last step. In a **lights-on** factory, agents write most of the code and a person still reads the diff before merge. In a **lights-off** factory, code ships that no human has read. The public lights-off case is StrongDM’s “no human writes, no human reviews”; the public failure is Dex Horthy’s team abandoning a fully automated factory after months of quiet **comprehension debt** — green builds, codebase nobody still understands. Pento’s read: **2027 belongs to the lit factory**. You can only hand a loop as much autonomy as you can cheaply verify; tests catch what they can express, not a design that gets a little worse with every green build. So the gate stays, and it moves **upstream** — from reading every diff to approving specs, architecture, and the changes that carry real risk (auth, payments, migrations). The Monday advice is narrow: get specs, tests, and evals in order; write down per repo which changes a person must read; open one queue where a passing suite is a fair definition of done.

## Why it matters for code review

Always-on harnessed throughput beats peak-session heroics only when verification is the neck you widen, not the step you delete. A continuous factory that keeps the lights on where oracles are weak is the same claim as [Osmani’s light-and-dark map](/posts/addy-osmani-software-factories-light-and-dark/) and [Kazzee’s order of operations](/posts/kazzee-turn-lights-off-proof-gated-dark-factory/) — with the added industry scoreboard that the queue-and-gate product category is already funded. Compare [ROBOCO on who actually merges](/posts/roboco-who-merges-bun-82-percent-merged-review-required/) and [Winslow on coordinator-done is not merge](/posts/winslow-overnight-agent-merge-gates-coordinator-done-is-not-merge/).
