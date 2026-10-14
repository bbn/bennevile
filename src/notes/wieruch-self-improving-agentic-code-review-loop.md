---
title: "A self-improving agentic review loop, scored weekly for precision and depth"
description: "Oct 9 field note from Robin Wieruch: every developer owns a personal AI review skill, authors answer with agents, and a weekly scorecard turns review quality into something you can tune."
date: 2026-10-09
kind: field-note
source:
  title: "Toward a Self-Improving Agentic Code Review Loop"
  url: https://www.robinwieruch.de/agentic-code-review-loop/
project: steward
---

**Robin Wieruch** reports three weeks of agentic review on a product team: five developers each keep a personal review skill, fire it at each other’s pull requests, and walk away. The author’s agent answers every finding (fix, decline, or refute). A weekly scorecard rates each skill on **precision** (share of answered findings accepted) and **depth** (valid findings per shared PR). Across 789 findings, roughly two-thirds changed code afterward; about one in twenty-five was plain wrong. No human read the agent findings before they posted.

The design choices are the point. Diversity beats one shared reviewer: different skills look for different things, so five agents overlap a little and cover more of the change. Fire-and-forget is required for volume; a reviewer who re-reads their own agent is still the bottleneck. Answering agents that batch findings into fresh subagents keep judging late findings instead of waving them through when context fills. Later rounds must read earlier threads, or agents will argue a PR in circles. GitHub Copilot stays in the loop as a fixed baseline: similar acceptance (~71% vs ~73%), more refutations (16%), shallower comments, but it covers every PR because nobody has to remember to fire it.

## Why it matters for code review

This is continuous verification under agent load, measured. The factory here is not overnight code generation; it is a standing review queue that compounds: skills get scored, developers tune them, and the human review shrinks to architecture, intent, and product fit once pattern-matching is already done. The weak spots he names are the same ones that break always-on factories: silent fixes without replies poison the scorecard, precision-only scoring Goodharts into shallow reviews, and the author’s agent is both judge and party that benefits from declining findings. His next ask is an outside judge at merge time, spot-checked by a human — still evidence-bound, still a loop that runs every week rather than a heroic burst of review mastery.
