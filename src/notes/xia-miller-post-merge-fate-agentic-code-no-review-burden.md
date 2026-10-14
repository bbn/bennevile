---
title: "Agentic code that merges still costs more to fix, and skipping review makes it worse"
description: "Jul 10 Xia and Miller: a year of commits across 182 repos shows agent-written lines get corrective fixes at a 49% higher rate than human lines, a rising agentic share predicts more human bug-fixing the next month, and projects that merge more without review carry a heavier agentic maintenance load."
date: 2026-07-10
kind: paper
source:
  title: "Do These Violent Delights Have Violent Ends? Measuring the Post-Merge Fate of Agentic Code"
  url: https://arxiv.org/abs/2607.09902
project: steward
---

Most evidence about agent PRs stops at the merge button: acceptance rates, review rounds, time to merge. Chunqiu Steven Xia (UIUC) and Courtney Miller (George Washington University) follow the code after it lands. They took every commit merged in **182 open-source repositories with sustained agent use** from May 2025 to May 2026, tracked each added line until a later commit changed or removed it, classified why that later commit happened, and scanned every commit with Semgrep and OSV-Scanner.

## What they found

- **Overall churn looks the same.** Agent lines are not significantly more likely to be changed later than human lines (hazard ratio 1.11, confidence interval 0.85 to 1.45). That average hides wide swings between projects.
- **The kind of follow-up work differs.** Agent lines get corrective maintenance at a **49% higher rate**, driven by bug fixes (51% higher). By 180 days, 4.0% of agent lines had been changed by a bug-fixing commit, against 2.7% of human lines.
- **More security findings at merge.** Agent commits introduce high-severity Semgrep findings at 1.51 times the human rate per source line, and dependency vulnerabilities at 1.10 times.
- **The cost lands on people too.** A 10-point rise in a repo's agent-written share is associated with about 8.6% higher odds of human bug-fix commits the following month. Agents perform close to half of the bug fixes on agent lines; humans do the rest.
- **Skipping review is the clearest risk factor.** Of six project traits tested, only the share of PRs merged with no review was significant: each 10-point increase goes with roughly a 6% heavier agentic maintenance burden.

## Why it matters for code review

This productively complicates the case for always-on agent pipelines. A factory that keeps merging around the clock looks great on merged-PR counts, and this paper says that count can't see the bill: corrective work that shows up weeks later and is partly paid by humans. The authors go further than their data and argue that neither scaling human review nor automating it closes the gap, so the tools themselves must produce code that survives. You don't have to accept that to take the practical point. If your harness runs overnight, measure what happens to its output after merge, as [the provenance-tagged revert rates in steezr's tiers](/posts/steezr-risk-tier-auto-merge-provenance-revert-rate/) and [Kraishan's per-vendor post-merge comparison](/posts/kraishan-not-all-agents-equal-post-merge/) do, not just how much of it merged.
