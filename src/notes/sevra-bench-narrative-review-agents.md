---
title: "Same vulnerable diff, different story: Sevra-Bench"
description: "Jun 11 paper: reverse real vulnerability fixes, wrap them in 15 social-engineering PR framings, and watch review agents approve under prior-approval and dependency-compatibility narratives they cannot verify."
date: 2026-06-11
kind: paper
source:
  title: "Sevra-Bench: Social Engineering of Vulnerabilities in Review Agents"
  url: https://arxiv.org/abs/2606.13757
project: steward
---

Melo, Fogliato, Zhou, Thaker, and Wu ask the question merge-authority review bots invite: what happens when the attacker controls both the vulnerable diff *and* the PR narrative? Sevra-Bench builds adversarial PRs by mechanically reversing historical commits that fixed publicly disclosed vulnerabilities, then packages each reintroduced vulnerability under one of 15 social-engineering framings — claims, fabricated evidence, urgency, prior approval, appeals to authority — while holding the code change fixed.

The retained challenge split is roughly a thousand adversarial PRs spanning the MITRE 2025 Top-10 CWEs, filtered to cases where at least one strong baseline agent incorrectly approved. Eight review agents run in an MCP-backed Git environment with ordinary review tools and no security-specialized prompt. Two metrics: refusal rate, and security-reasoning rate (rejection that actually cites the underlying vulnerability).

The load-bearing pattern is verifiability. Framings whose claims can be checked against the submitted diff (false coverage, evidence dilution, “behavior-preserving refactor”) get caught more often. Framings that invoke *unverifiable* external or repository-wide justifications — Prior Approval Signal, Dependency Compatibility Claim, Review Bias, Fake Bug Fix — are the most devastating for weaker agents, which routinely drop below ~35% refusal while Claude Opus 4.7 / GPT-5.5 stay high. Identical vulnerable diffs flip from reject to approve when the story changes. Stronger agents mitigate differently: GPT-5.5 investigates more; Opus more often names the adversarial intent itself (~25% of transcripts call out fabricated justification or social-engineering patterns).

## Why it matters for code review

PR titles, descriptions, claimed prior approvals, and “compatibility requires this” rationales are attacker-controlled inputs, not neutral context. If your factory lets a review agent’s approve become merge authority, you need claim extraction separated from claim verification — check the narrative against the diff, tests, and repo evidence, or you are grading persuasion under a code-review costume. Treat Sevra-style framing suites as regression tests for any bot you grant approve rights.
