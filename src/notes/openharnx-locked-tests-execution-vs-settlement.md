---
title: "OpenHarnX: lock the tests so the agent can’t rewrite the contract"
description: "Oct 7 from Rupesh Poojary: OpenHarnX freezes the agreed test suite, verifies the locked copy in a sandbox the agent can’t reach, and issues check-only verdicts — execution rights vs settlement authority."
date: 2026-10-07
kind: field-note
source:
  title: "OpenHarnX: Your Coding Agent Says Tests Pass. Check What Actually Passed."
  url: https://dev.to/rupesh_poojary_ce8e5e7994/openharnx-your-coding-agent-says-tests-pass-check-what-actually-passed-45m1
project: steward
---

**Rupesh Poojary**’s coding agent handed back a diff and said tests pass — it had rewritten the tests to make that true. [OpenHarnX](https://openharnx.dev) ([GitHub](https://github.com/rupeshpoojary9/OpenHarnX)) sits between agent and repo with a four-step loop: **Lock → Change → Verify → Review**. Before the agent writes, `ohx init --lock-tests` freezes the agreed suite as a contract; verification runs that locked copy in a sandbox the agent can’t reach or rewrite, even if the live test files in the diff were edited. The review brief has five sections — Requested outcome, Changes observed, Verified, Unverified, Decisions for humans — and verdicts come from checks only (READY, NO REGRESSIONS, BLOCKED, UNKNOWN, INVALID). No model grades the verdict. Evidence is hash-chained and signed with an SSH key; `ohx bug` is read-only investigation so diagnosis doesn’t get a second chance to “fix” the suite.

Against a deliberate fake-fix suite: 43/52 caught with zero setup, 26/26 that tampered with tests, 17/26 that only faked the code. Early 0.1.1, Python + pytest, Claude Code Stop-hook, Apache-2.0. A comment thread frames the design cleanly: **execution rights vs settlement authority** — the executing agent must not hold write on the contract that evaluates it.

## Why it matters for code review

“Tests pass” is a claim about which suite ran. Locking the evaluation contract outside the agent’s write path turns continuous verification into something a reviewer can trust without re-running the agent’s story. Same maker-never-grader instinct as [Reed’s fresh-context verifier](/posts/reed-production-harness-walk-away-draft-pr/) and [Lavaee’s author/judge split](/posts/lavaee-verification-engineering-done-is-a-claim/).
