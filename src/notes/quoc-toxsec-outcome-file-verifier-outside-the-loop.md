---
title: "An overnight loop reads an outcome file it cannot edit, and a separate verifier decides whether it succeeded"
description: "Michael Quoc of Product.ai and the security writer ToxSec on running agent loops for hours unattended: a fixed outcome file with result, limits, tie-breaker and check, a read-only verifier that grades every finished chunk, restarts from the last unit that passed, and human judgment moved to the two ends of the run."
date: 2026-10-06
kind: field-note
source:
  title: "Let It Run: Agent Loops You Can Walk Away From"
  url: https://www.toxsec.com/p/let-it-run
project: steward
---

Michael Quoc, who runs agent loops daily at Product.ai on research, prototypes and code, opens with Anthropic's own comparison: one agent built a retro game maker in 20 minutes for about $9, while a three-agent harness ran six hours for roughly $200, and only the second produced something that responded to input. His claim is blunt: "long-running loops are the most productive thing agents do today." The $200 is "six hours of work that didn't have to wait for days in the human engineering queue." His co-author, ToxSec, adds the other half: "if the agent makes a bad decision at 4 in the morning, how boring can we make the consequences?"

## The rules live where the loop cannot reach them

Every loop starts from an outcome file with four parts: the result, the limits, a tie-breaker for when goals collide, and the check. "The loop reads this file at the start of each cycle and can't edit it." Spend limits sit on the API key, not in the prompt, and a child loop draws down its parent's budget. The reasoning is about long runs specifically: "a rule defined in the context window will eventually be forgotten as the loop runs for hours. Rules enforced at the permission layer are never forgotten."

## The verifier never saw the drafting session

The check is "where we spend most of our design time." The verifier is "a separate agent with read-only access that never saw the drafting session and has no stake in the project it grades." It grades every finished chunk, and "loops restart from the last unit that passed, so a run that fails at hour nine restarts from hour eight instead of from zero." Human approval is not spread across every step. It is moved "to the two ends of the run": people write the rules before, and judge verified results after. Send, spend, deploy, delete and modifying production still wait for a person.

## Why it matters for code review

This is a concrete recipe for steady unattended progress that does not turn into a morning pile of unverified work. The loop's own status report is treated as suspect ("agents report success while systems break"), and the morning checklist says to "read the checker's verdict before the agent's report." It also names the failure mode of busy loops: Faros telemetry showed PRs merged without review up 31% while organizational delivery stayed flat, and a loop judged "by how busy it looks" produces exactly that. Compare Anthropic's [three-agent harness for long-running apps](/posts/anthropic-harness-design-long-running-apps/), [overnight work that ships only what a test can prove](/posts/goatsquad-autonomy-field-what-a-test-can-prove-ships-overnight/), and [release gates that catch checks that never ran](/posts/jeon-silent-success-release-gate-unrun-checks/).
