---
title: "failclosed: MERGE_READY only when the reviewer’s output survives a distrust gate"
description: "Jun 8 Dan Mercede / OrionArchitekton: fail-closed merge admission — parse LLM review, block on unparseable/schema-invalid/contradictory output; receipts over logs; reviewer is a command seam, not the product."
date: 2026-06-08
kind: field-note
source:
  title: "The Authority Gate, Made Runnable: Fail-Closed Merge Admission for Agent-Written Code"
  url: https://www.danmercede.com/thoughts/2026-06-08-authority-gate-made-runnable
project: steward
---

[Dan Mercede’s Jun 8 note](https://www.danmercede.com/thoughts/2026-06-08-authority-gate-made-runnable) (runnable demo: [`OrionArchitekton/failclosed`](https://github.com/OrionArchitekton/failclosed), MIT) targets the failure mode advisory AI review invents: the tool **relays the model’s own verdict**, and when that verdict is truncated, malformed, or self-contradictory (e.g. `fix` with no finding citing a file), the default path is still to let the merge through. That is fail-*open* governance. A merge is a state mutation; an ungoverned agent merge is an irreversible change with no attestation that a rule admitted it.

failclosed runs the reviewer, then **refuses to trust it**. Output passes a hardened multi-shape parser; the gate will not emit `MERGE_READY` on unparseable, schema-invalid, or contradictory results — ambiguity becomes a stop, not “probably fine.” The pipeline waits for review bots, runs standard then adversarial passes through a configurable `reviewer_command` seam (stdin prompt → stdout verdict; Codex or anything else), emits structured fix requests (it does not edit code inline), resolves bot threads via GraphQL, and reports `MERGE_READY` / `FINDINGS_REMAIN` / `THREADS_UNRESOLVED` / `BOTS_PENDING`. Every run leaves an inspectable **receipt** — decision, inputs, rule, outcome — not disposable console telemetry. The essay’s larger claim: the merge is the small public case; the same distrust-and-deny posture applies anywhere model output gates a mutation.

## Why it matters for code review

Continuous verification under agent volume collapses if the review lane fails open exactly when the reviewer is least trustworthy. Treat `MERGE_READY` as the only clear signal and the receipt as the audit artifact; treat contradictory “fix” with empty findings as a blocked night, not a green check. Peak Claude Code sessions can afford soft judgment; always-on factories need an outer gate that defaults to deny when the review itself cannot be evaluated.
