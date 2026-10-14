---
title: "Scanning the harness: agent config is a supply chain now"
description: "Across 3,171 public repos, 16% of multi-component agent setups carry a confirmed security defect — unpinned MCP servers, scoped-looking shell grants, skills that pre-approve Bash for whoever installs them."
kind: paper
date: 2026-09-07
source:
  title: "Scanning the Harness: An Empirical Study of Supply-Chain Defects in AI Coding-Agent Configurations"
  url: https://arxiv.org/abs/2609.07360
project: steward
---
Skills, hooks, MCP server declarations, instruction files, subagents: that is not “settings.” It is a dependency layer installed from marketplaces and public repos, running with the developer’s privileges — no lockfile, no install-time check, no vocabulary for what a component may do.

Kapner, Soceanu, Petrunin, and Gartner scanned 3,171 public GitHub repositories (2,660 setups assembling two or more component types, plus 511 published skill collections). They only counted rules decidable from bytes whose consequence is a security exposure, a broken config, or a departure from the Agent Skills spec — then re-derived every finding at a pinned commit and cross-checked disagreements with released adjudicator prompts.

Three security classes survive: 9.8% of setups install an MCP server with no version pinned; 3.1% pre-approve arbitrary execution behind a scoped-looking grant such as `Bash(python:*)`; 3.8% carry a skill that pre-approves the shell for whoever installs it. In total 16.0% of setups carry a security defect (16.7% any confirmed defect), against a raw scanner rate of 25.5% on the same rules. No credential-exfiltration path was confirmed. Instrument, corpus, prompts, and verdicts are released.

## Why it matters for code review

If you are building a software factory, the interesting attack surface is not only the model that writes the PR. It is the growing pile of harness artifacts people share like npm packages — without npm’s hygiene. Review the skills, hooks, and MCP pins the same way you review dependency bumps: they run with your privileges, and they sit upstream of every agent review gate you think is protecting you.
