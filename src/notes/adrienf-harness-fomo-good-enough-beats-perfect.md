---
title: "Harness FOMO: good enough is already here"
description: "Oct 9 essay from AdrienF: the feeds sell 2,500-PR months and durable orchestrators, but a working harness that ships for the business beats chasing the perfect always-on setup."
date: 2026-10-09
kind: field-note
source:
  title: "Harness FOMO"
  url: https://x.com/adrienf_/status/2108567998222979457
project: steward
---

**AdrienF** names the feeling directly: FOMO about the new wave of durable harnesses and orchestrators. His setup is already substantial: local and remote Claude agents on a VM, a persistent "chief of staff" agent orchestrating tasks, a Slack bot, and mobile remote control. Still, the feeds keep showing "2,500 PRs last month to production" and agents "handling everything," and it reads like a race to merge more PRs than everyone else.

So, like many people this week, he built a first version on Pi's new durable package: a Kanban board, durable workers in a VM, and a Docker engine that can run a dozen instances of his stack at once. It "kinda works." His conclusion is the useful part: the perfect system does not exist, more sandboxing, VMs and MCPs can always be added, and "good enough" is already here and one prompt away from improving. What matters is shipping something meaningful for the business.

## Why it matters for code review

This is the psychological side of always-on factories. The always-on pitch is steady, verified throughput, but the PR-count leaderboard turns it into the same burst-chasing it was meant to replace: rebuilding the harness instead of letting it run. Adrien's point productively complicates the case for 24/7 agents. Most teams cannot, and do not want to, run a marathon overnight. A modest harness whose output you can actually review and merge compounds. A bigger orchestrator you keep rebuilding mostly creates more unreviewed work.
