---
title: "Camus: Claude makes; Codex reviews; Camus never lands it for you"
description: "Jun 10 Camus: deterministic local control plane — independent maker≠reviewer seats, repo tests as final word, bounded review loops, crash-safe resume; verifies overnight work without auto-merge."
date: 2026-06-10
kind: field-note
source:
  title: "Camus — trust the work, not the model that made it"
  url: https://github.com/mateodaza/camus
project: steward
---

[Mateo Daza](https://github.com/mateodaza/camus)’s Camus (npm `camus-cli`, public alpha through 0.4.33 as of mid-Sep) is the local control plane for people who already have coding agents and keep losing the night to self-graded “done.” A maker produces the candidate; a **separate reviewer** challenges the exact same candidate; configured checks arbitrate what they can; **you** decide what ships. The deterministic kernel owns state, budgets, Git custody, recovery, and evidence so swapping models does not redefine “trusted.”

The native proof gate is the thesis in one loop: Claude writes, Codex (a competing model) reviews every change, and the repo’s own type-check and tests have the final word. Nothing in the loop — Claude included — can approve itself. Postures matter: full loops while P0/P1/P2 findings remain (round cap 3); oneshot does one review and one repair with no re-review — verify still decides. Flexible Build stays advisory: you inspect and accept; Camus never auto-lands. Native proof gate ends in a verified **local** commit and never pushes. Stalled review becomes a decision on your desk instead of burned rounds; crashes resume without redoing proven work.

Product direction after 0.4.21 freezes production code while a design-partner wedge tests editable acceptance contracts and evidence-bound PR handoffs — explicitly **not** automatic routing or remote workers. Nightcrawler (the earlier bash overnight orchestrator from the same author) is kept as portfolio; new work lives here. Honest alpha limits: verification runs commands from repos you trust; Camus is not an OS sandbox and should never run as root; some seats remain experimental and excluded from automatic admission.

## Why it matters for code review

Always-on harnessed momentum compounds only when overnight candidates meet an independent reviewer and repo-owned gates before anyone treats them as mergeable. Peak-session Claude mastery still wins on a single well-scoped change where coordination tax exceeds the work; continuous factories lose the night when the maker grades itself. FOMO that agents aren’t working overnight is the wrong fear — the right one is waking to local “verified” commits nobody outside the maker session actually checked.
