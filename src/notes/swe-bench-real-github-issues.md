---
title: "SWE-bench: real GitHub issues as the coding-agent exam"
description: ICLR 2024 oral introducing 2,294 issue→patch tasks graded by fail-to-pass tests—the default yardstick for agentic software engineering.
kind: paper
date: 2023-10-10
source:
  title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?"
  url: https://arxiv.org/abs/2310.06770
project: steward
---
SWE-bench reframed coding eval from function synthesis to repository repair: given a real GitHub issue and a codebase snapshot, produce a patch that turns failing tests green without breaking pass-to-pass tests.

At release, even Claude 2 resolved under 2% of issues. The benchmark forced the field to confront long context, multi-file edits, and execution—exactly the conditions where review and verification matter.

## Why it matters for code review

SWE-bench’s hidden tests are a verification oracle. Leaderboards that only report resolve rate still hide whether the agent verified along the way. Treat SWE-bench as necessary but not sufficient: it tells you the patch landed, not whether the process would survive a skeptical reviewer.
