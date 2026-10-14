---
title: "Houck: the invisible output of review is the org"
description: "DX’s Brian Houck on Meta’s review crush under agents — RADAR’s risk-stratified automation works, but automating diffs without protecting knowledge transfer and intent debt just hollows the team."
date: 2026-08-05
kind: field-note
source:
  title: "What are code reviews even for?"
  url: https://getdx.com/blog/what-are-code-reviews-even-for/
project: steward
---
Brian Houck (DX / Microsoft Distinguished Scientist) starts from the queue math everyone feels. At Meta, significant lines of code per human-landed diff up 106% in a year, diffs per developer per month up 51%, more than 80% of that growth from agentic AI — while 24-hour review coverage falls and some groups stare at thousands of pending reviews. DX’s own data: median PR size up 64%. Developers already want review to be ~7% of their time. Asking them to review *more* AI output is not a capacity plan.

The useful move is the question before the tool pitch: what was review solving before AI? If it were only defect finding, full automation looks inevitable. Bacchelli & Bird already showed defect-related comments were only ~14% of review comments; most of the value was alternative solutions, knowledge transfer, and awareness of teammates’ work. Houck’s line: “The visible output of code review is better code. The invisible output is a better engineering organization.”

He does not reject automation. Meta’s RADAR is the receipt he leans on — risk-aware auto-review for a selected low-to-medium slice, humans on the rest: 535k+ diffs reviewed, 331k+ landed, revert rate ~⅓ of non-RADAR, incident rate ~1/50th, 3.3× faster median close. The design claim is eligibility and risk stratification, not “the model says LGTM.” Developers in DX’s research want AI to catch security/compliance, flag high-risk changes, and clear routine — and explicitly do *not* want AI that auto-merges or takes final accountability.

The warning is slower than a bad merge. Automate the diff and you may have reviewed that diff; you have not transferred knowledge, built shared ownership, or given a junior a window into how a senior reasons. Storey’s framing shows up as cognitive and intent debt — the gap between what the system does and what the org collectively understands about *why*. It arrives as a series of reasonable skips: this one’s low risk, this approval can be automated. Measure review health beyond throughput, or you will only notice when an outage needs the conversation that never happened.

## Why it matters for code review

Software factories that treat review as a defect firewall will automate the ceremony and lose the org. The control plane Houck is arguing for is the same one good agentic SDLCs need: risk tiers, conservative eligibility, auditability, humans still named on acceptance — plus deliberate measurement of whether juniors still learn and whether architectural understanding still spreads. Speed the routine; protect the conversations that make the team able to own the system the agents are flooding.
