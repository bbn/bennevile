---
title: "Codesteward: STEWARD.md from the base branch, graph-grounded specialists, deterministic judge"
description: "Codesteward agentic review: policy loads only from base branch; specialists + verifier + non-model judge; degraded graph fails closed; silence returns a machine-readable why-empty rationale."
date: 2026-09-29
kind: field-note
source:
  title: "Codesteward - Agentic Code Review on a Structural Code Graph"
  url: https://codesteward.ai/
project: steward
---

[Codesteward](https://codesteward.ai/) is a self-hosted agentic review stack that refuses to treat a diff skim as a review. Policy (`STEWARD.md` and path rules) loads **only from the base branch** — never the PR head — so an author cannot relax the gate inside the change under judgment. A staged pipeline runs specialists (correctness, security, performance, testing, rules, requirements) against a structural code graph of call chains, auth paths, and dependencies; a verifier challenges each candidate finding; and a **deterministic judge** (severity floor, nit cap, fingerprint dedupe, convergence on prior-closed findings) decides what reaches the PR — not another model opinion.

Two surfaces share one finding schema: a **Gate** that posts inline comments and a pass/fail check run on PR open/push/mention, and **Stewardship** that batches long-lived branches by package/path with a durable findings lifecycle (open / fixed / dismissed / reopened). Risk tiers from trivial to thorough decide which specialists run so a typo fix does not buy a security pass. Graph edges ride with findings as evidence; line-level bugs are never asserted from topology alone. When policy requires structural evidence and the graph is unavailable, the check **fails closed**. A clean review returns a machine-readable why-empty rationale — empty diff, all units clean, all candidates dropped, context missing — so silence is never mistaken for safety. Org/repo/PR memories from 👍/👎 and dismissals bind twice: in the specialist prompt and again at the judge.

## Why it matters for code review

Agent factories that mint PRs overnight raise the verification tax; Codesteward’s answer is policy outside the author’s commit, graph-grounded evidence, and a non-LLM merge judge. Review agent-review integrations for base-branch-only policy, fail-closed degraded graphs, and explicit empty-rationale artifacts — not a green check that means “the bot said nothing.” Continuous verified momentum compounds when FOMO for more autonomous review volume funds attributable findings and quiet learning loops rather than another bursty Claude Code rubber-stamp pass.
