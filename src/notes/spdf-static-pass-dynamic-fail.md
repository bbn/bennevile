---
title: "Static green is not secure: measuring the SPDF gap"
description: "Sep 9 paper: of 654 Bandit–Semgrep-clean Python samples, dynamic exploit verification confirmed ~1 in 7; several frequent CWEs flagged by neither scanner."
date: 2026-09-09
kind: paper
source:
  title: "Beyond Static Guarantees: Measuring the Static-Pass Dynamic-Fail Gap in Security-Sensitive and LLM-Generated Python Code"
  url: https://arxiv.org/abs/2609.10762
project: steward
---

Pourleyli, Das Urmi, and Melo name the failure mode every AI-code security gate is quietly betting against: **Static-Pass Dynamic-Fail (SPDF)** — code that clears static analysis yet remains exploitable at runtime. Static scanners are cheap, reproducible, and widely treated as evidence of secure behavior. They cannot observe adversarial inputs, execution context, or exploit chaining. Treating a clean Bandit/Semgrep run as security proof is a category error.

They build a three-stage agentic pipeline: composite Bandit–Semgrep static gate, LLM-driven CWE reasoning, then autonomous exploit verification in isolated Docker containers. Across 1,355 Python samples from SecurityEval, RedCode, and CyberNative, 654 produce no static findings. The LLM stage surfaces 394 candidate vulnerabilities across 235 of those files; dynamic verification confirms or partially confirms exploitability in 95 files — an inclusive pipeline rate of 14.53% (roughly 1 in 7 statically clean samples). Confirmed rates among candidate file–CWE pairs vary sharply by dataset (RedCode 33.7%, CyberNative 28.6%, SecurityEval 5.4%). Several frequently confirmed classes, including CWE-338 and CWE-916, were flagged by neither Bandit nor Semgrep.

## Why it matters for code review

A PR bot that “passes security” because the static gate is green is grading the wrong layer. Static success and runtime security are hierarchical assurance layers, not interchangeable tickets. For agent-authored and security-sensitive diffs, budget dynamic or adversarial evidence on the classes static tools systematically miss — or stop pretending the merge gate measured what it claimed.
