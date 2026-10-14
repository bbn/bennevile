---
title: "JetBrains' Gleb Malkov: faster developers don't make a faster team"
description: "In an Oct 7 JetBrains Air post, Gleb Malkov reports discovery calls across agencies, telcos, game studios and consultancies: individuals get faster with agents, but team delivery stalls. Shared setups stay informal; a mapping company saw PR time go up; and overnight automations create a new ops burden of ownership, distribution and governance."
date: 2026-10-07
kind: field-note
source:
  title: "Faster Developers Don't Make a Faster Team — Gleb Malkov (JetBrains)"
  url: https://blog.jetbrains.com/air/2026/10/faster-developers-don-t-make-a-faster-team/
project: steward
---

[Gleb Malkov](https://blog.jetbrains.com/air/2026/10/faster-developers-don-t-make-a-faster-team/) at JetBrains opens a customer-discovery series with a pattern he says holds from a 16-person agency to shops with thousands of developers: almost nobody is still asking whether to use AI agents, and the stall is not at the individual seat. "Individual developers can now move much faster with agents… The team level is where the gains stall."

## Three ways the team absorbs the speed

First, everyone has an agent and almost nobody shares the setup. Practices live in personal configs and morning coffee. Where base rules are copied across a hundred repos, updates drift. A mapping company's engineering manager puts a Pareto on it: "20% of the engineers are generating 80% of the code or consuming 80% of the tokens."

Second, "Implementation got cheap. Review didn't." The legal-tech head of engineering already runs an AI review gate before any human looks at a PR, and still sees bottlenecks move to review and planning. The mapping company measured the regression: "If we looked at the pure numbers, PR time actually increased." A networking vendor's platform group puts the consumption problem plainly: "Just because you can build 100 things doesn't mean you should. People can't consume that much." Malkov's summary line is the one to keep: "If verifying the output costs more than the savings it generated, the team has actually regressed."

Third, the overnight wish list — documentation sweeps, library upgrades, vulnerability fixes — creates a new operational burden. An agency wants to leave work at the end of the day and find it done in the morning. The teams that built webhook-driven agents in Docker then hit ownership and distribution: who maintains the automation, and how do updates reach every customer project? Governance fights follow when "everybody wants to create an agent."

## How it fits

This is field evidence, not a vendor demo, that individual agent speed does not compound into team throughput without shared harness, review built for agent volume, and owned background loops. It sits next to [Emma Bostian's argument that faster code isn't faster delivery](/posts/bostian-leaddev-faster-code-isnt-faster-delivery-author-owns-review/) and [Nakhat's measured case where doubled PRs went into approve buttons](/posts/nakhat-agents-doubled-prs-review-went-to-approve-buttons/). The productive complication for always-on factories: continuous agents only win if the review and ops layers scale with them; otherwise the verification tax turns the speedup into a slowdown.
