---
title: Commits doubled; verification didn’t
description: "Signadot/TNS on GitHub’s 2.9B monthly commits: generation is machine-paced while runtime verification still queues through staging—and how per-change isolation closes the gap."
kind: field-note
date: 2026-08-29
source:
  title: Commits on GitHub have doubled in four months. Verification capacity has not.
  url: https://thenewstack.io/scaling-ai-code-verification/
project: steward
---
GitHub’s postmortem-era numbers make the abstract concrete: monthly commits jumped from ~1.4B to ~2.9B in four months. Platform capacity is a Microsoft problem. Your problem is confidence—each commit is a behavior claim that almost nothing checked against a running system.

AI review and smarter CI help the diff; they don’t run the change. Shared staging serializes. Full-stack duplicates don’t double with budget. Teams respond by speeding review, throttling agents, or merging unverified work—and paying later in incidents.

The proposed shape for cloud-native systems: one shared baseline environment, deploy only changed services per change, route test traffic by key so each change gets isolation where it matters. Agents can iterate against real dependencies inside the loop; humans review intent on already-exercised PRs.

## Why it matters for code review

Diff review without runtime evidence is increasingly theater under agent volume. Matching verification’s curve to generation’s is the infrastructure problem behind “why does review feel broken.”
