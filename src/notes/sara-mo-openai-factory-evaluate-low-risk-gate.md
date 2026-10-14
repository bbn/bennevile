---
title: "Evaluate the low-risk gate, not only the green PR"
description: "Sep 16 Sara Mo: OpenAI’s factory can auto-approve low-risk changes — CI proves the checks; the classifier’s skip-human decision needs its own record, replay, and post-deploy score."
date: 2026-09-16
kind: field-note
source:
  title: "OpenAI's Software Factory Can Skip Human Review. Who Evaluates That Decision?"
  url: https://dev.to/sara_mo/openais-software-factory-can-skip-human-review-who-evaluates-that-decision-21bf
project: steward
---

Sara Mo’s Sep 16 DEV note is the productive complication to the continuous-factory map: once specialist agents, CI, and a risk classifier can remove the human from the merge path, **the routing decision itself becomes a release decision** — and green CI does not prove it was right.

She is reading Gergely Orosz’s public diagram of OpenAI’s agentic software factory (already on this site). The pipeline writes code, babysits CI, runs domain-specialist reviews, classifies risk, deploys, and feeds production loops. Areas can opt into **automatic approval for low-risk PRs**. Mo’s point is narrow and sharp: every component may have done exactly what it was asked, and the remaining question is whether the system was right to **stop asking a person**.

CI and risk classification prove different claims. A green build shows the change passed the conditions the pipeline checked — build, selected tests, linters, maybe a perf harness, specialist coverage within assigned domains. The classifier claims something else: that surface, expected consequence, and uncertainty are compatible with **less human scrutiny**. That claim needs its own evidence. Otherwise teams can monitor every agent around the gate while treating the decision that removed the human as a label rather than behavior that can be wrong.

Risk is not a permanent property of a file. A change that was low-risk yesterday can stop being low-risk after a dependency moves, a permission boundary expands, traffic shifts, or an old invariant dies — while the same local checks still pass. Challenge cases she names: small diffs on a component whose blast radius grew; suites that still encode an obsolete constraint; a deployment agent watching a healthy proxy while the required production state diverges; specialists that all pass because the failure lives *between* their domains.

Her evaluation ask is to score the **route against what happened next**, preserving what was knowable at classification time: did the change preserve required production state; did rollback, incident, escalation, or delayed repair follow; did monitoring catch the condition that mattered; would an informed reviewer with the same evidence have chosen the same route? The gate needs an inspectable record — exact change, policy/version, evidence received, specialist coverage, selected route, human vs automatic approval, what deployed, which postconditions were checked, whether repair became necessary — so decisions are reconstructable and **replayable** when policy or dependencies change.

Commenters tighten the harness contract further: treat routing as an auditable state transition; weight false negatives by blast radius; freeze automatic approval on an affected slice when dependencies or permission boundaries change; keep a **blinded human sample** of “low-risk” changes as a control group so clean deploys are not mistaken for proof that skipped review added no value.

## Why it matters for code review

Always-on and overnight factories beat peak-session mastery only when verification *and* residual human gates scale with volume. Auto-approve for low risk is how continuous momentum avoids drowning reviewers — and it is also how a factory can silently industrialize the wrong route. Pair continuous verified throughput with an evaluated classifier: CI green is evidence about the change; it is not, by itself, evidence that removing the human was safe. Without a scored, replayable gate, FOMO about idle agents just relocates morning risk into an unmeasured diamond on the diagram.
