---
title: "Swizec Teller: starting got easy, finishing is still hard — linters earn the 16% auto-merge"
description: "Oct 8 from Swizec Teller (Plasmidsaurus, 21 engineers): a few hundred PRs a week and 16% auto-approved, but six draft PRs by 3pm and one small bugfix shipped by evening. 40–50 human reviews a week, half of BugBot’s comments rejected, and every repeated review comment turned into a deterministic linter before auto-merge is allowed."
date: 2026-10-08
kind: field-note
source:
  title: "When code is cheap, judgement becomes the job"
  url: https://swizec.com/blog/when-code-is-cheap-judgement-becomes-the-job
project: steward
---

Swizec Teller writes from a 21-person engineering org at Plasmidsaurus that ships “a few hundred PRs every week,” auto-approves and merges **16% of all pull requests**, and has AI writing 97% of his code. The merge policy is accountability rather than tooling: “we have your phone number,” and that stays true when the code came from an agent.

The useful part is where the post pushes back on the idea that more background agents means more shipped work. His section “Starting got easy but finishing is still hard” describes a familiar day. A Slack ask goes to `@cursor`, a bug report goes to `@cursor`, two big tasks go to Claude during a meeting block, and a 300-word prompt takes 20 minutes to write. By 3pm there are **six draft PRs**. One quick fix merges, one was misunderstood, and the big tasks look “almost salvageable.” By the end of the day, only a small bugfix has shipped. *“When software generation becomes cheap, you can work on anything and everything feels worth the effort. That’s the trap.”* His fix is a small daily budget for ad-hoc work and triage for everything else.

On review, he does **40–50 code reviews a week** for months, calls it exhausting, and calls it the highest-leverage work he has. Agentic review is “okay”: the team rejects about half of BugBot’s comments as irrelevant or not yet important, and building their own reviewer was worse. Bots don’t know which code the company is betting on and which is an internal tool five people use once a month.

The way out is turning review into rules. Each comment he gets tired of repeating becomes a **custom deterministic linter**: describe the pattern, show the agent example PRs, and it writes the AST check. Humans can’t merge until those checks are green, and agents run them before committing. As the rules accumulate, human review trends toward a rubber stamp. *“That’s when you can safely add an auto-approve+merge automation.”*

## Why it matters for code review

This complicates the always-on factory story in a useful way. Background agents made starting free, but finishing still runs on one person’s attention and on how much work they have open, so firing off more work can lower what ships. The 16% that merges without a human is earned by turning review judgment into deterministic checks, not by trusting the agent more. Compare [Vella’s WIP limit for one reviewer and ten agents](/posts/vella-ten-agents-one-reviewer-wip-limit-accepted-change/) and [Donchev’s quality walls](/posts/donchev-quality-walls-review-capacity-is-production-capacity/).
