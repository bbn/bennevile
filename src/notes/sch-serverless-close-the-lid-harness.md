---
title: "SCH: close the lid — durability in checkpoints, not the runtime"
description: "Sep 7: serverless coding harness on AgentCore microVMs — handoff/task modes, S3 checkpoints, Telegram approve; ~$3.45 compute over 12 days vs always-on EC2."
date: 2026-09-07
kind: field-note
source:
  title: "SCH: an affordable sandbox for Coding Agents in your AWS account"
  url: https://c-daniele.github.io/en/posts/2026-09-07-close-the-lid-serverless-coding-harness/
project: steward
---

Carmelo Daniele’s Sep 7 post opens with the tortoise move: close the laptop lid; the coding agent keeps working in a disposable cloud microVM; open it later to a reviewable branch and a runtime that already evaporated. **SCH** (Serverless Coding Harness) wraps OpenCode / Claude Code / Pi on AWS Bedrock **AgentCore** Firecracker sessions. The architectural bet is blunt: **durability belongs in checkpoints, not the runtime**. L1 session storage for fast resume; L2 versioned S3 that survives microVM death; idle timeout (default 15m) + `maxLifetime` (8h) force the checkpoint habit.

Three operator shapes: brainstorm locally then `sch task --handoff` (laptop optional; Telegram Approve/Deny with 10m fallback); isolated AWS workbench under an IAM execution role; backlog fan-out with one harness/branch per task and fast-forward-only `sch fetch`. Headless `task` mode gets heartbeat, terminal outcome, enforced timeout, and `checkpoint: confirmed`. Interactive `run` is best-effort. Credentials stay out of the image — Bedrock via role; other providers only via explicit `~/.sch/env` vars excluded from checkpoints. GitHub push is opt-in `GITHUB_TOKEN`, not default.

Receipts from Aug 29–Sep 9 (86 sessions, 37.5 session-hours): AgentCore compute **$3.45** (~$0.092/session-hour), memory ~78% of that bill because agents wait on the model. Same window always-on `t4g.large` ≈ $25; carefully stopped EC2 ≈ $6.3. Inference excluded and usually dominates. Limitations are stated: single-account POC, broad default role, AWS lock-in, Telegram as personal adapter not a company control plane — the harness isolates blast radius; it does not prove the agent’s change is correct.

## Why it matters for code review

Overnight FOMO is usually a laptop and permission-prompt problem, not a model problem. SCH moves the always-on unit to a pay-as-you-go sandbox with explicit handoff and stop-before-merge discipline (`fetch` + local review). Continuous factories compound when the machine can die and the work cannot — verified branches in the morning beat bursty Claude Code sessions that stall on “okay, proceed?” twelve minutes after you left. Pair with an independent verify gate; SCH’s receipt is the runtime half of the tortoise stack.
