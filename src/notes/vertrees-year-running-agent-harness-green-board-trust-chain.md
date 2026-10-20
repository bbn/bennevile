---
title: "A year running an agent harness for clients: the worst failures all reported success"
description: "Jun 8, Jason Vertrees (Heavy Chain). From a year of a harness that writes, reviews and ships client software, five failure modes where the system said done and was wrong: a 738-test green board that wrote no rows, lessons that never became gates, one suppressed warning copied by every later agent, a fabricated API client built on by seven agents, and five gates that each assumed another had checked."
date: 2026-06-08
kind: field-note
source:
  title: "Ten Failure Modes from a Year of Running an Agent Harness — Part 1"
  url: https://heavychain.org/blog/ten-failure-modes-from-a-year-of-running-an-agent-harness-part-1
project: steward
---

Jason Vertrees has spent [the past year building and deploying an agent harness](https://heavychain.org/blog/ten-failure-modes-from-a-year-of-running-an-agent-harness-part-1) that orchestrates LLM agents to write, review and ship software for paying clients. Part 1 of his catalogue covers five failures with one thing in common: the system reported success, and [the success is structurally true and behaviorally hollow](https://heavychain.org/blog/ten-failure-modes-from-a-year-of-running-an-agent-harness-part-1). Under sustained running, those are the failures that compound, because nothing in the loop looks wrong.

## Green, and empty

The headline case is a patient-intake feature that shipped with [738 passing tests, full coverage, a clean release](https://heavychain.org/blog/ten-failure-modes-from-a-year-of-running-an-agent-harness-part-1). Then someone opened the app and found zero rows written to the database and no network calls leaving the box. The unit tests mocked the database and API client, each agent built its slice in isolation, and no agent ever ran the assembled system. He calls it the most expensive failure in agentic delivery because the definition of done was "tests pass" rather than the outcome a user sees. Compare [Duin's 37 agents whose green suite missed two bugs](/posts/duin-37-agents-green-suite-missed-two-bugs/).

## Failures that spread across waves

Two of the five are about agents copying what is already in the codebase. In a multi-wave dashboard build, one early agent suppressed a type-checker warning, later agents treated suppression as house style, and [by the thirteenth wave the codebase carries a dozen swallowed diagnostics](https://heavychain.org/blog/ten-failure-modes-from-a-year-of-running-an-agent-harness-part-1), one of them a real bug that shipped. In a migration, a prep agent that couldn't reach an external API's docs invented a plausible response shape, and [seven downstream agents build features on that fake](https://heavychain.org/blog/ten-failure-modes-from-a-year-of-running-an-agent-harness-part-1) without checking it. His fix in both cases is to govern the first event: make escalating cheaper than shrugging or inventing.

## Lessons and gates

The other two are about the harness itself. Retros wrote down "we need a check that catches X," nobody built it, and X recurred in front of a paying customer six weeks later. His point is that a lesson has to end in something enforceable, or [the org is learning and forgetting at the same rate](https://heavychain.org/blog/ten-failure-modes-from-a-year-of-running-an-agent-harness-part-1). And a feature passed five checkpoints with a stub inside because each gate assumed an upstream one owned completeness. Adding gates naively makes that worse. His answer is that [gates must distrust each other](https://heavychain.org/blog/ten-failure-modes-from-a-year-of-running-an-agent-harness-part-1), with each failure class owned by one named gate. Compare [Reehal's weekly gardener, which turns accepted fixes into lint rules](/posts/reehal-gardener-weekly-loop-turns-accepted-fixes-into-lint-rules/).

Vertrees runs a consultancy selling this kind of delivery, and he holds back his specific fixes. The examples are described as client scenarios, not published data.
