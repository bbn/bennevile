---
title: "Code that works, environments that don’t: the three-layer dependency gap"
description: "Sep 30 Vangala & Malik (Missouri): 1000 agent runs across Claude/Codex/Gemini and four languages show functional green while declared, installed, and runtime-traced dependencies systematically disagree—SBOM-grade manifests are not trustworthy without independent tracing."
date: 2026-09-30
kind: paper
source:
  title: "Code That Works, Environments That Don’t: Measuring Environment Reproducibility in AI-Generated Software"
  url: https://arxiv.org/abs/2610.00425
project: steward
---

Bhanu Prakash Vangala and Tanu Malik (University of Missouri–Columbia, Sep 30) argue that coding-agent benchmarks collapse “works” into functional tests and miss a second axis: **environment specification**—whether the agent correctly names the dependencies the code needs to run elsewhere. They define a Gen → Repair protocol (up to ten repair rounds on runtime errors) and a **three-layer** measurement: $D^{(1)}$ declared from the initial manifest, $D^{(2)}$ installed after package-manager resolution, $D^{(3)}$ necessary-and-sufficient packages loaded under `ptrace`/Sciunit tracing. Pairwise gaps become phantom (declared unused), hidden (needed undeclared), and bloat (installed unused).

Across 50 tasks × four ecosystems (Python, Java, JavaScript, C++) × three frontier CLIs (Claude Code, Codex, Gemini Code Assist)—600 primary runs plus 400 Claude stochastic repeats—functional success after repair is near-perfect, yet environment quality is not. Manifest F1 against runtime ground truth is ~0.77 Python / ~0.71 Java / ~0.22 JavaScript / ~0.02 C++ (with header-only caveats). JavaScript inflates hardest (mean $\rho$ ≈ 11.4 installed vs declared). Cross-agent Jaccard on identical tasks stays below 0.5 even in Python; Claude’s three independent trials never unanimously agree on any task’s dependency set (UCR 0%). On standard-library-sufficient tasks Claude still declared unnecessary externals ~92% of the time. C++ first-attempt failures are often assumed system libraries absent from the clean container—almost always repaired once the environment reports the miss, exposing training priors rather than task hardness.

## Why it matters for code review

Overnight factories that gate only on green tests ship candidate branches whose manifests are different supply chains every generation—phantom packages inflate SBOMs; hidden packages skip vulnerability scans. Review merge admission for Vangala-shaped evidence: declared vs installed vs runtime-traced dependency sets, not “it ran in the agent’s sandbox.” Continuous verified momentum compounds when the harness treats environment portability as a first-class gate alongside functional correctness; peak-session heroics that leave `requirements.txt` as folklore do not. Pair with [VeriHarness’s environmental evidence resolver](/posts/zhang-veriharness-disagreement-consensus-environmental-evidence/) and [Qualiteg’s “done means it runs”](/posts/qualiteg-completion-gate-done-means-it-runs/) when morning review must trust both the patch and the environment it claims to need.
