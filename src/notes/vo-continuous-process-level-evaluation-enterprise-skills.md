---
title: "Correct final numbers, wrong process: continuous evaluation for evolving agent skills"
description: "Oct 2 Vo, Doshi, Sheinin (IBM): 240 trials; 162/175 runs that pass final numerical checks still fail a process check (92.6%); template regression suites + live-API ground truth across specs, harnesses, and models."
date: 2026-10-02
kind: paper
source:
  title: "Continuous Process-Level Evaluation for Evolving Enterprise AI Agent Skills"
  url: https://arxiv.org/abs/2610.01833
project: steward
---

Ngoc Phuoc An Vo, Aarya Doshi, and Vadim Sheinin (IBM Research / Georgia Tech) treat enterprise agent **skills** as continually revised systems—tool APIs change, specs condense, LLMs upgrade, harnesses migrate—and argue that final-output accuracy is the wrong gate for that loop. On Business Value Determination skills inside a Value Aware Resiliency pipeline, they build an environment-grounded evaluator: independently computed live-API ground truth, template test cases with runtime-resolved placeholders (104 Revenue / 80 Productivity checks), and process checks for tool selection, arguments, ordering, and database integrity (narrow LLM judge only where exact match is brittle).

Across **240** automatic trials (two skills × two specification variants × Claude Code / Codex × three models × 10 runs), **175** pass all applicable final numerical checks; of those, **162 (92.6%)** still carry at least one additional evaluator-detected deviation. Under a broader seven-check final-state baseline, **151/164** passing runs still violate a trajectory check. All **120** Revenue trials pass the final revenue number—and all **120** still fail something else. Dependency attribution compresses a mean **6.34** failed checks per run to **2.65** roots. Specification-variant sensitivity flips with harness×model (e.g. GPT robust on Claude Code Revenue, most sensitive on Codex). The authors are careful: flags are authored invariants, not automatically confirmed operational defects; longitudinal API evolution remains future work.

## Why it matters for code review

Always-on factories under FOMO for green outcome metrics approve skill revisions that skipped readback, called the wrong scope, or wrote the right dollar figure through the wrong table. Review continuous skill CI for Vo-shaped contracts: process checks that survive correct finals, template suites that re-materialize expected scope from live state, and re-evaluation after every harness or spec migration—not a one-shot outcome score. Steady harnessed throughput compounds when each overnight skill edit faces trajectory regression; peak-session mastery that ships because the portfolio total matched does not. Pair with [Qualiteg’s completion gate](/posts/qualiteg-completion-gate-done-means-it-runs/) and [WonderLab’s harness completion control flow](/posts/wonderlab-harness-completion-gate-control-flow/) when “done” must mean the process contract held, not only the final number.
