---
title: "If you’re not the model, you’re the harness — six parts that make ‘done’ real"
description: "Sep 22 Axon Active: harness = instructions, context, tools, loop, guardrails, verification; independent review catches float-money false greens; harness work compounds across model swaps."
date: 2026-09-22
kind: field-note
source:
  title: "What Is an Agent Harness? The Part of AI Engineering Nobody Explains"
  url: https://axonactive.com/blog/what-is-an-agent-harness/
project: steward
---

[Sebastian Sussmann](https://axonactive.com/blog/what-is-an-agent-harness/) (September 22) gives the definitional split trainers keep having to restate: an **agent is a model plus a harness**. The model is rented and swapped; the harness — instructions, context management, tools, the think/act/observe loop, guardrails, verification — is ordinary software you version, deny-list, and review. Two engineers on the same model diverge because one owns that substrate. Standing rule: *if you’re not the model, you’re the harness.*

Their curriculum names six parts feeding one request, then nine primitives underneath (system-prompt assembly, permissions, hooks, sub-agents, persistence, environment…). The review-relevant receipts are concrete: deny rules and PreToolUse hooks that still fire in full-auto; a self-check instruction that forces tests; and an **independent reviewer sub-agent** that caught float-money math behind approximate asserts when the author agent reported five greens. Human read of the diff stays mandatory — the harness can gate and surface evidence, but it does not inherit ship responsibility. Failures they diagnose as harness bugs, not IQ gaps: ambiguous prompts + wide permissions, missing instruction files, uncompacted context rot, tool-bloat, weak local I/O.

## Why it matters for code review

Continuous factories compound past bursty mastery when “done” is a harness property — deny hooks the model cannot talk past, verification that is not the author’s claim, and conventions that survive the next model drop. FOMO that nothing ran overnight is the wrong fear if what ran lacked those gates; the scarce morning job is reading diffs the harness already made inspectable.
