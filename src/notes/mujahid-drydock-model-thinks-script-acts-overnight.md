---
title: "Drydock: the model thinks, a script acts, and only tests that fail on main count as proof"
description: "Oct 15 Mujahid (ForkTrip) on leaving Claude Code agents running unattended: read-only by default, a deny list for every GitHub write, a parsed verdict line or nothing happens, a $25 daily cap, and a missing third answer, BLOCKED, for runs that could not judge anything."
date: 2026-10-15
kind: field-note
source:
  title: "AI Agent Harness: How I Let Agents Write Code While I Sleep (ForkTrip)"
  url: https://forktrip.com/ai-agent-harness-guardrails/
project: steward
---

[Mujahid](https://forktrip.com/ai-agent-harness-guardrails/) runs three sets of unattended agents: **Drydock**, the development agents on his Mac; **Hermes**, personal assistants on an Oracle Cloud server; and a set at work. All three follow one rule: **the model thinks and a script acts.**

Every agent is a headless Claude Code call made through one function. By default it gets **read tools only**. The feature builder is the one exception, and it can edit only inside a throwaway copy of the repo. He sets both `--allowedTools` (what he expects) and `--disallowedTools` (what must never happen, even after new tools get added): no file writes, commits, pushes, PR or issue comments, raw network commands or deletes. If an agent thinks a PR needs a comment, it says so in a fixed format and **the script posts it**. Every reply ends in exact lines, a verdict plus findings as one line of JSON. If the lines don't parse, the run failed and nothing gets written. That also takes care of prompt injection: "Untrusted text can change an analysis. It cannot change an action."

Because "a model can say something false in perfect format," the script checks what it can:

- A diff that touches encryption, key-rotation or migration files gets **BLOCK** before any model reads it.
- **A silent seat is not a clean seat.** A clean security verdict needs all three reviewers to have answered.
- **Tests must prove something.** The tester writes tests from the issue, and the script keeps only the ones that **fail on main and pass on the PR**.
- The fixer can change only files a finding names. The run is rejected if it edits a test to make code pass, or if a local check gets worse.

Spending limits live in the script, not the prompt: per-run item caps, timeouts, and a **$25 daily cap** checked before every stage. The first five-stage dry run on a two-file change cost **$12.42**. Nothing writes to GitHub without `--apply`. The script names the branch (always a fix branch, never main), and no agent can merge: "I merge, after I have read the pull request."

The open gap is the useful part. His first real QA run against a PR reported **FAILED on three flows** when the app had only shown a "missing environment variables" screen. The agents couldn't judge anything, and the script still printed a failure. The fix, a third answer **BLOCKED** for "I could not run the test," is queued but not built: "An unclear result should never look like a real failure."

## Why it matters for code review

An agent that works overnight is only worth it if the morning verdicts mean something. Drydock's cheap, deterministic gates (tests that fail on main, every reviewer seat answered, a fixer boxed into named files) are what make each unattended run's output trustworthy enough to merge on one read. The BLOCKED gap is the flip side: a harness that can't tell "broken" from "couldn't check" turns verification noise into fake failures, and someone pays for that in morning review time. Pair with [OvernightAgent's four verify gates](/posts/soulerou-overnightagent-four-gate-verify/), [the DVX overnight shift change and morning packet](/posts/dvx-overnight-build-shift-change-morning-packet/), and [Breckenridge's watcher that decides done, not Claude](/posts/breckenridge-ship-watcher-decides-done-needs-answers/).
