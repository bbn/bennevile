---
title: "When agents review agents, the checks become one more thing that can fail"
description: "Oct 6 Ferris and Bonilla: a six-month case study of a production healthcare platform built by coding agents and run by an operator with no formal software training. Reviewer agents, tests and monitors helped, but some measured proxies, one audit stopped without failing, missing checks vanished from pass rates, and an automated repair caused an outage."
date: 2026-10-06
kind: paper
source:
  title: "A Case Study in Assuring AI-Written Software"
  url: https://arxiv.org/abs/2610.08651
project: steward
---

Lindsey Ferris and Sierra Bonilla studied a production healthcare platform (note-taking support, scheduling, payroll, plus backups, access control and audits) whose primary developer was a coding agent. The operator had no formal software-engineering training, so reading every line was never a realistic form of control. The paper draws on two structured interviews and six months of project records: decision logs, audit reports, incident records and check inventories.

## The setup that grew by trial and error

Each session, the coding agent re-read a versioned project rulebook, the task and issue lists, and reusable skill files. The operator approved the approach before work started. Changes then passed project tests, went to a separate reviewer agent in a fresh context, and landed on private staging for her to try. She could also commission broader audits by fresh agents, and for hard calls she asked models from several providers for independent recommendations. Confirmed failures became regression tests and stored lessons. Production data was out of the agents' reach, and nothing reached production without her explicit approval.

The authors call the pattern asymmetric delegation. She handed over implementation and much of the technical review, but kept two things: what became durable project context, and what shipped.

## Where the supervision itself broke

The checks were useful. Mapped against the OWASP Top 10, the OWASP API Top 10, the CWE Top 25 and the HIPAA Security Rule, the accumulated checks covered 69 of 84 items (82.1%). The authors are careful that this doesn't prove the platform is secure.

The main finding is that "these evaluations themselves became another fallible software layer." Backup monitors confirmed that intermediate steps happened without confirming a usable backup existed. One audit stopped running without producing a failure. One report computed its pass rate only from checks that returned results, so missing checks dropped out of the total. In the worst incident, a monitor misread legitimate long-running work as a failure and kept trying an automated repair, which disrupted operations. The operator's response was to stop trusting a test just because it passed, and to deliberately recreate failures to confirm the matching check went red.

The paper boils this down to four questions to ask of any check: does it observe the outcome or a convenient proxy, is there evidence it actually ran, do missing or empty results stay visible, and is its authority limited enough that a wrong verdict can't trigger harm on its own.

## Why it matters for code review

Always-on factories lean on exactly this stack of tests, reviewer agents and monitors to keep work moving while nobody watches. This case shows the oversight problem moving rather than disappearing: once review is delegated, a human still has to judge what each reviewer actually saw and what it is allowed to do. Staging caught problems she could see for herself, and the failures clustered in properties she could only see through software-generated evidence. It is one operator and one platform, and the authors say plainly that it doesn't show fewer defects. Compare [a release gate that passed on checks it never ran](/posts/jeon-silent-success-release-gate-unrun-checks/), [a routine that runs is not a job that got done](/posts/paulkuo-agentic-operations-silent-failure-watchdog/), [weak oracles in agent test patches](/posts/banik-all-smoke-no-alarm-oracle-signals-agent-tests/), and [an eight-check harness that includes mutation testing](/posts/42nights-otis-eight-check-mutation-harness/).
