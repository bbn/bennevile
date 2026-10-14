---
title: "agent-sessions: freeze the checks, grade separately, stop at the merge gate"
description: "Jul 25 lmorchard: unattended issue→PR harness — acceptance criteria frozen before work; separate read-only grader; auto-ok vs needs-review tiers; eligible-for-auto-merge is a finding, never a machine merge."
date: 2026-07-25
kind: field-note
source:
  title: "agent-sessions — verifiable acceptance criteria and a board-driver that stops at the merge gate"
  url: https://github.com/lmorchard/agent-sessions
project: steward
---

[lmorchard/agent-sessions](https://github.com/lmorchard/agent-sessions) (Jul 25; still shipping as of mid-Sep) names the overnight failure mode as **false success**, not weak code: an agent writes a test that passes for the wrong reason, grades its own homework, or quietly rewrites “done.” The binding claim is blunt: *an agent is only as autonomous as its verifier is trustworthy.* The harness (`src/agent_sessions/` + Makefile) owns phase state, budgets, mutual exclusion, and provenance; a separate `agent-session` skill supplies the phase instructions — deliberately graded on different evidence (wording vs fixture/mutation tests).

Intake and triage stamp issues with a hidden spec marker and a **derived tier**: `auto-ok` when every criterion is a runnable check and the blast radius is low; `needs-review` when judgment, auth, secrets, migrations, CI, or dependencies are in play. Working modes refuse unmarked issues. Plan **freezes the checks first**; execute has a separate agent grade them with **no write access**; `pr` / `express` drive review cycles and then **stop**. The strongest gate verdict is `eligible-for-auto-merge` — a *finding reported*, not an action taken. Writes to GitHub go through a machine-user write token whose vocabulary has **no merge entry**; the agent’s token is read-only. Real-run evidence is claimed across multiple repos; `make evidence` is the only number the README will stand behind.

## Why it matters for code review

Continuous harnessed throughput compounds only when “done” is a frozen, external check and the merge button stays human. Treat the tier stamp, the frozen criteria, and the gate classification as the review artifacts; treat “eligible” as a morning brief, not autopilot. Peak-session Claude mastery still wins on ambiguous intent — this harness’s point is to surface that as `needs-review` *before* the night burns tokens pretending otherwise.
