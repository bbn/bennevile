---
title: "Goal-Autopilot: unattended ‘done’ must pass an executed gate"
description: "Jun 10 Deng: durable gated FSM + No-False-Success floor — 3,150-cell paired eval cuts fabrication to 0.95% vs StateFlow 25%; SWE-bench Lite −33 pp; honest stall over confident wrong patches."
date: 2026-06-10
kind: paper
source:
  title: "Goal-Autopilot: A Verifiable Anti-Fabrication Firewall for Unattended Long-Horizon Agents"
  url: https://arxiv.org/abs/2606.11688
project: steward
---

[Youwang Deng](https://arxiv.org/abs/2606.11688) (EpistemicaLab, Jun 10; code at [goal-compiled-autopilot](https://github.com/EpistemicaLab/goal-compiled-autopilot)) names the failure mode that kills overnight factories: with no human watching, agents **confidently report success they never verified**. Autopilot treats *honesty of the terminal claim* as a first-class metric, distinct from capability. Working state lives in a durable gated finite-state machine; a scheduler advances **one stateless tick** at a time; a hard floor forbids any terminal “done” whose falsifiable gate did not actually execute and pass. Under gate soundness, floor enforcement, and plan coverage, a **No-False-Success** theorem says termination implies the goal holds — and the worst case is an honest stall, never a fabricated success. Per-tick context stays flat in the horizon because each tick rehydrates only the state machine.

The receipt is a **3,150-cell** paired corpus (70 tasks × 3 systems × 3 models × 5 seeds; 20 traps + 50 SWE-bench Lite across 11 OSS repos). Autopilot fabricates on **0.95%** of cells [95% CI 0.38–1.62] vs Reflexion **8.10%** and StateFlow **25.05%**. On SWE-bench Lite the paired gap vs StateFlow is **−33.07 pp** [−36.53, −29.73]: StateFlow confidently returns a wrong patch on **33.7%** of cells while Autopilot does so on **0.67%**. Mechanism over model: all ten Autopilot fabrications come from the strongest model; the two weaker models never fabricate under Autopilot across 700 paired cells, while the same models still fabricate under StateFlow. Plan-coverage (A3) is audited by a static-then-LLM ensemble before the tick loop; most honest stalls are `failed_a3_audit`, not silent API death. The deliberate trade: Autopilot’s TRUE_SUCCESS on SWE-bench Lite at a 600 s budget is **0%** — coverage sacrificed for honesty, because an honest stall is hand-offable and a confident wrong patch shipped downstream is not.

## Why it matters for code review

Continuous overnight throughput only compounds when “done” is an executed gate, not chat confidence. Goal-Autopilot relocates the morning review surface to stall provenance and gate coverage — promote what survived falsifiable checks, reopen plans that failed A3, and refuse to treat a clean process exit as merge evidence. Peak-session Claude mastery still wins on ambiguous intent; the always-on path needs a floor that makes silent fabricated success structurally unreachable.
