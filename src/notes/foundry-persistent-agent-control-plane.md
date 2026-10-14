---
title: "Foundry: a persistent control plane that validates before it persists"
description: "Dec 28 ai-supervisor-foundry/foundry: BYOK orchestration for Cursor/Copilot/Gemini — provision sandboxes, dispatch worker nodes, hybrid local-then-LLM validation, DragonflyDB resume across multi-day runs."
date: 2025-12-28
kind: field-note
source:
  title: "Foundry — persistent control plane for agentic software development"
  url: https://github.com/ai-supervisor-foundry/foundry
project: steward
---

[ai-supervisor-foundry/foundry](https://github.com/ai-supervisor-foundry/foundry) (created Dec 28, 2025; public beta) sells the factory metaphor as infrastructure: treat Cursor, Copilot, Gemini and friends as **managed worker nodes**, not chat tabs. The control loop is fixed — provision an isolated sandbox, dispatch the task to a suitable node, monitor scope/time/file constraints, then **validate and persist** only when criteria pass. State lands in DragonflyDB after every atomic step so a killed process, provider outage, or multi-day pause resumes at the exact task — not a reconstructed chat history. Operator-defined task lists drive execution; Foundry’s “anti-planner” bet is that the plane enforces the backlog and never invents new goals.

Cost and reliability hooks are explicit. A **hybrid validation** pipeline runs free local deterministic checks (AST, regex, file shape) before asking an LLM to verify; retries on failure/ambiguity stop at a configured max. Audit logs (`audit.log.jsonl`) record what ran and why it failed. CLI halt/resume and a dashboard at localhost:5173 make the factory operable without babysitting each agent CLI. Bring-your-own keys means the control plane owns orchestration and evidence, not inference spend.

## Why it matters for code review

Continuous verified throughput compounds when crash-resume and cheap gates sit *outside* the model session. Foundry’s useful distinction from “leave Claude open overnight” is the same one merge queues already teach: progress that isn’t checkpointed and validated doesn’t count. Review the acceptance criteria and the audit trail the way you’d review a required-check config — overnight FOMO here is “did the control plane keep draining the backlog with receipts,” not “did one window keep generating.” Bursts still win when intent is still being discovered; always-on planes win when the scarce resource is reliable multi-day execution under load.
