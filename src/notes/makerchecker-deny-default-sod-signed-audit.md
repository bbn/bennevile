---
title: "MakerChecker: deny-by-default roles so the agent can’t approve its own work"
description: "Jun 11 MakerChecker: gateway + scan + embedded governor — grant-pinned skills, SoD so maker ≠ checker, Ed25519 hash-chained audit anyone verifies offline."
date: 2026-06-11
kind: field-note
source:
  title: "MakerChecker — open-source security layer for AI agents"
  url: https://github.com/makerchecker/MakerChecker
project: steward
---

[MakerChecker](https://github.com/makerchecker/MakerChecker) (open-sourced Jun 11 2026; `mc scan` / `@makerchecker/embedded` / self-hosted gateway) is structural segregation of duties for agent tool calls, not another prompt that asks the model to be careful. Agents keep their frameworks (LangChain, Claude SDK, CrewAI); MakerChecker sits **in front** of every tool as a checkpoint and **behind** it as a signed ledger. An agent acts only through a **role**, runs only skills that role was **granted** (deny by default, pinned to exact versions), cannot exceed limits, and — the load-bearing claim — **cannot approve its own high-risk work** because those skills live on a separate role. `npx @makerchecker/scan .` classifies consequential actions offline against an Agent Incident Database, and `--fix` scaffolds governed wrappers so CI can fail a PR that introduces an ungoverned catastrophic capability.

Enforcement is four verbs: **Grant** (role ↔ skill@version), **Check** (deny before the tool body runs), **Gate** (named human approval for high-risk steps; requester cannot self-approve), **Record** (every allow/deny commits to an Ed25519-signed, SHA-256 hash-chained audit log in the same transaction). Export a bundle and anyone verifies it offline with `@makerchecker/proof-verifier` — no trust in the process that produced the log. Embedded mode keeps the same decision rules and chain format in-memory for a single worker; the full server adds a durable inbox and review console when many agents share one control plane. The honest bound: this is governance of *what may run*, not a substitute for tests that prove the change is correct.

## Why it matters for code review

Always-on factories collapse when the builder can also stamp “approved.” MakerChecker relocates morning review to the grant table and the offline-verifiable chain — promote what a separate role and an exit-coded gate allowed, reopen anything the agent tried to self-clear. Peak-session Claude mastery still wins when you’re watching; continuous verified momentum needs SoD that survives sleep. FOMO that nothing ran overnight is cheaper than a green path the maker signed for itself.
