---
title: "Meta, 400K diffs: AI code gets reviewed faster and causes fewer outages, but mostly because of where it lands"
description: "An ESEM 2026 paper from Meta traced AI-suggested code character by character through review and landing across 10K+ developers and 400K diffs. AI code was in 52% of diffs and about 8% of landed bytes. It was associated with roughly 8% shorter review time per unit of log AI fraction, but it lands disproportionately in less central code, test files and larger diffs, so naive with/without comparisons mislead."
date: 2026-10-05
kind: paper
source:
  title: "A Preliminary Analysis of the Impact of AI Assisted/Generated Code on Quality, Centrality and Review Time at Scale (Mockus, Rigby, Stewart, Maddila, Nagappan; ESEM 2026)"
  url: https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ESEM.2026.93
project: steward
---

Audris Mockus, Peter Rigby and colleagues at Meta used Chattributes, a provenance system that tracks every edited character from the IDE through rebases, review and landing, to see which AI-suggested code actually ends up in trunk. The data is about two months of spring 2025 diffs from more than 10K developers and about 400K diffs, none of them bot-generated. The tool studied is CodeCompose, Meta's in-editor completion system, not an agent. AI code was present in 52% of diffs and made up nearly 8% of modified, landed bytes.

The first finding is that AI is not applied evenly. It lands more often in larger diffs, test files and less central code; roughly tripling churn is associated with 34% higher odds of landing AI code, and Hack files with 65% higher odds. Engineers with 3–4 years of tenure had the highest AI landing rates, not juniors. Meta has no policy restricting AI on critical code, so the authors read the lower use in central code as mild, emergent self-regulation, while warning that the centrality signal is small and sensitive to how it is measured.

Only after modeling where AI lands do they look at outcomes. Controlling for centrality, size, complexity, tenure and language, a one-unit increase in log AI-span fraction is associated with about **8% shorter review time**, and central code still takes longer to review regardless. For outages, the AI coefficient corresponds to about a 6% decrease in odds of a SEV, yet AI-heavy diffs are larger and sit in riskier contexts, so their raw SEV rate is not lower. The review model explains only 14% of variance, and the authors call both results associations, partly reflecting where AI is used.

Their own caveat on agents is the important one: the review-time association is tied to line-level completions and may not survive agentic tools that produce large multi-file changes. What they expect to transfer is the method, model what drives AI use before estimating what AI drives, and they argue autonomous agents make that control more important, not less.

## Why it matters for code review

Most claims about AI and review speed compare AI work against non-AI work without asking whether the two sets of changes were alike to begin with. At Meta they were not: AI went to bigger, less central, more test-heavy diffs. Any dashboard that shows agent PRs merging faster, or causing fewer incidents, needs the same controls before anyone acts on it, and landing rate, not acceptance rate, should be the unit. Compare [Faros on unreviewed merges up 76%](/posts/faros-speed-trap-unreviewed-merges-up-76-percent-restarts-up-67/), [the Carnegie Mellon Cursor study's transient velocity burst](/posts/cursor-oss-study-3-5x-velocity-gone-in-two-months-complexity-up-41/), and [Meta's RADAR on automating low-risk review](/posts/meta-radar-automating-low-risk-code-review/).
