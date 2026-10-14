---
title: "Hooks decide, proof merges: six months of agents on production code"
description: "Oct 8 systems note from Lucas Firmo: markdown rules are requests, hooks are decisions; a second-model signed review and proof artifacts gate every PR before teammates see it."
date: 2026-10-08
kind: field-note
source:
  title: "How I run AI agents on production code"
  url: https://www.bitswithlucas.com/blog/ai-agents-on-production-code/
project: steward
---

**Lucas Firmo** has run most of his production work through a fleet of coding agents for six months. His claim is blunt: the agents were never the hard part. An agent is a process that forgets, stops, is confident, and runs in parallel — so the conversation is never the state, timers outside any chat keep merging and chasing stuck builds, “done” is a claim that needs evidence, and each task gets its own worktree with a claim refused if another live agent already owns the files.

The line that carries the post: **a rule in a markdown file is a request; a hook is a decision.** Every rule that matters became code the model cannot talk past. Before a PR can open, a separate session — preferably a different model family — must leave a signed passing review of the exact commit; any later push invalidates it. Every PR must carry proof in the description: a screenshot for UI, captured output of a real run, or a red/green pair that fails before the fix and passes after. Agents move freely inside the laptop; anything that touches production, cloud infra, or outbound messaging under his name is refused unless a human is at the keyboard. Agents must not be able to edit their own safety checks. A detector with no hands is just a report — anything that can see a ready PR also merges it.

## Why it matters for code review

This is the continuous factory as control-loop design, not session heroics. Second-model review and proof-as-merge-requirement turn review into machinery that runs while you are in a meeting; the human stays in front of irreversible actions. His proudest receipt is a Swift 6 strict-concurrency migration in ten days with parallel directory-owned agents, small reviewable diffs, baseline measurement, and a 25% larger test suite — steady verified throughput, not a big-bang rewrite. Compare [Lavaee’s “done is a claim”](/posts/lavaee-verification-engineering-done-is-a-claim/) and [Humanize’s reviewer-decides-done](/posts/humanize-judgement-engineering-reviewer-decides-done/).
