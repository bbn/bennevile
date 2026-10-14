---
title: "agent-completion-gate: /goal can loop; only artifacts grant complete"
description: "Jun 1 zhjai agent-completion-gate: worker proposes candidate_complete; external check on real files + human-confirmed acceptance manifest grants complete — fills Claude/Codex /goal’s transcript-only stop gap."
date: 2026-06-01
kind: field-note
source:
  title: "agent-completion-gate — Make AI coding agents prove they're done"
  url: https://github.com/zhjai/agent-completion-gate
project: steward
---

[zhjai’s agent-completion-gate](https://github.com/zhjai/agent-completion-gate) (MIT; `npx skills add zhjai/agent-completion-gate`; v0.4.x line) starts from a sentence factories keep learning the hard way: **the goal is not the acceptance criteria.** A monthly sales report page can “exist,” with green unit tests, while the CSV export is missing, the chart has one point, and the title still says Untitled — and the agent honestly believes it is finished. The kit turns done into an external acceptance check. The worker may only write `candidate_complete`; a protected gate reads **real artifacts** against a human-confirmed acceptance manifest and alone may write `complete`. Unknown user-visible surfaces fail closed. Self-check mode exists and is labeled `SELF-CHECK-OK` — deliberately *not* verified completion.

The timely wedge is how this composes with built-in autonomy loops. Claude Code’s `/goal` (and Codex’s goal mechanism) keep going until an **internal, transcript-only** evaluator judges the stop condition met — Claude’s docs note that evaluator does not call tools, so it can only judge what already appeared in the conversation. That is a great keep-going loop and a weak done check. The gate fills the gap: make the goal condition require a surfaced successful `gate/verify_completion.sh` run, so the loop terminates on transcript evidence of an **artifact** check, not on a narrative that sounds finished. `goal-compile` scaffolds the gate, drafts surfaces and machine checks for one human confirmation, then runs until the gate passes. CI can mark `verify-completion` required and CODEOWNERS-protect `gate/` and `control/` so a PR cannot rewrite the judge that judges it; `--diff-base` / `--touched` can derive touched surfaces from the real git diff instead of trusting the worker’s self-report.

## Why it matters for code review

Always-on harnessed throughput compounds only when “complete” is a file-backed verdict outside the writer’s session. Peak-session mastery can eyeball the missing export; overnight volume cannot. Pair continuous agents with an acceptance gate that refuses transcript self-grading — especially under `/goal`-style loops — or FOMO that nothing ran overnight just means a larger pile of candidate_complete claims nobody’s artifacts supported. Review the blocked surfaces and the manifest diffs; those are the morning merge criteria.
