---
title: "WideSWE: one green repo is not a solved cross-repo change"
description: "Sep 27 Wang et al.: 120 real multi-repo tasks across 41 ecosystems; best config (Codex CLI + GPT-5.6-sol) fully solves 42.5%, yet often greens one target while leaving another unfinished — joint workspaces help features, independent runs mainly recover omitted scope."
date: 2026-09-27
kind: paper
source:
  title: "WideSWE: Can Coding Agents Coordinate Changes Across Repositories?"
  url: https://arxiv.org/abs/2609.33382
project: steward
---

Baoyi Wang, Xingliang Wang, and coauthors argue that coding-agent evaluation still mostly scores work *inside* one codebase, while real ecosystems need **one shared feature or fix across multiple repositories**. **WideSWE** packages **120** tasks (60 bugs, 60 features) spanning **41** ecosystems, mined from linked PRs across **103** orgs, with prompts from issues/PRs and hidden tests reviewed so implementation-specific constraints do not reject otherwise-correct solutions. Success requires **every** target repository to pass its fail-to-pass and pass-to-pass suites.

Across seven agent configurations, full-task success tops out at **42.50%** (Codex CLI + GPT-5.6-sol); others land **10.83–37.50%**. The same top config solves at least one target in **83.33%** of tasks — a gap between local progress and coordinated completion. In most unresolved runs, at least one repo’s F2P suite passes while another does not. Trajectory labels split failures into incomplete scope identification, recognized work left undelivered, and post-edit failure; Gemini under Claude Code often stays in investigation after planning both sides (**52.34%** delivery failures). On **89** prompt-matched cases, joint ecosystem execution beats independent per-repo runs overall (**40.45%** vs **35.96%**), with independent recovering omitted work (especially bugs) and joint retaining behavioral references that help features — at roughly **3×** fewer API requests than spinning one full run per target.

## Why it matters for code review

Continuous factories that open PRs overnight across SDK fleets, shared libraries, and consumers will claim “done” when the first green suite lands. Review need a **cross-repo done contract**: scope checklists for every target, joint verification against related implementations, and refusal to merge a partial ecosystem change because one repo’s CI is green. FOMO about idle agents is misplaced if the fleet finishes Go and forgets Python and Ruby; steady harnessed throughput compounds only when coordination — not just per-repo heroics — is the merge gate.
