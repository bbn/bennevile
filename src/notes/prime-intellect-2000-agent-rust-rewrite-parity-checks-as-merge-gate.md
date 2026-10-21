---
title: "Prime Intellect: 2,000 agents rewrote Prime Agent in Rust because humans built the checks first"
description: "Oct 9, Prime Intellect. A swarm of more than 2,000 agents ported Prime Agent from TypeScript to Rust over two weeks. The human work was the verification: four kinds of parity check, a separate adversarial reviewer on a different model, and a fresh-sandbox verifier. Then a three-day hillclimb merged 69 performance changes with no numeric target."
date: 2026-10-09
kind: field-note
source:
  title: "Rewriting Prime Agent in Rust"
  url: https://www.primeintellect.ai/blog/prime-agent-rust
project: steward
---

Prime Intellect's [write-up of the Prime Agent Rust rewrite](https://www.primeintellect.ai/blog/prime-agent-rust) is a clean case of sustained, unattended agent work that held up. Over two weeks, the agent [orchestrated a swarm of over 2,000 agents to rewrite itself end to end](https://www.primeintellect.ai/blog/prime-agent-rust) across more than 10,000 sandboxes. The team is a vendor showing off its own infrastructure, so weigh the benchmarks accordingly; the useful part is how the work was gated.

## The human job was the verifier

The goal was a rewrite with as little human intervention as possible, so [the human work required was to set up proper verification](https://www.primeintellect.ai/blog/prime-agent-rust). Each kind of parity got an objective check: a differential suite that [diffs the terminal frames each binary renders](https://www.primeintellect.ai/blog/prime-agent-rust) against the same scripted model, transcript and model-request diffs for the harness, message-by-message checks of the daemon protocol, and a component-by-component audit marking each feature matching, partial, or missing. With a check for every kind of parity, agents [could measure their own progress and catch regressions before changes merged, which let us cut back on human review](https://www.primeintellect.ai/blog/prime-agent-rust).

## Four roles, and the writer never grades itself

A root agent split the port into a dependency-ordered task list and [wrote no product code](https://www.primeintellect.ai/blog/prime-agent-rust), staying free to monitor and merge. Each task went through a planner (spec plus parity check), an implementer in its own worktree, a reviewer that [inspects the pull request adversarially, using a different model and in a separate context](https://www.primeintellect.ai/blog/prime-agent-rust), and a verifier that runs the checks in a fresh sandbox. The stated reason for the split is the one review teams keep relearning: [an agent that writes code is biased when evaluating it](https://www.primeintellect.ai/blog/prime-agent-rust). A failure on either side sends the work back with findings; the PR merges only when both pass. The repo's [AGENTS.md makes parity-diff evidence a merge gate](https://github.com/PrimeIntellect-ai/prime-agent/blob/main/AGENTS.md): a feature that works but was never diffed against the old binary does not pass review.

## Steady loops, no finish line

After parity, a second orchestrator ran a hillclimbing loop [for three days with a single objective: improve the benchmark results without breaking parity](https://www.primeintellect.ai/blog/prime-agent-rust). Workers benchmarked baseline and candidate on the same sandbox, two reviewer agents on different frontier models checked behavior, and each merge became the new baseline. The team [deliberately gave the loop no numeric targets, since a fixed threshold tends to become a stopping point](https://www.primeintellect.ai/blog/prime-agent-rust); it logged over 144 experiment and audit records and merged over 69 changes. Cold-start input-ready latency went from 736.1 ms in TypeScript to [51.9 ms after the hillclimb](https://www.primeintellect.ai/blog/prime-agent-rust).

## Where the checks ran out

The complication is stated plainly: [the parity checks only verified the behavior they exercised](https://www.primeintellect.ai/blog/prime-agent-rust). Moving the internal team onto the Rust build for daily use [exposed bugs and missing behavior outside the coverage of the differential tests](https://www.primeintellect.ai/blog/prime-agent-rust), and release quality took weeks of follow-up with humans finding problems, directing changes, and [reviewing all results](https://www.primeintellect.ai/blog/prime-agent-rust). Continuous agent throughput was real here, but it was bounded by what the verifier could see, and people using the software still caught the rest. Compare [ROBOCO on self-improving factories that skip checking their own rules](/posts/roboco-failures-into-rules-self-improving-factories-skip-the-check/) and [Anthropic's move to post-merge verification at 30,000 merges a day](/posts/anthropic-scion-30000-merges-post-merge-verification/).
