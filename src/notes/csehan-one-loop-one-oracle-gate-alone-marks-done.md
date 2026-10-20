---
title: "One loop, one oracle: only the merge gate can mark a task done"
description: "Oct 11, Frank Csehan (AJAGARA). After a role-based agent team produced tests and reports but few usable features (78 of 87 tasks with no clear evidence), he moved three projects to a loop: a fixed task list, a scenario the agent cannot edit, a time budget, a serial merge gate, and a nightly regression run that reopens anything that slips. 93 of 100 game tasks green by Oct 11; a speed gain is not yet shown."
date: 2026-10-11
kind: field-note
source:
  title: "Agentic Software Development with a Loop and an Oracle"
  url: https://ajagara.com/en/blog/one-loop-one-oracle/
project: steward
---

Frank Csehan spent seven posts building an agent pipeline modelled on a human team, with fixed roles and a quality gate at every handover. In the eighth, [he takes most of it apart](https://ajagara.com/en/blog/one-loop-one-oracle/). The agents kept busy writing tests, revising check scripts and filing reports while usable features "at times hardly followed." In one project every approval rested on a model's written verdict about a diff, and [of that project's 87 user tasks, 78 had no clearly evidenced result](https://ajagara.com/en/blog/one-loop-one-oracle/).

## What replaced it

The new loop has a finite task list, one executable scenario per task, and a budget per session. The scenarios are drafted before any product code, approved by the human owner, and [the agent writing product code cannot change the approved expected results](https://ajagara.com/en/blog/one-loop-one-oracle/). Hidden variants of each scenario, with different inputs and the same checkpoints, sit outside the developers' working directories to catch code tailored to the known inputs.

As of late September the loop ran [four workers in parallel, one queue, one serial gate, and the regression run at night](https://ajagara.com/en/blog/one-loop-one-oracle/). Each session starts with fresh context and a short progress note. The gate rebases onto main, restores the task list and scenarios from trusted main, and parks any branch that edits an existing test line or adds a skip marker. The gate and test runner are plain programs with no language model in them. Then [a nightly regression run rechecks accepted tasks](https://ajagara.com/en/blog/one-loop-one-oracle/), and anything that has lost its behaviour is reopened and moved to the front of the queue.

Compare [Alataş's merge queue for parallel Claude Code loops](/posts/alatas-personal-repo-merge-queue-for-parallel-claude-code-loops/) and [F200's verdicts bound to the head commit](/posts/f200-shiftyard-governed-factory-verdicts-bound-to-head-commit/).

## The honest caveat

In the strategy game, 93 of 100 tasks were green on October 11, and the task list only grew once everything before it passed. Csehan does not claim the loop is faster: [a gain in speed over the previous process has yet to be demonstrated](https://ajagara.com/en/blog/one-loop-one-oracle/). What it buys is a checkable end to every session and evidence behind every completed task. The human still decides scope, parked tasks, and anything that gets pushed or published.
