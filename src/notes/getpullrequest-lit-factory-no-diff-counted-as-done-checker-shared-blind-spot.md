---
title: "GetPullRequest: its agent factory marked a task done with no diff, and every automated signal agreed"
description: "A team that has built its product with coding agents since May keeps people at three stations: writing the task, answering the agent, and reading the diff before merge. Its commit history shows why, starting with a check that shared the worker's blind spot."
date: 2026-10-04
kind: field-note
source:
  title: "AI can run the software factory. It can't turn the lights off yet"
  url: https://dev.to/getpullrequest-hq/ai-can-run-the-software-factory-it-cant-turn-the-lights-off-yet-1cjj
project: steward
---

The GetPullRequest team has [built its product with coding agents every day since May](https://dev.to/getpullrequest-hq/ai-can-run-the-software-factory-it-cant-turn-the-lights-off-yet-1cjj). Tickets arrive from labeled GitHub issues, Jira, or a Slack mention; a daemon makes a git worktree, starts an agent, runs plan, implement and verify, and opens a PR. **370 commits in the repo carry the factory's co-author tag.** It runs continuously, but it has never run without people, and the post explains why from the team's own commit history.

The sharpest example is a success that wasn't. When an agent finished without changing any code, GitHub refused to open a PR because there was nothing to compare. The team had decided that wasn't an error, so the factory skipped the PR step and moved the task to Done. The board showed a green task, a "PR opened" event, and no PR. **The agent exited cleanly, wrote a confident summary, and no test failed because there was nothing new to test.** In the team's words, the checker had the same blind spot as the worker. In August they flipped the rule: no commits now means the task failed.

The other receipts point the same way. A test failing for a while had been written off as environment noise; a person reading the log found a broken log line hiding a race that spawned two agents for one session and left a roughly 300 MB process behind. A pipeline that only wants CI green would have rerun it as flaky. When Atlassian removed a Jira search endpoint in September, the factory fixed it in one PR with tests passing first try, but only after someone noticed the 410 errors and wrote the ticket. A simulated Jira built in August would have kept returning results.

So the team keeps people at three stations: writing the task (a vague ticket gets a confident, wrong PR), answering the agent when it stops to ask, and reading the diff before merge. Those stations are small. One fix took four agent rounds and another took five, and someone looked at every round. The team sells a phone app for doing exactly that, and says so.

## Why it matters for code review

An always-on factory keeps moving only if "done" is checked by something that can see what the worker can't. Here the gap was not model quality but a status rule that read a clean exit as success. The cheap fix was a definition of done tied to evidence, at least one commit, rather than to the agent's report. The expensive fix is still a person reading the diff.
