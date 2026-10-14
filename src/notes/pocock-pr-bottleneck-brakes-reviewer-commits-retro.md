---
title: "A software factory needs brakes, and the review should fix the factory too"
description: "Sep 25 Matt Pocock at AI Engineer Paris: agent-triggered work turns a factory into a slop cannon unless checks, a separate reviewer that commits its fixes, and risk-labelled PRs sit in front of humans. Every one-way door gets human review, not every two-way door, and a retro turns each review into checks for the next run."
date: 2026-09-25
kind: field-note
source:
  title: "Fixing the PR Bottleneck — Matt Pocock, AIHero"
  url: https://ai.engineer/talks/LlgiOCmFG_w-fixing-pr-bottleneck
project: steward
---

Matt Pocock defines a software factory by who starts the work: instead of a human initiating every task, a support ticket, a classifier or a slow-query report from the database kicks off a fix. That is acceleration with nobody at the keyboard, and his warning is blunt: "If you just have permanent acceleration pushing stuff through your factory, you're gonna end up with a slop cannon." Bad code also compounds, "because code is the environment your agent operates in."

His answer is three brakes, layered so human review gets faster because it is needed less often: deterministic checks, automated review, then a person.

## Checks are cheap, and they lie

Checks cost CPU cycles rather than tokens or attention, so you can run lots of them. But "does a green CI mean that the code is ready for merge? No, it does not." His examples are agent-written tests that pass without proving anything: a test asserting that a character-limit constant equals 280, a test that reads a page's source file to check two sections appear in the right order instead of rendering it, and a mock of the browser audio API that removes the error modes the real one has. None of it is the agent cheating. It is the agent following "write tests" literally. Review layers are the lie detectors.

## The reviewer should commit

Two practical calls stand out. First, keep coding standards out of the implementer's context. Implementation is already overloaded with exploring, editing and debugging, so standards go in a separate `codingstandards.md` that only a reviewer subagent reads. Second, an automated reviewer that only posts comments "is providing more work for the human reviewer." His default: "The reviewer should commit." It fixes what it's sure of and comments only where there's a real question, so the human reviews a better artifact rather than a list of chores.

Then the PR body sorts attention before anyone opens the diff with a short "merge danger" line: is this a two-way door you can revert, or a one-way door like a migration, data loss, or a simple change that emails 60,000 people, and how wide is the blast radius? His rule: "You really don't need to review every single two-way door. Every single one-way door you do."

## Why it matters for code review

The part that compounds is the last one. "When you do a human review, you're not just reviewing the code, you're reviewing the system that creates it." His Retro skill takes a session, a PR, or a week of PRs and reviews, and proposes new checks, coding-standard updates, navigation hints and tool fixes so "you never want to write the same comment twice." That is how a factory that runs continuously gets better rather than just busier: each expensive human judgment turns into cheap enforcement for every later run. It also means the human stays on the floor for irreversible changes, which is where a factory running at full speed hurts most. Compare [a fleet where the review queue sets the size](/posts/baldwin-heat-death-codebase-review-sets-fleet-size/) and [eight weeks of agent PRs where size, not model, predicted reviewer flags](/posts/zest-866-agent-prs-size-predicts-review-findings/).
