---
title: "MegaLens fact-checked its own AI security review: about 44% of agreed findings didn't hold up, and multi-model agreement didn't help"
description: "A review vendor ran 30 mostly AI-written apps, sampled 20 of 160 findings and had two checker models verify them. 7 of 16 agreed verdicts were false, 0 of 9 critical labels survived, and its fixes changed the labels rather than the false positives."
date: 2026-10-09
kind: field-note
source:
  title: "We ran AI code review on 30 apps. Then we fact-checked our own findings."
  url: https://megalens.ai/research/ai-code-review-false-positives
project: steward
---

MegaLens, which sells an AI security review, [ran it on 30 public GitHub apps and then checked how far its own output could be trusted](https://megalens.ai/research/ai-code-review-false-positives). Twenty-five of the apps were written with AI. The batch took 18 minutes and $5.67 in model fees and returned 160 findings, a median of five per app, which is the number a review tool would normally lead with.

Instead it drew 20 findings at random, weighted toward critical labels, and had two models from different companies check each against the code independently. On the 16 they agreed on, **7 were not real, about 44% (95% interval 23% to 67%), and none of the 9 critical labels was rated critical by both checkers.** The false positives had three repeat causes: the reviewer saw too thin a slice of the project, the protection it called missing lived one call down or in a database constraint, and intended behaviour, like admins seeing revenue on an admin page, was read as a flaw.

Agreement between models didn't rescue it. Findings raised by two or more models were real in 5 of 10 cases, against 4 of 5 for single-model findings, with overlapping intervals. MegaLens's narrower conclusion: a second model surfaces what the first missed, but doesn't make what they agree on true. Its fix was to require the audit to quote the line a verdict rests on and to mark unsettled findings as disputed or unverified. After two rounds, critical labels in the sample fell from 9 to 2, but the same 7 false findings were still false. The labels got more honest; the findings didn't get more accurate. The first round also briefly made things worse, approving findings with one-word reasons like "Confirmed."

The sample is small, no human reviewed the findings, and the authors say so plainly.

## Why it matters for code review

When review volume rises, teams lean on automated findings and on models cross-checking each other. This is a useful counterweight from a vendor willing to publish its own error rate: the verification tax doesn't disappear because several models nod, and an honest "unverified" label is a real improvement even when the underlying precision isn't. The four findings the checkers disagreed on are the instructive ones, because each turned on context a reviewer had to go find.
