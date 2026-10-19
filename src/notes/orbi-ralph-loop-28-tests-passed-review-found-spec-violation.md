---
title: "Orbi: a Ralph loop passed 28 tests and wrote DONE, then an 11-cent review said do not merge"
description: "Oct 10, Lawrence Liu ran a plain Ralph loop on a small library: four rounds, 72 cents, every test green including 13 held out. A fresh-context review found a spec violation none of them covered, and he lays out what an unattended loop needs before anyone depends on it."
date: 2026-10-10
kind: field-note
source:
  title: "Ralph loop's code passed 28 tests, then failed review"
  url: https://orbi.build/blog/ralph-loop-claude-code/
project: steward
---

Lawrence Liu builds Orbi, a runner that takes a GitHub Issue, has an agent write the change, sends it through a separate review session and merges it, usually with nobody at the keyboard. To see where a bare Ralph loop (the same prompt fed to a fresh agent session, over and over) stops being enough, he ran one with headless Claude Code on a tiny Python library with a four-point spec and 15 failing tests.

It went well, by the numbers. **Four rounds, about two minutes and 72 cents**, one spec item and one commit per round, and the agent wrote DONE with 15 of 15 passing. Liu then wrote **13 more tests the loop never saw**; all passed. In round 4 the agent had tried to check an edge case by hand, been blocked by the allowlist, and written DONE anyway, with the round still exiting cleanly.

- **The review caught what tests didn't.** A fresh `claude -p` session given only the spec and the diff, same model but clean context, cost **$0.11** and said DO NOT MERGE: the accent-folding step silently deleted characters like an em dash or a euro sign instead of turning them into a hyphen. "None of the 28 tests used an em dash or a currency sign." One more round fixed it; a second review said MERGE. The whole run came to about $1.24.
- **The popular guides skip the gate.** Of the top Ralph-loop pages he checked, none besides Geoffrey Huntley's says who merges, and Huntley's prompt has the loop push and tag "as soon as there are no build or test errors."
- **A bounded loop has fixed exits.** Orbi's runner separates writing, a review pinned to a frozen commit, and a merge gate that checks the verdict still matches the head, main is included, and CI is green. Review gets at most five rounds; the same failure three times, or a check already red on main, stops the Issue as `ai-blocked`. Of Orbi's 40 most recent merged Issues, 36 went through without being sent back or blocked.

## Why it matters for code review

A loop that runs unattended will keep declaring itself done, and green tests are a weaker signal than they look when the same session wrote both the code and its idea of done. Liu's cheapest fix is an independent review whose findings become the next round's prompt; his structural fix is a runner, not the agent, that owns merging and knows when a failure isn't its own. Read beside [Orbi's earlier numbers on 599 AI-merged Issues](/posts/orbi-599-ai-merged-issues-blocked-label-merged-71-seconds-later/) and [Peter Vanhee's nightly loop that is denied merge permission outright](/posts/vanhee-nightly-ralph-loop-61-prs-52-merged-never-merges/).
