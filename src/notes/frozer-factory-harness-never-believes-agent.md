---
title: "The harness never believes the agent"
description: "Aug 12 Denis Morozov: 37 packets, 37 merges, $3.89 — planted tests, named invariants, harness-run gates; the implementer’s ‘verification’ block is recorded and ignored."
date: 2026-08-12
kind: field-note
source:
  title: "The Factory That Merged 37 Tasks: What Happens When the Harness Stops Believing the Agent"
  url: https://dev.to/frozer/the-factory-that-merged-37-tasks-what-happens-when-the-harness-stops-believing-the-agent-5578
project: steward
---

Denis Morozov’s Aug 12 receipt is the continuous-factory claim stated as a refusal: **the harness never believes the agent**. Seven days, a queue of **37 task packets**, each in its own git worktree; harness-run tests; reviews against **named invariants** the packet declared; squash-merge only if all three survived. Ledger: **172 files**, **+29,360 lines**, tests **81 → 422**, direct model cost **$3.89** — and he did not read a single diff before it landed.

The unit of work is a file in git, not a chat prompt. Packets pin `spec_commit` so a moved design makes the packet stale and the harness refuses to run it. `[[invariants]]` each carry an id; the reviewer must return `held` / `violated` / `unverifiable` with a `file:line` for every id — silence is not a pass. The interesting invariants are measured, not vibes: a thousands-separator that must load `16.429` as 16429; empty `Total` as NULL across **15,480** source rows.

The loop is claim → running → gating → reviewing → merging, with two exits that are not `done`. **`blocked`** halts the whole queue after exhausted attempts instead of skipping ahead on a bad packet. **`awaiting_human`** is for packets marked `gate = "human"` at cut time — five of the thirty-seven — on one rule: failure is silent and blast radius is the stage (migrations, caches that never hit while assertions pass, charts that draw backwards next to correct printed numbers). An automated green gate cannot certify an invariant that fails green.

Mechanism matches the sentence. The implementer returns a `verification` block; it is **recorded and ignored**. `ruff` / `pytest` / lint / build are run by the harness in the worktree. Test files are planted and committed **before** the model starts, then declared off-limits so `git diff` proves the model made the suite pass rather than rewriting it. Reviewer `accept` is downgraded automatically over a red gate, a violated critical invariant, or a blocker. First end-to-end run exposed harness bugs (including dirtying its own tree so the next invocation refused to start) — governance catching itself.

Economics inverted the usual FOMO story: measured task one was **$0.11 implement / $0.18 review**. Retry budgets of three caught nothing on four tasks that failed identically each time. The toolchain is public (Apache 2.0, `frozer/factory`) and narrowly scoped to one `api/` + `webapp/` layout — the generalizable part is the distrust boundary, not the script. A commenter pushes further: the reviewer is still a model whose `held` citations prove it answered, not that it looked — mutation-testing the reviewer is the same move as planting tests for the implementer.

## Why it matters for code review

Overnight and always-on throughput only compounds past peak-session mastery when verification is **external to the actor reporting done**. Planted suites, named invariants, human gates for silent-failure surfaces, and halt-on-blocked queues are how continuous factories avoid industrializing self-certified green. Pair with Audit Tax and evaluate-the-gate notes: FOMO about idle agents is the wrong scarcity signal when review is already the expensive half and retry without a better packet burns the night for free.
