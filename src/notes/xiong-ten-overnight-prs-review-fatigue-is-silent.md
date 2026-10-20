---
title: "Ten agents overnight, ten PRs by morning, and review fatigue that looks like continued work"
description: "Jul 19, Xinwei Xiong. Ten parallel overnight tasks produced ten convincing PRs; by lunch he had reviewed three, the eighth he just merged, and that night he queued ten more. A week of about three times his usual merged code shipped no extra features. His fix is raising first-pass correctness, not adding agents."
date: 2026-07-19
kind: field-note
source:
  title: "I Ran Ten Agents Overnight, Woke Up to Ten PRs, and Then I Got Stuck"
  url: https://cubxxw.com/ai-agent/posts/super-individual-stack-production/
project: steward
---

[Xinwei Xiong](https://cubxxw.com/ai-agent/posts/super-individual-stack-production/) describes a setup most parallel-agent guides would call a model one: before bed, split the backlog into roughly ten tasks, each in its own isolated workspace, and wake up to ten branches and ten PRs with convincing descriptions. Then the review started. By lunch he had gotten through three, one of which took [forty minutes](https://cubxxw.com/ai-agent/posts/super-individual-stack-production/) to confirm it had not quietly changed boundary handling he had written that way on purpose. By the sixth and seventh he was glancing at line counts and whether tests passed. "[The eighth I just merged.](https://cubxxw.com/ai-agent/posts/super-individual-stack-production/)"

## The urge to queue more

The psychological part is the most candid. That same night he queued [ten more tasks](https://cubxxw.com/ai-agent/posts/super-individual-stack-production/), on the instinct that if ten PRs was good news, ten more tomorrow must be too. A week later, he had merged [about three times his usual volume](https://cubxxw.com/ai-agent/posts/super-individual-stack-production/) of code, while the number of features real users touched "didn't go up by one." The extra work sat on main as done but not yet verified, and the week felt "extremely busy, extremely productive, extremely exhausted."

His sharpest point is that [review fatigue is silent](https://cubxxw.com/ai-agent/posts/super-individual-stack-production/). When you are too tired to write code, output stops and you notice. When you are too tired to review, you keep reviewing, only shallower, and it never feels like stopping. That feeds a loop: plausible bad code lands, the codebase becomes the next batch's context, and agents faithfully copy its duplicates and misaligned abstractions.

## First-pass correctness as the only lever

Since overnight execution is cheap to parallelize and review bandwidth is not, he argues the only lever is making each PR need less review: front-load rules (turn repeated review comments into rules or tests), write goals, non-goals and acceptance criteria into the ticket, and make the agent run itself to green before opening a PR. Review then drops from reading every line to checking criteria. Worktree isolation is the precondition for any of it.

This is the strongest complication for always-on agents: overnight volume compounds only if verification keeps pace, and the person reviewing is the part that does not run 24/7. Read with [Zach Wills on ten PRs merged overnight](/posts/wills-bottleneck-moves-overnight-10-prs-inspect-the-proof-ram-wall/), [Marc Nützel on factories that went dark because the reader ran out of time](/posts/nuetzel-software-factory-went-dark-reader-ran-out-of-time/), and [Nikolas Barwicki's ten-hour runs](/posts/barwicki-ten-hour-agent-runs-human-work-moves-before-and-after/).
