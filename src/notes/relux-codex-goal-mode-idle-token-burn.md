---
title: "Codex goal mode: waiting can cost 83–188M tokens per hour"
description: "Sep 11 Relux: across 3808 Codex rollouts, 52 goal sessions ate half of 59.2B input tokens; idle spin at 0.03s restart + poll-proof-of-wait; Claude Code awaits events instead."
date: 2026-09-11
kind: field-note
source:
  title: "Why Codex burns a weekly limit in a day while the agent waits for the tide"
  url: https://relux.works/en/blog/codex-goal-token-burn/
project: steward
---

Ivan Oparin and Alexis Grigoryev’s Sep 11 Relux autopsy is the harness-tax receipt for long-running Codex work: **waiting**, not coding, emptied weekly limits. From **3808** local rollouts (Jul–Sep 2026, Codex 0.144–0.154), **52 goal-mode sessions (1.5%) consumed half of 59.2B input tokens**. Median time from window start to ~99% usage: **~23–25 hours**; waiting under goal cost on the order of **83–188M input tokens per hour** depending on poll interval and context size. Cache hit ~97.8% of input — so the bill is rereads, not new prose.

The mechanism is a dispatcher trap, not a dumb model. Goal mode’s idle handler restarts the model in ~**0.03s** when the thread goes quiet. The continuation contract treats “I’m waiting” as no progress unless the turn **live-polls a process** — so every restart must poll, and every poll rereads the full context (`cost ≈ checks × context`). `clock.sleep` (up to 12h, interruptible) exists since mid-2026 but, in their catalog, is issued to **`gpt-6-astra` only**; other models fall back to shell polls under a short unified-exec yield ceiling. Custom-provider float args (`60000.0`) rejected as integers closed the longer `write_stdin` wait path. Result in the source session: **173 continuations / 466 model calls in 48 minutes**, ~**149M input tokens**, until a 429 froze the loop.

Claude Code’s `/goal` is the contrast that matters for always-on factories: a separate checker, deferred wakeups while background work runs, exponential backoff (first check-in ~30m), and stop after several tool-less turns — event-driven await instead of spin. Relux’s fixes are harness-shaped: force-register `sleep` whenever a goal is active; delay empty/waiting continuations; accept float tool args; name sleep/`write_stdin` as verified waits in the contract; put a token budget on every goal. They ship a local `codex-rollout-audit` script so others can reproduce the tables from `~/.codex/sessions`.

## Why it matters for code review

Overnight FOMO that “agents aren’t working” is the wrong fear if the harness is burning the weekly quota on **proof-of-wait polls**. Sustained factories need continuity *and* a cheap wait primitive — otherwise morning inventory never arrives because the limit died at 2am rereading “not yet.” Same family as the Sep 16 community 158M overnight ledger: delivery can pass an independent rebuild while orchestration still invoices the night. Review the dispatcher and stop contract before you scale unattended goal loops.
