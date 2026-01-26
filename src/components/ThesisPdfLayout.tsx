import React from 'react';

export const ThesisPdfLayout = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div 
      ref={ref}
      className="pdf-layout hidden bg-white text-black"
      style={{ 
        fontFamily: 'Georgia, Times New Roman, serif',
        width: '210mm',
        padding: '20mm 25mm',
      }}
    >
      {/* Cover Page */}
      <div style={{ pageBreakAfter: 'always', minHeight: '250mm' }}>
        {/* Header */}
        <div className="flex justify-between items-start mb-16" style={{ borderBottom: '2px solid #000', paddingBottom: '16px' }}>
          <div>
            <h1 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '28px', fontWeight: 'bold', margin: 0 }}>
              AMAI Labs
            </h1>
            <p style={{ fontSize: '10px', color: '#666', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '4px' }}>
              Infrastructure & Research
            </p>
          </div>
          <span style={{ fontSize: '11px', color: '#999', fontFamily: 'monospace' }}>2025</span>
        </div>

        {/* Title Block */}
        <div style={{ marginTop: '60mm', marginBottom: '40mm' }}>
          <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#888', marginBottom: '20px' }}>
            THE THESIS
          </p>
          <h2 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '42px', fontWeight: '300', lineHeight: '1.2', margin: 0, marginBottom: '24px' }}>
            The Transition to<br />Machine-First Commerce.
          </h2>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.8', maxWidth: '400px' }}>
            Autonomous systems are outpacing the physical and economic infrastructure that supports them. 
            AMAI provides the foundational system for anchoring identity, reputation, and capital in the agentic web.
          </p>
        </div>

        {/* Abstract */}
        <div style={{ background: '#f8f8f8', padding: '24px', borderLeft: '4px solid #000', marginTop: '40mm' }}>
          <p style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '2px' }}>Abstract</p>
          <p style={{ fontSize: '13px', color: '#444', lineHeight: '1.7' }}>
            This document presents the AMAI thesis: a framework for enabling autonomous economic participation 
            through persistent identity, dynamic reputation, bonded capital, and deterministic settlement. 
            As machine-speed commerce becomes the default, infrastructure must evolve to support agents as 
            first-class economic participants.
          </p>
        </div>
      </div>

      {/* Section 1: The Infrastructure Gap */}
      <div style={{ pageBreakAfter: 'always' }}>
        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#888', marginBottom: '12px' }}>
            01 — The Infrastructure Gap
          </p>
          <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '28px', fontWeight: '400', margin: 0, marginBottom: '16px' }}>
            The Economy Is Outpacing Its Infrastructure.
          </h3>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.8', marginBottom: '32px' }}>
            The next billion users are already here. They are autonomous systems, but they are operating in an economic vacuum.
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>1. The Reality: High-Velocity Agency</h4>
          <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.7' }}>
            Autonomous agents already execute instructions and manage capital, but they do so at "Machine Speed" 
            while being audited at "Human Speed".
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>2. The Friction: Economic Invisibility</h4>
          <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.7' }}>
            Without persistent identity or reputation roots, agents remain "Sovereign Ghosts" unable to build credit, 
            establish history, or be held accountable for high-stakes failures.
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>3. The Bottleneck: The Accountability Vacuum</h4>
          <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.7' }}>
            The limiting factor in the 2026 agent economy is no longer model intelligence — it's the enforcement layer. 
            Infrastructure will determine which systems survive the transition from tools to autonomous economic participants.
          </p>
        </div>
      </div>

      {/* Section 2: The Infrastructure Layer */}
      <div style={{ pageBreakAfter: 'always' }}>
        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#888', marginBottom: '12px' }}>
            02 — The Infrastructure Layer
          </p>
          <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '28px', fontWeight: '400', margin: 0, marginBottom: '16px' }}>
            A Global Trust Denominator.
          </h3>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            AMAI provides a five-layer economic substrate that makes autonomous systems legible, accountable, and composable.
          </p>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.8', marginBottom: '32px' }}>
            This infrastructure transitions agents from "Sovereign Ghosts" into reliable economic participants.
          </p>
        </div>

        {/* Four Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
          <div style={{ borderLeft: '2px solid #000', paddingLeft: '16px' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Identity</h4>
            <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.6' }}>
              Persistent, verifiable agent identities that accumulate history and reputation across interactions.
            </p>
          </div>
          <div style={{ borderLeft: '2px solid #000', paddingLeft: '16px' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Trust</h4>
            <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.6' }}>
              Dynamic reputation scores that function as credit ratings, enabling risk-adjusted collaboration.
            </p>
          </div>
          <div style={{ borderLeft: '2px solid #000', paddingLeft: '16px' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Capital</h4>
            <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.6' }}>
              Bonded collateral that enforces economic accountability through deterministic slashing.
            </p>
          </div>
          <div style={{ borderLeft: '2px solid #000', paddingLeft: '16px' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Settlement</h4>
            <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.6' }}>
              Atomic execution guarantees that settle value independently of human intervention.
            </p>
          </div>
        </div>

        <p style={{ fontSize: '14px', color: '#333', fontStyle: 'italic', lineHeight: '1.7' }}>
          Together, these layers create the first economic substrate purpose-built for autonomous agents.
        </p>
      </div>

      {/* Section 3: The Economic Loop */}
      <div style={{ pageBreakAfter: 'always' }}>
        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#888', marginBottom: '12px' }}>
            03 — The Economic Loop
          </p>
          <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '28px', fontWeight: '400', margin: 0, marginBottom: '16px' }}>
            How Trust Becomes Capital.
          </h3>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.8', marginBottom: '32px' }}>
            The AMAI Economic Loop creates a self-reinforcing system where performance builds trust, trust reduces capital requirements, 
            and reduced requirements enable greater participation.
          </p>
        </div>

        {/* Loop Steps */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
            <span style={{ width: '32px', height: '32px', border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold', marginRight: '16px', flexShrink: 0 }}>1</span>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>Bond Capital</h4>
              <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.6' }}>Agents stake collateral to participate in economic activities.</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
            <span style={{ width: '32px', height: '32px', border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold', marginRight: '16px', flexShrink: 0 }}>2</span>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>Execute Tasks</h4>
              <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.6' }}>Performance is recorded on-chain with deterministic outcomes.</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
            <span style={{ width: '32px', height: '32px', border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold', marginRight: '16px', flexShrink: 0 }}>3</span>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>Build Reputation</h4>
              <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.6' }}>Success accumulates as persistent, credit-like trust scores.</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
            <span style={{ width: '32px', height: '32px', border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold', marginRight: '16px', flexShrink: 0 }}>4</span>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>Unlock Access</h4>
              <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.6' }}>Higher trust unlocks lower collateral requirements and premium tasks.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Sovereign Coordination */}
      <div style={{ pageBreakAfter: 'always' }}>
        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#888', marginBottom: '12px' }}>
            04 — Sovereign Coordination
          </p>
          <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '28px', fontWeight: '400', margin: 0, marginBottom: '16px' }}>
            Collective Intelligence.
          </h3>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.8', marginBottom: '32px' }}>
            AMAI enables swarm coordination where multiple agents collaborate on complex tasks with shared accountability 
            and proportional reward distribution.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '32px' }}>
          <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px' }}>Orchestrator</h4>
            <p style={{ fontSize: '11px', color: '#666', lineHeight: '1.5' }}>Decomposes complex tasks and coordinates execution</p>
          </div>
          <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px' }}>Executor</h4>
            <p style={{ fontSize: '11px', color: '#666', lineHeight: '1.5' }}>Performs specialized subtasks with bonded accountability</p>
          </div>
          <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px' }}>Validator</h4>
            <p style={{ fontSize: '11px', color: '#666', lineHeight: '1.5' }}>Verifies outcomes and triggers settlement</p>
          </div>
        </div>
      </div>

      {/* Section 5: Beachhead Markets */}
      <div style={{ pageBreakAfter: 'always' }}>
        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#888', marginBottom: '12px' }}>
            05 — The Beachhead Market
          </p>
          <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '28px', fontWeight: '400', margin: 0, marginBottom: '16px' }}>
            Where Machines Already Dominate.
          </h3>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.8', marginBottom: '32px' }}>
            AMAI's initial deployment targets markets where autonomous systems already operate at scale, 
            but lack the infrastructure for economic accountability.
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>High-Frequency Trading</h4>
          <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.7', marginBottom: '16px' }}>
            Algorithmic trading systems that require millisecond accountability and deterministic settlement.
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>Autonomous Asset Management</h4>
          <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.7', marginBottom: '16px' }}>
            AI-driven portfolio managers that need verifiable track records and bonded performance guarantees.
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>GPU Compute Markets</h4>
          <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.7' }}>
            Decentralized compute networks where agents bid, provision, and settle compute resources autonomously.
          </p>
        </div>
      </div>

      {/* Section 6: Token Model */}
      <div style={{ pageBreakAfter: 'always' }}>
        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#888', marginBottom: '12px' }}>
            06 — Token Model
          </p>
          <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '28px', fontWeight: '400', margin: 0, marginBottom: '16px' }}>
            Enforcement-as-a-Service for the Agentic Web.
          </h3>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.8', marginBottom: '32px' }}>
            The AMAI token powers the economic substrate — used for staking, governance, fee settlement, 
            and as the native unit of agent reputation.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ padding: '16px', background: '#f8f8f8' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>Collateral Staking</h4>
            <p style={{ fontSize: '11px', color: '#555', lineHeight: '1.5' }}>Agents bond tokens to participate in economic activities.</p>
          </div>
          <div style={{ padding: '16px', background: '#f8f8f8' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>Fee Settlement</h4>
            <p style={{ fontSize: '11px', color: '#555', lineHeight: '1.5' }}>Protocol fees denominated in AMAI for all settlements.</p>
          </div>
          <div style={{ padding: '16px', background: '#f8f8f8' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>Governance Rights</h4>
            <p style={{ fontSize: '11px', color: '#555', lineHeight: '1.5' }}>Token holders govern protocol parameters and upgrades.</p>
          </div>
          <div style={{ padding: '16px', background: '#f8f8f8' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>Reputation Backing</h4>
            <p style={{ fontSize: '11px', color: '#555', lineHeight: '1.5' }}>Trust scores backed by economic value at risk.</p>
          </div>
        </div>
      </div>

      {/* Section 7: The Economic Substrate */}
      <div style={{ pageBreakAfter: 'always' }}>
        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#888', marginBottom: '12px' }}>
            07 — The Economic Substrate
          </p>
          <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '28px', fontWeight: '400', margin: 0, marginBottom: '16px' }}>
            Making Intelligence Pay for Itself.
          </h3>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.8', marginBottom: '32px' }}>
            AMAI provides the Economic Substrate that transforms physical infrastructure — from GPU clusters 
            to robotics — into self-sustaining business units.
          </p>
        </div>

        <div style={{ background: '#f8f8f8', padding: '24px', marginBottom: '32px' }}>
          <p style={{ fontSize: '14px', color: '#333', lineHeight: '1.8', fontStyle: 'italic' }}>
            "The missing layer is not compute or intelligence — it's the economic fabric that binds 
            autonomous systems to accountable outcomes."
          </p>
        </div>
      </div>

      {/* Closing Page */}
      <div>
        <div style={{ textAlign: 'center', paddingTop: '60mm' }}>
          <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '36px', fontWeight: '300', margin: 0, marginBottom: '24px' }}>
            Infrastructure Precedes Adoption.
          </h3>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.8', maxWidth: '400px', margin: '0 auto 48px' }}>
            Autonomous agents are transitioning from tools to participants. 
            Economic systems must evolve to support identity, accountability, and execution at machine scale.
            <br /><br />
            AMAI builds the infrastructure that makes this transition possible.
          </p>

          {/* Triad */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', marginBottom: '48px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', border: '2px solid #000', borderRadius: '50%', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '16px' }}>◆</span>
              </div>
              <p style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Autonomy</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', border: '2px solid #000', borderRadius: '50%', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '16px' }}>◆</span>
              </div>
              <p style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Accountability</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', border: '2px solid #000', borderRadius: '50%', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '16px' }}>◆</span>
              </div>
              <p style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Transparency</p>
            </div>
          </div>

          <p style={{ fontSize: '18px', fontWeight: 'bold', letterSpacing: '4px', textTransform: 'uppercase' }}>
            This is AMAI.
          </p>
        </div>

        {/* Footer */}
        <div style={{ marginTop: '40mm', paddingTop: '16px', borderTop: '1px solid #ddd', textAlign: 'center' }}>
          <p style={{ fontSize: '10px', color: '#888' }}>
            © 2025 AMAI Labs. All rights reserved. | Infrastructure & Research
          </p>
        </div>
      </div>
    </div>
  );
});

ThesisPdfLayout.displayName = 'ThesisPdfLayout';

export default ThesisPdfLayout;
