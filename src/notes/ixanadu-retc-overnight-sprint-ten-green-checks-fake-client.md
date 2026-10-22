---
title: "272 commits overnight, zero rollbacks, and ten green tests for a feature that never worked"
description: "Oct 14 field report from an agent team's 16-hour sprint: four gates on every change, five releases, and the best catch was a reviewer reading source who found a security feature tested only against a fake client. Plus the operating lessons, from waiting after the first PASS to resetting the manager agent at 12 hours."
date: 2026-10-14
kind: field-note
source:
  title: "Ten passing checks, and a feature that never worked"
  url: https://ixanadu.me/reports/2026-10-14-ten-passing-checks-and-a-feature-that-never-worked/
project: steward
---

A team of coding agents working on a project called RETC ran from **8:15 PM ET on Oct 13 to about 12:30 PM the next day**, managed by an agent project manager. The [report](https://ixanadu.me/reports/2026-10-14-ten-passing-checks-and-a-feature-that-never-worked/) counts **272 commits** (103 merges), seven features and twelve fixes, **80 pushes to main**, **five releases and no rollbacks**, six database migrations, and tests growing from 3,476 to 3,658 plus 249 browser tests. Every change passed four separate gates: a reviewer reading the source, a security check, the browser tests, and a full test run on the exact version being released. About ten pieces of work were stopped and fixed at those gates.

The best catch came from the reader, not the suite. A security feature had **ten tests, all passing**, and had never worked: every test ran against a fake database client that accepted a command the real client cannot parse. The new rule is that a fake client cannot prove how the real one behaves, so anything that depends on it needs at least one run against the real thing.

The rest of the lessons are operational, and most came from something going wrong and getting caught:

- **Commit first, then test.** One set of results predated the commit and was labelled final; the record now shows the exact version tested and a clean tree before and after.
- **Wait after the first PASS.** The manager merged a doc fix on a reviewer's first PASS, and the reviewer blocked a line two minutes later.
- **Long runs should say they are alive.** An agent went four hours silent during a long check and looked stalled; long runs now post a status line every 30 to 45 minutes.
- **Reset the manager.** By about 14 hours its memory had been compressed once and its late mistakes were recall slips, so the next plan swaps in a fresh manager around the 12-hour mark.

The report also notes which model families did well in which seat on this project, and is explicit that this is not a verdict on any model in general. The strongest seat was a reviewer that found almost every real defect by reading source and docs.

## Why it matters for code review

This is what an overnight factory looks like when it works: modest, gated, continuous output that ships five releases without a rollback. It also shows that the gates which mattered most were the ones that did not trust a green result, the same failure behind [an overnight PR whose eleven green tests never ran the real path](/posts/holt-overnight-agent-pr-eleven-green-tests-never-ran/) and [a factory whose suite certified two bugs](/posts/codecot-factory-sheet-418-human-merges-green-tests-certified-bugs/). Sustained runs add their own failure modes, such as stale manager memory and premature merges, which only appear when the loop keeps going for half a day.
