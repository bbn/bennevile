---
title: "PulseEngine: the agents arrived before the factory, and 26 checks were found that could not fail"
description: "Oct 21, Ralf Anton Beier measures 20 agent-written PulseEngine repositories: changes got smaller and features gave way to fixes, while issue trackers held 26 confirmed checks that passed without checking, surfaces that disagreed about the same fact, and an agent-filed backlog outgrowing human decisions. His fix is manufacturing's: gates proven to fail, one source per fact, and a cap only on the queue waiting for people."
date: 2026-10-21
kind: field-note
source:
  title: "The machine arrived before the factory — PulseEngine"
  url: https://pulseengine.eu/blog/the-machine-arrived-before-the-factory/
project: steward
---

Ralf Anton Beier's argument is that manufacturing built standards, gauges, and inspection before it had machines, and software got the machine first. Agents are the machine. The factory is everything that checks them, and in his reading it mostly hasn't been built. PulseEngine has run agents inside oracles and gates since March 2026, and the post measures what that produced across the 20 non-archived repositories with enough history.

Some of it went well. In all 20, the median change touches one or two source files, and in rivet the 90th percentile of files per change fell from 20 to 4 between March and October (relay went from 37 to 2). The feature share fell in 16 of 20 repositories as work shifted toward fixes. Codebases grew fast: rivet went from about 56,000 to 191,000 lines of Rust.

The failures are the useful part. Searching issue titles for words like *silent*, *no-op*, *exits 0*, and *cannot fail* turned up 28 matches in rivet and relay, of which **26 were real checks that passed without checking**: a supply-chain gate that can't fail because CI creates the config it should verify, a verification gate blind to one directory, a coverage target that silently stopped building. One mutation gate read a path the tool never wrote and reported 210 surviving mutants as zero **for four months**. A second class was drift: the command line, MCP server, HTML export, and dashboard each computed the same fact and disagreed, and much of October's fix wave repaired that. Open issues grew from 6 to 34 in rivet and 8 to 67 in relay, mostly filed by the agents' own audits.

## Why it matters for code review

This is what continuous agent work looks like once the novelty wears off: discovery runs all the time, and the bottleneck becomes whether the gates can actually say no and whether humans can keep up with decisions. Beier's prescriptions are mechanical. Test that each gate can fail, and run a meta-check in CI that fails when a guard's self-test doesn't depend on the code it guards. Keep one evaluation core per fact, with a differential test across every surface. Leave agent discovery uncapped, but cap the queue waiting for a human, and let an issue skip that cap only when a failing test in the repository proves an oracle exists, since an agent that labels its own work exempt is writing both the fix and the exemption. Four things stay human: deciding what correct means, deciding what no oracle can, acting on an alarm, and the signature. Compare [Osmani on light and dark software factories](/posts/addy-osmani-software-factories-light-and-dark/), [Augment on station gates that stop the line](/posts/augment-quality-gates-station-jidoka/), and [DoneGate on why exit zero is not done](/posts/donegate-exit-zero-is-not-done/).
