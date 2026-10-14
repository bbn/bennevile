---
title: "Own the review standard as a skill, not a vendor slider"
description: "Tessl’s Aug 20 Code Review launch: team standards live as versioned skills you can inspect, eval, and point at another repo — whole-PR context, stateful re-review, and a path toward an autonomous merge gate."
date: 2026-08-20
kind: field-note
source:
  title: "Review Agent-Written Code Against Your Team's Standards"
  url: https://tessl.io/blog/launching-tessl-code-review
project: steward
---
Tessl starts from the volume problem: agents write faster than any team can review, so the reviewer that keeps up has to hold *your* bar — and that bar has to move as you learn how your agents behave. Their bet is that the standard cannot live as a sensitivity slider inside someone else’s product. You write it once as a skill you own, version, and can point at another repo tomorrow.

The machinery matches that claim. Reviews read the whole PR (surrounding code, standards, existing thread), not just the latest diff. Lenses are skills (architecture, quality, security). A stateful supervisor tracks what was fixed, explained, declined, or still open across rounds. They also put eval on the standard itself: backtest a lens against PRs that already carry feedback, and they report ~74% of findings on their own monorepo judged as real defects vs ~50% on comparable tools. The framing is explicit: trusted review is what eventually lets a change become a blocking gate and merge without a human on every diff.

## Why it matters for code review

Factory talk usually skips the ownership question. If the review criteria are trapped in a vendor settings page, you cannot inspect them, test them, or carry them when you change tools. Treating the standard as a versioned skill — with evals — is how review becomes an asset on the line rather than another opinion in the sidebar.
