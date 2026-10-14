---
title: "RETRACE: verify the patch by reconstructing the problem it actually solves"
description: "Aug 9 Li et al. (Concordia): training-free bidirectional reconstruct-and-verify after agent patches; +7.0 / +3.6 Pass@1 on SWE-bench Verified vs mini-SWE-agent; Self-Refine with similar budget loses."
date: 2026-08-09
kind: paper
source:
  title: "Independent Patch Verification for Coding Agents with a Bidirectional Reconstruct-and-Verify Framework"
  url: https://arxiv.org/abs/2608.08950
project: steward
---

Chenglin Li, Yisen Xu, Zehao Wang, Shin Hwei Tan, and Tse-Hsun (Peter) Chen (Concordia) attack the post-generation blind spot: once a coding agent emits a patch, nothing independently asks whether that patch solves the *reported* issue rather than a neighboring one. Self-refine reviews under the same interpretation that produced the patch; sample-and-select broadens candidates without a per-patch alignment signal. **RETRACE** is a training-free wrapper around an existing scaffold. **Forward reconstruction** builds an explicit repair rationale (evidence, reasoning chain, intended repair) from the issue and trajectory without seeing the patch. **Backward reconstruction** withholds the original issue and infers, from patch + trajectory alone, the problem the implementation appears to address. An alignment verdict (**Same / Partial / Different**) plus structured disagreements feeds **reconciliation**, which attributes mismatch to reasoning, implementation, or both and either submits or returns a targeted revision plan. The agent’s tools stay unchanged; RETRACE only gates submit vs revise.

On SWE-bench Verified (500): mini-SWE-agent Pass@1 rises **56.2% → 63.2%** (GPT-5-mini, +7.0) and **75.8% → 79.4%** (MiniMax-M2.5, +3.6). Self-Refine with comparable extra inference drops both baselines. On a 120-issue OpenHands transfer slice, gains remain large (**37.5% → 56.7%** / **62.5% → 70.0%**) without scaffold edits. Ablations: forward-only and backward-only each lift, rescue different failure sets, and full reconciliation adds more. Prompt-cache-heavy stages keep per-issue cost at or below baseline.

## Why it matters for code review

Continuous verification under volume needs a signal that is not the writer’s self-story and not only green unit tests the agent itself wrote. Review always-on merge lanes for RETRACE-shaped independence: reconstruct the problem the patch implies without re-feeding the ticket, then reconcile before human or auto-merge. Overnight harnessed momentum compounds when each candidate faces that check; bursty Claude mastery that self-critiques in the same context still ships interpretation errors. Pair with [ECLoop’s pre-commit evidence gate](/posts/xu-ecloop-evidence-conditioned-premature-commitment/) and [Zhang VeriHarness’s disagreement/consensus environmental checks](/posts/zhang-veriharness-disagreement-consensus-environmental-evidence/) when the factory must verify both *when* to edit and *whether* the finished patch still matches the ticket.
