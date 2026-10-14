---
title: "The bottleneck for code agents is review — so put gates before the human"
description: "Jun 28 2026 Samuel Fajreldines: a verification harness turns agent attempts into reviewable PRs — scope, required proof, risk inventory, stop contracts, and gates that block before human audit."
date: 2026-06-28
kind: field-note
source:
  title: "The Bottleneck for Code Agents Is Review"
  url: https://www.samuelfaj.com/en/blog/the-bottleneck-for-code-agents-is-review/
project: steward
---

[Samuel Fajreldines](https://www.samuelfaj.com/en/blog/the-bottleneck-for-code-agents-is-review/) frames the 2026 problem cleanly: agents already write and open PRs; the expensive question is how you know a PR is reviewable without becoming an endless manual audit. Citing GitLab’s AI Accountability Report (85% of developers name reviewing/editing/testing AI code as the time sink), he treats a **code agent harness** as the set of rules, tools, and gates that convert an automated attempt into evidence before a human looks.

The pre-diff contract is the useful part. A short **spec** names what must change, what must not, which files are in scope, and what proof counts. A **risk inventory** raises the bar for auth, payments, PII, migrations, queues, and permissions — happy-path tests aren’t enough; negative cases, regression, and rollback belong in the PR. A **stop contract** forces the loop to halt on repeated failure or missing context instead of burning retries. Blocking gates then enforce reproduction (failing test first for bugs), **diff integrity** (out-of-scope files, unjustified test deletion, orphan lockfile churn), and operational evidence (contracts, reversible migrations, permission checks). Subagents widen observation (security, types, spec↔diff) but don’t replace the gate — fan-out without a delivery contract is just more opinions for the reviewer.

## Why it matters for code review

Always-on generators only compound when morning review starts from machine-checkable receipts, not a confident narrative. Fajreldines relocates judgment upstream: scope and proof live in the harness so humans keep product, security, and architecture calls without absorbing the full verification tax of every overnight attempt.
