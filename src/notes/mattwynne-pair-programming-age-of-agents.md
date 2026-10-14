---
title: "Pairing with an LLM is delegation — shared judgment still needs humans"
description: "Mar 4 Wynne: agentic tools make soloing easier, but ‘pairing with Claude’ is a siren; as delivery speeds up, humans still co-create architecture, debt, and the constraints that check the robots."
date: 2026-03-04
kind: field-note
source:
  title: "Pair Programming in the Age of Agents"
  url: https://mattwynne.net/pair-programming-in-the-age-of-agents
project: steward
---

Matt Wynne’s Mar 4 essay is a useful brake on overnight-factory FOMO. After six months of serious Claude Code use he solos more — exhilarating and slightly troubling. He walks classic pairing benefits against LLM stand-ins: turn-taking at the keyboard (robots write decent code when patterns exist; humans still steer hard refactor and architecture; spotting subtle errors in large machine diffs can feel like Deming’s burn-and-scrape), thinking out loud (LLMs do fine as rubber ducks), bouncing ideas (improv co-creation still feels hollow — creative energy stays human), continuous review (one agent reviewing another helps only with explicit conventions/ADRs), hidden knowledge (illegible debt still lives in heads until written down), noticing breaks and caring how the weekend was (robots are terrible; friendship-driven development has no substitute).

His conclusion is precise: what people call “pairing with an LLM” is more the **illusion of pairing** — a siren reflecting your thoughts off a vector space — than collaboration. That does not make agents useless. It changes the scale of what humans must still share in real time: architectural trade-offs, product priorities, and **the constraints and gates put around the models**, not method names. As delivery speed rises, cognitive load from keeping up rises with it — another reason the conversation cannot die into Jira or markdown alone. “Maybe the more we offload to machines, the more we'll need each other.”

## Why it matters for code review

Harnessed 24/7 throughput beats peak-session heroics only for work you can specify and verify. Wynne productively complicates the continuous-factory story: factories still need human pairs (or ensembles) at the layer that defines backpressure — ADRs, mutation gates, review conventions — or overnight agents compound diffs nobody on the team jointly trusts. FOMO that nothing ran while you slept is the wrong fear if the scarce morning resource was shared judgment about what the harness is allowed to count as done.
