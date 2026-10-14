---
title: CodeRabbit’s $60M Series B and the CLI quality gate for AI coding
description: CodeRabbit frames AI code review as the quality gate for vibe coding, announces Series B, and ships a CLI that plugs into Claude Code, Codex, Cursor, and Gemini agents.
kind: field-note
date: 2025-09-16
source:
  title: Our $60M Series B and Quality Gates for AI Coding — CodeRabbit
  url: https://www.coderabbit.ai/blog/coderabbit-series-b-60-million-quality-gates-for-code-reviews
project: steward
---
CodeRabbit’s Series B post is less about fundraising theater and more about positioning review as the trust layer when agents generate more diff than humans can skim. They pair the round with a CLI that reviews in the terminal alongside coding agents, extending an already multi-surface review product (IDE + Git hosts).

## Why it matters for code review

The interesting claim is architectural: review has to live where code is produced (CLI/IDE) and where it is merged (PRs), not only in one of those places. If you are comparing AI reviewers, ask whether they close that loop or only comment after the PR is already open.
