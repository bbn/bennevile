---
title: "Agent Gate: deterministic merge evidence, not another LLM reviewer"
description: "Jun 15 Sung: CI firewall for AI PRs — declared scope, workflow permission escalation, agent control-plane drift, matching test-file evidence — policy loaded from base, never from the untrusted head."
date: 2026-06-15
kind: field-note
source:
  title: "I built a deterministic CI firewall for AI-generated pull requests"
  url: https://dev.to/sjh9714/i-built-a-deterministic-ci-firewall-for-ai-generated-pull-requests-4o3c
project: steward
---

JinHyuk Sung’s Jun 15 DEV write-up (Agent Gate `v0.1.2`, prerelease) splits the AI-PR review problem in two. An LLM reviewer helps with judgment. A **deterministic CI firewall** answers merge-boundary questions that should not be probabilistic: Did the PR stay inside its declared scope? Did workflow permissions escalate? Did agent control-plane files drift? Is there matching test-file evidence on high-risk paths? Did MCP config changes get surfaced?

The contract can live in the PR body (`allowed_paths`, `required_evidence`). Out-of-contract edits, `contents: write` escalations, `write-all` / `id-token: write` / `pull_request_target` + PR-head checkout / unpinned actions / new `secrets.*` usage, and drift in `AGENTS.md`, `CLAUDE.md`, `.cursor/**`, `.mcp.json`, and similar all become explicit findings. High-risk path rules (e.g. auth code without matching auth tests) flag missing file-pattern evidence — not semantic coverage. The human-facing report leads with a decision (`NEEDS HUMAN DECISION`) while machine JSON stays `pass` / `warn` / `block`. Start in observe (`mode: warn`), then promote only low-noise policies into merge gates.

Trust boundary is the load-bearing design: the Action does not checkout PR code, does not execute repo scripts or LLMs or MCP servers, and loads `agent-gate.yml` from the **base** branch so a PR cannot weaken its own policy. It reads metadata and diffs through GitHub APIs. Local `unsafe-pr-zoo` fixtures replay the failure modes. Explicit non-goals: not a semantic bug finder, not a replacement for human or LLM review or normal CI — only “did this PR cross deterministic policy boundaries before merge?”

## Why it matters for code review

Always-on agent factories raise PR volume until review becomes archaeology. Continuous momentum needs a gate that is boring and repeatable beside the model that judges taste. Agent Gate relocates scope escape, workflow power grabs, and control-plane drift into CI evidence the morning queue can trust — so human (and LLM) judgment spends attention on the change that stayed inside contract, not on hunting what the agent quietly enlarged overnight.
