---
title: "Hayden Bleasel: code review was always two jobs, and agents now do the bug-finding one better"
description: "An OpenAI engineer splits review into objective checks (does it work) and subjective ones (is it the right code), argues agents should own the first, and says consequences, not the split, decide how much to trust them alone."
date: 2026-10-24
kind: field-note
source:
  title: "Two kinds of code review"
  url: https://haydenbleasel.com/writing/two-kinds-of-code-review
project: steward
---

Hayden Bleasel, who works at OpenAI, [splits code review into two jobs](https://haydenbleasel.com/writing/two-kinds-of-code-review). Objective review asks whether the code works: bugs, security holes, edge cases, an adversarial reader trying to break it. Subjective review asks whether it's the right code, and he treats that one as a skim of scope and direction rather than a line-by-line read.

His argument leans on history. Fagan's 1976 inspections were meant to find errors and nothing else, yet later studies he cites found most review comments were about structure and readability, and Microsoft researchers found defects were only 14% of review comments. Given a good prompt, he says, agents are now better than people at the objective half: they read every line, don't tire, and can run the code. He points to Codex reviewing every internal PR at OpenAI, with authors changing their code after about half its comments, and to OpenAI's weekly PR volume more than doubling since Q4.

For the human half he names two checks. Scope is whether the agent touched the right files; he cites a study of 33K agent PRs in which unmerged ones were larger and touched more files. Direction is whether the change should exist at all, such as hand-rolling something a package already does, and he notes that even that call can go either way.

Two caveats keep the piece from being a blanket handoff. Agent review is non-deterministic: run it twice and you get different findings, which is why the Claude Code team capped review at three rounds after one PR went through more than 50 overnight. And **consequences decide trust, not the split**. His open-source projects are fully agent-driven with sweeping reviews because a bad release can be patched in seconds, while work where a mistake could mean API downtime gets more human scrutiny. The line also moves. Once a taste call is written down as a lint rule or in AGENTS.md, it becomes objective and an agent can check it, and he cites OpenAI evals in which review with written rules caught 98% of targeted findings versus 58% without.

## Why it matters for code review

As agent PR volume climbs, this is a practical division of labour: let agents run the exhaustive bug hunt continuously, keep people on a short scope and direction pass, and turn each repeated judgment into a written rule. How much to trust the agent alone still depends on what a mistake would cost.
