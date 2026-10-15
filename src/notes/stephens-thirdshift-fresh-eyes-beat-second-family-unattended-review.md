---
title: "Who reviews the reviewer at 3 a.m.? A fresh session beat a second model family"
description: "Jacob Stephens replayed 183 review sessions from thirdshift, an unattended factory whose PRs merge themselves. A fresh same-model session matched or beat a second family at every checkpoint; the clear win was a second look after a whole feature — and making authors run a test for every finding."
date: 2026-10-11
kind: field-note
source:
  title: "Fresh Eyes Beat a Second Family"
  url: https://stephens.page/blog/fresh-eyes-beat-a-second-family/
project: steward
---

**Jacob Stephens** runs **thirdshift**, a factory that turns GitHub issues into pull requests while he sleeps. Since about **September 27**, no human has read a factory PR before it merged; the only reviewer is the authoring session plus two same-model reviewer sub-agents. The ledger made him uneasy: **1,152 findings declined across 199 merged PRs**, architecture reviews rating their own top plan "Strong" **98%** of the time, and **16 bugs** reaching `main` — six of them timing bugs.

The obvious fix was a reviewer from a different model family. Rather than wait for new bugs, he **replayed 183 past review sessions** in sandboxed repos truncated at the commit under review, with bars fixed in advance and a **fresh same-model session** as a control arm.

**Inside each run, a second family added nothing.** Codex caught 1 of the 6 escaped timing bugs, and fresh Claude caught that one too. Reversed, Claude caught 0 of Codex's 3 escapes. **After a whole feature, any second look paid:** across 30 spec branches, Codex found real missed bugs in **16** features (2 of 25 findings wrong) and fresh Claude in **19** (9 of 40 wrong), against a bar of 6 — and they mostly found *different* bugs. Moving the spec review itself to the other family found slightly less.

The sharpest line is the last column: the factory's own reviews had already raised **2 of the 6** timing bugs, and the authoring agent declined both as someone else's decision. Findings now ship with a test the author must run; a failing test obliges a fix.

## Why it matters for code review

An always-on factory's review budget is best spent where integration bugs live — on the assembled feature, not on every run — and a fresh context does most of what a second vendor promises. But the bigger leak in unattended merging is the decline path: if nobody reads what the agent chose not to fix, continuous verification quietly becomes continuous dismissal. Read beside [Song on cross-model review complementarity](/posts/song-cross-model-review-second-model-complementarity/) and [Xie on choosing a verification environment over an orchestrator](/posts/xie-abandoned-multi-agent-orchestrator-verification-environment/).
