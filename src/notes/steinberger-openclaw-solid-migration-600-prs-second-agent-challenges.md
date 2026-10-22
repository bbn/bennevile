---
title: "About 600 PRs, two weeks, one workday of human time: a long-running loop with a second agent that argues back"
description: "Oct 20 Peter Steinberger: a planner-plus-coder loop moved OpenClaw's web frontend from Lit to Solid 2.0 while he checked in every other day. The piece that kept it on track was a separate agent challenging the work, and the misses were the visual ones."
date: 2026-10-20
kind: field-note
source:
  title: "Peter Steinberger on X: moving OpenClaw's web frontend from Lit to Solid 2.0"
  url: https://x.com/steipete/status/2112597162924351909
project: steward
---

Peter Steinberger [kicked off a loop](https://x.com/steipete/status/2112597162924351909) two weeks ago to move OpenClaw's Lit-based web frontend to Solid 2.0. It took **about six days** before Lit could be removed and **another week** to move the code to idiomatic Solid, across **roughly 600 pull requests**. He "checked in with the session every other day" and calls the process "mostly automatic." Asked how much human effort it took across prompting, review and testing, he answered: ["maybe one workday in total."](https://x.com/steipete/status/2112602962065518708)

The setup is [small and specific](https://x.com/steipete/status/2112605703219347503). One model planned, another wrote the code, and the planner launched the Codex command-line tool in **separate git worktrees** rather than spawning subagents, which he says worked "FAR better." A **second agent oversaw the work** to keep the planner on track: like a goal file the agent checks itself against, "but instead of the same agent reviewing a text file, a second agent that challenges." Because Solid 2.0 is a release candidate the models barely know, he gave the coder [a cheat-sheet skill](https://x.com/steipete/status/2112602894625358325) with the new APIs.

What got through: ["a few tiny regressions the agent missed, mostly different shapes on buttons or slight ux regressions."](https://x.com/steipete/status/2112600329057718519) The result, in his words, is a smaller JS and CSS footprint and finer-grained updates.

## Why it matters for code review

This is the plainest case yet for steady harnessed throughput over session heroics: a person spending about a day of attention, spread across two weeks of check-ins, while the loop ran on its own. The review work moved into the harness itself. An independent challenger replaced self-grading, worktrees kept parallel changes from colliding, and a context skill closed a knowledge gap the model could not fix by trying harder. It is the same maker/checker split behind [loop engineering](/posts/addy-osmani-loop-engineering/), run at migration scale.

It also shows where the human still earns their day. Agent review caught drift in the plan; it did not catch a button that changed shape. Visual and UX regressions are the class a diff-reading reviewer is worst at, so a long-running loop still needs a person, or a screenshot check, looking at the product rather than the code. This is one developer's report on one project, not a benchmark.
