---
title: "A two-week self-healing loop opened 152 PRs with no human-written code; the 80 merged each came with the bug reproduced and shown gone"
description: "Replay's pilot chained Fullstory (detect), Replay QA (diagnose and verify) and Obvious (fix) on its own repo, with an engineer's merge as the only human step: 124 distinct bugs, 76 fixed on main at about 5.4 a day, and the argument that proof, not generation, made the PRs mergeable."
date: 2026-10-06
kind: field-note
source:
  title: "What our experimental self-healing software loop shipped in two weeks"
  url: https://www.replay.io/blog/what-our-experimental-self-healing-software-loop-shipped-in-two-weeks
project: steward
---

**Thomas Daly** at Replay reports a pilot run from September 18 to October 1 on Replay's own repository. A loop of three products opened **152 pull requests**, none written by a human, and **80** were merged without additional testing by someone on the team. Replay sells one of the three products, so read it as a vendor's own field report — but it publishes where every PR ended up.

**The loop has five handoffs and one human decision.** Fullstory flags problems in real production sessions. Replay QA reproduces each one, finds the root cause and files a GitHub issue with severity and evidence. Obvious opens a fix PR linked to the issue. Replay QA then checks the PR preview for regressions and reproduces the original bug against it — by replaying the recorded session for frontend changes, or reproducing it independently for backend ones. An engineer reviews the PR and the QA report and decides whether to merge.

**The numbers.** Of the 152 PRs: 46 merged and verified by session replay, 34 merged and verified by independent reproduction, 45 still open, 27 closed — mostly superseded attempts, because a PR that was closed or failed QA prompted another. Underneath were **124 distinct bugs**; 76 are fixed on main, about **5.4 a day**, with a three-day median from PR to merge. Eighteen bugs needed more than one attempt; one Segment PII leak took four. The loop opened 99 PRs in the first three days, and once that backlog cleared, merges kept pace with new PRs. Performance work was 43% of what got fixed — oversized payloads, no-cache responses, request waterfalls, the sort of thing that sits in a backlog because nobody owns it. High-severity bugs were fixed least often (9 of 22, against 28 of 40 low), because those more often needed a judgment call about intent, "which is where we kept the human."

**The claim:** "Generation was never the hard part. … What made 80 of them mergeable was proof." The reviewer was never asked to trust a model's account of its own fix. Daly ties this to Google's automated-program-repair work, which found about 30% more bugs fixed when a reproduction test was available, but only 28% success at reconstructing one from a bug report.

## Why it matters for code review

After the opening burst, this is a loop holding a steady pace that the reviewer could keep up with, because each merge arrived with a replayable reproduction rather than a summary. Pair with [Chris Kelly's LeadDev guide to software factory loops](/posts/leaddev-software-factory-loops/), which Daly quotes on verifiers posting "a replayable trace," and [a 24/7 agent's replay-gated rule loop](/posts/yureki-post-mortem-loop-replay-gated-agent-rules/).
