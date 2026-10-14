---
title: "Cloudsail: an autonomous software factory earns autonomy one task type at a time"
description: "Oct 10 field guide from Cloudsail: the agent is the smallest part of the factory. Merge policy lives in deterministic code with a named owner, a fresh-context reviewer checks the exact candidate commit, and checks-only merging is unlocked per task type only after the numbers hold."
date: 2026-10-10
kind: field-note
source:
  title: "Autonomous software factory: what it takes and where its limits are"
  url: https://cloudsail.com/blog/autonomous-software-factory/
project: steward
---

Cloudsail, an engineering consultancy that sets up coding-agent pipelines with client teams in Germany and Poland, published a sober field guide on Oct 10 to what it calls an autonomous software factory: agents take scoped work from an issue to a merged change, "while people decide what gets built and what may merge." Its central claim is that **the agent is the smallest component**. Most of the factory is the line around it, meaning intake, queue, environments, gates, merge policy and feedback, and each station needs an owner.

The stations, in order:

- **Intake with a written spec.** Expected behaviour, files in scope, how to verify, what is out of scope. Code checks eligibility from labels and paths; issues without a spec stay with people.
- **Queue and orchestration** with fixed retry limits, plus time and budget caps enforced *outside* the agent.
- **A fresh, isolated environment per run**, with credentials scoped to the task. "In unattended runs, permissions do the job that a watching engineer would otherwise do."
- **Verification gates** on the exact candidate commit, including a review by a separate agent session in a fresh context that gets the spec, the diff and the test output, but not the conversation that produced the change.
- **Merge policy in deterministic code.** A program checks that the reviewed commit equals the candidate, then either asks a person or, for a cleared task type, merges. "The agent has no part in this decision."
- **Feedback.** Every rejected run gets a recorded cause (unclear spec, missing context, weak test, wrong permission), and the fix lands in the template, the harness or a new check.

The interesting part is how autonomy grows. A team starts with one repository, one task type and one queue, such as dependency patch updates, mechanical migrations, or small bugs that come with a failing test. People review every factory PR as usual and record why each run was accepted, reworked or rejected. Only once the numbers hold over an agreed period does the owner decide whether that task type may merge on checks alone. That switch is written in code, has a named owner, and can be reversed with one change. Changes to the harness, the gates and the merge policy always stay with people.

The guide also has a warning about parallelism: a factory gets most of its throughput from running agents side by side, "and that is also where cost and review load grow fastest." With weak gates, every extra run becomes extra review. It recommends a cap on how many candidate changes a reviewer is asked to read.

## Why it matters for code review

This is the plain operational version of the always-on argument. The factory runs without anyone watching each run, so "it inherits every gap the earlier stages left open." That is why Cloudsail puts it last, after a shared harness and after every harness change has been measured on your own code. The metric it asks for is cost per *accepted* change, counting retries, abandoned runs and review time. If throughput rises while change-fail rate and rework get worse, "the factory is moving problems downstream." Read it beside [CRBugBench on when lights-off review is justified](/posts/crbugbench-lights-off-software-factory-review-agents-miss-known-bugs/), [Lamplit's five gates before a human sees an agent PR](/posts/lamplit-five-gates-412-agent-prs-human-reviews-last/), and [Willison on StrongDM's holdout-scenario factory](/posts/willison-strongdm-holdout-scenario-factory/).
