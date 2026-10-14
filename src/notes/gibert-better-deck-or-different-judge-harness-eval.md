---
title: "Better deck or different judge? Harness gains that move when the grader blinks"
description: "Sep 30 Gibert/Despujols/Rochet: CIB deck harness beats same-model direct generation by 20.4–33.6 pts (text-only), but repeated LLM judges shift identical decks ~8 pts MDC—progress across rounds can be indistinguishable from grader noise."
date: 2026-09-30
kind: paper
source:
  title: "Better Deck or Different Judge? Evaluating Agentic Harness Gains in Corporate and Investment Banking"
  url: https://arxiv.org/abs/2609.39958
project: steward
---

Ludovic Gibert, Matis Despujols, and André-Louis Rochet study a painfully familiar factory loop: an agentic **harness** (calculations, playbooks, compiled narration, validation gates) for corporate/investment-banking decks, steered and scored by **LLM judges**. The harnessed 27B system beats the same model writing from a short prompt by large margins—**20.4 to 33.6 points** out of 95 in cleaned shared-session text-only grading, ahead on all seventeen deliverables—and stays close to direct frontier (Opus) generation. Every judge in a six-family panel also sees round-1→round-7 improvement.

The sting is measurement. Two Opus passes on **byte-identical** decks show ICC ~0.77 with per-deck minimal detectable change around **8 points**; session-clustered offsets can dwarf a round-to-round “win.” A Sonnet development pass once sat **+11.8** above Opus on the same files—then a panel Sonnet rerun five days later erased that offset entirely. Judges agree more on broad progress than on final rankings (median pairwise ρ drops from 0.63 in round 1 to **0.30** in round 7). Against strong-prompt Opus, harness margins collapse toward noise once presentation and template markers are controlled.

## Why it matters for code review

Continuous verification under volume only compounds if the **oracle is stable**. When overnight harness loops optimize against an LLM judge that also drifts, “merge-rate up” can mean better artifacts—or a different grader session. Review the evaluation protocol the way you review the factory: fixed judge configuration, repeated grading, session clustering, and human anchors before celebrating small rubric deltas. Productive complication for harness cheerleading: matched compute and reserved tasks still leave **judge reliability** as a first-class CI concern. Pair with [Rovai on common-mode independent verifiers](/posts/rovai-independent-verification-paths-common-mode/) and [Hu/NanoHarness on model×harness interaction](/posts/hu-demystifying-harness-effects-nanoharness/).
