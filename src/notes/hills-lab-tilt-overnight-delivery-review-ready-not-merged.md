---
title: "Overnight delivery at Tilt means review-ready by morning, not merged"
description: "Aug 4 HILLS Lab field note on how one engineer runs AI-assisted delivery overnight at Tilt: a written definition of done before the run, a fresh agent session per ticket, isolated worktrees, explicit stop conditions, and a morning manifest of checks, blockers and the decisions still needed from a person. Merging and deploying are separate outcomes that need their own authorisation."
date: 2026-08-04
kind: field-note
source:
  title: "How I organise overnight software delivery at Tilt (HILLS Lab)"
  url: https://hills-lab.hr/field-notes/overnight-software-delivery-at-tilt/
project: steward
---

This [HILLS Lab field note](https://hills-lab.hr/field-notes/overnight-software-delivery-at-tilt/) describes one engineer's method for letting agents work through the night at Tilt, and it says up front that it is a personal operating method, not company policy. It opens by narrowing the word: overnight "does not mean leaving an autonomous system with unrestricted access and returning to a production release in the morning." The default output is a change ready for human review. Merging and deployment "happen only when the scope and authorisation explicitly include them." In the author's words: "The laptop may continue working after I stop typing. Accountability does not go to sleep."

## The work before the run

"Deliver this overnight" is not an instruction the method accepts. Before anything starts, the engineer writes down what delivery means for that scope: one review-ready merge request, a sequence of dependent ones, merged changes behind a disabled flag, or, rarely, a verified deployment. Then come the objective, non-goals, dependencies and acceptance criteria, plus questions a ticket usually leaves open, like which base branch is authoritative and what should stop the work even if more could be built. "Most overnight failures begin before the first file edit." Work too big for one night is split into slices that can each be verified on their own, not into backend, frontend and tests.

## How the night runs

The tools each have one job. Linear holds scope and acceptance criteria, GitLab holds the code, reviews and CI, Slack carries blockers and the morning handover, and Cursor Agent does the implementation. A utility called Amphetamine keeps the Mac awake, which "solves machine availability, not software correctness." Each ticket starts in a fresh agent session that refetches the repository, because "agent memory feels authoritative even when it is stale." Every writer gets its own worktree and branch, and merge order is decided before any code is written. On larger deliveries one long-running orchestrator tracks branches, CI and blockers but doesn't implement, and risky changes get a reviewer whose context is separate from the implementer's.

The loop is refresh, plan, implement, verify, hand over and clean up, and an opened merge request isn't treated as done until CI is green and review findings are resolved. Stop conditions are part of the design: an ambiguous product decision, missing credentials or commercial values, an unplanned breaking change, anything destructive or outside the authorised scope. A blocked branch doesn't stop independent work, but the system "does not convert missing authority into a guessed decision."

## What lands in the morning

The handover is a manifest rather than a "done": each change with its review link, merge order, CI results, unresolved findings, flag state, assumptions, and "exact manual actions still required." The note is plain about what this buys. Eight hours of agent time don't become eight hours of senior judgment. Mechanical work, checks and evidence collection carry on "between two human decision points," and the next morning starts from verified changes instead of from the ticket.

## How it fits

This is the conservative end of always-on work, and a useful counterweight to fleets that merge their own changes overnight. The output keeps moving all night, but merge authority stays with a person in daylight, and the review is kept small by what the agent hands over. It sits close to Florian Riquelme's [night shift where the morning brief is the contract](/posts/friquelme-nachtschicht-morning-brief-trust/), Ramón Chancay's [worktree per task that ends in a PR, never a merge](/posts/chancay-agent-worktree-pr-not-merge/), and Alex Zhu's argument that [every overnight loop needs someone who can kill, park or transfer it](/posts/devx-kill-park-transfer-overnight-ownership/). It's one practitioner's account with no throughput numbers, so the case it makes is about how to run the work, not how much it ships.
