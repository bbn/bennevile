---
title: "Clipboard's Preflight: an approve-or-skip bot that is now the only reviewer on one in five merged PRs"
description: "With pull requests per engineer doubled in a year, Clipboard built a narrow LLM reviewer that can only approve low-risk changes or hand them to a human. It approves 28% of merged PRs, cut median time to merge for low-risk PRs from 14 to 19 hours down to 1.2, and costs $0.35 a review."
date: 2026-10-12
kind: field-note
source:
  title: "Preflight: Automating Approvals for 28% of Our PRs"
  url: https://www.clipboard.com/resources/blog/preflight-automating-approvals-for-28-of-our-prs
project: steward
---

**Felipe Philipp**, a staff engineer at Clipboard, starts from a familiar number: the team now pushes **2x more pull requests per engineer** than a year ago, and review became a bottleneck. An existing review bot did not help. It was chatty, and engineers rejected around half its comments. Mining six months of PRs, he found that about **30%** were simple, low-risk changes (up to 80% in some repositories), yet the median time to merge was still reaching **19 hours**, simple ones included.

The answer was a deliberately narrow reviewer called **Preflight**. It does one thing: decide whether a PR is low risk. It can only approve or skip, never leave inline comments, and it has no shell or checkout. Instead it calls server-side tools for file reads, dependency checks (vulnerabilities, typosquatting, package age), the Linear ticket, Datadog logs and monitors, cross-repo search, and live feature-flag state. Its verdict is itself a tool call with a schema. If the loop ends without one, it skips. Each repository carries a policy file that maps paths to categories, and anything under CI config, CODEOWNERS, auth, migrations or Terraform is marked human-required. A deterministic check refuses to submit an approval if any changed file is not approvable, whatever the model concluded.

The results: Preflight approves **28% of merged PRs**, is the **only approver on 1 in 5**, and costs **$0.35 per review**. Median time to merge for low-risk PRs fell from **14 to 19 hours to 1.2 hours**. It has made at least one bad call, approving a PR that caused a frontend bug after skipping a tool it needed. The fix was a prompt change, backtested against past PRs including the bad approval, with evals guarding against a repeat. The first version, which saw only the diff, approved just 7%.

## Why it matters for code review

When volume doubles, the review queue fills with work that never needed a person's attention, and that slows the risky work too. Preflight's lesson is that a review agent earns trust by doing less: approve or step aside, check what human reviewers rarely do (package age, flag state, production logs), and leave anything consequential to a deterministic rule rather than the model. Read beside [Meta's RADAR on risk-stratified auto-review at scale](/posts/meta-radar-automating-low-risk-code-review/) and [Chen and Stratton on review absorbing the coding speedup](/posts/chen-stratton-agents-more-code-not-more-software-review-absorbs-it/).
