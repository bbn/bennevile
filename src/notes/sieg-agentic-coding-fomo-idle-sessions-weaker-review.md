---
title: "Six idle agent sessions feel like lost weeks, and the reviewer approves at 4 PM what they would reject at 9 AM"
description: "Charles Sieg on the psychology of supervising coding agents by hand: parallel sessions finish in twenty minutes and then wait on him, an idle terminal feels like a stopped factory floor, and decision fatigue and craving arrive together. The cost lands in review quality."
date: 2026-03-02
kind: field-note
source:
  title: "Agentic Coding, FOMO, and Flow State Addiction"
  url: https://charlessieg.com/articles/agentic-coding-fomo-and-addiction.html
project: steward
---

Charles Sieg names a feeling many agent-heavy engineers will recognize. A colleague, a senior architect with his own Claude Code workflow, told him he felt guilty leaving the office "because there is always more work Claude could be doing." Sieg calls it a kind of FOMO: not fear of missing an event, but "fear of missing the next thing you could build, or at least having to wait for it."

## The bottleneck sits in the chair

On one Saturday he ran six Claude Code sessions, each building a different subsystem. "All six sessions finished within 20 minutes. Every one of them." Then they sat idle until he could review the output and write the next prompts. "I am the bottleneck. Not the AI. Not the compute. Not the context window. Me, physically sitting in a chair, reading diffs and typing prompts." The faster the tool, the more each hour away seems to cost, and he admits to feeling lazy with fewer than half a dozen sessions running, "like leaving a factory floor idle while orders are backing up."

## Tired and wired at once

The part that matters for review is his description of the afternoon. Decision fatigue and the pull of one more prompt "coexist," so he ends up "too tired to review code carefully and too wired to stop requesting it." His own receipt: "I have caught myself approving diffs at 4 PM that I would have rejected at 9 AM." What helped was not alarms, which he silenced about 30% of the time, but commitments to other people, heavy agent work in the morning, kicking off a big task and leaving the room, and timed breaks. The biggest shift was "accepting that I will never saturate the available throughput": the right measure is "total output quality over sustainable periods."

## Why it matters for code review

This is the human side of the argument for steady, harnessed work over heroic sessions. When the human is both the scheduler and the reviewer, every idle session feels like a loss and every late-afternoon approval gets weaker. A harness that keeps work moving without someone at the keyboard takes away the reason to stay, and pushes review into rested, deliberate windows. It does not remove the feeling, though. Teemu Piirainen found [the anxiety moved from feeding agents to preparing enough work for the night](/posts/piirainen-fomat-fomut-overnight-capacity-planning-bottleneck/), and Andrew Kesterson [obsessively watched his fleet work](/posts/kesterson-kenbishi-fleet-980-prs-review-is-the-bottleneck/) even after it ran on its own. Compare [review burnout as a tax to fix rather than a test of heroics](/posts/jain-ai-code-review-burnout-intent-gates/).
