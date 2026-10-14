---
title: "The mixed PR queue: reviewer throughput is the binding constraint"
description: "May 10 field note: Tian Pan on agent fleets as backlog generators unless you tier the queue — author class, supervision, risk — with traces to audit and CI never enough for business logic."
date: 2026-05-10
kind: field-note
source:
  title: "The Mixed PR Queue: Reviewer Throughput Is Now the Binding Constraint"
  url: https://tianpan.co/blog/2026-05-10-mixed-pr-queue-reviewer-throughput-binding-constraint
project: steward
---

Tian Pan reframes Theory of Constraints for agent load: production got 5–10× wider; the review pipe stayed the same width. Velocity is how fast a human can read, not how fast anyone writes. Cited signals: review time +441% YoY in some samples, 31% more zero-review merges from exhaustion not policy, Stripe-scale agent PR volume, feature-branch throughput up while main-branch throughput fell — code written, not promoted.

Two cultures, one failure. Rubber-stamp at 11pm clears forty diffs before standup (900-line PR approved in 48 seconds). Graveyard queues refuse to stamp, so PRs rot three to seven days, go stale, and get re-prompted — throughput below the pre-agent baseline. Both feed agent- and human-authored PRs into a human-paced queue with one approval bar for a dependency bump and a payment-flow refactor.

The fix is legibility before tooling. Label **author class** (which agent), **supervision state** (has a human already read it), and a coarse **risk tier** (`trivial | feature | critical-path`). Then attach *per-tier* SLOs: trivial minutes-to-merge / auto where CI is enough / batched bumps; feature hours-to-first-review with real human judgment; critical-path named reviewer, no rubber-stamp, no agent merge. Require a short reasoning trace plus verification record so the reviewer audits process in ~30 seconds instead of re-deriving correctness in ~30 minutes — and treat confident-wrong traces as spot-check objects, not proof. Auto-merge only for the trivial tier; for business logic, CI is necessary and never sufficient when the author and the test author are the same model.

## Why it matters for code review

A coding-agent program is a review-process program first. AI reviewers help at the margins; they do not replace queue design, tiered SLOs, or the org shift that makes seniors *run* a review queue instead of drown in one. Ship agents without redesigning labels, tiers, traces, and who is paid to govern the queue, and you have built a backlog generator with a healthier-looking SLA.
