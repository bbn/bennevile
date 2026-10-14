---
title: "Opera: a verbal critic that follows each correction until evidence closes it"
description: "Sep 27 Mei et al.: persistent audited notes + hybrid triggers lift resolve up to +15.0 pp on SWE-Bench Pro; Opera-guided student rollouts match teacher distillation on held-out repos without TB2.1 collapse."
date: 2026-09-27
kind: paper
source:
  title: "Opera: A Verbal Critic Framework for Long-horizon Coding Agents"
  url: https://arxiv.org/abs/2609.33987
project: steward
---

Mei, Hu, Dai, Tan, Zhang, Song, Metaxas, Savarese, Xu, and Chen argue that long-horizon coding agents do not need a smarter one-shot judge — they need a critic that **opens a note, delivers it only when audited, and stays until the diagnosed problem is resolved**. **Opera** sits as a proxy between harness and model endpoint: periodic plus event-driven reviews (idle, repeat, error, claim, submission), nine typed operators spanning search/view/edit/test/submit with Design-by-Contract resolution criteria, and separate admission/release audits that accept or reject proposals without rewriting them. Adherence (did the agent try?) is tracked apart from resolution (is the original failure gone?).

As a test-time critic, Opera lifts non-critic resolve rates by up to **12.4 / 15.0 / 8.9** pp on Terminal-Bench 2.1, a SWE-Bench Pro subset, and DeepSWE v1.1 across four policy models, and posts the highest mean among SWE-PRM, SWE-Search, LLM-as-verifier, and Agentic Rubrics when Qwen3.8-27B is the policy. Self-critique works when the policy is competent; stronger critics matter when it is not. Removing audits collapses much of the Terminal-Bench gain (**+7.9 → +2.6** pp). Rescue and regression both rise with stronger policies — feedback amplifies correct *and* unnecessary interventions.

Beyond inference, Opera-guided **student** rollouts are approximately on-policy training data. Fine-tuning Qwen3.5-9B on them matches distillation from Qwen3.8-27B teacher rollouts on held-out SWE-Bench Pro repositories (**~+10** pp) while **preserving** Terminal-Bench 2.1 performance; teacher-only SFT drops TB2.1 from 23.6% to 7.9%. Critic notes are stripped or rewritten as the student’s own reasoning so the trained model runs without a critic at inference — and the gain survives a harness switch that teacher distillation does not.

## Why it matters for code review

Always-on coding fleets that dump a single “looks good / needs work” comment at finish are scoring outcomes, not managing corrections. Review overnight critic and PR-bot designs for persistent notes with fixed resolution criteria, hybrid triggers that catch silent loops before submission, and admission audits that refuse unsupported or redundant advice. Continuous verified momentum compounds when FOMO for agents working while you sleep funds follow-through until evidence closes the note — not another heroic Claude Code burst that claims done without a release audit.
