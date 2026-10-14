---
title: "Copilot review: shell-validated comments and an ensemble Lite path"
description: "Sep 11 GitHub changelog: Copilot code review auto-resolves addressed threads, runs shell tools behind the agent firewall, and switches Lite to a multi-agent ensemble with higher addressed-comment rates."
date: 2026-09-11
kind: field-note
source:
  title: "Auto-resolution and analysis updates in Copilot code review"
  url: https://github.blog/changelog/2026-09-11-auto-resolution-and-analysis-updates-in-copilot-code-review/
project: steward
---

GitHub’s Sep 11 Copilot code review changelog is a small product note with a factory-shaped receipt. When you push a commit that addresses Copilot’s own comment, Copilot now resolves that thread on rereview — open comments become the residual queue, not a museum of already-fixed nits. Applying an autofix suggestion also gets a generated commit message instead of a generic placeholder. That is review-queue hygiene, not a new judgment model: the signal for humans is whatever is still open.

The analysis side is the part factories will actually copy. Copilot review already read files; it now uses the full Copilot SDK shell toolset behind the agent firewall — builds, tests, targeted scripts, tool/API lookups — so findings can be validated instead of guessed from the diff. GitHub reports more positive developer feedback, more high-severity findings, and fewer nits under that setup. Separately, the Lite effort level moves from a single reviewer agent to an ensemble: multiple agents contribute perspectives, Copilot merges them into one review. Their experiment numbers: addressed comments per review up 47% for high severity, 31% medium, 11% low, with about 8% lower review cost.

## Why it matters for code review

Independent review at factory volume needs two cheap upgrades at once: evidence (run something, don’t just narrate the diff) and disagreement (more than one perspective before a single verdict). Auto-resolve is the third: leave humans only the residual thread list. If your review bot still can’t execute checks and still leaves every historical comment open after the fix landed, you are paying review attention tax that this changelog just priced as optional.
