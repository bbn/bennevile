---
title: "Kiro Crew: 1,000 merged PRs in a week came from a ladder of bottlenecks, not a burst"
description: "Sep 18 Kiro team: three full-time engineers merged 1,000 PRs in seven days, each through CI and review, by climbing five stages from one hand-driven session to a supervisor agent running 30 to 50 sessions across six to ten machines. Past 50 sessions the supervisor itself stopped scaling."
date: 2026-09-18
kind: field-note
source:
  title: "How we built a software factory with Kiro Crew to merge 1,000 PRs in a week"
  url: https://kiro.dev/blog/software-factory-1000-prs/
project: steward
---

Zejiang (Joe) Guo, Bolin Chen and Zezhen Xu, the three full-time engineers on Kiro Crew, report merging **1,000 pull requests in seven days**, over 120 a day, and say **every one went through CI and review**. They did not set that number as a target. They reached it by hitting one limit after another, and they lay the path out as five stages.

At stage 1, one person drives one session and becomes the bottleneck, because the agent waits on them between steps. At stage 2, more tabs help for an afternoon. Then you are re-explaining the project in every tab and holding the map in your head. Stage 3 adds memory, a dashboard, cron, and workflows, which gets one person to roughly **10 to 20 active sessions**, but the human still reads every update and picks what comes next. Stage 4 is an agent pipeline: triage, implement, review, and merge run as independent stages that coordinate only through a message queue, so no stage waits on another. That pushed one person **past 20 concurrent sessions**, but the pipeline is a fixed shape and cannot re-plan when a result breaks the plan.

Stage 5, Crew Mode, is an agent outside any single session that takes on the five chores each session still needs: define its goal, start it, watch it, judge its result, decide what happens next. Guo says he runs **six to ten machines at once, keeping 30 to 50 sessions busy** triaging, writing PRs, reviewing, and merging. The week's numbers came from the pipeline plus an early version of Crew Mode. The limit showed up again past 50 sessions, where **the one coordinating agent became the new bottleneck** because it lost context or lacked the right expertise.

## Why it matters for code review

This is a clear account of throughput built by steady harness work instead of heroic sessions. Each stage removed whatever the human was doing by hand, and the gate (CI and review on every PR) stayed fixed while volume rose. Their advice to start small fits that: give agents memory before opening more tabs, hand one recurring chore to a timer, and put a queue between named stages before building an orchestrator. It also productively complicates the story. Supervision does not disappear, it moves up a level and hits its own ceiling, and the team spends most of its current effort on governance instead of speed. That means coordination recorded outside model context, host-enforced permissions, and **an audit trail the agent cannot edit**, started on day one because it is "nearly impossible to retrofit when you have fifty." They also flag coordination cost as a separate bill at hundreds of sessions. A week of 1,000 PRs shows the workflow handled the volume. It does not show what those PRs were worth, and the post does not break them down. Pair with [Brian Curry on fleet size as the reciprocal of the human-routed fraction](/posts/curry-autonomous-fleet-supervision-ceiling/) and [Cursor's week-long continuous harness run](/posts/cursor-self-driving-codebases-week-harness/).
