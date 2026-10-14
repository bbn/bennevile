---
title: "Harness engineering, measured: eleven production coding agents at source"
description: "Jul 15 Barbaste et al.: source anatomy of Claude Code, Codex, Gemini CLI, OpenHands, Pi, OpenCode, and peers — seven subsystems, 29 patterns, and the harness→platform turn."
date: 2026-07-15
kind: paper
source:
  title: "Harness Engineering: Anatomy, Architecture, and Evolution of Coding Agents — A Source-Code Study of Eleven Systems"
  url: https://arxiv.org/abs/2609.00006
project: steward
---

“Agent = model + harness” stopped being a slogan in early 2026; this paper is the missing reference. Barbaste, Darrigol, Vu, and Wiltberger pin eleven production coding harnesses (Claude Code, Codex CLI, Gemini CLI, Mistral Vibe, OpenHands, Aider, Mini-SWE-Agent, Hermes, Pi, OpenCode, OpenClaw) plus Omnigent as a meta-harness contrast, and map every one onto seven subsystems: loop, LLM integration, tools, memory/context, safety/permissions, orchestration, extensibility.

They are not ranking SWE-bench scores. They are reading ~4M lines and naming what actually ships: 13 cross-cutting observations, 29 recurring patterns (verify-on-stop, log-as-queue loops, syntax-aware command permissioning, harness mimicry, …). Two absences survive a threefold corpus expansion: no runtime imports a general-purpose agent framework (LangChain et al.), and none retrieves code with vector embeddings — hand-rolled async loops and deterministic retrieval (ripgrep, tree-sitter, glob, Markdown context files). Skills (SKILL.md) lead MCP in adoption (9/11 vs 8/11); ACP appears in six systems with a new role: harness hosting (OpenHands running Claude Code/Codex/Gemini as backends).

Because eight systems were re-pinned from an April audit, they also get a controlled longitudinal sample: convergence becomes imitation (Codex copies Claude Code hook vocabulary; session importers ship), and behavioral policy migrates from prompt prose to configuration. Thesis: in H1 2026 the coding harness finished turning from tool into platform — SDKs, marketplaces, MDM governance, agent-as-model gateways, and a meta-harness arbitraging vendor runtimes. Closes with 18 design recommendations and a 90-line minimum-viable harness.

## Why it matters for code review

Review tooling is mostly a harness choice wearing a different hat. If your “AI reviewer” is one giant prompt over a diff, you are ignoring what this corpus shows production systems already learned: specialized agents, coordinator judgment, risk tiers, verify-on-stop, and policy outside the prompt. The merge gate that survives agent volume will look like the rest of the platform — composable subsystems, not a smarter chat.
