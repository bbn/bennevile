---
title: "State of harness engineering 2026: most teams write rules; almost nobody enforces them"
description: "Sep 24 Marmelab audit of 246 repos + 57 pubs: same model 68%→88% across harnesses; 60% of big harnesses untested; prose security rules ~4–16% enforced; Vercel tool-strip and OpenAI merge-throughput caveats."
date: 2026-09-24
kind: field-note
source:
  title: "The State Of AI Harness Engineering 2026"
  url: https://marmelab.com/blog/2026/09/24/the-state-of-ai-harness-engineering-2026.html
project: steward
---

François Zaninotto’s Sep 24 survey is the densest public inventory yet of what “harness engineering” actually looks like in the wild: **246** software-dev harness repos audited, **57** publications read, then a brutal filter down to **11** harnesses that test themselves, iterate, and stay alive. The opening receipt is the one worth pinning: someone ran the **same model** through **eight harnesses** on the **same 25 tasks** — success moved from **68% to 88%**. The model was held constant; the control plane was not.

The field’s habit, by the numbers, is instructions without enforcement. Across 145 large non-AI open-source projects, **63%** ship an agent instruction file, but only **four** declare a subagent and the whole set carries **14 hooks** total. Of 391 repos scanned, only **12** commit a single Claude `deny` rule and **22** declare a `PreToolUse` veto. Across 481 public `CLAUDE.md` files, researchers found roughly **4–16%** of written security rules backed by a real control. Of 97 harnesses big enough to test, **60%** have neither a test nor an eval. AGENTS.md is winning the file war (189 roots vs 155 CLAUDE.md, many of the latter redirects), and **25%** of harness-touching commits since Jan 2025 are explicitly AI-signed — a floor.

What the survivors do instead is actionable. **Test and eval the harness** — hooks need both “must block” and “must allow” cases so the factory does not drift toward strangling the agent. **Shrink to the minimum** — build in reaction to observed failures; ETH Zurich’s context-file study (138 tasks) found machine-generated context *lowered* success vs nothing while burning 20%+ more inference. **Replace prose with scripts** — regex guards catch `rm` permutations an LLM will miss. **Let the agent run the app** (browser, logs, per-worktree instances) and convert surviving checks into non-LLM smoke tests. **Measure real sessions** (only 5 of 391 repos do). **Garden the harness** — expiry conditions, decision records, doc-gardening agents — because controls that compensated for last quarter’s model are pure cost on this quarter’s.

The “what doesn’t work” section productively complicates the continuous-factory story: one ablation saw a second reviewer agent **drop** success ~8 points; Microsoft’s Azure ops agent failed almost always past **four** handoffs; writing permission rules up front blocked **20.1 points fewer** bad actions than approving action-by-action; and OpenAI’s high-throughput stance (few mandatory checks, short-lived PRs, re-run flakes) is explicitly labelled irresponsible in low-throughput shops. Looping works; throwing the context away each time is still under-evidenced.

## Why it matters for code review

Always-on factories do not fail because the model forgot how to code overnight — they fail because the harness is a graveyard of unenforced markdown. Review the control plane the way you review a merge queue: which rules are scripts, which hooks have double-sided tests, which evals prove a change helped, and which “reviewer agent” actually moves merge quality. Steady verified momentum compounds past peak-session heroics only when those answers are receipts, not vibes — and FOMO for more overnight tokens is wasted if the night has no enforceable gate.
