---
title: "Safety must survive self-improvement: current gates beat historical scores"
description: "Oct 2 Zhang et al.: RSI authorization testbed; historical scores keep unsafe programs in 22/48 framework histories despite correct alternatives; score refresh + validated rollback restore correctness while retaining >43% deployment savings."
date: 2026-10-02
kind: paper
source:
  title: "Safety Must Survive Self-Improvement: Why Failures Persist and How Agents Recover"
  url: https://arxiv.org/abs/2610.01073
project: steward
---

Yunbei Zhang, Janet Wang, Saiyue Lyu, Yingqiang Ge, Kaiqu Liang, Zijian Jin, Chandan K. Reddy, and Jihun Hamm study what happens *after* a self-improving coding agent fails an authorization contract: does the failed program keep running, and which implementation does the editor revise next? In a controlled testbed of stateful authorization tasks (session, filesystem, tool approval, consent), fixed LLM editors optimize executable agent components while independent effect traces record unauthorized actions separately from task completion—so blanket refusal cannot fake a repair.

The headline mechanisms are selection rules, not missing repairs. After a new authorization dependency invalidates previously tested optimizations, **historical scores preserve the same unsafe programs in 22 of 48 framework histories** even though every affected archive already holds a correct alternative; refreshing scores restores correctness on the original suite (residual failures remain on independently composed tests). Under an unchanged contract, **keep-after-rejection** leaves a failed incumbent active when every proposal is rejected—fallback to a currently valid founder ends the unsafe run. Editing from the **founder** instead of the failed incumbent improves recovery from shared failures (advantage varies by editor). In the core trajectory study, full validation and validated rollback finish with fully correct endpoints while retaining **mean deployment service-cost savings above 43%** (validation expenditure excluded).

## Why it matters for code review

Always-on factories under FOMO for overnight capability growth inherit both useful optimizations and the assumptions those optimizations cached. Review continuous self-improvement loops for Zhang-shaped contracts: *current* deployment eligibility when the contract changes, refreshed archive scores instead of stale certificates, validated rollback or pause when no candidate passes, and an explicit choice of editing source during repair—not a final correctness score that hides intermediate unauthorized execution. Steady harnessed throughput compounds when morning audit can replay *what ran under which contract*; peak-session heroics that “eventually” recover after a night of unsafe merges do not. Pair with [Xiao’s live self-improvement supervisor–worker](/posts/xiao-pilot-live-self-improvement-supervisor-worker/) and [Bindschaedler’s guarded commits](/posts/bindschaedler-guarded-commits-approval-as-workflow-state/) when the factory’s improvement loop must not outrun its authorization gate.
