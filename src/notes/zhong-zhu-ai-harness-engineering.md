---
title: "Capability is model × harness × environment — not the model alone"
description: "May 13 Zhong & Zhu: eleven harness responsibilities, H0–H3 visibility ladder, and episode packages that adjudicate verification autonomy — reframing autonomous SE as a runtime-systems problem."
date: 2026-05-13
kind: paper
source:
  title: "AI Harness Engineering: A Runtime Substrate for Foundation-Model Software Agents"
  url: https://arxiv.org/abs/2605.13357
project: steward
---

Hailin Zhong and Shengxin Zhu’s May 13 paper relocates the autonomy gap. A model that writes a correct local patch still fails when it inspects the wrong files, misreads a failure, or declares done without evidence — and the usual story blames the model. They treat capability as emergent from a **model–harness–environment** system: the harness is the runtime substrate that mediates how an agent observes a project, acts, receives feedback, and establishes that a change is complete. Eleven named responsibilities make that substrate inspectable — task interface, context manager, tool registry, project memory, task state, observability, failure attribution, verification protocol, permission boundary, entropy auditor, intervention logger — each with a failure mode when absent and an evidence artifact when present.

The empirical instrument is a controlled **H0–H3 ladder** that progressively exposes runtime support while holding task, repository, and model fixed: H0 is task + files; H1 adds tools; H2 adds agent-readable memory and task state; H3 adds deterministic checks, reproduction, failure attribution, and a verification report template. Evaluation shifts from “did the patch pass?” to an **episode package** — action, tool, context, verification, attribution, intervention, entropy, and outcome traces — adjudicated for *verification autonomy*, not just task success. Their small login-validation case shows all four levels can produce a working patch while only H3 systematically yields reproduction logs, attribution, requirement-linked checks, and a structured verification report. Five principles close the frame: explicit runtime resources, traceable mediation, requirement-level verification, attribution before recovery, and entropy awareness.

## Why it matters for code review

Steady overnight throughput only compounds if “done” is an evidentiary object the morning can audit. Zhong & Zhu give continuous factories the vocabulary to ask which harness layer failed — context, tools, verification, permissions, or entropy — instead of treating every miss as a model regression or celebrating peak-session heroics that still leave humans as the missing runtime.
