---
title: "Optio: self-hosted ticket-to-merged-PR loop with CI-resume feedback"
description: "Mar 19 jonwiggins/optio: K8s (or laptop) control plane assigns GitHub/Linear/Jira tickets to Claude/Codex/Copilot worktrees, watches CI every 30s, auto-resumes on failures and review comments, then squash-merges — always-on swarm orchestration you own."
date: 2026-03-19
kind: field-note
source:
  title: "Optio — workflow orchestration for AI agent swarms"
  url: https://github.com/jonwiggins/optio
project: steward
---

[jonwiggins/optio](https://github.com/jonwiggins/optio) (created Mar 19; Show HN Mar 25; still shipping — v0.6.0 landed Sep 23) is a **self-hosted orchestration plane** for coding-agent swarms: assign a ticket, walk away, come back to a squash-merged PR. Intake pulls from GitHub/GitLab Issues, Linear, Jira, Notion, webhooks, or cron. Optio provisions a long-lived Kubernetes pod per repo (or runs via Optio Local on a paired laptop), creates an isolated git worktree, launches Claude Code / Codex / Copilot / Gemini / Cursor / OpenCode, opens the PR, then **closes the loop** — polling CI, review state, and merge readiness on a ~30s cadence. CI red or reviewer comments resume the author agent with failure context (capped by `OPTIO_MAX_AUTO_RESUMES`); a separate review agent can run as a blocking subtask with its own prompt and cheaper model. Green + approved → squash-merge and close the linked issue.

The wedge is ownership of the harness, not a better chat session. Code, secrets, and transcripts stay in your cluster or on your machines; vendors are swappable per session or repo. The same control plane also runs scheduled jobs, event automations, interactive terminals (browser/mobile “needs you” attention), and persistent multi-agent swarms with always-on / sticky / on-demand pod modes. Under the hood, session state changes go through a Kubernetes-style reconciliation control plane — pure decisions over a frozen snapshot under compare-and-swap — so lost events and dead pods do not leave runs stuck. Cost ledger and live log streaming are first-class.

## Why it matters for code review

Continuous factories win when the feedback loop is harness property, not babysitting discipline. Optio’s receipt is ticket → worktree → PR → CI/review resume → merge as one owned pipeline: overnight progress is drained issues with green checks, not eight confident hours nobody verified. If nothing drained the inbox while you slept, you skipped cycle time that does not queue behind a calendar — bursts still win for novel product judgment; sustained merge-rate under load favors the shop that keeps resuming agents against CI and review until the train moves.
