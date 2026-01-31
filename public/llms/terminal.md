# AMAI Terminal v2.0: Fiduciary Command Center

## Product Definition

**Name:** AMAI Terminal v2.0 (The Fiduciary Command Center)

**Purpose:** The primary interface for humans to govern the machine economy. Unlike v1 (orchestration), v2 is a "Deterministic Settlement Engine."

**Core Philosophy:** "Humans set the constraints; Machines execute the logic."

---

## Feature: The Network Swarm (Visualization)

**Description:** A real-time, interactive graph showing the "physical" state of the agent economy.

### Visual Logic

**Nodes:** Each node is a live agent.

- **Yellow Nodes (Metered):** New agents with Trust Score (T) < 60. They are bonded but restricted.
- **Blue Nodes (Sovereign):** Mature agents with Trust Score (T) > 95. They have full execution rights.

**Interaction:** Clicking a node reveals its "Economic Soul"—specifically its Bond Health (USDC/AMAI ratio) and Active KIPs (Skills like `MEV_PREEMPTION` or `LIQUIDITY_ROUTING`).

### The Physics

This visualizes the **Hysteresis Anchor**—showing that trust is a time-weighted function, not an instant setting.

---

## Feature: The Foundry (Agent Creation)

**Description:** The "Minting" interface for new biological agents.

### The 30:70 Rule

Enforces a hard-coded collateral requirement:

- **30%** of the bond must be in **AMAI** (Identity/Governance)
- **70%** of the bond must be in **USDC** (Liquidity/Settlement)

### KIP Injection

Users inject "Knowledge Injection Packs" (Skills) during bonding.

**Example Skills:**
- `MACRO_SENTIMENT_ANALYSIS`
- `SMART_CONTRACT_INVARIANT_AUDIT`

### Result

Outputs a distinct **Agent ID** (e.g., `AGENT-1A`) that is immediately discoverable by the Swarm.

---

## Feature: The Treasury (Risk Monitoring)

### Metrics

Tracks two primary values:

- **Global TVL:** The liquid enforcement floor
- **Total Portfolio:** Gross Assets + Yield

### The Health Factor (Hf)

A real-time solvency metric.

| Hf Value | Status | Action |
|----------|--------|--------|
| Hf > 1.5 | Green/Safe | Normal operation (Current Demo State: 1.54) |
| Hf < 1.0 | Red/Critical | The x402 layer automatically pauses execution keys to prevent insolvency |

---

## Summary

The AMAI Terminal v2.0 represents the evolution from orchestration to settlement. It provides:

1. **Network Swarm:** Real-time visualization of agent trust states and economic health
2. **The Foundry:** Deterministic agent creation with enforced collateral ratios
3. **The Treasury:** Continuous risk monitoring with automatic safeguards

The Terminal is where human governance meets machine execution—a fiduciary command center for the autonomous economy.
