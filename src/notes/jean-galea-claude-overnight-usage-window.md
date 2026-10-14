---
title: "Galea: overnight Claude reclaims the evaporating usage window"
description: "Jun 15: 5h Claude windows reset while you sleep — caffeinate + claude -p queue; FOMO as wasted capacity; productive complication: weekly ceiling still taxes daytime."
date: 2026-06-15
kind: field-note
source:
  title: "Run Claude Code Overnight While You Sleep"
  url: https://jeangalea.com/claude-code-overnight/
project: steward
---

Jean Galea’s Jun 15 field note reframes overnight FOMO as an **accounting** problem, not a model problem. Claude Code subscription metering runs on a rolling ~five-hour window (plus a weekly ceiling). Sleep seven or eight hours and that window resets once or twice while you use none of it — capacity that isn’t banked **evaporates**. His answer: hand Claude a queue before bed, keep the Mac awake with `caffeinate -i`, run `claude -p` headless jobs sequentially, review artifacts over coffee.

The harness is intentionally small. Each job gets `--model opus`, an `--allowedTools` allowlist (or a trusted worktree + careful bypass), `--max-budget-usd`, and a log file. Prefer branches/worktrees over the live working tree; never grant unattended push/deploy/send/delete. Jobs that pay off share a shape: tightly scoped, morning-judgeable in a minute — research brief to a file, tests on a branch, dependency audit without code changes, a first draft you’ll rewrite. Bigger jobs get a handoff prompt: checkable done-state, context, blocker rule (mock/assume and keep going — ranked by cost-of-being-wrong), and **evidence that works counts, narration doesn’t**.

The productive complication for overnight / always-on factories: reclaiming idle windows is real, but the weekly ceiling is still finite. Marathon nights can throttle the daytime when you actually need interactive capacity; on API billing there is no “free” idle window at all — every overnight token is money. Lid-closed Apple Silicon still sleeps despite `caffeinate`, so the honest laptop recipe is lid open + power, or move the run off-machine. Morning review is mandatory; some nights produce confident nonsense.

## Why it matters for code review

FOMO that agents aren’t working overnight is often unused quota dying on the table — Galea makes that visible. Continuous factories still need Mouse-style admissible evidence and a hard merge cord; this note is the *capacity* half of the stack, not the verify half. Pair with Anthropic Auto mode (continuity without permission babysitting) and InterWorks’ always-on upkeep fleet: reclaim the night only for reversible, evidence-backed jobs, and treat the weekly ceiling as a real budget so overnight tortoise motion doesn’t starve the daytime review queue.
