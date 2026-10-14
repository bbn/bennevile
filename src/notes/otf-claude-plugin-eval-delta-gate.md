---
title: "Claude plugin eval: gate skills on Δ before you merge"
description: "Sep 14 OTF: Claude Code ≥2.1.269 runs WITH vs W/OUT plugin evals; CI --threshold on contribution lift so skill merges stop being demo folklore."
date: 2026-09-14
kind: field-note
source:
  title: "Claude Code plugin eval: gate skills on delta before you merge"
  url: https://otf-kit.dev/blog/claude-code-plugin-eval-ci
project: steward
---

OTF’s Sep 14 note is a small, sharp tortoise receipt for *self-improving* factories: Claude Code ≥ **2.1.269** ships `claude plugin eval`, which runs your suite with the plugin loaded and again without it, then reports **WITH**, **W/OUT**, and **Δ** — the lift the skill actually contributed. Cases live under `evals/` next to the plugin manifest; graders include regex, `tool_used`, `tool_order`, `file_exists`, `llm`, and `baseline`. Defaults: three runs per arm because one agent run is noise. CI shape is explicit — `--trust-plugin`, pinned `--model` / `--judge-model`, `--threshold`, `--max-cost-usd`, `--no-publish` — exit `0` only when every case clears the bar.

The thesis-killer for hare-style skill shipping is WITH alone. A case can score 1.00 with the plugin loaded and still be useless if Claude already solves the prompt without it; **Δ ≈ 0** means you merged folklore. Common first finding: Δ near zero with a failing `tool_used: Skill` grader — the model never chose your skill on natural phrasing, so fix the skill `description` and re-run. Skill-fired graders are indicators, not free Δ inflation (excluded from scored totals in two-arm mode). Cheap graders are free transcript/file checks; `llm` / `baseline` judges cost money. Treat mid-suite rate limits as invalid scores, not regressions.

## Why it matters for code review

Overnight factories compound only if the *harness itself* has a merge gate. Plugin/skill PRs are harness changes — the same class of risk as shipping a new review bot or stop-hook. Requiring positive Δ vs a no-plugin baseline is Cherny’s higher bar applied to the instruction layer: continuous motion of the agent kit, continuously measured, instead of “it looked good in one chat.” If your always-on stack keeps growing CLAUDE.md and skills without ablation, you are optimizing for session heroics and calling it a factory.
