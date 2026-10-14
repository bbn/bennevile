---
title: "Twenty-one green fixes from an agent fleet, and no way to tell if any were real"
description: "Oct 3 Matt Cockayne: an architecture review of go-tool-base produced 21 critical and high findings, so a fleet of agents took one each. All 21 merge requests came back green, and he couldn't tell a working fix from a test that could never fail. The fix was to change the shape of review, not its intensity: every agent had to show its test failing on untouched main first, with sibling tests passing as a control."
date: 2026-10-03
kind: field-note
source:
  title: "Prove the bug before you fix it"
  url: https://dev.to/phpboyscout/prove-the-bug-before-you-fix-it-6of
project: steward
---

Matt Cockayne ran an architectural review of his Go library, go-tool-base, and got back twenty-one critical and high findings. He sent them out to a fleet of agents, roughly one finding each, and watched merge requests arrive. "They arrived fast, and all twenty-one were green." Around the fourth or fifth he realised he had no idea whether any of it was real.

## Green can mean four different things

The diffs were sensible, tests were included, and the descriptions explained what had been wrong. That was the problem: a confident account of a problem being solved, with no proof the problem had ever existed. A green suite next to a fix could mean the fix worked, that the bug never existed, that the change fixed something nearby, or that the test was written against the changed code and could never have failed. Reading the diff can't separate those, and neither can reading the agent's summary of it.

So he stopped the flow and asked whether every agent was reproducing its bug before touching it. The answer he wanted looks like this. For a CLI that printed usage and then exited 0 on a bad invocation, the test was run against unmodified main and failed: the exit function was never called. Two sibling subtests, which assert that a warning must not exit, passed before the fix. That negative control is what turns a red result into evidence rather than a harness that fails everything. A credentials probe got the same treatment, with a deliberately hostile store that blocks forever and a guard that fired because the deadline wasn't honoured.

## Why it matters for code review

Cockayne says he reviews every line his agents write, and that this is the first thing to buckle. Twenty-one findings at once is already past the point where reading every diff is real work rather than performance, and the fleet "will happily out-produce me all week." His answer is that review "has to change shape rather than intensity": check the evidence the change arrived carrying, not the change itself. All twenty-one went through the red-first gate, and he read far less code with more confidence.

That is the verification bill of sustained agent throughput, paid with a cheap artifact instead of more attention. Compare [tests that must fail with the change stashed](/posts/42nights-otis-eight-check-mutation-harness/), [reading the code before the tests](/posts/zeybek-agent-prs-declared-scope-behaviour-list-code-before-tests/), and [654 PRs in one night and the verification bill that followed](/posts/saagarpatel-night-fleet-654-prs-verification-bill/).
