---
title: "GuildBuild's software factory: the fix merged, and the next run still failed 27 of 29"
description: "Oct 10, GuildBuild on running a 26-role agent factory on Codex with outside investigators on Claude Code. Most failures were not in the agents' code but in the evidence around it: a check ran on a deployed revision that never had the fix, a skip counted as success, and a copied factory still loaded old instructions."
date: 2026-10-10
kind: field-note
source:
  title: "Implementation, traps and failures of the so-called AI software factory"
  url: https://www.guildbuild.ca/insights/ai-software-factory-traps-and-failures
project: steward
---

GuildBuild, a Toronto data and AI shop, runs an agent factory on OpenAI's Codex with 26 named roles, plus investigators on Claude Code that sit outside its chain of command and can read run records but cannot push, merge or write data. Review verdicts are bound to a hash of the exact bytes reviewed, review stops after two rounds, and merging, releasing and accepting each have a separate owner and receipt. Their summary of what went wrong: **mostly not the code, but the evidence around it.**

The production case is small and instructive. In late September a scheduled job ran 29 tasks and the scheduler marked 26 as failed. An outside investigator read each task's log and found four causes, not one: 23 tasks had stopped on purpose because a source refused access, and those deliberate stops shared an exit code with real failures. The fix gave them their own "skipped" code. **The next scheduled run failed 27 of 29, because the deployed revision held neither commit**, so it was thrown out as evidence. The first count after deploy mixed runs on old and new code. Only a run on a named deployed revision showed 23 skipped, 3 succeeded and 3 failed. Even then the team refused to call 23 skips 23 successes: the dashboard became honest, but the data was still incomplete. A second case had two reviewed PRs merge after a run's image was already pinned.

A pre-migration audit of a rebuilt copy found more of the same. All 26 role profiles still pointed at the old folder, and an unchanged hook started from the new location loaded the old instructions. All 27 settings files parsed, but one profile lacked a deny rule the other 25 carried. Six of seven compared files differed between the tested source and what the scheduler mounted. About 157 MB of assignments, checkpoints and receipts were ignored by Git. A health check listed workflows but never asked whether the scheduler was alive.

Of the eight design traps, two matter most for review. Every serial gate is a queue, so adding specialist roles adds waiting. And two reviewers are not two opinions, because model errors correlate; the fix is giving the reviewer the original request, the exact candidate and the raw evidence, never the builder's summary, and seeding known defects to count what review misses. The authors are clear about limits: one factory, one owner, design judgments rather than a matched speed or cost trial against a plain coding agent.

## Why it matters for code review

A factory that runs all day only compounds if each check names the revision it actually observed. Approval of a diff says nothing about what is running, and a merge count says nothing about accepted outcomes. GuildBuild's suggested unit is cost per accepted outcome, priced across every attempt including failures. Compare [Chadwick on shipped meaning deployed](/posts/chadwick-farhorizons-mean-gauntlet-shipped-means-deployed/), [Apushkinsky on correlated AI review passes](/posts/apushkinsky-review-credit-correlated-ai-passes/), and [StrongDM's holdout scenarios via Willison](/posts/willison-strongdm-holdout-scenario-factory/).
