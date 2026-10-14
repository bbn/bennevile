---
title: Human judgment doesn’t leave the factory—it relocates
description: "Osmani on lights-on factories: encode taste in the environment, budget verification like performance, and keep ownership on what ships."
kind: field-note
date: 2026-08-21
source:
  title: "Human judgment doesn't leave the software factory. It relocates."
  url: https://addyosmani.com/blog/human-judgment-doesnt-leave-the-software/
project: steward
---
You may not need a factory—stock harness + specs + constraints go far. Factories earn their keep for event-driven queues, isolation, consistent handoffs, and evidence when parallel runs collide.

Cognitive bandwidth doesn’t scale with agent count. Mis-prompting the wrong session, green tests that rewrote assertions, and merging a feature you later couldn’t explain are the lived failure modes. Verification budget: fast checks early, heavy checks before draft PR; taxonomy of success/flawed/blocked/manual runs with per-stage timing.

Ownership list still human: problem choice, architecture, quality bar, which signals to trust, when evidence suffices. “The agent wrote it” is not an incident response.

## Why it matters for code review

Review capacity is the scarce resource factories must optimize for. Place humans where automated back-pressure is weak; don’t confuse checklist volume with quality.
