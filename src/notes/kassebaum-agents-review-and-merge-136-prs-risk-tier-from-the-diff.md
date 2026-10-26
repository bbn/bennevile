---
title: "Kassebaum: agents review and merge 136 PRs in ten days, with the risk tier computed from the diff and a person on money and auth"
description: "Oct 20, William Kassebaum describes a merge gate where a different agent identity reviews each PR, the tier comes from a path-based risk map, verdicts are pinned to the commit, CI stays a separate required check, and the top tier needs two reviewers and a human merge."
date: 2026-10-20
kind: field-note
source:
  title: "Agents Checking Agents: How We Let AI Review and Merge Routine Code"
  url: https://kassebaumengineering.com/insights/agent-orchestration-trusted-pair-programming/
project: steward
---

[Agents Checking Agents](https://kassebaumengineering.com/insights/agent-orchestration-trusted-pair-programming/) is William Kassebaum's account of how his small engineering firm lets coding agents review and merge routine changes. Over ten days in October 2026, 136 pull requests went through the process and merged across four repositories. He reports no time-saved figure "and won't pretend to," only that independent review has caught real defects the author missed.

**The flow.** A coding agent opens a PR whose description carries its evidence and a `Decision needed:` line. A CI job computes a risk tier from the diff. A different agent reviews and ends with a machine-readable verdict naming the reviewer, the commit, and the review depth. A merge gate turns green only with enough counting verdicts for the tier, every decision line reading `none`, and no open escalation. Only the reviewed commit gets merged, and the repo's own CI is a separate required check, so no verdict can stand in for passing tests.

**What makes a verdict count.** Each agent signs in to GitHub as its own app. The trusted reviewer list is read from the base branch or a pinned copy, never from the PR being judged. The author's "merge" vote is ignored but its "do not merge" still blocks, and two verdicts from one identity count as one. The gate requires a different identity, not yet a different model.

**Tiers from the diff, not the author.** Docs, read-only UI and server code are merged by agents; money, writes to external systems of record, migrations, auth, tenant scoping, and CI changes that alter which tests run need two reviewers at "blast-radius" depth, then a person merges. A label can raise a tier but never lower it, and the gate takes the higher of the base and PR risk maps.

**What is still on paper.** Kassebaum is explicit about gaps: no security scanning in CI yet, some repos without test CI, the human-merge rule for the top tier followed but not yet enforced by the gate, and a cross-model review panel built but running only in shadow. Agents are woken by events rather than polling GitHub.

## Why it matters for code review

This is a concrete design for keeping agent throughput moving without making a person the inbox for every change. The verification load is spread by risk, tied to an exact commit, and kept separate from tests. The writeup is also unusually clear about which rules are enforced by code and which are still policy someone has to follow.
