---
title: "The production harness: walk away to a draft PR or a BLOCKED receipt"
description: "July 2026 white paper from David Reed, PhD: a Claude Code harness where done is an Evidence Ledger, the maker never grades the diff, and autonomy tops out below merge — zero auto-merges by design."
date: 2026-07-16
kind: field-note
source:
  title: "The Production Harness — Engineering AI Agents You Can Walk Away From"
  url: https://drdavidreed.com/harness-engineering/
project: steward
---

**David Reed, PhD** documents a production Claude Code harness as of July 2026 — the layer around the model call (auto-loaded files, hooks, memory, a fixed done schema) so an unattended run leaves a receipt, not an assertion. Four failure modes of unharnessed agents show up once work runs longer than a watched session: assurance inflation (a 77-minute run said “fully verified” when it wasn’t), silent failures, context bloat, and unattended drift. The Evidence Ledger — adopted 2026-07-16 — forces every completion into Implemented / Compiled & ran / Scenarios tested (named, never counts) / Not tested / Domain validity / Production ready, and bans unverified words: verified, proven, fully, complete, independent. Per repo, `make verify` must be proven to fail correctly (seed drift, nonzero exit) before anyone trusts a green.

The unattended loop is six fixed parts: trigger → rules-load → executor → verifier → memory write → stop check. The verifier is a separate fresh-context, zero-tool model that grades the diff; the maker is never the grader. A run ends only two ways — green-and-verified opens a draft PR, anything else emits a BLOCKED receipt — with four exits in priority order: success, retry ceiling, verifier-disagreement ceiling, budget ceiling. A trust ledger earns autonomy per category but tops out below merge: **0 auto-merges by design**. Anything “always do X” is a hook, not prose; a SessionStart preflight runs before the model can skip it; harness-file self-governance is propose-only.

## Why it matters for code review

Overnight harnessed momentum only compounds when each cycle arrives with checkable evidence and a hard stop short of merge. Reed’s draft-PR-or-BLOCKED exit and maker-never-grader split turn continuous verification into machinery you can leave running, while the human still owns the merge. Same control-loop instinct as [Firmo’s hooks-and-proof fleet](/posts/firmo-agents-on-production-hooks-proof-second-model/) and [Lavaee’s “done is a claim”](/posts/lavaee-verification-engineering-done-is-a-claim/).
