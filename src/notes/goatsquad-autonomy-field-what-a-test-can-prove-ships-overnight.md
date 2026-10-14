---
title: "Agents ship to dev overnight unreviewed, and one ticket field decides which work may finish alone"
description: "Goat Squad Studios: plan by day, agent loops by night, review in the morning. Every ticket carries an autonomy field, a missing field means it waits, and only work a test can prove is allowed to reach done without a human. Production still moves through one PR a day that the human reads."
date: 2026-08-17
kind: field-note
source:
  title: "My AI Agents Ship Code While I Sleep. Nobody Reviews It."
  url: https://goatsquadstudios.com/blog/how-i-work-with-ai-agents-autonomously
project: steward
---

Goat Squad Studios describes a schedule that is easy to copy and easy to get wrong: "Daytime is planning. Nights are loops. Mornings are code review." A background Claude Code session picks the top buildable ticket, builds it end to end, and either finishes it or parks it with a question. The author is blunt that plenty of people run this schedule "and wake up to slop. The difference is what the agent is allowed to finish."

## One field decides

Every ticket is a markdown file with a field reading `autonomy: auto | needs-input | blocked`. A missing field counts as `needs-input`, "so nothing builds by default." The test for `auto` is one question: "can a test prove this correct, or does it need human judgment?" A pure refactor of a shared cron helper, with six new tests that fail if behavior changes, shipped itself to dev overnight. A risk feature that was just as testable got built and deployed but stayed off, because switching it on meant paying for a data subscription, and "no test can tell you if that's worth the money." Pricing, brand voice, legal text, security policy, client data and anything irreversible stay with the human.

## Verification the agent cannot fake

An `auto` ticket is only done after six steps: failing tests first, a Playwright spec against the real UI, a typecheck, a deploy to dev, a live check (deploy succeeded, dev URL renders, Playwright green against that URL, error monitor clean on the touched path), and docs updated in the same commit. "A missing rung means the ticket isn't done, no matter how confident the agent's activity note sounds." When an agent hits a decision it cannot make, it has to name the decision and propose a rule that answers every future question of that kind, which goes into an attention ledger so the same class of question is asked once. Across two projects the author reports 410 tickets, 335 done and 123 shipped to production, with the caveat that "the board only knows about the problems my morning reviews caught."

## Why it matters for code review

This is the case for steady overnight throughput with the review moved, not removed. "Unreviewed means unreviewed to dev": agents can merge to a dev environment on dev data, and the only route to production is one daily dev-to-prod PR the author reads personally. It also complicates the louder versions of the argument. Builds run one at a time, one driver per checkout, because parallel subagents "come back agreeing with each other," and the author still holds that "reading the code is still the best success metric there is." Compare [Lauren Tan's overnight merges, where verification is the system](/posts/everyhub-lauren-tan-verification-before-overnight/), [a factory whose PRs admit what they did not run](/posts/vigil-factory-verification-admits-what-it-did-not-run/), and [a dark factory where scripts, not models, decide the merge](/posts/nalivator-dark-factory-scripts-decide-merge/).
