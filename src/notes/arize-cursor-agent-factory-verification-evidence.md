---
title: "Cursor’s agent factory: merge is a policy over evidence, not a vibes check"
description: "Jul 20 Verdi/Gilhuly (Arize Observe): video demos as trust units; ~30–40% ecosystem PRs merge without human review; risk-scored auto-merge; Bugbot learns from corrections; self-driving PRs."
date: 2026-07-20
kind: field-note
source:
  title: "Inside Cursor’s agent factory: how it verifies AI-written code"
  url: https://arize.com/blog/inside-cursors-agent-factory-how-it-verifies-ai-written-code/
project: steward
---

Sara Verdi’s Jul 20 write-up of John Gilhuly’s Arize Observe 2026 talk is the clearest public map of Cursor’s internal answer to agent volume: **verification is an architecture**, not a prompt. The turning-point anecdote is small and sharp — an unsupervised agent added pinned chats, booted the UI, exercised the path, and returned a **video demo**. Reviewers could inspect behavior before the diff. Gilhuly estimated roughly **30–40% of PRs in Cursor’s ecosystem** now merge without human review, which makes the quality of that evidence load-bearing.

The sketched merge policy is collect → score → route: gather CI, security review, and demo artifacts; risk-score the change; **auto-merge only when evidence passes and risk is under threshold**; otherwise route to the owner who can judge it. Auto-merge threshold is an operating parameter tuned on escaped defects, rollbacks, overrides, and time-to-merge — not a one-time virtue signal. Agents run in developer-like environments so they can produce behavioral artifacts (video, screenshots, test runs); environment fidelity has a comic failure mode (a “be a real engineer” skill that installed Spotify) that marks the real design boundary between useful context and incidental personal setup. **Bugbot** treats human corrections as future rules and eval cases — review quality as a maintained product surface with precision/recall/override metrics, not a chat sidebar. ~**150** monorepo skills are pruned for signal; some workflows (build-time hill-climbs lasting hours to ~**five days**) show the extreme end of continuous autonomy when the objective is measurable and stop conditions are explicit. Daily surfaces include self-driving CI repair PRs, security scans that found “dramatically more” vulnerabilities once agents owned more of the review surface, coverage and dependency maintenance, and doc checks.

Adoption path they recommend: one bounded workflow; an evidence contract before any automated merge; reproducible environments; risk routing that graduates from recommend → auto-merge; corrections → regression cases; failed evals that launch diagnosis with trace context.

## Why it matters for code review

Continuous harnessed throughput only compounds when the factory returns evidence humans (or a risk policy) can trust — demos and gates, not narrator confidence. Peak-session mastery still wins on high-blast-radius judgment; the Cursor shape says the rest of the volume should be policy over artifacts, with every miss strengthening the next review agent rather than rotting as tribal lore in Slack.
