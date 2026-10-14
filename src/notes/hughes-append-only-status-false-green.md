---
title: "A green check lied: append-only status receipts"
description: "Sep 26 Patrick Hughes: false green after scanners read 0 of 5 repos — append-only event receipts so later no-op runs cannot bury a real fix; missing evidence is unknown, not green."
date: 2026-09-26
kind: field-note
source:
  title: "A green check lied, so I built append-only status"
  url: https://bmdpat.com/blog/a-green-check-lied-so-i-built-append-only-status-2026
project: steward
---

Patrick Hughes’s Sep 26 field note is a receipt from the verification tax continuous factories pay when **status is a mutable dashboard**. On 2026-09-25 a blog recovery worked, then a later no-op report buried the fix. SecurityAnalyst marked GREEN with 0 P0 / 11 P2 while gitleaks and osv each read **0 of 5** repos — unaudited green that missed critical findings a separate dependency audit found. The sweep aborted after 22 minutes; vault health CRITICAL; the full suite RED at 552 of 553.

The repair is structural: `config/reporting/` writes **append-only** receipts on `Reports/Events/`; Markdown status views are generated projections, never inputs. Two closed false greens that day — public readback mixing title and text (3/24 → 128 pass) and a falsey deadline that silently disabled a check (7/14 → 14 pass). A fuzzer threw 3,000,000 malformed receipts across ten seeds with zero parser failures and killed ten seeded mutants; Hughes owns that generated fuzz is not production reliability. Rule he keeps repeating: if a scanner inspects zero targets, mark **unknown**, not green.

## Why it matters for code review

Always-on agents multiply the cost of **mutable green**. Review overnight inventory the way Hughes reviews status: completed work, latest attempt, and current health are separate projections over an append-only ledger; a check that disagreed with reality gets the helper fixed, not the working UI. Steady harnessed throughput compounds when morning merge gates demand positive proof of what was scanned — FOMO for idle agents is wasted if a later no-op can erase the night’s verified win.
