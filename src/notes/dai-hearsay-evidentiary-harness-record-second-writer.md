---
title: "Hearsay: a harness’s own record lets you name the fault, not prove the run"
description: "Sep 29 Dai et al.: across 16 frameworks no evidentiary record; examiners attribute faults 74–91% but <10% of citations are independently witnessed; only an outside second writer catches omissions/fabrications a self-hash-chain misses."
date: 2026-09-29
kind: paper
source:
  title: "Hearsay: Can an Auditor Trust the Record a Deployed Agent Harness Writes?"
  url: https://arxiv.org/abs/2609.32495
project: steward
---

Dai, Yang, Shao, Ng, Liu, Ju, He, and Hu put the **record**, not the task, under examination. An agent harness writes its own account of each run; a later auditor was not there. They call a record *evidentiary* only when that absent reader can check it without trusting the writer. Across sixteen deployed frameworks (aider, Cline, OpenCode, SWE-agent, mini-SWE-agent, and peers), none writes one in full: present-serving properties fill in with project activity, while the two outsider-checkable cells — a tamper-evident record checkable without trusting the runtime, and domain provenance — stay empty or partial.

Hearsay then runs five harnesses on fourteen tasks (140 runs), hands three blinded LLM examiners the native records under escalating material, and labels every quoted excerpt by **who wrote it**. Examiners name the right fault in 74–91% of runs, yet under the native record fewer than one citation in ten lands on anything the harness did not write — mostly the benchmark’s two anchors (failing test output and final diff). When copies of records are deleted, rewritten, or fabricated, the examiner with the fewest false alarms catches about half. A hash chain the harness computes over its own file verifies whatever it wrote, including lies. The remedy is a **second author**: an append-only log outside the harness of what passed between harness and model, queried both ways (omissions and fabrications). That ledger reports all 28 write-time omissions/fabrications they induced, where the harness’s own chain passed all 28; on 115 falsified copies it reports 98.

## Why it matters for code review

Always-on factories that advertise “we log everything” still leave reviewers with hearsay if the harness is the only writer. Review overnight-agent infra for an external append-only witness at the model and environment boundaries — not only a self-sealed session file — and treat intent/action ledgers as incomplete until a reverse check can catch fabrications a hash chain cannot. Continuous verified momentum compounds when FOMO for more unattended hours funds a second writer and citation-level auditability rather than another burst that leaves only the agent’s editable transcript.
