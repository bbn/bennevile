---
title: "Cloudflare's vuln harness started as a skill: hunters propose bugs, a separate agent tries to disprove them, and nothing trusts its own homework"
description: "Jun 18, Cloudflare open-sources the security-audit skill that seeded its fleet vulnerability harness: multi-phase recon and hunt, adversarial validators, schema-checked findings, and a fresh agent that re-verifies every survivor — then a second model system for triage and human-gated fixes."
date: 2026-06-18
kind: field-note
source:
  title: "Build your own vulnerability harness"
  url: https://blog.cloudflare.com/build-your-own-vulnerability-harness/
project: steward
---

**Dan Jones, Alexandra Godoi and Grant Bourzikas** describe how Cloudflare moved from a local coding-agent skill to a continuous, fleet-wide vulnerability factory — and [open-sourced the ~450-line `security-audit` skill](https://github.com/cloudflare/security-audit-skill) that the harness grew out of. The thesis is blunt: models are interchangeable commodities; the harness is what lasts. Discovery (VDH) and validation (VVS) deliberately run on **different models** so one set of weights is not grading its own finds.

The skill's seven phases map almost one-to-one onto the later pipeline: parallel recon into `architecture.md`, per-attack-class hunters, adversarial validators that try to disprove each finding, a human-readable report, schema-checked `findings.json`, and a **fresh agent that independently re-verifies** every survivor against source. A Hunter must state the threat model before filing; a confirmed finding ships with a PoC that runs on **untouched** code (so the agent cannot edit the tree to make its exploit land) and a proposed patch. The Validator cannot log findings of its own.

At fleet scale the boring machinery matters more than the prompt. Stages write to SQLite keyed by `(run_id, repo, stage)` so a crash loses only the in-flight task. Context per agent stays under about **25%** of the window. Cross-repo Trace walks consumer dependencies; Dedup is its own agent problem once string matching fails. Semgrep was plumbed through and **invoked zero times** in a month — agents preferred reading and crashing binaries in a sandbox. The wishlist tool was written **25,472** times across 128 repos ("I need a FreeBSD VM to confirm this PoC"). Lifetime funnel numbers in the post: **20,799** raw VDH candidates → **12,057** surviving validation → **13,841** in the shared VVS pool with another harness → Dedup folds **5,442** → **7,245** actionable findings for teams. A representative ~30k-LOC repo pass yields ~100 raw finds in 3–4 hours, compressed to ~80 distinct bugs, with the Fixer averaging about five minutes per bug and **never merging** without a human.

## Why it matters for code review

This is continuous verification aimed at security debt rather than product tickets, with the same factory shape: always-on queue, externalized state, independent review that is paid to kill false positives, and a human gate on the merge. The line that travels is the one about homework: "If a Hunter is allowed to grade its own homework, it will confidently validate everything it outputs." Read beside [AFCRA's finding that multi-round AI PR review can approve vulnerability-preserving repairs](/posts/gong-afcra-feedback-guided-code-revision-attacks-ai-pr-reviewers/) and [Ka1manov's noisy-eval loops whose dashboards overstated the real gain](/posts/ka1manov-loop-engineering-noisy-eval-dashboard-reports-2x-gain/). The scarce morning review is not more hunter output — it is a funnel that leaves almost no unconfirmed findings in front of people.
