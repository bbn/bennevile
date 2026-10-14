---
title: "GitHub is rebuilding Git storage for agent fleets: commits up 5x, merges nearly 4x, all landing on one ref"
description: "Oct 6 GitHub engineering blog (Brian Celenza): September saw 7.38 billion commits, more than five times a year earlier, with pushes up 4.9x and pull request merges nearly 4x. Agents that checkpoint after every action make push latency their speed limit, and merge queues funnel the work onto a single reference. GitHub is separating durable storage from serving compute and says branch protections and required reviews stay intact."
date: 2026-10-06
kind: field-note
source:
  title: "Building Git infrastructure for agent-scale development (The GitHub Blog)"
  url: https://github.blog/engineering/architecture-optimization/building-git-infrastructure-for-agent-scale-development/
project: steward
---

This [GitHub engineering post](https://github.blog/engineering/architecture-optimization/building-git-infrastructure-for-agent-scale-development/) is about storage, but its numbers describe what sustained agent work does to the path from commit to merge. Total Git activity went from 218.2 billion to 473.3 billion events a month between September 2025 and August 2026. Developers and agents made 7.38 billion commits in September, more than five times as many as a year earlier. Pushes grew 4.9x to 3.35 billion a month, pull request merges grew to nearly 4x, and Actions ran 3.26 billion times in September.

## Where steady load piles up

The post lists the pressure points. An agent in a tight loop commits or checkpoints after nearly every action, so push latency a human would never notice becomes its speed limit. Thousands of agents on their own branches produce a write rate that never lets up. Trunk-based development, release trains and merge queues all funnel that work onto one reference that has to absorb every merge. Each push fans out into thousands of reads as CI and code scanning fetch the same tip, and every write adds compaction work that compounds.

## What they're changing

Today each repository lives as several full copies on fileservers, and every copy takes part in every write, so adding read capacity makes pushes slower. The new design keeps the authoritative copy in durable storage and serves reads from cache workers that can come and go with load, including the burst when "a new agent fleet coming online." Only the reference update needs agreement; storing objects, checking connectivity and secret scanning move off the critical path. GitHub reports up to 35x higher write throughput in internal benchmarks and says branch protections, required reviews and audit logs carry over: "As agents take on more of the work, the people who own the code can still review, understand, and approve it."

## How it fits

This is a vendor describing its own roadmap, with no figures yet on review latency or what share of those commits are agents. Still, it shows the always-on pattern at platform scale: the load is continuous rather than bursty, and the contended resource is the single branch every reviewed change has to land on. It pairs with GitHub's [stacked PRs entering the merge queue as one group](/posts/github-stacked-prs-ga-agent-changes-merge-as-one-group/), trimmdev's [coordinator that serializes risky merge lanes around the clock](/posts/trimmdev-merge-coordinator-24h-arm-lanes/), and Tom Baldwin's argument that [fleet size should follow what reviewers can check](/posts/baldwin-heat-death-codebase-review-sets-fleet-size/). Faster pushes raise the ceiling on how much reaches review; they don't make the review any faster.
