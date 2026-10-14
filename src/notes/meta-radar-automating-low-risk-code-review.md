---
title: "Meta’s RADAR: automate low-risk review with calibrated risk"
description: Industrial study of RADAR at Meta—risk calibration and selective automation to reclaim reviewer time on low-risk changes.
kind: paper
date: 2026-05-28
source:
  title: "Automating Low-Risk Code Review at Meta: RADAR, Risk Calibration, and Review Efficiency"
  url: https://arxiv.org/abs/2605.30208
project: steward
---
Not every diff deserves the same human scrutiny. Meta’s RADAR paper is about routing: calibrate risk, automate the low-risk slice, and spend scarce reviewer attention where it pays off.

The interesting engineering is the risk model and the feedback into review efficiency—not a claim that AI replaces review. It is factory thinking: classify the change, apply the matching gate.

## Why it matters for code review

Software factories need differential review, not uniform LLM spam on every PR. RADAR is a concrete industrial pattern for attaching automation to low-risk paths while keeping humans on high-risk ones—exactly the control plane most agentic SDLC setups are missing.
