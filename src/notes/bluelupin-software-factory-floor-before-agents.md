---
title: "A software factory is the floor under fast agent hands — merge stays human"
description: "Sep 10 BlueLupin: ruleset, map, broker, human-on-diff before sessions; intake→verify→named reviewer; launching more agents fills the review queue — capacity is who drains it."
date: 2026-09-10
kind: field-note
source:
  title: "A software factory is how we keep agentic work shippable"
  url: https://blog.bluelupin.com/2026/09/10/software-factories-for-agentic-sdlc/
project: steward
---

[Manish Gupta at BlueLupin](https://blog.bluelupin.com/2026/09/10/software-factories-for-agentic-sdlc/) (September 10) watched the “just let them ship” demo: first feature before lunch, second quietly contradicts it, week’s end a pile of plausible diffs with no session owning the decision. **The agent is a station on the floor, not the factory.** Four things exist before an agent opens a client repo in anger: a **ruleset in the repo** (layers, import direction, contracts — no ruleset, no session); a **map** so cold sessions do not rediscover the tree; a **broker** that attaches short-lived credentials after checking agent/session/args (no service account in the prompt); and a **human who still reads the diff** — the person who opened the session does not approve their own change.

Ticket path is stations, not vibes: intake with out-of-scope, optional short spec, one-task/one-branch/PR then throw the session away, verify with trusted tests plus a break-the-change pass (polite self-review is not a gate), named human, then monitor feeding tickets back. Red CI stops; irreversible actions (merge to default, prod migrations, secret rotation, customer email) never belong to the coding agent. The sharp capacity claim: **launching more agents does not raise the merge rate — it fills the review queue.** Real capacity is how fast a small squad can define the job, read the trace, and approve a release. Factory definition lives as a PR’d file next to the code; golden tickets replay when the harness changes; start on boring chores, not the feature the client is nervous about.

## Why it matters for code review

Harnessed overnight throughput compounds only when the floor rejects bad work before morning triage and merge stays a named human stop. BlueLupin’s stations relocate judgment: machines walk tickets and fail closed; humans keep promote, and FOMO about idle agents is earned only after the review drain has an owner.
