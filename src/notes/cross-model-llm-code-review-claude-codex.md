---
title: "Cross-model review is asymmetric: Claude reviewing Codex helps"
description: Controlled pairings of Claude and Codex as writer/reviewer show one direction lifts pass rates; the reverse can hurt.
kind: paper
date: 2026-07-22
source:
  title: "Cross-Model LLM Code Review: Should you use Claude to review Codex or vice versa?"
  url: https://arxiv.org/abs/2607.21656
project: steward
---
This paper runs the experiment teams argue about in Slack: should model A review model B’s draft? Six conditions approximate a practitioner workflow—solo baselines, both cross-model orders, both same-model orders. The reviewer sees the problem and draft but cannot run tests.

Claude reviewing Codex drafts lifts pass rate from 71.6% to 89.7%. Codex self-review also helps. The reverse does not: Codex reviewing Claude drops 91.4% to 82.8%, and Claude self-review is flat. Useful pairing is asymmetric.

## Why it matters for code review

“Ensemble review” is not automatically good. Model identity and role assignment matter. If you wire multi-model PR review, measure directionality; a weak reviewer on a strong draft is not a free safety layer.
