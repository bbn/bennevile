---
title: "HealBench: agents can resume repo crashes—HealGuard shows passing tests can still be unsafe"
description: "Sep 30 Tan et al.: 265 repo runtime errors; best Codex+GPT-5.6-Terra PR 38.11% / CR 28.68%; HealGuard flags 17.4% of passing heals; 100% recall on 342 unsafe cases at 68.42% FPR."
date: 2026-09-30
kind: paper
source:
  title: "Trustworthy Runtime Error Healing in Real-World Repositories: A Benchmark and Guardrails"
  url: https://arxiv.org/abs/2609.39086
project: steward
---

Gou Tan, Pengfei Chen, Zhensu Sun, Jieke Shi, and collaborators move LLM **runtime error healing** off competition programs into real repositories—and refuse to treat “the target test passed” as safety. **HealBench** collects **265** resumable runtime errors from 18 repos (SWE-Bench / Pro / R2E-Gym), each with a patched-run reference spanning a median **37 files / 130 functions**, plus a framework that pauses at the crash, lets agents explore cross-file context and live state, and submits healing code into the paused process.

Across Healer, mini-SWE-agent, OpenHands, and Codex × three backbones, the best setting (Codex + GPT-5.6-Terra) **proceeds** in **38.11%** of instances and **passes the target test** in **28.68%**—meaningful overnight recovery, not mastery. The paper’s harder claim is the gap after green tests: among **545** passing executions, **HealGuard** flags **95 (17.4%)** where healing-changed state may reach a developer-declared protected operation (file delete, subprocess, disabled integrity checks). HealGuard forces healing into **HealCore** (an analyzable Python subset), then runs static+dynamic taint from healing writes to protected sinks. On **684** controlled cases it catches **all 342** unsafe dependencies (**100% recall**) at a **68.42%** false-positive rate—fail-closed by design when independence cannot be proved.

## Why it matters for code review

Always-on factories that “heal and continue” overnight are running LLM code inside the live process with the process’s privileges. Review recovery lanes the way HealGuard scores them: separate proceed / correct / safety, require declared protected ops, and treat a passing target test that skipped a CRC check or deleted a cache as a harness bug, not a win. FOMO that agents aren’t fixing crashes is the wrong fear if healing can launder state into later security-sensitive calls. Pair with [Zhao’s HiSentinel pre-execution intervention](/posts/zhao-hisentinel-pre-execution-intervention/) and [Zabolotnii’s RAC non-compensatory authority gates](/posts/zabolotnii-rac-trust-is-not-a-score/) when promoting unattended heal loops.
