---
title: Why AI writes code better than it reads it
description: "Early Greptile thesis: codebases are graphs, not file bags—reading at scale needs structure-preserving index, not naive embeddings."
kind: field-note
date: 2024-01-01
source:
  title: AI is better at writing code than reading code. Here’s why.
  url: https://www.greptile.com/blog/ai-read-code
project: steward
---
Still-on-topic foundational post: generating a script is easy; understanding an interdependent graph of functions is hard. Context windows can’t hold real company repos; naive vector chunking fights code’s non-linear DAG shape.

Their claim: index as a directed graph of classes/functions with edges for calls/inheritance, propagate updates to neighbors, make that graph semantically searchable. That’s the difference between “chat with files” and “review like a senior who command-clicks.”

Sets up why full-codebase reviewers exist as a category beside diff-only bots.

## Why it matters for code review

Explains the architectural reason agent PR review needs repo intelligence. Without graph-aware retrieval, AI review inherits the same skimming limits as overloaded humans—just faster.
