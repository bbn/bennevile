---
title: "Parallel agent loops gave a one-person repo a merge queue problem, so he built one in GitHub Actions"
description: "Oct 18, Enes Oğuzhan Alataş. Several persistent Claude Code loops working on his tool Spool left approved PRs stuck in rebase-and-rerun round trips. His Actions-based queue rebases each labelled PR onto the current main inside the runner, reruns the existing CI, and turns green only if the head, base, label and auto-merge are unchanged. Any push after approval removes the PR from the queue."
date: 2026-10-18
kind: field-note
source:
  title: "AI agents made my personal GitHub repo need a merge queue"
  url: https://alatas.dev/blog/ai-agents-made-my-personal-github-repo-need-a-merge-queue.html
project: steward
---

[Enes Oğuzhan Alataş](https://alatas.dev/blog/ai-agents-made-my-personal-github-repo-need-a-merge-queue.html) builds Spool, a tool for running persistent Claude Code loops, and uses those loops to develop Spool itself. Several agents work on separate tasks while he decides direction and what merges. The repo is personal, but [he is no longer its only contributor](https://alatas.dev/blog/ai-agents-made-my-personal-github-repo-need-a-merge-queue.html). The bottleneck that showed up was integration, not writing code.

## The round trip

Two approved PRs pass CI against the same main. One merges, the other is now behind, and its agent has to rebase, push and wait for CI again before it can land. With more PRs arriving, [most of merge asks from my agents were waiting on one of these round trips](https://alatas.dev/blog/ai-agents-made-my-personal-github-repo-need-a-merge-queue.html) on some days. He wanted to make the merge decision once and let the machinery handle the waiting. GitHub's native merge queue isn't available for a repo under a personal account, so he built a small one in GitHub Actions.

## A green status bound to two commits

A PR enters the queue when it has a `queue` label (often added by a reviewing agent with its approval) and he turns on auto-merge. The queue records the PR's head commit and the current main commit, [rebases that exact PR onto that exact base inside the CI runner](https://alatas.dev/blog/ai-agents-made-my-personal-github-repo-need-a-merge-queue.html), runs the existing CI workflow, then checks that the PR, base, label and auto-merge setting are unchanged before it publishes a green status. Nothing is pushed back to the branch, and GitHub's own auto-merge does the merge.

Because his agents have write access, a push after approval would otherwise keep auto-merge on. An `unqueue` workflow strips the label and auto-merge on every push, so the PR has to be approved again: even a conflict-fixing rebase means [the PR is no longer the version that was reviewed](https://alatas.dev/blog/ai-agents-made-my-personal-github-repo-need-a-merge-queue.html). The test job runs with a read-only token and status-publishing scripts come from main, so a PR is tested under main's gates, not ones it edited. A PR that edits a workflow could still post a green status for itself, and there the reviewer reading workflow changes is the guard.

## Costs he names

It tests one PR at a time, which costs throughput compared with GitHub's queue testing A and A+B together. A failed candidate doesn't start the next run by itself, so the queue can stall until something dispatches it. And there is a gap between checking main and GitHub merging. Compare [funador's local merge queue for parallel Claude Code worktrees](/posts/funador-claude-code-merge-queue/).
