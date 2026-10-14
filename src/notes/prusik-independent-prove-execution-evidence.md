---
title: "Prusik: prove execution evidence — exit 0 with zero tests is NOT PROVEN"
description: "getprusik/prusik: independent verify outside the agent — prove parses runner output (executed ≠ skipped), prove-red requires acceptance tests fail without the change; 1,300+ tests, 43 field findings verified-closed."
date: 2026-07-10
kind: field-note
source:
  title: "Prusik — Deterministic, evidence-based build harness for autonomous coding agents"
  url: https://github.com/getprusik/prusik
project: steward
---

[Prusik](https://github.com/getprusik/prusik) (Apache-2.0; repo from Jul 10) starts from a blunt premise: an agent’s report can never be evidence for its own work. Agents write faster than humans can review, and they fabricate green — all-skip suites that exit 0, tests bent to match the bug, changes outside the ask. Prusik sits **outside** the agent and reads the tools’ own output: **proof, not opinion.**

The thirty-second receipt is `prusik prove -- pytest -q`. A suite that reports `2 skipped` with exit 0 is waved through by CI and by the agent; Prusik returns **NOT PROVEN** (rc=1) because executed count (passed+failed) is zero. Verdicts are a pure function of exit code and parsed runner output — no model in the loop. Optional `--min N`, JSON, and a composite GitHub Action post the verdict as a PR comment. Climb further only if you want: `scan` for static detectors, `init` for a Claude Code phase-gated harness (writable-path enforcement, single-writer lease on the shared tree, adversarial critics, append-only ledger), `uninstall` for manifest-exact removal.

Load-bearing gates for continuous factories: **`prove_red`** — acceptance tests must FAIL without the change, so a verify that was green all along is rejected as vacuous; findings filed with `prusik feedback` close only when verify runs green **in your repo**, and a later regression **auto-reopens** the ticket (no stored status flag to drift). Field record claimed: **43** design-partner findings filed, **43** verified-closed, zero open; engine backed by **1,300+** tests including **59** regression tests harvested from real adopter defects. Honest limits: Claude Code adapter today; deep runner parsing for pytest/vitest (+ typed lint tools); other runners are unparseable → unproven → block.

## Why it matters for code review

Overnight FOMO that nothing ran is the wrong fear if what ran was a skip-marked green. Continuous harnessed momentum compounds when “done” is captured tool output — tests executed, prove-red baselines held, findings that reopen themselves — not a persuasive summary in the chat. Review always-on PRs for Prusik-shaped contracts: independent prove before merge, vacuous greens rejected, ledger you can hand an auditor. Pair with [DoneGate’s fail-closed completion](/posts/donegate-exit-zero-is-not-done/) when exit code 0 is still not completion, and with [Roborev’s commit review loop](/posts/roborev-continuous-commit-review-agent-loop/) when review has to keep pace with agent commit rate.
