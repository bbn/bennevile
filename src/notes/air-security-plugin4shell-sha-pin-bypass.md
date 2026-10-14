---
title: "Plugin4Shell: pinned plugin SHAs that still install attacker code"
description: "Sep 17 Air Security: zero-click RCE via SHA-pinning bypass in Claude Code, Codex, Copilot, Gemini — auto-update swaps marketplace plugins when git prefers a hash-named branch over the commit."
date: 2026-09-17
kind: field-note
source:
  title: "Plugin4Shell - Zero Click RCE Vulnerability found in top 4 most popular coding agents"
  url: https://www.air.security/blog-posts/plugin4shell
project: steward
---

Air Security’s Sep 17 write-up names **Plugin4Shell**: a supply-chain flaw in how coding agents install marketplace plugins, not in the model that writes the PR. Claude Code, Codex, GitHub Copilot, and Gemini CLI all check out a marketplace-pinned commit and then **fail to assert that `HEAD` equals that pin**. Git will prefer a ref over an object when a branch is named like the 40-hex SHA; an attacker who controls the plugin repo (publish-then-rug or hijack) can make background auto-update land malicious code while the pin still looks honored. Zero-click because auto-update is the default path in several agents — no new install prompt.

Two checkout shapes: Claude/Codex/Copilot resolve `git checkout <pinned-sha>` to a hash-named default branch (hosts that allow SHA-shaped branch names — Bitbucket and self-hosted git among them; GitHub rejects the name). Gemini’s `--ref` fetch records the right commit in `FETCH_HEAD`, then `git checkout FETCH_HEAD` can resolve to a branch literally named `FETCH_HEAD`. One agent-side fix closes both: after checkout, `test "$(git rev-parse HEAD)" = "<pin>"` or abort. Anthropic patched Claude Code (2.1.179); OpenAI patched Codex (0.146.0); Copilot had no shipped fix at disclosure; Gemini CLI is deprecated without a patch. Marketplaces cannot fully enforce the pin because resolution happens inside the agent.

The piece sits on their earlier Skills / SkillJacking chain: planting or hijacking marketplace add-ons is already demonstrated at scale; Plugin4Shell is the bypass of the pin that was supposed to contain rug-pulls.

## Why it matters for code review

Overnight and always-on factories inherit every plugin and skill the harness auto-updates. Review gates on PRs do not help if the agent’s own add-on layer can be swapped under a trusted pin. Treat marketplace plugins like dependencies with a post-checkout integrity check — same class of harness hygiene as unpinned MCP servers — or continuous verified momentum runs on a compromised supervisor.
