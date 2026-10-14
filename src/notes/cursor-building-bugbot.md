---
title: "How Cursor built Bugbot: resolution rate, BugBench, and autofix"
description: January 2026 engineering essay on Bugbot versions, resolution-rate metrics, internal BugBench, and Bugbot Autofix beta.
kind: field-note
date: 2026-01-15
source:
  title: Building a better Bugbot — Cursor
  url: https://cursor.com/blog/building-bugbot
project: steward
---
The deeper Bugbot post is about measurement: an AI judge for whether flagged issues were actually fixed by merge time, dozens of experiments, and a path from find → autofix via Cloud Agents.

## Why it matters for code review

Resolution rate beats vanity comment counts. If you run any AI reviewer, steal the metric idea—even if you distrust Cursor’s absolute numbers. Autofix also changes the product category from “comment bot” to “review-and-patch agent.”
