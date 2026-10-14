---
title: "AI SDK’s factory authors 25–35% of merges — humans still own the stamp"
description: "Aug 12 Grammel/Dodds: issue→classify→analyze→implement→review→backport in sandboxes; 70–80% of closed issues via factory; reviewer efficiency is the product, not more agents."
date: 2026-08-12
kind: field-note
source:
  title: "Building a software factory for AI SDK"
  url: https://vercel.com/blog/building-a-software-factory-for-ai-sdk
project: steward
---

Lars Grammel and Eric Dodds’s Aug 12 Vercel engineering note is a measured receipt that **continuous harnessed throughput beats hiring more peak-session heroes** — and that the scarce resource is still human review bandwidth. AI SDK was taking **100+ issues/month**; by late June the backlog sat at **~1,000 open issues** and **~800 PRs**. Adding more Claude/Codex sessions would not close that gap: every change still routed through one maintainer’s attention. They built `ai-sdk-factory` instead. Four weeks in production: the factory authors **25–35% of PRs merged to main**, closes **70–80% of issues** (July), drives **>50% of weekly merges** on the v5/v6 backport lines, and cut open bugs ~**25%** while open issues fell from a **1,022** peak to **844**.

Architecture choices that matter under load: **one agent per task** (classify, reproduce, fix, review, backport, docs, feature analysis/implement) instead of one mega-agent with skill soup; **sandbox + network shield from the second agent onward** because public issues/PRs are attacker-controlled input; local CLI iteration before cloud (Functions, Queues, Blob, Sandbox, Neon); webhooks feed the queue so work starts when issues arrive — including after hours. The walkthrough for issue #17898 (blocked-domains for OpenAI web search) shows the chain of evidence humans actually need: a failing type-probe as proof the feature is missing, a live e2e with wikipedia.org blocked, a review agent scoring side-effect/perf/compat risk, then Lars reading that chain and merging — after which the factory opened backport PRs and repaired a dirty v5 conflict in seventeen minutes. Failures are typed (**success / flawed / blocked / manual**) and re-enter prompts, evals, or provisioning — improving the factory becomes the job.

They place the factory deliberately on the careful end of the automation spectrum: foundational infra with millions of dependents, so **nothing merges without a human on the AI SDK team**. Risk-aligned review depth (docs glance vs deep public-API read) is the point of the evidence packet, not a promise that agents ship alone.

## Why it matters for code review

Continuous factories compound overnight and weekday capacity only when reviewer efficiency is designed as a first-class product: specialized stations, sandboxed untrusted input, and a merge stamp that stays human while the queue never sleeps. Peak-session mastery still matters for hard judgment; the measured win here is that modest verified momentum — classify, prove, implement, evidence, promote — clears a maintainer backlog that heroics alone could not.
