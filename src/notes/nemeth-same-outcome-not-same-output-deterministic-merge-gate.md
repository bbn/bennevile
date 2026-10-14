---
title: "Németh: same outcome, not the same output — make the merge gate deterministic"
description: "Oct 6 from Máté Németh: LLMs stay non-deterministic, so his autonomous loop aims for the same landing conditions, not the same diff. 653 rounds since August, 108 PRs merged by plain code since Sep 29, refusals pinned to commits, and a one-way guardrail ratchet that still needs consolidation."
date: 2026-10-06
kind: field-note
source:
  title: "Same outcome, not the same output"
  url: https://matenemeth.dev/posts/same-outcome-not-same-output/
project: steward
---

Someone asked Máté Németh how an AI agent can be idempotent when the model is not deterministic. His answer: **you don’t make the model idempotent**. You make the parts that decide what lands on `main` deterministic. Give his autonomous loop on Tallyroot the same issue twice and you get two different diffs. What has to stay the same is the gate every change must pass.

**Numbers as of the post.** 653 rounds logged since August; seven on the day he wrote it; one of those rounds would have been $7 to $27 at API prices (it runs on a Claude Max subscription, so nothing was billed). **108 PRs merged by plain code** since September 29. Guardrail tests: 151. Playbook lessons: 222.

**What is allowed to vary.** Almost everything an agent does — which file it opens, how it names things, how many turns it takes, what the reviewer nitpicks. He stopped asking the model for the same output and asked the system for the same outcome: nothing reaches main unless it passed the same checks as everything else.

**What is not.** Agents answer in a fixed schema. Before any agent starts, code checks the input (open issue, not an epic, not blocked, no open PR). Since the loop [left Claude Code](/posts/nemeth-agent-loop-runtime-merges-not-the-agent/), the merge is not an agent: the agent can only say a PR is ready and which commit it tested; the runtime re-checks the commit, GitHub green, and the full suite in a fresh checkout, then merges exactly that commit.

**Idempotency lives on the commit.** A refusal belongs to a commit — the loop never retries that commit; only a new commit clears it — so a flaky suite cannot be rerun until it happens to pass. A step only retries if the agent never started (zero turns). An agent that already pushed or opened a PR is never restarted from scratch. On the day of the post: a round built a fix, review passed, then the merge step died on an API overload; the next round resumed the PR, applied six small review fixes, and hit the gate; his internet dropped, database tests hung for 17 minutes each, and the gate refused past a 30-minute limit. Afterwards the same command on the same commit: **7,129 tests passed**, and he merged it. Two rounds, an overload and an outage — same outcome: that commit on main with that suite green.

**The ratchet.** Every near-miss becomes a lesson, and when the mistake can be checked mechanically, a guardrail test. Favorite example: agents reaching for `.rowCount` (from `pg`) on postgres.js, where the field is `.count` — the write succeeds, the “did it change a row?” check silently answers no. The guardrail is a source scan that fails the build if `.rowCount` appears outside a comment. The catch, carried from [the 500-round post](/posts/nemeth-500-rounds-autonomous-loop-checking-costs-more-than-writing/): the ratchet only turns one way, and without consolidation the loop’s own machinery becomes the product.

## Why it matters for code review

Continuous verified throughput does not need the model to repeat itself. It needs the **same admission rules** on every always-on cycle — schema’d agent outputs, commit-pinned refusals, and a merge that plain code owns — so overnight work compounds as reviewable landings instead of novel heroics. The psychological FOMO that agents aren’t working while you sleep is answered here by a gate that keeps refusing until the evidence matches, not by a longer peak Claude Code session. Pair with [Reed’s draft-PR-or-BLOCKED harness](/posts/reed-production-harness-walk-away-draft-pr/) and [DispatchSEO’s path rule as the gate](/posts/dispatchseo-40-agent-prs-merged-in-2-minutes-path-rule-is-the-gate/).
