---
title: "Half a GOTO room named review as its worst bottleneck, and a green check that ran nothing is worse than none"
description: "Oct 1 QA.tech: at Nathen Harvey's GOTO Copenhagen keynote, half of 440 engineers picked reviewing changes as their biggest SDLC friction and 3% picked building. One team went from about 15 PRs per release to 150-200 with no new reviewers. The proposed split: invariants, a rules-loaded review agent, behaviour checks with an explicit unverified state, then a shorter human question."
date: 2026-10-01
kind: field-note
source:
  title: "Why Code Review Is Eating Your AI Gains"
  url: https://qa.tech/blog/code-review-bottleneck-ai-generated-code
project: steward
---

On 1 October, during Nathen Harvey's keynote at GOTO Copenhagen, a live poll asked 440 engineers which stage of their SDLC causes the most friction. Half picked reviewing changes. Building, the stage two years of tooling has gone into speeding up, got 3%. The post is honest that it's "a conference poll, not a study," but it lines up with the rest of the evidence it cites: Faros AI's finding that median review takes five times as long on pull requests half again as large, and DORA's name for it, a "verification tax."

The field reports are blunter. One team went from about 15 pull requests per release to between 150 and 200, "and nobody added reviewers." A CTO describes one engineer reviewing ten PRs a day: "come on, somebody help me out here."

## Reading the diff is mass inspection

The argument leans on two old Microsoft studies. Developers said finding defects was the main reason for review, but only about 14-15% of review comments were about defects, and knowledge transfer showed up in about a dozen of 570 comments. Then it quotes Deming: "Cease dependence on inspection to achieve quality." Reading every AI pull request line by line is "inspection on a mass basis," and the only thing that changed is how much there is to inspect.

The proposed split spreads review across four layers. Rules you can state precisely become invariants that fail the build. Rules that need judgement go to a review agent loaded with the project's instructions. Behaviour gets checked against the preview build by something other than the agent that wrote the change. The human then answers a shorter question: given all that evidence, does this change make sense for the product?

## The unverified state

The sharpest detail is the verdict format. A behaviour check needs three states: pass, fail with evidence, and **unverified**, for when the tests ran but never touched the change. "A green check that means nothing was looked at is worse than no check, because somebody will merge on it."

## Why it matters for code review

When agents produce changes around the clock, most of what reaches a reviewer arrives as a row of green checks. Steady throughput only adds up if those checks mean something. A pipeline that can say "I ran, but I didn't look at your change" keeps a high-volume queue honest in a way a pass/fail badge can't. This is a testing vendor's post, and its product is the behaviour layer, but the three-state verdict holds up whatever runs it. Compare [review minutes as the real capacity limit on agents](/posts/lawzava-review-queue-real-agent-limit-review-minutes/) and [the verification bill from a 654-PR night fleet](/posts/saagarpatel-night-fleet-654-prs-verification-bill/).
