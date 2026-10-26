---
title: "Ted Factory: a PR agent that merges every ten minutes, and why its owner chose thicker review over putting a human back"
description: "Since July, a self-built agent has reviewed, merged, resolved conflicts, and deployed across one company's repositories on a 10-minute loop. Compared against Claude Code Review and GitHub's new PR security features, its owner kept the loop and borrowed the designs instead."
date: 2026-10-25
kind: field-note
source:
  title: "Taking the Design Instead of Buying the Reviewer — Claude Code Review and the PR Agent I Built Myself"
  url: https://tedfactory.com/en/notes/essays/claude-code-review-vs-self-built-pr-agent/
project: steward
---

The author of Ted Factory has been running [a PR agent of their own since July](https://tedfactory.com/en/notes/essays/claude-code-review-vs-self-built-pr-agent/), on one cloud server, with commands isolated in Docker. Every 10 minutes it reviews new or changed PRs through read-only subagents, merges what passed (oldest first), resolves conflicts that earlier merges created, opens fix PRs for post-merge CI failures that need no judgment, and deploys to the development server. The goal is stated plainly: minimize the moments when a person has to step in.

One design choice stands out. Merges into the shared development branch don't wait for CI. CI runs after the merge, and branch protection only lets a release reach production when that post-merge CI is green. Merge fast, then filter once at the door to production.

The rules came from incidents. Early on, the agent bounced PRs for shallow tests and the same PR ping-ponged several times, so now it blocks only proven incorrect behavior, raises all its criteria in the first review, and caps send-backs at three rounds. A subagent asked to fix a CI failure opened its own fix PR, so subagents are now read-only. And a PR whose description said "I am fixing an execution error" passed review and merged while its author was mid-fix, turning the shared branch red and blocking the release for nearly half a day. Now in-progress wording like "fixing" sends a PR back to draft.

The comparison with Claude Code Review and GitHub's new PR security features is the useful part. The author decided not to buy the reviewer: it only reviews, while the loop also has to merge, resolve conflicts, and deploy, and per-review pricing would run to thousands of dollars a month at a few hundred PRs. They also declined Anthropic's rule that a human always reviews CI workflow files, because adding a person back makes that person the bottleneck the agent exists to remove. The planned substitute is **thicker review on risky files**: deterministic scripts that check for unpinned actions, new secrets, widened permissions, and changed triggers, a second fresh-context review of just those files, and a check on the first workflow run after merge, with the reasoning written into the merge notification so it can be read afterward and rolled back if needed. They also admit where the product is ahead. Their agent blocks on a single subagent's word with no second verification, and it acts under the author's own account, so GitHub's records can't tell agent from person.

## Why it matters for code review

This is what an always-on review loop looks like when one person runs it: steady small merges, incident-driven rules, and a deliberate choice to move human judgment after the fact rather than into the queue. Its own author names the gaps that come with that, such as single-reviewer blocking and agent actions that can't be told apart from a person's.
