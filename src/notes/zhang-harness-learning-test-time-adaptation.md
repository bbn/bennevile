---
title: "Harness learning: train a proposer to revise the harness from execution feedback"
description: "Sep 28 Zhang et al.: meta-learn harness edits with a frozen solver; 4B proposer lifts mean single-step OOD Reasoning Gym scores 0.32→0.62 and beats its 35B teacher on average; HotpotQA training transfers to MuSiQue/2Wiki."
date: 2026-09-28
kind: paper
source:
  title: "Harness Learning Enables Generalizable Test-Time Adaptation"
  url: https://arxiv.org/abs/2609.35738
project: steward
---

Zhang, Liu, Wang, Tajwar, Arora, Salakhutdinov, Khashabi, Song, and Zanette treat the agent as a **joint** of frozen solver weights and an editable harness — then ask whether a separate **proposer** can learn to revise that harness from execution feedback the way gradient updates revise weights. **Harness learning** is meta-learning over executable programs: the outer loop trains the proposer with RL (task performance of the revised harness as reward, optionally after SFT on teacher edits); the inner loop applies the proposer at test time, refining the harness over successive rounds with **no parameter-space update**.

On Reasoning Gym, SFT then RL lifts mean single-step revision scores on **21 unseen** families from **0.32** (base proposer) to **0.62**, and the trained **4B** proposer beats its **35B** teacher on average proposal quality (0.62 vs 0.56) under the same protocol. Policies trained on individual revisions already keep improving harnesses across multi-round adaptation; training on revision *sequences* does not consistently help. In multi-hop QA, a HotpotQA-trained proposer transfers to MuSiQue and 2WikiMultihopQA; sequential rounds beat even oracle best-of-80 independent revisions on the held-out benchmarks. Training also cuts failed or zero-scoring proposals — more viable candidates reach selection each round.

## Why it matters for code review

Always-on factories already edit harness code overnight; this paper says the **revision rule itself** can be learned and transferred. Review the proposer like any other merge: demand held-out task families, development-vs-eval question splits, and evidence that successive rounds still improve after the first edit — not a one-shot prompt tweak dressed as continuous improvement. FOMO that agents sit idle while you sleep is answered when experience compounds into better harness programs without touching the model weights that legal and ops teams freeze.
