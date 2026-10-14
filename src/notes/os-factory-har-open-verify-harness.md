---
title: "HAR: open harness — isolate, verify, hand off proof (not narration)"
description: "Sep 14 os-factory/har v1.14.2: agent-agnostic CLI+MCP — worktree slots, .har/ contract, deterministic verify + validated tree hash, Mission Control; Claude/Cursor/Codex portable."
date: 2026-09-14
kind: field-note
source:
  title: "HAR — The open harness for AI coding workflows you can trust and verify"
  url: https://github.com/os-factory/har
project: steward
---

[os-factory/har](https://github.com/os-factory/har) (HAR; npm `@osfactory/har`, docs at [harproject.dev](https://harproject.dev/); v1.14.2 Sep 14) is the open, agent-agnostic harness that turns “trust the agent’s self-report” into **isolate → build → verify → hand off evidence**. It ships as CLI and MCP server plus a local **Mission Control** dashboard. Works with Claude Code, Cursor, Codex, or any MCP agent against the same machine-readable `.har/` contract — stack, scripts, and checks in one place instead of drifting across README / CLAUDE.md / Cursor rules / CI yaml.

The loop is explicit. `har onboard` scaffolds the contract; `har env launch N` gives slot N its own worktree, branch, ports, and (when needed) database so a fleet can run without colliding on shared git state or ports; `har env verify N --full` runs the project’s real checks and records what passed, including a **validated tree hash** so a pass is tied to the exact code that was checked. Hand-off keeps the branch and the proof artifacts after teardown — reviewers get code plus evidence, not a transcript of confidence. `har env maintain` diffs the installed harness against current templates to catch silent drift before an overnight run fails for a confusing reason. Plugins register framework-specific verification stages (e.g. Playwright). Honest framing: HAR coordinates work *around* the model; it does not claim to replace human judgment on high-blast-radius merges.

## Why it matters for code review

Always-on factories need a portable verify contract that survives swapping Claude for Codex tomorrow. HAR relocates the review surface to deterministic gates and tree-bound evidence — the morning inbox is branches that already paid the verification tax, not a pile of unverified agent narration. Continuous modest throughput compounds past peak-session heroics only when every slot leaves proof a human (or a merge policy) can audit without re-running the night by hand.
