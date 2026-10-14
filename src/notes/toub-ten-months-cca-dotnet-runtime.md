---
title: "Ten months of CCA in dotnet/runtime: harness beats heroics"
description: "Toub’s receipts: 878 CCA PRs, merge 67.9% vs 87.1% human; instructions 38%→69%; phone-flight FOMO creates review debt; fully autonomous 55.1% vs 86.2% with human commits."
date: 2026-03-23
kind: field-note
source:
  title: "Ten Months with Copilot Coding Agent in dotnet/runtime"
  url: https://devblogs.microsoft.com/dotnet/ten-months-with-cca-in-dotnet-runtime/
project: steward
---

Stephen Toub’s March 23 write-up is the longest public receipt we have of a cloud coding agent under sustained load on a critical brownfield codebase — not a weekend demo. From May 2025 through March 22 2026: **878 CCA PRs** in `dotnet/runtime` (535 merged, ~95k lines added / 31k removed). Success rate **67.9%** vs **87.1%** for Microsoft-human PRs and **79.7%** community. Revert rate on merged CCA work is not a red flag (0.6% vs 0.8% non-CCA). Across seven .NET repos: 2,963 CCA PRs, 1,885 merged (~69%).

The tortoise lesson is in the *trajectory*, not the headline. May 2025 success was **41.7%** — no `copilot-instructions.md`, firewall blocks on NuGet feeds, agent writing code it could not build. After setup + instructions: ~**69%**. Pre-setup PRs **38.1%** vs post-setup **69%**. Same model family; different harness. Monthly rates then held ~71% through early 2026 as they kept encoding failures into agent-specific instruction files and skills (build subsets, testing conventions, InternalsVisibleTo bans, EgorBot benchmarking skill). Toub’s one-line takeaway: **preparation matters more than the model**.

Two FOMO anecdotes that complicate “always-on = free throughput.” Birthday-party Saturday: >20 issues assigned from a phone; evening review of 22 PRs — some excellent, some closed as “shouldn’t change,” one 20+ commit BCrypt mess that taught architectural judgment limits. Redmond flight: nine PRs from a phone at altitude (seven merged). Toub names the dark side: one person can open **5–9 hours of careful review work** in a few hours; a week later some PRs still waited. Generation outruns review; options are slow generation, speed review, or cut quality — only the middle is acceptable for runtime. Autonomy numbers land the same point: with human commits on the branch, success **86.2%**; without, **55.1%**. Median merged PR still takes ~2 days of review engagement (avg 16.5 comments vs 12.4 human).

Category strata matter for factory design: removal/cleanup **84.7%**, testing **75.6%**, bug fix **69.4%**, performance **54.5%**. Well-scoped mechanical work compounds overnight; judgment-heavy and unvalidated perf claims do not. 16% of CCA PRs were created on weekends; assign-before-bed / wake-to-PR is real — and still gated by human merge ownership.

## Why it matters for code review

This is the tortoise receipt with a review-tax invoice. Steady harnessed throughput (instructions, firewall, skills, task selection) moved merge rate from failure-majority to ~70% — but phone-flight FOMO without matching review capacity manufactures debt. Fully autonomous merge rate is not the factory KPI; verified merge under sustained agent volume is. If your overnight story stops at opening PRs, you bought Toub’s airplane productivity and still owe Cherny’s continuous verification budget.
