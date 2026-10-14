---
title: "Managed Agents: durable session, cattle harness, disposable hands"
description: "Apr 8 Anthropic (Martin/Cemaj/Cohen): session + harness + sandbox as swappable interfaces; pets→cattle; credentials never in the sandbox — meta-harness so overnight loops outlast any one harness recipe."
date: 2026-04-08
kind: field-note
source:
  title: "Scaling Managed Agents: Decoupling the brain from the hands"
  url: https://www.anthropic.com/engineering/managed-agents
project: steward
---

Anthropic’s Apr 8 Managed Agents post is the infrastructure half of continuous agent work: **harnesses encode assumptions that go stale as models improve**. Context resets that rescued Sonnet 4.5’s “context anxiety” became dead weight on Opus 4.5. So they stopped shipping a pet container that bundled session, harness, and sandbox, and virtualized three interfaces meant to outlast any particular loop — including the ones they run today.

The coupled design nursed named containers: a hang, a harness bug, and a dropped WebSocket all looked the same, and debugging meant opening a shell next to user data. The fix is old computing: make each piece cattle.

- **Session** — append-only event log outside the harness; `wake(sessionId)` + `getSession` resume from the last event after a crash. Context lives as a durable object you can slice, not only as whatever survived compaction.
- **Harness** — the brain loop that calls Claude and routes tool calls; stateless enough to reboot. It never holds credentials.
- **Sandbox / hands** — provisioned on demand via `execute(name, input) → string`. Failure is a tool error Claude can retry against a fresh `provision`. Tokens stay in a vault or are wired into remotes at init so generated code never sees them.

Decoupling paid in latency too: brains no longer wait for a container they might never need — p50 TTFT down ~60%, p95 over 90%. Many brains and many hands become combinatorial instead of one brain glued to one filesystem. The product claim is intentionally modest: opinionated about *interfaces* (session, harness, sandbox), unopinionated about which harness sits behind them — Claude Code today, task-specific loops tomorrow.

## Why it matters for code review

Overnight and always-on factories need the same split reviewers already want: **recoverable provenance outside the agent**, a loop that can die and restart cleanly, and verification/execution environments that do not share secrets with the write surface. The productive complication is also the point — if your harness recipe is the moat, a model bump can retire it; the durable asset is the session contract and the gates around the hands, not last quarter’s prompt scaffolding.
