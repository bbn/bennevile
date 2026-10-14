---
title: Copilot code review can now approve — if you turn it on
description: GitHub’s Sep 1 changelog adds approval assessments on every Copilot review, plus an off-by-default path for Copilot approvals to count toward required reviews, scoped by path.
date: 2026-09-01
kind: field-note
source:
  title: "Copilot code review can now approve pull requests — GitHub Changelog"
  url: https://github.blog/changelog/2026-09-01-copilot-code-review-can-now-approve-pull-requests/
project: steward
---
Two product moves in one changelog. First, every Copilot code review now includes an approval assessment in the overview — a signal that the change looks ready to approve, without that assessment itself counting toward merge rules. Second, admins can optionally let Copilot submit a real approval that counts toward required reviews, off by default, configurable at enterprise, org, and repo level, including which file paths Copilot is allowed to sign.

Push after approval dismisses it the same way a human reviewer’s approval is dismissed. That is the important detail: if you wire Copilot into the merge math, you are treating it as a reviewer with the same invalidation rules, not as a sticky green badge.

## Why it matters for code review

This is the platform making “human on the loop” a setting. Assessment without merge credit is cheap instrumentation; counting Copilot toward required approvals is a governance choice about which surfaces you trust an agent to clear. Path scoping is the right lever — treat it as blast-radius triage, not as “turn on AI approvals everywhere.”
