---
title: "Dark factory at $0.015/task: models write, scripts decide"
description: "Oct 2 Nalivator3000: solo Archon/Paperclip/LiteLLM dark factory — ~$0.015/task, ≤4-file cuts at 40–50% one-shot; silent credit fallback, alert-to-agent trap, 14-day improver cooldown, script-owned merge."
date: 2026-10-02
kind: field-note
source:
  title: "I run a one-person \"dark factory\" of AI agents for $0.015 per task. Here is what broke."
  url: https://dev.to/nalivator3000/i-run-a-one-person-dark-factory-of-ai-agents-for-0015-per-task-here-is-what-broke-2kdi
project: steward
---

Nalivator3000’s Oct 2 field note is a month of running a one-person dark factory against LexyBooster (and a side Godot game) without pretending the hard part was the model. Stack is deliberately boring: one Hetzner VPS (~$12.60/mo), Archon for workflows, Paperclip for budgets/schedules, LiteLLM routing free models first (Groq/Cerebras) → Gemini Flash-Lite → Claude subscription for plan/review. Merge authority is a **script**, never a model: strong-reviewer approve, green checks, no deleted definitions, no forbidden paths.

Receipts after a month: typical one-to-two-file+test tasks cost about **$0.015** in API calls (cheapest ~$0.007). The biggest saving was not a smarter model but **smaller tasks** — epics cut to at most four code files let a single cheap call land a working patch on **40–50%** of tasks. The factory shipped six Godot multiplayer epics plus SEO pages with the human mostly out of the write loop.

What broke was ops, not prompt craft — and the fixes were harness changes: (1) prepaid credits ran dry for two days while the pipeline silently fell back to the subscription model and kept merging → gateway-log monitor for “credits depleted”; (2) a PR waited two days because the alert went to an “agent that fixes alerts” that cannot merge config → money/merge alerts skip agents and page the human; (3) the improver re-touched the same module three nights running after seeing its own commits → **14-day cooldown per module**; (4) cheap agents spun up to **33** calls on hard tasks → one-shot + two quick repairs, then subscription model; cheap only when the subscription window is closed. Lesson he keeps: let models write, let scripts decide.

## Why it matters for code review

Always-on factories FOMO when agents go quiet; the worse FOMO is a loop that keeps merging while spend, alerts, and improver thrash are invisible. Continuous verified momentum compounds when merge is a deterministic gate, task size is a cost lever, and failure modes upgrade the harness (credit monitor, human-routed alerts, cooldowns, escalation caps) instead of another heroic session. Pair with [Cole’s Archon holdout perimeter](/posts/coleam-dark-factory-archon-holdout-perimeter/) when the factory must not rewrite its own rules, and with [Guild’s separate reviewer](/posts/guild-software-factory-specialized-agents/) when independence between write and decide is the scarce control.
