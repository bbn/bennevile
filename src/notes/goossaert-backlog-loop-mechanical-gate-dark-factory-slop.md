---
title: "Backlog Loop: a mechanical gate kept the code honest, but nothing checked the factory itself"
description: "Oct 4 Emmanuel Goossaert: nine weeks and 421 commits building a seven-stage factory, with tests that must fail first, OS-level locks on test files, and a hermetic verify. Then he stopped reading code, let it build itself, and found zero evidence it beat a plain Claude Code session."
date: 2026-10-04
kind: field-note
source:
  title: "What I Learned Building an AI Software Factory"
  url: https://codecapsule.com/2026/10/04/what-i-have-learned-building-an-ai-software-factory/
project: steward
---

Emmanuel Goossaert spent **nine weeks and 421 commits** building Backlog Loop, a single-agent, sequential software factory, to learn what these systems actually do. It runs seven stages, each a fresh Claude Code session that passes its work along through handover files committed to git. A human-only "grill" interview covers every one-way-door decision, such as schemas, names, and how the feature treats its dependencies. Next come an apply-docs stage and a plan cut into thin vertical slices with named forbidden shortcuts. An ATDD stage writes tests that must fail first, and an implement stage is **blocked from touching test files by operating-system permissions, not by prompt**. Two fresh reviewers follow. One hunts for tests that could pass while the behavior is wrong, and the other reasons from the spec without ever reading the tests. Neither reviewer fixes what it finds.

The tests that count run **outside every model session**. The loop's own gate tests itself, proves the starting point is green, and re-runs new tests up to three times to confirm they are red rather than flaky. After implementation it builds a throwaway copy at the exact commit with the network off where possible. It runs the suite three times plus once in random order, then mutation testing against a floor, a forbidden-pattern scan, and static analysis. He keeps the loop's files under a separate service user so the tool cannot rewrite itself.

Then came the turn. Around feature 006 he stopped reading the generated code. Around feature 0023 he pointed the tool at itself, telling the model there is no user, never pause, never ask. **"This is when the slop started."** Claude expanded the skill files until they read like novellas, and he trusted it all because of how confidently the model described its own success. He had **zero empirical evidence** that the setup was more effective or cheaper than running Claude Code by hand. When he added instrumentation, most of the time went to infrastructure, not inference.

## Why it matters for code review

This is the strongest recent case that an always-on factory is only as good as the checks it cannot talk its way past. Every gate here belongs to that kind: red-before-green, locked test folders, a hermetic re-run, a mutation score from the tool rather than a reviewer's opinion. It also productively complicates the case for overnight harnessed momentum. The code gate was mechanical, but the factory's own improvements (longer skills, more stages) were judged only by the model's prose. Nobody ran a control group, so the factory could not tell whether it was getting better. His own advice is to stay single-agent until correctness is proven, retire a review stage once instrumentation shows it stops catching anything, and keep schema-level decisions with a human. Pair with [Kato on fresh audits after each candidate is committed](/posts/kato-gtdd-adversarial-tests-fresh-audits/) and [Nalivator on letting scripts, not models, decide the merge](/posts/nalivator-dark-factory-scripts-decide-merge/).
