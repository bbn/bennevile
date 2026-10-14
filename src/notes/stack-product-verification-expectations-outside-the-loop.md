---
title: "Thousands of green unit tests, and the release boundary still caught the bugs"
description: "Oct 6 Paul Stack: when one agent writes the code and its tests, moving tests up or down the pyramid doesn't make them independent. What matters is where the expectations come from and who is allowed to change them, so product-level checks have to be defined and protected outside the implementation loop."
date: 2026-10-06
kind: field-note
source:
  title: "Why Agent-Written Code Needs Product Verification"
  url: https://stack72.dev/why-agent-written-code-needs-product-verification/
project: steward
---

Paul Stack follows up his earlier point that an agent writing both the implementation and the tests can encode the same misunderstanding twice. His team at Swamp has the receipt: "We have had our UAT runs catch real defects at our release boundary, despite thousands of green unit tests. The unit suite did not stop them. The boundary checks did."

## Inverting the pyramid isn't the fix

The popular response is more end-to-end tests and fewer unit tests. Stack argues that changes the level, not the source of truth. Even E2E tests "derived from the same understanding, can confirm the wrong thing convincingly," and acceptance criteria written by the same agent that built the feature move the problem "one level up." His line: "Independence is not a property of the test level. It is a property of where the expectations come from and who can change them." Expectations have to come from a product definition, user research, or domain expertise the agent did not produce, and they have to be protected, because "an agent that can edit a failing product test to make it pass has defeated the purpose."

## What agents changed about the economics

Two things moved. Agents absorb the maintenance that made E2E suites expensive (selectors, fixtures, interface drift), and "discovery-to-fix often takes minutes," which shrinks the old penalty for catching defects late. Neither removes the review step: agents can maintain test mechanics, but "changes to assertions, expected outcomes, or covered capabilities need review outside the implementation loop." The suite should grow "from real product failures, not from an agent's interpretation of what might go wrong." Unit tests keep their place where correctness is defined outside the agent, such as cryptography, pricing engines, regulatory rules, and permission models.

## Why it matters for code review

For a loop that runs unattended, this narrows what a human has to review. It isn't every diff. It's the small set of protected expectations, and every change to them, because those are what let a green run mean anything overnight. Compare [an overnight agent PR whose green tests never ran the real path](/posts/holt-overnight-agent-pr-eleven-green-tests-never-ran/), [37 agents whose green suite missed two bugs](/posts/duin-37-agents-green-suite-missed-two-bugs/), [the two independences a dark factory needs](/posts/camplight-dark-factory-two-independences/), and [proving a bug red before trusting the fix](/posts/cockayne-twenty-one-green-fixes-prove-bug-red-first/).
