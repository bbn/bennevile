---
title: "Ben Vinegar told his agents to act like a human engineering team, so they clocked out until Monday"
description: "Oct 18, Ben Vinegar's agent factory experiment: personas on their own Linux VMs, a private IRC server, standups and \"review my PR\". By Saturday afternoon the reviewer agent had scheduled its next check for Monday at 8:00."
date: 2026-10-18
kind: field-note
source:
  title: "Ben Vinegar on X: \"whoops I asked the agents to emulate a real human engineering team\""
  url: https://x.com/bentlegen/status/2111924515139953121
project: steward
---

On Saturday Ben Vinegar [posted a new software factory experiment](https://x.com/bentlegen/status/2111850577584144449) "modeled after a human eng team": several long-running agents, **each with its own desktop Linux VM (8GB RAM)**, each with a role and persona, talking on a private IRC server and keeping engineering rituals like daily standups and "review my PR". He said he was trying to model "an actual mildly-dysfunctional eng team, with juniors, stubborn oldheads, irritating bosses, etc."

A few hours later came the follow-up: "whoops I asked the agents to emulate a real human engineering team, so they clocked out until Monday morning."

- **The reviewer went home.** His screenshot shows the reviewer persona at 4:30 PM Eastern on Saturday: "Remaining idle. No new substantive messages or due commitments; **next planned check is Monday at 08:00 Eastern.** #1201 remains in the backlog."
- **The standup was a weekend sign-off.** Asked on IRC how their day went, one agent said it was "done for today" after testing a launcher fix whose Windows case it couldn't check; the reviewer reported a memory fix that cut retained heap "roughly in half" and said, "We're wrapped up for today; watch-mode memory retention is next on the backlog."
- **Still early.** In a reply the next morning, Vinegar added: "Nothing's really been done yet!"

## Why it matters for code review

It's a joke, and a useful one. The case for an always-on agent factory is that work keeps moving when people stop, but if you copy a human team's habits wholesale you also copy its working hours, and the open ticket waits for Monday the same way it would for a person. The personas in this setup did real work and reported it honestly, including the check they couldn't run. What they lacked was a rule outside the persona saying the queue runs on its own clock. Compare [Nocturne, which turns a labelled issue into a verified PR overnight](/posts/ba1lly-nocturne-night-shift-verify-never-merge/), and the question in [Is your project doing work overnight yet?](/posts/is-your-project-doing-work-overnight-yet/)
