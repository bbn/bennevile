---
title: "Global coherence: every agent can be right and the team still wrong"
description: "Oct 1 Heng: observation-aliasing bound + shared-budget TeamBench—showing the live count still overspends 4/5; commit ownership or escrow hits 0/5. Models propose; the harness owns distinctions and commit."
date: 2026-10-01
kind: paper
source:
  title: "Global Coherence: When Every Agent Is Right and the Team Is Still Wrong"
  url: https://arxiv.org/abs/2610.02036
project: steward
---

Xin Heng (Tote AI) names a failure class continuous factories hit constantly: **local validity does not imply global coherence**. Agents, humans, and mixed teams act on partial views. Two modes dominate. **Observation aliasing**—worlds that need different actions look identical in context—cannot be fixed by more reasoning, roles, votes, or samples inside the same window (Observation-Aliasing Impossibility Theorem). On a 40-task revision probe, a frontier model scores 40/40 when the deciding event is visible; with it hidden, tested arms land **12–17/40**, statistically compatible with chance among three options (**1/3**), until one sentence restores the fact (40/40 again). **Pieces that do not glue**—pairwise checks pass while the loop fails—need topology, sheaf/gluing checks, groupoid translation loops, and commit-time versioning, not a smarter manager agent (still bound by the same theorem).

The operational punchline is ownership of shared invariants. On a preregistered TeamBench budget panel (shared **20** shell calls): ordinary teams overspend in **5/5** runs; exposing the live count still leaves **4/5**; enforcing the budget **at commit** leaves **0/5**, and fixed per-role escrow quotas also reach **0/5**. Progress does not collapse in the small enforced comparison. In τ²-bench Telecom, call-time policy checks tie the coherence harness where a change breaks a stated rule, but when a committed change is silently undone the stock agent scores **0.07** on the benchmark grader while the harness scores **1.00**. Where a conventional tool already owns the state (dependency engine, coupled solver), it matches the harness exactly—as predicted.

## Why it matters for code review

Overnight FOMO is not “are agents idle?” — it is “does anyone own the budget, the version set, and the loop that would catch a globally impossible merge?” Continuous harnessed throughput compounds when the harness holds distinctions and refuses illegal commits; peak-session mastery that proposes from a partial window cannot invent missing state. Review multi-agent PRs for Heng-shaped contracts: put deciding facts into context, give every cross-agent constraint an owner (ledger or escrow), check state changes at commit with recorded read sets, and do not confuse a manager agent with a harness. Pair with [Foremerge’s plan-scope merge tax](/posts/foremerge-worktrees-isolate-files-not-plans/) when worktrees isolate files but not intents, and with [Guo’s groundability](/posts/guo-groundability-weak-reviewers-strong-coding-agents/) when weak auditors need independent checks before the judge.
