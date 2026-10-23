---
title: "CircleCI's Rob Zuber: the PR becomes a record of evidence, and mutation tests check the agent's own tests"
description: "CircleCI's CTO argues the pull request carries too many jobs at once. When agents write both the code and the tests, a green suite proves little, so CircleCI is trying mutation testing, earlier reviewer feedback, and risk-routed human attention."
date: 2026-10-22
kind: field-note
source:
  title: "What Comes After the Pull Request?"
  url: https://devops.com/what-comes-after-the-pull-request
project: steward
---

**Rob Zuber**, CTO of CircleCI, writes in a sponsored DevOps.com column that the pull request was built for humans coordinating with humans. Over time it picked up **knowledge sharing, change management, standards, compliance, security, and teaching**. Agents can generate, review, and validate changes as they work, so he asks why all of those jobs still wait for a single approval step.

His sharpest point is about evidence. **When agents write both the code and its tests, a passing suite doesn't mean much if the tests themselves are weak.** CircleCI has been experimenting with **mutation testing**: deliberately planting faults to see whether the existing tests catch them. That grades the validation instead of trusting the green checkmark. The other moves he describes are capturing the comments senior reviewers make on every PR and feeding them to the agent before it pushes, and pointing humans at the risky part of a change. His example is 50 lines of a 2,000-line diff that carry an architectural decision. Every human catch should be traced to what the system lacked, such as missing history, an undocumented constraint, or a validation gap, so the same person doesn't have to catch it again.

He doesn't claim PRs vanish. Regulated teams still need explicit approvals, and every team needs a durable record of what changed and how it was checked. **But a record doesn't require a workflow built around a human reading every diff.**

## Why it matters for code review

Always-on agent work only compounds if confidence builds at the same pace the code arrives. A single human gate at the end turns steady throughput back into a queue. Zuber's version is checks that run continuously, tests that are themselves tested, and human judgment saved for the risky slice. One caveat: this is a vendor's sponsored column, and it offers no numbers yet. Read beside [Otis's eight-check mutation harness](/posts/42nights-otis-eight-check-mutation-harness/) and [Allstacks and CircleCI on moving validation left](/posts/allstacks-circleci-validation-left/).
