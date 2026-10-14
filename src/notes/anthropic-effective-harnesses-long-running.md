---
title: "Anthropic: initializer + incremental coding across context windows"
description: "How to keep long-running coding agents coherent: feature lists as JSON, git+progress artifacts, clean handoffs, and end-to-end testing as a human would."
kind: field-note
date: 2025-11-26
source:
  title: Effective harnesses for long-running agents
  url: https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
project: steward
---
Core problem: discrete sessions with amnesia. Compaction isn’t enough—agents one-shot until context dies, or later sessions declare victory early.

Two-part harness: initializer writes `init.sh`, progress log, git baseline, and a structured failing feature list; coding sessions pick one feature, leave clean mergeable state, commit with messages, update progress. Strong instructions not to delete tests. Start each session by running fundamentals end-to-end (browser tools) before new work.

Table of failure modes mapped to initializer vs coding behaviors is the reusable artifact. Open question: specialized tester/QA agents vs one general coder.

## Why it matters for code review

Incremental, artifact-backed progress is what makes multi-session agent work reviewable. Without clean handoffs and honest feature status, reviewers inherit half-built messes and false “done.”
