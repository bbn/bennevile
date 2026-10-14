---
title: "Merge time tripled: acceptance is the scarce resource"
description: "A six-person team’s field numbers after agents arrived — PRs doubled, median time-to-merge went 4h→14h — and the social fixes that worked better than an AI review bot."
date: 2026-09-09
kind: field-note
source:
  title: "The AI Code Review Bottleneck: Why Our Merge Time Tripled"
  url: https://dev.to/ji_ai/the-ai-code-review-bottleneck-why-our-merge-time-tripled-5444
project: steward
---
A practitioner writeup from a six-person team after agents landed: PRs opened per week roughly doubled (~31→68), median time-to-merge went from ~4 hours to ~14, and P90 stretched to about five days. The author opens with the honest failure mode — approving a 1,140-line PR they did not fully understand — then keeps numbers instead of vibes.

The diagnosis is queue math, not tool choice. Arrival rate up, median diff size up (~90→~310 lines), reviewers batching overnight. AI diffs are also more expensive per line: uniform plausibility (no uncertainty tells), no real author intent to interrogate, volume without compression, and tests that agree with a wrong understanding of the ticket. Green CI stops being evidence; it is self-consistency.

What moved the needle was social process, not another bot. Hard ~400-line diff cap (with rare exceptions), a PR-template “what I verified” block that forbids “the tests pass,” an explain-back rule that returns the PR if the author cannot say what a hunk does in one sentence, review against the ticket for unsolicited agent refactors, and splitting commits so judgment calls sit apart from mechanical agent output. An AI reviewer bot added a second stream of plausible text and a false sense of being reviewed.

## Why it matters for code review

Acceptance, not authorship, is the scarce resource. Teams that redesign around making diffs cheap to read — small PRs, stated verification, refuse to merge what nobody can explain — keep more of the generation gain. Teams that add another comment stream often just lengthen the queue.
