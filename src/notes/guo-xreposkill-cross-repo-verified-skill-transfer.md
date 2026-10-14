---
title: "XRepoSkill: keep only rules that win across repos, then pick three for the issue"
description: "Sep 29 Guo/Zhou/Zhang et al.: contrast success vs fail on the same issue; executable predicates verify gain; retain rules only if ≥2 repos agree; DeepSWE +10.3pp over no-skill, +5.0pp over Trace2Skill."
date: 2026-09-29
kind: paper
source:
  title: "XRepoSkill: Learning Transferable Skills for Software Engineering Agents"
  url: https://arxiv.org/abs/2609.36807
project: steward
---

Yaoqi Guo, Haoyang Zhou, Jiayi Zhang, and collaborators attack a blunt fact about agent **skills**: a behavior that shows up in a green trajectory is not necessarily why the issue resolved—it may be incidental, or a model habit that does not travel. **XRepoSkill** treats a skill as a bag of rules (“what to do, when”), mined from public mini-SWE-agent trajectories on SWE-bench Verified and applied only to repositories never seen in that pool.

Discovery contrasts a successful and a failed attempt on the **same** issue (same agent, different backbone LLMs), abstracts tool calls into typed actions, and localizes the first meaningful divergence. Candidate rules get **executable predicates** (e.g. `before(run_test, first_edit)`) so later verification needs no LLM call. Within a repo, Mantel–Haenszel resolution **gain** compares issues where the predicate holds vs not; across repos, predicate φ-correlation clusters rules, and only clusters supported by **≥2 repositories** enter the transferable skill (paths and symbols stripped). At inference, the backbone picks **≤3** rules for the issue, tagged with gain and *z*, and the agent must verify each suggestion against the live tree.

On SWE-bench Pro (200-task sample) and all of DeepSWE, across DeepSeek / GPT / MiMo backbones, XRepoSkill leads every skill-learning baseline (SkillOpt, STAIR, Trace2Skill) and the bare agent. Headline on long-horizon DeepSWE: **+10.3pp** over no skills (**33.9%→44.2%** average) and **+5.0pp** over Trace2Skill; mean cost stays in the same band (~$0.25/issue). Skills learned only from Python trajectories still lift Go/JS/TS subsets. Ablations: dumping *all* rules hurts hardest (**58.4%→48.7%** on DeepSWE+DeepSeek); dropping cross-repo consolidation or within-repo verification also erodes the lead.

## Why it matters for code review

Always-on factories that append every “lesson” from overnight green runs will ship folklore that fails on the next repo. XRepoSkill’s receipt for continuous harnessed improvement is the same discipline as a merge gate: contrast, measure gain with an executable check, and refuse promotion until the behavior recurs under held-out repos—see also [HarnessEvolve’s dual quality/performance gates](/posts/jiang-harnessevolve-reference-trajectory-self-evolution/) and [RASO’s cross-harness skill optimization](/posts/chu-raso-cross-harness-skill-optimization/). Score self-improving factories by verified transfer under sustained load, not by how many `SKILL.md` lines the night shift wrote. FOMO for idle agents without a cross-repo predicate just compounds habits that looked green on yesterday’s tree.
