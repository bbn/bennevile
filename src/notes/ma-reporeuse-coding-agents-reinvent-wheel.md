---
title: "RepoReuse: green tests while half the chains reinvent the wheel by turn 5"
description: "Sep 28 Ma et al.: over 3,000 multi-turn repo runs, agents read 83.6% of relevant code at turn 1 but only 35.4% by turn 5; self-reuse falls even under saturated recall, and 50.8% of task chains hold a cross-turn re-implementation while pass rates barely move."
date: 2026-09-28
kind: paper
source:
  title: "Do Coding Agents Reuse Existing Code or Reinvent the Wheel?"
  url: https://arxiv.org/abs/2609.35357
project: steward
---

Dongsheng Ma, Sizhe Wang, and coauthors ask a question pass-rate benchmarks never score: when coding agents iterate on a real repository, do they **reuse** existing modules — including ones they wrote earlier — or keep reinventing the wheel? **RepoReuse** is a multi-turn benchmark (75 five-turn chains on mature Python libraries) built by an automated pipeline of AST dependency graphs, guided evidence packs, and execution-verified tasks. Requirements arrive turn by turn; the workspace accumulates the *agent’s* own submissions; reuse of both original-repo and self-produced targets is scored via real call edges, with upstream recall and downstream structural duplication as explainers.

An audit over **3,000** turns is blunt. Repository recall collapses from **83.6%** at turn 1 to **35.4%** at turn 5. Self-target recall stays nearly saturated, yet self-reuse still decays (about **83.9% → 69.1%** in the aggregate story; **8–24** points across configurations). By turn 5, **50.8%** of task chains contain a cross-turn re-implementation, while pass rates barely move. Handing full historical source into the prompt does **not** fix self-reuse (≈**29%**, no better than no memory); a compact interface note helps more. Across mini-SWE-agent and OpenCode with four backbones, even the strongest miss **~24%** of repo targets and **~14%** of their own earlier functions — and DeepSeek-v4.1-flash pairs with the lowest duplicated-chain rates.

## Why it matters for code review

Always-on factories compound overnight volume faster than humans can audit. If agents solve every turn correctly while cloning their own logic, merge-rate under sustained load is a vanity metric and continuous verification that only watches tests will greenlight spaghetti. Treat reuse and duplication as first-class review signals: require call-edge evidence for known modules, gate “done” on structural redundancy as well as tests, and prefer harness memory that maps interfaces over dumping whole prior transcripts. FOMO that the fleet sits idle is the wrong fear when the fleet is busy rewriting itself.
