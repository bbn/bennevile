---
title: "ADLC: software factories need Workflows, not babysat SDLC steps"
description: "Aug 4 Cloudflare: replace human-paced SDLC with Agent Development Lifecycle — programmatic, preview-per-agent, event-driven Workflows that spawn heal/review agents; @cloudflare/ci self-heals and stages fixes for merge."
date: 2026-08-04
kind: field-note
source:
  title: "The Agent Development Lifecycle has arrived on Cloudflare"
  url: https://blog.cloudflare.com/agent-development-lifecycle/
project: steward
---

[Brendan Irvine-Broque](https://blog.cloudflare.com/agent-development-lifecycle/) (August 4, Agents Week) reframes the bottleneck after models made *implement* cheap: humans still own plan/test/deploy/maintain while agents dump volume into every gate. Most “agentic” teams still babysit SDLC steps — prompt, nudge, apply review feedback — instead of handing the keys to a factory. Cloudflare’s answer is the **Agent Development Lifecycle (ADLC)**: treat agents as customers of the platform and rebuild each lifecycle stage so it is programmatic, horizontally scalable (preview per agent), reproducible, push/event-driven, atomic, permissioned, and self-improving.

The orchestration bet is blunt: **a CI/CD pipeline is just a Workflow, but a Workflow can be much more**. `@cloudflare/ci` runs TypeScript pipelines on Workflows + sandboxes with dependency caching and conditional deploy; failed steps can spawn a healer agent that pushes a fix branch for human merge rather than demanding a laptop on the job. Nightly review examples dispatch Flue agents from `step.do`, persist receipts, and read structured replies — continuous loops, not YAML checklists. The same stack ties Artifacts storage, Worker previews, gradual deploy, Agent Traces, and least-privilege access so factories can own more of the loop without SSH-into-prod theater.

## Why it matters for code review

Always-on verified momentum beats peak Claude sessions only when verify/deploy/triage are harnessed outside the chat. ADLC’s useful claim for merge queues is structural: continuous factories need evented Workflows that can heal, preview, and escalate — so morning review promotes reversible receipts instead of reconstructing babysat bursts.
