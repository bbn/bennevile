---
title: "CI under agent volume: the pipeline has to understand the change, not just run the suite"
description: "Aug 31 Pini Shvartsman: continuous integration → continuous verification — comprehend, choose risk-based strategy, investigate failures (no blind retry), emit an evidence package; escalate up, never auto-approve consequential deploys."
date: 2026-08-31
kind: field-note
source:
  title: "Your Pipeline Runs Scripts. It Should Be Making Decisions."
  url: https://pinishv.com/articles/the-pipeline-is-becoming-an-agent/
project: steward
---

[Pini Shvartsman’s Aug 31 essay](https://pinishv.com/articles/the-pipeline-is-becoming-an-agent/) (part six of *Rethinking the SDLC*) names the verification tax continuous factories hit when generation outruns a dumb suite. Classic CI assumed a human already understood the change; the pipeline only mechanically confirmed. At agent volume that assumption dies three ways: fixed cost-per-change meets unbounded PR count (so teams quietly weaken suites to drain the queue); red builds become noise and get muted via retry / quarantine / `continue-on-error`; agents re-roll failures instead of diagnosing them, turning the pipeline into a green slot machine.

The constructive stack is four capabilities in order: **comprehend** the change (modules, contracts, IAM, blast radius, intent-vs-diff); **choose** a verification strategy by risk class (four-minute Class A vs forty-minute Class C with mutation + traffic replay); **investigate** failures into findings (flaky vs code vs env vs upstream) while banning blind retry and treating quarantine as a reviewed change with an owner and expiry; **evidence** — stop returning yes/no and emit a package of what was claimed, run, still unverified, and what a human must decide. Determinism moves to *executing* the chosen strategy; strategy choice stays auditable. Escalation is always up when unsure. The pipeline never approves its own consequential deploys — it makes the human decision ten seconds and fully briefed.

## Why it matters for code review

Always-on factories that only ask “did the night’s agents get green?” are measuring the wrong gate. Pinishv’s useful receipt for harnessed throughput: continuous verification is how overnight momentum stays mergeable under volume — risk-classed suites, diagnosed reds, and evidence packages reviewers can rule on instead of skimming agent diffs. FOMO for idle agents is wasted if daytime heroes still burn the same twenty-five minutes on typos and migrations; bursts still win for setting the Class C policy and the halt, while the harness owns comprehension, strategy, investigation, and the paper trail.
