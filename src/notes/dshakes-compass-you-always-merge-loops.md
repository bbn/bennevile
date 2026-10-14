---
title: "compass: loops under a gate — agents prepare; you always merge"
description: "May 25 dshakes compass: budget-capped Claude/Codex/Gemini harness, eval-gated guardrails, self-fixing PR loop with cross-model audit; fleet overnight; human merge permanent."
date: 2026-05-25
kind: field-note
source:
  title: "compass — Let your coding agent off the leash — not off the rails"
  url: https://github.com/dshakes/compass
project: steward
---

[dshakes](https://github.com/dshakes/compass)’s compass (repo May 25; beta through late Sep) is a local-first config layer for Claude Code, Codex, and Gemini that stops three failure modes of unattended agents: burning budget, running unsafe commands, and merging unverified code. `COMPASS_MAX_USD` hard-halts the session before the next tool call — reported spend is not enough. Guardrails and red-team detectors are scored in CI against labeled corpora (`compass bench`, `compass redteam`), not asserted in README prose. Install is reversible; no `curl | sh`.

The unit of work is the **loop under a gate**, not a lucky one-shot. Open a PR and compass reviews, security-checks, runs tests, and cross-audits with additional models (Claude review · Codex audit · Gemini audit), then pushes its own fixes until green or the round cap hands off. CI-fix and `pr-shepherd` take red checks and open PRs toward a merge gate enforced server-side (required checks + rulesets), not the agent’s honor. Fleet mode schedules the same loop across repos overnight — approve from your phone. The permanent rule: **agents prepare; humans push, merge, deploy.**

## Why it matters for code review

Harnessed 24/7 momentum compounds when iteration is capped by measured gates and the merge button never moves to the agent. Peak-session Claude mastery still wins on a single scoped change where loop tax exceeds the work; always-on factories lose the night to self-graded “done” unless review reads the gate evidence — budget halt, eval scores, cross-model findings — not the session narration. FOMO that agents aren’t working overnight is the wrong fear — the right one is waking to auto-merged trust nobody outside the loop can revoke.
