---
title: "ReviveBench: the overnight factory is only as honest as its hidden verifier"
description: "Sep 28 Liu/Dai/Du/Yang: 10 revival + 13 reconstruction tasks behind hidden graders; 28 verifier defects (24 FN, 2 FP); CFD graded a self-reported zero; three checks—achievability, candidate consensus, never grade a self-report."
date: 2026-09-28
kind: paper
source:
  title: "From Dead Code and Static Requirements to Working Engines: Software Revival with Coding Agents"
  url: https://arxiv.org/abs/2609.36161
project: steward
---

Tianyu Liu, Dingyuan Dai, Yufan Du, and Zhen Yang ask whether coding agents can **revive** software that no longer runs and **reconstruct** bounded industrial engines from open specs—under graders the agent never sees. **ReviveBench** pairs ten revival tasks (dependency rot, deleted cores, 2019 C++/Java builds, a GPU foundation model, post-cutoff repos) with thirteen clean-room engines (CAD, PLC, synthesizer, transactional cores, …) scored by numerical tolerances, SAT/formal checks, or exact transactional invariants.

Capability is real: the strongest model restores all ten revival tasks in at least one run; identifier obfuscation drops line similarity to the deleted originals from 0.51–0.96 to 0.03–0.44 without collapsing pass rates; two models meet task-level pass criteria on all thirteen reconstruction engines. The sharper field note is measurement. Construction audited **28 verifier defects**—**24 false negatives** that rejected correct work and **two false positives**. One FP awarded full marks to a **134-line CFD “solver” with no grid** that evaluated closed forms printed in the spec and hard-coded divergence to zero; renaming one output key flipped it to a full pass. Another used “≥0.9× cases” on 13 designs so 12/13 still counted as full marks despite a proved counterexample.

Three practical checks follow: an **achievability probe** (does the prescribed method actually reach the threshold?), **candidate consensus** (when many independent implementations agree with each other and disagree with the oracle, investigate the asset), and **never grade a self-reported quantity**—recompute diagnostics from the submitted artifact, as place-and-route already did for wirelength.

## Why it matters for code review

Continuous verified momentum assumes the gate is measuring the thing you care about. ReviveBench’s receipt: overnight factories and always-on reconstruction loops will look green—and ship wrong—when the harness grades a self-report, an unreachable tolerance, or a percentage rule on a formal property. Pair volume with verifier audits the way you’d pair merge rate with [verify-first rejection tax](/posts/verify-first-harness-agent-pr-rejection-tax/) and [independent-path common-mode failure](/posts/rovai-independent-verification-paths-common-mode/). FOMO for agents running while you sleep is wasted if morning CI is scoring the agent’s own diary.
