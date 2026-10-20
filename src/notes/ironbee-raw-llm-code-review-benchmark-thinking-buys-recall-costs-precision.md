---
title: "IronBee's raw-model review benchmark: top models match the best review tools for cents a PR, and more thinking trades precision for recall"
description: "Oct 19, IronBee AI. It ran 21 raw models, up to three effort levels each, three times over Martian's 50-PR Code Review Bench: 7,980 reviews, all open. Ranked with 21 commercial tools, the top group holds twelve model configurations and three tools. Claude Sonnet 5.5 at low effort scored highest for $0.14 and 9 seconds a PR. At their highest effort level most models found more issues but were less precise. IronBee says it will soon launch its own review tool."
date: 2026-10-19
kind: field-note
source:
  title: "The Honest Raw LLM Code Review Benchmark: 21 Models, 7,980 Reviews, Every Number Open"
  url: https://ironbee.ai/blog/the-honest-raw-llm-code-review-benchmark
project: steward
---

[IronBee AI](https://ironbee.ai/blog/the-honest-raw-llm-code-review-benchmark) asked how good a model is at code review with no harness at all: one API call with the PR title, description, changed files and diffs, no tools and no repository access. It ran 21 current models at up to three effort levels, 58 configurations in all, three times each over the 50 real pull requests in [Martian's Code Review Bench](https://github.com/withmartian/code-review-benchmark), for 7,980 reviews. Scoring used the benchmark's own matching pipeline with a three-model judge panel that never included the reviewed model's family. The harness, prompts, every review, verdict and cost are [published](https://github.com/ironbee-ai/code-review-benchmarks).

The [headline results](https://ironbee.ai/blog/the-honest-raw-llm-code-review-benchmark), by F2, the benchmark's default score, which weights recall four times as heavily as precision:

- **The best raw models review as well as the best tools.** Ranked alongside the 21 tools on Martian's [public leaderboard](https://codereview.withmartian.com/?mode=offline), the top group holds twelve model configurations and three tools, with gaps inside the noise. The tools wrote fewer findings and found fewer issues.
- **The top group is cheap.** Claude Sonnet 5.5 at low effort scored highest overall, at $0.14 and about 9 seconds per PR. Muse Spark 1.3 at low effort reached the top group for $0.06, and DeepSeek V4.1 Flash reached the second group for $0.025.
- **More thinking buys recall and costs precision.** At their highest level, 13 of 18 models found significantly more issues and 11 were significantly less precise. For the top models the two cancelled out, and the highest level cost up to 3.5 times as much and usually took 3.5 to 18 times as long.
- **Precision is a lower bound.** IronBee checked 48 of its "false positives" against the code and found 13 were real issues missing from the human answer key.

The post lists its own limits. The tool reviews on the leaderboard date from January to August 2026, while the models ran in October. A tool's time includes its queue and posting to GitHub, so 3 to 24 minutes for tools against 9 to 98 seconds for models is not like for like. A different reasonable prompt moved one model by up to 7 points, and the public PRs may have been in training data. It also says IronBee will soon announce its own review tool, which it says scores ahead of the tools in this comparison on its own runs.

## Why it matters for code review

If a raw model can produce a top-tier first-pass review in seconds for a few cents, the cost of reviewing every change around the clock stops being the constraint. What is left is the trade the effort results expose. Turning up thinking surfaces more real issues but also more comments a person has to read and dismiss, so under heavy PR volume the reviewer's attention, not the model bill, decides the right setting. The disclosure that the publisher is about to sell a review tool is the usual reason to want benchmarks like this run by someone else, and IronBee's open data makes that possible. Read with [GitHub's ReviewBench](/posts/github-reviewbench-review-agents-graded-on-what-they-find/), [CodeRabbit on the Martian benchmark](/posts/coderabbit-martian-benchmark/), and [Saagar Patel's night-fleet verification bill](/posts/saagarpatel-night-fleet-654-prs-verification-bill/).
