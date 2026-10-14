---
title: "Is agentic review helpful? Mining CodeRabbit feedback in the wild"
description: Empirical mining of developer reactions to CodeRabbit reviews—field evidence on when agentic PR comments help or annoy.
kind: paper
date: 2026-07-03
source:
  title: "Is Agentic Code Review Helpful? Mining Developers' Feedback to CodeRabbit Reviews in the Wild"
  url: https://arxiv.org/abs/2607.03316
project: steward
---
Lab benches rarely capture the social texture of PR comments. This paper mines developers’ in-the-wild feedback to CodeRabbit reviews—where agents already operate as persistent reviewers on real repositories.

The value is ecological validity: what developers mark helpful, ignore, or push back on when the reviewer is an agent with a product surface, not a paper prototype.

## Why it matters for code review

Adoption dies from noise. Studying reactions to a deployed agentic reviewer is how you learn which finding classes earn trust. Pair this with precision-oriented systems papers (OpenCodeReview, OpenAI’s verifier post) before scaling comment volume.
