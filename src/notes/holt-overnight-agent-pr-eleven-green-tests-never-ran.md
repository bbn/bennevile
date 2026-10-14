---
title: "An overnight agent PR had eleven green tests, and retries never happened in production"
description: "Casey Holt approved a tidy background-agent PR adding webhook retries. Three weeks later a customer found zero retries: the config key sat where the loader never read it, and every test built the policy by hand. Holt now reads the task first, the tests second, and runs every agent change once with real configuration."
date: 2026-09-30
kind: field-note
source:
  title: "How to Review an Agent's Pull Request When You Did Not Type the Code"
  url: https://futurion.blog/how-to-review-an-agents-pull-request-when-you-did-not-type-the-code/
project: steward
---

Casey Holt's lesson started with a PR that was waiting in the morning. "A background agent had picked up the ticket overnight": retry webhook deliveries up to five times on a 5xx. The PR had a new `RetryPolicy` class, a config entry, "eleven new tests, all green," and a description "clearer than most humans write." Holt approved it. Three weeks later a customer asked why deliveries failed on the first 503. The agent's key lived under `webhooks.max_retries`, the settings loader reads `delivery.webhooks` and silently ignores unknown keys, so the policy fell back to zero retries. "Not one of them went through the real config path."

## Reviewing it like a colleague's code was the mistake

With a colleague, Holt could assume they ran it locally and understood the loader. "With an agent's PR, none of that can be assumed. Nobody on the team had typed the code, and nobody had run it outside the test suite." The ticket also asked for retries on connection timeouts. The PR skipped them, and "its description was confidently complete about what it had done."

## The order of review changed

Holt now reads the task before the diff, then the file list (the PR never touched the settings loader, which "should have been a question"), then the tests before the implementation. The question for each test is "what would have to be broken for this test to fail?" The answer here was only the class least likely to be wrong. Then comes running the change once in a realistic path: "When nobody typed the code, nobody has run it." The agent's own explanations count as "leads, not evidence." Asked about the key, it "confidently said the settings loader 'merges all keys under webhooks into the delivery config.' It does not." Large agent PRs go back to be split, because at a thousand lines "the honest outcome... is usually a rubber stamp." Tickets for background agents now name the integration points and require one test through the real configuration, which "has caught two config mismatches before review."

## Why it matters for code review

Work that arrives overnight with green checks looks like progress, and this is the case where it was not. The harness kept moving, but the only real verification was a morning reviewer who leaned on habits built for human authors. "I was the reviewer of record on code nobody on the team wrote or ran." Steady unattended throughput only compounds if something along the way runs the change for real, either in the harness or in the review. Compare [proving a bug red before trusting a green fix](/posts/cockayne-twenty-one-green-fixes-prove-bug-red-first/), [agent PRs that state what they did not run](/posts/vigil-factory-verification-admits-what-it-did-not-run/), and [evidence gates that move review cost upstream](/posts/associates-ai-evidence-gate-twelve-minutes-cost-upstream/).
