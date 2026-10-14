---
title: "Checkly: harness first, then one overnight Claude rewrite"
description: "Sep 1 field report: 92M msg/day Node→Go with Claude Code overnight — golden-file black-box harness defined correctness; agents shipped ~13k lines; zero incidents after a queue-topology miss taught boundary fidelity."
date: 2026-09-01
kind: field-note
source:
  title: "We Let AI Agents Rewrite a 92M-Message-a-Day Service in Go. Zero Incidents."
  url: https://www.checklyhq.com/blog/agentic-rewrite-nodejs-to-go/
project: steward
---

Edvinas Janusevicius’s Sep 1 Checkly post is a clean tortoise receipt: the overnight Claude Code session (via Fable, ~13k lines of deployable Go, within a $200/day token budget) is the headline; the *harness built before any Go* is the reason it could ship. Results Daemon was already processing ~92M messages/day. They wanted to know whether an agentic rewrite was safe for a critical high-throughput path, not a demo.

Harness contract before generation: black-box, language-agnostic, golden-file byte parity against the legacy Node service; real PostgreSQL (not mocks); custom SQS emulator; Playwright + Docker Compose + Toxiproxy for failure modes; oracles that assert snapshots. Inputs came from a day of production-like configs/outcomes in ClickHouse, collapsed into unique scenarios. Coverage reports (target 90–100%) fed back to the agent to propose missing cases — with the honest caveat that coverage still misses edge behavior. Acceptance for the rewrite was one sentence plus that gate: build a Go consumer that passes the harness.

What broke first proved the thesis. Local harness modeled 3 retry queues by check type; production routes on priority and hosting too — 18 queues per region. The agent faithfully implemented the wrong topology. Fix: align harness to production boundaries at the lowest unit, delete local-only branches, human-supervised retry refactor. Then boring rollout (internal → free → paid → enterprise via feature flag), CI enforcing the *same* harness on both daemons during dual-running, and a TDD loop that reproduces gaps in the harness before code fixes (~1 hour including deploy). Outcomes they report: zero incidents, ~70% fewer pods, 60% fewer DB active sessions, ~15% lower DB CPU. Humans still stripped inherited anti-patterns (runtime config derivation → static env) and added observability.

## Why it matters for code review

Burst Claude mastery without a deterministic acceptance loop is still heroics. Checkly’s overnight run worked because review was relocated into a living harness — then CI kept that harness as the merge/deploy evidence while both implementations ran. The failure mode to remember: an incomplete boundary model makes the agent *confidently wrong*, and human review of the diff alone won’t catch production topology the harness never encoded.
