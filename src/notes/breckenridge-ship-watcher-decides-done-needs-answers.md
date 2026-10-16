---
title: "ship: a script, not Claude, decides when a ticket's PR is done"
description: "Oct 7, Aaron Breckenridge: one command turns a Jira ticket into a worktree and a detached Claude Code session that runs until a watcher confirms on GitHub that checks pass, the PR is approved, and every thread is resolved. A 'needs answers' state replaces guessing."
date: 2026-10-07
kind: field-note
source:
  title: "ship: from Jira ticket to a mergeable PR without watching"
  url: https://www.breckenridge.dev/dev/2026/10/07/ship-unattended-claude-code-sessions.html
project: steward
---

Aaron Breckenridge was "still the glue": picking tickets, making worktrees, pasting tickets into Claude, and checking back on CI and review comments across five tmux panes. So he built `ship`, a zsh function and a small Python dashboard. `ship BIG-12345` creates a worktree and branch, runs setup, and starts Claude Code in a detached tmux session that implements the ticket, opens a PR, then fixes failing checks, answers review comments, and resolves threads. Every 15 minutes the dashboard also asks Jira for To Do tickets under his epics and ships any without a run.

The design choice he is happiest with: **"Claude doesn't get to decide when the work is finished."** A watcher polls GitHub every few minutes and closes the session only when everything is pushed, every check passes, the PR is approved, and every review thread is resolved. "Before the watcher, sessions would cheerfully announce they were done with a check still pending or a review thread still open." The watcher also types `/compact` into a session that has passed 300k tokens and is idle, and `ship` resumes the same session in the same worktree when late review comments or merge conflicts arrive.

The second change is about the human. When a session can't continue without a decision, it runs a small `ship-signal ask` script instead of guessing, and the question sorts to the top of `ship status`. "Answering a question takes ten seconds, catching a wrong guess takes a whole review cycle."

## Why it matters for code review

Two old review problems get moved out of the model's hands. "Done" becomes a fact read from the forge (checks, approval, resolved threads) rather than the agent's claim, and ambiguity is surfaced as a cheap question before code is written rather than discovered as a wrong diff during review. Breckenridge also argues against generic agent multiplexers: what he needed was something to manage his commitments, not his agents. The source is closed and hardcoded to his setup; the shape is the point. Pair with [Lavaee on treating an agent's "done" as a claim](/posts/lavaee-verification-engineering-done-is-a-claim/) and [Chou on open loops, not agent count, as the real load on the person in the middle](/posts/chou-ai-morale-overload-approve-is-a-punishment-button/).
