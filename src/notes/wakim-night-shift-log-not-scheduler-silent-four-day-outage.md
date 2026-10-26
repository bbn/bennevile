---
title: "Wakim's night shift: agent jobs built, reviewed and merged by 1:40 a.m., after a four-day outage nobody noticed"
description: "Oct 25, Charbel Wakim on running headless Claude Code jobs overnight with a reviewer agent and a merge step. The scheduler kept failing quietly: usage limits, a sleeping laptop, an exit message that said a finished job had died. What made the night shift trustworthy was a row each job updates after every step."
date: 2026-10-25
kind: field-note
source:
  title: "I Gave My Terminal a Chief of Staff: The One Where It Works the Night Shift"
  url: https://charbelwakim.com/blog/posts/i-gave-my-terminal-a-chief-of-staff-part-3
project: steward
---

[The One Where It Works the Night Shift](https://charbelwakim.com/blog/posts/i-gave-my-terminal-a-chief-of-staff-part-3) is part three of Charbel Wakim's series about a coordinating agent he calls Nadim, which staffs work out to a builder agent and a reviewer agent. The goal of the night shift is plain: a ticket he approves in the evening is built, reviewed, merged into the development branch and checked by the time he opens the laptop.

**It failed silently first.** On 30 September he opened the job log and found four days of `pending` rows. The account had hit a usage limit and the laptop had gone to sleep. Nothing crashed and nothing alerted. Nadim's own retro counted "at least seven" runs that never fired.

**The fixes were about evidence, not scheduling.** The schedule now lives in a plain file, and the scheduled triggers are treated as reminders that can die; each morning a check compares what should have run with what did. Each job runs as its own headless session with a 50 or 120 tool-call cap, a 100-minute clock, and a three-line ending: done, blocked or failed. After one night where a job was approved, merged at 1:36 a.m., and then printed only a login-expired error, every job also writes a timestamp to its own row after each step, such as a review verdict, a merge or a green deploy.

**One real night.** On 22 to 23 October three chained jobs ran. The first was built, approved by the reviewer agent on the first round, merged and checked live by 1:40 a.m. The second had a must-fix from the reviewer, two merges, a session limit at 4:00, and a resume. The third stopped at 5:55 on a question only Wakim could answer, and waited for breakfast.

## Why it matters for code review

This is what a modest always-on loop looks like up close: real reviewed merges at night, but every failure mode is quiet. A dead scheduler, a misleading last line and a closed laptop lid all look the same in the morning unless each job leaves a step-by-step record. Wakim's line: "start with the log, not the scheduler." He also keeps the human decision intact, since a refusal at 5:55 a.m. is allowed to cost half a night of work.
