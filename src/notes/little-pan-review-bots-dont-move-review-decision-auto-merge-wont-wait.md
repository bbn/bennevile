---
title: "Little Pan: most review bots never set GitHub's review decision, so auto-merge does not wait for them"
description: "Oct 26, a how-to on waiting for CI and review on agent-opened PRs finds that Codex, Claude Code Review, Copilot and Gemini mostly comment or post neutral checks. Auto-merge waits only for required checks, and with none required it merges at once."
date: 2026-10-26
kind: field-note
source:
  title: "How to wait for CI and code review on a pull request your agent opened"
  url: https://dev.to/heylittlepan/how-to-wait-for-ci-and-code-review-on-a-pull-request-your-agent-opened-14dc
project: steward
---

[How to wait for CI and code review on a pull request your agent opened](https://dev.to/heylittlepan/how-to-wait-for-ci-and-code-review-on-a-pull-request-your-agent-opened-14dc) is a practical post by Little Pan, published Oct 26 and written by the maker of PonyMux, a macOS app that shows this status. The starting point: the agent opens a pull request in four minutes, then two queues begin. CI runs first, and review bots such as CodeRabbit wait for CI before they start.

**"Is review done?" differs by bot.** GitHub's `reviewDecision` only counts reviews that approve or request changes, and most bots move neither. Per the post, Codex reacts with an emoji and comments only when it finds something. Claude Code Review posts a check run that always ends neutral and never approves or blocks. Copilot and Gemini Code Assist leave reviews and comments only. CodeRabbit posts a commit status, and Cursor Bugbot posts a check run.

**Auto-merge only waits for what is required.** `gh pr merge --auto` merges once required checks and reviews pass. With no required checks on the branch, it merges immediately, with CI still running. Review bots that only comment are never required, so auto-merge will not wait for them. Two smaller traps: right after a push, `gh pr checks` can report no checks and exit at once, and a cancelled check exits 0, like a pass.

## Why it matters for code review

A loop that keeps agents opening and merging pull requests unattended depends on the gate meaning what its owner thinks it means. Here the review signal is scattered across emoji, comments, neutral checks and statuses, and the merge button reads only the required ones. If the bot review is meant to gate the merge, something has to turn its verdict into a required pass or fail first.
