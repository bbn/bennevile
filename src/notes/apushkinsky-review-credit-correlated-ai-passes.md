---
title: "Three AI passes and a stamp: the human reviewer became a proxy for another AI review"
description: "Oct 2 Dan Apushkinsky: an AI-written PR passed an AI reviewer and a human who pasted it into AI, missing a bug flagged by a comment fifty lines up — correlated passes are one opinion repeated; make review a credited, estimated ticket."
date: 2026-10-02
kind: field-note
source:
  title: "Fix Your AI Slop Problem By Giving Reviewers Credit"
  url: https://danunparsed.com/p/giving-code-reviewers-credit
project: steward
---

Dan Apushkinsky was tagged as second human reviewer on a PR that called the equivalent of `staff.print_document()` — fifty lines below existing code with a comment saying one branch has no printer and a guard that skips it there. Tests would pass; the first deploy to that branch would fail. The PR had been written by an AI, reviewed by an AI model, then reviewed by a human who pasted it into an AI and approved. He happened to read it. He admits that most times he would have pasted it into an AI too.

His diagnosis has two halves. First, **stacked AI passes with near-identical prompts, often on the same model, are not independent review** — expecting different findings from them makes no sense, and a human pasting the diff into their favourite harness is just another correlated pass wearing a reviewer’s name. Teams can choose 0%, 100%, or something in between for human review, but many sit in a no man’s land where the human requirement survives only as a proxy. Second, the root cause is incentives, not laziness: reviewing often costs more than the prompting that produced the code, and that labour is invisible. His fix is deliberately boring: **put reviews on the sprint board as estimated subtasks**, auto-created from the PR pipeline, so a 3-point feature that spawns a 3-point review shows its true cost and careful reviewers are credited, not penalized.

Limits: one anecdote plus a process proposal, no measurement of whether credited review tickets change catch rates.

## Why it matters for code review

Maker≠checker is not satisfied by adding passes; it needs checkers that fail differently and a human whose approval means they read something. Under sustained agent volume, the verification tax gets paid either visibly (estimated, owned review work) or invisibly (correlated rubber stamps). Whichever human-review ratio a team picks, review policy should name it and route it — not keep a ceremonial human. Pair with [Guo’s groundability results on when weak reviewers can audit strong agents](/posts/guo-groundability-weak-reviewers-strong-coding-agents/) and [Camus’s maker/reviewer proof gate](/posts/mateodaza-camus-maker-reviewer-proof-gate/).
