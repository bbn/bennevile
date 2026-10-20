---
title: "Orbital Witness grades its harness: merged PRs per engineer doubled, a nightly bug hunt, and no measure yet of human attention"
description: "Jul 22, Andrew Thompson (CTO, Orbital Witness). Scored against Ryan Lopopolo's twelve harness-engineering theses, Orbital's harness roughly doubled weekly merged PRs per contributor on a legacy repo, to mostly 6 to 7, at the same review and CI bar. A nightly bug hunt has sceptic agents try to refute each finding before a fix ships for morning review. Three theses are only half-built: turning feedback into infrastructure, retiring nightly loops, and measuring attention rather than cost."
date: 2026-07-22
kind: field-note
source:
  title: "Grading Ourselves Against the Harness Engineering Playbook"
  url: https://tech.orbitalwitness.com/posts/2026-07-22-grading-ourselves-against-the-harness-engineering-playbook/
project: steward
---

[Andrew Thompson](https://tech.orbitalwitness.com/posts/2026-07-22-grading-ourselves-against-the-harness-engineering-playbook/), CTO of the legal-tech company Orbital Witness, scores his team's agent harness against the twelve theses in Ryan Lopopolo's [harness-engineering repository](https://github.com/lopopolo/harness-engineering), the follow-up to [OpenAI's February harness engineering post](/posts/openai-harness-engineering/). The post resurfaced this week via [Dark Factory Dev](https://darkfactory.dev/news/2026-10-17-morning/story-1).

The throughput claim is steady, not spiky. Thompson [reports](https://tech.orbitalwitness.com/posts/2026-07-22-grading-ourselves-against-the-harness-engineering-playbook/) that weekly merged PRs per contributor on a legacy codebase with the harness switched on went from about 3 to mostly 6 to 7 between May and July. On a newer codebase built fully around the harness, the weekly figure swings between the low teens and low twenties, which he puts at roughly three times the legacy repo. He says every one of those PRs clears the same review bar, type checks and CI gates as before, with coding agents handling most of the review and humans checking the rest. These are ranges from a hiring post, not audited numbers.

## The night shift

The piece that matches the always-on pattern most closely is a [nightly bug hunt](https://tech.orbitalwitness.com/posts/2026-07-22-grading-ourselves-against-the-harness-engineering-playbook/). A fleet of finder agents fans out across the codebase, and independent sceptic agents try to refute every finding. Confirmed bugs are fixed test-first, proven against the running stack with before-and-after screenshots, and opened as PRs for humans to review in the morning. Separate maintenance agents wake at 6 AM to catch documentation drift. Each worktree gets its own Docker stack so agents can drive the real UI, because Thompson argues that passing unit tests is not proof and a browser journey through the running app is.

The authority rules are explicit. Forbidden paths are re-checked on every push to an agent-authored PR, force-pushes are banned because they orphan review threads, revision rounds are budgeted, and [merge stays human every time](https://tech.orbitalwitness.com/posts/2026-07-22-grading-ourselves-against-the-harness-engineering-playbook/). A feedback agent that works user-reported issues may ask engineers questions over Slack, but only two per run.

## What is not built yet

Three of the twelve theses get a half-built mark. Feedback is not yet mined from session transcripts and promoted into lints, docs or skills. The nightly loops run, but [none have retirement conditions](https://tech.orbitalwitness.com/posts/2026-07-22-grading-ourselves-against-the-harness-engineering-playbook/). And measurement stops at money: a git hook stamps each agent-assisted commit with its token and dollar cost, but Thompson writes "we measure cost, not attention." Steering messages, review minutes and revision rounds are not yet aggregated into the metric the playbook calls useful outcomes per unit of human attention.

He also notes, in passing, that agentic coding "turns out to be genuinely addictive," linking [LeadDev's piece on developers losing sleep](https://leaddev.com/ai/addictive-agentic-coding-has-developers-losing-sleep). That sits next to the volatility in his own fully harnessed repo. Read with [Peter Vanhee's nightly loop that cannot merge](/posts/vanhee-nightly-ralph-loop-61-prs-52-merged-never-merges/), [AdrienF on harness FOMO](/posts/adrienf-harness-fomo-good-enough-beats-perfect/), and [Will Larson's small-change check at Imprint](/posts/larson-imprint-small-change-approve-or-ignore-review/).
