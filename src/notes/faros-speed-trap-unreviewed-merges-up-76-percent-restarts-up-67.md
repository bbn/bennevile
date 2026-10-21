---
title: "Faros's Speed Trap telemetry: per-PR incident risk settled, but PRs merged with no review are up 76.3% and QA time is up 300%"
description: "Faros's second AI engineering report, built on 12 months of telemetry from 22,000 developers across 4,000 teams, finds the worst early-adoption damage easing per change while the verification load moves downstream: unreviewed merges up 76.3%, time in QA up 300.6%, monthly incidents up 125.4%, and restarted work up 66.7%. Heavy agentic review correlates with better downstream numbers."
date: 2026-09-18
kind: field-note
source:
  title: "The Speed Trap: 8 takeaways from our latest AI engineering research"
  url: https://www.faros.ai/blog/ai-speed-trap-takeaways
project: steward
---

Faros's new report looks at teams that are already deep into AI adoption, using [the most recent 12 months of telemetry from 22,000 developers across 4,000 teams](https://www.faros.ai/blog/ai-speed-trap-takeaways). The headline is that the pipeline is moving but leaking. Faros describes it as [unblocked, but leaky: more work is flowing through, but sacrifices are being made along the way to keep it moving](https://www.faros.ai/blog/ai-speed-trap-takeaways).

## Review is what gets skipped

Six months ago Faros reported [a 31.3% rise in PRs merged without review](https://www.faros.ai/blog/ai-speed-trap-takeaways); [that figure has increased to 76.3%](https://www.faros.ai/blog/ai-speed-trap-takeaways). The changes are also bigger, with [average PR size up 71.8%](https://www.faros.ai/blog/ai-speed-trap-takeaways). Faros's reading is that [review capacity is not growing at the same rate](https://www.faros.ai/blog/ai-speed-trap-takeaways), so under long queues and delivery pressure [teams may reduce or skip review altogether to keep work moving](https://www.faros.ai/blog/ai-speed-trap-takeaways), and those one-off decisions [can become a default operating practice over time](https://www.faros.ai/blog/ai-speed-trap-takeaways). The cost then shows up later in the line: [time in QA is up 300.6%](https://www.faros.ai/blog/ai-speed-trap-takeaways), because [QA inherits the verification burden, where it is often slower and more expensive](https://www.faros.ai/blog/ai-speed-trap-takeaways).

## Safer changes, many more of them

Per-change risk has calmed down. In April [incidents per PR were up 242.7%](https://www.faros.ai/blog/ai-speed-trap-takeaways); now [they are up just 14.5%](https://www.faros.ai/blog/ai-speed-trap-takeaways). But [monthly incidents are up 125.4%](https://www.faros.ai/blog/ai-speed-trap-takeaways), because [there are far more changes moving through the system](https://www.faros.ai/blog/ai-speed-trap-takeaways). Faros's Vitaly Gordon argues the most expensive number is a different one: [work restarts per developer](https://www.faros.ai/blog/the-most-expensive-number-in-our-new-ai-engineering-report), tasks sent back after reaching review or QA, are [up 66.7%](https://www.faros.ai/blog/the-most-expensive-number-in-our-new-ai-engineering-report), against [only 13.8%](https://www.faros.ai/blog/the-most-expensive-number-in-our-new-ai-engineering-report) in April. A restart is [paid for twice](https://www.faros.ai/blog/the-most-expensive-number-in-our-new-ai-engineering-report), once in the tokens for the wrong output and again for the fix, plus the human time to find the error.

## Where agentic review fits

Many companies now [run AI review on 50–80% of PRs](https://www.faros.ai/blog/ai-speed-trap-takeaways), while agents open [13–14% of PRs at the leading edge](https://www.faros.ai/blog/ai-speed-trap-takeaways). Teams that use agentic review heavily [see faster first reviews and lower change failure rates](https://www.faros.ai/blog/ai-speed-trap-takeaways), though Faros stresses [the findings are correlational, and unreviewed merges continue to rise even where adoption is high](https://www.faros.ai/blog/ai-speed-trap-takeaways). Its own recommendation still points upstream: [the greatest leverage lies at the authoring stage](https://www.faros.ai/blog/ai-speed-trap-takeaways).

For anyone running agents around the clock, this is the volume side of the verification problem. Steady output only compounds if the review and QA stages scale with it; otherwise the extra throughput turns into skipped review and restarted work. Compare Faros's earlier [measurement framing for software factories](/posts/faros-software-factory-measurement/).
