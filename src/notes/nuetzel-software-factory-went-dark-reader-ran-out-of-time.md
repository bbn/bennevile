---
title: "Most software factories went dark because the reviewer ran out of time"
description: "Oct 5 Marc Nützel: a dark factory is supposed to replace the human reader with specs, harnesses and gates that fail loudly. The data he lines up says many teams got there by accident. Agent PRs mostly go unreviewed, AI PRs merge a third as often, and the gap is set by what surrounds the agent."
date: 2026-10-05
kind: field-note
source:
  title: "The Software Factory Has a Bottleneck, and It Is the Job"
  url: https://www.marc-nuetzel.de/posts/software-factory-bottleneck/
project: steward
---

Marc Nützel, a backend architect who works on the quality gates that decide what ships, lines up figures from the end of September and warns that he expects some of them to look dated by spring. The direction is the point. In BairesDev's Q3 survey of 705 developers, 42 percent now let AI write at least half their code, up from 12 percent a year earlier, and 67 percent say they spend more time reviewing AI output. LinearB's 8.1 million PRs show AI-generated ones merging within 30 days 32.7 percent of the time against about 84.5 percent for unassisted ones, waiting more than 16 hours for pickup against roughly 200 minutes, and running two and a half times larger at the 75th percentile.

## Dark by design versus dark by default

The useful distinction is about how a factory ends up with nobody reading the diff. Dan Shapiro's dark factory replaces the human reader with "machinery that does the reader's job: specifications, test harnesses, policy checks, gates that fail loudly." Nützel cites a May study from Nicolaus Copernicus University finding that most agent-written PRs on GitHub get no review at all, and where there is one, other agents dominate it. His summary: "What the data shows is a factory that went dark because the reader ran out of time."

Both factories look the same from outside. Agents open PRs and things merge. Only one has anything standing where the reviewer used to be.

## The surroundings set the merge rate

The number that cuts against treating the model as the variable comes from a second LinearB analysis: agent-opened PRs merge 37 percent of the time in weaker organisations and 79 percent in the strongest. "Same kind of agent, very different outcome, depending on what surrounds it." He pairs it with DORA's framing of AI as an amplifier, and a line worth keeping: without solid tests, small changes and written-down architecture, "most of the gain just turns into queue."

One quieter figure matters for anyone running agents overnight. At the 75th percentile about 37 percent of an unassisted PR is refactoring. For AI-assisted PRs it is close to zero. The tools add code and almost never tidy up, so a factory that runs all night without a cleanup pass piles up whatever the reviewers didn't have time to catch.

## Why it matters for code review

The case for always-on agents assumes the verification keeps pace with the output. Nützel's evidence says that for many teams it didn't, and the factory kept running anyway. Steady overnight throughput only compounds if something deliberate replaced the reader. He also names the cost nobody has priced: junior developers learned by having a senior take their ordinary code apart in review, and that is exactly the work agents now absorb. He'll check three things again in six months: whether the merge-rate gap narrows, whether refactoring shows up in AI-assisted PRs, and whether junior hiring levels off. Compare [LinearB's ownership gap in agent PR yield](/posts/linearb-agentic-pr-yield-ownership-gap/), [measuring agent capacity in review-minutes](/posts/lawzava-review-queue-real-agent-limit-review-minutes/), and [turning the lights off only as far as proof reaches](/posts/kazzee-turn-lights-off-proof-gated-dark-factory/).
