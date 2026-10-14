---
title: "Orbi's reviewer said \"pass, no findings\" on two regressions. The harness that fixed it doubled the cost of ordinary bugs."
description: "Oct 5 Lawrence Liu (Orbi): an issue-to-merged-PR loop shipped two regressions its own review passed. A night of graded reruns found the fixes were generated inputs and an oracle independent of the patch, then found the stronger harness cost about twice as much and caught nothing extra on nine held-out bugs."
date: 2026-10-05
kind: field-note
source:
  title: "Searching for Orbi's harness, part 1: what our reviewer missed"
  url: https://dev.to/xqliu/searching-for-orbis-harness-part-1-what-our-reviewer-missed-1n0f
project: steward
---

Orbi takes a GitHub issue and hands back a merged pull request: one agent writes the fix, another reviews it, and the loop runs until review passes. On September 28 it fixed three issues in forks of open-source projects. All three passed their test suites and Orbi's own review, which read in full **"review: pass, no findings."** Checked by hand, two were wrong. A secret-redactor fix in chainloop left passwords ending in a literal `\n` in clear text, and a table-width fix in pyinfra made 👍🏽 and a decomposed が render worse than before. The review had run the tests and checked the issue's example. In Lawrence Liu's words, "the regressions sat in inputs nobody tried."

So the team spent a night and the next morning rerunning the full loop, swapping prompts, skills, tools, and models, and scoring every merged result with a hidden grader Orbi never saw. Each grader first had to fail the original code, fail Orbi's bad PR, and pass a hand-verified fix. Every harness rule that followed came from reading a failed transcript:

- **Asking for a before/after comparison isn't enough.** The agent compared, but on examples it already believed in. One run tested U+0301, which was never broken, and skipped U+3099, which was. The fix was to make agents generate inputs with a program across whole classes of values and write the counts to a file the reviewer could check.
- **An oracle written from the fix proves nothing.** A `gpt-5.6-sol` run compared 1,200 tables against a "reference" that implemented the rule it had just written, reported `head wrong: 0`, and shipped the regression. The post's advice: "If the oracle was derived from the change, the check is decoration."
- **Reference libraries are wrong too.** `wcwidth` 0.2.14 counts 👍🏽 as four columns, so an agent trusting it would prove the regression correct. Cross-check two references and say which one you believe.
- **Your harness text can be the bug.** A changelog example in Orbi's own prompt was wrong for fedify. The rule now is to find the repository's own contribution tooling, put it on the runner's `PATH`, and treat its check command as the source of truth.

With `deepseek-flash` implementing and reviewing, the original harness passed 6 of 15 runs on the three tuning issues, and versions 13 to 15 passed 28 of 30.

## Why it matters for code review

The honest part is what came next. On nine held-out ordinary bugs, the original harness, v15, and v15 with a stronger reviewer **all passed 9 of 9**, and v15 used a median of about twice the tokens and 1.45 times the wall-clock time. On three bugs whose first upstream fix had itself broken something, both harnesses passed, because "agents don't repeat the regressions humans made." The guard has to target the agent's own habit, which here was checking the issue's example and nothing around it. For a loop that runs unattended, that is the verification-cost question in miniature: a stricter review rule earns its keep only if it catches something in the work actually flowing through. The authors' verdict on v15 is "you can't ship that as is," and part 2 tests whether a cheaper harness keeps the fix.

They also found more bugs in the benchmark than in the harness, including a grader enforcing the wrong rule, a snapshot that silently dropped tracked files, and a reviewer that ran `gh pr view` on the real upstream fix. Their rule is to show every grader failing the known-bad version and passing the known-good one before it scores anything. Pair with [Kato's separate tester that writes fresh inputs after each candidate](/posts/kato-gtdd-adversarial-tests-fresh-audits/) and [HarnessTax on the harness showing up on the invoice](/posts/harnesstax-same-model-up-to-5x-cost/).
