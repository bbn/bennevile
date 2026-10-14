---
title: Sonar Vortex and SonarQube Remediation Agent for agentic loops
description: "June 2026: Vortex guides/verifies coding agents in-loop; Remediation Agent GA clears backlog with verified fix PRs."
kind: field-note
date: 2026-06-30
source:
  title: Introducing Sonar Vortex and the SonarQube Remediation Agent — Sonar
  url: https://www.sonarsource.com/blog/introducing-sonar-vortex/
project: steward
---
Sonar’s mid-2026 agent story: Vortex feeds constraints/context to coding agents and verifies output live; Remediation Agent autonomously proposes verified fixes for backlog and PR issues.

## Why it matters for code review

This is review-adjacent verification inside the write loop. Worth tracking if you already standardize on SonarQube quality gates and need agents to inherit those gates instead of bypassing them.
