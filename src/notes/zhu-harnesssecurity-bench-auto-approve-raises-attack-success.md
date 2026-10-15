---
title: "HarnessSecurity-Bench: auto-approve lifts attack success from 29% to 96% across six coding harnesses"
description: "Zhu et al. run 2,500 trials on Claude Code, Codex CLI, Gemini CLI, gptme, Qwen Code and Copilot. Auto-approve raises utility and nearly triples attack success; allowlists and denylists cut attacks with far less utility damage than network isolation."
date: 2026-10-06
kind: paper
source:
  title: "HarnessSecurity-Bench: Do Security Mechanisms Really Protect Coding Agent Harnesses?"
  url: https://arxiv.org/abs/2610.07639
project: steward
---

**Zhengyang Zhu, Liming Huang, Runmin Ji, Mingxi Ye, Zihan Zhou, Hanyang Guo, Jingwen Wu, Yuhan Ye, Yuming Feng, Hong-Ning Dai and Zibin Zheng** ask whether the security knobs on coding-agent harnesses actually change outcomes. They first score a ten-mechanism taxonomy across **400** harness-mechanism cells and find that about **half** of confirmed mechanisms are opt-in, with closed-source products leaving large evidence gaps. Then they introduce **HarnessSecurity-Bench**: **23** tasks across five attack surfaces, separate deterministic oracles for task utility and attack effect, and nine mechanisms on six harnesses — Claude Code, Codex CLI, Gemini CLI, gptme, Qwen Code, and GitHub Copilot.

Under a fixed GLM-5.2 baseline they run **2,500** trials, log **81,155** tool calls and more than **2.2 billion** tokens. Enabling **auto-approve** raises utility and lifts attack success from **29.2% to 95.6%**. Network isolation and read-only mode cut attack effects but at large utility cost. Command **allowlisting** reduces attacks with a small utility loss; **denylisting** reduces attacks with a utility **gain**. Task cases show the familiar failure mode always-on fleets rediscover: blocking one tool does not block the effect when the same write or network call is reachable through a shell, script, or package manager.

## Why it matters for code review

Overnight and continuous factories lean on auto-approve so agents are not stuck waiting for a human click — and that is exactly the setting where one malicious instruction gets the rest of the attack for free. The useful harness move is not a longer permission prompt; it is verifiable runtime config, effect-bound gates that survive alternate execution paths, and scoring attack success beside task utility so the FOMO of idle agents does not buy a 3× jump in compromise rate. Read beside [Zhang et al. on approval laundering](/posts/zhang-agent-approval-laundering-transitive-effects/) and [Anthropic on auto mode overnight](/posts/anthropic-auto-mode-overnight-production/).
