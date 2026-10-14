---
title: "DeadReckon: two independent keys before an unattended job is 'done'"
description: "May 13 DeadReckon: harness around Claude/Codex/Gemini/Copilot/OpenCode — detachable Job, sandbox checks + fresh semantic judge, HMAC receipt; NEEDS_REVIEW when either key fails."
date: 2026-05-13
kind: field-note
source:
  title: "DeadReckon — run your coding agent unattended, and trust the result"
  url: https://github.com/gregce/deadreckon
project: steward
---

[gregce/deadreckon](https://github.com/gregce/deadreckon) (May 13 2026; install via `deadreckon.sh`; Cargo workspace) is a supervision harness wrapped around the agent CLI you already use — Claude Code, Codex, Gemini, Copilot, OpenCode, Pi, or any Anthropic/OpenAI-compatible endpoint. The product claim is not a smarter model. It is that an unattended Job leaves an **auditable artifact** you can promote, not a chat transcript you have to re-litigate at 8am. `deadreckon start "…"` freezes the goal, contract, policy, source digest, and launch plan, then detaches a supervised process; `attach` watches without owning the run; `finish` applies or exports only after verification.

The load-bearing rule is **two independent keys to done**. A guided Job completes only when deterministic checks pass **inside a real sandbox** *and* a fresh **read-only semantic judge** says the result meets the approved goal. Either key can refuse; the judge cannot overrule a failed check. If the sandbox cannot resolve or the judge is unavailable/uncertain, a strict Job becomes `NEEDS_REVIEW` rather than a silent green. Surviving the launching terminal is first-class (optional per-user supervisor service for restart-at-login). Verified Jobs emit an **HMAC-SHA-256 receipt** binding authority, deterministic marker, semantic judgment, source/result digests, revisions, and confinement facts — promote the receipt, not the agent's self-report.

## Why it matters for code review

Always-on harnessed momentum compounds past peak-session heroics only when "done" is a **receipt**, not a mood. DeadReckon relocates morning review to the two-key gate and the HMAC binding: merge what both keys signed, reopen `NEEDS_REVIEW`, and refuse to treat a long Claude burst as finished because the session felt productive. FOMO that nothing moved overnight is cheaper than promoting work neither the sandbox nor an independent judge would stamp.
