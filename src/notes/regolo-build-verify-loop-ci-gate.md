---
title: "Build-verify as control flow: 34% broken agent PRs → gate blocks the PR"
description: "Aug 24 Genovese/Regolo: OpenCode in GitHub Actions with a bash verification gate — pytest, forbidden paths, secret scan — PR opens only if success(); prompt alone is not enough."
date: 2026-08-24
kind: field-note
source:
  title: "The Build-Verify Loop: stop your AI agent from claiming victory before the tests pass"
  url: https://regolo.ai/the-build-verify-loop-stop-your-ai-agent-from-claiming-victory-before-the-tests-pass/
project: steward
---

Alex Genovese’s Aug 24 Regolo note (first in a Harness Engineering Patterns series) names the failure mode continuous factories feel every morning: the agent reports success, the PR opens, the tests fail — or the edited file isn’t even where the bug lived. The claim is architectural, not IQ: LLMs produce plausible completions, and a confident summary is the most plausible text after writing code. **Verification must be a gate in the control flow, not a paragraph in the prompt.**

The production receipt is a six-person EU FatturaPA SaaS: 15–25 bug-fix / small-feature issues per week, OpenCode as the issue resolver on a self-hosted GitHub Actions runner, Regolo as the OpenAI-compatible endpoint (`qwen3-coder-next`). **Before the gate, 34% of agent-opened PRs failed CI on first run.** The fix is ordered: OpenCode edits in the runner → `scripts/verify_gate.sh` runs full pytest, flags untouched forbidden paths (`deploy/`, `.github/`, `.env`), scans the diff for secrets → `peter-evans/create-pull-request` runs only under `if: success()`. The prompt discloses how the agent will be evaluated (exact paths, full suite) and allows an honest stop after five fix attempts — so the model isn’t trained to lie about blockers. Genovese’s cost honesty: ~20–30% more tokens per attempt for verify/fix, paid back by not burning humans on broken agent PRs. Gaming warning stays: agents will satisfy the letter (one trivial test) unless you require full log artifacts and review blocked runs as failure data.

## Why it matters for code review

Overnight harnessed momentum only compounds if “done” cannot open a PR without executed evidence. A factory that trusts narrator mood is buying FOMO with a morning queue of red CI; a factory that puts the gate where the agent cannot persuade it keeps modest verified throughput on the merge path. Review the blocked runs — they are the harness’s eval set — not the fluent success summaries.
