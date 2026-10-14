---
title: Turn accepted review comments into persistent behavioral rules
description: "Closed-loop framework that codifies review feedback into versioned rules and a self-review checklist—0% recurrence for ruled-against errors in deployment."
kind: paper
date: 2026-07-13
source:
  title: "Self-Improving AI Coding Agents Through Accumulated Behavioral Rules: A Closed-Loop Framework"
  url: https://arxiv.org/abs/2607.13091
project: steward
---
Coding agents repeat the same mistake classes because corrections die in chat. This paper’s fix is boring and effective: every accepted review comment becomes a persistent behavioral rule in a version-controlled instruction file, plus a pre-submit self-review checklist and automated integrity checks as the rule set grows.

In a 35+ service microservices deployment, rules grew from 5 to 18 (plus language standards and a 15-item checklist). Across 11 recorded sessions they report 0% recurrence for ruled-against error classes and a shift of human review toward design-level concerns.

## Why it matters for code review

This is the operational version of Reflexion: review is the teacher, the rule file is the memory. If your org has an agent writing PRs, the minimum viable learning loop is “accepted comment → durable rule → self-check before next PR.”
