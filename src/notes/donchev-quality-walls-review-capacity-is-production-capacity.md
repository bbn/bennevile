---
title: "Donchev: 3.3x the merged PRs, the same 80 approvers — quality walls, and review capacity run like production"
description: "Oct 8 from Bobby Donchev: human-authored merges went from 1,111 to 3,683 per fortnight with the same 97 authors and 80 approvers. The response is 222 evidence-backed rules, checks the PR under review cannot loosen, a fail-closed verdict owned by the platform rather than the agent, and an admission that the review machinery itself became the bottleneck."
date: 2026-10-08
kind: field-note
source:
  title: "Quality walls: the bottleneck is verification"
  url: https://donchev.is/post/quality-walls/
project: steward
---

Bobby Donchev’s Oct 8 post opens with a table most teams would not publish. Comparing two 14-day windows (Jan 12–25 vs Sep 7–20), human-authored merges, bots excluded, went from **1,111 to 3,683 (3.3x)**. The people stayed the same: **97 authors, 80 approvers**. Median PR size went from 52 to 145 lines, median time to first human review from 25 to 48 minutes, and the busiest approver handled **263 approvals in two weeks**, about 26 per working day, on diffs nearly three times bigger. Their own background agent, Cody, authored only about 2% of September’s merges. The volume comes from engineers running Claude Code, Codex, and Cursor all day.

**Quality walls** are the answer to “what can we verify without a human.” There are 222 rules in a central catalog: generic ones like *Not Enough Tests*, plus modules for authorization, audit logging, Postgres, and decimal math. Repos can add rules but can’t disable central ones. The design doc’s key line is that a rule is a lead, and a finding requires a verified consequence. A wall cannot fail a PR because a line looks suspicious. It has to name the regression that would get through.

Design choices worth copying:

- **A PR can’t change the rules that judge it.** Policy is read from the merge base, so a rule change takes effect only after it merges.
- **The agent decides, the platform owns the check.** An early bug turned a successful Codex run into a green Check Run even when the review had found blocking defects. Now the agent returns pass, fail, or inconclusive for a specific commit. Cody maps that to a conclusion, re-reads the PR head, and fails closed: inconclusive, missing, partial, or cancelled all become “action required,” and a moved head becomes neutral.
- **One fleet file, about 100 repos.** Required checks went live on main Sep 27–Oct 1, and branch rulesets are generated from one file, so changing policy everywhere is one reviewed PR.
- **The PR description is evidence.** Before/after output observed on the current head, plus a *Merge Danger* block (one-way vs two-way door, blast radius) that tells the reviewer where to spend attention.
- **Local precheck is advisory, CI is authoritative.** A Claude Code hook blocks `git push` and `gh pr create` without a fresh precheck, but skipping it is deliberately easy.

The honest section is what makes it a field note. There is no live baseline yet for how good the reviewers are. Reverts held at or below about half a percent, but “it only shows that nothing obviously broke.” And: *“The review machinery became its own bottleneck”*, with reviewer pods waiting on CPU and third-party review rate limits holding up merges. “When review is required, review capacity is production capacity, and it has to be run like production.”

## Why it matters for code review

This is what sustained agent throughput looks like at org scale with the human headcount held flat. The gain didn’t come from anyone’s peak session. It came from moving judgment into rules that run on every commit, and the always-on verifier then turned into infrastructure with its own capacity limits. Read it alongside [Nakhat on doubled PRs and flat reviewers](/posts/nakhat-agents-doubled-prs-review-went-to-approve-buttons/), [Németh’s runtime-owned merge](/posts/nemeth-agent-loop-runtime-merges-not-the-agent/), and [Winslow’s overnight merge gates](/posts/winslow-overnight-agent-merge-gates-coordinator-done-is-not-merge/).
