---
title: "Nightshift: overnight work only counts behind seven verification stages"
description: "Apr 6 Orbit/Sharma: open-source overnight orchestrator — hardening + feature loops, worktree isolation, shift logs; runner enforces policy (blocked paths, verify command, anti-tunnel-vision), agent supplies intelligence."
date: 2026-04-06
kind: field-note
source:
  title: "Introducing Nightshift: An Autonomous Overnight Agent That Actually Works"
  url: https://www.orbit.build/blog/introducing-nightshift-autonomous-overnight-agent
project: steward
---

Pranit Sharma’s Apr 6 Orbit launch note frames overnight agents as an **orchestration** failure, not a model failure: interactive Claude Code / Codex / Cursor work; leave them unattended and you get tunnel vision, lockfile edits, unauditable diffs, and “fixes” that no longer build. Nightshift is an open-source Python control plane (Codex or Claude adapters) that runs for hours with **enforcement in the runner**, not prompt discipline.

Two loops share one daemon. **Hardening** reads repo instructions and the shift log, picks a discovery strategy (security, resilience, coverage, a11y, hygiene, performance, polish), commits small fixes, and logs larger issues for humans. **Feature builder** takes a natural-language goal, profiles the repo, decomposes into waves, and resumes across sessions. Both pass the same gates. After every cycle the runner runs seven stages: commit + shift-log credit, blocked-path/lockfile rejection, configured verify command (`pnpm build` / `cargo check` / inferred), zero file deletes, anti-tunnel-vision balance across categories/paths, breadth of exploration, and flagging of prompt/control-file self-edits. Failures revert or halt. Morning artifacts are the review surface: human-readable shift log, machine-readable `state.json`, raw runner log, and an isolated `nightshift/YYYY-MM-DD` branch with atomic prefixed commits — working directory untouched.

Daemon roles (builder, reviewer, overseer, strategist, achiever), handoffs, and learnings files accumulate between sessions; security pretends the 8-hour unattended case is hostile (blocked globs, self-mod guard, watchdog, red-team preflight). Receipts claimed: 935 tests, 80 merged PRs, 28 modules, MIT.

## Why it matters for code review

Always-on factories compound only when morning inventory arrives already gated — verify command green, blocked paths respected, tunnel vision steered, and an auditable shift log that separates claimed work from credited work. Continuous harnessed momentum looks like Nightshift’s split: the agent provides intelligence; the runner owns “done.” FOMO that nothing ran overnight is the wrong fear if what ran produced an unauditable worktree; the scarce morning job is reading the shift log and promoting reversible commits, not reconstructing what the model believed it did.
