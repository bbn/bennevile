---
title: "Moderne / Morgan Stanley: AI plans, deterministic tools execute"
description: "Morgan Stanley’s OpenRewrite year at Code Remix — review is the bottleneck, risk-based PR routing via DDRA-style scoring, and agents that invent recipes while CPU tools run the blast-radius map."
date: 2026-07-06
kind: field-note
source:
  title: "AI didn’t break coding. It broke code review."
  url: https://moderne.ai/blog/ai-didnt-break-coding-it-broke-code-review
project: steward
---
Rooz Mohazzabi’s writeup of Dov Katz and Khalid Elsawaf (Morgan Stanley) at Code Remix is the enterprise twin of the Houck/Laycock crush math. After a year of OpenRewrite/Moderne across tens of thousands of repos — thousands of developers onboarded, hundreds of employee-written recipes — the hard part was not generation. It was everything downstream. Senior reviewers are the scarce resource AI was supposed to free. Elsawaf’s line: while they were speaking, a prompt could have produced a thousand-file, 10k-line PR that no human in the room would review.

The historical parallel is useful. QA and DevSecOps both moved scarce work left onto abundant developer tooling. Review has done the opposite: it shifted *right* onto the scarcest humans. So the backlog grows, PRs rot, and “fixed in a central recipe” does not mean merged. Katz’s receipt: until it lands, the fix is worth nothing.

Their answer is not more reviewers. It is risk-based PR routing — the same shape Morgan Stanley already used when DevOps frequency made manual change-approval tickets the bottleneck. Data-Driven Risk Assessment (DDRA) scored changes from system profile, history, and incidents; below threshold gets systematic approval, above gets the old manual path. They are applying that pattern to PRs, and pushing it outward through FINOS’s SDLC Governance Working Group with Deutsche Bank, Kosli, and others so risk-tiered, AI-scale review becomes an industry control set rather than one firm’s experiment.

The architectural claim underneath is the one worth keeping: AI plans and explores; deterministic tools execute at scale. Example: an AssertJ jump large enough to risk deprecated APIs — the agent researched the changelog, wrote a *search-only* OpenRewrite recipe, and the deterministic scan returned the blast-radius file list before anyone committed a rewrite. Weekend Java build-cache rollout across hundreds of repos: agent orchestrates, platform applies, agent watches CI, drafts failed builds, undrafts pre-existing failures, and attaches the log citation. Confidence, not throughput, is the prerequisite they keep naming.

## Why it matters for code review

Software factories that treat every agent PR as equal scrutiny will recreate the change-ticket bottleneck with nicer generators. Match attention to blast radius, keep humans on the high-risk lane, and put deterministic execution under the agent’s plan so “reviewed” means auditable and reproducible — not “a senior stared at 10k lines.” Pair with Houck’s risk-stratified automation and Laycock’s review-by-exception: same control plane, different org’s receipts.
