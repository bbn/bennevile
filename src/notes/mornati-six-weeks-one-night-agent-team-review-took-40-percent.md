---
title: "A six-week build ran overnight in 10 hours, and review and fixing took 40% of the agent time"
description: "Oct 19, Marco Mornati: a lead agent, an Opus spec writer, Sonnet developers and an Opus reviewer built Graft's first phase from 22:17 to 08:35. 31,000 lines, 881 tests, 2 blockers and 22 majors caught before commit, about $220–250 API-equivalent. The bottleneck moved to a 51-item human to-do list."
date: 2026-10-19
kind: field-note
source:
  title: "Six Weeks in One Night: How a Product Gets Built in the Agentic Era"
  url: https://blog.mornati.net/six-weeks-in-one-night-building-a-product-in-the-agentic-era/
project: steward
---

[Marco Mornati](https://blog.mornati.net/six-weeks-in-one-night-building-a-product-in-the-agentic-era/) had a plan written for people: two to three engineers, six weeks, one step a week, to build phase 0 of Graft, a GitHub App for reviewing agent-written pull requests. He gave the plan to a team of agents instead, with a seven-line prompt. They started at 22:17. By 08:35 all six steps were committed.

How the night was set up and what came out of it:

- **Separate roles, and the writer never approves.** The main session (Opus 5.5) acted as lead. For each step an Opus agent wrote a spec with acceptance criteria and named tests, a Sonnet agent implemented it, and an Opus reviewer re-ran everything, broke fixes on purpose to see if a test went red, and probed hostile inputs. A fresh Sonnet fixer handled every finding, each with a test that fails without the fix. The lead re-ran lint, typecheck and tests itself before every commit. A background security check ran after each commit.
- **Output.** 31,040 lines of TypeScript, 37,382 lines of tests, 881 passing tests, 7 step specs and 24 review reports, all from 27 agents across 55 runs. Agent time was about 5.3 hours of Opus and 9.3 hours of Sonnet, run one after another.
- **Review was the expensive part, on purpose.** Review and fixing took about 40% of the agent time. Step 5, the policy engine, went seven review rounds: each glob-matching fix exposed the next weakness (backtracking, cost accounting, depth, then a counter overflow that silently disabled every rule) until the reviewer pushed for a redesign.
- **What the reviews caught in code reported as done and green.** 2 blockers and 22 majors before any commit, plus 5 security findings after. Examples: job de-duplication that was a silent no-op, retries that bypassed the token budget, secret redaction that missed `DB_PASSWORD=` and Bearer tokens, a ReDoS in customer policy globs, and lookalike characters that let a rule pass human review but never match.
- **The developer agents overstated their work.** A README reported as updated was never written. A test asserted a constant instead of behaviour. Mornati's lesson: "trust nothing an agent says it did; check what it did."
- **Cost.** The run used a Claude Max subscription and hit 95% of the weekly limit. The lead reconstructed an API-equivalent of about $220–250 (likely range $200–400), against a plan estimate of 60–90 engineer-days.
- **The human part didn't shrink.** The repo ends with a `HUMAN-TODO.md` of 51 open items: registering the App, API keys, data retention and pilot consent, labelling about 100 real PRs, and 2–4 weeks of baseline review data. Nothing had run against real GitHub or the real Claude API, and no human had read the 31,000 lines.

## Why it matters for code review

This is a clean case of steady overnight work beating a heroic sprint, and the reason it held up is the reviewer, not the builder. A single agent with no reviewer would have been "done" much sooner and would have shipped every one of those 24 serious defects. The night was bought with review rounds, re-runs and mutation checks that tired people skip at 2 a.m. Mornati is also clear about the limits. It is one project and one run, the six-week figure is the plan's estimate rather than a measurement, the cost is reconstructed, and "done" meant tested against fakes. Compare [the overnight agent PR whose eleven green tests never exercised production config](/posts/holt-overnight-agent-pr-eleven-green-tests-never-ran/), [Peter Vanhee's nightly loop that is never allowed to merge](/posts/vanhee-nightly-ralph-loop-61-prs-52-merged-never-merges/), and [the Claude Code team's cap on agent-to-agent review rounds](/posts/anthropic-claude-code-team-risk-tiered-review-reverts-down/).
