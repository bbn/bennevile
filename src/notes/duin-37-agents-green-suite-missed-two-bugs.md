---
title: "37 agents, one afternoon, every test green, and two real bugs only a reviewer found"
description: "Aug 27 Ralph Duin, Inspired by Frustration: a lead agent that never edited a file ran 37 subagents across seven worktrees, finished 15 of 16 tasks for about $49, and merged nothing to main. The two bugs worth reporting got past 1,374 passing tests and were found by fresh-context reviewers who opened the rendered PDF and reproduced a stale cache."
date: 2026-08-27
kind: field-note
source:
  title: "One Lead, 37 Agents, ~$50: a 16-Task Build in an Afternoon"
  url: https://inspiredbyfrustration.com/blog/one-lead-37-agents-16-task-build-field-report
project: steward
---

Ralph Duin's report covers one afternoon of fan-out work: one lead agent that "never wrote a line of code," **37 subagents** (16 implementers, 16 reviewers, 5 re-reviewers) in **7 isolated worktrees**, 15 of 16 planned tasks finished, the test suite up from 1,341 to 1,439, seven green merges into an integration branch, and **about $49** of model spend. Then the line Duin calls "the honest part of the headline": **nothing on `main`**. "The afternoon bought a verified branch and an audit trail — not a release."

## What green tests could not see

Headings in the generated PDF came out spaced like "Sum m ar y Rep or t" while "all 1,374 tests at that moment were green, because the tests checked the text content and the text content was correct." A reviewer "opened the rendered PDF rather than the diff" and traced it to the font embedder substituting glyphs with no width entry. The second bug: editing an answer changed the document but not its cache key, "so the system happily served the previous PDF." That one was reproduced live, fixed in one line, and the new tests were proven non-vacuous by reverting the fix and confirming "exactly those tests fail." Duin's summary: "A green suite proves the code you wrote, not the artifact you ship."

## What the review seats bought

Every implementer and reviewer started on fresh context, so "the reviewer had no memory of writing the code it reviewed, which is the entire reason the review is worth anything." One implementer defended a deviation with "the client needs this field"; the reviewer read the server source, showed the field was never read, and the change was reverted. The plan itself was attacked twice before any code, and round one came back no-go with four blocking defects. Twenty-two decisions were written down as rulings with a "cost if wrong" line, which Duin says "is what stops a coordinator from either rubber-stamping or freezing."

## Why it matters for code review

A burst of parallel agents can produce a lot of verified-looking work very quickly, and this report is candid that the useful output was a branch a human still has to approve, not shipped software. The bugs that mattered sat in the rendered artifact and the cache, where the tests did not look, and independent reviewers paying for their seat is what caught them. Speed of generation was never the constraint; checking the thing you actually ship was. Compare [an overnight agent PR whose eleven green tests never ran the real config](/posts/holt-overnight-agent-pr-eleven-green-tests-never-ran/), [proving a bug red before trusting a green fix](/posts/cockayne-twenty-one-green-fixes-prove-bug-red-first/), and [a harness that never believes the agent's own test report](/posts/frozer-factory-harness-never-believes-agent/).
