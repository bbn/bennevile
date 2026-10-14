---
title: "Twelve-hour days pressing enter: an engineer's case against output-first agent rollouts"
description: "Sep 22 TechSpot on voxium's viral post: an anonymous engineer says Claude Code now writes the specs, tests, tickets and reports at their company, people work 12 to 13 hours a day approving output, and there's no time to review or understand the code. The complaint is aimed at management measuring PRs and features shipped."
date: 2026-09-22
kind: field-note
source:
  title: "Engineer says Claude Code has made his job \"soul-sucking\" as workers spend 12-hour days pressing enter"
  url: https://www.techspot.com/news/113937-engineer-claude-code-has-made-job-soul-sucking.html
project: steward
---

TechSpot writes up a viral post from an anonymous engineer, voxium (@v0xium on X), who describes a job where Claude Code generates "everything from product specifications and tests to tickets and reports." The line that spread: "Nobody knows anything here. People are working 12 to 13 hours a day just to press enter."

## What the complaint actually is

It isn't that the agent is bad. It's that there's no time left to check it. Engineers are pressured to ship as fast as possible, "leaving them with little time to review Claude's output or understand the code being created," and voxium says they wouldn't mind the setup if people were given more time to check the code. The rest follows from that: "Everyone, literally everyone, from an L1 to an L7 engineer here is doing the same thing. Talk to Claude. There is no sense of victory. Nobody is resolving bugs. In reality, nobody is thinking anymore."

voxium puts the cause with leadership. Management, they told Business Insider, judges success "by sprint cycles, pull requests, and the sheer number of features shipped," even when those features do little for users. Other engineers replied that it matched their own companies.

## Why it matters for code review

This is the failure mode on the other side of always-on agents. When throughput is the metric and the agent never stops, the human becomes the approval step, and the hours stretch to match the agent rather than the review. Nothing in the story suggests the code is being verified anywhere else; the checking simply stopped. That complicates any argument that steady agent throughput compounds on its own. It compounds only if verification lives somewhere other than a tired person pressing enter, and only if the people running the team count understood, checked changes rather than PRs. Compare [the psychological tax of AI in the engineering org](/posts/psychological-costs-ai-adoption-se/) and [a human reviewer who became one more AI pass](/posts/apushkinsky-review-credit-correlated-ai-passes/).
