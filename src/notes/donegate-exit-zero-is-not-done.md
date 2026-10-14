---
title: "Exit code 0 is not done: DoneGate’s fail-closed completion gate"
description: "Aug 26 DoneGate: worktree + path leases + independent validation — commit claim must match HEAD, allowlist/denylist, required checks, and execution evidence before completion."
date: 2026-08-26
kind: field-note
source:
  title: "DoneGate — Fail-closed completion validation and path ownership for coding agents"
  url: https://github.com/Tetusa1/DoneGate
project: steward
---

Most overnight harnesses still treat “the worker returned success” as a soft signal. [DoneGate](https://github.com/Tetusa1/DoneGate) (Tetusa1, Aug 2026) hardens the opposite rule: **worker exit code 0 is not completion**. Each task gets a managed Git worktree and a path lease; the runner records execution evidence; an independent validator must confirm the registered branch and commit, that the worker’s `DONEGATE_COMMIT:` claim matches independently read HEAD, that changes are descendants of the recorded base, inside the write allowlist and outside the denylist, that the lease is still active, and that required checks passed. Fail any one and the task did not complete — even if the agent process exited cleanly.

That is harness-as-sensor, not harness-as-cheerleader. The primary checkout stays untouched; cleanup drops only the managed worktree and releases the lease; evidence stays in `.agent-worktree/` for autopsy. The demo worker needs no model at all — edit, commit, print the claim, run a required check — so the contract is testable offline. Real coding-agent commands plug in as `worker_command` when they honor the same commit-claim protocol. Scope is stated plainly: local developer tool, not a host-security sandbox or cloud platform; `read_paths` is policy metadata, not an OS jail.

## Why it matters for code review

Continuous factories compound only when “done” is a verified artifact, not a process status. Peak-session mastery lets a human eyeball the diff; overnight throughput dumps claims into the morning queue unless something fail-closed refuses to promote exit codes into merges. Pair always-on workers with independent completion validation — commit identity, path ownership, required checks, durable evidence — or FOMO that agents worked while you slept just means a larger pile of untrusted green.
