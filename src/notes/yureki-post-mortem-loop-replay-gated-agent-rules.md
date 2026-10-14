---
title: "A 24/7 agent kept repeating 38% of its failures. A replay-gated rule loop cut that to 6%."
description: "Oct 2 yureki_lab: an always-on Claude Code system reviewed each morning. Failed runs write a believed-vs-actual incident file, a separate agent distills rules, and a rule enters the playbook only if it fixes a replay that failed without it and breaks nothing else. Capped at 60 rules."
date: 2026-10-02
kind: field-note
source:
  title: "How I Built a Post-Mortem Loop So My AI Coding Agent Stops Repeating Mistakes"
  url: https://dev.to/yureki_lab/how-i-built-a-post-mortem-loop-so-my-ai-coding-agent-stops-repeating-mistakes-479i
project: steward
---

The author runs a 24/7 autonomous dev system on Claude Code: an orchestrator picks tasks, parallel agents work in isolated worktrees, a self-healing agent retries broken builds, and they review the output in the morning. "Most days I wake up to a few mergeable PRs." Two months in, they classified twelve weeks of failures: **41% genuinely new, 21% flaky infrastructure, 38% something already seen before**. Each repeat cost about 25 minutes of review and cleanup. There was already a 900-line lessons-learned document; the agent either never read it or treated it as noise. "I was writing lessons for a reader that didn't exist."

The fix had to run without a human, so it is three stages, each owned by a different agent:

- **Capture.** Every failed run, including a human rejection in review, fills a small template before its context is discarded. The fields that matter are `believed` and `actual`: "Tests are run from repo root" versus "each package has its own pytest.ini." A stack trace says what broke; the delta says why.
- **Distill.** A separate agent reads incidents in batches and proposes rules of at most two sentences, each citing at least two incidents and shipping with a replay scenario. When the failing agent wrote its own rule, the rules came out "defensive and over-specific."
- **Admit.** The rule is replayed with and without the candidate. The run without it must fail and the run with it must pass, then the whole replay suite (about 30 scenarios by month three) must still pass. About a quarter of candidates failed the first check. The playbook is capped at 60 rules, and the rule the agent has cited least recently is retired when a new one arrives.

After three months, repeat failures fell from **38% to 6%** of failures, with 44 rules admitted, 19 rejected and 7 retired. Total failed runs barely moved, from 71 to 64. "New failures are information, repeat failures are waste."

## Why it matters for code review

For an always-on system, the morning reviewer's real cost is the same mistake coming back, and this turns each review rejection into an input that has to prove itself before it changes agent behavior. The gate is what keeps it from becoming another unread document: no replay, no rule. Two honest notes. Replay cost per admitted rule rose from $1.10 to $3.40 as the suite grew, and about a third of admitted rules turned out to patch ambiguity in the author's own task specs. A commenter adds that checking only the exit code let in a rule whose "before" run crashed for an unrelated reason; they now assert the incident's exact failure signature. Pair with [Robson on Lauren Tan changing lint rules and skills when agents repeat a shortcut](/posts/robson-pstack-gardener-sampling-merged-work/) and [Goossaert's mechanical gate between stages](/posts/goossaert-backlog-loop-mechanical-gate-dark-factory-slop/).
