---
title: "Greptile's overnight-agents study: agent PRs hold up, but the bugs move"
description: "Greptile mined millions of reviewed PRs and found end-to-end agent PRs rose from 0.86% to 27.6% of merges in fourteen months, with revert, churn and review-cycle numbers roughly matching humans. What changed was which bugs show up."
date: 2026-05-05
kind: field-note
source:
  title: "Rise of the Overnight Agents"
  url: https://www.greptile.com/blog/rise-of-the-overnight-agents
project: steward
---

Greptile co-founder Daksh Gupta went into [Rise of the Overnight Agents](https://www.greptile.com/blog/rise-of-the-overnight-agents) skeptical that fully autonomous agents, the kind that turn a ticket into a PR while their owner sleeps, were doing real work in real codebases. Greptile reviews PRs for about 65,000 organizations, so he tagged PRs with bot authors, `Co-Authored-By` footers, or `codex/` and `cursor/` branch prefixes as a floor for end-to-end agent work. That share went from 0.86% of merged PRs in February 2025 to 27.6% in April 2026.

He then tried four quality measures and, by his own account, was wrong each time. Codex (1.19) and Claude (1.80) had fewer reverts per 1,000 merged PRs than humans (2.72); Cursor's background agents (3.41) and Devin (3.50) had more. Codex and Claude PRs had less seven-day file churn by other authors than human PRs. Most agents drew fewer critical flags per 10,000 lines than humans, and mean review cycles to merge clustered between 2.11 and 2.46 against a human 2.21. Delegation of easy work doesn't explain it away: the same developers' agent PRs ran about 20% larger by median lines changed, and in the 10+ file bucket agent revert rates were 28% lower.

The finding that matters for reviewers is the failure-pattern heatmap. Relative to humans, Cursor's background agents over-index on N+1 queries (3.45x) and broken existing behaviour (2.37x); Claude on missing tenant checks (1.75x) and off-by-one errors (1.64x); Codex on config and env-var bugs (1.35x). Gupta's summary: "The bugs don't disappear, they just move. Whatever review process you've built for human PRs probably wasn't built for those."

The caveats are his own. Greptile can't see line-level survival, can't tell whether an agent's in-house review already cleaned a PR, and suspects the "human" baseline is heavily AI-assisted too. It is also a review vendor's dataset, and every PR in it passed through Greptile.

## Why it matters for code review

If overnight agents now produce more than a quarter of merges at roughly human quality, the case for always-on generation is mostly made; the open question is verification. A review process tuned for human error patterns will check the wrong things on agent PRs, so continuous throughput only compounds if review is retuned per agent for the failure classes each one actually produces.
