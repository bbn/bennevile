---
title: "Trust the spec, not the code"
description: "Sep 7 Farchi case study: natural-math specs + invariant proofs + runtime coverage; code is regenerable output the factory need not read line by line."
date: 2026-09-07
kind: paper
source:
  title: "Trust the Spec, Not the Code - A Specification-First, AI-Assisted Case Study in Online Banking"
  url: https://arxiv.org/abs/2609.07365
project: steward
---

Formal methods always promised cheaper defects. Notation cost kept them niche. Farchi’s follow-on case study argues LLMs flip the economics: write a natural-language + lightweight-math specification in LaTeX, have the model review it for ambiguity, draft proofs, and generate the implementation. The thing you author, review, and prove is the *spec*; the code is regenerable output you may never read line by line.

Second domain after a knowledge-growth simulation: an online-banking fund-transfer service. Spine is a conservation invariant (money instead of knowledge). One-time transfers grow into scheduled/recurring ones — generated code jumps ~106→265 LOC — while the invariant and its proof stay put. Method additions: an AI-proposed runtime coverage model that separates “never violated” from “covered,” and a Z interface layer (paired success/failure schemas, inductive proof over reachable configs) that the AI also drafts and a human must curate. Honest limit, stated plainly: proofs live at the specification level; refinement of generated code to the spec is still delegated to the model.

## Why it matters for code review

This is the extreme form of “review the plan, not the diff.” Merge capacity shifts onto whether the invariant, coverage obligations, and interface contracts are good enough that regenerating the body is safe. Factories still stuck reading every agent PR are optimizing the wrong artifact — and the paper’s own gap (no refinement check) is exactly the steward problem: who owns the proof that the shipped binary still means what the reviewed spec said?
