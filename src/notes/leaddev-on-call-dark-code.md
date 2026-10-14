---
title: "On call for dark code: runtime is the only truth left"
description: "Sep 9 LeadDev field note: authorship, memory, and comprehension fail under agent volume; gate on detection and blast-radius containment, not per-line human recall."
date: 2026-09-09
kind: field-note
source:
  title: "We’re on call for code nobody wrote"
  url: https://leaddev.com/software-quality/were-on-call-for-code-nobody-wrote
project: steward
---

Thomas Johnson’s LeadDev note names the failure mode factories keep papering over with “mandatory human review of every AI change.” Dark code: generated, CI-green, shipped, and never held in a human head. GitHub’s projected jump from ~1B commits in 2025 to ~14B in 2026 is the arithmetic; reading capacity did not scale with it. LeadDev’s Engineering Leadership Report 2026 puts the human cost next to the volume: majority of 600 surveyed leaders emotionally drained at least weekly; CTOs from 24% to 54% year over year.

The ownership chain that used to back review is gone. No author to page, no reviewer who saw the tradeoff, no standup residue. Incident response that depended on someone remembering why a line exists becomes archaeology. Johnson’s security half is sharper still: Zero Day Clock median disclosure-to-exploit from 771 days (2018) to four hours (2024), with 2025 mostly pre-disclosure weaponization — and AI collapsing patch-diff-to-exploit so shipping a fix accelerates attacker coverage of the unpatched remainder.

The prescription is an inversion, not a pep talk. Code used to be truth and telemetry the hint; now observable behavior is the only source left standing. Comprehension gates, explain-back rituals, and mandatory line-reading are attempts to restore a world the volume already erased. Prefer detection that shrinks dwell time, architectural containment that limits blast radius before the pager, and hiring for fluency in what the system is doing now over fluency in what someone once meant.

## Why it matters for code review

If your merge gate still assumes a human will “understand the change,” you are budgeting fiction. Review under agent load is triage of risk and evidence, not restoration of authorship. Design the factory so unread code cannot take down everything around it — and so on-call starts from runtime truth, not from hoping someone remembers the prompt.
