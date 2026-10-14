---
title: "Four agents, 90 PRs a day, 15 merges: tier by risk surface and let revert rate move the line"
description: "Aug 10 steezr (Johnny Unar): an inherited client repo had 300+ open agent PRs and two exhausted senior reviewers. Path-based risk tiers took about 60% of agent PRs off human review; commit trailers recording provenance showed a 1.8% revert rate on auto-merged low-risk PRs against a 2.3% human baseline, and 11% on high-risk surfaces."
date: 2026-08-10
kind: field-note
source:
  title: "The Review Queue Is Now Your Deployment Bottleneck"
  url: https://www.steezr.com/en/blog/ai-pr-review-bottleneck-redesign
project: steward
---

Johnny Unar's consultancy inherited a client codebase where four agents opened about **90 PRs a day**, merges had flattened at roughly **15 a day**, and the open count had passed **300**. CI runners were saturated testing branches nobody would touch for a week, and the two senior reviewers had "quietly stopped sleeping" until someone rage-approved a batch to make the number drop. The review process was still the 2023 one: the same template, two required approvals, and whoever was free picked up the next PR.

## What they changed

- **Tier by what the diff touches, not who wrote it.** A labeling Action reads a paths-to-tier YAML and marks each PR `risk:low`, `risk:medium` or `risk:high`. Branch protection keys off the label. Low-risk surfaces auto-merge on green CI under a diff-size ceiling, medium gets one reviewer with a ten-minute target, and auth, payments and migrations always get a senior reviewer. About **60% of agent PRs** stopped needing a human at all.
- **Record provenance at commit time.** The agent wrapper adds git trailers for model, task id and human, agent or agent-assisted. That makes revert and defect rates sliceable by origin and tier.
- **Make CI cheap for work that won't land.** Run lint and type checks before the expensive suite, skip reruns when relevant paths haven't changed, cap concurrency per agent so human PRs aren't starved, and auto-close agent PRs with no activity after **72 hours**.

## Why it matters for code review

The provenance data is what moved the trust boundary. Auto-merged low-risk agent PRs were reverted **1.8%** of the time, below the **2.3%** human baseline on the same surfaces, so the auto-merge band widened. On high-risk surfaces the same model's revert rate was **11%**, so a human stayed in the loop there. Unar's rollout advice fits steady always-on work: auto-merge one well-tested surface, watch its revert rate for a month, and widen only if it holds at or below the human rate. The numbers come from a consultancy's own client work, but the method is one you can run on your own merged history. Compare [vendor revert rates across 37,000 agent PRs](/posts/kraishan-not-all-agents-equal-post-merge/) and [four tiers of trust for verification](/posts/oeftimie-vv-harness-four-tiers-of-trust/).
