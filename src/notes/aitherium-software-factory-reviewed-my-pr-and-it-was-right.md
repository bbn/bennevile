---
title: "Aitherium: the software factory reviewed my PR — and it was right"
description: "Oct 10 from Aitherium: every PR gets Atlas on architecture and Demiurge on code, both on a self-hosted runner calling a local DeepSeek. Demiurge REQUEST_CHANGES’d a small voice fix with seven real findings; a machine-readable VERDICT: line gates auto-merge."
date: 2026-10-10
kind: field-note
source:
  title: "My Software Factory Reviewed My Pull Request, and It Was Right"
  url: https://blog.aitherium.com/blog/my-software-factory-reviewed-my-pull-request-and-it-was-right
project: steward
---

Aitherium’s Oct 10 field note is a receipt, not a slogan: the house software factory reviewed a human’s pull request, and the review was better than a tired human pass. On AitherOS, every PR gets two agent reviewers — **Atlas** on architecture and **Demiurge** on code — both running on a self-hosted GitHub Actions runner against a DeepSeek model served by llama.cpp on a DGX Spark in the house. No paid API sees the diff. The budget is deliberately long (up to two hours); a slow, correct review beats a fast empty one. Output is a structured comment with a machine-readable `VERDICT:` line, and a label from that line gates auto-merge.

This week Demiurge reviewed a small voice fix (espeak guessing the wrong vowel for the adjective “live”), marked it `REQUEST_CHANGES`, and listed **seven** findings — four warnings and three suggestions. The author checked every one against the code; every one was real. One follow-up commit fixed all four warnings and two of the suggestions.

The findings that sell the lane are the ones a self-check cannot catch:

- **TypeScript path untested.** New pronunciation rules were exercised only through the YAML path; one rule used a regex backreference no existing TypeScript rule had, so a browser could have spoken a literal `\1`.
- **Anchored at start-of-text.** A rule for “Lives on the fleet” used `^`. Every unit test was a one-line string, so it passed; in a paragraph (“Done. Lives on the fleet now.”) it would never fire — the exact production case the rule existed to fix.
- **Guard test that could skip in CI.** The phoneme check skipped when espeak was missing from the image, so new rules could merge with no check at all. A second test now asserts the respelled text with nothing installed.
- **Unrelated blast radius.** An automation-backlog edit had ridden along; Demiurge called it out as scope a voice fix should not carry.

Number two is the one that matters for always-on factories: the bug that passes every test you wrote because your tests share your blind spot. Catching it took a reviewer who read the anchor, asked how the function is called, and built the case that breaks it — without being asked. The same pass also caught a new voice module that silently truncated phoneme sequences at the model’s 510-symbol limit.

One caveat stays honest: Atlas’s architecture run on this PR ended before a verdict. That lane now holds incomplete runs back instead of posting them. The takeaway the author wants copied: if you run agents on your own hardware, put one on code review first. A wrong finding costs two minutes of reading; a right one, like the mid-paragraph anchor, saves a production bug report. This week the local lane was right **seven times out of seven**.

## Why it matters for code review

Continuous factories compound when “done” is an independent verdict, not the author’s confidence. Here the harness owns the review lane — tools, code graph, fail-closed `VERDICT:` — and the merge button still listens to that label. Read it beside [Curry on machines that block but never approve](/posts/curry-reviewing-agent-prs-machine-blocks-human-approves/), [Lamplit’s five gates with humans last](/posts/lamplit-five-gates-412-agent-prs-human-reviews-last/), and [Vázquez’s owner gate](/posts/vazquez-many-hands-one-yes-harness-owner-gate/).
