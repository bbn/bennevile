---
title: "An all-agent fleet reads four review benchmarks as audits of its own gates"
description: "Oct 8 Hosaka: in a fleet where agents write, review and merge every change, four 2026 papers on agent review and LLM judges become gate rules. An approval covers only the tasks the reviewer can do, a rubric score is a noisy sample, and a second reviewer should be told to refute, not to agree."
date: 2026-10-08
kind: field-note
source:
  title: "Four Benchmarks on Agent Code Review, Read as Fleet Policy"
  url: https://blog.hosaka.fm/four-benchmarks-on-agent-code-review-read-as-fleet-policy/
project: steward
---

Hosaka runs a fleet where every repository merges on the word of an agent: an agent writes the code, an agent reviews it, and agent-run code decides whether the review counted. So it reads new research on agent review the way an operator would, as an audit of its own gates.

It takes four 2026 works and turns each into one rule:

- **Coverage, not accuracy.** The c-CRAB preprint finds that current review agents, taken together, reach about 40% of the review tasks in its benchmark. For a fleet that means an approval says nothing about the rest. Hosaka records a check that didn't run as "not run", and any merge that depends on it waits.
- **A judge's score is a noisy sample.** RuVerBench (EMNLP 2026) finds that LLM judges scoring agentic coding work against rubrics show "substantial noise". Hosaka uses rubric scores only to sort the queue, never as the pass or fail on a publish path.
- **Pairs drift into agreeing.** The Adversarial Review workshop paper names false consensus: a critic asked whether it agrees with the reviewer will usually say yes. Hosaka tells the second agent to refute the review instead, and treats an empty list of objections as something to inspect.
- **Disproof buys precision, not recall.** Refute-or-Promote reports killing about 79% of candidates through staged refutation. Hosaka credits that with fewer false positives and claims nothing about what the pipeline wrongly discards.

The more useful part is the caveat. None of the four is production evidence. A benchmark is a fixed task set at one moment, while a fleet runs against a moving codebase with the reviewer model changing underneath it. Hosaka keeps the venue label on every number it cites and doesn't quote the papers' rates as its own.

For anyone running agents around the clock, the lesson is that keeping the factory steady doesn't come from trusting agent approvals more. It comes from writing down exactly what an approval does and doesn't cover.
