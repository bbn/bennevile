---
title: "Mouse on GLM Flash: 77% FrontierHarness at $0.29/pass"
description: "Sep 14: same Mouse harness on GLM-5.3-Flash hits 23/30 ($0.29/pass, 97% cache) — within 1–2 of Claude Code/ZCode on full GLM at ~1/7–1/9 the $ per pass."
date: 2026-09-14
kind: field-note
source:
  title: "Mouse on GLM-5.3-Flash"
  url: https://mouse.dev/blog/mouse-on-glm-5-3-flash/
project: steward
---

Pete’s Sep 14 Mouse note is a cost-shaped tortoise receipt. Community side-by-sides ran Z.ai’s GLM-5.3 / Flash through five coding harnesses on the same 30 FrontierHarness tasks. Mouse on **GLM-5.3-Flash** alone: **23/30 (77%)**, **$0.29 per pass**, **$6.72** for the board, **96.7%** input tokens cached, median pass **4:11**. On Flash it sits inside ZCode’s three-run band (24 / 21 / 23); ZCode Flash is cheaper still (~$0.15–0.16/pass). Against full GLM-5.3, Claude Code and ZCode clear **24–25/30** at **~$2–2.60/pass** — Mouse+Flash is within one or two tasks at roughly a seventh to a ninth the dollars per pass.

Same harness checkpoint as their Kimi K3 run (`315e2b8` on OpenCode 1.18.27); only the model swapped to Fireworks-served Flash. Versus that K3 baseline (25/30 at $2.79/pass), Flash dropped two DeepSWE passes and added none. DeepSWE ate most of the bill ($6.10 of $6.72). They flag the comparison honestly: one Flash run, other rows from different providers/runtimes — a side-by-side, not a controlled ranking. Eval commit pinned (`e837a70`); Ubuntu mirror flakes before the model ran were re-run, not counted as failures.

## Why it matters for code review

Peak-session Claude mastery is the hare: burn frontier tokens while you watch. Continuous factories need the other curve — a harness that keeps verified motion on a cheap model overnight without lighting the budget. If Flash + verify loop nearly matches full-GLM Claude Code on the same board, the scarce asset is the harness (completion gates, audit receipts, cache discipline), not which hero model you babysit. Review capacity under volume follows: more mergeable passes per dollar means less morning FOMO that agents sat idle because Max rate-limits ate the night.
