---
title: "GitHub's ReviewBench grades review agents on 219 real PRs, and gives credit for bugs nobody had listed"
description: "Oct 5 GitHub launched ReviewBench, an open benchmark of 219 pull requests sampled to match 103.9 million real ones. It scores review agents on precision and recall by severity, gives credit for valid findings outside the answer key, and its offline results pointed the same way as a production Copilot review experiment."
date: 2026-10-05
kind: field-note
source:
  title: "ReviewBench: An open benchmark for AI code review"
  url: https://github.blog/ai-and-ml/github-copilot/reviewbench-an-open-benchmark-for-ai-code-review/
project: steward
---

Michelle Zhou and Alejandro Carderera de Diego at GitHub published ReviewBench, a public benchmark for code review agents. It holds 219 pull requests from 187 open source repositories in 19 languages, sampled so that language and repository size match a scan of 103.9 million GitHub PRs. They deliberately thinned out tiny single-file changes in favour of the multi-file PRs where review quality actually matters.

## How the answer key is built

No single reviewer finds everything, so the answer key pools candidate findings from human review comments, bugs implied by the author's later follow-up commits, static analysis, and several frontier models. Duplicates are merged, and each finding counts only if it is true, relevant and non-trivial under one published rubric, applied by an LLM grader. Senior engineers who had not built the set re-labelled every finding from scratch and agreed with it 96.6% of the time.

Scores come in two families. Grounded precision and recall are measured only against the known findings. Augmented scores also judge findings the answer key doesn't contain, so a reviewer gets credit for a real bug no source had flagged. GitHub uses grounded recall as the headline comparison because augmented recall grows with whatever each agent happens to find. Results can be sliced by severity and category, and a weighting knob lets a team rank reviewers by whether they care more about coverage or about low noise.

## Does it predict production?

GitHub says ReviewBench has pointed the same way as its later A/B tests on Copilot code review. Its example is an ensemble that merges several independent model runs into one review. Offline, the benchmark predicted gains in precision and recall, more comments and lower cost. Online, the share of comments that led a developer to change code rose 8.0%, recall rose 13.6%, comment volume rose 61% and cost per review fell 8.0%. The benchmark predicted a 227% rise in critical comments; production showed 262%.

## Why it matters when agents write most of the PRs

Teams running agents around the clock lean on an automated first reviewer, and that reviewer's noise is a cost paid on every PR. Earlier field data had [CodeRabbit comments rejected 56% of the time](/posts/coderabbit-agentic-review-helpful-in-the-wild/), mostly as false positives. A shared, reproducible scorecard sliced by severity is the kind of measurement a team needs before trusting a reviewer to stand between an overnight fleet and main. Two caveats: the vendor that built it also ships a reviewer and uses it to tune that product, and an LLM grader judging LLM reviewers carries the risk that [AI passes miss the same bugs together](/posts/apushkinsky-review-credit-correlated-ai-passes/). Compare [the ensemble change in Copilot review's September update](/posts/copilot-code-review-auto-resolve-ensemble/), [an earlier vendor review benchmark](/posts/coderabbit-martian-benchmark/), and [precision and recall claims from Qodo](/posts/qodo-2-precision-recall/).
