---
title: "Code review after code gets cheap: make evidence a condition of acceptance, and set review depth by blast radius"
description: "Markus Eisele, in O'Reilly Radar, argues that if every increase in generated code needs a matching increase in line-by-line reading, review caps how much agent work a team can accept. His alternative: agree behaviour and blast radius before generation, require a short review record with each PR, check drift in both directions, and spend inspection where mistakes are hard to undo."
date: 2026-10-16
kind: field-note
source:
  title: "Code Review After Code Gets Cheap"
  url: https://www.oreilly.com/radar/code-review-after-code-gets-cheap/
project: steward
---

**Markus Eisele** starts from a plain constraint: an agent can return a serious implementation with passing tests, but the person approving it "has roughly the same amount of time they had before code generation became cheap." If each increase in generated code needs a similar increase in human inspection, "review will keep limiting how many changes we can accept." His answer is to make evidence a condition of accepting agent-written code, and to decide from that evidence where direct inspection is worth it.

**A small diff can have a large blast radius.** His worked example is a refund service: refunds above €100 need approval, and an agent implements that correctly — but while touching the payment integration it also adds retries after a timeout. If the provider issued the refund before its response was lost, a retry can pay out twice, and if the retry lives in a shared payment client it reaches every refund, not just the new feature. Counting changed lines won't show that. So blast radius is its own review criterion: which operations a change may affect, and how hard a mistake would be to undo.

**Check drift both ways, and don't trust tests that share the agent's misreading.** Borrowing bidirectional traceability from NASA's software guidance, he wants every requirement traced to implementation and checks, and every behaviour change traced back to a reason. If the agent reads "above €100" as "€100 and above" and writes tests the same way, CI just reproduces the agreement. Reviewers should check expected outcomes against agreed boundary examples, break the rule on purpose to see the test fail, and watch for edits to existing tests that quietly change meaning.

**The process:** agree behaviour and blast radius with the requirement owner before generation; the agent works within that scope and writes a short review record (agreed behaviour, evidence tied to this revision, extra behaviour, blast radius, open questions); CI runs the checks; the reviewer starts from the record and inspects code where consequences justify it; rollout is controlled. The submitter owns the record's accuracy even when an agent wrote it, and unexplained behaviour stays open until someone resolves it.

## Why it matters for code review

This is the verification tax framed as something a team can pay down. Line-by-line inspection gets reduced "as the checks earn trust," routine changes get spot-checked to test the policy itself, and full reading is kept where a mistake has serious consequences, like a refund paid out twice. Pair with [Zeybek on declaring scope and listing behaviour changes](/posts/zeybek-agent-prs-declared-scope-behaviour-list-code-before-tests/) and [Rahman's survey on reviewers raising the evidence bar for AI-authored PRs](/posts/rahman-plausible-not-enough-aipr-trust-evidence-ownership/).
