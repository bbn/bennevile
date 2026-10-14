---
title: "Mingbird: small open models fail the harness, not the weights"
description: "Oct 1 Wang & Huang: local-first harness with ten mechanisms (byte-level net-zero prefill, finish gate re-reads task, signature loop detection); LRAB 0.886 vs goose 0.631 / opencode 0.479 / agent-mini 0.405 on 288 published cells."
date: 2026-10-01
kind: paper
source:
  title: "Mingbird: A Local-First Agent Harness Enabling Small Open Models to Complete Real Tasks"
  url: https://arxiv.org/abs/2610.02001
project: steward
---

Hao Wang and Ting Huang argue that **2–9B** open models on laptops often produce the right next action but fail inside **cloud-scale harnesses**: tool prefill crowds context, self-correction diverges, tool demos loop, and tasks are silently abandoned. **Mingbird** is a local-first Windows/Ollama harness whose **ten mechanisms** map failure form → fix—three headlines: a **byte-level net-zero prefill** budget (factory prefill pinned ~**797** tokens, CI regression), a **finish gate** that re-reads the original task before accepting completion, and **signature-level loop detection** (tool + normalized args; escalate at ≥6 identical / ≥15 empty).

On **LRAB**—4 harnesses × 4 models (2B–35B) × 18 real tasks, **288** cells, one machine, deterministic artifact scoring—Mingbird scores **0.886** overall against **0.631** (goose), **0.479** (opencode), and **0.405** (agent-mini). It is the only harness without a small-model cliff (**2B: 0.821** vs **0.017–0.271**). Externally on **τ²-bench** (278 tasks, one protocol), Mingbird totals **0.856** vs **0.791** (native agent) and **0.737** (opencode). A frontier-model probe on the same 18 tasks spans **0.997–0.478** across harnesses; well-formed scaffolds stay within **0.072** of each other. Ablations are reported as directional (same-night replication noise up to **0.069**).

## Why it matters for code review

Overnight agent factories that FOMO for “more model” may be measuring harness mismatch: the same small weights complete under Mingbird-shaped guards and collapse under cloud prefills and silent finishes. Review local and edge agent PRs for net-zero tool surfaces, completion that re-checks the task text, and loop signatures before another model swap. Continuous verified momentum compounds when the scaffold stops false dones and empty loops—pair with [Li on model–harness fit rankings that reverse](/posts/li-finding-right-fit-model-harness-interactions/) and [Bounded Loops’ verified completion](/posts/bhardwaj-bounded-loops-verified-completion-agent-harnesses/) when the gate must separate scaffold defects from model ceilings.
