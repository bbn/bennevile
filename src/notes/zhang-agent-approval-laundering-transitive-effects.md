---
title: "Approval laundering: the record names the command, not the workflow it launched"
description: "Sep 23 Zhang et al.: closure-bound approval — 40→13 residual gaps across 111 pairs; effect-bound pre-auth predictions cut residual effect instances 10→3 on holdout; Vite install and MCP tool calls omit file/network effects."
date: 2026-09-23
kind: paper
source:
  title: "Agent Approval Laundering: Transitive Effects Beyond the Approved Invocation"
  url: https://arxiv.org/abs/2609.28586
project: steward
---

Zhang, Xia, Wu, Yue, Zhang, Cheng, and Tu’s Sep 23 paper names a merge-gate failure continuous factories keep rediscovering: **approval laundering**. Coding-agent approval UIs bind a human decision to a command or tool call, while the developer toolchain executes the **transitive workflow** that invocation activates — npm lifecycle hooks, PEP 517 backends, Cargo build scripts, Docker builds, Git hooks, IDE tasks, MCP server transports. The durable record can truthfully name the entry invocation and still omit effects exercised inside its closure.

They formalize **closure-bound approval** over six operational effect classes (process, file, environment, network, container, MCP) and prove an information limit: if executions with identical policy-visible fields require different effect-specific decisions, no record-only policy can guarantee both. The Approval-to-Action Security Benchmark binds captured approval objects to immutable post-execution evidence. Across **111** fixed approval-object/trace pairs, residual records fall from **40** under explicit fields to **17** with command semantics and **13** when post hoc analysis adds metadata available at decision time. Across **11** fixed-SHA project executions the same ladder reaches **zero** metadata residuals; two exact mappings (Vite process→process+file; MCP capability→capability+network) recur across three product frontends. Prospective recovery freezes source-backed effect predictions **before** authorization: on **17** holdout workflows, predictions hit **0.926** macro recall and **0.941** macro precision, cutting residual effect instances from **10 to 3**. A Claude Code PreToolUse integration carries the frozen effect-bound record through the product’s existing permission path without automatic approval.

## Why it matters for code review

Overnight agent fleets that rubber-stamp “run this install / call this MCP tool” are authorizing entry points, not closures. Review approval gates the way Zhang et al. score coverage: demand a source-backed prediction of transitive file, network, and container effects **before** the allow, bind provenance with the decision, and fail closed when metadata cannot name the boundary. Continuous verified momentum is not more confident approvals overnight — it is a harness that refuses to launder a wider workflow behind a truthful command string.
