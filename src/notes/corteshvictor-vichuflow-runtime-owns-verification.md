---
title: "Your coding agent said done. Who ran the tests?"
description: "Jul 15 Cortés / VichuFlow: agent self-report is not evidence — durable state outside the chat, kernel-run gates, stage advances only on artifacts; worker grades nothing."
date: 2026-07-15
kind: field-note
source:
  title: "Your Coding Agent Says It's Done. Who Verified It?"
  url: https://dev.to/corteshvictor/your-coding-agent-says-its-done-who-verified-it-2p19
project: steward
---

[Victor Cortés](https://dev.to/corteshvictor/your-coding-agent-says-its-done-who-verified-it-2p19) (Jul 15) names the failure mode every unattended loop eventually hits: the agent that wrote the patch is also the agent reporting that the patch is correct. “Everything passes” can mean the wrong command, a single convenient test, a misread log, or success claimed before the suite finished. Prompting “always run the tests” still leaves verification inside the same system whose work you are trying to trust.

His answer is architectural, not rhetorical. State lives under `.vichu/` as ordinary files, outside the conversation — stage, attempts, verification results, mutation records — so a crash or context reset does not erase the workflow. Stage transitions require evidence the runtime can inspect (artifact, mutation report, structured review verdict, or a command exit). Verification commands belong to the kernel: if the workflow says `go test ./...`, VichuFlow runs it and captures exit code and output; the agent may recommend a command but does not get to declare it green. Budgets (invocations, wall-clock, tokens) are enforced externally. The same contract should hold whether Claude Code, Codex, or a shell script did the writing.

VichuFlow is a Go runtime that coordinates workers and decides whether a stage may advance — explore → propose → plan → implement → review/fix → verify — with native Claude Code host packs and headless adapters. Honest limits: pre-1.0, same working tree as the agent (state files are not yet tamper-evident), and concurrent-run/crash edges still open. The narrow guarantee he claims is the one that matters for overnight factories: **agent-reported test results are not proof**; configured gates run independently before a run becomes `completed`.

## Why it matters for code review

Always-on harnessed throughput only compounds when “done” is someone else’s measurement. Peak-session Claude mastery still looks fine while a human watches the terminal; leave the loop unattended and self-graded green becomes the overnight tax on morning review. FOMO that agents aren’t coding while you sleep is the wrong fear — the right one is waking to finished claims the runtime never independently verified. Keep humans on product and drift; put the gate outside the worker.
