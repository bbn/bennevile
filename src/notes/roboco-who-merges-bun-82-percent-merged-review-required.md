---
title: "ROBOCO: who merges in open-source software factories — and why a human merge is not a human review"
description: "Oct 10 from ROBOCO (Dohyun Jung): GitHub API counts across seven open-source factories. OpenClaw lets a bot merge ordinary code behind risk tiers and an opt-in/stop command (576 of 803 automerge-labeled PRs merged). Everywhere else people press the button, but 368 of Bun's 446 September robobun merges (82%) went in with the approval requirement still outstanding."
date: 2026-10-10
kind: field-note
source:
  title: "Software Factory Best Practices from Open-Source Projects (2/4): Who Merges?"
  url: https://roboco.io/en/posts/software-factory-who-merges/
project: steward
---

Dohyun Jung at ROBOCO pulled branch rules and merge records through the GitHub API on **October 10, 2026** for the open-source repos that run agent factories: OpenClaw, Vercel AI SDK, OpenHands, Beads, mastra, Bun and Astro. The question is narrow and useful: when agents open PRs all day and all night, who actually lets them into main?

Only one project hands the button to a bot at scale. **OpenClaw** requires zero approvals on main, but sorts changes into risk tiers written down in files. Docs edits push straight to main if they stay inside allowed paths. Ordinary code merges through ClawSweeper only when the review verdict is on the exact head commit, every required check passes, and a maintainer has opted that PR in with `@clawsweeper automerge`. `@clawsweeper stop` halts it and adds a human-review label. Sensitive paths need a maintainer command, security policy files need SecOps through CODEOWNERS, and releases, dependencies and schema changes need explicit human approval. On the day of the count, **576 of 803** automerge-labeled PRs had merged, and **210** items carried the human-review label. Bots made **203 of the last 300** merges.

The rest kept people on the merge, for three reasons the repos make visible. First, a GitHub App cannot approve its own PRs, so any repo that requires one approval keeps a human in by construction. Second, Beads audited 440 merged PRs and found its worst defects came in through "merges that skipped review, hid their real contents, or overrode an outstanding objection"; one self-merged migration corrupted data. Third, someone has to judge intent: Astro's authoring agent gets five rounds to answer review, then labels the PR `factory: needs human` and steps away.

The finding that should make reviewers uncomfortable is the last section. A record of a human merge is not a record of a human review:

- **Bun:** robobun opened 2,313 PRs in September. Of its **446** merged that month, **368 (82%)** were merged with maintainer privileges while GitHub still showed `REVIEW_REQUIRED`.
- **OpenHands:** one approval is required, but **26 of the 40** most recent merges met it with only an AI review bot's approval. A person later reverted one of those agent PRs.
- **mastra:** people merged some bot PRs whose most recent factory review had requested changes (14 of September's bot PRs by label).
- **Vercel AI SDK** is the clean counter-example: all **294** September factory PRs were merged by people in an `APPROVED` state, and backports go to the person who reviewed the original.

Merges also concentrate in one person: 99% at Beads, 82% at mastra, 78% at Bun. Jung's suggestion is cheap: track merge concentration and the share of PRs merged without approval, because when the one human gets busy, the factory stops (he points to Aider, where the cleanup bot still runs and nobody merges code).

## Why it matters for code review

Under constant agent volume, "a human merges every PR" quietly turns into "one maintainer presses merge on whatever is green." The durable controls here are structural: risk tiers in files, opt-in and stop commands, write tokens kept away from agents, and branch rules rather than guideline documents (Beads' review rule still lives only on paper). Read it beside [Sinatra's 94% merge rate with a human on every button](/posts/sinatra-306-agent-prs-94-percent-human-merge-gate/), [Orbi's blocked label that lost a race to the merge](/posts/orbi-599-ai-merged-issues-blocked-label-merged-71-seconds-later/), and [Vázquez's single owner gate](/posts/vazquez-many-hands-one-yes-harness-owner-gate/).
