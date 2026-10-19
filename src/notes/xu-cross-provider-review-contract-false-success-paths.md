---
title: "Cross-provider review as a contract: the reviewer harness counted three kinds of failure as clean reviews"
description: "Oct 7 Bowen Xu and Boyu Chen run a second coding agent from a different provider as an advisory reviewer. It found something material on 8 of 20 paired turns. Testing the harness turned up three ways a failed review was counted as a pass: cut-off input, cancellation while the process was shutting down, and a nonzero exit that still printed a tidy verdict. The last one was found after formal data collection had begun, so that data had to be set aside."
date: 2026-10-07
kind: paper
source:
  title: "Cross-Provider Review as a Runtime Contract for Coding Agents: A Controlled Pilot and Fault-Injection Study"
  url: https://arxiv.org/abs/2610.10961
project: steward
---

[Bowen Xu and Boyu Chen](https://arxiv.org/abs/2610.10961) study a setup many people now run at home: several coding CLIs on one workstation, each on its own subscription, with one agent's finished turn sent to a model from another provider for a second opinion. Their runtime, OpenTerminalAgent, treats that review as a contract rather than a single call. The reviewer must draw on a separate allowance, run within a time limit, have no write tools, receive the whole input, return a usable verdict, report failures explicitly, and leave a record for every attempt. The review is advisory. It arrives after the answer and can't rewrite the repository. (Xu develops OpenTerminalAgent, and its code isn't released.)

**The pilot.** On 20 paired development turns against one real codebase, **8 had at least one material reviewer finding** (95% interval 19.1–63.9%) and 12 had none. By direction, a Claude reviewer on Codex answers found something material on **2 of 10** turns, and a Codex reviewer on Claude answers on **6 of 10**. The authors don't read that as a ranking: the tasks were written by an agent, task order wasn't randomized, and the only judge was a single Claude-family model with no human audit.

**The more useful half is what broke.** Fault injection found three ways the harness recorded a failed review as a completed one:

- **Cut-off input.** A reviewer that got 1%, 50%, 99% of the material, or all but one character, and still replied with a clean-looking verdict was counted as complete in the original runtime. All four cases now fail as `input_delivery_failed`.
- **Cancellation during process shutdown.** Cancelling after the output had been read, but before the process was cleaned up, still produced a completed review.
- **Nonzero exit with a well-formed verdict.** This was counted as complete in every runtime version used for collection, and it was caught only after the preregistered study had started. Exit status wasn't stored per attempt, so the 25 formal records already collected couldn't be checked after the fact. They were set aside as an audit group and collection restarted from zero. In the authors' words: "A zero exit status does not establish a review, and a well-formed verdict does not redeem a failed process."

A write probe adds a smaller warning. With real CLIs asked to write into throwaway repos, Claude in its no-tools setup had no way to write. Codex in its read-only sandbox **attempted file changes in 5 of 5 trials**. Every write failed and no repository changed, but the read-only guarantee came from the sandbox, not from the model.

## Why it matters for code review

A review gate that runs on every turn, around the clock, is only as good as its record of what it actually reviewed. Each of these bugs makes the gate look safer than it is: a skipped or truncated review shows up as "no material finding," and nobody notices for weeks. At high volume, that is part of the verification cost too. Someone has to check the checker, and keep enough evidence for each attempt that a bug found later can be traced back. Pair with [Song on when a second model actually helps](/posts/song-cross-model-review-second-model-complementarity/), [the Claude/Codex review asymmetry](/posts/cross-model-llm-code-review-claude-codex/), and [Humanize, where a reviewer from another vendor decides when work is done](/posts/humanize-judgement-engineering-reviewer-decides-done/).
