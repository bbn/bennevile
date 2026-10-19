---
title: "Ka1manov: a loop that keeps its best score reported twice the gain it actually made"
description: "Oct 17, a loop-engineering guide with a noisy-evaluator simulation: \"beat the best so far\" showed +2.37 against a true +1.16, while a gated keep rule told the truth at about six times the eval cost."
date: 2026-10-17
kind: field-note
source:
  title: "loop engineering: how to build ai loops that don't lie to you"
  url: https://x.com/ka1manov/status/2111602055034949815
project: steward
---

The author behind @ka1manov, who says they do AI research and quant work, wrote a long X article on running agent loops "ten times, a hundred times, overnight." Most of it is a practical build guide (goal, actor, tools, evaluator, memory, stop rule), but the core is a warning: "a loop is an optimizer, and an optimizer finds every weakness in how you measure 'better'."

To show it, they simulated **2,000 loops of 150 iterations** where only 37% of proposed changes truly help and the evaluator adds noise with a standard deviation of 0.5 points. Three keep rules, fed the same ideas:

- **Beat the last run** kept 67 changes, half of them harmful; 46% of loops ended worse than they started while the dashboard still showed +0.50.
- **Beat the best so far** showed **+2.37 on the dashboard against a true gain of +1.16**, roughly 2x overstated, with 29% of kept changes harmful. "The best score so far is, by construction, a score that got lucky."
- **Gated** (three runs a side, keep only above two standard errors, confirm on a fresh run) found the same true gain, +1.17, with 8% harmful keeps and 1% of loops going backwards. The price was **about six times more evaluation runs** (about 910 against 150).

The same trap applies to parallel worktrees: with five agents and a noisy evaluator, the winner looks more than one noise unit better than it is even when nobody improved anything. The fix is to re-run the winner on fresh cases before merging.

## Why it matters for code review

A loop that runs all night produces a dashboard by morning, and this is a clear demonstration of why the dashboard can't be the review. The honest version costs more checking, not less, and the author treats that as the job: "you always pay for certainty with compute." Their defenses read like a review policy: the maker never grades its own work, any change that touches tests or the evaluator is discarded and flagged, and "done" in a file is a claim while an exit code is evidence. See also [Addy Osmani on loop engineering](/posts/addy-osmani-loop-engineering/) and [the Orbi loop that passed 28 tests before a fresh review said do not merge](/posts/orbi-ralph-loop-28-tests-passed-review-found-spec-violation/).
