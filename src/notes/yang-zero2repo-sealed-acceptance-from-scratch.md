---
title: "Zero2Repo: sealed acceptance turns 95% green into overnight failure"
description: "Sep 29 Yang/Shi et al.: 11 native-ecosystem from-scratch tasks; GPT-6 Astra 10/11, Claude Opus 5.5 9/11, Grok 4.7 High 7/11; failing submissions still pass 89.9–99.4% of hidden tests—long-tail rules and single omissions, not missing subsystems."
date: 2026-09-29
kind: paper
source:
  title: "Zero2Repo: Can Coding Agents Build Repositories from Scratch?"
  url: https://arxiv.org/abs/2609.38269
project: steward
---

Pei Yang, Tianyu Shi, and collaborators measure whether agents can deliver a **complete native-ecosystem repository** from a product requirements document, an interface contract, and an empty workspace—with packaging and build artifacts included, and with **hidden acceptance tests sealed** until an explicit submit. **Zero2Repo** authors tasks from version-pinned open-source projects through an evidence-gated pipeline (reference pass + adversarial rejection of hollow implementations); the current release is **11** tasks (Python, TypeScript, Go, C++). Evaluation runs production harnesses in isolated containers; score is binary and uses no LLM judge.

Even on well-known source projects that frontier models have likely seen, the strongest configuration (GPT-6 Astra + Codex) solves **10/11**; Claude Opus 5.5 solves **9/11**, Grok 4.7 High **7/11**. Failures are near misses, not blank pages: the seven failing submissions still pass **89.9–99.4%** of hidden tests. As capability rises, “less common subsystem non-functional” collapses and what remains are **long-tail edge-case rules** and **single omissions that break a test group**—rules stated in the public specification that agents never checked before submit. The authors’ implication is methodological: derive executable checks from each specification clause (including rare branches and non-default environments) and gate submission on those checks, not on the agent’s own tests that inherit its omissions.

## Why it matters for code review

Always-on factories that celebrate “almost all tests green” will still fail sealed all-or-nothing acceptance—and overnight FOMO for more agent throughput does not fix a missing exclusion rule or a one-line interface mismatch. Review continuous greenfield lanes for sealed acceptance, denylisted upstream shortcuts, and specification-driven verification before submit. Continuous harnessed momentum compounds when the morning brief lists which PRD clauses the night shift never checked; pair with [Ding’s E2E-SWE solvability audits](/posts/ding-e2e-swe-whole-repository-from-specification/) and [Qi’s merged-not-measured performance PRs](/posts/qi-merged-not-measured-coding-agent-performance-prs/) when scoring overnight “done.”
