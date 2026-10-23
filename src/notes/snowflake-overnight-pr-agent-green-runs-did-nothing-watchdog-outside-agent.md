---
title: "Snowflake's overnight pull-request agent reported success for weeks while every tool call failed"
description: "A Snowflake engineer scheduled agents to keep pull requests mergeable and answer review comments unattended. The lessons: a separate watchdog, permission checks in plain code, assertions on output rather than run status, and a noisy alert that hid a real break for twelve days."
date: 2026-10-22
kind: field-note
source:
  title: "Your Agent Ran Overnight. Here Is What It Got Wrong."
  url: https://medium.com/snowflake/your-agent-ran-overnight-here-is-what-it-got-wrong-98a8117e466a
project: steward
---

Kat Prince-Sayward, a principal in go-to-market analytics at Snowflake, [wrote up what it took to keep a scheduled coding agent honest](https://medium.com/snowflake/your-agent-ran-overnight-here-is-what-it-got-wrong-98a8117e466a). The job was ordinary pull-request upkeep with nobody opening a chat: merge main into branches that fell behind, notice failed CI, and answer unresolved review comments from people and bots. Scheduling it took a few command-line flags. Her summary of the rest: finding out whether the scheduled work had actually happened took more effort.

The work is split into four separate automations. An hourly monitor keeps open pull requests mergeable. An hourly review engine posts a standards review and answers comments. A watchdog on its own schedule reads the repository's commit history for runaway fix-the-fix loops and can switch the review engine off. A weekday digest reports what happened. The agent's memory is an ordinary table with one row per pull request, recording which commit CI checked and which diff was already reviewed, so a person can query it when something looks off. The agent proposes fixes, but plain code decides whether it may push them. In approval mode a person has to reply with a single-use token, and an explanation from the agent doesn't count as approval.

**The failures were mostly green lights.** A timeout set above the tool's 600-second limit made every call fail before it started, while every run reported success. The agent described the failure as "the query timed out," which sent her hunting for a capacity problem that didn't exist. Reports went dark for weeks under a green status. Alerts sat in a saturated warehouse queue for four days because a tool's own compute setting overrode the runbook. A digest was bound for a month to a server that didn't contain the tool it called. The most expensive one: a quality alert, with its threshold set from the median of its own history, fired falsely every day for twelve days. The team learned to ignore it, and a real upstream break that began partway through went unnoticed underneath.

Two limits are worth keeping in view. The product is Snowflake's own and still in public preview, and this is one team's account with no counts beyond the incidents. Shadow mode, where the engine proposed fixes but pushed nothing, graded fix quality but couldn't reveal loops, because without a push there was no second round.

## Why it matters for code review

An agent that keeps working overnight is only as good as the evidence that it did the work. Here the cheap signal, a completed run, was wrong for weeks, and the agent's own account of its failure was wrong too. The fixes all move judgment out of the agent: a watchdog it doesn't control, push permission decided by code, and checks that assert a row landed or a message posted. The noisy-alert story is the review-queue version of alert fatigue. A gate that cries wolf daily trains reviewers to wave through the one real failure.
