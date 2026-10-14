---
title: "Compressing file reads isn't the bill — tool-schema filtering is"
description: "Aug 19 Chen/Shi (Paritok): instrumented Claude Code/Codex sessions — tool filtering saves ~21–57K tokens/turn (linear); content compression ~2%/turn but compounds ~3,350 N²; single-shot SWE-bench quality ≠ multi-turn cost."
date: 2026-08-19
kind: paper
source:
  title: "An Empirical Cost Attribution of Context-Compression Gateways in Multi-Turn Coding Agents"
  url: https://arxiv.org/abs/2609.22114
project: steward
---

[Chen and Shi](https://arxiv.org/abs/2609.22114) (Paritok, Aug 19; arXiv 2609.22114) instrument a production non-destructive compression gateway between coding agents (Claude Code, Codex) and frontier models, then toggle three levers independently: **tool-schema filtering**, **content compression** of file reads/tool output, and **history summarization**. The field assumption they puncture: a strong single-shot compressor (Paritok-4B retains **86.5%** SWE-bench Lite quality at **25.7%** size) does *not* imply proportional multi-turn dollar savings. Turn count — not compression rate — is first-order; cache-read pricing (~10× cheaper re-sent prefix) changes which savings matter.

Isolated A/Bs: tool filtering removes a fixed **~21K–57K** tokens every turn (linear in \(N\)) and is the only unambiguously positive lever — **~20:1 to 33:1** vs content savings on MCP-heavy sessions. Content compression shaves only **~2%** of the cache-priced prefix per turn, but compressed blocks accumulate and re-send, so cumulative saving fits **≈ 3,350 \(N^2\)** and overtakes the tool filter near **\(N ≈ 6\)** before the context window caps it. Non-destructive recall is required for exact edits and costs a **bounded** one-segment waste per recall — not a multiplicative blowup — so content compression nets positive on long, low-recall sessions and loses on precise multi-line edits that pull originals back. Practical hierarchy: filter tools always (never stub core exec), compress content when sessions are long and recalls rare, measure end-to-end dollars at the right cache tier, and stop citing single-shot quality as a multi-turn cost claim.

## Why it matters for code review

Continuous verification under volume dies on invoice before it dies on judgment. Factories that keep agents warm overnight need the same cost decomposition: tool bloat paid every turn will outrun a glamorous compressor, and FOMO for “always-on” without turn-count discipline just buys a more expensive morning queue. Review the gateway like merge rate — which lever moved dollars under real multi-turn trajectories, not which benchmark retained solve quality in one shot.
