---
title: "Software factories need building codes — and an actuator"
description: "Sep 12 HydraFlow field note: standards become manufacturing only when violations turn into remediating work, the same gate judges the repair, and floors can tighten themselves."
date: 2026-09-12
kind: field-note
source:
  title: "Software Factories Need Building Codes"
  url: https://aibuddy.software/software-factories-need-building-codes/
project: steward
---

Travis Frisinger’s Sep 12 follow-up draws a useful line after harness talk. The harness governs a *run* — context, skills, tools, permissions, sandboxes, retries, budgets, review. The factory owns the product lifecycle: which standards apply, how violations become work, and whether the product stays inside those standards as it evolves. Once the harness can enforce rules, the next question is what those rules should be — and what happens when they fail.

His name for the durable layer is software building codes: continuously enforced properties the software must satisfy, independent of which agent or engineer built it. Prior art (OPA, Conftest, Sentinel, scorecards) already makes policy executable. What HydraFlow adds is the *actuator*: detect a violation, manufacture bounded remediation, verify against the same rule, and only then merge. A red scorecard that stops at “someone should fix this” is still compliance theater.

Receipts from the system, not slogans. ADR Enforcement classifies accepted decisions as `REAL` / `WEAK` / `MISSING`; twelve existing ADRs were grandfathered into a baseline that can shrink but never grow, and the standard itself is a merge gate. `DisturbanceDampenerLoop` ratchets suppressions (starting backlog: 782 findings / 300 signatures): PRs cannot add new ones, and an agent is dispatched to fix plus prune the baseline in the same change — if it prunes without fixing, the violation reappears and the gate blocks. `AutoTightenLoop` is asymmetric: after stable coverage gains it raised the floor to 89.5 → 90.6 → 91.3; the autonomous path may only tighten, never loosen, and the PR that raises the floor must pass against the new floor.

He separates craft standards (testing, CI, review, rollback, security hygiene — what “professionally built” always means) from building standards that activate by product class (multi-tenant isolation, RBAC, payments). Classification of *what kind of product this is* is the load-bearing unsolved piece: wrong class, perfect enforcement of the wrong code. Grandfathering is an adoption mechanism, not a permanent exemption — software can retrofit cheaply when the workforce is autonomous. And a rule without an enforcing check remains an opinion; fake green is worse than an honest judgment exemption.

## Why it matters for code review

Factory review is not only “did the agent’s PR pass CI.” It is whether the merge gate is wired to standards that can detect drift, spawn repair work, and refuse to count baseline pruning as a pass. Independent review of agent patches still matters; so does a control loop that treats standards as living floors with actuators — otherwise agent volume just manufactures unenforced-decision debt faster.
