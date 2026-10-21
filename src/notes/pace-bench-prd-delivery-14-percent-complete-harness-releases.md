---
title: "PACE-Bench: agents land most of a PRD but only 14% of whole features, and harness releases help less than they seem"
description: "Oct 19 arXiv paper from Zhejiang University and Alibaba. On 43 enterprise feature requests with 750 audited acceptance points, the best agent fully delivered six; unfinished work and missing wiring caused 72% of lost credit. Three in-house harness releases moved the mean from 59.4 to 63.0 on the same model, inside the error bars."
date: 2026-10-19
kind: paper
source:
  title: "When Coding Agents Outpace Review: Evaluating PRD-Driven Development in Mature Enterprise Repositories"
  url: https://arxiv.org/abs/2610.26394
project: steward
---

Liu and colleagues at Zhejiang University and Alibaba's Taobao and Tmall group built [PACE-Bench](https://github.com/TianqiLiu1/PACE-Bench) because the question a reviewer actually faces is not "does this pass a test" but "did the agent deliver the whole product requirement". The benchmark is [43 enterprise tasks taken from mature repositories, scored against 750 expert-audited acceptance points](https://arxiv.org/abs/2610.26394). It is a useful corrective for anyone counting merged pull requests from an always-on fleet: partial work looks like progress until somebody checks it against the spec.

## Most of the parts, few whole features

Across eleven model and scaffold combinations, [most scores land between 52.1 and 78.1 out of 100, yet the best configuration fully delivers only 14.0% of tasks](https://arxiv.org/abs/2610.26394), six of 43. The leading model scores about the same in [a shared minimal scaffold and in its own Codex scaffold, 78.1 versus 76.8, with identical complete-delivery rates](https://arxiv.org/html/2610.26394). The losses cluster: [incomplete implementation and missing integration together account for 72.0% of weighted lost credit](https://arxiv.org/html/2610.26394). Agents write the component and forget to register it, wire the entry point, or ship the tests. Surface checks are almost always met, with [naming-contract scores between 89.9 and 95.5 while test-delivery scores range from 22.3 to 55.3](https://arxiv.org/html/2610.26394), which is exactly the kind of gap a skimming reviewer misses.

## The grader is steadier than the agent

The scoring holds up. Empty, unrelated, and borrowed patches all [score zero, a patch with only the expected names and empty bodies scores 4.03, and the accepted reference scores 98.35](https://arxiv.org/html/2610.26394). Re-running the agent moves results far more than re-running the judge: on the same cases, [execution varies about 3.7 times more than judging](https://arxiv.org/html/2610.26394). For a team running agents continuously, that argues for a stable acceptance check over trusting any single run.

## Harness work, measured honestly

The paper's last section is the part for factory builders. The team used the benchmark's failure traces to revise their own platform's harness, for example replacing flat context injection with [domain, module, and API context fed at the matching task stage under the same budget](https://arxiv.org/html/2610.26394). Three releases on the same Opus model and task suite [raised the mean from 59.4 to 63.0](https://arxiv.org/abs/2610.26394). The appendix is candid about the size of that: [standard errors are about 3.9 points per release, and each release fully completes just one of 43 cases](https://arxiv.org/html/2610.26394). Simply adding repository knowledge did nothing, with [deltas from minus 1.51 to plus 0.69 points](https://arxiv.org/html/2610.26394). The loop of diagnosing from traces, revising the harness, and rerunning unchanged tasks is the right shape, but this is evidence that harness gains are slow and noisy, not that a better loop alone closes a 14% delivery rate. Compare [AI SDK's factory putting a Verifier on the real diff](/posts/vercel-ai-sdk-software-factory-measured-throughput/) and [CodeHealth predicting review token cost](/posts/codehealth-predicts-token-cost-agentic-review-465-prs/).
