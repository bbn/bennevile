---
title: "The compiler may read it; the agent may not — and today’s harness cannot say so"
description: "Sep 28 Roy: purpose-based access for proprietary solver modules fails under ordinary Claude Code controls — containers, permission rules, and sandboxes cannot name which program is reading; 5 of 15 routes evade both rule surfaces, including gfortran -E and allowed make targets."
date: 2026-09-28
kind: paper
source:
  title: "The Compiler May Read It, the Agent May Not: Keeping Part of a Research Code Away from a Coding Agent"
  url: https://arxiv.org/abs/2609.35557
project: steward
---

Shobhan Roy states a rule every research group with licensed constitutive models already wants: **the compiler may open the proprietary files; the coding agent may not put their bytes in the model context**. On a physics flow solver, four ordinary controls sit between agent and file — container mounts, permission rules that match command text and path, the harness sandbox, and a soft instruction file — and **none can name which program is reading**. Agent and build share one user; the compiler is a child of the agent’s shell inside the same container. They differ only in *why* the file opens and *where* the bytes go.

Roy classifies **fifteen** read routes against a real Claude Code–style deployment. Permission rules and sandbox cover different subsets; **five** routes evade both, including a recipe under an allowed `make` target, MCP/hook reads, `gfortran -E` on a protected path, and `git show` of history. A five-week deny-list history grew from **14** to **586** rules and still could not state “protect these two targets alike.” Over seven weeks of ordinary work, **64** denials were mostly collateral on composite command lines, not protective hits on the IP. Kernel type enforcement or a trusted build broker *can* approximate the rule — at the cost of admin privilege or breaking the edit–build–test loop the agent was hired for. Copilot content exclusion and `.cursorignore` document the same gap for agent/MCP/terminal paths.

## Why it matters for code review

Always-on factories running overnight on proprietary or pre-publication code need an access story the harness can *enforce*, not an instruction file and a growing denylist. Treat purpose-separated reads as reviewable harness software: require a trusted build broker or OS-level type enforcement for protected modules, assume compiler diagnostics and artifacts are bounded disclosure channels, and refuse to call a fleet “safe to leave running” when `gfortran -E` is a permitted reader. Continuous verified momentum includes verifying *who* may read what — not only whether tests pass.
