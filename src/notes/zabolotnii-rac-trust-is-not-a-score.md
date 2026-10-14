---
title: "Trust is not a score: Runtime Assurance Contracts fail-close authority for coding agents"
description: "Sep 30 Zabolotnii: RAC binds gates→authority transitions; score-only admits 80/100 block-required injections at vendor weights; conjunction admits 0; score matches only when τ≤min weight."
date: 2026-09-30
kind: paper
source:
  title: "Trust Is Not a Score: Runtime Assurance Contracts for High-Risk AI Agents"
  url: https://arxiv.org/abs/2609.39717
project: steward
---

Serhii Zabolotnii names the **assurance-transition gap**: benchmarks and protocols describe performance and permissions, but not how evidence must change an agent’s **authority** mid-task. A **Runtime Assurance Contract (RAC)** is the tuple ⟨B, K, Π, H, E, G⟩—autonomy boundary, component eligibility, stateful transition policy, human capacity, evidence schema, and a hard-gate set. Soft metrics may route; a failed or unknown mandatory gate forces retry, switch, escalate, defer, or stop. Aggregate performance cannot authorize action.

The coding-agent experiment is the receipt. On 280 constructed cases (140 injections / 140 controls across seven fault classes), a non-compensatory gate conjunction admits **0** unauthorized actions and **0** auto-admitted review-required cases. A score-only rule at published vendor weights (0.45/0.30/0.25, τ=0.6) admits **80/100** block-required injections and **all 40** review-required cases. Tuned in hindsight the score can match the conjunction—but Proposition 1 shows exact agreement on this binary corpus iff **0 < τ ≤ min wᵢ**: the weighted sum reproduces fail-closed behavior only when it has been configured so compensation cannot occur. A protocol-only arm (path globs + well-formed diffs, no content/symlink resolution) still admits 56/100 unauthorized and all review-required cases. Eighteen hand-authored versioned traces and a 72-attempt LLM-labeled holdout further show why **stateful** pins (context/rule/component versions, review capacity) matter beyond a stateless conjunction.

## Why it matters for code review

Continuous factories under sustained load need an authority story, not a confidence dial. Review overnight merge lanes for non-compensatory gates (bounds, context freshness, evidence completeness, eligibility, supervision capacity, unresolved failures)—and treat high “agent quality scores” that cannot waive a failed gate as a feature. FOMO that agents aren’t shipping is the wrong fear if a score path can silently authorize path escapes and skipped review. Pair with [Zhao’s HiSentinel pre-execution intervention](/posts/zhao-hisentinel-pre-execution-intervention/) and [Zhang’s approval-laundering binding failures](/posts/zhang-agent-approval-laundering-transitive-effects/).
