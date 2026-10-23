---
title: "Adit Lal replayed his AI reviewer against 45 human-found bugs: two runs of the same prompt were seven bugs apart"
description: "After 24,000 prompts of harness work on an Android app, Lal found that rules in CLAUDE.md kept coming back until they became hooks, that review results moved more between identical runs than between most prompt changes, and that 3,460 green unit tests let three never-built tasks through."
date: 2026-10-10
kind: field-note
source:
  title: "Harness Engineering: What I learned from 24,000 prompts building production apps"
  url: https://aditlal.dev/harness-engineering/
project: steward
---

**Adit Lal** has spent 2026 building a harness around Claude Code for daily work on an Android app, and [his write-up](https://aditlal.dev/harness-engineering/) after about 24,000 prompts is mostly about who checks the agent's work.

He went back through about 25 merged pull requests and found **thirteen logic or contract bugs** that got past development, on-device testing, and his own AI review, caught later by a human reviewer or by users. None crash in a demo: a non-nullable field the backend can omit, a background job registered so existing users never get the new schedule, logic keyed on a class name that the release build renames. Then he **replayed his AI review against 45 bugs human reviewers had flagged on four PRs**, rolling the code back to the commit before each comment.

The same review prompt caught **21 of 45 on one run and 14 of 45 on the next**. The strongest model as reviewer caught 26, a mid-tier model 19, and **nine independent runs with findings combined caught 30**. Two identical runs were seven bugs apart, and most of his prompt changes moved the result by less than that. Used as a validator of findings, the mid-tier model threw away 54% of real findings and the stronger model 14%. Large PRs of 130 to 177 files did badly in every setup.

The harness lesson repeats across the post: **rules written in CLAUDE.md kept coming back; rules moved into code stopped**. A second review only started happening reliably once a hook blocked `gh pr create` until a review verdict existed for the exact branch, merge-base, and head commit, from a different model family that sees only the diff. Codex reviewed the first version of that gate and found it trivially bypassable, so it now fails closed. And one failure still bothers him: the agent ticked **28 tasks done**, the build, lint, all **3,460 unit tests**, and his plan checker passed, and **three tasks had never been implemented**. The only check that caught it asked, for each ticked task, where the diff was. His rule for loops that won't converge: if the same subsystem fails review three rounds in a row, change the design.

## Why it matters for code review

Continuous agent work makes a reviewer's run-to-run variance a real number, and Lal gives a cheap way to measure it: replay last month's human-found bugs, twice. It also complicates the idea that a single strong review pass is a gate. Combining independent runs helped more than prompt tuning, and the most damaging miss was work that was claimed but never done. Read beside [Casey Holt's overnight agent PR whose eleven green tests never ran the real config path](/posts/holt-overnight-agent-pr-eleven-green-tests-never-ran/).
