---
title: "Claude Projects: coordinator + parallel cloud threads that keep working after you leave"
description: "Sep 17 Anthropic: projects as long-running factories — shared memory, per-thread branches, PRs/tests while you step away (even from your phone); merge conflicts stay ordinary PR work."
date: 2026-09-17
kind: field-note
source:
  title: "Projects redesigned: from folder to conversation"
  url: https://claude.com/blog/projects-redesigned
project: steward
---

Anthropic’s Sep 17 redesign turns Claude Projects from a folder into a **conversation that owns a factory**. You pick a goal and a repo (or several). Claude scopes the request, opens parallel **threads**, reviews what they produce, and assembles the result — and it keeps working after you leave the desk. Steering works from the main project chat or inside a thread, including from a phone. The FOMO half is explicit: idle hours are now a product surface, not a missing bash wrapper.

Under the hood each thread is a Claude Code **cloud session** on its own branch and copy of the repo. The coordinator routes work; overlapping edits resolve as ordinary merge conflicts / PRs. Threads can further fan out via subagents, loops, and workflows. Worked examples they give are continuous-factory shaped: profile checkout p75 latency and open optimization PRs in parallel; connect API/web/mobile repos and retire a deprecated v1 endpoint with one thread per caller migration, tests green, and an order-of-merge hint.

The durable asset is shared **project memory** plus a library of files and artifacts. Threads write and read the same memory — release moved to Friday, why an export died, who to ping before billing — so long-running agentic work stops depending on one giant prompt. Usage is the honest tax: several full Claude Code sessions at once hit limits faster; you pick models/effort for coordinator vs workers. Local tools and network-backed code are “coming very soon”; beta starts for select Pro/Max cloud-session users without existing projects.

## Why it matters for code review

Always-on throughput compounds when the unit of work is a **coordinated queue of reviewable PRs**, not a longer interactive Claude Code heroics session. Projects relocate the human to briefing and acceptance — morning inventory is already branched, tested, and conflict-shaped like the rest of the SDLC. Pair with independent verification and human promote gates: continuous harnessed momentum is the coordinator plus the merge/review surface, not just more parallel typing.
