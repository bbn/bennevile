---
title: "BCG’s harness OS: four unequal quality gates, not one green check"
description: "Sep 16 Kapoor/Paca/Zemgulys: specs, constitution, control panel, context hub, and four gate types (automated / critic / human stage / regulatory) — maturity ladder for when humans still must say yes."
date: 2026-09-16
kind: field-note
source:
  title: "Harness Engineering: The Operating System for Agentic AI"
  url: https://www.bcg.com/publications/2026/harness-engineering-scale-agentic-ai
project: steward
---

BCG’s Sep 16 piece (Kapoor, Paca, Zemgulys) argues the reliability crisis around agents is an **operating-system** problem: models commoditize; the harness captures how *this* org works. They map five components to a PC OS metaphor — **specs** (machine-testable scope contract), **constitution** (deterministic always/never/escalate rules with named accountability), **control panel** (audit trail, escalation matrix, failure recovery), **context hub** (private shared memory so agents stop guessing), and **quality gates**.

The review-relevant cut is that quality checks are **not equal**. Four gate types:

1. **Automated** — programmatic failure prevention.
2. **Evaluation** — specialized critic agents score worker agents.
3. **Human stage** — a named person marks an activity complete.
4. **Regulatory** — a quality agent enforces compliance standards.

A maturity ladder then moves work down the clearance policy as trust grows: client-facing proposals may require every output reviewed; battle-tested internal drafts can become spot-check. Humans relocate to supervisors who set goals and boundaries up front and intervene at critical checkpoints; specialized critics handle more routine gates. Receipts they cite: a Southeast Asian bank harness that lifted wealth-advisor productivity 30%+ and sped design-to-deployment ~50%; a software company shifting from coding assistants to harness engineering across the product lifecycle claiming up to 5× team productivity.

Their adoption rules are anti-hype: start small, **build don’t buy** the org-specific harness (context and quality signals are the moat), and be selective — only workflows with documented work and checkable quality. Productive complication for lights-out factories: BCG still puts human stage gates and regulatory gates on the critical path; continuous momentum is not “skip review,” it is routing the right gate type to the risk.

## Why it matters for code review

Under agent PR volume, one green CI check is a category error. Continuous harnessed throughput needs the four-gate split — deterministic blocks, independent critics, named human stage gates, and compliance — plus a maturity ladder so review bandwidth tracks blast radius. The FOMO that agents aren’t working overnight is wasted if the morning queue has no constitution, no critic, and no named acceptor.
