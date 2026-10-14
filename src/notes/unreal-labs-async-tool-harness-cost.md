---
title: "Async tool calls cut the harness tax — up to 40% vs Codex"
description: "Sep 22 Unreal Labs: agent harness schedules tool work between model turns (in-progress then final event-log records); Harbor benches show comparable pass rates at lower $ than Codex/Pi."
date: 2026-09-22
kind: field-note
source:
  title: "Unreal Agent"
  url: https://unreallabs.ai/blog/unreal-agent/
project: steward
---

[Unreal Labs](https://unreallabs.ai/blog/unreal-agent/) (Sep 22) ships **Unreal Agent**, a production-shaped harness whose main move is architectural rather than prompt-shaped: tool calls run **asynchronously**. The harness appends an in-progress event-log record immediately, keeps executing in the background, then appends the final result and only then wakes the model — so the LLM stops burning tokens on waits, polls, and heartbeats. Users can steer without waiting for tools to finish; the agent can kick off a slow env setup while searching and exploring in parallel.

They report up to **~40% cost savings vs Codex** and ~20% vs Pi on real workloads and Harbor-compatible coding/science benches (Terminal-Bench 4.0, SWE-Atlas QnA, DeepSWE 1.1, ALE-CLI) at comparable pass rates under GPT-6 Astra xhigh — fewer model turns and fewer input tokens per trial, not magic accuracy. Two attributed levers: minimal harness footprint (simple prompts, token-optimized tool results, no sub-agent sprawl) and more useful tool work per model turn. Motivation sketch is also practical: CLI SDKs assume local sessions that don’t map cleanly to production lifecycle; they prefer deterministic sandbox/host constraints over approval hooks inside the harness for security.

SDK surface: Go library, runner executable (`claude -p` / `codex exec` shape), Harbor-compatible benchmark runner. Framed as harness design as a research area in its own right — they cite [HarnessTax](https://the-review-review.vercel.app/posts/harnesstax-same-model-up-to-5x-cost/) as prior art on how much the scaffold moves the score.

## Why it matters for code review

Continuous verified throughput has a cost ceiling: every overnight factory that keeps modest momentum 24/7 pays a harness tax in tokens spent managing tools instead of changing the tree. Async tool scheduling is one concrete way that tax drops without trading away pass rate — the same scarce morning review budget can absorb more evidence-backed PRs. Bursty peak-session mastery still wins when the bottleneck is product judgment in one long chat; always-on loops win when the harness stops making the model babysit its own I/O.
