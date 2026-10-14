---
title: "Constrained Agent Harness: the model proposes; the harness decides done"
description: "Sep 19 rmax-ai: coding as constrained transitions over repo states—goal contracts, Docker sandbox, hidden tests, git checkpoints, SHA-256 evidence chain; model never makes the authoritative completion decision."
date: 2026-09-19
kind: field-note
source:
  title: "constrained-agent-harness — bounded, verifiable search over repository states"
  url: https://github.com/rmax-ai/constrained-agent-harness
project: steward
---

The [rmax-ai/constrained-agent-harness](https://github.com/rmax-ai/constrained-agent-harness) repo (Apache-2.0; last substantive push Sep 19) ships a reference architecture for treating coding agents as **bounded, verifiable search over repository states** rather than indefinite conversations. The load-bearing claim matches the continuous-factory critique of self-attested done: the model proposes changes; a deterministic harness evaluates the resulting state and decides accept, reject, roll back, retry, branch, or **complete**. The model never makes the authoritative completion decision.

The implementation sketch is a full control plane around that transition: a state-machine controller with seven transition decisions; typed YAML **goal contracts** that bound the task; a policy engine for path/command/dependency enforcement; Docker-isolated command execution; a git-backed repository store with immutable checkpoints and rollback; a tiered evaluator pipeline for quality and safety; **hidden verification** (protected tests invisible to the agent); fresh-session context reconstruction per iteration; an append-only SHA-256 hash-chain artifact store; and telemetry/reporting for run comparison. A scripted payment-webhook idempotency benchmark runs without API credentials; live demos plug in model adapters (e.g. Google ADK). CLI surfaces (`cah run`, `cah status`, `cah artifacts verify`, experiment compare) treat evidence and hash-chain integrity as first-class operations, not afterthoughts.

## Why it matters for code review

Always-on factories that let the overnight agent declare “task complete” are still running chat with a timer. This harness’s useful receipt is architectural: completion is a harness transition gated by contracts, hidden tests, and evidence—not a model utterance. Review continuous verified momentum the way [mikeroySoft’s factory](/posts/mikeroysoft-factory-tickets-in-prs-out/) and [Serge’s GPU funnel](/posts/ziade-serge-huggingface-overnight-gpu-verify/) do—distrust the worker at every stage, keep merge/completion authority outside the proposer, and treat FOMO for more agent turns without a completion gate as queue inflation, not throughput.
