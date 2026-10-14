---
title: "Valid MCP on the wire ≠ usable semantics in the harness"
description: "Sep 17 Patodiya: differential tests on 18 fixtures across four pinned Python MCP integrations find 13 fixture–task divergences—structured slots, error flags, and rich content change after decode, by interface and consumer contract."
date: 2026-09-17
kind: paper
source:
  title: "Localizing Post-Wire Semantic Changes in MCP Agent Frameworks"
  url: https://arxiv.org/abs/2610.00182
project: steward
---

Aditi Patodiya (independent) separates three questions that harness checklists usually mash together: is the MCP message valid, does the required information survive, and can a particular consumer still read it? After a tools/call result crosses the wire, frameworks may keep typed fields, flatten them to text, split them across model and auxiliary channels, or drop them before the provider request. Protocol conformance stops at the boundary; this work starts there.

The method fixes a canonical result, walks each framework’s public carriers (application object, model-client payload, locally captured provider body where exposed), and scores explicit consumer tasks: structured presence/null/value (T2), declared error continue/abort (T3), and rich-content identity/order (T4). On **18** designed fixtures in four pinned Python stacks—OpenAI Agents, LangChain MCP Adapters, Google ADK, Microsoft Agent Framework—the census finds **13** unique fixture–task divergences (**38** stage manifestations). Google ADK satisfies every primary contract on its observed path; others lose structured slots, error markers, or resource descriptors depending on the interface. Optional-null policies and JSON-text fallbacks can “recover” values while also inventing wrong or source-absent fields—so consumer contract choice changes which failures count. Documented structured-output settings help stress cases for text parsers without restoring a dedicated structured slot. The study reports controlled interface evidence, not production failure rates or model behavior.

## Why it matters for code review

Always-on agent factories that treat “MCP connected” as a green check will miss silent projection loss: the tool told the truth, the model never saw it. Review and overnight gates need regression tests that name **carrier + required atoms + how the consumer reads them**, not wire schema alone—the verification twin of fail-closed merge checks. Pair with [Zhang’s VeriHarness](/posts/zhang-veriharness-disagreement-consensus-environmental-evidence/) when environmental evidence must outrank narration, and with [Li’s RETRACE](/posts/li-retrace-bidirectional-independent-patch-verification/) when independent re-check is the bar for “done.”
