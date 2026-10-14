---
title: "OpenCollab: declared multi-agent orgs often aren’t realized—Adherence from 47% to 97%"
description: "Sep 29 Hsu et al.: shared runtime + Adherence audit; unconstrained teams realize collaboration ~47%; tool/budget/topology knobs push above 90%; Duo SOTA on Terminal-Bench 2.1 (83.15%) and DeepSWE (69.91%)."
date: 2026-09-29
kind: paper
source:
  title: "OpenCollab: A Multi-Agent Coding Framework with Programmable Collaboration and Controllable Runtime"
  url: https://arxiv.org/abs/2609.38345
project: steward
---

Chun-Wah Hsu, Kai Gong, Yu Wu, and collaborators treat multi-agent coding gains as **uninterpretable until you verify the declared organization actually ran**. **OpenCollab** separates orchestration (team vs workflow controllers) from a shared session runtime with pre-call budget gates, refuse-and-record for undeclared edges, and an append-only event stream stamped by role. On that substrate they define **Adherence**: every applicable axis (participation, delegation, role boundary, budget sharing, information flow, context policy) must be explicitly adherent—delegation alone is not enough.

The receipt that should change dashboards is the illusion of collaboration. On a reference Star team, unconstrained defaults realize the organization on only **47.2%** of runs (lead monopolizes budget or never handoffs). Change one dimension and Adherence swings: read-only entry tools → **94.4%**, mandatory context cards → **91.7%**, GPT-5.6-Luna → **97.2%**, ring topology → **91.7%**. An audit of ten mainstream frameworks finds **none** meet all seven controlled-comparison conditions OpenCollab claims. Against Mini-SWE-agent, Codex CLI, and Claude Code, OpenCollab (Duo)—a code-enforced two-coder workflow—hits **64.25%** SWE-bench Pro, **83.15%** Terminal-Bench 2.1, and **69.91%** DeepSWE; Base uses the fewest tokens on every suite. On DeepSWE, Duo vs Base is +14.2 Pass@1 with a paired split of 21/5 exclusive wins—but only because the workflow **forces** both coders every task.

## Why it matters for code review

Always-on factories that spin “teams” overnight without an Adherence-style audit are buying theater: Pass@1 can rise while collaboration never happened, or CACE-style ratios can misattribute gains when non-adherent runs dominate. Review overnight multi-agent runs for pre-call shared budgets, refuse logs on topology violations, and per-run realized-organization labels—not only final merge rate. Pair with [Zhang’s stop-comparing-without-disclosing-the-harness](/posts/zhang-turbo-harness-instance-adaptive-optimization/) framing and [Destefanis-style coordination audits](/posts/harness-of-harness-continual-improvement/) when scoring factory org charts.
