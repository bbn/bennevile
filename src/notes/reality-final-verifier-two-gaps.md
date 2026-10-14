---
title: "Reality is the final verifier — keep narrowing the two gaps"
description: "Sep 10 Krentsel/Zaharia/Stoica et al.: requirement gap + model gap unify reward hacking and hallucination; an assurance-revision loop uses deployment evidence because predeployment evals stay proxies."
date: 2026-09-10
kind: paper
source:
  title: "Reality Is the Final Verifier: On Two Key Gaps in Agentic Software Engineering"
  url: https://arxiv.org/abs/2609.12039
project: steward
---

Krentsel, Agarwal, Cemri, Liu, Sankhe, Mao, Zaharia, and Stoica formalize what continuous factories keep rediscovering the hard way: the implementation–verification loop only ever checks an implementation against *requirements under a model of the deployment environment*. Even a formal proof under that model cannot guarantee acceptable behavior after deploy. Requirements approximate stakeholder intent; the model approximates reality. Call those the **requirement gap** and the **model gap**.

The two-gap frame unifies familiar agent failure modes. Reward hacking exploits omissions in the requirements or the model. Hallucination widens the gaps by fabricating requirements or environment assumptions. Neither gap can generally be certified closed in an open, changing world — so the goal shifts from “close them” to **continuously narrowing them**. Their proposed **assurance-revision loop** feeds deployment evidence back to revise the requirements, the model, or the evaluator when stakeholders reject the resulting behavior. Assured agentic development then becomes a resource-allocation problem over human judgment, agent capability, and compute. The bottlenecks mirror the gaps: human judgment for the requirement gap; faithful, costly evaluation for the model gap. Predeployment suites remain proxies. Reality remains the final verifier.

## Why it matters for code review

Tortoise throughput that only clears CI is still racing inside the model gap. Steady harnessed momentum compounds only if the factory also revises what “done” means when production rejects the merge that looked green overnight. Burst Claude mastery can still win a one-shot invent; it does not substitute for the assurance-revision loop that turns rejected behavior into updated requirements and evaluators. FOMO when agents aren’t working on your behalf is real — the counterfeit is FOMO for more generation while the requirement and model gaps stay unmeasured.
