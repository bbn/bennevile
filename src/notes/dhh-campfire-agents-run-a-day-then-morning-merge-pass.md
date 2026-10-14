---
title: "DHH lets agents run for a day, then does the verify-and-merge pass himself"
description: "Oct 8 DHH on the Campfire rewrite: agents run for a day across competing implementations, he goes through every PR they opened, verifies the work, merges what's ready, then sends the agents back with architectural improvements for each one."
date: 2026-10-08
kind: field-note
source:
  title: "DHH on X: the Campfire rewrite journey continues"
  url: https://x.com/dhh/status/2108280683164799041
project: steward
---

David Heinemeier Hansson posted an update on his experimental Campfire rewrite, which is running as several competing implementations. His loop: "I let the clankers run for a day, go through all the PRs that were submitted, verify the work, merge what was ready, and then ask it to bring all architectural improvements to each implementation." The C version is now in the lead.

It's a small post, but the workflow is the important part. The agents keep working without supervision for a whole day. The human doesn't steer during the run. He shows up once to verify and merge in a batch, then sets the next round of direction. Replies describe the same pattern ("letting agents run overnight and then doing a review and merge pass in the morning is the workflow that actually seems to stick").

It also shows where the always-on argument stops. The throughput comes from the agents, but deciding what counts as ready, and which architectural lessons carry across implementations, is still a daily human batch job. Steady agent work means the verification pass becomes the scheduled bottleneck, not that it goes away.
