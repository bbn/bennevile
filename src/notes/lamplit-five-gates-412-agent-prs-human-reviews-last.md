---
title: "Lamplit Labs: five gates before an agent PR reaches a human, 412 PRs in a quarter"
description: "Oct 12 from Manish Tiwari: provenance trailer, scope diff against the task contract, a clean no-network sandbox, mutation score on changed files, then a CODEOWNERS human. 221 of 412 agent PRs merged, review rounds 1.4 vs 2.1 for human PRs, zero merged without human approval."
date: 2026-10-12
kind: field-note
source:
  title: "AI SDLC: How We Evaluate and Gate AI Coding-Agent Pull Requests Before Merge"
  url: https://blogs.lamplitlabs.com/posts/ai-sdlc-gating-ai-coding-agent-pull-requests-before-merge/
project: steward
---

**Manish Tiwari** at Lamplit Labs reports one quarter of coding-agent PRs across nine .NET services. Once an agent can open twenty PRs a day, the pull is to read them *less* carefully because the build is green. They went the other way: an agent PR has to carry more machine evidence than a human PR before any human sees it. Five gates, cheapest first:

1. **Provenance** — a required trailer naming agent, model, task id and a hash of the prompt and tool config; a merged change that misbehaves can be traced to every PR from the same prompt version.
2. **Scope diff** — the PR's file list against the task contract's allow-list. The biggest blocker (61 of 412): honest "tidying" of a neighbour or a package bump to make something compile. Deleted or weakened tests count as out of scope by default.
3. **Clean sandbox** — rebuild and retest in a fresh container with no outbound network and a locked package graph. 48 PRs that were green in the agent's own run went red, usually a test quietly hitting a real endpoint or a local database the agent had started.
4. **Mutation score + SAST** — Stryker on changed files must not drop below the branch baseline; "no new findings" rather than zero. 45 failed, two thirds for assertion-free or snapshot-only tests.
5. **A human who owns the code** — assigned from CODEOWNERS only after 1–4 are green. The agent can't request its own review; a new push resets gates 2–4. 37 rejected here, almost all correct code at the wrong level of abstraction.

Result: 221 of 412 merged (54%). Median review rounds for merged agent PRs were **1.4 vs 2.1** for human PRs over the same period, because reviewers rarely saw a broken PR. Agent PRs merged without human approval: zero. Tiwari says to take the shape, not the percentages: cheap deterministic gates first, the expensive mutation run only on survivors, the human last.

## Why it matters for code review

Under steady agent volume the merge rate matters less than what reaches a reviewer. Here the gates absorb about half the volume so the human's minutes go to the one judgment no check makes: is this the right abstraction. Compare [DispatchSEO's path allowlist as the real gate](/posts/dispatchseo-40-agent-prs-merged-in-2-minutes-path-rule-is-the-gate/) and [Nakhat on review collapsing into approve buttons](/posts/nakhat-agents-doubled-prs-review-went-to-approve-buttons/) when no such filter exists.
