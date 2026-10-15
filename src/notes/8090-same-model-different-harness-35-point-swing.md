---
title: "8090 Labs: same model, different harness — a 35-point swing without touching the weights"
description: "Oct 9 from 8090 Labs (Arjun Goray): seven models × five harnesses on DeepSWE’s 113 real tasks. GLM moved 24%→59% by harness alone; Claude Fable 5.1 scored 41% in Claude Code and 61% in Codex; cost per success, not cost per run, flips which wrapper looks cheap."
date: 2026-10-09
kind: paper
source:
  title: "Same Model, Different Harness"
  url: https://www.8090.ai/blog/same-model-different-harness
project: steward
---

Most coding leaderboards rank **models**. Production agents never run a model alone. Every agent pairs a model with a harness — the program that writes prompts, hands out tools, edits files and decides what to do when a step fails. [8090 Labs](https://www.8090.ai/blog/same-model-different-harness) (Arjun Goray, Oct 9) measured the pairing that boards skip: seven models through five popular harnesses on Datacurve DeepSWE v1.1’s **113** real open-source tasks, every task twice, graded by Datacurve’s own tests.

The harness can move a model **35 points** or barely at all. GLM 5.3 Flash passed **24%** of runs in Codex and **59%** in the DeepSeek harness. Claude Fable 5.1 moved **20** points; Grok 4.6 stayed within **5**. GPT-5.6 Sol, the strongest model in the lineup, beat GLM’s *best* harness by only **16** points — so the wrapper can matter more than the weight swap.

Three results that stick for always-on factories:

- **No model did best in its maker’s own harness.** Claude Fable 5.1 is the sharp case: **41%** in Claude Code vs **61%** in Codex, at a median of **28** tool calls vs **66**. Shorter isn’t automatically better; the longer Codex runs passed more.
- **Passing once is not passing reliably.** Both-runs-pass counts for GLM: **51** of 113 tasks in the DeepSeek harness, **16** in Codex. Averages hide whether an overnight loop will clear the same task again.
- **Cost per success flips the invoice.** GLM’s cheapest *runs* were in Codex at **$0.22**, but only 24% passed, so each success cost **$0.93**. In Pi, runs cost **$0.25** and successes **$0.43**. Cheap tokens are not cheap work.

The authors are explicit that this is not a model or harness leaderboard — lineups stale fast — and that gaps of about **9** points sit inside noise at their sample size. The claim that survives is the pairing: if you pick a model/harness combo off a model-only board, you are deciding on half the information.

## Why it matters for code review

Continuous verified throughput compounds past peak-session heroics only if you measure the **pair**. A morning that feels like Claude Code mastery may be a harness non-bind on a generous window; an overnight factory that ranks models alone will mis-buy both cost and merge rate. Read next to [Lewis on same-model harness effects under tight context](/posts/lewis-same-model-different-harness-yuj/) and [HarnessTax on cost up to 5× with flat success](/posts/harnesstax-same-model-up-to-5x-cost/). When agents work while you sleep, report model **and** harness on every merge-rate and cost claim — or you optimize the wrong half of the factory.
