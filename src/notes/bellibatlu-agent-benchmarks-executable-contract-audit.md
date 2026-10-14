---
title: "Do agent benchmarks do what they say? Audit the tool contract under the score"
description: "Sep 30 Bellibatlu/Wang/Zhang: executable contracts over 34 mutating tools in four benchmarks find seven tool defects + one ungrounded grader; MedAgentBench writes report success with no write; on 1,120 constructed paths tau2’s evaluator rewards the telecom defect and fails its repair."
date: 2026-09-30
kind: paper
source:
  title: "Do Agent Benchmarks Do What They Say? An Executable-Contract Audit of Tool-Using Agent Environments"
  url: https://arxiv.org/abs/2609.37315
project: steward
---

Rohith Reddy Bellibatlu, Zichong Wang, and Wenbin Zhang argue that tool-using agent leaderboards inherit an untested assumption: each simulated tool did what its interface advertised. Surveyed audit taxonomies have no category for that assumption. They author provenance-bound executable contracts for advertised preconditions and effects, check implementations statically and dynamically, and trace defects into the evaluator fields that grade them.

Across **34** audited mutating tools in MedAgentBench, τ²-bench, AgentDojo, and MM-ToolSandbox they confirm **seven** tool defects and one evaluator property—**one headline-eligible class per benchmark**. MedAgentBench’s write path returns “POST request accepted and executed successfully” while no record changes; its Action SR grader reads that message, not FHIR state, so published write success rates measure payload shape under a no-write design. τ²-bench’s `refuel_data` advertises “line must be Active” with the check commented out; on **1,120** constructed paths that isolate the defect, the shipped evaluator rewards every unpatched refuel of a suspended line and fails the one-hunk repair. On AgentDojo’s full **25**-tool mutating surface, at least **5** tools diverge from their advertised contracts as read. Injected-defect recall is low (most misses are probe gaps), but precision is high—zero false positives on **25** injection flags.

## Why it matters for code review

Harnesses and overnight eval loops that treat green benchmark scores as evidence of agent competence will promote agents that learned a broken mock. Demand state-grounded oracles (read the record, not the success string), disclose intentional simplifications on agent-visible surfaces, and treat tool-contract conformance as a CI gate for any factory that uses a sim to decide merge or model selection. Continuous verified momentum needs the verification substrate itself to be auditable; FOMO for climbing a leaderboard whose tools lie just compounds phantom progress.
