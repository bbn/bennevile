---
title: "ROBOCO: factories that filter by evidence — a test that passes before the fix proves nothing"
description: "Oct 10 from ROBOCO: with Bun's robobun opening 2,313 PRs in September, open-source factories make reviewers read evidence before code. Bun's PR evidence block (1,827 PRs), mastra's CI that runs new tests against the unfixed base, Vercel AI SDK's reproduction → failing test → fix commits. And the gaps: mastra bot PRs merged with the gate's failing label, an Astro fix reverted despite a confirmed repro."
date: 2026-10-10
kind: field-note
source:
  title: "Software Factory Best Practices from Open-Source Projects (3/4): Factories That Filter by Evidence"
  url: https://roboco.io/en/posts/software-factory-evidence-before-fix/
project: steward
---

Part three of Dohyun Jung's ROBOCO series starts from a line in Bun's `CLAUDE.md`: *"Your test is NOT VALID if it passes with `USE_SYSTEM_BUN=1`"*, meaning a test that also passes on the unfixed release proves nothing. The scale explains why it matters. Bun's agent, robobun, opened **2,313 PRs in September 2026**. Nobody reads that many diffs, so the factories Jung examined (counts pulled through the GitHub API on October 10) move the start of review from code to evidence, in three layers: a reproduction showing the bug exists, a test that fails before the fix and passes after, and proof of real behavior beyond unit tests.

"Fails before the fix" shows up in three different implementations:

- **Bun** puts it in the PR body. **1,827** of robobun's September PRs carry an evidence block: the run log showing the test failing on main without the fix, how many gate attempts it took, and per-file counts of reads, edits and test runs. Reviewers read that block before the code.
- **mastra** checks it in CI. `changed-test-gate.yml` checks out the base commit, takes only the PR's changed test files, and runs them against unfixed code. They are supposed to fail. The PR's code runs without secrets, and the label write happens in a separate workflow so agent-written tests never touch a write token. Of **434** bot PRs merged in September, 354 were `tests: green ✅`, 33 had no tests, and 24 carried `tests: failing ❌`.
- **Vercel AI SDK** makes commit order the evidence: reproduction, then failing tests, then the fix. Its AI review re-runs the original reproduction before judging the fix, and requested changes in the first round on 20 of September's factory PRs.

Several projects then go past unit tests. OpenClaw rewrote its instructions in October after five defects unit tests missed had shipped ("Behavior over test count"). OpenHands' CI won't pass a frontend PR without a screenshot or video of the running app, runs live E2E against a real agent server, and has an agent re-verify changed features through the UI every day. Astro publishes each factory fix as an installable preview and opens the PR only after the issue reporter or a maintainer confirms the behavior (19 and 12 of its 31 September PRs, respectively).

Bypass routes get closed too. Bun requires a link to the same failure on main before anyone can call a test flaky. OpenClaw bans rerun-until-green. mastra's reviewer re-runs tests itself with the GitHub token stripped and checks the head commit hasn't moved before it posts. Bun also has a human-applied `slop` label that auto-closes a PR; **228 of 248** uses landed on robobun.

The gaps are the honest part. A label is not a merge condition: **83** merged mastra PRs carry the gate's own `tests: failing ❌` label, and Astro's main branch has no required status checks at all. And evidence that something works is not evidence it does what was intended: Astro reverted a factory fix whose behavior a maintainer had confirmed, because the change altered behavior the project meant to keep.

## Why it matters for code review

At always-on volume, the reviewer's first artifact should be proof, not a diff, and the proof has to be wired into the merge rule or it just becomes decoration. This sits next to [OpenHarnX's locked tests](/posts/openharnx-locked-tests-execution-vs-settlement/), [Holt's eleven green tests that never ran](/posts/holt-overnight-agent-pr-eleven-green-tests-never-ran/), and [Mastra's own account of full-auto being too bursty to review](/posts/mastra-factory-full-auto-was-bursty-stages-went-manual/).
