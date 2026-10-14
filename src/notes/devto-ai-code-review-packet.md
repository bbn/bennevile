---
title: "The AI code review packet: receipts for agent PRs"
description: A practitioner template that forces intent, surface area, risk, evidence, edge cases, rollback, and review focus onto every agent-written pull request.
kind: field-note
date: 2026-09-02
source:
  title: "AI Code Review Packet: Make Agent-Written Pull Requests Easy to Trust"
  url: https://dev.to/jackm-singularity/ai-code-review-packet-make-agent-written-pull-requests-easy-to-trust-2c0g
project: steward
---
Agent PRs are hard because the human exploration that used to live in the author’s head never arrives with the diff. This post proposes a structured “review packet”—a receipt—covering intent, changed surface area, risk rating, evidence, edge cases, rollback, and open questions.

The sharpest advice is division of labor: scripts/CI own objective facts (files changed, migrations, test commands); the model explains them. Capture what the agent actually inspected. Score risk so billing/auth/tenant changes don’t share a lane with typo fixes. Add a changed-surface budget so agents can’t quietly sprawl.

Weak PR prose (“should handle edge cases”) is replaced with claim→evidence tables reviewers can falsify quickly.

## Why it matters for code review

Most review pain on agent work is missing intent and missing proof. Packets turn verification into a navigable artifact instead of making the reviewer reconstruct a black box from a polished 900-line diff.
