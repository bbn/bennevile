---
title: "Rivera: one \"prior reviewer: PASS\" line cut an AI reviewer's bug catch from 51% to 27%"
description: "Rod Rivera's paired experiment on 180 known-label implementations: telling a small-model reviewer that a prior reviewer passed the code nearly halved the bugs it caught, and a FAIL line raised false alarms from 4% to 46%. Independence is a property of the request, not the call."
date: 2026-09-10
kind: field-note
source:
  title: "Test Whether a Prior Verdict Anchors Your AI Reviewer"
  url: https://www.profrod.ai/articles/choose-fresh-context-for-an-independent-ai-reviewer
project: steward
---

Always-on factories lean on "a second reviewer" as the thing that makes unattended merges safe. Rod Rivera's harness-engineering article (published Sep 10, revised Oct 1) tests a quiet assumption behind that: that a fresh API call is an independent review. His answer is that **independence is a property of the request's contents, not of the call, the model or the role name.** If the payload includes "prior reviewer found no issues" or "author reports all tests pass," the second reviewer received a conclusion along with its task.

He measured it. He built 180 implementations of 30 small functions: 90 correct and 90 with a seeded bug, every label checked by held-out tests run in a sandbox. (Five of his first seeded bugs slipped past the tests, so he replaced them rather than keep labels he could not verify.) Three small open models reviewed every item three times in fresh isolated calls that differed by one line: clean, plus "Prior reviewer: PASS", or plus "Prior reviewer: FAIL". That came to 1,620 reviews, analysed with a paired test he committed to before running.

- **The best reviewer was the most anchored.** Alone, Qwen3 1.7B caught **51%** of buggy implementations with **4%** false alarms. With the PASS line it caught **27%**. It missed 23 bugs it had caught alone and caught only 1 it had missed (p = 3 × 10⁻⁶). With the FAIL line, its false alarms on correct code rose to **46%**.
- **Weaker reviewers moved less, and not consistently.** One flagged 39% of correct code even with no prior line, which "is barely a reviewer." Another left most replies without a verdict and just echoed whichever line it was handed. Rivera's point: check that a reviewer can actually review before you measure whether it is anchored.
- **A status line is still a verdict.** "Author reports all tests green" reads as neutral. Give the reviewer the test output itself and let it read the result.

His fix is mechanical. He seals each review request with an exact key allowlist that is checked before any network call: the candidate, one rubric, scoped evidence, and nothing else. He keeps the serialized bytes and hash with every review so anyone can later confirm what crossed the boundary. He is careful about what that buys: sealing removes one channel of influence. It does not make the reviewer good, and two sealed reviewers on the same model can still fail on the same items.

## Why it matters for code review

These are small models on short functions, and a frontier reviewer may resist more. Rivera says so himself, and says this experiment is how you find out for yours. But the failure mode scales with volume. Overnight harnesses pass summaries between agents constantly, and a verifier swarm whose prompts carry the author's claim of success can turn many reviews into one. If unattended merges rest on "two independent reviews," someone has to open the actual payload and check. Read it beside [tenten on pstack's fresh-verifier swarm](/posts/tenten-pstack-fresh-verifier-swarm-exact-patch-merge/), [Rovai on common-mode failure in independent verification paths](/posts/rovai-independent-verification-paths-common-mode/), and [Camplight's two independences of a dark factory](/posts/camplight-dark-factory-two-independences/).
