---
title: "CRBugBench: when should a software factory run lights-off?"
description: "Oct 9 preprint from CMU and Microsoft: 1,800 review tasks built from human-verified bugs. The best review agent catches 71.9% in its top five findings, up from 47.7% in five months, but drops up to 25.5% on proprietary code. Lights-off only for narrow, low-consequence PRs."
date: 2026-10-09
kind: paper
source:
  title: "(When) Should a Software Factory be Lights-off? Benchmarking Code Review Agents on Bug Detection"
  url: https://arxiv.org/abs/2610.13668
project: steward
---

Chenyang Yang, Hao He, Ti-Chung Cheng, Jenna Butler, Emerson Murphy-Hill, Carmen Badea and Christian Bird ask the question every always-on factory eventually has to answer: if agents write the code and agents review it, can the humans go home? Their Oct 9 preprint builds **CRBugBench** to find out, and it grades review agents against the ground truth that matters — bugs a human actually confirmed and fixed — rather than against how much an agent's comments resemble a human's.

The pipeline mines repository history two ways. Bugs caught **before merge** come from human review threads that flagged a defect and were then addressed (the raw pass started from 304,601 merged PRs with 1.4 million review threads). Bugs caught **after merge** are traced from a later bug-fixing PR back to the PR that introduced them. Each becomes a sandboxed task: the agent sees only the introducing PR, is not told a bug exists, and returns ranked findings. The result is 1,000 tasks across 98 open-source repositories plus 800 from two proprietary monorepos at one large company — code that is certainly not in any model's training data.

The headline numbers are good news for the factory builders, with an asterisk:

- **Fast improvement.** The best configuration (claude-opus-5 in copilot-cli) catches **71.9%** of known bugs in its top five comments, up from **47.7%** for opus-4.6 between February and July 2026. At the highest reasoning setting it reaches 79.6% of bugs humans caught before merge and 64.2% of bugs found after merge, at about **$2.97 and 9.8 minutes per task**.
- **Still missing a fifth.** Even the best agent misses 20%+ of bugs a human found.
- **The private-code cliff.** On the proprietary portion performance drops by up to **25.5%**; those bugs more often need project context the diff alone does not show.
- **Where it breaks.** Larger and more heterogeneous PRs, bug-fix PRs, non-functional or lower-severity bugs, and anything needing non-local reasoning. Humans still win on maintainability; agents are better at tirelessly hunting reliability and severity issues.
- **Cheap compute beats fancy compute.** Exploration-nudging prompts add 5.8% for 1.10x cost; multi-agent setups add 4.7% for 5.55x cost.

The authors' answer to their own title is plain: the evidence supports lights-off operation only for **narrowly scoped, low-consequence PRs**. For anything consequential, treat review agents as scalable peers that widen coverage while an accountable human keeps the final call — and calibrate that boundary on your own repository's continuously monitored evidence, not on aggregate benchmark scores.

## Why it matters for code review

This is the strongest counterweight yet to "the factory reviews itself." A harness that runs all night compounds only if its verdicts are trustworthy on *your* code, and this paper shows that trust drops exactly where context lives: private repositories, big mixed diffs, non-local bugs. The practical move is the one the authors recommend and the one always-on teams keep rediscovering — route review effort by PR risk, feed the reviewer repository knowledge, and re-benchmark the harness every time the model changes, using your own mined bugs. Read it beside [Kazzee's proof-gated dark factory](/posts/kazzee-turn-lights-off-proof-gated-dark-factory/), [Nuetzel on the factory that went dark and the reader who ran out of time](/posts/nuetzel-software-factory-went-dark-reader-ran-out-of-time/), and [Aitherium's local review lane going seven for seven](/posts/aitherium-software-factory-reviewed-my-pr-and-it-was-right/).
