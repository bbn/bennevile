---
title: "Lauren Tan’s overnight merges: verification is the system"
description: "Sep 16 Gwang-Jin Kim on Tan’s SpaceX/Cursor talk: ~1,000 PRs/month and merges while asleep — not a magic model; make verify, evidence-first bugs, Skills, CI-hardened review comments, fresh-agent reviewers."
date: 2026-09-16
kind: field-note
source:
  title: "Stop Watching Your Coding Agent: Build a System You Can Trust"
  url: https://everyhub.org/stop-watching-your-coding-agent-build-a-system-you-can-trust/
project: steward
---

Gwang-Jin Kim’s Sep 16 field notes unpack Lauren Tan’s talk (SpaceX, heavy Cursor use): agents merging pull requests while she slept — one morning ~**20 PRs** already on `main`, reviewed afterward and good; reported output on the order of **~1,000 PRs in a month**. The wrong question is which model. The useful word is **verification**. If the agent cannot verify its own work, the human remains the testing framework — and that does not scale to twenty parallel agents.

The upgrade path he extracts is boring infrastructure, not prompts:

- One command for done (`make verify` / `scripts/verify.sh`) so the agent loops inspect → change → verify without you opening a browser.
- For bugs: **failing test first**, then fix, then green — so the agent cannot “fix” a problem it never reproduced.
- Short `AGENTS.md` as onboarding; recurring failure modes encoded as **Skills** (e.g. debug-with-evidence) rather than re-prompted forever.
- Repeated review comments promoted into **hard CI/static rules** (“don’t import X here” becomes a check that exits 1).
- Fresh-context reviewer agent with a checklist that distinguishes confirmed defect / plausible concern / style.
- Parallelism via **git worktrees** on independent tasks, not three agents rewriting auth.
- Every human correction treated as data that upgrades AGENTS.md, Skills, tests, or architecture — the trust curve Tan climbs by converting watched failure modes into environment.

The closing metaphor is head chef, not typist: design the kitchen so the shortest path is the correct path. A weaker model inside an excellent verification loop beats a brilliant model working blind. The goal is not twenty agents generating twenty times more code; it is a system where twenty agents can do useful work without twenty times the supervision.

## Why it matters for code review

This is the Sep 16 receipt for continuous overnight factories: peak-session mastery is irrelevant once `verify`, evidence-first bugs, and CI-hardened review comments make merges while you sleep a property of the repo. FOMO that agents are idle overnight is answered by building the gate stack humans used to be — not by leaving a longer chat running.
