---
title: "Beyond vibe coding: stacked MRs and a second-model review gate"
description: "Sep 12 field report: a multi-repo agent takes a Jira story to stacked reviewed MRs — prose workflow contract, linear ticket chain, independent model review of tests then code, two human gates."
date: 2026-09-12
kind: field-note
source:
  title: "Beyond Vibe Coding: From AI-Assisted Coding to Agentic SDLC Automation"
  url: https://dev.to/harshit_rathod/beyond-vibe-coding-from-ai-assisted-coding-to-agentic-sdlc-automation-918
project: steward
---

Harshit Rathod’s Sep 12 write-up is a factory receipt, not a prompt tip. The unit of work is a blank Jira story that returns a stack of reviewed merge requests across ~15 repos. Measured production use: 35+ stories, 500+ child tickets, ~11,400 tests, ~86% sampled line coverage, ~1,650 estimated manual hours avoided, longest unattended stretch ~12 hours. Architecture is mostly English: ~7,800 lines of prose rules/skills plus a ~1,200-line MCP server for ticketing, wiki, and git hosting.

The load-bearing moves are about reviewability, not typing speed. Tickets form one linear dependency chain (DB → backend → shared UI → app UI → E2E) so at most one ticket is ready — they tried a DAG and parallel execution first; merge conflicts and duplicated shared components ate the speedup. Each ticket gets its own stacked branch and MR targeting the predecessor, so reviewers see one ticket’s diff rather than a twelve-ticket blob. Plans and proposed tickets are local markdown first; the board is only written after human LGTM.

Verification is hard-gated. Tests are written and reviewed by a *different* model before any implementation exists (checklist hunts tautologies, vague “no exception,” `sleep()`, and fake data). Code gets a second independent review before the MR opens. Humans sit at two gates only — plan approval and per-ticket approval — plus ordinary MR review. Five consecutive test failures halt and post a blocker; long runs force a requirement re-read. Model routing spends frontier models on planning and both review gates; implementation uses a cheaper tier once the spec is tight.

## Why it matters for code review

Agent throughput that outruns human reading is not a win. This system treats stacked, single-ticket MRs and an independent reviewer model as first-class factory parts — the same scarcity as generation. If your loop lets one model write the tests and the code, or dumps a whole story into one PR, you relocated the bottleneck downstream and called it autonomy.
