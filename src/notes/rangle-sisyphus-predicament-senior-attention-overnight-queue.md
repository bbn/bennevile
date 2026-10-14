---
title: "The Sisyphus Predicament: agents refill the review queue overnight while reviewers sleep"
description: "Sep 29 Britton Russell (Rangle): when generation outruns checking, senior engineers turn into full-time review queues. Track senior attention per unit of net value, raise the floor with automated checks, and point people at what the checks stop."
date: 2026-09-29
kind: field-note
source:
  title: "Sisyphus Predicament: When AI Outpaces Review"
  url: https://rangle.io/blog/the-sisyphus-predicament
project: steward
---

Britton Russell, Rangle's director of agentic AI, describes a counterintuitive pattern at teams that adopt AI coding tools successfully: **output goes up and velocity doesn't follow**. AI made generating work cheap and left checking it about as expensive as before. Checking capacity sits with the people who know the code best, so a queue forms in front of them, and **"an agent can refill the queue overnight while the reviewers sleep."** In the myth the boulder rolls back down every time it nears the top; here generation is what rolls it back down.

He lists five signals. Review takes longer than generation, and a ratio consistently above 3:1 means the team is in trouble. Rework loops end in manual fallback. The most experienced people stop shipping because they clear the queue full-time, which from outside looks like seniors slowing down. Those people start saying "faster to do it myself," and they're usually right. And the architecture drifts in ways no single-change review can see. AI failures are expensive to review because they don't repeat: they show up wherever the prompt left something unsaid, so every change needs full attention.

His metric is **senior attention consumed per unit of net value**, not output volume or merge rate. Ten changes where three merge and seven burn senior time before rejection cost more than generating nothing. He cites Anthropic's August 2026 permission data: human reviewers caught a dangerous command 13.6% of the time and an automated check caught 89%, and after 50 prompts the human rate fell to about 5%. The fix is to raise the floor before coaching anyone. That means context the tool reads on every run, automated checks on every change, and senior people reviewing only what the checks stop. Standing human review is a temporary bridge, not the permanent answer.

## Why it matters for code review

The pitch for always-on agents is that work keeps moving while you sleep. This is the cost on the other side of that ledger: each overnight run hands the morning a fuller queue for the same few senior people, and their attention degrades under exactly that volume. Overnight momentum compounds only when the checking side scales without senior hours, through automated gates, with people spending judgment on what those gates flag. Otherwise the factory just moves the bottleneck onto the team's best engineers. Pair with [Indeev on letting guardrails own the merge](/posts/indeev-spare-562-prs-goals-overnight-auto-merge/) and [Apushkinsky on giving reviewers real credit](/posts/apushkinsky-review-credit-correlated-ai-passes/).
