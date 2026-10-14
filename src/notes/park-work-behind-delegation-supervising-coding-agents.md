---
title: "The work behind delegation: seven stages of supervising coding agents"
description: "Sep 21 Park/KAIST et al.: reconfigure Sheridan supervisory control into Plan/Monitor/Wait/Review/Teach/Manual Fix/Update Assets from 19 developers; Reddit study shows concentrate planning, delegate review to other agents, externalize recurring guidance into assets."
date: 2026-09-21
kind: paper
source:
  title: "The Work Behind Delegation: A Framework for Supervising AI Coding Agents"
  url: https://arxiv.org/abs/2609.24234
project: steward
---

Yeon Su Park, Nadia Arvi, Hae Ri Lee, Sehoon Lim, Qianou Ma, and Juho Kim study what developers actually do once coding agents own the implementation: supervision is not a single “review the PR” moment but a connected workflow. From observations and workflow diagrams with **19** experienced developers, they reconfigure Sheridan’s human supervisory control into seven stages—**Plan, Monitor, Wait, Review, Teach, Manual Fix, Update Assets**—with loops that return Teach→Monitor and Manual Fix→Review, and optional Update Assets feeding the next Plan. Plan absorbs initial teaching (the natural-language plan *is* the instruction); Wait is explicit time away while the agent runs; Review is a distinct post-execution assessment rather than more monitoring.

Applied as a lens to **102** Reddit threads (12,912 comments) across Claude Code, Codex, and ExperiencedDevs communities, the same stages surface three spanning demands—keep agent work aligned with intent, enforce quality beyond task completion, maintain understanding of agent-produced code—and three strategies for managing them under limited attention: **concentrate effort in planning** (so Monitor can become Wait and Teach loops shrink), **distribute supervisory work** (separate-provider reviewers, focus-split review passes, hooks that fire whether the model “thinks it’s relevant”), and **externalize recurring guidance into reusable assets** (linters, MISTAKES.md, skills, retros that write memory). Delegated Review is especially common: by the time a human looks, agents have already checked obvious mistakes and task deviations.

## Why it matters for code review

Lights-out and overnight factories do not remove supervision—they relocate it into Plan assets, Wait-compatible gates, and Review loops that other agents or hooks can run without the human staying in Monitor. Design continuous pipelines so planning carries change contracts and definitions of done, review is maker≠checker by default, and repeated Teach prompts become Update Assets rather than another heroic session. Sustained verified momentum compounds when supervisory tax is paid once in harness and assets; FOMO for more concurrent agents without Plan/Review/asset loops just multiplies Wait time that never becomes trustworthy Review.
