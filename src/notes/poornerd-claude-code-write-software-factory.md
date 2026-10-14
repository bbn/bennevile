---
title: "One hour: let Claude Code write the software factory"
description: "Sep 10 poornerd: describe plan→execute→review stages; Claude Code ships a worktree-isolated orchestrator plugin — and surfaces silent agent-teams traps before the first hang."
date: 2026-09-10
kind: field-note
source:
  title: "Just let Claude Code write your software factory"
  url: https://www.poornerd.com/2026/09/10/just-let-claude-code-write-your-software-factory.html
project: steward
---

poornerd expected a multi-weekend glue project to stand up a software-factory orchestrator. Instead he described the flow he wanted to Claude Code — worktree isolation, plan-then-execute, specialized agents by keyword, QA that loops back on failure — and about **one hour** later had a working pipeline plus a first PR into an existing Spring Boot app. The surprise was not that agents can write plugins. It was that the hard part was deciding *how work should move*, and that Claude Code could turn those opinions into an orchestrator *and* catch design landmines before the first hang.

Two silent Claude Code agent-teams constraints would have burned a weekend in the wild. First: agent teams **ignore** `isolation: worktree` — teammates always share the lead’s working directory, so you cannot combine team mode with per-agent worktrees in the same stage. The design he got isolates the whole run via `claude --worktree`, isolates Stage 2 reviewers (teams off), and keeps Stage 1 parallelism via planner `owns_files` globs that refuse overlapping parallel work. Second: with teams enabled, named subagents return only an idle notification — no verdict — so a review stage that waits on a result hangs forever. Fix: `factory.sh` runs each stage as a separate `claude -p` process with its own `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` value. Keep that env var **out of** `settings.json` or the whole thing quietly breaks.

He asked for two follow-ups that matter for continuous factories: an optional human look at the spec before implementation, and a factory that lives outside the target repo so project artifacts stay clean. Part of the hour was still human — tuning configs and allowlisted tools so agents could compile and test the existing Java project. The reusable asset is the stage opinions (when to plan, what can run in parallel, what counts as done), not the generated plugin. Pulling tickets from GitHub/Jira is the obvious next automation.

## Why it matters for code review

Continuous factories beat bursty mastery only when the orchestrator itself is a maintained artifact — and when isolation and review gates are *enforced*, not hoped for. This receipt shows the factory bootstrapping itself: describe the stages, let the agent encode them, then treat silent platform traps (worktree + teams, verdict-less teammates) as harness bugs to fix before overnight volume. FOMO that agents aren’t working for you is partly answered by spending the hour on the factory spine so the night shift has something real to run.
