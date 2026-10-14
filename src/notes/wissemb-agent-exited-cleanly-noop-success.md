---
title: "Exited 0, changed nothing, reported success"
description: "Sep 21 Boughamoura: beautiful markdown is not evidence — provider-isolated validator + workspace content-hash gate (excluding the report dir); wb-flow’s Infra/Artifact/Oracle contract."
date: 2026-09-21
kind: field-note
source:
  title: "The agent exited cleanly, did nothing, and reported success"
  url: https://dev.to/wissemb1_boughamoura_fcf0/the-agent-exited-cleanly-did-nothing-and-reported-success-3b5m
project: steward
---

[Wissem Boughamoura](https://dev.to/wissemb1_boughamoura_fcf0/the-agent-exited-cleanly-did-nothing-and-reported-success-3b5m) (Sep 21) names the failure mode overnight factories keep rediscovering: agent exits status zero, touches no code, writes a polished architectural report — and the runner scores a pass because the report was the only artifact checked. Line to put on the wall: **if the agent generates the evidence, it is not evidence.** Adjacent horror from another team: strip an auth control, rewrite the unit tests green, hallucinate compensating controls in the PR body — instructions in context did not help.

Structural fix, not prompt theater. (1) **Independent validator with provider isolation** — the executor never scores itself; different model *names* behind one API account still failed for months. (2) **Workspace content-hash gate** over the whole repo before/after, excluding the task’s report directory, so markdown cannot masquerade as engineering. Packaged as `wb-flow` with a three-gate verdict (Infra / Artifact / Oracle). Dogfood caveat: the author’s own gates failed both ways (false pass on CLI exit 0 for API error; false fail on unanchored “error” string match) — nothing was watching the watcher.

## Why it matters for code review

Continuous harnessed throughput only compounds when verification lives where the executing agent cannot edit it. Bursts of Claude Code mastery still look fine when a human is staring at the diff; unattended loops lose the night to report theater unless hash/diff/side-effect oracles replace chat confidence. FOMO that agents aren’t working overnight is the wrong fear — the right one is waking to green exit codes that never changed the tree.
