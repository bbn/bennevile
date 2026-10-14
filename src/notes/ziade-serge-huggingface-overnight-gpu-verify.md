---
title: "Serge: overnight GPU verify before the PR, discard before you publish"
description: "Sep 29 Ziadé/HF: nightly Transformers CI agent — reproduce on GPU, relore memory, 5× red-to-green verify, then PR; 29 merges / ~80 days; funnel throws away weak candidates early."
date: 2026-09-29
kind: field-note
source:
  title: "Anatomy of a bug-fixing agent"
  url: https://huggingface.co/blog/huggingface/anatomy-of-a-bug-fixing-agent
project: steward
---

Tarek Ziadé’s Sep 29 Hugging Face field note describes **Serge**, the nightly CI agent that hunts real Transformers integration-test failures on GPUs, patches them, and opens PRs only after verification. Over ~80 days, **29** of those fixes landed in Transformers (~2.5/week). The sweet spot is not replacing maintainers—it is automating the asynchronous GPU debug loop and escalating only when a verified patch is worth human attention.

The loop is six fail-closed steps in short-lived Kubernetes pods (no main credentials; network limited to GitHub, the inference router, and Serge’s history index; branches under `serge/` only). **Pick** failures that failed consistently across the past week. **Reproduce** several times on a fresh GPU runner—or stop. **Check** for an existing fix via `relore` (repository memory over issues, PRs, reviews, and history) so duplicates die early. **Patch** with the usual repo tools plus another `relore` pass. **Verify** the targeted test **five times on the unpatched tree and five on the patched tree**—baseline-red and collateral-failure guards included; assertion-only expectation edits get extra suspicion as reward hacking. Infrastructure timeouts and apply failures are *not* evidence the patch is good: no PR, retry tomorrow if still red. **Open** a PR only after that gate, with a nightly tracking issue for the whole dispatch set.

A recent two-week funnel makes the design concrete: **117** failure groups dispatched → **29** never reached the LLM (already green at base) → **86** LLM sessions → **24** verified PR events (**19** distinct PRs), with the rest discarded for unsafe patches, failed GPU verify, timeouts, or mid-session errors. Inference averaged ~$3/session (~$14/distinct PR, ~$43/merged PR on Kimi K-2.7-Code)—cheap versus the estimated 1–2 hours of maintainer attention per landed fix, but still dominated by sessions that correctly produce nothing.

## Why it matters for code review

Always-on factories that maximize overnight PR count are optimizing the wrong funnel. Serge’s receipt for harnessed throughput is the discard ladder: reproduce before patching, stop when someone else owns the fix, and treat “only expected values changed” as reward-hacking until a stronger check (or a human) says otherwise. Score continuous verified momentum by red→green evidence under sustained load, not by how many agent branches appeared by morning—see also [is your project doing work overnight yet?](/posts/is-your-project-doing-work-overnight-yet/) and [verify-first harness rejection tax](/posts/verify-first-harness-agent-pr-rejection-tax/). FOMO for idle agents without a GPU-grade gate just scales unverified diffs into the review queue.
