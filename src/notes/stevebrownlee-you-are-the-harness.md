---
title: "Upstream specs beat overnight catch-up: you are the harness"
description: "Sep 17 Steve Brownlee: pull decision latitude out of the coding agent before the first token — assertable Given/When/Then, JSON phase contracts, convention profiles — so runtime review loops have less hallucination to catch."
date: 2026-09-17
kind: field-note
source:
  title: "You are the AI agent's harness"
  url: https://www.stevebrownlee.com/you-are-the-harness/
project: steward
---

Steve Brownlee’s Sep 17 essay is a productive counterweight to the always-on factory story. The fashionable stack puts **runtime** harnesses downstream of generation — review agents, verification loops, multi-pass fix-ups that catch hallucinations after they land. Brownlee went the other way: remove the model’s decision latitude **before** the first coding token, so there is less wrongness left for overnight catch-up to find.

The claim is sharp. In an LLM-assisted stack, *you* are the harness — the analytical work of decomposing problems, naming constraints, and writing assertable acceptance criteria. Specs, rule files, and convention profiles are durable expressions of that work; they are not the harness itself. If that human capacity is weak, no amount of overnight verification apparatus saves you.

His pipeline is three narrowing translations, not a longer Claude session: (1) prose + wireframes → structured markdown with Given/When/Then ACs the team signs off; (2) that markdown → a miserable-to-read JSON plan — phases, exact files, exemplar paths, rule files, verification commands, AC IDs; (3) each phase → a fresh-context coding agent that reads only its contract and commits when the named commands pass. The orchestrator never writes code. Specialists never share working memory. Reliability is specialization plus constraint, not a smarter peak session.

The compiler analogy he starts with is deliberately broken. A real IR is deterministic; his JSON is not. What transfers is **where decisions live**. “Pagination works correctly” still leaves the agent choosing endpoint, params, status, metadata. An AC that names `GET …?page=1&page_size=10` against a fixed 30-row fixture with exact body and metadata leaves translation, not interpretation. Same move for conventions: “follow `users.ex`” made agents do literary analysis of Elixir; a human-authored `ecto-multi-context.md` profile turns the same rule into a checklist the implementer follows mechanically.

Two registers keep the harness alive: live analytical work on each new spec, and an accumulated register of rules/profiles promoted from recurring review noise. Both can compensate for the other — and both fail closed into the model’s training priors when underspecified. Brownlee’s closing question relocates the scarcity: where do meaningful decisions currently live — curatable rules, careful specs, undocumented tacit knowledge, or model priors? Move them out of the fourth bucket. Overnight factories still need verification; this piece argues the highest-leverage harness work may be the human specification load *before* the fleet starts.

## Why it matters for code review

Continuous verified throughput is not only “agents working while you sleep.” It is also whether morning review inherits diffs that were already constrained by assertable ACs and named gates — or diffs that spent the night inventing what “works correctly” meant. Runtime review loops still matter under volume; Brownlee’s receipt is that the verification tax shrinks when the scarce resource — precise human judgment — is spent upstream of generation, not only on sampling overnight output.
