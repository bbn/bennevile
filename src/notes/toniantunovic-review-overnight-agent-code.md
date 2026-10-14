---
title: "Reviewing what the overnight agent shipped while you slept"
description: "May 12 Toni Antunovic: overnight diffs lack mid-flight correction — aggregate review, security triage, reasoning traces, semantic not line-by-line; constrain batch size or automate triage."
date: 2026-05-12
kind: field-note
source:
  title: "How to Review Code Your AI Agent Wrote While You Were Sleeping"
  url: https://dev.to/toniantunovic/how-to-review-code-your-ai-agent-wrote-while-you-were-sleeping-2fh6
project: steward
---

Toni Antunovic’s May 12 LucidShark note (on DEV the same day) is the productively complicating half of always-on factories: the question is not whether agents will write overnight — it is **what you do with the morning inventory**. A light pass-and-merge on forty-seven weekend commits is rubber-stamping production code with a vibe-coding posture.

Overnight agent code differs from interactive agent code. Mid-flight human correction is gone; each decision stacked on the last without feedback. Failure modes concentrate: cascading assumptions from an early wrong guess, silent scope creep beyond the ticket, plausible-but-incorrect logic that passes syntax and convention checks, and missing edge-case context the agent never heard in a meeting.

The checklist is review engineering, not vibes. Count overnight commits first — above ~20, block real calendar time. Review the **aggregate** `main...agent/overnight` diff, not commit-by-commit; unexpected files first. Triage auth/token/SQL/filesystem hits before reading happy-path logic. Demand reasoning traces in commit messages (“assumes legacy users have billing.v2”) so assumptions are checkable. Prefer semantic review (what the module did / does / which invariants might break) over line-by-line reading that misses structural removals. Probe coverage for new error paths, not just happy-path percentage. Run SAST/linters at zero-warning tolerance on the agent-touched set.

Two structural responses to volume: constrain batch size (max commits, max files, no out-of-module edits without cause), and automate triage so humans get a prioritized reading list. Reject auth changes without tests, unsolicited refactors, and new static-analysis warnings; approve focused diffs with coverage and reasoning traces. Mental model: a very fast junior who works in isolation, never asks clarifying questions, and cannot escalate ambiguity — impressive fluency, uneven judgment.

## Why it matters for code review

Harnessed overnight throughput only compounds past peak-session mastery if morning review capacity scales with it. FOMO about idle agents is the wrong scarcity when the real ceiling is review bandwidth under sustained load — constrain the factory’s batch size or industrialize triage, or continuous generation just queues unread debt.
