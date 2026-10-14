---
title: "Worktrees isolate files, not plans: Foremerge’s semantic merge tax"
description: "Aug 27 Woodhead/Foremerge: parallel agents in worktrees can merge clean and still break design — declare semantic scopes before edits; acceptance gated on harness-run checks, not agent claims."
date: 2026-08-27
kind: field-note
source:
  title: "Parallel coding agents without the carnage"
  url: https://foremerge.com/blog/parallel-coding-agents-without-the-carnage/
project: steward
---

Nick Woodhead’s Aug 27 Foremerge note (republished Sep 17 on Substack) is a clean counterweight to “more overnight agents = more throughput.” They run Claude Code, Codex, and Cursor in separate git worktrees on one repo. The failure that forced tooling was silent: one session replaced `PaymentService` with a Stripe-specific implementation; another extended `PaymentService` for PayPal. Different trees, different files, **no textual conflict**. Git merged cleanly — and the second change now depended on an extension point the first had deleted. Nothing in the toolchain flagged it.

Worktrees fix file overwrite and context poisoning. Three failure modes survive because they were never about files: **destructive versus additive** (replace vs extend the same symbol), **duplicate work** (no ownership), and **contract drift** (API/schema/config changes while another agent codes against the old shape — compiles, runs, disagrees at runtime). A shared task list can blunt duplicates; it does not catch intent collisions that live in prompts.

Foremerge sits above Git as a coordination protocol. Before editing, an agent publishes an intent with semantic scopes (`symbol`, `api`, `schema`, `config`, `migration`, `contract`, …) and an operation (`replace`, `extend`, …) — not file paths. Overlap triggers deterministic findings (e.g. `destructive_vs_additive`) while both pieces of work are still plans. Claims are leased and advisory: warn and share context, never lock. The other half is evidence: a finished ChangeSet is accepted only when Foremerge itself runs a registered check against the exact candidate fingerprint — “tests pass” from the agent is provenance, not a gate. One Rust binary / SQLite store in the git common directory so linked worktrees share declarations. Pre-1.0 caveats are explicit: heuristic detection, no multi-machine store yet, no published coordinated-vs-uncoordinated benchmarks.

## Why it matters for code review

Always-on factories that parallelize inside one repo can compound *mergeable* diffs while still accruing a semantic merge tax the morning review never sees in `git status`. Continuous harnessed momentum needs a layer that compares plans, not only patches — and a verification gate the worker cannot satisfy by narrating green. Pair with serialized or risk-tiered merge queues: worktrees buy isolation; they do not buy a coherent design.
