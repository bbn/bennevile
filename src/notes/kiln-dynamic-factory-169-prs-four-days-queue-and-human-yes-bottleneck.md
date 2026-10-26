---
title: "Jamie on the Kiln factory: 169 PRs in four days, 15 merged overnight, and the wait moved to the merge queue and the owner's yes"
description: "Oct 21, jamie.codes on a factory that reshaped itself while building Kiln: the reviewer bot retired once CI could do its job, green PRs waiting to merge were 78% of open time, and open-to-merge rose from 14 to 77 minutes as risky PRs queued for a human."
date: 2026-10-21
kind: field-note
source:
  title: "Dynamic Factories: the factory that rebuilt itself while building Kiln"
  url: https://jamie.codes/posts/dynamic-factories/
project: steward
---

[Jamie's write-up](https://jamie.codes/posts/dynamic-factories/) covers four days, from 19 to 23 October, in which a team of agents built Kiln, a self-hosted tool for lightweight Firecracker VMs. The factory merged 169 of 178 PRs and shipped 87 releases. Fifteen PRs merged between midnight and 8am on 22 October with nobody watching. The post is about the line, not the product.

**The slow part was the waiting.** On day two the agents were opening PRs faster than anything deployed. Every stage waited for another bot to notice it was its turn, and one built release took about two and a half hours to go live. The fix was to make every handoff start on its own: the reviewer's verdict became a commit status, then a green merge started its own release and deploy.

**CI became the reviewer.** A reviewer bot called Proof sat on every PR. Its checks moved into CI and it was retired. PRs now merge when every check is green at the current head, one at a time, with anything touching CI, deploys, sign-in or secrets flagged as risky. Every hand check became a CI job, and every incident left a guard: 91 of 267 PR builds went red before merge. Several guards came from checks that tested the wrong path, such as an SSH check that skipped the proxy real users go through.

**Measured by stage, the wait was before the merge.** Merge to live held at about 9 to 14 minutes a day. But green PRs waiting to merge were 78% of the time PRs spent open, later 71%. Open-to-merge fell to a 14-minute median once CI was the reviewer, then rose to 77 minutes as the queue and the owner's approvals became the bottleneck. The login change waited about 24 hours, and the slowest tenth of risky PRs sat green and unmerged for more than ten hours.

**Speed targets paired with quality limits.** About 11% of automatic deploys failed, 8 of 70, and roughly one merged PR in six fixed or reverted the previous day's work. Median PR CI time crept from about 3 minutes to about 11 as each worthwhile check was added. The factory reverts first and fixes second, and its next steps are a slow lane for risky PRs and one release per batch.

## Why it matters for code review

Round-the-clock agents did keep work moving overnight, but the numbers show where throughput stalls once machine review is fast: a serial merge queue and a short list of approvals only a person can give. Jamie's advice is to keep that list short, because every item on it waits for you, and to treat review as something built into code rather than a step a person or bot performs on each PR.
