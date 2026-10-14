---
title: "Dark Factory: reviewers who literally cannot edit the branch"
description: "Stratton / godark: humans author architecture + scenario specs; implementer in Docker; quality + functional reviewers isolated (no file write); retry then squash-merge or needs-human-review."
date: 2026-06-06
kind: field-note
source:
  title: "peter-stratton/dark-factory (godark)"
  url: https://github.com/peter-stratton/dark-factory
project: steward
---

[Peter Stratton’s Dark Factory](https://github.com/peter-stratton/dark-factory) (`godark`) is a Go CLI that turns Claude Code + GitHub into a lights-out implement → review → merge loop — and it is unusually clear about where judgment stays human. Engineers write roadmaps, architecture layers, conventions, and issue specs; agents operate inside those constraints. The README’s line is the thesis in one sentence: **the harness is the design**.

The pipeline is three agents with separated permissions. An implementer reads the issue, scenario specs, and architectural constraints, writes code and unit tests on an isolated branch inside an ephemeral Docker sandbox, and opens a PR. Guard rails check that the PR exists, closes the issue, and left protected paths alone. A **quality reviewer** (separate Claude Code instance) audits security/performance/style and can request changes; a **functional reviewer** checks human-authored scenario specs, generates ephemeral integration tests from those specs, and approves or rejects. Reviewers **literally cannot edit files**. Rejected PRs loop back to the implementer up to a retry budget; approved ones squash-merge; exhausted ones get `needs-human-review`. Dependency edges on issues drive topological order. Optional merge policy can auto-merge all, only low-risk, or nothing. The project claims it was built by this pipeline — humans on specs and harnesses, agents on code.

Docs and a local dashboard live at [godarkfactory.com](https://godarkfactory.com/). Scope note: Claude Code + GitHub only; Elastic License 2.0 (no hosted resale).

## Why it matters for code review

Always-on factories compound when review authority is not the same process that wrote the diff. Peak-session mastery still wins for ambiguous product calls; sustained overnight merge rate under volume needs independent reviewers, scenario-backed done, and a path that escalates instead of rubber-stamping. FOMO that nothing ships while you sleep is cheaper than FOMO that everything merged without a gate the implementer could not rewrite. Keep humans on architecture and scenario truth; let the harness own isolation, retries, and who is allowed to touch the tree.
