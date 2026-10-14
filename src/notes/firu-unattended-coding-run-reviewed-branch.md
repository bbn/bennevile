---
title: "Unattended run: drop a file, wake to a reviewed branch — never merge"
description: "Sep 18 Firu: autonomous-sdlc-harness daemon → worktree → plan/build/review/browser-test loop; state in git checkboxes; four review gates including a skeptic; stops at a pushed branch, human owns the merge."
date: 2026-09-18
kind: field-note
source:
  title: "Inside an unattended coding run: from a dropped file to a reviewed branch"
  url: https://dev.to/daniel_firu/inside-an-unattended-coding-run-from-a-dropped-file-to-a-reviewed-branch-lgc
project: steward
---

Daniel Firu’s Sep 18 walkthrough is the continuous-factory shape without the scoreboard: drop a request file into an inbox, leave, and come back to a **pushed branch that never touched `main`**. The open [autonomous-sdlc-harness](https://github.com/firu-daniel/autonomous-sdlc-harness) (Claude Code plugin + Node CLI) runs a daemon that creates an isolated git worktree, commits the prompt first as untrusted data, and launches one headless session. Phases: **PLAN** (writer ↔ parity / architecture / plan reviewers, loop to five rounds), **BUILD** (one task file per implementer, separate committer flipping checkboxes), **REVIEW** (parity, architecture, branch review with meta-review, then a **skeptic** that treats the reference itself as fallible), **TEST** (real browser, one fresh agent per case), **CLOSE** (docs, stats, harness self-friction log). Reviewers cannot edit files — findings only.

Two load-bearing decisions: **state lives in git, not the model** — phase ledgers and detail indices as committed checkboxes so resume, rate-limit pause, and watchdog restart are the same mechanism; and **nobody reads more than they need** — the orchestrator passes paths, never opens substantive diffs, so hundreds of dispatches don’t suffocate on context. Hardened mundanities matter: free-port probing, machine-global test-account locks, deny-floor permissions. Deliberate non-goals: no merge, no GitHub PR open, no multi-host fleet — forge-side branch protection is named as the real floor.

## Why it matters for code review

Steady overnight throughput beats bursty session mastery when the morning artifact is a reviewable, multi-gated branch — and when human attention owns the merge button, not every intermediate turn. Firu’s FOMO antidote is a durable inbox-to-branch loop with independent reviewers and browser evidence; the review surface is the skeptic’s findings and the harness defect intake, not a chat scroll that claimed victory at 2am.
