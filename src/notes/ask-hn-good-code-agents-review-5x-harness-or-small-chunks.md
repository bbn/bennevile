---
title: "Ask HN: reviewing agent code takes 5x longer, and the answers split between a strong harness and small attended chunks"
description: "Oct 2 Ask HN from ruffrey: a senior engineer says Claude merge requests take five times longer to review and they barely understand what they approve. The replies split three ways: stop reading code and invest in the harness, keep the agent on short leashes you can review in minutes, or tier by how much the code matters."
date: 2026-10-02
kind: field-note
source:
  title: "Ask HN: Is anybody producing good code with coding agents?"
  url: https://news.ycombinator.com/item?id=49934037
project: steward
---

The question is blunt. "It takes 5x longer to review Claude merge requests and I barely understand what I approve," writes ruffrey, relaying a complaint they hear from senior engineers. "Now I spend nearly the whole workday slogging through convoluted code riddled with footguns." The only exit they can see is to reach "level 4 autonomy" and stop reading or writing code at all, and they want to know who has actually solved it.

## Three answers

**Invest in the harness and stop reading diffs.** aprdm says their team of about 30 mostly operates that way: "Don't read/write code anymore. Have strong harness." The pushback came straight away from AnimalMuppet: "I don't understand the code anymore. It works" is fine today, but "I will never need to understand the code again" is a different bet, and "you may be betting your company on the answer."

**Keep the agent on a short leash.** leros reports producing "nearly the same code I'd write myself about 5x faster" by refusing to let the agent "run wild for a long time and have a mess to review." Small chunks, quick review, feedback, next step. That's an attended, session-at-a-time workflow, and it works for them because the review unit stays small enough to read.

**Tier by how much the code matters.** drewg123 runs a spectrum: fully vibe-coded for an internal visualisation tool, every hunk audited as it's produced for code they care about, and hand-written with an agent reviewing for mission-critical code. tmarice describes the same split in two modes: let the agent loose on code they don't really care about, and write everything else by hand so they understand it.

## The comment worth keeping

hey-hey names why review feels so much harder now: "we previously amortized the reading and comprehending over the time we spent designing and writing." A reviewer opening an agent's change is "in effect coming in cold", which is closer to reviewing another team's service than a colleague's work. What helped them was a harness that carries memory, specs and a graph-based view of the codebase, so the reviewer starts with the big picture instead of rebuilding it from the diff.

## Why it matters for code review

This thread complicates the case for always-on agents in a useful way. The people happiest with short, attended sessions are happy because the review unit stays small enough to understand. The people who have stopped reading diffs are relying on the harness to do the understanding for them. Neither group is reading large agent PRs closely and staying sane. Nobody in the thread disagrees that understanding has to happen somewhere. They disagree about whether it lives in the reviewer's head, the size of the change, or the checks and documents around it. Compare [declared scope and behaviour lists that make agent PRs easier to start on](/posts/zeybek-agent-prs-declared-scope-behaviour-list-code-before-tests/) and [PR size as the predictor of review findings](/posts/zest-866-agent-prs-size-predicts-review-findings/).
