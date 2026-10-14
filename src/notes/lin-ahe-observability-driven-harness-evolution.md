---
title: "AHE: observability turns harness edits into falsifiable overnight contracts"
description: "Apr 28 Lin et al.: ten AHE iterations lift Terminal-Bench 2 pass@1 69.7%→77.0% past Codex 71.9%; frozen harness transfers +5.1–10.1 pp cross-family; tools/middleware/memory carry the gain, not the prompt."
date: 2026-04-28
kind: paper
source:
  title: "Agentic Harness Engineering: Observability-Driven Automatic Evolution of Coding-Agent Harnesses"
  url: https://arxiv.org/abs/2604.25850
project: steward
---

Lin, Liu, Pan, Lin, Dou, Xi, Huang, Yan, Han, Gui, and Jiang treat the coding-agent harness as the thing a continuous factory should improve overnight — not another peak-session prompt. **Agentic Harness Engineering (AHE)** holds the base model fixed and closes a loop over three observability pillars: every editable component is a file (so the action space is explicit and revertible); raw trajectories distill into a layered evidence corpus an evolver can actually read; and every edit ships a change manifest with a self-declared prediction later verified against next-round task deltas. Ineffective edits roll back at file granularity.

Ten unattended iterations from a bash-only NexAU0 seed lift Terminal-Bench 2 pass@1 from **69.7% to 77.0%**, past human-designed Codex (**71.9%**) and prompt/playbook self-evolve baselines ACE and Training-Free GRPO. The frozen harness transfers without re-evolution: on SWE-bench Verified it posts the highest aggregate success while using **12%** fewer tokens than the seed; on Terminal-Bench 2 it yields **+5.1 to +10.1** pp across three alternate model families. Component ablations localize the gain in tools, middleware, and long-term memory — the system-prompt-only swap **regresses**. Fix predictions beat random by ~5×; regression foresight stays near chance — the loop still cannot reliably name what an edit will break.

Code: [china-qijizhifeng/agentic-harness-engineering](https://github.com/china-qijizhifeng/agentic-harness-engineering).

## Why it matters for code review

Always-on factories that only mint more diffs overnight are optimizing the wrong layer. Review harness evolution the way AHE scores candidates: demand file-level components, a drill-down failure corpus, and a next-round falsifiable prediction before any edit sticks — and treat “prompt got longer” as the ablation that already lost. Steady harnessed throughput compounds when the night is allowed to harden tools, middleware, and memory under measured contracts; FOMO for idle agents is wasted if the morning’s “improvements” were rationale without a verified delta.
