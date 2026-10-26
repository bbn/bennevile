---
title: "John Crowley (Port): a factory that only runs tasks ships the same quality in month six as in week one"
description: "Oct 25, John Crowley at Port on closing the loop in an AI software factory: capture each run, grade a sample on a fixed rubric, find the pattern across a batch, and write a reviewed fix back into the skill the next run reads."
date: 2026-10-25
kind: field-note
source:
  title: "Self-Improving AI Software Factory: How Feedback Loops Make Agents Better Over Time"
  url: https://www.port.io/blog/self-improving-ai-software-factory
project: steward
---

[John Crowley](https://www.port.io/blog/self-improving-ai-software-factory) starts from a plain failure: a triage agent misroutes the same class of ticket in month six that it misrouted in week one. The model improves when a vendor ships a new one. The skill file, prompt, and routing around it stay where you left them, because nothing turns yesterday's bad run into today's fix. A human reviewer corrects an engineer once; an agent drops the correction when the session ends.

**Four moves, and teams skip the last one.** Capture every run with its outcome attached: tests, reviewer comments, the edits a human made to the diff, whether the ticket reopened a week later. Grade a sample every few hours rather than every run, against a rubric the agent's owner set. Read a batch of about 20 grades to find a pattern ("routes database alerts to the platform team when the service owner is set"), not an average. Then write a small, specific fix back into the skill or prompt, and have a person review that edit like the pull request it is. Interactive sessions on laptops leave nothing to grade; a factory that runs continuously writes every run to one place, which is what makes the loop possible.

**Two gates, not one.** One gate sits on the work: low-risk dependency bumps merge, a change to a critical service waits for the on-call engineer. The other sits on the improvement, because an edit to a shared skill changes how every team that installs it works. He keeps a person permanently on three changes: edits to widely shared skills, anything that widens an agent's permissions, and any promotion of an agent from proposing to acting.

**How to tell the loop works.** Hold the rubric fixed for weeks and watch the trend. Count repeat failures of patterns you already fixed, which grades the loop rather than the agents. Watch the share of pull requests merged without a human edit beside change failure rate: if both climb together, the loop is buying throughput with defects. He also warns that a scorer tuned too tight blocks valid work and teaches agents to chase the rubric.

## Why it matters for code review

Steady overnight throughput only compounds if review findings stop recurring. This piece treats review comments and human edits to agent diffs as the training signal for the factory, and puts review itself on the change to the skills. Port sells a platform for this; the loop described doesn't depend on it.
