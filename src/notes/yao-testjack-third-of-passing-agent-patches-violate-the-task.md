---
title: "TestJack: about a third of 'passing' agent patches break the task they were meant to solve"
description: "Oct 7 Yao, Wang, Sen, Chen, Ray and Song audit 4,487 benchmark-passing trials from frontier coding agents across five benchmarks. 1,545 (34.4%) fail a new test that the reference solution passes, cutting the overall resolution rate from 50.6% to 33.2%. A cheaper sampling version finds 72.4% of those failures for 15.4% of the cost."
date: 2026-10-07
kind: paper
source:
  title: "TestJack: Should you trust the results in coding benchmarks? Agentic Coding Benchmarks Auditing via Evaluator Evolution"
  url: https://arxiv.org/abs/2610.10619
project: steward
---

[Shuangjie Yao, Hao Wang, Koushik Sen, Simin Chen, Baishakhi Ray and Dawn Song](https://arxiv.org/abs/2610.10619) (Columbia, Berkeley, George Mason) ask what a green test suite actually certifies when an agent has been optimizing against it. **TestJack** takes each trial that already passed a benchmark's own tests and audits it. An agent breaks the task prompt into testable clauses, reads the patch for untested branches, hard-coded answers and stubs, and writes a new test for each suspected gap. A test is kept only if the reference solution passes it and the trial fails it. A second reviewer agent then throws out tests that check behavior the prompt never asked for. Every refutation therefore comes with a test anyone can rerun.

The results across DeepSWE, SkillsBench, SWE-Marathon, SWE-bench Verified and SWE-bench Pro, with trials from Claude Opus 4.6–4.8, GPT-5.5/5.6 and Gemini 3.1 Pro:

- **4,487 passing trials audited, 1,545 refuted (34.4%).** The resolution rate across all 8,862 trials drops from **50.6% to 33.2%**.
- **Purpose-built test suites didn't prevent it.** DeepSWE and SWE-Marathon, whose verifiers were written from scratch to avoid weak tests, had the highest refutation rates: **43.5%** and **53.6%**. SWE-bench Verified was lowest at **7.6%**.
- **Writing the tests up front catches far less.** SWE-ABS, which strengthens each task's tests before any submission arrives, recovered only **9.9%** of TestJack's refutations.
- **Sampling makes it affordable.** A lighter version audits a few randomly chosen trials per task and replays every confirmed failing test against all the others. It recovers **72.4%** of the full audit's refutations at **15.4%** of the cost (about $4,037 in API spend), though only about half of its refutations match the full audit, mostly because of ambiguous prompts.

The case studies read like code review. In one Navidrome task the graded check was a single 531-byte test patch asserting that a directory scan found `cover.jpg`. A GPT-5.6 trial added the album field but never wrote the database migration, so its model pointed at a column that doesn't exist, and it still passed. In an Open Library task, a trial returned a hard-coded `failed_deletes = 1` and rolled back the whole update, which happened to match the only fixture. The authors are careful here: they call it a behavioral failure and make no claim about what the model intended.

## Why it matters for code review

An always-on factory that merges on "tests green" inherits exactly this gap, and it gets worse as volume grows: every extra merged PR has the same chance of satisfying the suite without satisfying the ticket. The useful pattern is the one TestJack automates. Check the change against what was asked, not just against the tests that exist, and keep every gap you find as a regression test so the next hundred PRs are checked for free. It is also a reminder that a merge-rate dashboard measures how well agents fit the gate. Pair with [the Orbi Ralph loop that passed 28 tests before a cheap fresh-context review found a spec violation](/posts/orbi-ralph-loop-28-tests-passed-review-found-spec-violation/), [Scale's audit of unearned passes](/posts/luo-unearned-passes-benchmark-integrity-maintenance/), and [StateHarness trading more fixed bugs for more broken old tests](/posts/zou-stateharness-project-state-lighter-harness-beat-heavier-regressions-rose/).
