---
title: "Ahmad Dogar: agent reports must carry evidence, and the section he reads first is what it did not check"
description: "Oct 25, Ahmad Dogar on making coding agents prove their work: checks ordered cheapest first, a fixed report format with pasted output, a Stop hook that keeps the agent working while typecheck or lint is red, a bundle budget printed on every run, and screenshots opened by someone who did not write the code."
date: 2026-10-25
kind: field-note
source:
  title: "Make coding agents prove their work"
  url: https://dev.to/ahmad_dogar_7d098f5e48f72/make-coding-agents-prove-their-work-4l17
project: steward
---

[Ahmad Dogar](https://dev.to/ahmad_dogar_7d098f5e48f72/make-coding-agents-prove-their-work-4l17) starts from one sentence: "Everything should work now." An agent's summary describes what it meant to do, not what happened, so on his site no report is accepted without evidence he can check without re-running anything.

**Checks in a fixed order.** Typecheck, lint, build (which also prerenders pages, so a server-render crash fails here), a bundle budget, then screenshots at a desktop and a phone width. Cheap and precise checks go first because a type error points at a line and a broken screenshot points at nothing in particular. CI runs the first four on every push; agents run all five locally before reporting, because a red run inside the agent's worktree is a faster loop than a red run after he has merged.

**One report format for every agent.** Files changed, the actual command output pasted rather than paraphrased, test counts ("tests pass" from an agent that skipped the suite looks exactly like the real thing), budget numbers, and screenshot paths. The last section, which he reads first, is what the agent did not check. An agent that writes "I did not test the signed-in view" has saved him a bug; one that leaves it empty after touching the editor has told him where to look.

**Done means green.** A Claude Code Stop hook runs typecheck and lint whenever the agent tries to end its turn and sends the errors back if either fails. It runs only the fast checks, so small answers stay quick, and it lets the agent stop after one forced retry rather than trapping it on an error it cannot fix. A gzip budget (85.1 KB of 250 KB today) prints on every build, so a jump from one change shows up in the report before merge.

**A second pair of eyes on visuals.** The agent checks its own screenshots against the request, but he opens them himself before merging, because the agent decided what "looks right" means when it wrote the code. If evidence is missing, his reply is short: run the checks and send the output.

## Why it matters for code review

This is verification moved in front of the reviewer: the agent cannot hand over work until the cheap checks pass, and the reviewer starts from evidence and a declared list of gaps rather than a confident summary. Asking the agent to name what it skipped is a small change that points human review at the right place.
