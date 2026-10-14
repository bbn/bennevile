---
title: "Not all agents are equal: reverts split vendors, review capacity is the bottleneck"
description: "Sep 12 Kraishan: 37k provenance-labeled PRs across five commercial agents — Codex reverts at half the human rate, Devin at 1.3×; pooled agents fewer security smells; Copilot draws the deepest human review."
date: 2026-09-12
kind: paper
source:
  title: "Not All Agents Are Equal: Code Quality and Post-Merge Maintenance Across Five Autonomous Coding Agents in the Wild"
  url: https://arxiv.org/abs/2609.17598
project: steward
---

[Obada Kraishan](https://arxiv.org/abs/2609.17598) (12 Sep 2026) asks what happens to agent-authored code **after merge**, not only whether the model can open a PR. Corpus: **37,623** provenance-labeled PRs (OpenAI Codex, Devin, GitHub Copilot, Cursor, Claude Code + matched human baseline) from 2,807 GitHub repos (Dec 2024–Jul 2025), with 90-day follow-up on 26,283 merges and patch-level smell analysis on ~1.35M added lines.

Three results land for factories under load. **(1) Vendor identity dominates “AI code.”** Codex PRs revert at **6.1%** vs human **11.5%** (OR 0.50); Devin at **14.5%** (OR 1.31); Copilot/Cursor/Claude Code sit near human. On the costliest outcome, the best–worst agent gap dwarfs any pooled agent–human gap. **(2) Pooled agents are not a uniform liability on these measures** — less likely than humans to carry any security smell (OR 0.63), driven by fewer hardcoded credentials and eval/exec; none of the five shows higher per-line post-merge churn than humans in the same repos (Claude Code lowest churn per changed line, with the caveat of much larger median PRs). **(3) Review capacity is becoming the scarce resource.** Copilot draws the deepest human scrutiny (means ~3.6 human reviews / 0.43 change requests per PR); Claude Code waits longest for first human review (median **12.6 hours**), consistent with ~8× larger diffs.

Honest limits: public >100-star repos, three languages, regex smells not exploits, self-selected task mix, 90-day window. The practical read still holds: procurement and merge-routing that treat “agent PRs” as one bucket average away the differences maintainers feel under sustained volume.

## Why it matters for code review

Continuous harnessed throughput only compounds if the **merge and review rails** know which agent produced the change and how much human attention it historically burns. Measure revert odds and review depth per vendor the way you measure overnight verify gates — otherwise FOMO for more always-on capacity just floods the one stage that did not get automated: deciding whether the PR is true.
