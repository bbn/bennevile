---
title: "A 300-commit day is an activity signal, not throughput: count accepted work instead"
description: "Jang Young Jeong audits HoYeon Lee's report of a Software Factory that produced 300 commits a day over the Chuseok holiday. The workflow is real and thoughtful, with tasks carrying intent and a verification method, human review at key points, and an Observer agent, but the post reports no merged, accepted, reworked or rolled-back counts. Jeong's fix is an acceptance ledger."
date: 2026-10-07
kind: field-note
source:
  title: "The Software Factory Is a Queue, Not a Commit Counter (Fodev JEO)"
  url: https://akillness.github.io/posts/the-software-factory-is-a-queue-not-a-commit-counter/
project: steward
---

[HoYeon Lee wrote on LinkedIn](https://kr.linkedin.com/posts/hoyeonleekr_%EC%9D%B4%EB%B2%88-%EC%B6%94%EC%84%9D-%EC%97%B0%ED%9C%B4%EC%97%90-software-factory%EB%A5%BC-%EA%B5%AC%EC%84%B1%ED%95%B4%EC%84%9C-%EB%A7%A4%EC%9D%BC-300%EA%B0%9C%EC%9D%98-activity-7510140754036596736-9DDM) (in Korean) that a Software Factory produced 300 commits a day over the Chuseok holiday while refactoring a multi-agent platform from Swift to Electron. A PRD became tasks, task dependencies were analyzed, pull requests opened automatically, and Lee reviewed only the key tasks. [Jang Young Jeong's source audit](https://akillness.github.io/posts/the-software-factory-is-a-queue-not-a-commit-counter/) takes the workflow seriously and the number carefully.

## The post already names the hard part

Jeong points out that Lee does not frame it as a commit contest. The post calls CI and verification the bottleneck, recommends removing unnecessary tests and not running a full verification cycle on every tiny change, has every task carry its intent and a verification method, and puts a single Observer agent between the person and the implementation, verification and advisor agents. Lee reports that this reduced drift. Jeong's caution is on the word "unnecessary": deleting tests without replacing their risk coverage just hides the bill.

What the public post does not report is the rest of the queue: how many tasks were accepted, how many PRs merged, first-pass CI, escaped regressions, rollbacks, rework, or time waiting on human review. So it supports a workflow description and a self-reported commit rate, not a measured productivity result.

## An acceptance ledger, not a counter

Jeong's proposal is to give each task a stable ID, acceptance criteria, a risk level, an owner, and links to its PRs and checks, then track explicit states (ready, in progress, blocked, in review, verified, accepted, released) with rejected, needs-rework and rolled-back kept visible instead of folded into "done." A green check proves that check passed; an approval proves a reviewer decided; neither is the acceptance verdict on its own. An Observer that says "complete" is still only reporting a status.

## How it fits

This is the right measuring stick for always-on factories. Overnight momentum only compounds if what gets counted is work that cleared review with evidence, and holiday commit counts are exactly the kind of peak-burst number that flatters the factory without saying what landed. Pair it with [faster developers not making a faster team](/posts/malkov-faster-developers-dont-make-faster-team-review-bottleneck/) and [overnight delivery that stops at review-ready rather than merged](/posts/hills-lab-tilt-overnight-delivery-review-ready-not-merged/).
