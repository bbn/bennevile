---
title: "SWE-Review: closing the generate–review–revise loop on agent PRs"
description: July 2026 paper introducing agentic accept/reject review with SWE-Review-Bench and trajectory datasets.
kind: paper
date: 2026-07-07
source:
  title: "SWE-Review: Closing the Loop on Issue Resolution with Agentic Code Review — arXiv:2607.06065"
  url: https://arxiv.org/abs/2607.06065
project: steward
---
SWE-Review treats review as the missing half of SWE-bench-style agents: given an issue and an AI PR, a reviewer explores the repo, decides accept/changes-requested, and feeds structured feedback for revision—plus a benchmark and trajectory corpus.

## Why it matters for code review

One-shot agent PRs are open-loop. This paper is the academic case for investing in reviewer agents and revision loops—exactly what production factories are improvising.
