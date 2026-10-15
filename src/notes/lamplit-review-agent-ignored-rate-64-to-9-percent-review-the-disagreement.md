---
title: "From noise to colleague: a review agent's ignored rate fell from 64% to 9%"
description: "Oct 13 Lamplit Labs: a four-stage review-agent workflow (triage, one review with blocking vs advisory, agent re-checks its own threads, then the human) cut median human review from 31 to 14 minutes across 1,106 PRs."
date: 2026-10-13
kind: field-note
source:
  title: "AI SDLC: A Code-Review Agent Workflow That Reviewers Actually Trust"
  url: https://blogs.lamplitlabs.com/posts/ai-sdlc-code-review-agent-workflow/
project: steward
---

**Lamplit Labs'** first review agent commented on everything it noticed: twenty-two comments on a 400-line PR, style nits next to a real race condition, no signal about which mattered. Two teams switched it off within a month, and the ignored-comment rate hit **64%**. The fix was not a better bug-finding prompt. It was a workflow that separates what the agent found from what the human has to decide.

The version that survived a full quarter on three .NET repos has four stages. **Triage first**: about forty seconds to classify files, size, risky directories (queues, migrations, auth) and scope, which picks review depth and gives the human a one-line summary. **One review, two severities**: every comment lands in a single GitHub review tagged BLOCKING or ADVISORY, at most five blocking, style banned because the formatter owns it. The split is enforced in a structured-output schema, so a comment without a severity and a concrete fix is dropped before posting. **The agent re-checks its own threads** after each push, resolves the ones that were fixed, accepts or restates a pushback once, and never argues a third time; 71% of its threads closed with no human touching them. **The human comes last**, and only sees what is still in dispute.

Across 1,106 PRs in Q3: median human review time went from 31 to 14 minutes, review rounds per merged PR from 2.3 to 1.5, and staging defects after merge from 17 to 9 per quarter, at $0.41 of model cost per PR. Authors accepted 83% of blocking comments; 9% were ignored and 8% disputed.

## Why it matters for code review

The metric they watch is the **ignored rate on blocking comments**, not findings count: above 15% on a repo, the weekly retro reads the ignored comments and usually finds one checklist item wrong for that codebase. Each review carries a provenance footer (model version, prompt template hash, triage class) so a disagreement can be traced to the template that caused it. The agent stays advisory to the merge gate; a human can merge over an open blocking thread, but has to do it explicitly. Under sustained agent volume, this is what keeps review from becoming a wall of noise: the human reviews the disagreement, not the diff from scratch. It pairs with the same team's [five gates on 412 agent PRs](/posts/lamplit-five-gates-412-agent-prs-human-reviews-last/) and [Vella's one-reviewer WIP limit](/posts/vella-ten-agents-one-reviewer-wip-limit-accepted-change/).
