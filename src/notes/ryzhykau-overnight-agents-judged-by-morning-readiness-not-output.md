---
title: "Overnight agents should be judged by how ready the team is in the morning, not by how much they produced"
description: "Oct 18, engineering leader Fiodar Ryzhykau sketches a team whose agents keep investigating, testing and preparing work overnight and over weekends. His test is blunt: if people come back to 40 new pull requests, the bottleneck only moved. He asks for a review-capacity budget, independent verification, and no expectation that humans stay on call for the agents."
date: 2026-10-18
kind: field-note
source:
  title: "The Team That Never Stops Improving"
  url: https://fiodar.ai/blog/the-team-that-never-stops-improving/
project: steward
---

[Fiodar Ryzhykau](https://fiodar.ai/blog/the-team-that-never-stops-improving/) writes as an engineering manager about what a team looks like when agents keep working after everyone leaves. He is careful about the framing: "Not an engineering team that works 24 hours a day. An engineering team whose ability to make progress and improve itself no longer depends entirely on humans being present."

He splits the week into two kinds of time. During the day, people clarify goals, make decisions and choose worthwhile work. At night and over weekends, authorized agents investigate, run experiments, test candidate fixes and prepare the next set of decisions. The value is lower latency, because a lot of engineering work sits waiting for someone's attention: a test fails late in the evening, or a dependency unblocks after its owner has gone home.

Then he names the trap. "If a team returns each morning to 40 new pull requests requiring careful review, we may have moved the bottleneck rather than improved performance." Round-the-clock execution counts only when it improves end-to-end progress, and "the objective is not maximum overnight output. It is maximum useful readiness for the next human working session." He contrasts two mornings. In one, engineers arrive to twelve pull requests, eight new tickets and a long report of everything the agents tried. In the other, they get a short briefing: one issue already fixed through an authorized, verified change, two candidate fixes with evidence favouring one, a ranked production risk, three tasks deliberately deferred, and one architectural decision for the team.

The guardrails he asks for are concrete:

- **Verification.** "An agent saying it completed a task is not verification." Results are checked against observable criteria, preferably independently, and the morning briefing separates verified results from claims.
- **A review-capacity budget.** A system that creates more review work than people can responsibly absorb "is not necessarily improving throughput."
- **Enforceable permissions.** A prompt saying what an agent shouldn't do is not a security boundary. On call, agents correlate alerts and gather evidence, and take only narrow, reversible action when the conditions are verifiably met.
- **A slow start.** First a trusted team profile, then a daily observer that cannot change code or production, and only later investigators and cooperating agents, each judged on whether it actually helped.

## Why it matters for code review

This is the management version of the case for steady, harnessed work over bursts. The unit Ryzhykau optimizes is not pull requests per night but how much uncertainty is gone by morning, which makes review capacity the binding constraint rather than an afterthought. He also speaks to the anxiety around idle agents. He wants continuous autonomous progress to free people's time, not to become "an expectation that humans should also be continuously available," and he says that if overnight work brings a team no real benefit, "there is no reason to force it." Read with [Chi Cong's hard cap on open agent PRs per reviewer](/posts/chicong-backpressure-cap-agent-prs-blocked-agents-shrink-the-queue/), [the overnight shift-change packet](/posts/dvx-overnight-build-shift-change-morning-packet/), and [Sieg on idle-session anxiety weakening review](/posts/sieg-agentic-coding-fomo-idle-sessions-weaker-review/).
