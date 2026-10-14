---
title: "Audit the deterministic harness: hooks fail open; CLAUDE.md is a request"
description: "Jul 27 John Young: inventory vendor defaults for permissions, hooks, sandbox, telemetry — exit 1 ≠ block; Cursor failClosed defaults false; sell blast-radius control, not quality."
date: 2026-07-27
kind: field-note
source:
  title: "Audit Your Agent Harness: The Deterministic Layer Nobody Reviews"
  url: https://jyoung.dev/blog/agent-harness-audit/
project: steward
---

John Young’s Jul 27 essay is a staff-engineer field manual for the layer continuous factories inherit and almost never review: **permissions, hooks, sandbox, and tool-call telemetry** — the deterministic surround that decides whether `rm -rf ./build` actually runs when `./build` is a symlink into shared storage. The opening move is inventory, not new policy: most of those dials are still at **vendor defaults**.

The receipts are vendor-doc precise. Claude Code treats hook **exit code 1 as non-blocking** and proceeds; only **exit code 2** blocks — and the docs redirect hard allow/deny into the permission system because hook `if` filters fail open on unparsable Bash. Cursor’s security hooks **fail open by default**; `failClosed: true` ships off. Codex calls tool hooks a “useful guardrail, not a complete enforcement boundary,” with hosted tools that skip the local hook path. Telemetry that would name which surface authorized a call (`claude_code.tool_decision` + `source`) writes **nothing until** `CLAUDE_CODE_ENABLE_TELEMETRY=1` and `OTEL_LOG_TOOL_DETAILS=1`. Sandboxing can warn and continue unsandboxed if the sandbox cannot start unless you set `failIfUnavailable`. Young sorts every control by **where the check executes** — model context (suggestion), runtime before dispatch (string match), or kernel (holds even when the command does more than its name suggests) — and cites Zhao et al.’s trajectory study: failures are mostly **epistemic** (57.9%) not environment (9.4%), so the case for the audit is **leverage you own**, not causation. Same-model Terminal-Bench spreads and Anthropic’s infrastructure-noise / CORE-Bench grading fixes are the controlled companions: harness moves scores even when weights don’t.

Companion: [harness-audit](https://github.com/johnayoung/agent-engineering-toolkit) prints the seven questions against your settings. Young’s own caveat: sell this as **blast-radius control**, never as a quality program — hooks and deny lists do not catch expensive design.

## Why it matters for code review

Always-on agents multiply the cost of **fail-open defaults** you never opened. Review the control plane the way you review a merge queue: which rules are permission denies vs markdown requests, which hooks exit 2 / failClosed, whether sandbox absence is a hard stop, and whether the decision log is on before the incident. Steady overnight throughput compounds only when the night’s authority is enforced outside the model’s judgment — FOMO for idle Claude is wasted if the factory’s locks are still at install defaults.
