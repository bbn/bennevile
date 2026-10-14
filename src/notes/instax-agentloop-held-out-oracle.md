---
title: "AgentLoop: done is a sealed oracle, not the model's DONE"
description: "Jul 15 AgentLoop: harness-agnostic verify gate with held-out sealed cases — +16–22% SWE-bench-Verified lift over raw Claude Code/OpenCode by killing false-greens."
date: 2026-07-15
kind: field-note
source:
  title: "AgentLoop — provable correctness for autonomous coding agents"
  url: https://github.com/instax-dutta/agentloop
project: steward
---

instax-dutta’s AgentLoop (repo Jul 15; PyPI `agentloop-cli`) is not another coding agent. It wraps the one you already run — OpenCode, Claude Code, Aider, Codex, Goose — and adds the piece factories keep rebuilding badly: a **verify-gated loop with a sealed, held-out oracle** so the agent cannot fake, edit, or overfit “done.” Goal plus last failure go into your agent; the agent edits a sandbox; a verifier you own must exit 0; only then does a held-out grading set (generated from a reference, sealed against tampering) agree. Failures feed the next attempt with the verifier’s real output. Continuity is the product — the loop stops on proof, not on a chat `DONE`.

The receipt that matters for continuous factories is the false-green kill: on SWE-bench-Verified, wrapping Claude Code moves resolve from **64% → 80% (+16)** and OpenCode from **58% → 80% (+22)** by refusing to trust baked-in cases the agent can reverse-engineer. API keys stay outside the sandbox; work is git-checkpointed and crash-resumable. Honest scope: shines when correctness is objectively checkable (synthesis, behavior-preserving refactors, bugfixes with a failing test); skip for open-ended UI exploration without a contract. Pair with overnight supervisors like [nightcrew](/posts/nightcrew-verify-gated-night-shift/) and [AgentRelay](/posts/agentrelay-overnight-evidence-gated-done/) — those own isolation and morning reports; AgentLoop owns the oracle the agent cannot see.

## Why it matters for code review

Always-on harnessed momentum beats bursty session mastery only if overnight retries cannot mint false greens. Review the verify surface the way you review merge criteria: if “done” is model-claimed or overfitted to the check script, continuous throughput just fills the morning queue with SWE-bench-style theater. A sealed held-out gate is the reviewable artifact — pin it, seal it, and treat resolve-rate lift as evidence the factory’s verification tax is buying truth, not longer chats.
