---
title: "Ready for Agent: label the issue, let the harness babysit to merge"
description: "Jul 12 berenddeboer/ready-for-agent: local clanker harness turns ready-for-agent issues into PRs across Claude/Codex/OpenCode/Grok — Merge Policy Off/Classify/Always, forge-agnostic, aimed at 150+ PRs/week without session babysitting."
date: 2026-07-12
kind: field-note
source:
  title: "Ready for Agent: Clanker Harness for 150+ PRs a week"
  url: https://github.com/berenddeboer/ready-for-agent
project: steward
---

[berenddeboer/ready-for-agent](https://github.com/berenddeboer/ready-for-agent) (created Jul 12; still shipping as of Sep 23) is a local **metaharness** for people who already paid for a laptop and a coding-agent subscription: label an issue `ready-for-agent` (GitHub/GitLab/Linear, or Azure Boards tag), pick it in the UI, and the harness owns the babysitting between ticket and merged PR. Fresh worktree per issue, packages installed, headless agent implements and reviews, PR opened, then merge according to a per-repo **Merge Policy** — Off (human merge), Classify (risk-assessed auto-merge), or Always (unattended when CI allows; absence-of-CI treated green only under Always after a deadline). Coding backends are swappable instance-wide (OpenCode, Codex, Grok Build, Claude Code) with per-repo model overrides so expensive brains hit hard repos and cheap ones grind the rest.

The explicit non-goal is finding work: this starts from existing issues (Victor Savkin’s factory cut — explorer tools find work; this one executes labeled tickets). “Implement locally” stops before commit/PR so you can verify in the worktree. Forge support covers GitHub, GitLab, and Azure DevOps; Linear pairs as tracker with GitHub as forge. Containment is serious on Linux (cgroup v2 + systemd user scope); macOS/Windows can open the UI but refuse local execution until durable sandboxing lands. The FOMO posture is in the pitch: get to **150+ PRs a week** by removing the time spent guiding agents through implement → review → commit → status-check stages — not by another peak Claude session.

## Why it matters for code review

Continuous factories win when merge policy and worktree isolation are harness properties, not chat discipline. Ready for Agent’s receipt is the dial: Off/Classify/Always makes unattended merge an explicit risk choice, while the human stays on design and verification where needed. If nothing drained the `ready-for-agent` queue overnight, you skipped a board of bounded tickets that would have been waiting as PRs — bursts still win for novel architecture; sustained merge-rate under load favors the shop that labels work and lets the harness babysit.
