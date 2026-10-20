---
title: "Gojko Adzic's lights-on software factory: review moves from reading diffs to certifying evidence"
description: "Oct 20, Gojko Adzic. He open-sourced the Claude Code setup behind Votito as a lights-on factory boilerplate: a container, a Bash command regulator, lint rules that turn repeated review comments into hooks, and a plan-to-workflow orchestrator with gates and a final agent that tries to refute each step. His GOTO Copenhagen slides call human review the new bottleneck and claim 80% fewer tokens and 6 to 10 times faster runs once orchestration moves out of the model."
date: 2026-10-20
kind: field-note
source:
  title: "Lights-on software factory boilerplate for Claude Code"
  url: https://github.com/gojko/lights-on-software-factory
project: steward
---

[Gojko Adzic](https://github.com/gojko/lights-on-software-factory) published the Claude Code setup he built for [Votito](https://www.votito.com) as a boilerplate for what he calls a lights-on software factory. The companion [GOTO Copenhagen slides](https://gojko.net/slides/202609-gotocph.pdf) open with "human review is the new bottleneck" and set it against the dark factory. In his version the platform orchestrates instead of agents orchestrating agents, guardrails are deterministic instead of "markdown prayers," and humans supervise throughout instead of judging at the end.

The repo has four working parts:

- **A container.** Claude Code runs in a sandbox that shares only the workspace directory with the host ([CONTAINER.md](https://github.com/gojko/lights-on-software-factory/blob/main/CONTAINER.md)).
- **A Bash command regulator.** A `PreToolUse` hook splits every command into segments and allows, asks or denies each one. A denial comes with a reason that tells the agent what to run instead ([REGULATOR.md](https://github.com/gojko/lights-on-software-factory/blob/main/REGULATOR.md)). Each role gets its own limits. Workers may only run tests and lint on the files they own, gates may only run `workflow-` make goals, and the check agent only reads. The slides justify this with Anthropic's finding that users [approved roughly 93% of permission prompts](https://www.anthropic.com/engineering/how-we-contain-claude) and paid less attention the more they saw.
- **Lint rules as review comments.** A hook runs eslint on every file Claude edits and blocks until the errors are fixed. The README says the point is "to help reduce human involvement in code review," and tells you to ask Claude for a new rule each time you catch yourself giving the same design feedback twice ([LINTER-HOOK.md](https://github.com/gojko/lights-on-software-factory/blob/main/LINTER-HOOK.md)).
- **A plan-to-workflow orchestrator.** A plan written with the agent becomes a generated workflow script. Workers run each group of steps in parallel, then a gate agent runs a make goal over the merged tree before the next group starts. When a gate is red, the owning steps go back for at most [three rework rounds](https://github.com/gojko/lights-on-software-factory/blob/main/ORCHESTRATOR.md) before the run halts. A final check agent tries to refute what each step claimed. A step only counts as complete when its worker said done, its gate was green and no later check overturned it. Progress goes to an append-only file, so a stopped run resumes with only the unfinished steps ([ORCHESTRATOR.md](https://github.com/gojko/lights-on-software-factory/blob/main/ORCHESTRATOR.md)).

The [README](https://github.com/gojko/lights-on-software-factory) claims the orchestrator cut token spend by about 80% compared with running Claude workflows bare. The [slides](https://gojko.net/slides/202609-gotocph.pdf) add "6-10 times faster," "no testing gaps" and "no approval requests" for moving the workflow from inference to deterministic code. These are his own numbers, without a published benchmark.

## Why it matters for code review

Adzic lays out a path from dictating to agents up to supervising them, and code review changes at each stage. It starts as detailed review, becomes high-level review once agents run whole epics, and ends with "agents provide comprehensive evidence, humans certify evidence." The way he gets there is to move recurring review feedback into deterministic checks, so that what reaches a person is the decision record and the evidence rather than the diff. That is a different bet from the dark factory: keep work moving with a person on the line, and make their attention cheaper instead of removing it. Read with [Pento's case for keeping the factory lit](/posts/pento-agent-harnesses-to-software-factories-lights-on/), [Falco's deterministic evidence gates](/posts/falco-harnesswright-deterministic-evidence-gates/), and [Bruniaux's bounded review loop](/posts/bruniaux-bounded-review-loop-controller-owns-the-stop/).
