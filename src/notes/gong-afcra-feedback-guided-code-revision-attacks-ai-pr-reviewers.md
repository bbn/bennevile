---
title: "AFCRA: when an AI reviewer explains what's wrong, attackers revise the code until it approves — and keep a working exploit"
description: "Oct 4, Gong, Zhang, Jahangirova and Wang (KCL / Bristol) show feedback-guided code revision beats text-only PR attacks on AI reviewers: 20.8% success vs Sonnet 5 and 15.7% vs GPT-5.5 across 159 CVE PRs, rising to 44% when the attacker can also edit PR text and replies."
date: 2026-10-04
kind: paper
source:
  title: "Adaptive Code Revision Attacks on AI Pull Request Reviewers (arXiv 2610.05399)"
  url: https://arxiv.org/abs/2610.05399
project: steward
---

[Jingzhi Gong, Jie M. Zhang, Gunel Jahangirova and Meng Wang](https://arxiv.org/abs/2610.05399) (King's College London / University of Bristol) study what continuous AI pull-request review hands an attacker. Prior PR attacks (SEVRA, CBI, ALIBI) keep the vulnerable code fixed and argue for approval with persuasive descriptions or comments. **AFCRA** (Adaptive Feedback-guided Code Revision Attack) does the opposite: it reads the reviewer's change request, repairs the reported problem, and checks that an executable exploit still works on the revised code.

They build **AFCRA-Bench** from **159** disclosed CVEs across 132 repositories and eight languages, each with a vulnerable/fixed pair and a proof-of-concept exploit that must still fire on success. Over five review rounds:

- Against Claude Code / **Sonnet 5**, AFCRA approved-and-still-exploitable on **33/159 (20.8%)** — about **2.5×** the strongest text/comment baseline (CBI at 8.2%).
- Against Codex / **GPT-5.5**, **25/159 (15.7%)** — about **12.5×** the baselines (each at 1.3%).
- With code edits plus PR text and thread replies (**Full-access**), success jumps to **70/159 (44.0%)**.
- Mean first success is round **2.3**; most Full-access wins arrive by round three.

The motivating `send` path-traversal case is the pattern: text-only attacks keep failing because the bad check remains; AFCRA adds the requested directory-boundary check, the reviewer runs HTTP tests that look clean, and a symlink escape still reads files outside the served root. Git blame-style review of surviving findings is not the point here — the reviewer honestly clears the comment it wrote while a different exploit path stays open.

On the 33 Sonnet successes, security-focused re-review helps but is not free: root-cause checks catch **23/33**, recheck-all **22/33**, static-scan **20/33**, while a supplied-PoC upper bound catches **29/33**. All six reviewer configs approved the historical developer fixes for those cases (zero false rejections on that repair set). The authors' practical warning for operators of always-on review agents: full feedback (verdict + location + explanation) raises genuine repair rates and also raises attacker adaptation — so once a security-sensitive issue appears, withhold the detailed map an adversary would use to keep a different hole open.

## Why it matters for code review

Continuous agent-to-agent review is exactly the loop factories want overnight: author revises, reviewer re-checks, merge when green. This paper is the adversarial receipt for that loop. A harness that treats "the last finding is fixed" as done can approve a PR that still fails an independent exploit oracle. Pair with [Anthropic's round-cap after a 50+ overnight agent-vs-agent spiral](/posts/anthropic-claude-code-team-risk-tiered-review-reverts-down/) and [Orbi's Ralph loop that passed 28 tests before a fresh review found a spec violation](/posts/orbi-ralph-loop-28-tests-passed-review-found-spec-violation/): the scarce thing is not another review round, it is a check the author cannot satisfy by repairing only what the previous comment named.
