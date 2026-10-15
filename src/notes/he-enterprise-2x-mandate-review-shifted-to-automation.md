---
title: "Enterprise 2× mandate: throughput doubled, and review moved onto automation"
description: "Jul 2 CMU/Stanford longitudinal case: 802 developers, 196k PRs. Per-developer throughput hit 2.09×; reviewer load ~2×; human review coverage fell 89%→68% while automated review rose to ~84%. Merge and revert stayed flat on coarse proxies."
date: 2026-07-02
kind: paper
source:
  title: "AI Writes Faster Than Humans Can Review: A Longitudinal Study of an Enterprise \"2×\" Mandate"
  url: https://arxiv.org/abs/2607.01904
project: steward
---

**Hao He, Shyam Agarwal, Yegor Denisov-Blanch, Pavel Azaletskiy, Sanmi Koyejo and Bogdan Vasilescu** follow one mid-sized, AI-forward company that publicly committed in June 2025 to double engineering productivity, measured as merged pull requests per engineer per month. The panel is large enough to take seriously: **802 developers** and **196,212** non-bot PRs from January 2024 through April 2026, plus Cursor and Claude Code usage telemetry.

By April 2026, per-active-developer monthly PRs reached **2.09×** the early-2025 baseline. Company-wide PR volume grew **3.1×** while the reviewer pool grew only **1.5×**, so load per reviewer roughly doubled. A staggered difference-in-differences design, treating each developer as their own control, ties most of the within-developer gain to AI adoption plus a further climb with accumulated use (about **1.46×** under full calendar-month fixed effects at observed April 2026 usage). The gain is broadly shared across the IC-to-principal ladder, concentrates in newer repositories, and cannot be cleanly pinned to particular frontier-model releases once calendar drift is accounted for.

**The process redesign is the story.** As AI-authored PRs rose toward ~90% of volume, the share of PRs getting any human review fell from **89% to 68%**, while automated AI review climbed from ~19% to ~84% and overtook human review. Substantive human review (a written comment) fell from ~39% to ~21%; silent approvals roughly doubled per reviewer at the median. Merge and revert rates stayed about flat — which the authors call evidence against an acute quality collapse on coarse, short-horizon proxies, not a clean bill of health. Aggregate cycle time recovered mainly because fewer PRs went through the slow substantive-review queue, not because that queue got faster.

## Why it matters for code review

This is the receipt for what continuous factories do to review when authoring gets cheap: the binding constraint moves to human judgment, and the organization keeps the throughput number by routing work around careful review unless someone redesigns the gates. Always-on harnesses compound only if review capacity and verification depth scale with volume — lanes, evidence packets, and WIP caps — rather than silent approve buttons. Read it as the primary study behind [Nakhat's field note on approve-button review](/posts/nakhat-agents-doubled-prs-review-went-to-approve-buttons/), beside [Hellström's overnight fleet with no gates](/posts/hellstrom-overnight-fleet-11-prs-94-percent-idle-luck-is-not-a-guardrail/) and [Rivera on prior-verdict anchoring in AI reviewers](/posts/rivera-prior-verdict-anchors-ai-reviewer-pass-line-halves-detection/).
