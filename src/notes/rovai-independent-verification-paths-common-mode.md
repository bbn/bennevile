---
title: "Independent verification paths that share definitions are not independent"
description: "Sep 30 Rovai case study: dual Python/SPARQL redundancy gate printed ALL CROSS-CHECKS AGREE while 3/7 published counts were wrong (disposition 932→220); 72/75 LLM “independent” paths still returned the defective 932."
date: 2026-09-30
kind: paper
source:
  title: "Independent Verification Paths Are Not Independent: A Case Study of Common-Mode Failure in a Satellite Catalogue Pipeline"
  url: https://arxiv.org/abs/2609.37603
project: steward
---

Fabio Rovai reports a complete failure of a popular safeguard for pipelines that emit more numbers than authors can hand-check: compute every published quantity by two routes on different technology and refuse to exit when they disagree. In a cross-catalogue integrity study, a gate compared set-based Python counts with SPARQL over an emitted RDF graph and printed **ALL CROSS-CHECKS AGREE** on seven defect classes. **Three** of those counts were wrong; disposition disagreement was overstated more than fourfold (**932** published → **261** after a first vocabulary fix → **220** after reading object phase histories the harvest never loaded). Both paths imported the same classification constants, which encoded a misreading of the source’s status vocabulary—so the error was **common-mode** and the gate was silent by construction. SHACL “corroboration” matched the sum of the wrong counts: one thing measured repeatedly still looked green.

What caught the first error was not redundancy but checks that go back to the source’s documentation: total-function coverage of status codes, residue decomposition of unexplained disagreements, and inventory reconciliation of listed vs fetched files. Those same checks then passed a corrected reading that was still wrong on **42** objects—none flagged—until a further line-by-line reading of phase semantics. In a controlled replication with tools disabled, **72 of 75** model-generated “independent” verification paths still returned the defective **932**, including **29 of 30** when the prompt carried the source’s own status definitions verbatim.

## Why it matters for code review

Always-on factories that treat dual agents, dual languages, or maker≠checker agreement as a merge gate will ship confidently when both sides share the same wrong constants, schemas, or “done” predicates. Diversify the **meaning** inputs—source docs, held-out oracles, evidence that neither path imports—not only the last computational step, and review overnight green reports for common-mode ancestors before trusting ALL CHECKS AGREE. Continuous verified momentum compounds only when disagreement can actually fire; FOMO for more redundant checkers that share one vocabulary just amplifies the same misunderstanding.
