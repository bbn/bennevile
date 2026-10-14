---
title: "Harness Annealing: teach the model the control the harness used to own"
description: "Oct 1 Yang, Chai & Wen: HAT anneals teacher trajectories under weaker harnesses so the model internalizes what to investigate, revise, and stop; tools-alone annealed ckpts ≈ full-harness starters on SWE-QA (+5.01 / +3.09 H₁ for 9B H₂-targeted)."
date: 2026-10-01
kind: paper
source:
  title: "Harness Annealing: Learning to Act with Less External Control"
  url: https://arxiv.org/abs/2610.01235
project: steward
---

Yingxuan Yang, Huacan Chai, and Ying Wen name **harness internalization**: learn to assume specified control decisions—what to investigate, whether to revise, when to stop—while retaining task performance after that support is withdrawn. Tools stay external; state, workflow, and verification layers form a nested ladder **H₁ ⊂ H₂ ⊂ H₃ ⊂ H₄**. Training on full-harness wins can raise scores yet leave the model dependent on runtime intervention. **Harness Annealing Training (HAT)** starts from Layered **H₄**-trained SFT, then curricula teacher trajectories from progressively weaker source harnesses with explicit control supervision, replay, and cue dropout.

Every checkpoint is evaluated under all four deployment harnesses on SWE-QA and SWE-QA-Pro (9B and 35B). Selected annealed checkpoints with **tools alone** score close to their starting checkpoints under the **full harness**. For 9B, the **H₂**-targeted checkpoint lifts tools-only (**H₁**) scores by **+5.01** on SWE-QA and **+3.09** on SWE-QA-Pro over the **H₄**-trained start, while shrinking cross-harness range **Δ** from **5.48 / 3.61** to **0.57 / 1.32**. Layered supervision avoids Direct SFT’s weak-support collapse; preferred checkpoints vary by scale (9B favors **H₂**-targeted mean; 35B’s highest mean stays near **H₄**-trained). Further annealing is not uniformly better.

## Why it matters for code review

Always-on factories that FOMO for thicker harnesses at deploy time can instead anneal control into the weights and withdraw runtime babysitting—verification gates, workflow prompts, progress ledgers—once the model owns those judgments. Review agent training PRs for withdrawal tests (same checkpoint under thinner harnesses), not only full-scaffold scores, and for curricula that teach stop/revise decisions as outputs. Continuous verified momentum compounds when overnight lanes keep passing after support is pulled—pair with [ActiveSaddler’s co-evolving harness curriculum](/posts/park-activesaddler-curriculum-harness-optimization/) and [Macedo’s loop-spec verification ladder](/posts/macedo-stop-hand-holding-loop-specification-verification-ladder/) when the merge gate asks whether the agent still works with less hand-holding.
