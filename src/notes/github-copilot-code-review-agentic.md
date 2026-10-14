---
title: Copilot code review moves to an agentic, Actions-backed architecture
description: "March 2026 changelog: tool-calling reviews with broader repo context, running on GitHub Actions (including self-hosted caveats)."
kind: field-note
date: 2026-03-05
source:
  title: Copilot code review now runs on an agentic architecture — GitHub Changelog
  url: https://github.blog/changelog/2026-03-05-copilot-code-review-now-runs-on-an-agentic-architecture/
project: steward
---
GitHub’s own reviewer joins the agentic club: tool calling for repo context, higher-signal findings, lower noise. The operational twist is that agentic CCR runs on Actions—self-hosted-only orgs must set up runners or fall back.

## Why it matters for code review

Infrastructure constraints are product constraints. If your security team banned GitHub-hosted runners, you may silently get a weaker review path. Read the runner fine print before assuming “agentic” means the same everywhere.
