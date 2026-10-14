---
title: "Acceptance authority is not an agent permission"
description: "Wang and Liu’s Sep 4 theory note: Trustworthy Change as the engineering object, Human-Agent Cells that produce evidence without acceptance rights, and Responsibility Topology for who can absorb residual risk."
date: 2026-09-04
kind: paper
source:
  title: "Software Engineering in the Agent Era From Trustworthy Change to Human Agent Software Organizations"
  url: https://arxiv.org/abs/2609.04630
project: steward
---
Zhongjie Wang and Mingyi Liu’s systems note starts from a clean split. Agents make *execution* elastic — analysis, generation, testing, migration, ops can be parallelized without proportional headcount. What stays scarce is problem framing, semantic commitment, verification, integration, attention, and residual-risk *acceptance*. The question is how to govern scalable execution so organizations can accept and sustain the changes it produces.

Their testable frame has two constructs and one execution unit. Trustworthy Change (TC) is the object that moves from intent through delegated execution, verification, integration, acceptance, and operation. Responsibility Topology classifies orgs by where independent residual-risk acceptance lives: single-center (one final baseline anchor) versus multi-anchor (joint acceptance across independently governed domains). The Human-Agent Cell (HAC) produces candidates, proposals, and evidence — and execution grants it *no* acceptance authority. Distributed HACs create context-coherence and invalidation pressure; multi-anchor setups add joint acceptance and explicit responsibility closure. Progressive Specification and bounded-capacity claims are flagged as hypotheses, not laws.

## Why it matters for code review

This is the org-theory twin of verification-tax thinking. Review and merge are where residual risk is accepted, not where agents finish typing. If your factory confuses “the agent ran” with “the change is accepted,” you have no Responsibility Topology — only throughput. Keep acceptance authority human (or multi-anchor human), and treat agent output as evidence packages for Trustworthy Change, not as finished software.
