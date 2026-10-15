---
title: "Organ: agent PRs were green and approved, then sat unmerged; the merge path was the bottleneck"
description: "Oct 13 Organ: as its agents went from 54 to 126 PRs a week, approved PRs piled up. Five causes in the merge step (a stricter up-to-date rule than the repo's, one-shot merge attempts, shallow-clone rebases, CI inside the rebase budget, a cleanup job killing rebases). Merges rose from 68 to 112 a week; 62 PRs are still open, 38 in conflict."
date: 2026-10-13
kind: field-note
source:
  title: "AI agent pull requests stuck in merge conflicts: what broke in our merge path and what we changed"
  url: https://dev.to/itaisagi/ai-agent-pull-requests-stuck-in-merge-conflicts-what-broke-in-our-merge-path-and-what-we-changed-4ni9
project: steward
---

**Organ**, a company that runs its departments with AI agents and has humans approve at the gates, published its own numbers on Oct 13. The post was written by Organ's CMO agent and also appears on organ.app. The opening claim: "When several AI agents open pull requests against the same branch, the hard part is merging them, not writing them." Most of the stuck PRs were green and approved.

The load kept rising. Agents opened 54 PRs in the week of Sep 14 and 126 in the week of Oct 5. The number of open agent PRs went 44, 62, then 36 after a one-off cleanup, then 53 and 57. On Oct 6 the team checked eight approved PRs, and all eight were already in conflict with `main` when a human approved them. The most common collision was one shared stylesheet that every UI change appends to.

The merge step itself made things worse, in five ways:

- **It demanded an up-to-date branch the repo didn't require.** Organ merges about 15 times a day and CI takes about 11 minutes, so green PRs with no conflicts were refused for being one commit behind.
- **A human approval got one merge attempt.** In seven days, 20 approved runs gave up and had to be merged by hand. Causes: CI wait timeout (7), the CI-fix agent crashed (5), the runner container was gone (5), a fix round crashed (2), the branch tip couldn't be verified (1). Almost all were transient.
- **Rebases lost the merge base.** A refetch with `--depth=50` cut history short, so git replayed unrelated commits. One rebase reported 21 conflicting files.
- **Full CI (about 20 min) ran inside a 25-minute rebase budget.**
- **A cleanup sweep killed rebases mid-merge**, because it didn't know they run in a separate container.

There were six fixes. The merge step now reads the repo's own merge rules. It rebases only when a rebase can fix something. An approval is durable: it retries with backoff, allows at most three rebases, and stops after 24 hours. Clones fetch full history and check for leftover conflict markers. Validation moved out of the rebase. The cleanup sweep learned which phases run in other containers.

The results are honestly mixed. Merged PRs per week went from 68 to 112, the most since at least August. Median time to merge had already fallen from 22.4 to 10.6 hours *before* most fixes shipped, and stayed at 10.3. The backlog didn't shrink: at 08:29 UTC on Oct 13 there were 62 open agent PRs, 38 in conflict, 26 of those older than a week. "The fixes make an approved merge finish. They don't clear PRs that nobody has approved."

## Why it matters for code review

When agents produce PRs all day, the cost moves from writing to landing, and an approval that never becomes a merge is wasted review. Organ's lessons work as metrics. Count "approved but not merged" every week from day one. Measure the backlog by age, not size, since a PR in conflict loses value every day it waits. And treat shared append-only files as a design problem. The open question is whether merges can stay above new PRs for a whole week. If not, the agents are producing more PRs than people approve. Read it beside [Joxo on reviewing agent PRs in merge order and running fewer agents](/posts/joxo-review-agent-prs-in-merge-order-run-fewer-agents/), [Roosevelt handing merge authority to an orchestrator](/posts/roosevelt-orchestrator-merge-authority-results-review/), and [Cloudsail's cap on how many candidate changes a reviewer is asked to read](/posts/cloudsail-autonomous-software-factory-one-task-type-at-a-time/).
