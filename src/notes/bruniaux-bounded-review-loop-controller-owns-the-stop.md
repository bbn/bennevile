---
title: "A review loop needs an end condition the model can't reset: Bruniaux's design for bounded, always-on review"
description: "Oct 14, Florian Bruniaux, part 3 of his Engineering the Review Loop series. Freeze the diff, criteria and budget before a review run starts. Record whether the reviewer finished separately from what it found. Stop after two iterations with no defined progress. A missing result never counts as a clean review. The guide is a design to test, and he says the failure paths have not yet been exercised."
date: 2026-10-14
kind: field-note
source:
  title: "Designing a bounded review loop"
  url: https://www.florian.bruniaux.com/guides/bounded-code-review-loop/
project: steward
---

[Florian Bruniaux](https://www.florian.bruniaux.com/guides/bounded-code-review-loop/) starts from a simple problem: "A review loop that asks an agent to keep reading and correcting until it feels satisfied has no end condition." His answer is to put the decision to stop in a controller outside the model. "The model can propose a correction, but it should not reset its own budget or turn a missing result into a completed review."

The design has a few rules that matter most when review runs on a schedule rather than when someone is watching.

- **Admit work before running it.** A scheduled check can pick candidates, but before starting a run it confirms the current revision hasn't already been reviewed, no other worker owns it, and the shared queue and budget allow another run. Two back-to-back checks that see the same open PR should report the existing run, not start a second one.
- **Freeze the inputs.** Each run records the base and head commits, a digest of the diff, the requirement and criteria versions, and the iteration, time and cost budgets. A new push means a new run. Findings on an old revision say nothing about the new head.
- **Keep "did it finish" apart from "what it found".** The run ends as completed, failed, aborted, timed out or unknown. Only a completed run gets an outcome, either clear or findings. A reviewer that exits 0 after its wrapper swallowed a timeout is still a timeout. "The absence of a result never becomes `CLEAR`."
- **Define progress before the loop runs.** A correction round counts only if a failing check now passes, an accepted finding is fixed with evidence, a disputed finding is settled by a named person, or the diff shrinks by a set rule. Rewritten comments or a lower self-reported severity don't count. Two rounds in a row without progress stops the run and escalates with the evidence, instead of asking the same reviewer to try again.
- **Retry narrowly.** Retry an unavailable endpoint or a rate limit, a capped number of times. Don't retry malformed output, missing context, a refusal or an unknown state. Those need a fix or a person.
- **A clean review isn't permission to merge.** The local loop hands CI a signed, versioned record of what it ran. CI checks it against the current commit but still owns required checks and merge authority, which the next part of the series covers.

Bruniaux is explicit about what the guide hasn't shown: the failure, timeout and unknown-state exercises "have not yet been recorded on 1 frozen input", so it is a contract to test in your own repository, not a measured result.

## Why it matters for code review

Teams running agents overnight keep finding the same failure: AI reviewers arguing in circles, a silent cap that quietly gives up, or a crashed reviewer read as a pass. Bruniaux turns those war stories into a specification. A run can always end, the reason it ended is recorded, and only real evidence of progress buys another round. That is what lets review keep pace with steady agent output without needing a person to notice when the loop has stalled. Read with [Kleine's two-round cap on AI review](/posts/kleine-hyperspeed-always-on-chiefs-468-prs-review-cycles-capped-at-two/), [Xu's cross-provider review study, where a failed reviewer counted as complete](/posts/xu-cross-provider-review-contract-false-success-paths/), and [the Camus maker-and-reviewer proof gate](/posts/mateodaza-camus-maker-reviewer-proof-gate/).
