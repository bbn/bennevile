---
title: "Hiroki Kondo: 43 of 80 AI reviews were re-reviews, and a review step written down for agents ran once in about 290 sessions"
description: "Oct 25, the third weekly log for karasu, built entirely through Claude Code. 50 PRs merged in a week. Re-reviews on every fix burned the CodeRabbit quota, so he moved a local review ahead of the web one. When agents skipped that written step almost every time, he turned it into hooks that refuse to mark a PR ready."
date: 2026-10-25
kind: field-note
source:
  title: "Rate limits, skipped steps, and hooks: what tuning AI code review for agent PRs taught me (karasu weekly)"
  url: https://fukurou.kompiro.dev/en/karasu-weekly-2026-10-25/
project: steward
---

[Hiroki Kondo](https://fukurou.kompiro.dev/en/karasu-weekly-2026-10-25/) builds karasu, a text language for architecture diagrams, without writing its code by hand: everything goes through Claude Code. His third weekly log covers October 18 to 24, with **50 PRs merged** (11 from Dependabot) and six decisions recorded as architecture decision records. Most of the lessons are about keeping AI review working when an agent pushes fixes all day.

**Re-reviews ate the quota.** CodeRabbit re-reviews every push, so each fix the agent made triggered another pass. One PR was reviewed six times when two would have done, and three of the extra runs found one class of problem one instance at a time. At a quota of two reviews an hour, each wait was 38 to 39 minutes, and after four pushes in a row CodeRabbit paused automatic review. Dropping re-reviews isn't the fix either: across 37 reviewed PRs he counted 80 reviews, 43 of them re-reviews, and those re-reviews raised 10 new findings on 5 PRs, all in files the fix commits touched.

**So the cheap checks moved earlier.** Changes now get a risk tier from the paths they touch. Before a PR leaves draft, the agent runs a local review skill and then the CodeRabbit CLI once (a separate quota of ten an hour), and only a clean result goes to the web review. ADR-only or test-only changes merge automatically after approval; workflow, release, or dependency changes get a person reading the diff.

**Written steps weren't followed.** The local CLI step had lived in the agent's memory notes. Of about 290 sessions since October 1 that created or readied a PR, **one** ran it. Even after the step went into the written procedure, the next day's session skipped it, and the step that works through CodeRabbit's findings ran in about 7 of about 40 sessions, usually because Kondo typed it himself. The steps are becoming Claude Code hooks, including one that refuses `gh pr ready` until the local review has run. A related lesson: a Stop hook meant to prevent commits on main only reported after the fact, so he replaced it with a Git pre-commit hook that refuses them, and recorded in an ADR what still slips through (`cherry-pick`, `--no-verify`).

In a separate private project he is trying merges decided by impact, inspired by the [Claude Code team's review write-up](https://claude.dev/blog/solving-code-review-at-anthropic/). The tier comes from paths, not author; only a human terminal can approve; an unresolved AI finding blocks merge; review stops at three rounds. An eval built from 19 past bugs went from 5 to 7 caught after he revised the review guidelines, a number he calls generous since he tuned and measured on the same cases. The AI review also found that a change could rewrite the rules judging it and rate itself low, so the gate now judges with the rules on main. No change has gone through it yet.

## Why it matters for code review

When agents keep shipping around the clock, review steps that live in prose decay quickly; Kondo's 1-in-290 figure is a blunt measure of it. What held up was moving checks into places the agent can't skip (hooks, Git, a gate that reads its rules from main) and putting cheap local review in front of rate-limited review, so steady throughput doesn't stall on a quota.
