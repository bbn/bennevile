---
title: "Jon Roosevelt handed merge authority to his orchestrator and switched to reviewing results"
description: "Oct 12: an agent running delivery across five repos kept asking “want me to merge this?” Hourly batching made the queue worse; merge-on-green was worse in another way. The policy that stuck: CI green and zero unresolved AI-review threads, then a per-repo post-merge check — plus a race where a resolved thread beat its fix commit."
date: 2026-10-12
kind: field-note
source:
  title: "I gave my orchestrator agent full merge authority and stopped reviewing PRs"
  url: https://jonroosevelt.com/blog/i-gave-my-orchestrator-agent-full-merge-authority/
project: steward
---

**Jon Roosevelt**'s orchestrator agent runs software delivery across five repositories. For weeks it read each change, waited for tests, and asked him whether to merge, and every time he said yes and went back to work. Three interruptions into a busy Tuesday he concluded he was rubber-stamping a review the machine had already done.

The wrong turns are the useful part. **Hourly batching** was worse: the queue built up behind him, and green changes that should have shipped in minutes waited half a day for his next glance. **Merge everything green** was worse in a different way; he had already been burned by an agent green that was a lie until the real test ran. "A green build is a floor, not a review."

The policy that stuck has two machine-checkable conditions: CI green **and** zero unresolved threads from the AI reviewer (CodeRabbit). Then, the line he almost skipped: **verify what landed.** Each repo gets its own post-merge check: visual QA on the frontend (the agent clicks through the changed page on the dev site and screenshots it), a test-data workflow against main for the core repo. In the first two weeks that caught one layout break and one integration mismatch nothing pre-merge had seen.

The honest caveat: if an agent resolves a review thread before its fix commit lands, the gate reads "zero unresolved" and merges early. His auto-merge once shipped unfixed code that way. The fix is to check the merged code for the fix signature rather than trust thread state.

His framing: the pipeline already is the review (tests, AI reviewer, post-merge checks), and "a human gating every merge is not a fourth review. It is a queue." Ten minutes a day reading results replaced two hours of pre-merge reading.

## Why it matters for code review

For continuous agent delivery, a human approval step that fires on every PR caps throughput at the human's attention, and batching just moves the wait. Roosevelt moves human attention to after the merge and pairs every merge with a check that runs in the real environment. The thread-resolution race is a reminder that machine gates need the same scrutiny as the code: "resolved" is a claim, as [Reed's evidence ledger](/posts/reed-production-harness-walk-away-draft-pr/) and [OpenHarnX's locked tests](/posts/openharnx-locked-tests-execution-vs-settlement/) argue from the pre-merge side.
