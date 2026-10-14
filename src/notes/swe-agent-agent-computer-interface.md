---
title: "SWE-agent: the interface is part of the agent"
description: Custom agent-computer interface for editing, navigating, and testing repos—large SWE-bench gains over shell-only baselines.
kind: paper
date: 2024-05-06
source:
  title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
  url: https://arxiv.org/abs/2405.15793
project: steward
---
SWE-agent’s thesis is that LM agents are a new kind of end user: they need purpose-built interfaces, not raw shells. The ACI wraps edit, navigate, and test actions so the model gets feedback it can actually use.

On SWE-bench they set then-SOTA resolve rates and show large relative gains versus shell-only. Ablations make the point: interface design changes agent behavior, not just token count.

## Why it matters for code review

Review agents inherit the same lesson. A reviewer that only sees a diff paste behaves differently from one with bounded file tools, test runners, and structured comment schemas. Build the review ACI deliberately; do not assume “give it bash” is the optimal critique interface.
