---
title: "Agent review harness: every defect is also a harness defect"
description: "Sep 30 nick-delgado: review-agent-pr → address-pr-review → improve-agent-process — parallel standards/smell/spec/test reviewers, falsifying verifier, root-cause log on a tracking issue that batches process PRs."
date: 2026-09-30
kind: field-note
source:
  title: "agent-review-harness — review AI-authored PRs and improve the authoring agent’s process"
  url: https://github.com/nick-delgado/agent-review-harness
project: steward
---

[nick-delgado/agent-review-harness](https://github.com/nick-delgado/agent-review-harness) (skills for Claude Code / Codex / Antigravity; GitHub via `gh`; repo from Sep 30, still pushing) treats an ordinary PR review as incomplete. Listing defects is table stakes; each defect is also **evidence about the authoring agent’s setup** — instruction files, skills, specs, guardrails — and recurring causes should become concrete process changes before the next flood of agent PRs.

Three skills close the loop. `review-agent-pr` (fresh reviewer session) runs a preflight → intake → spec find → context manifest, then **four parallel reviewers** in fresh context each (standards, code smells / agent-typical patterns, spec alignment, test adequacy), a **verifier that tries to refute every finding**, and a root-cause analyst. It posts one PR comment (findings only, grouped Fix now / Needs owner decision / For the owner, with `file:line` and quoted rule/spec) and logs causes + proposals on a tracking issue labeled `agent-process`. `address-pr-review` is the authoring agent’s job: fix the “Fix now” set and reply finding-by-finding with start/end commits. After several reviews, `improve-agent-process` reads the tracking issue and opens **one batched PR** of docs, skills, tests, and CI checks so the same defect class does not return. CI owns tests/linters/builds; the harness reads results and does not re-run them. Audit trail is append-only comments — earlier reports are never edited.

Honest scope: GitHub-only today; zero stars at writing; process improvement quality depends on humans actually merging the batched harness PRs. The scarce idea is the feedback object: review debt becomes harness inventory.

## Why it matters for code review

Verification tax under sustained agent volume is not only “more eyes on diffs” — it is a loop that spends review findings on the factory that produced them. Continuous harnessed momentum compounds when morning triage updates skills and gates, not just patches the latest PR. Review agent-authored merges for Delgado-shaped receipts: falsified findings, cause logs, and a process PR that closes the class. Pair with [Roborev’s commit-time review loop](/posts/roborev-continuous-commit-review-agent-loop/) when findings must re-enter the worker while context is warm, and with [verify-first’s rejection tax](/posts/verify-first-harness-agent-pr-rejection-tax/) when in-loop gates beat post-merge archaeology.
