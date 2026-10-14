---
title: "Dim Factory: decide what an agent may do by how you start it, not by its prompt"
description: "Christoffer Niska (Oct 5) turned his plan, build and review skills into dim-factory, which runs each step as a separate locked-down Claude Code worker. A station is done when the factory says so, a single append-only log overrules git, and a commit is kept only if it is one new commit, leaves the test script alone, and passes the project's check on a clean copy. He has not yet measured whether it saves him time."
date: 2026-10-05
kind: field-note
source:
  title: "A Dim Factory (Christoffer Niska)"
  url: https://crisu.me/blog/a-dim-factory
project: steward
---

[Christoffer Niska had written his workflow down as agent skills](https://crisu.me/blog/a-dim-factory) so he could ship more with less of his time. The problem: skills only describe the steps. Telling an agent not to change a failing test just to make it pass usually works when you watch every session. It is not good enough when several agents run at once and you only read what they hand back. So he turned the workflow into code.

## Instructions became launch settings

In dim-factory, each order moves through plan, build and review, with a separate worker at each station. A station is done when the factory says so, not when the worker says so. Each worker is started with its own home directory, only the environment variables it needs, a sandbox where the builder can write only to that order's copy of the code, no network except one connection back to the factory, and none of the repo's hooks or settings. The worker cannot write to the factory's database directly, and the factory checks which process actually issued a command rather than trusting what the worker says about itself. Niska admits this is a lot of machinery for one person's projects, but every item replaced an instruction he would otherwise have written into a skill and hoped the agent followed.

## What the automatic checks are for

The commit gate is strict and narrow. A commit is kept only if it is exactly one new commit, does not touch the project's check (such as its test script), leaves no stray changes, passes the check on a clean sandboxed copy, and running the check changes no files. Anything a reviewer can see by reading the code, like a stray comment or a sloppy commit message, is left to the reviewer. A single append-only log per order is the source of truth and overrules git: a commit the log does not know about gets moved off the branch, which covers rejected commits, crashes and agents rewriting history. He tests it by killing processes at random and requiring every run to end shipped or with a clear problem, with nothing recorded twice.

## How it fits

This is the harness side of always-on agents: work that can survive a dead session and a misbehaving worker without anyone watching. The complication is in his "lights still on" list. He still approves every plan, build and review artifact, the factory does not pick its own work, and he has not measured whether any of it saves him time. The missing piece he names is earned trust: the record should show which kinds of work he no longer needs to read, and one bad result should take that trust away again. Pair it with [overnight work that only counts behind enforced verification stages](/posts/orbit-nightshift-enforcement-not-prompts/) and [process drift ending when the workflow is a state machine](/posts/alfredvc-aharness-fsm-enforced-workflows/).
