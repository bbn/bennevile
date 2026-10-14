---
title: "Secure the ADLC at its control points, not with a bolted-on AI review"
description: "Sep 2 Endor Labs field note: agent PRs break the one-reviewer-per-change ratio; put security context at generation, architecture-aware review on every PR, and reachability before remediation."
date: 2026-09-02
kind: field-note
source:
  title: "The Secure Agentic Development Lifecycle (ADLC), Explained"
  url: https://www.endorlabs.com/learn/the-secure-agentic-development-lifecycle-adlc-explained
project: steward
---

Endor Labs’ ADLC note starts from a chain you can no longer walk person-by-person: commit, review, tests, dependency, prompt. Agents read the repo, edit many files, install packages, run tests, and open PRs while humans sit at one gate. Jellyfish’s 20M-PR sample has a majority of companies generating most code with AI help; fully autonomous agent-opened PRs stay rare but grow fast. The planning number is volume plus autonomy outrunning review.

The risk model shifts with who drives. Assistants suggest; agents act across tools and pipelines. Benchmarks they cite are blunt: BaxBench leaves even the best model’s solutions mostly incorrect or insecure; one 2026 SWE-Agent/Claude 4 Sonnet cut showed 61% functionally correct and only 10.5% secure. Design flaws — a working feature routed around permission checks — pass line-level static analysis. Hallucinated and transitive dependencies widen the blast radius (their dependency research: ~1 in 5 AI-recommended versions safe; 49% with known vulns; 34% hallucinated). Faros telemetry: PRs merged with zero review up 31.3%. CSA-cited work: AI-assisted developers commit 3–4× faster and introduce security findings at ~10×.

Their control stack is generation → review → reachability → remediation → inventory, mapped to NIST SP 800-218A / CSA ASDLC / OWASP rather than a separate “AI review” bolted on at the end. Concrete moves: push security context into prompts and IDE (a recursive secure-insecure-diff prompt cut Python weakness density 77.5% in their research); put architecture-aware review on every agent PR (their product runs developer / architect / security agents); prioritize by call-graph reachability so ~80–95% of noise drops before humans see it; automate safe upgrades so blocked-PR tax falls. Checklist order: inventory agents, secure at generation, security-aware review, reachability triage, remediations that don’t stall delivery, then monthly blocked-PR and MTTR numbers.

## Why it matters for code review

Agentic SDLC security is a review-capacity problem dressed as AppSec. Pattern scanners and “CI green” miss design flaws and hallucinated deps; humans cannot scale one-reviewer-per-change. Put controls where agents act — generation context, architecture-aware PR review, reachability-ranked queues — or the merge button becomes the only remaining person in a chain that used to have many.
