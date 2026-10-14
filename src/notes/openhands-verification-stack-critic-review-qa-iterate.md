---
title: "OpenHands verification stack: critic before push, review+QA on the PR, iterate until green"
description: "May 6 OpenHands: agent-level critic gates broken trajectories; repo-level review skill + behavioral QA; /iterate closes the loop — 1,000+ reviews, 58% faster MTTM, ~25% coverage lift on their SDK repo."
date: 2026-05-06
kind: field-note
source:
  title: "The Verification Stack"
  url: https://www.openhands.dev/blog/20260506-the-verification-stack
project: steward
---

OpenHands’ May 6 post names the bottleneck continuous factories keep rediscovering: agents made generating code cheap; **verification** — correctness, conventions, merge trust — is what saturates. Their answer is a layered stack that catches different mistake classes at different stages, so humans only spend time on changes already worth merging.

**Layer 1** is an agent-level critic: a small, fast model scores the trajectory *while the agent is still working*, before any push. Low scores stop the run early or trigger retry, so broken attempts never become review load (trained and measured in their earlier [Learning to Verify](https://www.openhands.dev/blog/20260305-learning-to-verify-ai-generated-code) post). **Layer 2** is repo-level: a code-review skill on every PR (structured checklist prioritizing data structures, security/correctness, real-path tests over mock-only, supply-chain risk; risk verdict 🟢/🟡/🔴; customizable via `.agents/skills/custom-codereview-guide.md` read from the PR branch) plus a **QA agent that runs the software** — Understand → Setup → Exercise → Report — with evidence (commands, outputs, screenshots) rather than diff reading alone. **Closing the loop** is the `/iterate` skill: open a draft PR, poll verification layers, fix, push, repeat until green, then mark ready — pairable with org-wide Automations so mechanical babysitting finishes before a human looks.

Production receipts from six months on `OpenHands/software-agent-sdk`: **1,000+** reviews across **900+** PRs and 38 releases; ~**90%** of PRs touch the automated review path; mean time to merge down **58%**; test coverage up nearly **25%**; bot precision approaching human while humans still review after the bot ~85% of the time. Static signals (complexity, smells, Bandit findings) improved even as the repo grew 144% — the maintainability-index dip is mostly LOC counting against itself.

## Why it matters for code review

Continuous verified throughput is not “more Claude overnight” — it is an unskippable judge *inside* the generation loop and again at the PR. Review this stack as merge infrastructure: trajectory critic before push, independent review+behavioral QA on the diff, iterate until the mechanical gate is green. That is how always-on factories compound past burst mastery without turning morning review into a regression detector — and how FOMO for idle agents converts into inventory you can actually merge.
