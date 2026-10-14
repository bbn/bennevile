---
title: "Every agent PR costs review time — even the ones that never merge"
description: "Sep 18 Tess Ainsley: measure reviewer-hours per merged production change, not per submission — Salesforce plateau + abandoned agent PRs hide the real verification tax."
date: 2026-09-18
kind: field-note
source:
  title: "Every agent PR costs review time even if it never merges"
  url: https://dev.to/tessainsley/every-agent-pr-costs-review-time-even-if-it-never-merges-2m3n
project: steward
---

Tess Ainsley (Sep 18) reframes the agentic review bottleneck as an accounting problem, not just a quality one. Salesforce’s *Scaling Code Reviews* (Appajodu & Boyapati, Jan 29) saw ~30% more code volume, PRs regularly past 20 files / 1,000 lines, rising review latency — and then **review time on the largest PRs plateaued and declined**. That is usually read as shallower review. Ainsley adds a second reading: if a growing share of large agent PRs never merge, reviewers learn to disengage from unmergeable submissions. Overload and rational triage need different fixes — more capacity vs tighter upstream gating so agents stop opening work the team will throw away.

The metric that hides the cost is review time *per submission*. Every PR that enters the queue spends reviewer attention whether it merges, gets abandoned, superseded, or rejected. Agents inflate exploration (Tang, Zhao & Karahanna on Copilot Coding Agent delegation), so triage minutes attach to empty denominators. Luo & Guo’s AMCIS 2026 survey of AI-era productivity metrics finds teams still trust volume proxies (LOC, commits, PR count) while delivery stays constrained by review and QA. Ainsley’s fix is concrete: **total reviewer time ÷ changes that reached production** in the period. Climbing cost-per-merge means the review system is absorbing agent-flow waste; stable cost means the plateau is mostly noise from dead submissions; falling cost is either healthy skip of exploratory junk or dangerous disengagement.

## Why it matters for code review

Always-on factories that keep modest verified momentum overnight still lose if daytime dashboards celebrate submission volume. Continuous verification compounds only when the tax you pay is priced against *shipped* change — otherwise FOMO about idle agents pushes more unverified PRs into a queue that burns seniors whether or not anything lands. Gate upstream; measure the denominator.
