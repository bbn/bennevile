---
title: "claude-overnight: the swarm improves its own skill library mid-run"
description: "Apr 4 Fornace: multi-wave overnight Claude SDK swarm in worktrees — self-review + simplify, cross-agent wave review, final architecture gate, and a librarian that compounds skills wave to wave."
date: 2026-04-04
kind: field-note
source:
  title: "claude-overnight — overnight coding swarms in isolated git worktrees"
  url: https://github.com/Fornace/claude-overnight
project: steward
---

Fornace’s `claude-overnight` (repo Apr 4; Claude Agent SDK orchestrator) is the overnight swarm that refuses fire-and-forget: hand it a goal and a budget, walk away, review the diff in the morning. Planner / worker / reviewer / verifier roles each get isolated git worktrees and session resume; unmerged branches stay for human review. A usage-cap recipe (e.g. 90% of the 5h window) leaves interactive Claude Code headroom while the swarm grinds — the FOMO fix without stealing your daytime session.

Two design moves separate it from a plain overnight loop. **Self-fixing:** every task agent resumes its own session to simplify the `git diff` before commit; after each wave a dedicated review agent scans the consolidated diff for cross-agent issues; a final gate reviews `git diff main` for architecture coherence before anything touches your working tree. **Self-curating skill memory:** workers emit reusable candidates mid-run; a scribe queues them; a librarian pass promotes, patches, or quarantines — so **wave N+1 starts with a better skill library than wave N**, and the library compounds across runs (Hermes-style progressive disclosure + win-rate quarantine). Multi-wave steering chooses more tasks, deeper reflection, or done until budget or the usage cap trips. Model mix is explicit (Opus planner + Sonnet/Kimi bulk + cheap fast worker), so overnight cost is a routing choice, not a single heroic Opus session.

## Why it matters for code review

Continuous factories compound when the overnight harness leaves a better procedure for the next wave — not only a bigger unverified diff. Review the swarm’s gates and skill ledger the way you review CI: worktree isolation and final architecture review are the merge surface; mid-run skill promotion is the learning loop that makes steady overnight throughput beat one peak Claude Code burst. Idle capacity is still FOMO, but only after the factory already refuses to land unreviewed wave output into your checkout.
