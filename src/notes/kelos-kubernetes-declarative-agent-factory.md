---
title: "Kelos: the always-on factory is a Kubernetes CRD, not a laptop left open"
description: "Mar 2 Kelos: coding agents as K8s Tasks/TaskSpawners — GitHub/Jira/cron triggers, isolated pods, GitOps-able workflow YAML; self-development pipeline ships its own PRs."
date: 2026-03-02
kind: field-note
source:
  title: "Kelos — The Kubernetes-native framework for orchestrating autonomous AI coding agents"
  url: https://github.com/kelos-dev/kelos
project: steward
---

[kelos-dev/kelos](https://github.com/kelos-dev/kelos) (Show HN Mar 2; still shipping — v0.57 on Sep 20) treats the continuous factory as cluster infrastructure. Agents (Claude Code, Codex, Gemini, OpenCode, Cursor, or a custom image) become ordinary Kubernetes workloads: a `Workspace` binds a repo, an `AgentConfig` shares instructions/skills/MCP, a `Task` is one job, and a `TaskSpawner` creates Tasks from GitHub issues/PRs, Jira, Linear, cron, or webhooks. Isolation is the default — ephemeral pods instead of `--dangerously-skip-permissions` on a developer laptop — and the workflow itself is YAML you can review, version, and GitOps.

The design bet is declarative control planes over prompt heroics. Spawners poll labeled issues, fan out with `maxConcurrency`, and record structured results (branch, commit, PR URL, token usage) on Task status; `TaskPipeline` and `dependsOn` exist for ordered stages. Sessions stay reconnectable from terminal or a web console. The project’s own [self-development](https://github.com/kelos-dev/kelos/tree/main/self-development) pipeline is the receipt: Kelos watches Kelos issues and drafts fix PRs — refine the YAML or the controller when the loop breaks, then let it run again.

## Why it matters for code review

Overnight laptop supervisors prove gates on one machine; Kelos relocates the same always-on bet into schedulable, observable infrastructure — cron scans, issue→PR spawners, auto-review Tasks — whose definitions live in PRs like any other service. Continuous modest throughput compounds only if the factory keeps taking work when nobody is at a terminal; review the Spawner policies and the Task receipts the way you’d review a merge queue config, not a chat transcript.
