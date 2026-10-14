---
title: "Eight weeks, 866 agent-written PRs: size predicted the reviewer's flags, the model mostly didn't"
description: "Oct 4 Zest (Ilya Volodarsky): every agent PR in two repos carries a self-written session block. Median 37 minutes from open to merge. Matched on repo, engineer and week, the authoring model barely moved the AI reviewer's should-fix rate, while 1,000-line PRs were flagged 36 points more often than sub-300-line ones."
date: 2026-10-04
kind: field-note
source:
  title: "What 866 Agent-Written Pull Requests Show"
  url: https://meetzest.com/blog/what-866-agent-written-pull-requests-show
project: steward
---

Since August 12, every pull request a coding agent opens in Zest's two main repositories ends with a short block the agent writes itself: the harness, the model, minutes spent planning, coding and testing, the task type and the test tools it ran. Ilya Volodarsky's write-up covers the 866 of 1,570 merged PRs through October 4 that carry the block. It's one small team's sustained load over eight weeks, not a demo week, and that makes it useful.

The headline numbers:

- **Merge time.** The median agent PR merged **37 minutes** after it was opened, for both Claude Code (822 PRs) and Codex (31). By model the medians ran from 25 to 47 minutes on PRs of similar size.
- **The model changed under them twice in four weeks.** Any cost or speed figure "per model" goes stale unless each session records which model it ran on.
- **Coding was 43% of session time.** Local testing took 29% and planning 22%; the median session behind one PR ran 48 minutes.
- **Tests travel with fixes.** 93% of the bug-fix PRs touched a test file, and 86% of PRs with a block did, against 61% of PRs merged in the same weeks without one.

## Why it matters for code review

Every PR also gets a first pass from an AI reviewer. Raw should-fix rates ranged from 23% to 55% by authoring model, which looks like a model story until you control for when the work happened. Matched on repository, engineer and week, the Codex-versus-Claude Code gap shrank to one point with a wide interval, and only one model gap barely survived. **Size** did survive: PRs of 1,000 lines or more were flagged 36 points more often than PRs under 300 lines (interval +27 to +43), and the gradient held in August and late September alike. Under 100 lines, 11% were flagged; between 1,000 and 3,000, 57%.

The review loop after the first pass is mostly agent-to-agent. In the 30 days to October 4, 58% of reviewed PRs got at least one fix round; of 2,273 findings the agents answered, they fixed 80%, declined 18% and handed 1.6% to a human. Above 3,000 lines the flag rate stops rising partly because each reviewer lane reads a capped slice of the diff, which is a quiet warning that a large PR can look cleaner simply because less of it was read.

For a steady always-on setup, the takeaway is that the lever you control is the shape of the work, not the model choice: small PRs, a recorded session block, and review run on your own merged history in matching weeks. Volodarsky lists the caveats himself: one team, self-reported minutes, and 704 PRs without a block. Pair with [measuring the queue in review minutes rather than agent count](/posts/lawzava-review-queue-real-agent-limit-review-minutes/) and [a 562-PR stretch that merged in small, flagged pieces overnight](/posts/indeev-spare-562-prs-goals-overnight-auto-merge/).
