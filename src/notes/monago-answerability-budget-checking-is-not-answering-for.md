---
title: "The answerability budget: agents can check their work, but someone still has to answer for it"
description: "Oct 5 Adam Monago on Lauren Tan's 2,462 changes in a month: verification loops make checking cheap enough to stop being the ceiling, but the number of changes a named person can honestly stand behind grows on a human schedule, not a model one."
date: 2026-10-05
kind: field-note
source:
  title: "The Answerability Budget"
  url: https://www.adammonago.com/the-answerability-budget/
project: steward
---

Adam Monago starts from the strongest case for continuous verification. Lauren Tan reported that August closed with **2,462** of her changes in production, about 117 per working day. A reviewer reading every one of them in an eight-hour day would get roughly **four minutes per change**: enough to glance at a diff, not enough to run the app or notice the untested case. So Tan moved checking into the loop, with a verification skill that drives the app, takes screenshots and records traces until the checks pass. Monago agrees with her: a team shipping agent-written code without something like that loop "is choosing to go slower and see less."

## The second question

His point is that every change headed to production carries two questions. One is whether it does what it was asked to do, and that can be automated. The other is who answers for it if it turns out to matter. For most of software's history the same engineer carried both, so they felt like one. Agents pull them apart. Checking moves into the loop, and answering stays with a person or an institution. "Checking is not answering for."

He calls the amount of output someone is willing and able to answer for the **answerability budget**. When output grows tenfold and the number of names that can honestly sign for it stays flat, one of three things happens: signatures thin out into clicks, the work waits, or unsigned work ships and the organization finds out later whose name it was under, usually the on-call engineer's. The approval button looks the same in all three cases.

## What raises it, and where that stops

Monago reads Tan's own habits as ways to raise the budget: asking agents to restate the problem before coding, a `/teach` skill for explanations she can trust, a warning that tests alone aren't enough, and keeping each change "small, self-contained, and easily reviewed." Smaller units and better evidence make each judgment cheaper to make. None of them moves the name.

## Why it matters for code review

This complicates the case for steady, always-on output in a useful way. A harness can keep merged work flowing day and night, and verification can keep up with it. But the capacity that actually limits safe shipping may be how many changes a person can stand behind, and Monago sees nothing that makes it grow as fast as output. "We know how to make generation cheaper. We are learning how to make checking cheaper. I have not seen a design that makes responsibility cheaper without making it meaningless." Pair with [how Tan made verification the system](/posts/everyhub-lauren-tan-verification-before-overnight/) and [sizing the queue in review minutes](/posts/lawzava-review-queue-real-agent-limit-review-minutes/).
