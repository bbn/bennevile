---
title: "NightWatch: logs are claims — replays are proofs"
description: "Jun 10 BeamusWayne NightWatch: hash-chained black-box ledger for overnight agents; morning debrief re-runs recorded commands and diffs git vs claims; attest CI gate."
date: 2026-06-10
kind: field-note
source:
  title: "NightWatch — the black box recorder for overnight AI agents"
  url: https://github.com/BeamusWayne/NightWatch
project: steward
---

[BeamusWayne/NightWatch](https://github.com/BeamusWayne/NightWatch) (Jun 10 2026; npm `nightwatch-agent`; Claude Code / Alfred hooks) is a **black-box recorder** aimed at the morning after a multi-hour autonomous run: you wake to a green check and a confident summary, and the tool’s job is to decide whether that summary is evidence. Motto is literal — **logs are claims; replays are proofs**. Every session event lands in an append-only SHA-256 hash-chained ledger (action class, payload digests, extracted claims; credentials redacted). Turn ends snapshot the worktree via git plumbing without touching HEAD. Morning `nightwatch debrief --verify` does not retell the agent’s story: it checks chain integrity, **re-runs the exact recorded test commands**, and runs a three-way scope check — declared globs vs ledger claims vs **git ground truth** — so out-of-band shell redirects (the `scripts/hotfix.sh` that never appeared in the summary) surface as findings.

The CI half is the merge gate: `nightwatch attest` refuses a PR whose receipt does not vouch for its diff (“no receipt, no review”). Paired with Alfred it aims at a dual-witness layout — the agent’s HMAC-signed run ledger plus NightWatch’s external chain — both emitting a common Agent Trust Report shape. Dogfooding notes matter: first production recorder runs caught five of their own bugs, including a “split diary” when the recorder followed the agent’s `cd` into a subdirectory. This is a different product from Conveo’s `/nightwatch` fleet skill; same metaphor, different receipt (ledger + attest vs Captain/Helm/Field Orchestrator).

## Why it matters for code review

Overnight harnessed momentum only compounds when morning triage reads disagreements between claims and git, not the builder’s diary. Continuous factories that skip an external witness wake to mergeable prose; peak Claude sessions still win when you can watch the tools. FOMO that agents aren’t working while you sleep is cheaper than trusting a green summary the agent wrote about itself — put the black box and the attest gate between the night and the merge button.
