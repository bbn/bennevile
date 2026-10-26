---
title: "Ziad Antar: after 153 agent-built features, the most useful rule is the one that deletes rules"
description: "Oct 13, Ziad Antar on the Claude Code process behind Twinpage: a builder and a fresh-context QA agent that do not trust each other, a retro after every feature that adds a rule, and a prune every 10 features that removes rules which never fired."
date: 2026-10-13
kind: field-note
source:
  title: "What 153 features taught my Claude Code harness"
  url: https://dev.to/ziadantar90/what-153-features-taught-my-claude-code-harness-3l2o
project: steward
---

[Ziad Antar](https://dev.to/ziadantar90/what-153-features-taught-my-claude-code-harness-3l2o) has built 153 features of Twinpage, a website split-testing tool, mostly through Claude Code. His setup grew from a CLAUDE.md file into a process that writes its own rules after each feature and audits them on a schedule. He has open-sourced it as Morphness.

**Builder and checker who do not trust each other.** "Done" used to mean the agent said it was done, until features compiled, passed the agent's own tests, and still did not do what he asked. Now a lead agent plans each feature with acceptance criteria he approves, a builder subagent implements it, and a separate QA subagent checks every criterion with evidence: commands, exit codes, screenshots opened. The pull request stays a draft until QA passes. QA is not smarter than the builder; it starts with a fresh context and a list of claims instead of a memory of writing the code.

**Every feature ends with a retro.** The lead writes what went wrong and what rule would have prevented it, tagged with the feature that taught it. Rules that came out of this include proving a regression test by restoring the bug and watching the test fail, and making QA open a screenshot for every planned state after two features where QA opened 5 of 24 and 12 of 88 and missed visible defects.

**Retros only add, so a prune removes.** Every 10 features, or once the rules file passes 20 KB, the lead marks each recent rule as fired, never fired, too new to judge, or insurance (with the cost it prevents named). A rule that never fires across two windows moves to an on-demand file or goes. He approves each row. The first prune cut rules he had been proud of that never caught anything, and the agents did not get worse.

## Why it matters for code review

A harness that learns from every run keeps getting better without a human rewriting the instructions, but only if something also takes rules away; otherwise the agent skims a growing file and every session pays for context that doesn't apply. Keeping a record of which checks actually caught something is how a review process earns its rules instead of piling them up.
