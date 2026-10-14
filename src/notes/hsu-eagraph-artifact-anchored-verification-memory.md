---
title: "EA-Graph: anchor verification claims to artifact content, or admit unprovable"
description: "Aug 4 Hsu/Chi/Everett: sub-path anchors + freshness≠evidence; after upstream drift Haiku ANCHOR F1 median 1.0 vs PROSE 0.27; refuse when support withheld—never guess."
date: 2026-08-04
kind: paper
source:
  title: "EA-Graph: Artifact-Anchored Verification Memory for Coding Agents under Upstream Drift"
  url: https://arxiv.org/abs/2608.04278
project: steward
---

Hwai-Jung Hsu, Cheng-Jan Chi, and Hanna Everett (National Yang Ming Chiao Tung University) target a multi-session coding failure: prose notes say a claim was checked without preserving **what** it was checked against. After an unversioned upstream drop, the project may still build while prior verification claims go silently false. **EA-Graph** stores verification claims over first-class artifacts at **sub-path** granularity (store/path/subpath), resolves aliases to leaf definitions, and anchors each claim to a content digest of the span used in verification. Evidence grade and freshness are independent lattices—STALE support triggers refusal, not a caveated “maybe still true.” When required replacement content is withheld, the claim is **unprovable**, not a forced guess; claim status stays separate from whether to retain the last verified artifact.

Evaluation uses generated worlds (96 behaviors / 12 modules) with known behavior↔artifact ground truth, non-executable references, and D2 drops mixing value drift, logic drift, and deliberate withholding—version history and mtime oracles closed. Across 42 sessions (Haiku 4.5 and Sonnet 5 × seven worlds × ANCHOR / PROSE / NONE), Haiku **ANCHOR** beat PROSE and NONE in all seven worlds (exact Wilcoxon **p = 0.0156** each); median F1 over the not-OK set **1.000** vs PROSE **0.270** / NONE **0.286**. Sonnet ANCHOR was perfect but controls often hit ceiling, so preregistered Sonnet contrasts were non-significant. No session fabricated withheld content. File-level invalidation marks ~88/96 behaviors suspect when ~17 are affected—sub-path identity is load-bearing. Classification ≠ repair: one session classified perfectly then destroyed the port.

## Why it matters for code review

Always-on factories that hand overnight agents a markdown “verified” list are measuring memory theater under upstream drift. EA-Graph’s receipt for continuous verification across sessions: bind claims to the exact artifact content that justified them, withdraw on freshness failure, and allow **unprovable** when the new support never arrived. Score multi-session harnesses by which prior checks remain standable after the vendor drop—not by how many green checkmarks were written into notes. FOMO for longer agent memory without content anchors just preserves confident lies after the table entry changed.
