---
title: "Hermes Kanban: six workers, two chairs"
description: "Sep 20 Dottin: durable board + isolated profiles + Discord control room; concurrency caps before swarm theater; notify≠wake; review in another context — factory continuity without forty agents."
date: 2026-09-20
kind: field-note
source:
  title: "Building a Software Factory in Hermes"
  url: https://medium.com/@raell.dottin/building-a-software-factory-in-hermes-d8ce546626e8
project: steward
---

[Raell Dottin](https://medium.com/@raell.dottin/building-a-software-factory-in-hermes-d8ce546626e8) (~Sep 20) starts where coding got easy and Tuesday stayed hard: unfinished review, blocked migrations, overnight QA, decisions the repo cannot answer. Hermes Kanban becomes the continuity layer — tasks wait, reject, block, and resume without keeping the model session that created them alive. Six profiles (planner / backend / frontend / reviewer / security / QA) with isolated credentials and memory; coding jobs in worktrees so you never wonder which agent deleted the file. Auto-decompose stays off until the planner earns the right to manufacture rectangles.

The load-bearing restraint: **six workers can exist; two can work at once.** `max_spawn`, `max_in_progress`, and `max_in_progress_per_profile` go in before real work. Discord is the control room — routine completions `notify` into a quiet alerts channel; only blocked/review-needed events `notify+wake` the planner (a Sep Hermes issue showed repeated wakes prefilling huge contexts into a token firehose). Review lives in another context because the implementer has already convinced itself. OpenAI’s July swarm incident is the warning label: persistent agent-to-agent comms multiply capability *and* bad direction — prefer dull Kanban handoffs over a global consciousness.

## Why it matters for code review

Always-on factories are org charts of loops, not bigger single sessions. Continuous verified momentum here is a board that survives sleep, a separate reviewer context, and concurrency you can actually audit — not FOMO-driven swarm fan-out that saturates CI and review. Peak-session mastery still owns the outer-loop decisions the factory correctly blocks on; overnight throughput compounds when waiting work sits in Ready instead of spawning twelve paid compilers on a four-core host.
