---
title: "VV Harness: sort every rule by enforcement tier — exit codes beat prose"
description: "Jul 4 Eftimie: harness = list of things you stopped trusting the model to do; mechanical/prompted/structural/instructional ladder; scope hooks, completion gates, fixture-tested rails."
date: 2026-07-04
kind: field-note
source:
  title: "The VV Harness"
  url: https://ovidiueftimie.substack.com/p/the-vv-harness
project: steward
---

[Ovidiu Eftimie](https://ovidiueftimie.substack.com/p/the-vv-harness) (4 Jul 2026; plugin at [oeftimie/vv-claude-harness](https://github.com/oeftimie/vv-claude-harness)) reframes harness design as a trust ledger, not a feature list. An agent harness is **a list of things you stopped trusting the model to do**. Every rule lives in one of four enforcement tiers, and the tier — not the wording — predicts whether it survives a three-hour session: **mechanical** (shell hooks with exit codes; no negotiation), **prompted** (hooks that deliver a message the agent may ignore), **structural** (file formats like `features.json` with `passes: false` — agents respect structure more than prose), and **instructional** (CLAUDE.md / skills — “most of the time,” decaying as context grows). The history of the harness is promoting rules up that ladder: TDD from polite request to a hook that rejects non-passing completions; scope from prose to a PreToolUse path check; reviewer honesty by granting the reviewer **no Edit/Write tools**.

What the mechanical and structural tiers actually guarantee: session death and compaction survive via `features.json` + `context_summary.md` and a SessionStart reinjection; unfinished work is refused until tests pass (fast smoke under ~15s before the full suite); parallel agents get physical lanes — each feature owns paths, and a hook blocks out-of-scope edits before they land in the tree; metrics route money (rework thrice in-scope → escalate to Opus); always-on CLAUDE.md overhead cut from ~14.7K to ~4.2K tokens. Known-challenges ledger is load-bearing: lead death kills in-process teammates; Agent Teams is experimental and delivery can lie; idle hooks only prompt; the completion gate cannot judge whether tests are worth passing; small work is cheaper sequential. The hidden rung: a mechanical rule is only mechanical if the **mechanism is tested** — a fail-open hook manufactures confidence worse than no hook. v3.4’s audit found four hooks silently broken; the fix was fixtures, a test suite, and CI.

## Why it matters for code review

Always-on factories only beat bursty Claude Code heroics when “done” is an exit code, not a CLAUDE.md hope. Read any harness README by sorting claims into those four tiers and discounting instructional to “usually” — then ask whether the mechanical tier is itself under test. Continuous verified momentum looks like scope hooks and completion gates that cannot be skipped; FOMO that nothing ran overnight is cheaper than waking to green prose that never enforced the boundary it named.
