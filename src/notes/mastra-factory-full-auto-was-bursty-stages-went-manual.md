---
title: "Mastra's factory started fully automatic, was too bursty to review, and went stage by stage"
description: "Sam Bhagwat on Mastra Factory, which now writes 25-35% of Mastra's PRs and closes 50-60% of its issues: full-auto mode flooded review when backlogs were imported, wrong upstream assumptions produced PRs that had to be closed, and the project now asks the community for detailed repros instead of small PRs."
date: 2026-09-08
kind: field-note
source:
  title: "Announcing Mastra Factory Beta"
  url: https://mastra.ai/blog/announcing-mastra-factory-beta
project: steward
---

Mastra, an open-source agent framework that sees over 100 new issues a week and merges around 200 to 250 PRs, launched the software factory it built to work its own queue. Sam Bhagwat reports that since the alpha in July the factory has "automated 25-35% of our PRs and closed 50-60% of our issues." It moves work across a board (Intake, Triage, Planning, Build, Review, Done), with agents in sandboxes at each step and humans able to inspect diffs, join discussions, and approve actions.

## Full automatic was the wrong default

The useful part is what did not work. "We initially started with 'full automatic' mode. Once an issue started up, it would run through each stage until review." That "was bursty when importing backlogs, causing infra issues and generating a lot of difficult-to-review work." The team found itself switching to manual mode, and then made every stage configurable: triage can run automatically while planning, implementation, and review stay manual, or bug fixes can flow through on their own while feature requests do not.

The deeper failure was upstream. "The key challenge: incorrect assumptions upstream causing problems downstream." In one case an observability agent sent a wrong alert; in another, "a triage agent mis-identified revenue loss, generating PRs that needed to be closed." What did help was triage that produces evidence: an investigation with a diagnosis, assumptions, and reproduction results, such as one that documented six failing reproduction assertions and named the owning integration.

## The contribution model changes

Because small fixes are now cheap for the factory, Mastra is "shifting from encouraging community PRs to encouraging highly detailed issue repros," and crediting issue authors on the merged PRs. The scarce input is no longer the patch. It is a precise statement of what is wrong.

## Why it matters for code review

This complicates the case for letting agents run flat out. A factory that pushes everything to review at once does not produce steady throughput; it produces a review flood, and Mastra's fix was to slow some stages back down to human pace and let only well-understood work run automatically. It also shows where unattended errors start: a wrong triage call does not fail review, it creates PRs that should never have existed. Compare [a factory that caps open jobs and lets a human merge free the next slot](/posts/vigil-factory-verification-admits-what-it-did-not-run/), [an issue-triage factory for the Astro repo](/posts/cloudflare-astro-issue-triage-software-factory/), and [why review accountability needs a limit on work in progress](/posts/lezli01-agent-review-bottleneck-wip-accountability/).
