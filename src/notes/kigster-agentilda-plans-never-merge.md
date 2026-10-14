---
title: "Agentilda: plans on disk, agents never merge, overnight until the budget dies"
description: "Sep 20 Gredeskoul: .plans emoji state you can prove from files, specialist agents that cannot publish, alock across worktrees, and a tea-break run that advances a dozen specs until a session limit — continuous factory with human merge."
date: 2026-09-20
kind: field-note
source:
  title: "Agentic Software Factory, In Action"
  url: https://kig.re/2026/09/21/one-agentic-setup-on-every-machine.html
project: steward
---

[Konstantin Gredeskoul](https://kig.re/2026/09/21/one-agentic-setup-on-every-machine.html) (20 Sep 2026) treats the multi-machine museum of `~/.claude` skills as the wrong problem and builds the right one: a **reproducible agentic factory** that turns short briefs into reviewed PRs while humans keep the merge button. Three MIT pieces compose it — `agentilda-ai-setup` (one `configuration.yml` that installs agents, skills, and plugins the same on every laptop), `agentilda`/`tilda` (plan dashboard + specialist cast), and `agent-lock`/`alock` (advisory locks so concurrent agents cannot silently overwrite each other).

The load-bearing trick is that **folder names are state you can prove from files**. `.plans/001.00-🟡` is not an agent’s opinion: no `plan.md`, no ⭐️ Planned; agents sign `Completed` / `Blocked` / `Interrupted`, and the harness renames only when the next state’s required artifacts exist. The cast (researcher → writer → planner → backend/frontend builders → reviewer → broker) never publishes. The tool withholds git write commands and then checks that `HEAD` did not move — “trusting an agent’s report about whether it committed is how you end up with a very confident pile of nothing.” The harness commits, pushes, and opens the PR; dry-run is default until `--commit`. Crash or quit writes a `RESUME:` note into the plan mailbox so the next run continues instead of re-buying research.

Receipt from a real shift: twelve plan folders holding only specs, `tilda run --commit`, tea. About **35 minutes / 141M tokens** later every agent hits a session limit mid-shift — “real factories also stop when nobody pays the electricity.” Six plans are 🟡 Building; six are parked in technical block with exact `tilda unblock` commands rather than invented architecture. `alock` lives under git’s common dir so worktrees share it, sub-agents must name themselves (`AGENT_ID=…`), and orphaned locks with notes refuse silent overwrite.

## Why it matters for code review

Continuous factories beat peak-session Claude mastery only when **state, publish authority, and concurrency** are harness properties. Review the emoji folder, the withheld merge, and the lock notes — not the agent’s closing sentence. FOMO that nothing useful ran overnight is often a missing resume ledger and a missing “agents never merge” rail, not a missing bigger model.
