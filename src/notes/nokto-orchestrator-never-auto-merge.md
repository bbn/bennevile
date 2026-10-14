---
title: "nokto: plan → worktree → independent review → PR — never auto-merge"
description: "Jul 2026 noktohq/nokto-agent-orchestrator (still shipping Sep 21): Claude/Codex/Gemini delivery loop with allowlisted verify, secondary review, JSONL audit, resume; human merge is hard — PRs carry the receipt, not a silent land."
date: 2026-07-29
kind: field-note
source:
  title: "nokto-agent-orchestrator — AI agents that deliver code through pull requests"
  url: https://github.com/noktohq/nokto-agent-orchestrator
project: steward
---

[noktohq/nokto-agent-orchestrator](https://github.com/noktohq/nokto-agent-orchestrator) (Jul 2026, still pushing Sep 21; built in production at [Nokto](https://nokto.no)) is a control plane around Claude Code, Codex, and Gemini — not another chat persona. Each YAML/JSON task is planned read-only, validated against allowed/blocked paths and secrets, implemented in an **isolated git worktree**, reviewed by a **different** provider than the implementer (reviewer sees the diff, not the implementer’s summary), verified via an **explicit command allowlist**, corrected under `maxRetries`, then opened as a PR with plan, findings, and verification results. **Changes are never merged automatically.**

The security posture is structural: no `shell: true` process spawn, binary allowlist, blocked force-push and destructive git, main protected, secret scan before PR create, Codex `danger-full-access` rejected at load, append-only JSONL audit with redaction, atomic state so `resume` restarts at the last completed step. Gemini is review-only by construction (API, cannot write files). `doctor` reports real binaries; missing providers are unavailable, not faked. Offline evidence they publish: lint/format/typecheck clean, **95 tests** passing, build green, high-severity audit clean.

## Why it matters for code review

Overnight momentum is worthless if “done” means a silent land on main. nokto’s useful claim is that continuous harnessed throughput ends at a **human-gated PR carrying independent review and allowlisted verify** — modest verified steps you can resume beat a bursty Claude night that merges its own confidence. Pair it with Assembled-style admission policy when you *do* want auto-approve: the shared lesson is that the harness owns authority outside the writer, and FOMO about idle agents is secondary to FOMO about merges without a receipt.
