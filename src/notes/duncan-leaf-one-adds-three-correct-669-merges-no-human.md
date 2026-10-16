---
title: "One loop adds, three correct: a month of a software factory where 669 of 1,198 merges had no human in them"
description: "Jamie Duncan's Leaf factory runs four loops, and only the one that adds features needs a person. Over a month the simplification loop merged more PRs than the feature loop (617 to 529), cut 18% of a monorepo's product code while tests grew 12%, and was implicated in later fixes about 1% of the time. His design test: a loop runs unattended only when a machine can tell it is done."
date: 2026-10-10
kind: field-note
source:
  title: "Loops All the Way Down, Part 3: One Adds, Three Correct"
  url: https://jduncan.io/blog/2026-10-10-loops-part-3-one-adds-three-correct/
project: steward
---

**Jamie Duncan** counted a month of his factory's output and found that the loop simplifying existing code had out-merged the one adding features: 617 pull requests against 529. Leaf, his factory, runs four loops. One adds; three correct (Quality, Improvement, and Trajectory, which watches the factory itself). Only the feature loop needs a person, and **669 of the month's 1,198 merges had no human in them at all.**

**The one rule is a definition of done.** From Leaf's README: "A loop runs unattended only when a machine can tell that it is done." Inside a plan that means stacked loops, each closing on evidence a machine can read: a worker's check passes, the foreman has merged every node, the end-to-end suite passes ("a report with no tests in it counts as a failure"), GitHub says the PR merged. The foreman's instruction for a failing suite is "fix until green," and nobody gets paged when a test fails.

**The correcting loops did real work.** On his oldest monorepo, the Improvement loop removed 18% of product code and 586 files in 19 days while tests grew 12%; in the four months before Leaf that code grew about 1%. Across repos, Improvement PRs deleted 139K lines and added 24K, roughly one line removed for every line the feature loop added. Tracing every bug fix since May back to the lines it changed, Improvement PRs were implicated about 1% of the time. Trajectory read run logs, tracked 256 recurring friction problems, and merged 46 fixes to the factory's own setup and prompts. Quality closes a fault "when the machine is observed moving again, not when a fix is claimed."

**He is candid about the limits.** Most of what Improvement deleted (49 of 69 areas) was unreachable code, which never threw bugs anyway; working-but-overbuilt code still gets a "nothing" verdict because "simpler" is hard for a machine to check, and a line-count gate was dropped on September 29. "The examiner found nothing" and "there's nothing to find" aren't the same claim, five examiner failures were silently recorded as "nothing," and Quality never sees a bug a user finds next week. Improvement also took about 23% of the month's tokens.

## Why it matters for code review

This is the strongest case yet that an always-on factory compounds through its correcting loops, not its feature loop: cleanup, self-repair and fault handling ran without anyone reviewing them because each had a machine-checkable finish. Duncan's advice is to ask "how will a machine know this is done?" before asking what to automate, and to spend human review where there's no good answer. Compare [Németh's loop, where guardrail work grew to 62% of merges](/posts/nemeth-500-rounds-autonomous-loop-checking-costs-more-than-writing/), and [Vanhee's nightly loop that is never allowed to merge](/posts/vanhee-nightly-ralph-loop-61-prs-52-merged-never-merges/).
