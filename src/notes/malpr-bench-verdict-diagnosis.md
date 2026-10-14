---
title: "Blocking is not diagnosis: the Verdict–Diagnosis gap"
description: "Aug 26 paper: MalPR-Bench scores attributable PR security review; CodeRabbit blocks almost as often as PRGuard but identifies fewer target vulnerabilities — especially when evidence sits outside the touched files."
date: 2026-08-26
kind: paper
source:
  title: "From Verdict to Diagnosis: Attributable Security Review of Pull Requests"
  url: https://arxiv.org/abs/2608.25730
project: steward
---

Chen, Wang, Zhang, Xu, Sadeghi, Picek, and Wu start from a measurement error factories are quietly baking into their review scoreboards: automated reviewers get credit for *blocking* a malicious PR even when the finding that triggered the block is unrelated to the vulnerability that makes the change unsafe. Fix the reported issue and the target defect can still ship. They name that mismatch the **Verdict–Diagnosis (VD) gap**.

MalPR-Bench is the mechanism-grounded receipt — 89 malicious PRs and 50 paired benign controls across 44 repositories and eight language families. Each malicious case carries a pre-committed rubric: target vulnerability, accepted mechanism descriptions, required repository evidence, and an explicit rule that off-target findings get no credit. Reviews are scored separately for verdict correctness, target-vulnerability identification, and evidence validation; an *attributable* block needs all three. PRGuard is their attributable reviewer: candidate vulnerabilities first, then deterministic, non-executing tools plus bounded retrieval to validate premises against repository evidence.

On 31 held-out malicious PRs with common coverage, PRGuard and CodeRabbit post similar blocking totals (22/31 vs 24/31), but PRGuard identifies 22 target vulnerabilities versus 16 for CodeRabbit (1.38×). On 14 absence-type cases (missing guard / ownership check), both block 9 while PRGuard finds 9 targets versus 3. The sharpest cut: CodeRabbit hits 16/24 targets when required evidence sits inside touched files and **0/7** when validation needs evidence outside them. In the wild, PRGuard also surfaces twelve previously undisclosed, PoC-backed vulnerabilities across five projects — both systems block 10/12 of those discovery PRs, but attributable blocks land at 10/12 vs 4/12.

## Why it matters for code review

“Review bot blocked it” is not the same metric as “review bot named the real defect with evidence.” If your factory treats block-rate as security value, you will overstate the gate and underweight the diagnosis that actually directs remediation. Score attributable review — target ID plus evidence — not verdict alone, and design independent reviewers that can leave the diff’s touched-file bubble when the vulnerability claim requires it.
