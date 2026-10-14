---
title: "AgentLens: green tests can still be a Lucky Pass"
description: "Process-level SWE-agent eval showing ~10.7% of passing trajectories are Lucky Passes—missing verification, blind retries, disordered stages."
kind: paper
date: 2026-05-13
source:
  title: "AgentLens: Revealing The Lucky Pass Problem in SWE-Agent Evaluation"
  url: https://arxiv.org/abs/2605.12925
project: steward
---
Pass@1 is a blunt instrument. AgentLens inspects 2,614 OpenHands trajectories across eight backends on SWE-bench Verified tasks and finds that among passing runs with enough process reference, 10.7% are Lucky Passes: regression cycles, blind retries, missing verification, or disordered explore/implement/verify stages.

They build Prefix Tree Acceptor references from multiple good solutions and label actions by intent stage. Reranking models by process quality moves some backends by up to five rank positions versus pass rate alone. Lucky rates span 0.5%–23.2% across models.

## Why it matters for code review

A reviewer’s job is partly to detect lucky passes—patches that trip the tests without a coherent verification story. If your acceptance gate is only CI green, you are scoring the same metric AgentLens shows is gameable by chaos. Demand evidence of verification, not just a final green.
