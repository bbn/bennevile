---
title: "Bastion: single-concern reviewers that aggregate into a merge gate"
description: "Jun 2026 attunehq/bastion (still shipping Sep): agent volume ×100 breaks human diff review; narrow one-property reviewers run locally then in CI; verdicts aggregate to one required check — humans curate reviewers, not every line."
date: 2026-06-20
kind: field-note
source:
  title: "Bastion — Truly useful agent code review"
  url: https://github.com/attunehq/bastion
project: steward
---

[attunehq/bastion](https://github.com/attunehq/bastion) (Jun 2026, [v1.1.5](https://github.com/attunehq/bastion/releases) Sep 12) starts from a scaling claim: agents write at volumes closer to *engineers × 100* than ×1, and asking a small team to read every diff is like five people reviewing a five-hundred-person org. Skipping review grows a ball of mud; generic one-shot reviewers lose recall as checklists lengthen — fine at one concern, slipping at ten, useless at a hundred.

Bastion’s bet is **single-concern reviewers**: focused agent prompts, each responsible for exactly one property over the changeset. You cover more ground by *adding* narrow reviewers, never by broadening one. Repository reviewers run **locally** (fast pre-PR loop: authoring agent repeats `bastion review` until green) and again in **CI** as the authoritative surface; personal fallback reviewers stay local-only (`--with-user-reviewers`). Verdicts aggregate into **one merge gate** — the GitHub Action posts sticky comments and check runs whose failure blocks merge. The human’s job relocates from reading every agent diff to authoring, curating, and governing the reviewer set.

Install is a checksum-verified binary; CI is essentially `uses: attunehq/bastion@v0` after checkout and backend CLI auth. Docs split a user guide (writing reviewers, local loop, CI, governance) from a developer guide (architecture and threat model). License split: runtime AGPL-3.0-or-later, docs CC-BY-SA-4.0.

## Why it matters for code review

Continuous overnight factories only compound if the verification tax stays linear as volume rises. Bastion treats that tax as an inventory of narrow, fail-closed concerns instead of one exhausted generalist — modest harnessed gates you can require in branch protection beat a peak Claude session that rubber-stamps its own thousand-line checklist. The FOMO worth fixing is not idle agents overnight; it is mornings of unverified merge pressure with no reviewer fleet that still has recall.
