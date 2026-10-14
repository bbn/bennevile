---
title: "Aletheia: prove a coding-agent rule’s permission is dispensable by removing it"
description: "Sep 30 Shi et al.: leave-one-out sandbox ablations under the same rule+task; witnesses = both runs pass tests under strictly less authority; 314/314 AIShellJack attacks detected, 3.75% FP on benign GHAgentFiles."
date: 2026-09-30
kind: paper
source:
  title: "Aletheia: Permission-Minimality Testing for Coding-Agent Rules"
  url: https://arxiv.org/abs/2609.39678
project: steward
---

Jieke Shi, Yuchen Chen, Junda He, Yue Liu, and David Lo turn least privilege into an **executable test for repository instruction files** (AGENTS.md, Cursor rules)—the same surfaces always-on agents load every night. Malicious rules can request credential access or data transfer while the agent still produces a correct patch; functional correctness alone hides the attack. **Aletheia** translates requested authority into a typed SystemDSL, synthesizes dependency-closed sandbox configs, and runs the **unchanged rule and task** under full permissions and under independent leave-one-out restrictions.

A **Witness** requires both artifacts to pass independently supplied tests **and** a strict reduction in compiled policy authority—so ineffective deletions (permissions covered by baseline directory grants) do not count. On a shared refactoring task, Aletheia executes and detects **all 314** AIShellJack attack inputs, with **0** alarms on five benign templates. Among 80 manually verified benign GHAgentFiles rules it raises **3** false positives (3.75%), with 25 unresolved (unsupported permission interpretations, translation failures, provider refusal). Median cost for completed fresh-translation runs: ~44s and ~$0.22 per input (excluding later LLM task-context interpretation).

## Why it matters for code review

Overnight factories that treat AGENTS.md / skill packs as soft guidance are loading an attack surface into the harness. Review new agent rules the way Aletheia does: for each requested fs/net/proc grant, ask whether the night’s acceptance tests still pass when that grant is withheld—and keep the rule text identical across branches so “necessity” claims from the rule itself cannot redefine the oracle. Pair with [Progent-style privilege control](/posts/zhao-hisentinel-pre-execution-intervention/) and [RAC’s non-compensatory authority gates](/posts/zabolotnii-rac-trust-is-not-a-score/) when promoting always-on agent configs.
