---
title: "Reverse engineering code review: the case for a gate is consistency, not prevention"
description: "Oct 13 Cate Huston: 4,176 review comments from 12 reviewers became 57 checks. Replayed on ~500 PRs, 71% of ~700 issues were never raised in review, and the misses didn't clearly cause more bugs."
date: 2026-10-13
kind: field-note
source:
  title: "Attempting to reverse engineer code review"
  url: https://cate.blog/2026/10/13/attempting-to-reverse-engineer-code-review/
project: steward
---

Cate Huston wanted to know whether a team's code review could be turned into a machine gate that a PR has to pass before it asks for human time. She picked an open source team she knew, with mixed experience and mixed AI adoption, and had Claude work read-only over its GitHub history. The corpus was 4,176 review comments and summaries from twelve reviewers on more than 1,700 PRs over about 20 months. Per-reviewer agents pulled out roughly 300 patterns, which were compiled into 67 themes and then **57 checks**: 11 style rules, 8 test requirements, 26 CI and static analysis checks, and 12 judgement instructions for an AI reviewer. Sixteen norms that authors had pushed back on were set aside as unsafe to enforce mechanically.

Replayed against the ~500 PRs merged since September, more than half would have failed at least one check, with about 700 issues between them. **71% of those issues were never raised in review**, by humans or bots. Review was strong on judgement calls (75%) and weak on mechanical ones: 32% of style issues, 14% of missing tests, 10% of CI-level problems. 92% of PRs had exactly one human reviewer and 6% had none, so whatever that one person missed went through. Individual reviewers caught between 0% and 38% of the problems in PRs they reviewed, with a median around 20%. In 65 cases, someone flagged a problem on one PR and let the same problem through on another.

The surprising part is the cost of the misses. Tracing 345 unflagged issues forward, 20 were followed by a fix touching the same lines, against about 17 expected from other new code in the same PRs. Only about half of those 20 related to what the check described. That's a lower bound with short follow-up windows and only counts bugs, but it undercuts the instinct that every miss matters. With 55% of PRs failing on first push and CI minutes rising 6–38%, Huston concludes the case for a gate is **consistency, not bug prevention**.

What review was actually doing was enforcing rules the team had never agreed on. Everyone flagged leftover debug code, but dependency injection, the architecture rule raised most often, came from only half the reviewers, and some reviewers wanted opposite things. Turning those into checks would make one person's preference a CI failure. Her answer: automate the undisputed checks now, and settle who owns the contested calls, like Google's readability and ownership split, before encoding them. Otherwise those decisions keep getting made one PR at a time by whoever happens to be reviewing.
