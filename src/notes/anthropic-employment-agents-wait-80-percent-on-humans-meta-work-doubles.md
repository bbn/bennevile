---
title: "Anthropic economists: agents now log six times their handlers' hours, and sit idle 80% of each session waiting on a person"
description: "Oct 16, Anthropic's internal study of its own workforce finds code commits per engineer up 5x, no rise in reverts for agent-written code, and human attention as the binding constraint. Meta-work, such as specs, agent-on-agent review and pipeline monitors, rose from 10% to 22% of sessions."
date: 2026-10-16
kind: paper
source:
  title: "How employment is changing at Anthropic"
  url: https://www.anthropic.com/research/employment-at-anthropic
project: steward
---

[How employment is changing at Anthropic](https://www.anthropic.com/research/employment-at-anthropic) is an Oct 16 report by Anthropic economists Nathan Wilmers, Regina Catipon, Maxim Massenkoff and Peter McCrory. It draws on internal data on employment, agent telemetry, commits, surveys, calendars and hiring records, plus 17 employee interviews. Most of it is about hiring. The part that matters here is what happened to the human in the loop.

**The agents mostly wait.** By August, agents run by individual employees worked six times as many hours as the people directing them. Code commits per engineer were about 5x their level of six months earlier. Yet in interactive sessions, about 80% of an agent's wall-clock time was spent idle, waiting for human input. One engineer called it "bottlenecking the agents." Another described "an army of Claudes, with every one asking for my attention," each request voiced with the same urgency whether it mattered or not.

**Reading the output is now a job.** The authors converted session output to reading time. Technical teams' agent output has jumped over six months, and even for non-technical groups, reading everything their agents wrote would take more than half the work week.

**People respond by building the harness.** Written standing instructions for agents grew from a few hundred in July 2025 to 8,500 a year later. Meta-work, meaning specs for multi-agent runs, looping one agent to review another's output, and monitoring pipelines, rose from 10% of the average employee's sessions in fall 2025 to 22% in spring 2026. One engineer set up an agent chief of staff to triage agent requests.

**Quality held on coarse measures.** Comparing code by the same person, month and directory, agent-written code showed no difference in lines later removed or reverted. The authors caution that AI errors may be harder to spot, and adopters were not chosen at random.

## Why it matters for code review

This is the first large internal dataset to put a number on where agent throughput stalls: not in generation, but in the minutes an agent sits waiting for a person to read, answer or approve. The fix employees reached for was not working harder in each session. It was turning their attention into standing structure, such as instructions, reviewer agents and monitors, so work keeps moving while they are elsewhere.
