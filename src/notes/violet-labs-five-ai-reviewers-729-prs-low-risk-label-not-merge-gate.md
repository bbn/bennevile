---
title: "Violet Labs: five AI reviewers on every PR, audited against 729 merges, and why the Low-risk label still can't skip the human"
description: "Violet clustered five weeks of bot review into 1,072 distinct issues and replayed its rules prompt on nine models. The cheapest valid finding beat the priciest model, two reviewers got cut, and Low-risk PRs still needed follow-up fixes."
date: 2026-10-20
kind: field-note
source:
  title: "Evaluating Agentic Review Effectiveness"
  url: https://www.violetlabs.com/blog/evaluating-agentic-review-effectiveness
project: steward
---

Violet Labs had five AI review automations commenting on every pull request, each in a different role, and, as engineer Dorothy Cheng puts it, no real idea which of them were catching bugs. So the team [went back through five weeks of output against 729 merged PRs](https://www.violetlabs.com/blog/evaluating-agentic-review-effectiveness), collapsed repeated mentions into 1,072 distinct issues, and asked a harder question than comment count: was each finding actually acted on?

The layered design mostly held up. A rules worker that routes files to domain rule packs posted the most findings and saw 85% acted on. An adversarial worker on a different model family fired only about five times in five weeks, and every one was acted on. A synthesizer had zero original findings, which was its job: one thread for the human instead of five. Two reviewers did not survive. A general-purpose reviewer had decent quality (74% acted on) but re-found roughly half of what the rules worker already caught, so it was paying twice for one review. A complexity bot's five findings drew zero action and it was pulled from rotation.

They also replayed the rules worker's production prompt on 98 historical PRs across nine models, more than 1,500 runs graded by a two-model judging panel. **The most expensive model lost on their code.** The production model found more valid issues per PR at lower cost, and a mid-priced model matched the expensive one at roughly a fifth of the cost per valid finding. A weaker model still found 29 issues the production model missed, which made it a poor replacement and a useful second reader.

The part worth pausing on is the obvious next step they tested before anyone proposed it: letting Low-risk-labeled PRs merge without a person. The label was a good classifier; a manual re-review agreed with 46 of 48. But 27 Low-labeled PRs were already linked to a verified post-merge revert, fix PR, or same-line patch within 30 days, and no area of the repo with at least 20 PRs had zero escapes. Human review stays on every PR.

## Why it matters for code review

As review volume climbs, the cost isn't the bots' bills so much as the reading they generate. Measuring acted-upon rate and cost per valid finding, and cutting reviewers that overlap or never land, keeps a steady pipeline from drowning its humans. And a risk label that sorts well is still not evidence a change can merge unseen.
