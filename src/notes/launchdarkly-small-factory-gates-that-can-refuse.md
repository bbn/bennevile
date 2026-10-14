---
title: "A software factory small enough to understand: every station must be able to say no"
description: "Oct 2 LaunchDarkly (Alexis Roberson): a seven-station factory built from GitHub Actions and a headless agent, where the builder is never told about its reviewer, the default token silently skips the factory's own CI, and a post-merge smoke check opens the revert."
date: 2026-10-02
kind: field-note
source:
  title: "Build a software factory small enough to understand"
  url: https://launchdarkly.com/blog/build-a-software-factory-small-enough-to-understand/
project: steward
---

Alexis Roberson's tutorial builds a whole software factory out of parts most teams already run: an issue template, a context file, a GitHub Actions workflow per station, and one headless coding agent. The seven stations are intake, context, planning, execution, review and policy, delivery, and observability. The [tutorial repo](https://github.com/launchdarkly-labs/small-factory) runs on a free GitHub plan and about a dollar of API credit. Her closing line is the point: **"build the stations so that each one can refuse a bad change. That refusal is the product."**

Three details are worth stealing. First, intake requires a **"Done means"** field, and the template says that if you can't fill it in, the task isn't ready for an agent. The planner gets read-only tools and posts a plan a human must approve, because "the plan is where judgment is cheapest." Second, the execution workflow **reruns tests, lint, and type checks in a separate step after the agent claims success**, so the factory always checks what the agent reports. It also pushes with a fine-grained token, because a branch pushed with the default `GITHUB_TOKEN` triggers no other workflows. The factory's own PRs would arrive with no CI, no policy gate, and no reviewer, which she calls "the difference between a factory with gates and a factory with the *appearance* of gates." Third, review is split three ways: CI, a policy job that blocks factory branches from touching `.github/` or `CLAUDE.md` so the factory cannot rewire its own gates, and a reviewer agent with no memory of writing the code. **The builder is never told it will be reviewed.** An agent that knows the rubric writes for the rubric, so the reviewer is told to flag tests that don't exercise the change.

## Why it matters for code review

The first task went from plan approval to verified production in about six minutes, and about 17 minutes including human reading time. That is the honest case for always-on factories: fast because the gates are cheap and automatic, not because nobody looks. The two failure modes she names are the quiet ones that let unattended loops drift. One is a skipped trigger that makes green mean nothing. The other is a stale `CLAUDE.md` that keeps runs "succeeding" on an app that no longer exists. Merge is still a human click here, with a smoke check after it that opens a revert PR. Pair with [Goossaert on a mechanical gate that kept the code honest while nothing checked the factory itself](/posts/goossaert-backlog-loop-mechanical-gate-dark-factory-slop/) and [Lauren Tan's overnight merges, which need a clean verifier verdict on the exact patch](/posts/tenten-pstack-fresh-verifier-swarm-exact-patch-merge/).
