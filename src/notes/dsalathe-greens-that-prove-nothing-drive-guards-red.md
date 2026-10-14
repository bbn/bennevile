---
title: "Reading caught none of the tests that couldn't fail. Breaking the code caught all of them"
description: "Oct 6 dsalathe, Greens That Prove Nothing: in an agent factory's findings ledger, the largest defect family is guards and tests that stayed green while asserting nothing. Seven of one shape got past writing, rereading and review, several by agents that had just read the postmortem, and fell within minutes to a deliberate mutation. The house rule is to show every guard failing before believing its pass."
date: 2026-10-06
kind: field-note
source:
  title: "Greens That Prove Nothing (The /dsalathe/blog)"
  url: https://blog.dsalathe.dev/posts/agent-factory/greens-that-prove-nothing/
project: steward
---

This [installment of an agent-factory series](https://blog.dsalathe.dev/posts/agent-factory/greens-that-prove-nothing/) is a mid-product snapshot of a project where agents write the stories, the code, the tests and most of the review, and every finding goes into a ledger. At the August count, the largest family among 80 ledger entries was 12 vacuous guards: tests and checks that had been green for weeks while unable to fail.

## How a green lies

The shapes are mundane. A "must not contain" check on a stylesheet passed because the test runner stripped the import and handed it an empty string. A sign-out guard searched a source slice that began with the very text it was asserting, so deleting the feature left it green. A security audit for secret-shaped environment reads looked for the literal `process.env` in a gateway that takes its environment as a parameter, so it could never fire on the code it was written for. A fixture with one game character could not tell sorted from unsorted, and a byte-for-byte check on a zero-byte packet passed for a client that never sent it.

## Why review missed them

The author's point is that this isn't sloppy agents. One self-satisfying shape appeared seven times across four stories, once inside the review that had just written up the previous instance, and several were written by agents that had read the earlier postmortems that day. Ledger entry F-77 puts the score at seven missed by reading and seven caught by driving. A reviewer, human or agent, judges whether a test looks plausible; only running it against broken code shows whether it discriminates. A warning about the trap in a document didn't help, and one trap sat inside the warning itself.

## What the factory does instead

The rule is to assert that red stays red before believing green is green: break the thing a guard protects, not the test, and watch it fail. Refinements followed. Drive the guard red against the tree that still has the offence, pick mutations the check has no tolerance to forgive, pair every ban with a positive assertion using the same pattern, make setup helpers prove their fixtures aren't empty, and delete a test that survives removal of what it tests. A later update adds checking that the mutation actually landed before trusting the pass. On one story where 3,200 of 7,734 added lines were tests, a fourth review layer asking only "what mutation turns this assertion red?" found more real defects than the three standard review layers combined.

## How it fits

For an always-on factory, the gate's own tests are the part nobody rereads, so a cheap red run per guard is what keeps continuous verification honest as volume grows. It lines up with Paul Stack's argument that [agent-written tests aren't independent just because they sit at a different level](/posts/stack-product-verification-expectations-outside-the-loop/), with Qualiteg's [completion gate that inspects test bodies](/posts/qualiteg-completion-gate-done-means-it-runs/), and with Otis's [mutation-light check before any PR opens](/posts/42nights-otis-eight-check-mutation-harness/). Compare Ralph Duin's run where [1,374 passing tests let two real bugs through](/posts/duin-37-agents-green-suite-missed-two-bugs/) to fresh-context reviewers. The author's own caveat: driving a guard red proves it can fail, not that it covers every case it claims to.
