---
title: "OpenFactory: always-on orchestrator, separate Box for review"
description: "Aug 11 Ascii Box template: continuous factory Box queues GitHub/Linear/Sentry issues; build Box plans/commits/tests; fresh verification Box gets the branch as a Git bundle — humans merge, never the factory."
date: 2026-08-11
kind: field-note
source:
  title: "Build an Issue-to-PR Software Factory on Ascii Box"
  url: https://box.ascii.dev/blog/software-factory
project: steward
---

Ascii’s Aug 11 OpenFactory write-up is a concrete always-on factory shape you can fork: an orchestrator that turns issues into reviewed PRs while humans stay at merge. The framing matches the industrial receipts it cites (Microsoft issue→PR merge rates, Vercel sandbox-authored share of weekly merges, Shopify River, Stripe Minions, Meta monitoring cut-downs) — then refuses one-size-fits-all and ships a template on Ascii Box instead.

Architecture is the portable part. A **continuously running factory Box** owns the queue, triage, plan approvals, and dashboard (no auto-stop). A **user-owned template Box** holds a repository-ready disk (toolchain, deps, services already installed). Each admitted issue forks a **build Box** for plan → change → test → commit on an `openfactory/…` branch, then a **second verification Box** receives that branch as a **Git bundle** for independent review/QA before any push. Blocking verdicts re-enter a bounded fix loop; non-blocking ones become an ordinary GitHub PR. OpenFactory never merges, never force-pushes, never touches `main`. Plan gates can pause the build Box (snapshot, stop billing, resume on approval). Workers inherit account-level secrets and agent connections; the template stays the pristine starting disk and refreshes on base-branch movement when quiet.

Inputs are webhook-shaped (GitHub/Linear/Sentry Issues, plus manual runs). Settings expose per-stage models/prompts, verification threshold, fix limit, and concurrency — the knobs that turn “agent left alone overnight” into a governed loop. The honest boundary: you still prepare the template yourself (OpenFactory does not clone or install your stack), and review quality is only as good as the checks and prompts you put in the verification stage.

## Why it matters for code review

Continuous factories beat bursty interactive mastery when verification is structurally separate from implementation. OpenFactory’s fresh verification Box is the holdout pattern in sandbox form — the builder cannot rubber-stamp its own homework from the same machine context — so overnight and always-on throughput can compound without turning morning humans into the only gate. Pair with merge-rate honesty: the factory’s job is a reviewable PR with evidence; ownership stays at merge. Without that split, FOMO about idle agents just industrializes unverified diffs.
