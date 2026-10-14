---
title: "Let it run for days — only if verify is a gate, not a vibe"
description: "Sep 22 Pratik Patel: multi-day UI agent runs need stop conditions, blast radius, surviving logs, budgets, kill switches; overnight is a deliberate mode — reproduce→trace→fix→verify on the real path."
date: 2026-09-22
kind: field-note
source:
  title: "Let It Run for Days"
  url: https://pratik.pa.tel/blog/let-it-run-for-days/
project: steward
---

[Pratik Patel](https://pratik.pa.tel/blog/let-it-run-for-days/) (September 22) left an agent on a real UI bug for three days — sign in, hit the broken screen, reproduce, read the trace, open a PR, watch CI, adjust — and woke up to a stack of dead ends plus a running log still inside the product. The punchline is not the clock. **Letting it run is easy; making the run bounded, reversible, and inspectable is the skill.** A pasted “fix onboarding” walkaway is an unsupervised intern with your credentials, not a multi-day agent.

He treats a day-long goal as a product: a **stop condition** stated in the product (“CI green and the repro fails to reproduce”), a named **blast radius** (accounts, environments, write actions), and a **log that survives** the session when tokens expire and context fills. The working loop is deliberately boring — **reproduce → trace → fix → verify** on the same scripted path — because chat-only agents collapse into confident summaries and skip the gate. If it cannot re-enter the UI and fail the old repro, it is drafting. Before walking away: named owner, environment seams, spend/time/tool-call budget, handoff format (repro, hypothesis history, current diff, next action), and a one-sentence kill switch. Days surface quiet failures short sessions hide — context rot, false fixes (widened try/catch, deleted flaky asserts), scope creep, tool thrash — and he treats **overnight as a deliberate mode**: can the agent still prove progress with a fresh repro if the chat dies? Screenshots and trace IDs beat status sentences.

## Why it matters for code review

Always-on momentum only compounds past peak Claude sessions when the harness owns verify-on-the-real-path and the kill switch — not when someone stretches a chat. Patel’s checklist is the FOMO antidote that still refuses theater: buy wall-clock time against a defined ticket, wake to candidacy with receipts, keep humans on irreversible promote.
