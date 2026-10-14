---
title: "A nightly agent run is only as good as the queue it leaves behind"
description: "Oct 8 field report from OCDevel: a scheduled Claude Code session works a shared queue every night, merges routine changes after review, caps itself at three items and one new issue, and emails what needs a human."
date: 2026-10-08
kind: field-note
source:
  title: "A nightly Claude Code run with a shared work queue"
  url: https://ocdevel.com/blog/20261008-nightly-claude-code-upkeep
project: steward
---

**OCDevel** runs a scheduled Claude Code session every night across its sites: security checks, inbox triage, a few queued jobs, then pull requests and a morning email listing what needs the owner. The write-up is less about the agent than about the state it reads and leaves behind.

Everything deferred goes into one database table, split by who can do it: `agent`, `owner`, or `together`. A `dedupe_key` makes filing idempotent, so the run can notice the same stale package every night without growing the queue. Claims are a status-guarded update, stale claims release after 12 hours, and each night re-triages about 15 rows. Rows filed by an unattended run "are often written by a weaker model," so the agent re-checks a row is still true before working it.

The limits are the interesting part. A night takes at most three conditional items, starts nothing new after three hours, and opens at most one GitHub issue, a cap added after a tidy-up run filed five in 56 seconds. Routine changes merge after review; removals, product decisions, and escalations stay as open PRs for the human. Paid API calls run from scripts with a cost cap, not an MCP server, because an MCP server "lets an unattended agent spend on every call it decides to make."

## Why it matters for code review

Always-on momentum is modest by design here: three items a night, reviewed, with a clear line between what merges and what waits. The compounding comes from the queue and its caps, not from any single session being brilliant. One honest complication: the owner nearly told the run to drop the one growing section of a site because the report only listed finished work, so the morning packet now leads with how traffic and revenue moved.
