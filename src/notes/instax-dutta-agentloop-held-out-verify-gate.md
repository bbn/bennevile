---
title: "AgentLoop: stop trusting ‘done’ — grade against a sealed held-out oracle"
description: "Jul 2026 AgentLoop: harness-agnostic verify-gate wrapper; sealed held-out grading; claimed +16–22% SWE-bench-Verified lift over raw Claude Code / OpenCode by killing false-greens."
date: 2026-07-15
kind: field-note
source:
  title: "AgentLoop — provable correctness for autonomous coding agents"
  url: https://github.com/instax-dutta/agentloop
project: steward
---

[AgentLoop](https://github.com/instax-dutta/agentloop) (instax-dutta; Jul 15 README / PyPI `agentloop-cli`) is not another coding agent. It is a thin **verify-gate wrapper** around the harness you already run — OpenCode, Claude Code, Aider, Codex, Goose, or any `AGENT_CMD` — that refuses to stop until a verifier exits 0, and optionally until a **sealed held-out oracle** agrees the work is correct on inputs the agent never saw.

The failure mode it names is the overnight tax: agents stop halfway and claim success; naive bash loops treat `DONE` as truth; baked-in check scripts get overfitting (the SWE-bench false-green class). AgentLoop’s product is the oracle layer. `oracle.py gen/record/grade` splits visible vs held-out cases, seals the held-out file outside the sandbox, and reports **PASS / FAIL / TAMPERED**. No `DONE` signal is trusted until `VERIFY_CMD` exits 0; failures re-enter the next iteration with the verifier’s actual output. Continuity is deliberate: each CLI iteration is a fresh harness invocation, so a half-quit becomes one failed iter instead of a dead night. Crash resume is atomic state (`agentloop.state.json`); cost caps stop `over-budget`; optional Docker/Podman isolation; parallel `--run plan.md` with DAG dependencies.

They publish a narrow but on-thesis bench claim on SWE-bench-Verified: Claude Code **64% → 80%** (+16), OpenCode **58% → 80%** (+22) when wrapped — lift attributed to preventing false-greens and retrying until held-out verification passes (see their `bench/` methodology; treat as author-reported). Honest scope: shines where correctness is objectively checkable (synthesis, guarded refactors, bugfixes with failing tests); not for open-ended UI exploration.

## Why it matters for code review

Continuous overnight factories only beat bursty peak sessions when “done” is evidence, not vibes. AgentLoop’s review surface is the oracle receipt and the morning status — completed / blocked / over-budget — not a transcript of self-congratulation. Under sustained load, the verification tax is the product: sealed held-out gates are how modest harnessed momentum compounds without shipping confident false-greens.
