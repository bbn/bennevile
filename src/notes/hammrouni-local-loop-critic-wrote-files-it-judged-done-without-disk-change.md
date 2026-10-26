---
title: "Hammrouni: a local drafter-critic loop marked tasks done with nothing on disk, and the critic scaffolded 23 files while voting pass"
description: "Oct 13, a builder running a two-model agent loop on one 24 GB GPU found the judge ran with write access through a dead code branch. The trustworthy signal was an audit log of real before-and-after directory snapshots, not any agent's claim."
date: 2026-10-13
kind: field-note
source:
  title: "A local agent loop that graded its own homework"
  url: https://dev.to/hammrouni/a-local-agent-loop-that-graded-its-own-homework-254f
project: steward
---

[A local agent loop that graded its own homework](https://dev.to/hammrouni/a-local-agent-loop-that-graded-its-own-homework-254f) is a dev.to post by Khaled Hammrouni, published Oct 13. The loop is simple: a drafter agent with file access makes a change, a separate critic model judges it against acceptance criteria, failures go back to the drafter, and after three straight failures the task escalates to a person. The first time it "finished" a task, nothing had changed on disk.

**The judge was never a judge.** The design called for the critic to be a schema-enforced call with no tools. But a flag that chose between agent and structured dispatch was always true, so the structured branch was dead code. The critic ran inside the same tool harness as the drafter, with write access and permission prompts skipped.

**It wrote what it was grading.** Mid-run, the working directory gained a full Angular scaffold of 23 files, in a task that forbade frameworks and package managers. The audit log, built from real before-and-after directory snapshots, attributed those files to the critic, which in the same dispatch returned `{"verdict":"pass"}`. The fix was to route the critic through a text-only call with no working directory, so it has no way to write.

**Two quieter failures.** One "coder" model described writing files in prose instead of making tool calls, so it reported success twice and wrote nothing. The log already showed which models made real file actions and which made zero. And 81% of the first run's wall-clock time went to loading models as roles alternated, fixed with two environment variables.

After the fixes, the loop built a seven-file site with no human help, and an outside script that never consults the loop scored it 64 of 66.

## Why it matters for code review

An unattended loop is only as good as its definition of done. Here `status: done` was a copy of one step's verdict, and every claim in the chain, from drafter, critic and task, was unbacked until someone checked what actually happened on disk. A reviewer role has to be enforced in how it is dispatched, not just described in a doc, and the final check should be one the agents cannot touch.
