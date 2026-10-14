---
title: "Dark factories: generation is real; Level 5 trust is not"
description: "Sep 23 Roelants evidence report v3.66: bounded agent pipelines exist; strict lights-out ownership of live software does not — productively complicates overnight-harness optimism with lifetime-cost and review-boundary gaps."
date: 2026-09-23
kind: field-note
source:
  title: "Dark Software Factories — evidence-led report (v3.66)"
  url: https://gist.github.com/peterroelants/0e22b06ff5069c317dfda2192a83d28f
project: steward
---

[Peter Roelants’ *Dark Software Factories*](https://gist.github.com/peterroelants/0e22b06ff5069c317dfda2192a83d28f) (v3.66, 23 Sep 2026) is a long, dated evidence dossier — not a product pitch — on what public systems have actually shown. Working definition: people specify intent, constraints, and acceptable behavior; agents produce and validate implementation. In the *strict* form, people neither write nor routinely review the generated code.

The report’s load-bearing conclusion is uncomfortable for pure overnight optimism: **strict darkness remains unproven**. Named cases (OpenAI, Intercom, Honeycomb, Tessl, Ramp, Spotify, LaunchDarkly, and others) support *bounded* agent pipelines — maintenance, research-intern tasks, high merge share under human direction, risk-routed specialist review — not a general-purpose factory owning live software unattended across years of incidents and migrations. Generation is the strongest claim; repeatable operation has young support; the **trust claim** that automated evidence can replace routine source reading is the least proven. LaunchDarkly’s stalled legacy rewrite until humans restored steering is kept as a counter-example, not a footnote.

Instead of treating the prompt as the new source, Roelants argues for a versioned **source bundle** (intent, contracts, acceptance scenarios, architecture and safety policy, factory program, provenance) with explicit authority classes so the implementer cannot silently weaken protected acceptance. Pull requests stay useful operational envelopes; the semantic compilation unit is the change package. Public stacks show recurring layers — executable checks, capability and release controls, operational feedback, sometimes review agents — whose coverage and lifetime effectiveness remain open. Maintainability and lifetime economics are called out as missing from throughput-first first-party reports.

## Why it matters for code review

Harnessed overnight momentum still beats babysat Claude bursts *inside* the envelope humans actually trust — and this dossier marks that envelope. Continuous verification under volume is necessary and insufficient: without governed specs, independent acceptance, and an honest halt when evidence is weak, “always-on” is just faster amplification of unverified claims. Use the report as the complication: ship the continuous harnessed loop, keep humans on consequential semantic choices, and do not confuse a green night shift with Level 5 ownership.
