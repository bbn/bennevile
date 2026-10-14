---
title: "Enforcement the agent cannot edit"
description: "Hartman’s Consort (Sep 9) sorts agent frameworks by persuasion vs structure vs hard controls, then argues for immutable tests and gates on a live DB branch the worker cannot bypass."
date: 2026-09-09
kind: paper
source:
  title: "Introducing Consort: A Spec-First Agent Framework for Enforced, Test-Driven Development on Live Database Branches"
  url: https://arxiv.org/abs/2609.09671
project: steward
---
Kevin Hartman’s short systems note starts from a useful taxonomy. Spec-first agent frameworks mostly agree on capturing intent up front (Spec Kit, superpowers, BMAD, GSD, and Consort). What separates them is *how* they enforce discipline on a non-deterministic worker. Three modes: persuasion (prompt rules the model may ignore), front-loaded structure (strong specs, then a trusted build), and controls the agent cannot edit — deterministic orchestrator, human-approved gates, immutable tests, green only against a live branched database.

Consort is built as the third mode: separate role agents for a design lane and a test-driven build lane, driven by an orchestrator the coding agent runs inside but cannot rewrite. The associated claim is framed as a pre-registered hypothesis rather than a finished benchmark win: honesty and maintainability come from tests and gates enforced in code, plus specialized roles that mirror the human ones they replace. The artifact lives at `databricks-solutions/consort`.

## Why it matters for code review

Review and verification fail the same way generation frameworks fail — when “discipline” is a suggestion the agent can soft-delete. Immutable oracles and human-approved gates are the review-capacity story for agent-written code: credit the change only when evidence the worker cannot forge clears. Persuasion-only Agent.md files are not a control plane.
