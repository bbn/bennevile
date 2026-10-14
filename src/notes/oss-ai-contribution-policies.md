---
title: "Permission with conditions: the new AI contribution policy"
description: "Sep 7 survey of 281 OSS AI policies: most allow AI code, but demand human involvement, accountability, and increasingly disclosure — plus ten countermeasures against AI slop at the PR gate."
date: 2026-09-07
kind: paper
source:
  title: "\"We Permit the Use of AI, but [...]\": The Landscape of AI Policies in Popular Open Source Projects"
  url: https://arxiv.org/abs/2609.07542
project: steward
---

Open source is inventing a new governance artifact almost in public: the AI contribution policy. Hora, Robbes, and Zacchiroli catalog 281 of them (and track 92 dedicated policy files over time) at the moment when these documents barely existed months ago and are now becoming table stakes.

The shape is consistent. Permission is the default — 83.3% permit or encourage AI in code contributions — but it is conditional permission. 67.3% require a high level of human involvement; 43.4% assign accountability to a human author. Disclosure is required by 48.8%, most often in PR descriptions and commit messages, though *what* must be disclosed still varies wildly. Against “AI slop,” they surface ten countermeasures aimed at pull requests, users, and autonomous agents. And the policies are live documents: half of the dedicated AI policy files have already been revised since creation.

## Why it matters for code review

Review capacity is the scarce resource these policies are trying to protect. “AI allowed” without human involvement, accountability, and disclosure just relocates the verification tax onto maintainers. Treat the AI policy as part of the merge gate — same class of artifact as CODEOWNERS and required checks — and expect it to keep changing as factories learn which disclosure formats and slop counters actually buy reviewer trust.
