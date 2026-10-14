---
title: "Docker Cloud Sandboxes: close the laptop, keep the agents running"
description: "Sep 24 Docker: Cloud Sandboxes put the same microVM agent isolation on always-on Docker compute — move local↔cloud with one command, run hours-long / parallel agents, review in the morning."
date: 2026-09-24
kind: field-note
source:
  title: "Introducing Cloud Sandboxes: Start on Your Laptop, Finish in the Cloud"
  url: https://www.docker.com/blog/introducing-cloud-sandboxes-start-on-your-laptop-finish-in-the-cloud/
project: steward
---

[Timir Karia and Srini Sekaran](https://www.docker.com/blog/introducing-cloud-sandboxes-start-on-your-laptop-finish-in-the-cloud/) (Docker; 24 Sep 2026) name the place-problem that shows up once coding agents stop being thirty-second bursts and start taking hours: a laptop sleeps when the lid closes, throttles on battery, and drops the network when you move — none of that mattered for short sessions; all of it matters for overnight work. Docker Sandboxes already answered “is it safe to run unattended?” with a microVM (own kernel, own daemon, isolated from host files/network/secrets). **Cloud Sandboxes** answer the next question: how do you run a dozen agents for five, ten, or twenty-one hours without watching any of them?

Same isolation model, same `sbx` CLI, Docker-managed always-on compute underneath. Interactive work stays on the laptop; long-horizon loops move to the cloud with `sbx move … --to cloud` (filesystem captured and recreated either direction). Detached cloud runs, kits for Claude Code / Codex / Copilot / OpenCode and peers, shared MCP gateway, secrets injected per request so the agent never holds the raw key, and network policies that bound what endpoints agents can reach. Sessions default to one hour and can run up to 24 hours; compute meters by the second; a paused sandbox costs nothing. The product claim is deliberately not “a smarter model” — it is durable, supervised place for work that outlasts a human session.

## Why it matters for code review

Continuous harnessed throughput only compounds past peak-session heroics when the agent has somewhere safe to keep going after you close the lid. Cloud Sandboxes are the environment half of that bet: isolation + always-on compute + morning review of what came back. FOMO that nothing moved overnight is cheaper than a fleet of laptop-bound sessions that die when you leave. Bursty Claude mastery still wins for the judgment-heavy change you want to steer live; the overnight board is for the queued, verifiable work that would otherwise wait for your next focused afternoon — and the review surface is still the morning inventory, not the agent’s self-report that it “finished.”
