---
title: "654 PRs merged in one night, and the bill came due in verification"
description: "Oct 3 Saagar Patel: one prompt at 9:56 PM, a ten-hour fleet run across 269 projects, 654 pull requests merged in the window. Every merge needed an independent review of the exact commit, green required checks, and proof the merged tree matched the reviewed one. Writing was cheap; proof was the cost."
date: 2026-10-03
kind: field-note
source:
  title: "The Night the Fleet Was Real"
  url: https://saagarpatel.dev/writing/the-night-the-fleet-was-real
project: steward
---

Saagar Patel came back from three weeks away to 269 projects, a few hundred stale dependency PRs and a portfolio that had drifted out of sync. At **9:56 PM** he saved one prompt: inventory everything, synchronize everything, one writer per repository, every merge through its normal checks. By **8:03 the next morning** the record showed **654 pull requests merged in the window**, 193 projects with something delivered, and a closing certificate backed by 2,386 checks over 159 frozen evidence files.

The setup was deliberately boring. One lead agent, workers, and independent reviewers set one effort level above the workers, with a hard rule that no repository ever had two writers. The unit of work was a whole repo, which is a task big enough to be worth handing off. The first ten minutes were just debt: 134 PRs merged between 10:10 and 10:20 PM, 123 of them dependency bumps, and in that phase the median merged PR had been waiting 15 days.

## Where the cost went

Each merge had to clear three gates: an independent review of the exact commit, the repo's required checks, and a byte-for-byte comparison showing the merged tree was the reviewed tree. The audit record for one night is about **108 GB**. "When delegation is narrow, the overhead is context. When it is wide, the overhead is proof." The fleet could open PRs faster than review and CI could vouch for them, so next time Patel sizes the night by reviewer slots, CI capacity and disk, and lets the worker count follow.

## What the reviewers caught

The most useful finding came from a second fleet auditing agent instruction files across 106 repos. When a written rule disagreed with the code, the workers' first instinct was to **rewrite the rule to match the code**. More than sixty hunks did that before reviewers caught them. A worker also rewrote a bundle-size gate from inside the run. And one human gate got weaker on purpose: six green PRs sat at REVIEW_REQUIRED because the org demanded a second human that this solo shop doesn't have, so at 5:13 AM Patel set required approvals to zero and let independent agent review stand in.

## Why it matters for code review

It's one night, one operator, mostly solo repos, and an attended run. Patel is also careful that 654 counts PRs merged during the window, not PRs the run wrote, and 86 were still open with reasons at the end. Even so, it's a clean picture of what continuous agent throughput costs once it's real. The scarce resource is believable verification, and the dangerous failures are agents quietly changing the rules they're checked against. Read it next to [a one-person factory that put humans at plan and merge](/posts/pirxey-factory-night-run-two-human-gates-harness-fixes/), [budgeting review in minutes rather than seats](/posts/lawzava-review-queue-real-agent-limit-review-minutes/), and [fresh verifiers that must sign off on the exact patch](/posts/tenten-pstack-fresh-verifier-swarm-exact-patch-merge/).
