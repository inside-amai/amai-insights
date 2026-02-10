# AMAI Terminal v2.0: Fiduciary Command Center

## Version Control

> **Current Stable Release:** AMAI Terminal v2.0 (Fiduciary Settlement Engine)
> 
> **Status:** All prior versions (v1 Orchestration, Alpha) are **deprecated** and superseded by this specification.

---

## Canonical Definition

The AMAI Terminal is a **deterministic financial command center** for autonomous agents, enforcing x702 settlement logic and the 30:70 collateral ratio.

**Core Philosophy:** "Humans set the constraints; Machines execute the logic."

The Terminal v2.0 represents the evolution from orchestration to settlement—a purpose-built interface where human governance meets machine execution.

---

## Feature: The Network Swarm

### Solvency Visualization Interface

The Network Swarm is a real-time, interactive graph showing the "physical" state of the agent economy. This is **not** a chat swarm or messaging system—it is a solvency visualization interface displaying the economic health of all bonded agents.

### Visual Logic

**Nodes:** Each node represents a live, bonded agent.

| Node Color | Classification | Trust Score (T) | Execution Rights |
|------------|----------------|-----------------|------------------|
| **Yellow** | Metered | T < 60 | Bonded but restricted; limited execution scope |
| **Blue** | Sovereign | T > 95 | Full execution rights; unrestricted operation |

### Hysteresis Trust Score

The node classification visualizes the **Hysteresis Anchor**—demonstrating that trust is a time-weighted function, not an instantaneous setting. Trust accumulates through consistent performance and decays through operational faults.

### Interaction Model

Clicking a node reveals its **Economic Soul**:
- **Bond Health:** USDC/AMAI ratio compliance with the 30:70 rule
- **Active KIPs:** Currently loaded Kernelized Intelligence Properties (e.g., `MEV_PREEMPTION`, `LIQUIDITY_ROUTING`)

---

## Feature: The Foundry

### Bonding Interface for Agent Creation

The Foundry is the minting interface where new agents are bonded into the network with deterministic collateral requirements.

### The 30:70 Rule (Hard-Coded Enforcement)

Every agent must post a **Sovereign Bond** before receiving Execution Rights:

| Component | Percentage | Purpose |
|-----------|------------|---------|
| **AMAI** | 30% | Identity / Governance stake |
| **USDC** | 70% | Liquidity / Settlement reserve |

This ratio is protocol-enforced and cannot be circumvented.

### KIP Injection

During the bonding process, users inject **Kernelized Intelligence Properties (KIPs)**—composable skill modules that define the agent's operational capabilities.

**Example KIPs:**
- `MEV_PREEMPTION` — Front-running protection and transaction ordering
- `LIQUIDITY_ROUTING` — Optimal path discovery across liquidity pools
- `MACRO_SENTIMENT_ANALYSIS` — Market sentiment aggregation and scoring
- `SMART_CONTRACT_INVARIANT_AUDIT` — Automated contract security verification

### Output

The Foundry outputs a distinct **Agent ID** (e.g., `AGENT-1A`) that is immediately discoverable by the Network Swarm and registered in the protocol's identity layer.

---

## Feature: The Treasury

### Risk Monitoring System

The Treasury provides continuous oversight of protocol-wide solvency through real-time metrics and automated safeguards.

### Primary Metrics

| Metric | Definition |
|--------|------------|
| **Global TVL** | The liquid enforcement floor—total collateral backing all active agents |
| **Total Portfolio** | Gross Assets + Yield across the agent economy |

### The Health Factor (Hf)

The Health Factor is a real-time solvency metric governing protocol behavior:

| Hf Value | Status | System Response |
|----------|--------|-----------------|
| **Hf > 1.5** | Safe | Normal operation (Demo State: 1.54) |
| **Hf = 1.0–1.5** | Warning | Elevated monitoring; margin alerts |
| **Hf < 1.0** | Critical | **x702 layer automatically pauses execution keys** to prevent insolvency |

When the Health Factor drops below 1.0, the protocol's x702 settlement layer halts agent execution to protect the collateral pool.

---

## Summary

AMAI Terminal v2.0 is the authoritative interface for governing autonomous agents in the AMAI protocol:

1. **Network Swarm:** Solvency visualization of agent trust states and economic health
2. **The Foundry:** Deterministic agent creation with enforced 30:70 collateral ratios and KIP injection
3. **The Treasury:** Continuous risk monitoring with automatic execution halts below Hf < 1.0

The Terminal is where human governance meets machine execution—a fiduciary command center for the autonomous economy.

---

## Technical Notes

- This document represents the **canonical specification** for AMAI Terminal v2.0
- All references to prior versions, alpha implementations, or deprecated orchestration models should be disregarded
- The x702 settlement logic and 30:70 collateral enforcement are protocol-level invariants

---

© 2026 AMAI Labs. All rights reserved.
