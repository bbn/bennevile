---
title: "Agent anxiety: an idle agent reads as waste, so you break your own focus to feed it"
description: "Sep 28 Driven to Develop: a writer who teaches focus and slack describes checking an agent fleet compulsively because idle capacity feels like a running meter, and names the real shortage as well-formed tasks, not compute."
date: 2026-09-28
kind: field-note
source:
  title: "Agent Anxiety"
  url: https://driventodevelop.com/2026/09/28/agent-anxiety/
project: steward
---

The author of Driven to Develop teaches focus for a living. They cite the twenty-five minutes it takes to recover from an interruption, the book *Slack* on why organizations under constant pressure lose resilience, and the value of boredom. Then they describe what they now call **"agent anxiety": "the low-grade discomfort I feel when I look at my agent fleet and see idle capacity just sitting there."** An agent that could be working isn't, because nobody gave it a task. "Like a meter running with nobody in the cab."

The behavior is the part worth reading closely. They check constantly: is this one still running, is that one waiting on a decision, is something valuable sitting idle. They know it's irrational: "An idle agent costs nothing meaningful when it's not running." Knowing doesn't stop it, and every check spends the recovery time they used to protect. Their diagnosis is that compute used to be the constraint and now it isn't: **"I have more processing capacity than well-formed tasks to feed it."** The brain reads unused capacity as a problem to solve. "I've added a new category of interruption and dressed it up as leverage." They don't offer a fix, and say they are still inside the experiment.

## Why it matters for code review

This is the psychological side of the case for steady, harnessed throughput over bursty sessions. If momentum depends on a person noticing an idle agent and feeding it, that person's attention becomes the scheduler, and attention is the scarce part. The useful phrase is "well-formed tasks." The shortage they describe is at intake, in work with a clear enough finish condition to hand off, and every review queue downstream inherits that. It also complicates the instinct to keep agents busy. A busy agent isn't automatically a productive one, as [Relux found when Codex goal sessions burned tokens while waiting](/posts/relux-codex-goal-mode-idle-token-burn/), and what counts is verified work landing, which [Law Zava measures in review-minutes rather than agent count](/posts/lawzava-review-queue-real-agent-limit-review-minutes/). Pair with [Rangle on agents refilling the review queue overnight while reviewers sleep](/posts/rangle-sisyphus-predicament-senior-attention-overnight-queue/).
