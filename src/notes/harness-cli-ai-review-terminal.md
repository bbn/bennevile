---
title: "AI review as first-class CLI objects, not browser tabs"
description: "Harness CLI 3.0 (Sep 9) puts risk scores, review groups, and check→pipeline log streaming in the terminal so agents can triage and close the review loop without the 12-tab dance."
date: 2026-09-09
kind: field-note
source:
  title: "AI Code Review Loop in the Terminal: Introducing Harness CLI for Harness Code"
  url: https://www.harness.io/blog/ai-code-review-loop-in-the-terminal-introducing-harness-cli-for-harness-code
project: steward
---
Mohit Suman’s Harness CLI write-up is the complementary surface to yesterday’s PR-flood pitch: same platform, but the load-bearing claim is that review insights are objects you can `get`, not comments dumped into a browser. `harness get pr:insight` and `pr:review_group` return risk tiers and logical change buckets before you (or an agent) reads forty files alphabetically. Checks carry pipeline and stage IDs, so `get pr_check:log` streams the failing stage instead of opening a second authenticated UI. Cross-repo inboxes (`pr:review_pending`, `pr:mine`) collapse the “which repos are waiting on me?” search into one command.

The agentic part is deliberate. The CLI is self-describing (`list noun --matrix`, `get noun pr --format json`), so an agent discovers verbs at runtime instead of hallucinating an SDK. The copy-paste autonomous loop is the same shape every software factory eventually needs: triage by AI risk group, stream failing CI, fix, thread a reply, approve/merge — all with JSON output and scoped tokens. Humans still get `--ui` hotkeys; agents get deterministic grammar and structured review objects.

## Why it matters for code review

Agent PRs do not just raise volume; they punish context-switching. If review risk, ownership hints, and CI failure evidence live only in web UIs, the harness cannot close the loop. Making those signals CLI-native is how you spend human attention on high-risk buckets and let agents burn tokens on the rest.
