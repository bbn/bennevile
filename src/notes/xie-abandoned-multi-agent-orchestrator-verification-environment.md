---
title: "Xie: I abandoned my multi-agent orchestrator for a verification environment and one owner"
description: "Oct 13 from Shijie Xie (MiniMax / MCode): after ~50 days of Agent Lord (271 tasks, parallel cross-review), he tore the custom scheduler down. The bottleneck wasn’t parallelism — it was proving the work in a real app environment, with one owner and another model family as judge."
date: 2026-10-13
kind: field-note
source:
  title: "Why I abandoned my own multi-agent orchestrator"
  url: https://x.com/world_0618/status/2109947422201786784
project: steward
---

Shijie Xie, building MCode at MiniMax, published a long Oct 13 retrospective on X: in August he wrote **Agent Lord**, a dispatcher that fanned work across MCode, Claude Code and Codex so agents could run in parallel and review each other. By late September he abandoned it. Over roughly **50** days the scheduler ran **271** tasks and **609** operations. Over two months of AI-assisted development he opened **109** merge requests, made **926** commits, triggered **644** CI pipelines and burned about **28.4 billion** tokens. The lesson he keeps if he can keep only one piece: build the **verification environment** first.

Agent Lord’s four failures, in his words:

- **No product acceptance.** The runtime checked structure and never drove the real app. Bugs like Goal failing to resume only showed up when he ran builds himself.
- **Context lost through the extra layer.** The dispatcher rewrote worker prompts (“keep it concise”) and shrank an **875**-line plan to **279**, dropping migration, wiring and acceptance detail.
- **The orchestrator was a single point of failure.** When the dispatcher session hit a 401, nothing took over for ~**55** hours. About **75%** of its time was polling.
- **The control plane kept getting heavier.** `SKILL.md` grew past **44 KB** loaded every time; observer, inbox and write leases piled on.

The turn wasn’t “run fewer agents.” It was renaming the problem: not how to schedule more agents, but how to get **one** agent to finish a request and **prove** it. Models and client-built subagent workflows had gotten strong enough that a custom outer scheduler was awkward. He now freezes acceptance criteria up front (`spec.md` / `verify.md`, sha256-checked), gives one owner the work end-to-end, and has another **model family** judge independently with only the criteria and the code — never the owner’s process. Humans decide in three places: confirm the requirement decisions, freeze acceptance, read the decision list before merge.

He is explicit about where he **departs** from Lauren Tan / pstack and the OpenAI–Anthropic harness posts he studied: he freezes acceptance for the whole delivery, writes a definition before code, and runs heavier scripted verification at real entry points (TUI, Electron, HTTP) rather than the smallest possible proof script. Project A — 11 feedback items plus moving Goal onto a new runtime — touched **247** product-code files (**799** counting tests, maps and verification). The first big milestone wasn’t another feature: it was making agents able to **start, drive and observe** the app.

## Why it matters for code review

This productively complicates the always-on story. Parallel multi-agent review *looked* like continuous capacity; without a verification environment it still queued acceptance behind a human, and the dispatcher became the thing you had to babysit overnight. Steady harnessed momentum here means scripts that judge real entry points, progress in the repo not the chat, and a second family as the merge-facing judge — not a thicker orchestrator. Compare [Roosevelt on orchestrator merge authority](/posts/roosevelt-orchestrator-merge-authority-results-review/), [Cloudsail’s per-task-type autonomy unlock](/posts/cloudsail-autonomous-software-factory-one-task-type-at-a-time/), and [Németh on runtime owning the merge](/posts/nemeth-agent-loop-runtime-merges-not-the-agent/).
