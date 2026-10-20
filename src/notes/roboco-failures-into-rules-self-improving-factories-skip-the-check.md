---
title: "ROBOCO: factories turn failures into rules, but almost nobody checks the rules work"
description: "Oct 10 from ROBOCO, the last of four posts on open-source software factories. Across Bun, Astro, OpenClaw, mastra, Beads and others, failures get fed back into agent instructions, CI checks, workflow mechanisms, and decisions to scale automation back. OpenClaw added a success-rate circuit breaker after its implementation worker went 52 for 308 in a week. The missing step is verifying that new rules actually work: no project in the survey regularly measured it."
date: 2026-10-10
kind: field-note
source:
  title: "Software Factory Best Practices from Open-Source Projects (4/4): Turning Failures into Rules"
  url: https://roboco.io/en/posts/software-factory-failures-into-rules/
project: steward
---

Dohyun Jung closes ROBOCO's four-part survey of public software factories with the step that is supposed to make them compound: [turning failures into rules](https://roboco.io/en/posts/software-factory-failures-into-rules/). He splits the loop into four parts (detect the failure, diagnose the cause, codify a rule or mechanism, verify the effect) and finds the first three across several repositories. The fourth he [could barely confirm from public records at all](https://roboco.io/en/posts/software-factory-failures-into-rules/). Figures were pulled from the GitHub API on October 10.

## Where the failures go

The projects feed failures back into four places: agent instructions and skills, CI checks, mechanisms in servers or workflows, and decisions to stop or scale back automation. Bun mined about [2,500 merged PRs where review feedback led to fix commits](https://roboco.io/en/posts/software-factory-failures-into-rules/) and kept only the reasons that blocked merging, as a `REVIEW.md` the agents read. Astro rewrote its factory skill after bot PRs kept skipping changesets, diagnosing [wording that let the model rationalize skipping them](https://roboco.io/en/posts/software-factory-failures-into-rules/). OpenClaw found its `AGENTS.md` was [truncated at 20,000 characters](https://roboco.io/en/posts/software-factory-failures-into-rules/) when injected, so the agent had been seeing fragments of its core rules; the team cut it to 18,900 and moved detail into skills.

Bun also blocks the same failure twice: an instruction against verbose comments, plus a CI check (`comment-cop`) that [flags new multi-line comments in agent PRs](https://roboco.io/en/posts/software-factory-failures-into-rules/). Jung's recommendation is to fix instructions and CI together.

## Knowing when to stop

The most useful idea for anyone running agents around the clock is that scaling automation back is part of the loop, not an admission of defeat. OpenClaw's implementation worker [succeeded 52 times and failed 256 times in a single week](https://roboco.io/en/posts/software-factory-failures-into-rules/); with the success rate at 16.9% and failed runs consuming 123 hours, it added a circuit breaker that halts the lane when the success rate drops. Mastra [switched its factory to manual mode](https://roboco.io/en/posts/software-factory-failures-into-rules/) when PRs arrived faster than it could review them. See also [mastra's own account of going manual](/posts/mastra-factory-full-auto-was-bursty-stages-went-manual/).

## Where the loop breaks

Rules get written, but nobody checks they are followed. Astro built 24 evaluation cases for 8 skills and [did not connect them to CI](https://roboco.io/en/posts/software-factory-failures-into-rules/), citing cost and nondeterminism; the changeset and lockfile failures never became evaluation cases. A reverted Astro fix was not remembered, and [the factory produced the same fix again](https://roboco.io/en/posts/software-factory-failures-into-rules/) when a new issue came in. Beads' rule that schema changes get human review is [not enforced by branch rules](https://roboco.io/en/posts/software-factory-failures-into-rules/). And Bun's `CLAUDE.md` says branches start with `claude/` while robobun's actually start with `robobun/`.

Agents do edit their own instructions (roboclaw-bot files `AGENTS.md` PRs at OpenClaw; robobun wrote 4 of 50 commits to Bun's `CLAUDE.md`), but mostly through ordinary PRs that people approve. Jung's last best practice is his own proposal, since he found nobody doing it: [add evaluation cases with every new rule and run them regularly](https://roboco.io/en/posts/software-factory-failures-into-rules/).

For steady, always-on agent work, this is the gap that matters. A factory that only accumulates rules gets more constrained, not more reliable. Earlier in the series: [who merges](/posts/roboco-who-merges-bun-82-percent-merged-review-required/) and [filtering by evidence](/posts/roboco-factories-filter-by-evidence-fails-before-the-fix/). Compare [Jag Reehal's weekly gardener](/posts/reehal-gardener-weekly-loop-turns-accepted-fixes-into-lint-rules/), which keeps only fixes that went unreverted.
