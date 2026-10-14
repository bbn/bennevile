---
title: "Lauren Tan's overnight merges need a clean verifier verdict on the exact patch"
description: "Oct 5 Ewan Mak reads the pstack repo behind Lauren Tan's 2,500-PRs-a-month claim: the agent that wrote a PR never merges on its own verdict, a swarm of fresh verifiers must clear the exact head, and CI must pass on a freshly rebased branch. Most of the volume is maintenance, and the approach stops where changes are not reversible."
date: 2026-10-05
kind: field-note
source:
  title: "pstack: Agents Merge Their Own PRs After Verifiers Sign Off"
  url: https://developer.tenten.co/pstack-verification-agent-merge
project: steward
---

Ewan Mak checks secondhand summaries of Lauren Tan's setup against the pstack repository and her October 2 interview with Matt Pocock. The summaries say "the AI checks itself and merges." The playbook is stricter. In its full-autopilot mode, one **owner agent** carries each PR from build to merge, but **permission to merge comes from a root agent that aggregates independent verifiers**. The owner's opinion of its own work does not count. Verifiers run at the owner's code-ready head SHA and again on every later push that changes the patch. They rerun the gates, prove the behavior on the live app, and audit the diff "while distrusting the PR description." The merge condition is that **the verdict matches the patch that merges, and CI passes on a head freshly rebased onto trunk**. The root agent audits every owner hourly, and an operator stop reaches all of them as a zero-writes order.

Mak also deflates the headline number. The 2,500 PRs are self-reported and unaudited, and Tan herself says "they're not obviously like 2,500 features." A large share is what she calls **gardening**: restructuring code and deleting patterns agents would otherwise copy. When agents repeat a mistake she changes the repo rather than the prompt. Once a mistake class has happened twice, the fix goes in at the highest level that works: architecture first, then types and lint, then behavior tests, and agent docs last, "because nothing fails when an agent skips them." The overnight contract has a goal, a finish condition, permissions, and an escape hatch, with a blunt warning: **a duration is not a finish condition**. Ask for four hours of work and you get four hours of motion.

The costs are real. Full autopilot is "quite token intensive." In one side-by-side test, a project took about an hour with pstack against 30 minutes without it, and the slower run caught three false claims the agent had hallucinated. Tan says it was "very hard to get to this point" and took months of adding one guardrail at a time. Asked about domains where most changes are one-way doors, she said it depends on whether the work can be verified by a program, and admitted she had no answer for domains where it can't.

## Why it matters for code review

This is the cleanest public statement of what replaces line-by-line review when merges happen overnight. Authorship and approval are split, the verdict is bound to an exact commit, and reverts are cheap enough that morning sampling is acceptable. The cost moves from human reading time to tokens, lint rules, and verification scripts. Mak's advice for teams starting out is the useful complication: begin with one verification skill, then run the mode that stacks verified changes for a human to land in the morning before trusting the one that merges. Steady overnight throughput is earned through that setup, not installed. Pair with [the earlier account of Tan's verification-first system](/posts/everyhub-lauren-tan-verification-before-overnight/) and [Toolshed Labs' fail-closed overnight guardrails](/posts/toolshedlabs-nightshift-four-bash-guardrails/).
