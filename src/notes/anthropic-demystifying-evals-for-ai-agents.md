---
title: "Anthropic: demystifying evals for coding agents"
description: "Engineering post on graders, pass@k vs pass^k, transcript review, and why SWE-bench-style outcome tests are necessary but incomplete."
kind: field-note
date: 2026-01-09
source:
  title: Demystifying evals for AI agents
  url: https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
project: steward
---
Anthropic’s engineering note is a field manual for agent evals: tasks, trials, graders, transcripts, outcomes, harnesses. For coding agents they emphasize deterministic tests (SWE-bench Verified, Terminal-Bench) plus transcript grading—rubrics, static analysis, tool-call checks—so you measure process, not only green CI.

They stress starting small (20–50 real failures), reading transcripts, watching for eval saturation, and combining code-based, model-based, and human graders. pass@k vs pass^k is called out as a product choice, not a trivia metric.

## Why it matters for code review

Review agents need the same eval hygiene. Outcome-only “did CI pass?” will not tell you if the reviewer is noisy, brittle, or saturated. Steal their grader mix: unit tests for correctness claims, rubrics for comment quality, and humans for calibration.
