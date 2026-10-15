---
title: "Atlassian's Jira team split AI review into two agents: match the guideline, then review against it"
description: "Oct 14 Atlassian: one agent holding every team's guidelines gave out-of-scope advice. A matcher now routes changed files to the owning directory's guideline doc, and a reviewer checks the diff against only those. First pass: ~7 minutes instead of up to a day."
date: 2026-10-14
kind: field-note
source:
  title: "How we accelerated code review in a large monorepo using Agentic Pipelines"
  url: https://www.atlassian.com/blog/bitbucket/how-we-accelerated-code-review-in-a-large-monorepo-using-agentic-pipelines
project: steward
---

Atlassian's Jira team describes a failure that shows up in any shared monorepo: their AI reviewer told a developer fixing a CSS bug to rethink how the component fetched data. The comment was confident and well written, and it was about code the developer hadn't touched. The cause was scope. Each product team keeps its own review guidelines for its directories, and an agent handed **all of them at once** has to pick the right document and review the code in the same pass. When it picks wrong, the comment is about the wrong thing.

The fix was to split the job into two agents connected by one pipeline artifact. The **matcher** reads the PR, pairs each changed path with the guideline file from the owning directory, writes that list to `tmp/pr-analysis.md`, and stops. Most of its prompt is about what it must not do: no reviewing, no comments, no extra files. The **reviewer** starts fresh with the diff and only the documents the matcher named, and is briefed as that area's principal engineer. It leaves inline comments only for critical issues and real concerns, with no praise, nitpicks or summaries, and it can't push commits. The author and a human reviewer still decide what changes.

On one very large PR both steps finished in about **seven minutes**, against the half day to full day authors used to wait for a first review pass. The team is careful to call that one run, not a benchmark, and says speed was the easy part. Most of the effort went into the **guideline files**, not the prompts. Vague guidelines produce vague comments whatever model runs them. The owning team reads the bot's comments alongside the author and edits its guideline file whenever a comment misses something or cites a rule the file never stated. Two smaller lessons: keep the matcher's output dull, because the reviewer treats any observation it adds as a settled conclusion, and take the PR ID from the pipeline, because a sample ID left in a prompt can send the agent to review the wrong PR.

The broader point is ownership. The second agent only earns its keep when different directories have different owners who have already written down how they review. A machine reviewer is only as good as the rule it cites, so the work shifts to each team keeping its own rules specific and current.
