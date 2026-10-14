---
title: "Twill's two-engineer factory: guardrails cut hotfixes to one a month and tripled time-to-merge"
description: "Oct 6 Cate Huston, Twill: PR volume rose 24× from April to September while features fell from 66% to 16% of PRs and guardrail work rose to 36%. Same-day hotfixes fell from about ten to one; median PR open time went from 1.2 to 3.5 hours."
date: 2026-10-06
kind: field-note
source:
  title: "Is the software factory working?"
  url: https://cate.blog/2026/10/06/is-the-software-factory-working/
project: steward
---

Cate Huston is the part-time CTO of Twill, where two engineers run what she calls a software factory: "agents write most of the code, a merge queue lands it, CI decides what gets through." She wrote scripts to check whether the factory is producing impact "or just endless lines of code," and tracks three things: output, reliability, and efficiency.

## The work shifted toward guardrails

From April to September, PR volume rose 24×. Features fell from 66% of PRs to 16%, and guardrail work (tests, checks, and guards) rose from 12% to 36%. She doesn't read the feature share as decline. September's features were "fewer, bigger" ones backed by more detailed specs, and with two engineers the feature work is the bottleneck while guardrail work "is more mechanical and can scale much further with orchestration." Tests also moved into the work itself: 89% of September feature PRs carried their own tests, up from 62% in April.

## A rule in the instructions file wasn't enough

"Changes must have tests" sat in CLAUDE.md from day one, and "it wasn't reliably true until coverage was a required check." A coverage check doesn't prove the tests are good, so the agents' dispatch instructions now require mutation testing (deliberately breaking code to see whether the tests notice). Her point is that these fixes used to come out of post-incident reviews and now have to evolve all the time: "If you're iterating on your product with AI, you should be iterating on your guardrails too."

## Reliability went up and speed went down

Same-day hotfix releases, her main reliability metric, fell from about ten in August (half in launch week) to one in September. Median time a PR stayed open went from 1.2 hours to 3.5, partly from merge-queue contention and partly because database changes get more human review. The share of PRs landing in two commits or fewer dropped from 67% to 53%. "More guardrails and more checks mean work is harder to land. That's a trade." With two developers incidents are very expensive, so she takes it.

## Why it matters for code review

This is a useful complication for always-on factories. Steady verified output did hold up, but each guardrail made every change slower to land. She says plainly that the setup "can't scale indefinitely; with one or two more developers, it would need rethinking." The numbers come from one small company, and the classification is by PR title plus a more detailed pass. Compare [a harness that held agent work at 92% after personal use swung](/posts/moravik-harnext-enthusiasm-fades-harness-sticks/), [Augment's factory, where merge time fell as output rose](/posts/augment-factory-follow-the-queue-merge-time-fell-as-output-rose/), [an eight-check harness that includes mutation testing](/posts/42nights-otis-eight-check-mutation-harness/), and [why review capacity sets fleet size](/posts/baldwin-heat-death-codebase-review-sets-fleet-size/).
