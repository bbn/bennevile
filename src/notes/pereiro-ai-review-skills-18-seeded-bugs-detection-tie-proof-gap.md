---
title: "Two AI review prompts found the same bugs; only one showed proof you could act on"
description: "A medical-software engineer seeded 14 production bugs and four clean traps across 18 pull requests and ran two review skills on the same models. Both caught 15 of 15 bugs. The skill that had to prove serious findings with a test it ran backed 76-78% of real findings, against 14-43% for a checklist prompt, with far fewer nits."
date: 2026-10-20
kind: field-note
source:
  title: "I benchmarked AI code-review skills on 18 seeded-bug PRs. Detection was a tie. Trust wasn't."
  url: https://dev.to/ces107/i-benchmarked-ai-code-review-skills-on-18-seeded-bug-prs-detection-was-a-tie-trust-wasnt-f7b
project: steward
---

César Pereiro, who builds hospital integration software under EU medical-device rules, [benchmarked two code-review skills](https://dev.to/ces107/i-benchmarked-ai-code-review-skills-on-18-seeded-bug-prs-detection-was-a-tie-trust-wasnt-f7b) on a question he cared about more than detection: can he act on what the reviewer says without re-checking it himself? He built 18 pull requests, each a real repository whose feature branch passes its own tests. Fourteen carry seeded bugs of the kind green suites miss, such as a check-then-act race that double-charges a card, an invoice download with no ownership check, a cross-tenant cache leak, and an exception handler that silently zeroes bank amounts alongside a test weakened to hide it. Four are clean, two of them built to tempt a false flag. A separate agent that never saw the skill under test wrote eight of the cases.

The two reviewers were the most-installed review skill on his marketplace, a solid checklist prompt, and his own skill. His must map every caller of the changed code, try to refute each suspicion before reporting it, and back every critical or high finding with a failing test or command it actually runs. A third agent judged each pair blind against an answer key.

**Detection was a tie.** Both caught 15 of 15 seeded bugs and gave 18 of 18 correct verdicts, on both Claude Opus and Claude Haiku. **Trust was not.** On Opus, 78% of the proving skill's real findings were backed by a run, against 43% for the checklist, with 9 nits to read past instead of 18. On the cheaper Haiku the gap widened: 76% backed against 14%, 5 nits against 25, and precision of 94% against 74%. His skill also made one false call on Haiku, labelling deliberate, already-tested rounding as a critical billing bug.

The caveats matter. Pereiro wrote and sells the winning skill, though it is free and he published the cases, answer keys, all 72 raw reviews, and scoring scripts. Eighteen short pull requests in Python and JavaScript is a small set, and the judge is a model. A commenter added a sharper limit: a rule that serious findings need a runnable proof will quietly drop bugs that are hard to reproduce, like races and authorization gaps that need real data, so a clean false-positive record may partly reflect what the bar lets through.

## Why it matters for code review

When agents open pull requests around the clock, the reviewer's cost is the human attention spent checking its claims, not the tokens. If current models already find this class of bug whatever prompt wraps them, the axis worth comparing is how much of the output arrives with evidence. That matters most on the cheap model teams actually run in CI at volume, which is where the noise gap here was widest.
