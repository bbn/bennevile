---
title: "Reviewing agent code is a question of where to trust it, and the diff view can't answer that"
description: "Oct 6 JetBrains Research with Lund University: from workshops with 17 practitioners and a 43-person survey, a framework for reviewing AI-generated changes that starts with an overview, ranks files by risk before anyone reads a line, and only then drills into code. Agents present every line with the same confidence, so reviewers need tools that tell them where to look hard."
date: 2026-10-06
kind: paper
source:
  title: "Our Framework for Reviewing AI-Generated Code"
  url: https://blog.jetbrains.com/research/2026/10/review-ai-generated/
project: steward
---

Katie Fraser, Agnia Sergeyuk and Ilya Zakharov of JetBrains' Human-AI Experience team, working with researchers at Lund University, wrote up a study that will be presented at Empirical Software Engineering International Week in October. It's based on four participatory design workshops with 17 practitioners and a follow-up survey of 43 software professionals.

## The problem they name

When a colleague writes code, a reviewer leans on a lot of context without noticing it. They know how senior the author is, which parts of the codebase that person knows well, and where they tend to rush, and they can ask why something looks odd. None of that exists when the author is a model. A model also presents every line with the same apparent confidence, whether the authentication logic was easy or the database migration was a stretch.

The rational response is to read every line, and that scales badly as agents produce bigger multi-file changes. The authors argue that understanding what changed is now the easy part, and that the hard part is knowing whether to trust it and where. They define trust calibration as spending review effort in proportion to how risky each piece is, when you can't ask the author how confident it was.

## The workflow they propose

Review should run in three levels, borrowed from the information-design rule of overview first, then zoom and filter, then details on demand:

- **Overview:** tools should stand in for the orientation a human author gives for free, such as what they were trying to do and where they are weak.
- **Files:** tools should rank files by risk before the reviewer reads a single line, so effort goes where it matters.
- **Code:** tools should support close reading, with large changes broken into chunks and linked to the reasoning that produced them.

They note partial versions already exist: prose walkthroughs in CodeRabbit, severity-tagged findings from Claude Code's reviewer agents, and Graphite's stacked PRs. None of them builds the review around risk ranking before reading. Their warning for tool builders is that tools which make changes easier to understand, without helping reviewers judge where to trust them, may speed up low-stakes reviews while still steering attention toward safe code and away from the risky parts.

## Why it matters for always-on factories

When agents work overnight, the morning review is the narrowest point in the pipeline, and a reviewer can't read everything that landed. This study argues the fix is better tooling for deciding where to look, not more reviewers or a faster diff. It's a design framework drawn from workshops, not a measured result. Compare [SignalFire's CTOs calling review a UI problem at 150 agents](/posts/signalfire-150-agents-review-is-a-ui-problem-autonomy-requires-verifiability/), [reviewing a day of agent PRs in merge order](/posts/joxo-review-agent-prs-in-merge-order-run-fewer-agents/), [CodeRabbit's agentic review comments in the wild](/posts/coderabbit-agentic-review-helpful-in-the-wild/), and [reviewer habituation that shows up in embeddings](/posts/reviewer-habituation-embedding-detection/).
