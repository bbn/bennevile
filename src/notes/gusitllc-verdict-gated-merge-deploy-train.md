---
title: "Merge only when out-of-band reviewer and tester both pass"
description: "Jul 2026 Gus IT defensive publication: sandboxed authors cannot push main; an external train merges only on fail-closed ledger verdicts from separate reviewer and tester personas."
date: 2026-07-03
kind: field-note
source:
  title: "Verdict-Gated Autonomous Merge-Deploy Train — Defensive Publication"
  url: https://github.com/gusitllc/verdict-gated-merge-deploy-train
project: steward
---

[Gus IT LLC](https://github.com/gusitllc/verdict-gated-merge-deploy-train)’s Jul 3 defensive publication (Gustavo Assuncao) is prior art for a merge path that does not trust forge checks the author agent can influence. When several coding agents write the same repo concurrently, ordinary merge queues gate on status checks that the branch author triggered. This construction splits the world: **authors are sandboxed and cannot push `main`**; they publish feature branches only. An integrator “train” runs on a plain OS scheduler *outside* the AI sandbox, holding real git and deploy credentials the workers never see.

Merge is gated on a **dispatch ledger**, not on green CI alone. For a branch to land, the ledger must contain both a `reviewer` pass and a `tester` pass, aggregated fail-closed (`bool_or` that defaults false). Until both out-of-band personas write `verdict='pass'`, the train merges nothing. Each tick works in a **disposable clone** hard-reset to `origin/main`, so HEAD shuffle among agents cannot poison the integrator’s tree. Ops details matter: PID lockfile for single-flight, filesystem kill-switch checked first, per-branch conflict isolation (one conflict is not train-fatal), and a static pre-deploy gate on the integrated tree. A dependency-free Node reference self-asserts the properties offline — including “one verdict is not enough.”

## Why it matters for code review

Continuous factories only beat bursty mastery when merge authority sits outside the writers. Review the ledger contract the way you review branch protection: who may write verdicts, what fails closed, and whether the integrator runs in a fresh clone. Overnight FOMO that agents “didn’t ship” is the wrong fear if shipping meant self-approved forge checks; the scarce review surface is the out-of-band pass pair and the kill switch, not the chat that opened the PR.
