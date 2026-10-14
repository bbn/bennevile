---
title: "When coding benches rot: auditing SWE-Bench Pro"
description: OpenAI’s July 2026 analysis of evaluation flaws in SWE-Bench Pro—and why noisy tasks poison agent comparisons.
kind: field-note
date: 2026-07-08
source:
  title: Separating signal from noise in coding evaluations
  url: https://openai.com/index/separating-signal-from-noise-coding-evaluations/
project: steward
---
After recommending SWE-Bench Pro as a harder successor to Verified, OpenAI audited it with investigator agents plus five experienced engineers per flagged task. They found enough evaluation flaws to retract the earlier recommendation.

The methodological point is bigger than one bench: programmatic issue mining plus weak human oversight produces tasks that models can “pass” for the wrong reasons. Frontier coding eval needs experienced developers in the loop.

## Why it matters for code review

Review systems inherit bad benches. If you tune a review agent against contaminated or underspecified tasks, you will reward the wrong behaviors. Budget time for task audits the way you budget time for the agent itself.
