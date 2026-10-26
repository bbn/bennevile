---
title: "Kong's KSAI: review agents that run in CI so closing a laptop doesn't stop the work, and a triage step that cut median review cost 37%"
description: "Oct 16, Marcin Skalski on Kong's internal agentic review platform. Agents run in GitHub Actions behind a sandbox with credentials stripped. A static triage step replaced an LLM orchestrator, and benchmarks scored models on blocking recall, precision, and cost. 22 teams and 135 repos enrolled; the bot wrote 901 of 1,573 commits in its own repo."
date: 2026-10-16
kind: field-note
source:
  title: "How Kong Built an Agentic Engineering Platform"
  url: https://konghq.com/blog/engineering/agentic-engineering-platform
project: steward
---

[Marcin Skalski](https://konghq.com/blog/engineering/agentic-engineering-platform) describes KSAI (Kong Skills for Agentic Intelligence), the shared platform Kong built after every engineer had been assembling their own prompts and tricks. Its main job today is reviewing pull requests. The agents run in GitHub Actions, "so closing a laptop doesn't stop the work," and every model call goes through Kong's own AI gateway for per-repo cost attribution and budgets.

**The review agent can't approve or reach credentials.** OpenCode runs inside a bubblewrap sandbox with a read-only root filesystem and separate namespaces. GitHub tokens, OIDC variables, and runner credentials are removed from the agent's environment; the model token is brokered outside the sandbox through a read-only file. A control plane decides who may start a paid or writing run, and the approval action refuses approvals from the PR author, commit authors, or co-authors.

**Triage beat a smarter orchestrator.** The first version let an LLM orchestrator pick subagents, and each one explored the codebase on its own: "In effect we were burning tokens multiple times for the same thing." A static triage step now decides which skill, model, and effort a review needs, and whether to run one at all. Median review cost fell from **$3.93 to $2.47**.

**Models were scored on recall, precision, and price.** On four PRs in a synthetic repo, Kong measured blocking recall (blocking defects found) and precision (findings a judge accepted), and folded cost into a single score. Opus still scored best on quality but cost 7 times more per review than GLM 5.3 and 80 times more than GLM 5.3 Flash, so the GLM models became the default reviewers. Separately, a 10% A/B split ran Claude Code and OpenCode on the same change with the same model: Opus cost about the same, while Sonnet was 40% cheaper on OpenCode.

By September 17, 22 teams and 135 repositories were enrolled, with 7.8 million lines reviewed and more than 4,000 findings. KSAI's own bot wrote 901 of the 1,573 commits in its repository.

## Why it matters for code review

Review that runs continuously in CI needs to be cheap enough to run on every change and to stay trustworthy when nobody is watching. Kong's answer was to make routing a fixed step rather than a model's judgment, to measure reviewers on blocking recall against cost, and to keep approval structurally separate from authorship, so the agent can review all night without being able to approve its own work.
