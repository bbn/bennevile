---
title: "A home-built agent harness learns the same lesson five times: let the host do the deterministic work"
description: "Sep 28 Damian Karzon, part 2 of building localagent-box: a loop mode that stops when the tree stops changing and ignores 'done' while tests are red, an auto-review agent queued on every agent PR, autofix agents for the findings, and a 40-file review that cost 3.7 million tokens and skipped the reviewer's own code."
date: 2026-09-28
kind: field-note
source:
  title: "I built my own Coding Agent harness and orchestrator: Part 2"
  url: https://dkdevelopment.net/building-local-agent-box-pt2/
project: steward
---

Damian Karzon runs coding agents on local models through his own orchestrator, localagent-box. Part 2 is a log of what broke once the system started doing real unattended work, in the order the problems showed up. Each fix exposed the next one.

## Longer runs, then a pile of branches

One prompt to a modest local model holds one focused change, so he built a loop mode: plan a checklist of milestones, then repeat orient, act, and reflect until done. The guard rails that mattered were mechanical. If the working tree is identical across two iterations, the run stops as stalled instead of circling. Hitting the iteration cap commits the partial work. A repo can set a check command, usually the test suite, and "if the check fails, the host ignores any completion marker. The model doesn't get to decide it's done while the tests are red." The loop also burned tokens badly until the host, not the model, took over progress tracking and fed each fresh iteration only the next milestone, the last one-line plan, and a diffstat.

Once loops ran longer and more reliably, the new problem was review: "Reading every agent diff by hand undoes most of the point of fire-and-forget." So every agent PR now gets a review agent queued automatically, posted as a real GitHub review and a check run that can be required. Findings above a set severity launch autofix agents that work in small batches, resolve the threads, and end with one verification review. When several queued chunks land on one branch, auto-review waits and runs once over the finished whole.

## What the review actually cost

On a 40-file PR, the reviewer took about 21 minutes and returned 36 findings. Two were real: a config that vanished on container restart and an API key written with default file permissions, neither of which "would have jumped out at me in a 40-file diff." It also used 3.7 million tokens and skipped three files when it hit its context limit; two of them were the review runner itself, "so the code reviewer couldn't review its own code." He is clear that none of this replaces a human reading the diff; it makes the PR he reads a better one.

## Why it matters for code review

His summary is the useful part for anyone building an always-on loop: he started with the model doing the work and a thin wrapper around it, and ended with the opposite, where the harness does everything deterministic (progress, checks, branches, dependencies) and the model gets only the judgment. Completion is decided by a check the model can't overrule, and the review step only became necessary because the loop got good enough to produce more than he could read. He is still the glue between plan, queue, and review. Compare [exit code zero is not done](/posts/donegate-exit-zero-is-not-done/), [bounded loops with verified completion](/posts/bhardwaj-bounded-loops-verified-completion-agent-harnesses/), and [a night loop that has to show a morning receipt](/posts/apsolut-night-loop-claim-done-morning-receipt/).
