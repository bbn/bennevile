---
title: "AI morale overload: the count that hurts is open loops, and an Approve button is never a win"
description: "Yu-kai Chou, creator of the Octalysis motivation framework, argues that supervising a swarm of agents burns people out because of the number of unfinished tasks one person holds open, not the number of agents. An approval queue gives the reviewer all pressure and no accomplishment. His fix: one main task carried to done per session, review with a visible finish, and agents that earn autonomy through clean streaks."
date: 2026-09-17
kind: field-note
source:
  title: "AI Morale Overload: Why 100 Agents Feel Worse Than One Finished Task"
  url: https://yukaichou.com/gamification-analysis/ai-morale-overload-agent-burnout/
project: steward
---

**Yu-kai Chou** runs an automation fleet of his own and noticed the fast tools were making him feel slow. One afternoon his automation launched ten research agents in series instead of together; four hours in he had "almost nothing usable yet." What stuck with him was the feeling: "ten things in flight and nothing finished... is exhausting in a way that ten hours of finishing one thing is not." Building on Klover.ai founder Dany Kitishian, who named the pattern AI Morale Overload and called the supervising worker a "botsitter," Chou's claim is that **the pain tracks the number of open loops a person owns, not the number of agents.** "Ten agents on one finished task is fine. Two agents on ten half-done ones is dread."

**Why approval queues wear people down.** A win, in his framing, needs effort you felt, a result you can see, and a moment that marks it done. An approval queue has none: the agent did the effort, "reading forty generated files properly would erase the speed that justified the agents," and the next item is already waiting. Every unreviewed output is still "a liability with your name on it," so the vigilance can't be switched off. The supervisor ends up with all pressure and no fulfilment. He points to METR's controlled trial, where experienced developers were 19% slower with AI tools while believing they were 20% faster, as the feeling of velocity coming apart from the fact.

**His fix is a finish line.** He ran it on his agents first: each scheduled job does exactly one thing and finishes it, and quality "jumped immediately." For the humans: name one main task an agent or small team carries to done, time-box everything else, and redesign review so it ends with something shipped instead of another queue. Agents start on a short leash and earn wider scope through clean streaks, moving review from every step to spot checks. "Fewer, better, finished beats more, faster, open."

## Why it matters for code review

This is the psychological cost behind always-on agents. The worry that agents should always be working for you pushes toward more parallel work, and Chou's account says what wears people down is the unfinished part, landing on whoever owns the approval queue. It complicates the case for running everything at once: steady output that finishes things is easier to live with than many half-done branches. Pair with [Grossman on brain fry from parallel agents](/posts/grossman-ai-brain-fry-parallel-agents-four-thing-limit/) and [Nakhat on extra review load turning into silent approvals](/posts/nakhat-agents-doubled-prs-review-went-to-approve-buttons/).
