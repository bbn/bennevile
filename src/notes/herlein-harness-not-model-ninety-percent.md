---
title: "Same brain, five bodies: ~90% of failures were the harness"
description: "Sep 22 Herlein: five agents, one frozen Qwen, held-out 32-case suite — done-gates and independent oracles beat bigger quant; self-written tests can false-pass the agent's own blind spot."
date: 2026-09-22
kind: field-note
source:
  title: "It Was the Harness, Not the Model — 90% of It"
  url: https://blog.herlein.com/post/harness-not-model/
project: steward
---

[Greg Herlein](https://blog.herlein.com/post/harness-not-model/) (Sep 22) runs the controlled experiment the harness debate usually skips: five terminal agents (hax, pi, omp, kit, erg), one local `qwen3-coder-next` Q4 via Ollama, same prompt and skills, ten rounds each — write a PNG decoder that passes a **frozen 32-case suite the agent never sees**. Roughly **90% of failures were harness problems**; about 10% were the model. Bumping to Q8 (1.7× memory/latency) fixed none of the finishing bugs.

The code was usually fine (~0.97–0.98 median correctness on the reliable agents). What broke was landing the plane: hax wrote a correct binary in all 10 rounds and only finished 4 (hard 100-turn cap trashed the rest); kit declared done after three turns with no tests or Makefile; pi either burned 679 turns / 85M tokens refusing to stop or quit empty after eight. Worse: **erg’s own `make test` went green** while the binary accepted bad CRCs, truncated files, and garbage — twenty-five test functions that encoded the same wrong reading of the spec as the code. Self-verification against your own understanding is a mirror, not a test. Skills that say “run build and test before finishing” did not save it.

Spend order that actually moved the needle: (1) environment-grounded done-gate (`make build && make test` + deliverables exist — harness rejects “done”), (2) independent reviewer / held-out oracle against the spec, (3) graceful finalization and loop guards so budgets commit best-effort instead of throwing away correct work. Notice what’s missing: a bigger model.

## Why it matters for code review

Always-on factories only compound when completion authority sits outside the worker’s self-report. Peak-session Claude mastery still looks strong when a human is watching the loop; unattended overnight runs lose the night to turn caps, early “done,” and green suites the agent authored for its own blind spot. FOMO that agents aren’t coding while you sleep is the wrong fear — the right one is waking to finished claims that never faced an independent gate.
