---
title: "NP-Bench: parallel coding agents each pass their own tests and still break the merge, so schedule scopes up front"
description: "Oct 5 Sumanyu Muku (Amira Learning): partitioning declared scopes and ordering merges along the dependency graph lifts clean integration from 1/9 to 9/9 simulated scenarios. On a live contract rename it goes from 0/15 to 15/15 on Opus 4.8, where reactive conflict warnings stay at zero."
date: 2026-10-05
kind: paper
source:
  title: "Verifying Coordination in Parallel Coding Agents: NP-Bench and a Scheduling Planner (arXiv 2610.07261)"
  url: https://arxiv.org/abs/2610.07261
project: steward
---

[Sumanyu Muku](https://arxiv.org/abs/2610.07261) (Amira Learning) starts from a failure that single-agent evals never see: "each one passes its own tests while the merged result is broken." Two agents rewrite the same function, or one ships against a contract a teammate just changed. Most coordination tools are **reactive**: they watch for a conflict and then warn. "Under agent-speed concurrency the warning arrives after the wasted edit." The paper treats coordination as **scheduling** instead. Take each work item's declared scope, split the work into disjoint scopes, and order merges along the producer-to-consumer dependency graph, all before anyone starts. The planner ships in [Nerveplane](https://github.com/sumanyumuku98/Nerveplane), a local-first system for coding agents.

**NP-Bench** compares three arms (no coordination, reactive detection, proactive planning) and judges the outcome by a real `git merge` plus tests:

- **Deterministic tier** (scripted agent edits, real sensing and planner): clean integration goes from **1/9 to 9/9** scenarios and merge conflicts from **13 to 0**, and the planner's advantage grows with the number of agents.
- **Live tier**, a contract migration: the producer renames `amount` (dollars) to `amountCents` (integer cents) while the consumer implements a total against the old contract in its own worktree. The files merge cleanly, but the result is semantically wrong unless the consumer adapts. Both baselines score **0.00** on every model. With the planner, Claude Opus 4.8 scores **15/15** (Wilson 95% CI 0.80–1.00, Fisher's p < 10⁻⁴), GPT-5-Codex **5/5**, and Claude Haiku 4.5 **3/5**. None of the 5 agents tested strayed outside its assigned scope.
- **Memory:** a decision recorded in one session drops the repeated-mistake rate from **1.00 to 0.00** in a later session, on both a strong and a weak model.

The paper also reports what didn't work. Routing the one relevant fact (about 155 tokens) to an agent did **not** improve accuracy over a 10k–280k-token context; both models found the right contract among decoys anyway. Routing's real win is cost and fit: **68× to 1,296× less context**, and a 280k-token prompt that overflowed the small model's window 5 out of 5 times. Muku is also clear about the limits. The live cells other than Opus are K=5 pilots, the scenarios are hand-built, and the declared scopes are **hand-seeded**. "We claim the scheduling result, not automatic scope inference."

## Why it matters for code review

Running agents in parallel around the clock moves the review problem from each diff to the integration. The contract-rename case is exactly the change that merges cleanly, passes each agent's own checks, and is wrong, so per-PR review and per-agent CI both miss it. Muku's result is that deciding who owns which scope, and in what order merges land, *before* work starts beats any warning that arrives mid-edit, and that the gain comes from how the work is allocated rather than from model strength. Pair with [Nikolaev's claim plane and pre-write admission](/posts/nikolaev-claim-plane-pre-write-admission-parallel-limits/), [Yegge's Continuous Thunderdome merge queue at about 175 commits a day](/posts/yegge-continuous-thunderdome-land-rush-175-commits-a-day/), and [Grossman's four-thing limit on the human reviewer](/posts/grossman-ai-brain-fry-parallel-agents-four-thing-limit/).
