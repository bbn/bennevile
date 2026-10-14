---
title: "OpenAI’s agentic software factory: Codex takes the pipeline"
description: "Sep 15 Pragmatic Engineer: inside OpenAI, humans define outcomes while Codex gathers context, implements, babysits CI, runs specialist reviews, deploys with per-change agents, and feeds Perf Factory — 10× CI load in six months."
date: 2026-09-15
kind: field-note
source:
  title: "Inside OpenAI’s agentic software factory"
  url: https://newsletter.pragmaticengineer.com/p/openai-software-factory
project: steward
---

Gergely Orosz’s Sep 15 visit report is the clearest public map yet of a continuous factory at frontier-lab scale. Codex (and ChatGPT Work on the same harness) stopped being a coding side-tool and became how OpenAI ships: finance, recruitment, and legal climbed from ~0% to ~90% weekly usage in months; engineering’s PR volume grew like a hockey stick. Venkat Venkataramani puts the CI/CD load increase at roughly **10× in about six months** — a jump most companies would spread over years. The scarce resource is no longer authorship. It is deciding outcomes, classifying risk, and keeping the build-test-deploy plane from melting.

The pipeline Orosz reconstructs is explicit. A human specifies the desired outcome. Codex gathers context from repos, GitHub, Slack, Notion, Datadog/Databricks, logs, and internal skills (some maintained by Codex itself). It implements, runs tests, opens a PR, and **babysits until green**, including a perf harness that can send risky changes into Synthetics A/B. Review is not one generic bot: OpenAI spins **domain-specialist agents** (cloud infra, security, and peers) with full access to internal docs — the practical substitute for having every specialist read every change. Risk classification routes high-risk work through stricter paths (more agents, human after agents); low-risk areas can opt into agent auto-approve. After a human green-lights production, a dedicated agent handholds the rollout — for feature flags it finds the flag, picks success/failure signals, **builds its own monitoring dashboard**, and watches. Production loops back through **Perf Factory** (dedupe alerts, root-cause latency, propose fixes) and **Sevbot** (incident context and suggested mitigations; humans still authorize action for now).

The productive complications land hard. IDE usage has fallen since January even as the Codex app grows file-edit features — the interface is becoming the harness, not the editor. PRs and classic line-by-line review “make less and less sense” at this volume; agentic multi-lens review plus risk-tiered human attention is the replacement bet. Mobile remains the stubborn human gate: App Store / Play review still takes hours to days while generation sped up, so ChatGPT’s mobile-first Codex surface feels the lag first. Specializations blur; engineers act more like product managers defining outcomes while agents execute. Unlimited internal token budget is part of the story — not a transferable cost model for everyone else.

## Why it matters for code review

Always-on, harnessed factories beat peak-session heroics when the loop owns verification, specialist review, deploy babysitting, and production feedback — not when a morning human reads every generated line. OpenAI’s receipt reframes overnight FOMO as infrastructure FOMO: if agents can work while you sleep, your CI, risk tiers, and residual human gates have to absorb the volume or the factory just relocates the bottleneck onto reviewers and release queues. Pair with Cognition’s verification-first framing and OpenSearch’s harness-before-review rule: continuous momentum only compounds when evidence and risk routing scale with PR hockey sticks.
