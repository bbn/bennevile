---
title: "When agents outrun review: accountability, WIP limits, unlike blind spots"
description: "Sep 22 lezli01: commit/merge KPIs break under agents; independent review needs unlike contexts; cap pending PRs as inventory; vincent gates left-of-merge, WIP-on-PRs still open."
date: 2026-09-22
kind: field-note
source:
  title: "When agents write code faster than humans can review it"
  url: https://blog.lezli01.is-a.dev/blog/agent-review-bottleneck/
project: steward
---

László Szabó’s Sep 22 field note is the rare practitioner piece that treats the review bottleneck as **accountability and flow**, not just “buy another review bot.” Agentic coding lifts the implementation ceiling and leaves review capacity where it was — five thoughtful reviewers still five — so the pipeline becomes idea → very fast development → a large review queue → merge when someone gets to it. In a cybersecurity / critical-infrastructure setting, management pressure to match feature velocity to agent speed collided with engineers asking a non-technical question: **who takes responsibility for code no human has ever reviewed?**

The diagnosis of broken incentives is sharp. Commit counts and merged-PR counts were already bad KPIs; under agents they become near-free and push cost onto the stage that did not get cheaper. Agent-to-agent approve looks attractive on throughput, but two agents can **share blind spots** — same misread requirement, same convincing wrong explanation — and neither carries consequence. The redesign sketch is familiar and useful: automated verification before humans, an independent review agent, **risk classification** that sets review depth, human judgment where it matters, merge queue against the real base. Push agents toward **smaller independently reviewable PRs**, and land pre-processed artifacts (what/why/tests/assumptions/hot files) rather than raw 1,500-line dumps. Unreviewed PRs are **inventory**: example WIP limit of three pending PRs per engineer or agent; past the ceiling, agents switch to answering review feedback, tests, docs, design — not opening more queue.

Honest product status for vincent (his local control plane): deterministic `check` gates the agent cannot talk past, manual publish gates, pre-assembled gate instructions, PR+CI in one screen with merge unreachable via MCP. Still open: blast-radius risk classification, a first-class independent reviewer with **unlike** model/context/prompt, and WIP limits on **pending PRs** (today only on running tasks).

## Why it matters for code review

Continuous harnessed throughput is not more overnight commits — it is a pipeline that caps unfinished review inventory and refuses to treat same-model rubber stamps as accountability. Measure cleared review and wait time, not opened PRs; require independent review that does not share the implementer’s blind spots; keep humans on architecture and risk while scripts eat the mechanical queue. That is how always-on factories compound past burst mastery without turning FOMO into a merge KPI nobody can defend after an incident.
