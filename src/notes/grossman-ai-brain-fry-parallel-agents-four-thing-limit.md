---
title: "AI brain fry: agents can run in any number, the reviewer still holds about four things"
description: "Lior Grossman on running twelve agent chats at once: Tibo's 'never been this tired' post (500K views), BCG/UC Riverside's AI brain fry survey, attention residue, and Bainbridge's 1983 ironies of automation. Self-reported productivity rose with a second and third tool, then dipped."
date: 2026-10-15
kind: field-note
source:
  title: "AI Brain Fry: What Running Many AI Agents Does to Your Brain"
  url: https://liorgrossman.com/p/what-running-ai-agents-does-to-your-brain
project: steward
---

**Lior Grossman** starts with his own October 13: seven Claude Code chats, two Codex, three Cowork, each on a different task, and his job "was to keep all of them busy." He no longer writes the code; he reviews, decides and unblocks. A day later **Tibo** posted that he runs up to 10 agents most days and has "never been this tired" — about **502,000** views and **1,600** replies in a day. Grossman also cites Simon Willison feeling drained by 11 a.m. after a morning of parallel agents and Steve Yegge's estimate of about four hours a day of this work.

He pulls the research together. A BCG and UC Riverside survey of **1,488** people (HBR, March) names **AI brain fry**: **14%** of AI users reported it; those with the heaviest oversight load reported **12%** more mental fatigue and were **19%** more likely to report information overload; those who felt they over-used AI reported **39%** more major errors. Self-reported productivity rose with a second and a third tool, then dipped. The mechanisms are old: context-switch costs, Sophie Leroy's attention residue (with agents, almost every task is unfinished at any moment), Gloria Mark's finding that interrupted people finish faster but with more stress, and Lisanne Bainbridge's 1983 point that automation leaves people the hardest job, monitoring, which a motivated person can sustain for about half an hour. Her answer was alarms, not watching.

Then the second half: work expands to fill the agents available. An idle agent feels like wasted capacity, so you hand it another task. A Berkeley Haas study inside a 200-person company found AI pulled work into lunch breaks and evenings rather than freeing time. Addy Osmani's ceiling is three or four parallel agents; Willison can review and land one significant change at a time; Nelson Cowan's working-memory estimate is about four items.

## Why it matters for code review

This is the cost side of hand-run parallelism: the human becomes a dispatcher and a monitor, and both jobs degrade the review that follows. It argues for harnesses that run without being watched and surface only real stops — not for more windows. Pair with [Charles Sieg on idle sessions and 4 PM approvals](/posts/sieg-agentic-coding-fomo-idle-sessions-weaker-review/) and [the shift from fear of idle agents to a planning bottleneck](/posts/piirainen-fomat-fomut-overnight-capacity-planning-bottleneck/).
