---
title: "After the factory works: trust, seats, memory, intent"
description: "Aug 27 Travis Frisinger: six months, ~1,700 merges — throughput is the honeymoon; fail-closed gates, calibrated seats, institutional memory, and scarce Purpose form PAAA."
date: 2026-08-27
kind: field-note
source:
  title: "What Matters After the Software Factory Works"
  url: https://aibuddy.software/what-matters-after-the-software-factory-works/
project: steward
---

Travis Frisinger’s Aug 27 memoir is the post-honeymoon receipt for continuous factories. In February he stopped chatting with coding agents and built a loop — issues in, validation in the middle, reports at the end. By June it had merged around **1,700 pull requests**. That number impressed everyone, including him. It is also **the least interesting part**: throughput arrives fast because nothing yet measures whether it should. A plausible change nobody has verified is inventory, not velocity. Every factory post that leads with a big merge count is describing this phase.

Trust did not come from sterner prompts. It came from structure: **gates that fail closed** (no evidence, no merge; broken gate machinery stops rather than shrugs), **adversarial review** charged to attack from named angles rather than nod, and **architecture decision records** the system must obey with conformance checked mechanically. A rule without an enforcing check is an opinion a factory will route around. Silence and health look identical until something is charged with telling the difference — he learned that when a resource-limit stop went unnoticed for two days.

Agents stopped being scripts and became **seats**: a product seat that grooms intent, review seats that file dissent by name, ledgers that ask whether each seat’s findings survive scrutiny. Work converts to agents where output can be verified mechanically; people remain where judgment *is* the verification. Agreeable reviewers are a defect. The open half is **institutional memory** — not bigger context windows — so month six is cheaper than month one; without it you have an expensive amnesiac. And the scarcer input is **intent**: when he went quiet for two weeks the factory hunted, optimizing noise with no fresh direction. Machinery can execute and invent candidate intent; it cannot reliably decide what is worth wanting.

Those lessons compress to **PAAA** — Purpose, Articles, Actors, Artifacts. Throughput without trust is Actors without Articles; calibrated seats are Actors done properly; memory is Artifacts; the quiet fortnight is Purpose. On an ordinary Tuesday: ask to extend data import and say why (Purpose); an append-only decision record plus a mechanical gate (Articles); product seat splits work, builder proposes in-place mutation, security seat attacks by charge (Actors); rejected PR, dissent, and a fresh record teach the next run (Artifacts). What he built was not a pipeline but a small organization in a box.

## Why it matters for code review

Overnight and always-on factories beat bursty peak-session mastery only after the honeymoon instruments exist. Merge-rate under sustained load without fail-closed gates and calibrated seats is FOMO dressed as velocity. Pair continuous harnessed throughput with an explicit audit of direction, enforceable articles, seat calibration, and where memory lives — the gaps are the next six months of factory work, not another overnight model binge.
