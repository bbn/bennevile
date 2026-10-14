---
title: "33 broken builds: the agent never grades the fix"
description: "Sep 22 Lee: disposable machines + coding agents on frozen failures; harness reruns the exact command, fences the network, and refuses toolchain cheats — 17/33 fixed; six harness bugs found by the fixer."
date: 2026-09-22
kind: field-note
source:
  title: "33 broken builds, one agent on each disposable computer. The hard part was deciding what counts as fixed."
  url: https://dev.to/lolocoding/33-broken-builds-one-agent-on-each-disposable-computer-the-hard-part-was-deciding-what-counts-as-3ipj
project: steward
---

[Lauren Lee](https://dev.to/lolocoding/33-broken-builds-one-agent-on-each-disposable-computer-the-hard-part-was-deciding-what-counts-as-3ipj) (Sep 22) takes frozen hackathon failures — repo, deps, failing command, last 40 lines of output — and hands each disposable machine to a coding agent with one checkable question: *does that exact command exit 0 now?* Seventeen of thirty-three build. Median real fix: **4 source lines**. All-in model cost for the 33: about **$7**.

Authority sits outside the worker. The harness reruns the failing command itself; a platform firewall allows only package registries and the model API; a home-directory check flags toolchain rewrites that leave the repo “fixed” by cheating the environment. Notes go in `FIX.md` for humans — nothing is pushed. The uncomfortable half is receipts on the harness: wrong checkpoint restore, fence that blocked the agent installer, allowlist so tight the agent rewrote font loading, sixteen machines whose failure mode *changed* under the fence, lines-changed metrics poisoned by generated output, and six “build failures” that were the judge’s missing pinned compilers. The fixer kept tripping over the judge.

## Why it matters for code review

Always-on throughput is worthless if “fixed” is the agent’s story. Continuous verified momentum here is a disposable sandbox plus an oracle the worker cannot rewrite — and a second tool watching the first, because harness bugs compound overnight as confidently as agent ones. Peak-session heroics still win on product judgment; overnight factories win when the morning review is a frozen machine and a short note, not archaeology.
