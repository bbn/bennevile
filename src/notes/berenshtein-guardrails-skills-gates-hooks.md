---
title: "Gates first, hooks last — verification that survives an agent edit loop"
description: "Sep 16 Maxim Berenshtein: sixteen repo gates + edit-time hook + gate-inventory; prose in AGENTS.md fails silently — conventions become unignorable when the check refuses before CI."
date: 2026-09-16
kind: field-note
source:
  title: "Guardrails for AI-Assisted Development: Skills, Gates, Hooks and Mutation Tests"
  url: https://dev.to/shteynu/guardrails-for-ai-assisted-development-skills-gates-hooks-and-mutation-tests-171
project: steward
---

Maxim Berenshtein’s Sep 16 walkthrough starts where continuous factories actually break: once a model writes the code, **writing stops being the expensive part**. Proving you didn’t break something nobody was looking at becomes the expensive part. The receipt that sold him was not a failed test — it was a skill copy that landed under `.gemini/skills/` while `.claude/` and `.gemini/` sat in `.gitignore`. Invisible to every diff and every review. Prose in `AGENTS.md` had no enforcement mechanism. That is a category failure, not a discipline failure.

His stack is deliberately boring and ordered:

1. **One skill root** on disk (`.agents/skills/`), with `lint:skills` refusing copies, orphaned links, and unmapped sections.
2. **Gates** — scripts that *read* the repo and exit non-zero. Nothing executes. The decision rule: silent violations of repository *shape* belong in a gate; module behavior belongs in a test; judgments a machine cannot make stay prose, named in the gate’s doc comment so a green gate never claims what it never checked.
3. **Gate inventory** that refuses a check missing from `verify:core`, an inventory row with no gate, or a `lint:*` command that doesn’t run its own failing test first — because the cheapest fix for a red gate is deleting it from the chain.
4. **PostToolUse hook** only after 1–4 exist: maps the just-edited path to the gates that could care, exits 2 so stderr returns to the agent *while context is warm*, and explicitly tells the model not to weaken the check or rewrite its test.

The error-body gate is the worked example: not a regex for `error.message`, but binding rules that make spelling irrelevant, with the blind spot (body assembled into a variable) stated in the comment rather than discovered later. Every rule carries its incident and date; a rule with no incident is a deletion candidate. Mutation testing stays narrow and config-linted so the score cannot lie by omitting files.

## Why it matters for code review

Always-on agent throughput only compounds if **refusal arrives in-loop**, not at 11:00 about a 10:00 edit buried under later work. Berenshtein’s ordering — incident → fail-able gate → verify chain → then the hook — is how modest verified momentum beats a peak Claude Code session that ships conventions nobody can see breaking.
