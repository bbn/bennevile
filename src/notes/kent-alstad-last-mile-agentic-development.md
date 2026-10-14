---
title: "The last mile: agents make 80% fast; finishing still does not scale"
description: "Sep 27 Kent Alstad (KandiForge): hundreds of agents → millions of lines across 20 repos; bottleneck is completing/hardening; post-integrate test gates arrive too late."
date: 2026-09-27
kind: field-note
source:
  title: "The Last Mile Problem in Agentic Development"
  url: https://dev.to/kentkandiforge/the-last-mile-problem-in-agentic-development-5768
project: steward
---

Kent Alstad’s Sep 27 opener for a KandiForge series names the asymmetry continuous factories keep rediscovering: agents make the **first ~80%** of building software fast — working code, passing tests, a system that looks almost done — then the **last 10–20%** (edge cases, integration seams, failure modes, demo-vs-production) stays human-shaped. When hundreds of agents produce work at a scale no person can match, the scarce resource is not building. It is **completing**.

The receipt is operational, not vibey. At KandiForge, agents had produced **millions of lines across 20 repos** and still needed to ship. The blocker was not missing requirements knowledge or architecture understanding — it was working every final detail across a codebase that size. Adding more reviewers and testers (agents and people) did not fix the geometry when tests ran **after** code was already integrated: the change gates were in the wrong place, so catches arrived as review debt rather than worktree failures. Alstad is explicit that nobody has fully solved this yet; the post is a problem statement ahead of deeper factory notes and a December BuildStuff talk.

Commenters converge on the same fix direction continuous factories keep needing: move the gate **before** the change leaves the agent worktree (reproducing test + minimal diff in isolation; terminate the run if the sandbox check fails), and do not let post-merge or post-integrate verification be the first hard signal.

## Why it matters for code review

Always-on agent fleets without a pre-integrate complete/harden gate manufacture unfinished inventory. Review this as factory design: verification that only fires after merge is theater under volume. Steady verified momentum beats peak-session heroics only when “done” is enforceable inside the worktree — otherwise FOMO for overnight agents just widens the morning last-mile pile.
