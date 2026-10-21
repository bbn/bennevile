---
title: "Harness and Cosmos: the factory keeps owning a service after the merge, and auto-approval widens one change class at a time"
description: "Harness and Augment's Cosmos describe a continuously running software factory where agents stay with a service after merge, take back reverts and failed verifications, and earn wider auto-approval from their own revert and verification record. The agent cannot merge to main even if prompted, and a human still makes every merge."
date: 2026-10-13
kind: field-note
source:
  title: "Inside a governed software factory: Harness and Cosmos"
  url: https://www.harness.io/blog/inside-a-governed-software-factory-with-harness-cosmos
project: steward
---

Harness's write-up of how it fits together with Cosmos, the agent platform it got by [acquiring Augment Code](https://www.harness.io/blog/harness-acquires-augment-code-cosmos), describes factories that [run continuously, with people stepping in only where their judgment is needed](https://www.harness.io/blog/inside-a-governed-software-factory-with-harness-cosmos). Work starts from events, [a PR opening, an alert firing, or a ticket being filed](https://www.harness.io/blog/inside-a-governed-software-factory-with-harness-cosmos), and the factories themselves are [defined as code, so they are versioned, reviewed, and rolled back like any other change](https://www.harness.io/blog/inside-a-governed-software-factory-with-harness-cosmos).

## The PR is not the finish line

The new idea in this post is about what happens after merge. [The factory is not finished when the pull request opens](https://www.harness.io/blog/inside-a-governed-software-factory-with-harness-cosmos): it is assigned to a repository, a service or a class of finding, the way a team is. [If verification fails, the same Experts see the evidence. If a revert fires, they pick the work back up.](https://www.harness.io/blog/inside-a-governed-software-factory-with-harness-cosmos) The authors contrast this with [a coding agent that opens a PR and disappears](https://www.harness.io/blog/inside-a-governed-software-factory-with-harness-cosmos). Production signals [become new work](https://www.harness.io/blog/inside-a-governed-software-factory-with-harness-cosmos), and review comments, incident follow-ups and triage corrections [are stored in Expert memory](https://www.harness.io/blog/inside-a-governed-software-factory-with-harness-cosmos), so each change starts with what the last one taught.

## Autonomy is earned from the record

Auto-approval is narrow by design. `cosmos approve` approves a PR [only when the requester owns every changed file, no review findings are open on the current commit, and the Verifier has found no contradicting evidence, and a human still makes the merge](https://www.harness.io/blog/inside-a-governed-software-factory-with-harness-cosmos). On the Harness side, a worker agent's token is [minted per run, scoped to the intersection of the agent's permissions and the triggering user's RBAC](https://www.harness.io/blog/inside-a-governed-software-factory-with-harness-cosmos), and the same policies that gate production deployments gate the agent, [so it cannot merge to main even if its prompt tells it to](https://www.harness.io/blog/inside-a-governed-software-factory-with-harness-cosmos).

The widening is gradual. [Verification results, revert rates, and audit trails show which kinds of change the factory handles reliably](https://www.harness.io/blog/inside-a-governed-software-factory-with-harness-cosmos), and organizations [use that record to widen auto-approval one class of change at a time](https://www.harness.io/blog/inside-a-governed-software-factory-with-harness-cosmos). The authors' framing: [governance is what lets an organization give agents more autonomy](https://www.harness.io/blog/inside-a-governed-software-factory-with-harness-cosmos). They also warn that [adoption lags deployment](https://www.harness.io/blog/inside-a-governed-software-factory-with-harness-cosmos), because teams needed weeks to tune guardrails and learn to trust each agent.

## The numbers, and whose they are

On the Cosmos team's own development, after review moved to Cosmos, [weekly output tripled while bug-introducing commits per unit of output fell from 0.097 to 0.006](https://www.harness.io/blog/inside-a-governed-software-factory-with-harness-cosmos). Its Incident Investigator [handles 81% of incidents and cuts the median time to first RCA from 30 to 6 minutes](https://www.harness.io/blog/inside-a-governed-software-factory-with-harness-cosmos). These are a vendor's figures about its own product. The merge-time and revert numbers repeated in the post were covered in [Augment's factory case study](/posts/augment-factory-follow-the-queue-merge-time-fell-as-output-rose/).

For teams running agents around the clock, the useful part is the shape of the loop: the agent stays responsible for its change after merge, failures come back to it with evidence attached, and the scope of what merges without a close look grows only as fast as the track record supports. Compare the earlier note on how Cosmos [specializes the PR-to-merge loop](/posts/augment-optimizing-pr-to-merge-loop/).
