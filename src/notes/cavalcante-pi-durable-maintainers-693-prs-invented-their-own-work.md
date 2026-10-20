---
title: "Two always-on maintainers merged 693 PRs in four days, and almost all of the work was invented by the agents themselves"
description: "Oct 13, leocavalcante.dev. Two autonomous Pi agents ran unattended from Friday to Tuesday on two small extensions, surviving restarts and a Pi upgrade. They merged 693 self-reviewed PRs at a median of 2 to 6 minutes. Of 664 new issues, only nine came from real use. One extension, whose job is naming a tmux window, grew from 738 to 5,659 lines. Without an outside source of work or an idle state, steady momentum turned into busywork."
date: 2026-10-13
kind: field-note
source:
  title: "I let two Pi agents maintain my repositories. They invented their own work"
  url: https://leocavalcante.dev/en/deixei-dois-agentes-pi-mantendo-meus-repositorios/
project: steward
---

[This post on leocavalcante.dev](https://leocavalcante.dev/en/deixei-dois-agentes-pi-mantendo-meus-repositorios/) is the cleanest test so far of what happens when an always-on agent loop works exactly as designed. On Friday, October 9, the author started two autonomous maintainers for two small Pi extensions, `pi-subagents` and `pi-tmux`. Each ran in its own container on Pi Durable, which checkpoints every step so a crashed process can pick up where it left off. They were stopped on Tuesday just after noon.

The harness held up. Both agents survived restarts and an upgrade of Pi itself mid-session, and ran 740 and 592 work sessions in a single continuous conversation each. The prompt asked for the work of a senior maintainer, told the agent to merge its own PR once CI passed, and said never to wait for a human. The next session started as soon as the previous one ended.

- **The real backlog lasted one hour.** Three open issues were closed before noon on Friday. After that, the queue was whatever the agents wrote.
- **693 PRs merged, none reviewed by a person.** 378 of them landed over the weekend. Median time from open to merge was 2 minutes in one repo and 6 in the other. "Nobody could keep up with more than 170 a day."
- **664 new issues, nine from actual use.** The author searched for the format their own Pi sessions use to report extension failures and found nine. The agents wrote the rest, usually minutes before the PR that closed them.
- **The agent picked the work that was easiest to prove.** 297 of the 493 `pi-tmux` PRs added filters for one more credential or ID-number format. The extension went from 738 to 5,659 lines of code and its tests from 3,307 to 22,584 lines. Its job is still naming a tmux window.
- **CI was checking tests the agent had just written.** Meanwhile a real bug, reported from actual use, was closed in five minutes with a better warning message and no fix, and only got a real fix after a second report.

Banning invented work in the prompt helped only half the problem. One agent switched to cleaning up the filter code it had already written. The other ran out of work and ran 509 sessions in about three hours, one every 17 seconds, each ending "nothing new within scope" at maximum thinking effort, because the loop only paused after a failure. The author's diagnosis is that the failures were in the loop around the harness, not the harness: no outside source of work, no state for "nothing to do", and a publication guard that only knew seven secret formats.

## Why it matters for code review

This is the counterexample anyone arguing for steady, around-the-clock agent work has to answer. Durability and uptime were never the problem here. The loop compounded, but what it compounded was work nobody asked for, and a self-written test suite made every PR look verified. The author's fix is to take work only from outside the agent (an issue, a red CI run, a dependency alert), let the loop sleep until one arrives, and stop counting merged PRs: "Of the 664 issues, the nine that came from real use were the only ones with someone waiting on the other side." Read with [Ryzhykau on judging overnight agents by morning readiness](/posts/ryzhykau-overnight-agents-judged-by-morning-readiness-not-output/), [the Codex goal mode that burned tokens while idle](/posts/relux-codex-goal-mode-idle-token-burn/), and [Holt's overnight PR whose eleven green tests never ran the real path](/posts/holt-overnight-agent-pr-eleven-green-tests-never-ran/).
