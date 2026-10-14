---
title: "Staff the line: spec author, verifier, fleet ops, line owner"
description: "Augment’s org-design guide: agents absorb implementation, so scarce human work is spec, verification, halt authority, and line ownership — with receipts on review share collapsing under PR flood."
date: 2026-08-31
kind: field-note
source:
  title: "Software Factory Org Design: Who Staffs the Line?"
  url: https://www.augmentcode.com/guides/software-factory-org-design
project: steward
---
The useful move in Augment’s org-design guide is composition, not headcount. Agents take implementation; the scarce human jobs become four named accountabilities on a delivery line: *spec author* (outcome, bounds, acceptance as a versioned artifact), *verifier* (scenarios, scored validation, which findings gate merge), *fleet operator* (environments, experts, triggers — and the person who can stop every agent at once), and *line owner* (merge *and* halt authority on the same person, written down so nobody has to approve the stop).

Receipts, not slogans: one enterprise arXiv panel (802 developers, ~196k PRs, Jan 2024–Apr 2026) under a double-throughput mandate saw raw PR volume 3.1× while the reviewer pool grew only 1.5×, and the share of PRs with at least one human review fell from 89% to 68%. Bun’s Zig→Rust rewrite (via PE) is cited as ~15% implementation / ~85% fix-test-verify. LeadDev/Gartner-side notes on write access without revoke paths, and PagerDuty’s point that service ownership no longer follows authorship, land the operational cap: on-call load limits how many agents one line owner can carry.

## Why it matters for code review

Review capacity is an org-design problem before it is a bot problem. If halt authority is decorative, seniors are still a queue, and juniors lose the path that taught the system, you did not staff a factory — you staffed a flood. Name the verifier and the line owner in writing, drill the halt, and size span of control by evidence the owner can actually read.
