---
title: "Same model, up to 5× the cost: the harness is on the invoice"
description: "Sep 16 HarnessTax (Pan et al., UC Berkeley/Arena): 21 model×harness pairs on SWE-bench Lite and Terminal-Bench — success moves a few points; cost up to 5×. Claude Code ~2× Pi on shared models."
date: 2026-09-16
kind: paper
source:
  title: "HarnessTax: How Much Does the Harness Matter for Coding Agents?"
  url: https://harnesstax.github.io/
project: steward
---

Always-on factories treat the model as the scarce resource and the wrapper as décor. [HarnessTax](https://harnesstax.github.io/) — Melissa Z. Pan, Shuo Yang, Negar Arabzadeh, Wei-Lin Chiang, Ion Stoica, and Matei Zaharia (UC Berkeley and Arena, Sep 16) — flips the ledger. Seven models × three harnesses (Claude Code, Codex CLI, Pi) × thirty tasks each from SWE-bench Lite and Terminal-Bench 2.0, three attempts per cell, costs on a fixed Sep 1 direct-API rate card, 100-turn cap, high-effort native settings. The harness moved success by about **±2 pp** on SWE-bench Lite and **±5** on Terminal-Bench. It moved the bill by up to **5×**.

The sticky receipt is Claude Fable 5 on SWE-bench Lite: **97.8%** in Claude Code vs **96.7%** in Pi (intervals almost entirely overlap) at **$1.33** vs **$0.67** per attempt. Across shared models, Claude Code ran about **2.0×** Pi and **1.6×** Codex on SWE-bench Lite cost; GPT-5.6 Sol was **$1.54** in Claude Code vs **$0.441** in Pi. Pi’s four-tool surface (read/write/edit/bash) and thin first-call context sit on the study’s cost–success frontier more often than the vendor-native stacks. Sample size is honest: thirty tasks, wide bootstrap intervals — small rank gaps are not findings. What survives is the invoice claim: token price is fixed by the vendor; tokens *spent to finish* are a harness choice.

Read next to [Harness or model?](/posts/harness-or-model-isolating-harness-effect/) (same-model quality contrasts near zero on a private suite) and [SoL-Pi](/posts/sol-pi-efficient-agent-harness-loops/) (cutting traffic ~45–49% while matching Pi). Those ask whether the wrapper wins on accuracy or learns to spend less. HarnessTax asks what continuous factories already feel overnight: the always-on loop can be the line item that kills the always-on strategy.

## Why it matters for code review

Steady verified momentum beats bursty Claude Code mastery only if the overnight loop stays economically runnable. A factory that keeps verification hot 24/7 on a 2×-dearer wrapper is buying FOMO with margin; a factory that measures **cost per verified solve** across harnesses can keep modest throughput compounding. Peak-session heroics hide the tax — you leave before the bill arrives. Review the harness like merge rate: if unattended exploration cannot get cheaper without losing the gate, continuous capacity is just a more expensive morning queue.
