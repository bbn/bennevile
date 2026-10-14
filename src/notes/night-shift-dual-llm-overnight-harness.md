---
title: "Night Shift: overnight Claude with Codex that must agree you're done"
description: "ppuliu skill: up to 8h on a feature branch; file-gated Codex review per commit; dual consensus to end; never push/PR — self-review only when Codex absent, explicitly flagged."
date: 2026-04-19
kind: field-note
source:
  title: "Night Shift — autonomous overnight development agent for Claude Code"
  url: https://github.com/ppuliu/night-shift
project: steward
---

Night Shift is the tortoise overnight pattern with the review cord welded shut. Approve one **objective**, walk away; Claude Code plans/implements/commits on a feature branch for up to **8 hours**. Structural bets (stated plainly): (1) **two independent LLMs** — Claude writes, Codex adversarially reviews; a compacted agent cannot skip the gate because commit requires a real `code-review.txt` on disk matching recorded verdict; (2) **small reversible units** — one commit per task, failing review/tests roll back only that task; (3) **the agent cannot declare done alone** — early exit needs Claude proposing "we're done" *and* Codex agreeing on a re-review of the objective/KR history; without Codex the shift runs to the hard cap with every review marked `CODEX UNAVAILABLE`.

Loop per task: plan → implement → Codex review (fix/revert hard-stop at 10 rounds) → tests must pass → file-gated commit. Morning artifact is `.night-shift/runs/<id>/handoff.md` (what shipped, commit hashes, review rounds, unattended decisions). Safety table covers the usual overnight failure modes: no `git push`, no PR open, drift check stops on external HEAD change, scope gated per key result against the objective. Needs `--dangerously-skip-permissions` in a trusted directory — the FOMO half without the merge half.

## Why it matters for code review

This is Mouse's stop-at-merge spirit with an explicit dual-model review ledger. Continuous overnight motion only compounds when "done" is *consensus + files on disk*, not a single model's end-of-session claim. Use it as the reference shape for tortoise factories: independent reviewer process, admissible review artifacts, hard wall-clock cap, human owns push/merge in the morning.
