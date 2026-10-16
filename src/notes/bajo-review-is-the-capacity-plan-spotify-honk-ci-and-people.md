---
title: "Review is the capacity plan: when agents write the changes, CI and code owners are the queues that run out"
description: "Fabijan Bajo reads Spotify's QCon London talk on Honk — 1,000 merged PRs in three months became 1,000 in ten days, and review became the bottleneck — as a capacity-planning problem: move verification into existing CI, then plan reviewer throughput like any other queue."
date: 2026-10-15
kind: field-note
source:
  title: "Review Is the Capacity Plan for Coding Agents"
  url: https://fabijanbajo.com/posts/review-is-the-capacity-plan/
project: steward
---

**Fabijan Bajo** builds on Spotify's QCon London talk, where Aleksandar Mitic says Honk, their background coding agent, went from **1,000 merged PRs in three months** to the same number "in 10 days … What is the result of this? It's a bunch of PRs to review. This is becoming the new bottleneck." Bajo's argument: once agents write the changes, the capacity worth planning is CI and human review, and he would size those before worrying about the token bill.

**The first queue is CI.** Honk first built and tested wherever it ran, which broke across the fleet for reasons "nothing to do with the generated code." Jo Kelly-Fenton's fix was to separate the verification runtime from the agent runtime: before opening a PR, the agent pushes a branch, a service runs the real CI build and hands failures back, and only a green build becomes a PR. The catch Bajo flags is that every agent attempt is now load on the runners engineers are waiting on. InfoQ's account of DoorDash's flag cleanup has the same shape: PRs open only after validation passes, with usable PRs for 45 of 50 stale flags.

**The second queue is people**, and Mitic admits Spotify hasn't solved it. Its levers read as a capacity plan: review-time expectations, closing stale PRs, letting a migration's driver approve in some cases, one PR inbox, and auto-merge for low-risk classes such as docs. Standardization helps too: migrations that stalled at 70–80% of the fleet left two ways of doing everything, which made every PR different and slower to review. Even AI reviewers are rationed — Bajo notes Copilot code review for Azure Repos documents five concurrent reviews per organization.

His four metrics: open agent PRs and their age, time to first human review split by author type, agent PRs closed unmerged and why, and CI minutes per merged agent change. He also says where the argument loses: a small team with one repo is likelier stuck on generation quality.

## Why it matters for code review

Steady machine output only compounds if the verification side has capacity for it. Pair with [Donchev on review capacity as production capacity](/posts/donchev-quality-walls-review-capacity-is-production-capacity/) and [Spotify's first Honk write-up, at 1,500 PRs](/posts/spotify-honk-1500-prs/).
