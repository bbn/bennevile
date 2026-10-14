---
title: "Review is the control point — AI does not pick the sign"
description: "Agarwal et al. code 3,100 practitioner docs into a causal model: agent impact on software is decided through how the team structures review and what expertise humans still bring."
kind: paper
date: 2026-07-08
source:
  title: "3100 Opinions on Code Review in an AI World: Building Causal Theory from Practitioner Discourse"
  url: https://arxiv.org/abs/2607.07980
project: steward
---
Mining GitHub alone will not settle the argument. The authors’ own motivating scrape finds agent PRs reviewed less, merged faster, and discussed less — until equally defensible analysis choices flip the signs. Traces show change without mechanism.

So they go to grey literature at scale: 38,709 engineering blogs and Reddit threads, filtered and coded to a stratified sample of 3,100, then a causal model with 26 constructs and 67 relationships. The organizing claim is blunt: review is the control point through which a coding agent’s effect on the software is decided. AI does not fix the sign of that effect. The team does — through the expertise humans still bring and how review is structured.

## Why it matters for code review

This is the org-design receipt behind the factory thesis. Same agents, opposite outcomes depending on whether review is a rubber stamp, a heterogeneous gate stack, or a place where seniors still teach and catch blast radius. Competing slogans (“AI review replaces humans” vs “humans must read every line”) become falsifiable claims with named moderators — useful when you are redesigning the process under PR flood rather than picking a tool.
