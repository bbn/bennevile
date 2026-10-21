---
title: "Carnegie Mellon's Cursor study: a 3–5x burst in lines added, gone after two months, while warnings rise 30% and complexity 41%"
description: "A difference-in-differences study of open-source projects that adopted Cursor, against 1,380 matched projects that did not, finds a large but transient velocity jump and a persistent rise in static analysis warnings and code complexity, which in turn drags later velocity down. Sonar cited it this week to argue verification belongs inside the agent loop and CI, not only at the pull request."
date: 2025-11-06
kind: paper
source:
  title: "Speed at the Cost of Quality: How Cursor AI Increases Short-Term Velocity and Long-Term Complexity in Open-Source Projects"
  url: https://arxiv.org/abs/2511.04427
project: steward
---

[Hao He, Courtney Miller, Shyam Agarwal, Christian Kästner and Bogdan Vasilescu](https://arxiv.org/abs/2511.04427) at Carnegie Mellon set out to measure the causal effect of adopting Cursor on open-source projects. They compare Cursor-adopting GitHub projects with [1,380 similar repositories](https://arxiv.org/html/2511.04427v2) picked by propensity score matching from projects that never adopted it, using a difference-in-differences design.

## The burst, then the bill

The velocity gain is real and short. Projects see [3-5x increases in lines added in the first adoption month, but gains dissipate after two months](https://arxiv.org/html/2511.04427v2); the authors report that [the only significant development velocity gain is in the first two months](https://arxiv.org/html/2511.04427v2). The quality cost does not fade: [static analysis warnings increase by 30% and code complexity increases by 41% post-adoption](https://arxiv.org/html/2511.04427v2), which the abstract calls a [substantial and persistent increase](https://arxiv.org/abs/2511.04427).

A second model then links the two. Their panel estimation finds the rise in warnings and complexity is [a major factor causing long-term velocity slowdown](https://arxiv.org/html/2511.04427v2). The authors are careful not to overclaim: it would take [a 3.28x increase in code complexity or a 4.94x increase in static analysis warnings](https://arxiv.org/html/2511.04427v2) to cancel the adoption gain on its own, so the debt [likely does not fully explain](https://arxiv.org/html/2511.04427v2) why the gain vanishes. Their conclusion is that [quality assurance is a major bottleneck for early Cursor adopters](https://arxiv.org/abs/2511.04427) and should be [a first-class citizen](https://arxiv.org/abs/2511.04427) in agentic tools and workflows.

## Why it is back in circulation

Sonar's Tom Howlett and Anirban Chatterjee cited the study in [The New Stack on October 21](https://thenewstack.io/ai-coding-verification-loops/), arguing that teams should verify [inside the agent's loop, not after the pull request](https://thenewstack.io/ai-coding-verification-loops/), with a separate CI loop and a continuous maintenance loop behind it. Their reasoning on the last one matches the paper's mechanism: [the code produced today becomes the context future agents learn from and work on](https://thenewstack.io/ai-coding-verification-loops/). Sonar sells that verification, so read the prescription with that in mind; the numbers are the paper's.

For anyone weighing a burst of agent output against a slower, continuously verified loop, this is the clearest causal evidence so far that the burst is the part that does not last. Unchecked output buys a month or two of speed and leaves complexity that the next stretch of work has to pay down. Compare the enterprise panel from some of the same authors, where [review capacity had to shift to automation](/posts/he-enterprise-2x-mandate-review-shifted-to-automation/) to keep a doubled PR rate moving.
