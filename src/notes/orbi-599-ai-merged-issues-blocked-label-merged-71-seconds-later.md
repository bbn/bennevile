---
title: "Orbi: 599 issues merged by its own loop, and a blocked label the merge gate never read"
description: "Oct 1 (updated Oct 9) from Lawrence Liu: an issue-to-release loop that delivers its own repo merged a PR 71 seconds after a human labelled it ai-blocked, because the gate re-read CI but not labels. Also: headless claude -p exits 0 when every write was denied."
date: 2026-10-01
kind: field-note
source:
  title: "Claude Code headless mode exits 0 despite denials"
  url: https://orbi.build/blog/run-claude-code-unattended/
project: steward
---

**Lawrence Liu** builds Orbi, a loop that takes GitHub issues through to merged, released changes, and Orbi has been delivering its own repository since late August. In the normal flow nobody writes, reviews, or merges code by hand. A person adds labels, makes the calls the loop can't, and looks at pages before production. When the post went up on October 1, **599 issues carried the `ai-merged` label**.

The first half of the post is a trap for anyone wrapping `claude -p` in cron. Liu ran three headless sessions on October 9 to see what a script actually gets back. When a write was denied because nothing could approve it, **the run exited 0** with `"subtype": "success"` and `"is_error": false`. The only sign was a non-empty `permission_denials` array. "That job can exit 0 night after night with nothing done." His script checks three things: the exit code, `is_error`, and the denials list.

The second half lists six things a bare loop leaves unanswered: which task (and only once), which system user, who reviews, when it may merge, what happens on failure, and who ships. Orbi's answers come with the incidents that produced them:

- **Who reviews:** a fresh session reads the exact base and head commits against the issue's acceptance criteria, fixes what it finds, reruns the full suite, and posts a verdict. The session that wrote the change never reviews it.
- **When it may merge:** at 16:47 UTC on September 29, Liu labelled an issue `ai-blocked` and commented that its PR must not merge. **Seventy-one seconds later the runner merged it.** The gate re-read base, head, and CI, but not the issue's labels. He reverted it. Orbi then claimed the follow-up issue, passed independent review with no findings, and merged the fix 45 minutes later. The gate now reads labels one last time and uses `gh pr merge --match-head-commit` so only the reviewed SHA can land. Even so, a label added between that read and the merge still gets through.
- **Which user:** after reading about an attack that runs programs through a repo's git config, Liu had Orbi write and merge 1,164 lines of hardening. He reverted it within four hours, because the agent already ran as that user and could run the same git commands itself.
- **What tests don't ask:** a merged mobile table fix passed its overflow tests. A 390px screenshot then showed 193 words split mid-word across 25 of 34 pages. The issue had never mentioned words, so he still opens changed pages on a phone and a desktop by hand before anything goes to production.

## Why it matters for code review

In an always-on loop, a reviewer's verdict only counts if the gate checks it against the current state of the world at merge time: the head SHA that was actually reviewed, the latest base, and any human objection raised mid-flight. Orbi's gate passed every machine check and still ignored the one signal a human had added. Pair with [Roosevelt's race between "threads resolved" and "fix committed"](/posts/roosevelt-orchestrator-merge-authority-results-review/), Orbi's own [graded hunt for what its reviewer missed](/posts/orbi-harness-search-reviewer-missed-generated-inputs-independent-oracle/), and [Excubitor on why an unattended loop can't bless its own done](/posts/excubitor-unattended-loop-cannot-bless-own-done/).
