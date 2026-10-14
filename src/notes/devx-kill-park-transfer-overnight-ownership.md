---
title: "Overnight loops need a kill, park, or transfer owner"
description: "Sep 10 Alex Zhu: four named roles, a one-page session card, and a decision table — if nobody answers Slack, park or kill; never hope the agent finishes alone."
date: 2026-09-10
kind: field-note
source:
  title: "Kill, Park, or Transfer: Overnight Ownership for Shared Free AI Loops"
  url: https://dev.to/devx_6522/kill-park-or-transfer-overnight-ownership-for-shared-free-ai-loops-1792
project: steward
---

[Alex Zhu](https://dev.to/devx_6522/kill-park-or-transfer-overnight-ownership-for-shared-free-ai-loops-1792)’s Sep 10 DEV playbook is the social half of always-on agent work: Friday’s “harmless” rehearsal on a shared box becomes Monday’s orphan process with no stop rule. Agentic tool loops make that sharper than a forgotten notebook — the agent keeps retrying, holding the warm runtime, and assuming it may call tools after you disconnect. The fix is not another glossary. It is **named humans**, a written stop condition, and a paste-ready session card before `python` starts.

Four roles must exist first (even if two names are the same person): experimenter, session owner on the hook now, incoming owner for the next twelve hours, and a reviewer with veto. No incoming owner means you do not have a session owner either — **park or kill**, never “someone will check tomorrow.” The card records PID, must-stop time, tool allowlist, forbidden actions, exact kill command, and a decision of kill | park | transfer. Park means persist artifacts **then kill**; a sleeping process is not a handoff. Transfer is the narrow path: living incoming owner, reviewer signature, allowlist unchanged, stop budget left. Upper rows of the decision table prefer a dead process over an unexplained live one. The article discloses MonkeyCode outreach for a free rehearsal lane — the transferable claim is the roster and the card, not the free-tier host.

## Why it matters for code review

Harnessed overnight momentum still needs a human merge of *accountability*. Continuous verification taxes the machine; kill/park/transfer taxes the calendar. FOMO that agents were idle overnight is cheaper than waking to an unowned loop that outlived its card. Peak-session mastery can own its own laptop; shared always-on factories fail when the review surface is only the diff and nobody can name who may kill the process.
