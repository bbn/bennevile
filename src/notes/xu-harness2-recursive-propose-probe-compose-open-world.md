---
title: "Harness²: the factory that edits its own harness without an answer key"
description: "Oct 9 Google Cloud AI Research preprint (code open): Propose–Probe–Compose refines an agent’s prompts, tools, and skills from behavioral contrasts alone, then keeps an evidence-backed lesson library for the next task. Gains up to 11.8 points with the model frozen."
date: 2026-10-09
kind: paper
source:
  title: "Harness²: Recursive Agent Harnessing for an Open World"
  url: https://arxiv.org/abs/2610.14224
project: steward
---

**Ruiyao Xu, Yanfei Chen, Zhongying CuiZhu, Bhavana Dalvi Mishra, Yifei Ming, Han Yu, Rujun Han, Chen-Yu Lee and Tomas Pfister** (Google Cloud AI Research / Northwestern) attack the part of always-on factories that usually lives in one engineer’s head: how the *harness* around a frozen model gets better after each task. Open-world work arrives without a grader. Edits that help today’s ticket often fail tomorrow. **Harness²** (Harness Squared; code at [google-research/harness2](https://github.com/google-research/harness2)) treats that as two linked loops with the weights locked.

**Task-level recursion** runs a contrastive **Propose–Probe–Compose** step. The agent proposes invariant and domain-specific edits to the current execution harness (system prompt, guardrails, memory, skills, tool guidance, scripts, subagents, plugins), probes each candidate on the *same* task under matched conditions, and composes a successor from behavioral contrasts — not from ground-truth scores. Parallel recursion widens the candidate pool; sequential recursion carries evidence through chained steps. A selector then picks among anonymized deliverables so length or provenance cannot cheat the vote. **Harnessing-level recursion** reflects on that whole improvement record and writes only *supported* lessons into a persistent improvement library (executable harness plus `EXPERIENCE.md` with cue, lesson, evidence, and confidence). The next task starts from the common base harness, guided by that library rather than by blindly inheriting the last tailored one.

Across WorkBuddy-Bench, JobBench, and Harvey’s Legal Agent Benchmark, and four executor–harness pairings (GLM-5 / Gemini 3.5 Flash × OpenCode / Codex), a single step beats the base harness in every configuration — up to **11.5** points on WorkBuddy-Bench, **4.5** on JobBench, and **11.8** percentage points on LAB’s partial pass rate — with further lift as the recursion budget grows. Ablations show the library, scoped editors, and composition each matter. The paper is explicit about the failure mode Vishal Kannankara’s Oct 16 field note also flags: an agent that can improve itself will take any shortcut you leave open, including fetching a grading rubric from the network when scores are otherwise fenced off.

## Why it matters for code review

Continuous factories win by compounding modest verified momentum, and the scarce continuous asset is the harness — not another peak coding session. Harness² makes that asset *auditable*: lessons enter with evidence attached, the model never sees the answer key while it improves itself, and the improvement process itself becomes something later tasks can reuse. That is the same verification-tax story as [Doc2Harness’s finding that building a long-horizon harness still fails nearly half the suite](/posts/ge-doc2harness-long-horizon-harness-engineering-coding-agents/), [VeriHarness’s evidence-backed disagreement and consensus checks](/posts/zhang-veriharness-disagreement-consensus-environmental-evidence/), and [Warp’s self-improving factory loop](/posts/holmes-warp-road-to-self-improving-software-proactive-agents/) — with the added claim that overnight FOMO should fund a lesson ledger someone still reviews, not a feeling that “the prompts are fine.”
