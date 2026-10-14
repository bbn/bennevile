---
title: "Hard execution boundaries: the model proposes; the harness decides what runs"
description: "Jul 18 Stanley Yang: vendor-neutral coding-agent harness — disposable workspace pinned to a commit, typed tools, external budgets, independently captured patch, trusted verification; model never owns shell, credentials, or success."
date: 2026-07-18
kind: field-note
source:
  title: "Build a Coding-Agent Harness with Hard Execution Boundaries"
  url: https://stanleycyang.com/writing/build-coding-agent-harness
project: steward
---

Stanley Yang’s Jul 18 field guide is a control-plane recipe for coding agents that treats the model as replaceable and the safety rules as unavoidable. Split the stack: a thin **model adapter** (formats, usage, stop reasons) never owns shell, credentials, or approval; an **orchestrator** owns lifecycle, budgets, retries, and cancellation; a **tool broker** validates arguments and emits audit events; a **workspace manager** materializes a disposable checkout pinned to a full commit id; a **verifier** runs trusted checks and records evidence. The durable contract is small: typed task in, constrained tools, disposable workspace, external limits, independently captured patch, trusted verification, auditable result out.

The load-bearing moves match continuous-factory failure modes. Treat `objective` as untrusted text — it cannot expand `allowedPaths`, select a stronger credential, or swap the verification profile. Prefer narrow tools (`read_file`, `search_text`, `apply_patch`, `run_check`) with path normalization, argv (not shell strings), allowlisted check patterns, and deny-by-default network. Count turns, tool calls, wall time, output bytes, and changed files **outside** the conversation; a prompt that says “stop after 20 steps” is not enforcement. After the agent stops, **Git** — not the agent’s summary — determines the change set (tracked/untracked, patch digest, path/size policy); bind approvals to that digest. Verification is a separate phase owned by repository policy: the agent may request a check; it cannot redefine success by dropping a test or picking an easier command. Distinguish `not run`, `timed out`, `infrastructure failure`, and `test failure`. Run adversarial boundary tests (path escape, prompt injection, oversized output, fork bombs, network, denied-path edits, approval replay) before you trust a quality eval.

Honest scope: for a trusted interactive assistant, a fresh branch and ordinary tests may be enough. Add the harness when work is unattended, input is untrusted, credentials matter, agents run in parallel, or evaluations must be comparable across adapters.

## Why it matters for code review

Always-on FOMO for more agent turns is the wrong pressure if those turns still own the shell and the definition of green. Continuous harnessed momentum compounds when merge-shaped authority — path policy, budgets, patch capture, trusted verify — sits outside the model and survives a provider swap. Review overnight factories for Yang-shaped receipts: disposable workspaces, independent diffs, policy-owned verification, and approvals bound to a patch digest. Pair with [Prusik’s prove layer](/posts/prusik-independent-prove-execution-evidence/) when exit 0 still is not evidence, and with [rmax’s completion authority](/posts/rmax-constrained-agent-harness-completion-authority/) when the model must never decide “done.”
