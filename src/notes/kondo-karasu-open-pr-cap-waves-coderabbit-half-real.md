---
title: "One week, 88 merged agent PRs: a low open-PR cap turned 24 updates into three triage passes, and about half of 261 AI review findings were real"
description: "Oct 18, Hiroki Kondo's weekly log for karasu, a project built entirely through Claude Code. 88 PRs merged from Oct 10 to 17. A cap of 8 open Dependabot PRs split 24 updates into three waves that each needed its own triage, so he raised it to 25. He classified 261 CodeRabbit threads and found about half were real defects; the repeat false positives came from badly scoped rule text."
date: 2026-10-18
kind: field-note
source:
  title: "What a week of agent-run Dependabot triage and AI code review taught me (karasu weekly)"
  url: https://dev.to/kompiro/what-a-week-of-agent-run-dependabot-triage-and-ai-code-review-taught-me-karasu-weekly-41af
project: steward
---

[Hiroki Kondo](https://dev.to/kompiro/what-a-week-of-agent-run-dependabot-triage-and-ai-code-review-taught-me-karasu-weekly-41af) builds karasu, a text language for drawing system-architecture diagrams, without writing its code by hand. Everything goes through Claude Code. His second weekly log covers October 10 to 17: **88 PRs merged** (16 from Dependabot), **12 decisions** recorded as architecture decision records, and a four-package release on October 15.

Three lessons from that week are about review under steady volume.

- **The open-PR cap set the triage rhythm.** Dependency updates are never auto-merged. An agent skill traces each one upstream (release notes, the diff between tags, ownership changes, install scripts, advisories) and writes a merge, hold or reject recommendation into a design doc, and Kondo makes every call. That week **24 npm updates** cleared the project's 7-day cooldown, and a cap of **8 open PRs** delivered them in **three waves**. Each wave needed its own triage pass, so he raised the cap to **25**. "The total number of PRs stays the same; only how many are open at once changes."
- **Rebuilding a lockfile can undo a review.** A replacement PR regenerated the lockfile and quietly moved `knip` from the reviewed 6.40.0 to 6.41.0, which had just cleared the cooldown. He pinned it back and recorded the lesson.
- **About half of the AI review findings were real.** He classified all **261 CodeRabbit threads** left on Markdown files from August 20 to October 10. Roughly half were genuine defects, so docs stay in review. The two false positives that kept coming back were caused by how the project's rule text was worded. One rule meant for a single table was being applied to a whole section of the design-doc template. He fixed it by stating the rule's scope in the text, not by changing the CodeRabbit config.

The same log has a familiar green-tests story. `karasu serve` from npm answered every request with "App not built", because the published package held only 5 files and no preview app. No test noticed. The fix was a CI step that packs the CLI, unpacks the tarball and runs `serve` from it, and he confirmed the test fails when the app is dropped from the package.

## Why it matters for code review

Capping open PRs is usually about protecting the reviewer, and caps per reviewer work for exactly that reason. Kondo's week shows the other side. When the review step is a batch pass over a design doc, a cap set too low splits steady work into separate rounds, and each round costs its own review. Where the cap belongs depends on whether review happens item by item or in batches. His CodeRabbit numbers are a useful baseline for anyone running AI review over a steady flow: about half real, with the recurring noise traced to rule wording, which is cheap to fix. Read with [Chi Cong's three-PR cap per reviewer](/posts/chicong-backpressure-cap-agent-prs-blocked-agents-shrink-the-queue/), [ZenBusiness's overnight Dependabot janitor](/posts/zenbusiness-dependabot-janitor-overnight-merge/), and [Holt's overnight PR whose eleven green tests never ran the real path](/posts/holt-overnight-agent-pr-eleven-green-tests-never-ran/).
