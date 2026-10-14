---
title: "Sourcegraph GA: keep-working batch agent until CI is green"
description: "Sep 14 Agentic Batch Changes GA: one plain-language change scoped across the indexed fleet, CI-repair loops until PRs are reviewable — ~1k beta merges; Mercari ~80 repos; Canva 50+ migration PRs."
date: 2026-09-14
kind: field-note
source:
  title: "Sourcegraph Announces General Availability of Agentic Batch Changes, the AI Agent for Large-Scale Code Changes Across Enterprise Codebases"
  url: https://w.marketminute.com/article/bizwire-2026-9-14-sourcegraph-announces-general-availability-of-agentic-batch-changes-the-ai-agent-for-large-scale-code-changes-across-enterprise-codebases
project: steward
---

Sourcegraph’s Sep 14 GA for Agentic Batch Changes is a tortoise receipt at fleet scale. The problem they name is familiar: a change that must land *everywhere* (EOL bump, CVE, deprecated API, shared-library rollout) turns into hundreds of PRs nobody staffs — while coding agents keep adding code faster than any human can vouch for a codebase-wide migration. Classic Batch Changes already opens and tracks PRs across hosts; the agentic layer plans the work, adapts per repo, and **keeps working until the pull requests are ready for an engineer to review and merge**.

Loop shape (from the announcement and product page): engineer states the change in plain language → coordination agent scopes via Sourcegraph’s indexed code graph → validates the approach on one repo before blasting diffs → pushes in batches → routes mechanical work to scripts and judgment work to Claude Code/Codex (with per-repo instructions + Sourcegraph MCP) → on CI failure, adjusts and retries → humans approve every changeset before merge. Outcome-based pricing charges per *merged* changeset, not per token or abandoned PR — an economic nudge toward verified throughput over bursty attempt volume.

Beta receipts they cite: nearly a thousand changesets merged on security remediation through library migrations. Mercari’s Patrick Klitzke: one prompt fixed a GitHub Actions env-injection pattern on Help Center FE/BE, then extended across ~80 affected repos — “similar, but not identical setups” that a blind search-replace would mishandle. Canva’s William L.: 50+ PRs for a library migration, tracked to merge from one UI instead of “huge PRs or spreadsheets.” Batch Changes baseline they quote: half a million changesets/year already; GA adds hosts GitHub, GitLab, Bitbucket Server/Cloud, Azure DevOps, Gerrit for Sourcegraph Cloud.

## Why it matters for code review

Steady harnessed momentum compounds past peak-session heroics: the scarce resource is still human review/merge judgment, but the factory’s job is to present *CI-green, scoped, trackable* changesets overnight and across the fleet — not a hero Claude session in one repo. FOMO when agents aren’t working on your behalf is exactly the deferred migration backlog Adler names; the counter-risk is PR flood without verification. Sourcegraph’s bet is explicit: agent loop owns CI repair and cross-repo variation; humans keep the merge button. If your “always-on” story stops at generation without a keep-working-until-green gate, you bought the hare’s FOMO and still pay the morning review tax.
