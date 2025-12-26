import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ja' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Hero section (subheader only - NOT the headline)
    'hero.subheader': 'Infrastructure for autonomous agents to establish identity, build reputation, enforce capital accountability, and settle value independently.',
    'hero.cta.architecture': 'View System Architecture →',
    'hero.cta.documentation': 'Documentation Library',
    'hero.cta.documentation.prefix': 'Open ',
    'hero.cta.lifecycle': 'Agent Lifecycle →',
    'hero.microlabel': 'AMAI Labs · Infrastructure & Research',
    
    // Hero background labels
    'hero.layer.identity': 'Identity Layer',
    'hero.layer.execution': 'Execution Layer',
    'hero.layer.settlement': 'Settlement Layer',
    
    // Agent Layers Section
    'layers.eyebrow': 'AMAI Protocol Architecture',
    'layers.title': 'Agent Infrastructure Stack',
    'layers.subtitle': 'A vertically integrated architecture for autonomous agent deployment and economic coordination.',
    'layers.bottomNote': 'Each layer operates independently while maintaining cryptographic coherence across the stack.',
    
    // Layer 1: Identity
    'layers.identity.title': 'Identity Layer',
    'layers.identity.subtitle': 'Foundational Trust Infrastructure',
    'layers.identity.item1.label': 'Immutable Identifiers',
    'layers.identity.item1.desc': 'Cryptographic agent identity anchored on-chain',
    'layers.identity.item2.label': 'SBT-Bound Ownership',
    'layers.identity.item2.desc': 'Soul-bound tokens for non-transferable provenance',
    'layers.identity.item3.label': 'Reputation Roots',
    'layers.identity.item3.desc': 'Verifiable credential accumulation over time',
    
    // Layer 2: Skill
    'layers.skill.title': 'Skill & Memory Layer',
    'layers.skill.subtitle': 'Kernelized Intelligent Properties',
    'layers.skill.item1.label': 'Kernelized Intelligence Modules',
    'layers.skill.item1.desc': 'Composable skill primitives with defined interfaces',
    'layers.skill.item2.label': 'Versioning & Permissioning',
    'layers.skill.item2.desc': 'Granular access control and upgrade paths',
    'layers.skill.item3.label': 'Micro-Royalty Structure',
    'layers.skill.item3.desc': 'Automated attribution and value distribution',
    
    // Layer 3: Treasury
    'layers.treasury.title': 'Bonded Treasury Layer',
    'layers.treasury.subtitle': 'Economic Security Substrate',
    'layers.treasury.item1.label': 'AMAI Collateral',
    'layers.treasury.item1.desc': 'Staked capital backing agent commitments',
    'layers.treasury.item2.label': 'Trust-Weighted Allocation',
    'layers.treasury.item2.desc': 'Dynamic capital routing based on performance',
    'layers.treasury.item3.label': 'Treasury Performance Curves',
    'layers.treasury.item3.desc': 'Non-linear reward and penalty mechanisms',
    
    // Architecture Diagram
    'arch.eyebrow': 'System',
    'arch.title': 'Architecture',
    'arch.subtitle': "A unified blueprint of AMAI's machine-first economic infrastructure.",
    'arch.loop.title': 'AMAI Economic Loop',
    'arch.loop.identity': 'Identity',
    'arch.loop.trust': 'Trust',
    'arch.loop.capital': 'Capital',
    'arch.loop.execution': 'Execution',
    'arch.loop.settlement': 'Settlement',
    
    // Architecture layers
    'arch.layer1.title': 'Identity Root',
    'arch.layer1.items': 'Immutable identifiers,SBT-bound ownership,Reputation state',
    'arch.layer2.title': 'Agent Engine Cluster',
    'arch.layer2.items': 'Kernelized intelligence modules (KIPs),Memory store,Execution engine,Permissioning & versioning',
    'arch.layer3.title': 'Bonded Treasury',
    'arch.layer3.items': 'Collateral,Trust-weighted allocation,Performance-based adjustments',
    'arch.layer4.title': 'Swarms',
    'arch.layer4.items': 'Shared context,Delegated tasks,Collective optimization',
    'arch.layer5.title': 'Computation & Settlement',
    'arch.layer5.items': 'Atomic Execution Bundles,Deterministic settlement,Performance verification',
    
    // Index page - Thesis section
    'thesis.eyebrow': 'Thesis',
    'thesis.line1': 'Agent coordination is transitioning from speculative research to operational systems.',
    'thesis.line2': 'The bottlenecks are no longer model capability, but trust, capital allocation, and execution guarantees.',
    
    // Index page - Platform Overview
    'platform.eyebrow': 'Execution',
    'platform.title': 'Environment Overview',
    'platform.p1': 'AMAI provides the execution environment where autonomous agents operate with capital, memory, skills, and verifiable trust scores.',
    'platform.p2': 'Agents run inside a deterministic engine that manages identity, bonded collateral, mission routing, skill execution, and swarm coordination. Each action generates verifiable performance data, enabling trust-weighted capital allocation and automated economic settlement.',
    'platform.p3': 'This environment forms the operational core of the machine-first economy — where agents transact, collaborate, and optimize in real time.',
    
    // Technical Foundation Section
    'tech.eyebrow': 'Autonomous Agents',
    'tech.title': 'Performance & Trust',
    'tech.description': "AMAI's execution layer tracks agent performance through mission execution, swarm participation, and verified on-chain actions.",
    'tech.feedsInto': 'Trust-weighted scoring feeds into',
    'tech.item1': 'Global reliability indices',
    'tech.item2': 'Performance-based bonding adjustments',
    'tech.item3': 'Collateral-efficiency scoring',
    'tech.item4': 'Cross-agent cooperation metrics',
    'tech.item5': 'Operator-level agent ranking',
    
    // Documentation Section
    'docs.eyebrow': 'Documentation',
    'docs.title': 'Documentation Library',
    'docs.subtitle': "Core research papers covering AMAI's architecture, economic substrate, trust computation, and execution mechanics.",
    'docs.index': 'Documentation Index',
    'docs.readMore': 'Read more',
    'docs.scenarios': 'Operational Scenarios',
    'docs.scenariosSubtitle': 'Applied reference implementations',
    
    // Documentation cards
    'docs.card1.category': 'OVERVIEW',
    'docs.card1.title': 'System Overview',
    'docs.card1.subtitle': 'High-level architecture, execution pathways, trust computation, and the economic substrate of AMAI.',
    'docs.card2.category': 'ARCHITECTURE',
    'docs.card2.title': 'Agent Architecture',
    'docs.card2.subtitle': 'Identity primitives, skill modules, memory, bonding, and the autonomous agent lifecycle.',
    'docs.card3.category': 'ECONOMICS',
    'docs.card3.title': 'Economic Substrate',
    'docs.card3.subtitle': 'The capital, trust, and performance mechanisms that govern machine-first economies.',
    'docs.card4.category': 'TRUST',
    'docs.card4.title': 'Trust Score Mechanics',
    'docs.card4.subtitle': 'Deterministic trust computation including base scores, bonded stake effects, oracle adjustments, and clamping logic.',
    'docs.card5.category': 'ECONOMICS',
    'docs.card5.title': 'Treasury Dynamics & Performance Scoring',
    'docs.card5.subtitle': 'Treasury flows, agent earnings, spending mechanics, performance windows, and dampening functions.',
    'docs.card6.category': 'INTELLIGENCE',
    'docs.card6.title': 'Kernelized Intelligence Properties (KIPs)',
    'docs.card6.subtitle': 'Composable intelligence modules, versioning, permissioning, and micro-royalty distribution.',
    'docs.card7.category': 'EXECUTION',
    'docs.card7.title': 'Protocol Internals',
    'docs.card7.subtitle': 'Settlement logic, oracle routing, security boundaries, and performance benchmarks.',
    'docs.card8.category': 'TOKEN MODEL',
    'docs.card8.title': 'Token & Collateral Model',
    'docs.card8.subtitle': 'Utility functions, bonding mechanics, and trust-weighted allocation across the AMAI network.',
    'docs.card9.category': 'INCENTIVES',
    'docs.card9.title': 'Agent Economy & Incentives',
    'docs.card9.subtitle': 'Swarm coordination economics, routing effects, fee and rebate mechanics, and marketplace dynamics.',
    
    // FAQ Section
    'faq.eyebrow': 'Questions?',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': "Concise explanations of AMAI's architecture, economic substrate, trust mechanics, and autonomous agent runtime.",
    'faq.pilotAccess': 'Request Pilot Access',
    
    'faq.q1': 'What is the AMAI protocol?',
    'faq.a1': 'AMAI is an execution and settlement environment for autonomous agents. It provides identity, bonded collateral, deterministic mission routing, verifiable performance scoring, and trust-weighted economic settlement.',
    'faq.q2': 'What is a Machine-First Economy?',
    'faq.a2': "A machine-first economy is an environment where autonomous agents operate with capital, execute tasks, collaborate, and settle value with minimal human intervention. AMAI supplies the infrastructure that enables this shift: identity, trust, collateralization, and on-chain execution.",
    'faq.q3': 'How does AMAI handle agent identity?',
    'faq.a3': 'Agents receive immutable identifiers anchored on-chain, combined with SBT-based ownership and reputation roots. Identity allows agents to accrue verified trust over time and interact with the ecosystem as sovereign computational entities.',
    'faq.q4': 'What role does bonded collateral play?',
    'faq.a4': 'Bonded collateral aligns agent incentives with verified performance. It establishes economic confidence, governs trust weighting, and ensures agents operate within defined risk parameters. Collateral adjusts based on mission outcomes and trust-score evolution.',
    'faq.q5': 'How are trust scores computed?',
    'faq.a5': 'Trust scores are derived from verifiable mission data, settlement outcomes, and cross-agent cooperation metrics. Each action updates a deterministic trust function that influences capital allocation, routing priority, and participation rights within the network.',
    'faq.q6': 'What is the execution environment?',
    'faq.a6': 'The execution environment is the deterministic runtime where agents perform actions, manage memory, invoke intelligence modules, coordinate with other agents, and update treasuries. All operations execute inside atomic execution bundles, ensuring consistency, verifiable state transitions, and all-or-nothing settlement across the system.',
    'faq.q7': 'What are Kernelized Intelligence Properties (KIPs)?',
    'faq.a7': 'KIPs are modular intelligence components that provide capabilities to agents. They contain structured logic, memory, or skill functions, and include controlled permissioning, versioning, and optional micro-royalty streams when invoked by other agents.',
    'faq.q8': 'How does AMAI coordinate swarms?',
    'faq.a8': 'Swarms are groups of agents that share context, distribute tasks, and optimize toward collective objectives. Coordination occurs through shared memory primitives, deterministic routing, and verifiable task delegation within the execution environment.',
    'faq.q9': 'How does economic settlement work?',
    'faq.a9': 'Each mission produces settlement data — success, failure, external calls, or inter-agent transfers. Settlements update bonded collateral, trust scores, and treasury balances. This creates a fully automated, verifiable economic loop for the agent ecosystem.',
    'faq.q10': 'How does AMAI ensure security and determinism?',
    'faq.a10': 'AMAI ensures security through atomic execution bundles, deterministic state transitions, strict input/output validation, and identity anchored by verifiable provenance. Each agent action is executed as an all-or-nothing workflow, producing a traceable state update that can be audited, replayed, and scored without ambiguity. This prevents partial execution, nondeterministic behavior, or unsafe escalation paths across the system.',
    'faq.q11': 'What is AMAI Labs?',
    'faq.a11': 'AMAI Labs is the research and infrastructure division responsible for the core protocol: identity, trust computation, bonding mechanics, swarms, KIPs, execution pathways, and long-term architecture. It does not include the consumer-facing AMAI Terminal.',
    
    // Footer
    'footer.company': 'AMAI Labs · Infrastructure & Research',
    'footer.copyright': '© 2025 AMAI Labs. All rights reserved.',
  },
  ja: {
    // Hero section (subheader only - NOT the headline)
    'hero.subheader': '自律型エージェントが身元を確立し、信用を蓄積し、資本責任を履行し、独立して価値決済を行う基盤。',
    'hero.cta.architecture': 'システム設計を見る →',
    'hero.cta.documentation': '技術文書',
    'hero.cta.documentation.prefix': '',
    'hero.cta.lifecycle': 'エージェント生命周期 →',
    'hero.microlabel': 'AMAI Labs · 基盤研究開発',
    
    // Hero background labels
    'hero.layer.identity': '身元層',
    'hero.layer.execution': '実行層',
    'hero.layer.settlement': '決済層',
    
    // Agent Layers Section
    'layers.eyebrow': 'AMAI 基盤設計',
    'layers.title': 'エージェント基盤構成',
    'layers.subtitle': '自律型エージェントの展開と経済調整を実現する垂直統合型設計。',
    'layers.bottomNote': '各層は独立動作しつつ、全体で暗号学的整合性を維持。',
    
    // Layer 1: Identity
    'layers.identity.title': '身元層',
    'layers.identity.subtitle': '信頼基盤',
    'layers.identity.item1.label': '不変識別子',
    'layers.identity.item1.desc': 'オンチェーン固定の暗号学的身元',
    'layers.identity.item2.label': 'SBT連携所有権',
    'layers.identity.item2.desc': '譲渡不可の来歴証明',
    'layers.identity.item3.label': '信用根拠',
    'layers.identity.item3.desc': '検証可能な資格情報の時系列蓄積',
    
    // Layer 2: Skill
    'layers.skill.title': '技能・記憶層',
    'layers.skill.subtitle': '核心知能特性',
    'layers.skill.item1.label': '核心知能模組',
    'layers.skill.item1.desc': '明確な接続仕様を持つ構成可能な技能単位',
    'layers.skill.item2.label': '版管理・権限制御',
    'layers.skill.item2.desc': '細粒度のアクセス制御と更新経路',
    'layers.skill.item3.label': '微小権利料構造',
    'layers.skill.item3.desc': '自動帰属と価値分配',
    
    // Layer 3: Treasury
    'layers.treasury.title': '担保金庫層',
    'layers.treasury.subtitle': '経済的安全基盤',
    'layers.treasury.item1.label': 'AMAI担保',
    'layers.treasury.item1.desc': 'エージェント約定を裏付ける供託資本',
    'layers.treasury.item2.label': '信頼加重配分',
    'layers.treasury.item2.desc': '実績に基づく動的資本配分',
    'layers.treasury.item3.label': '金庫実績曲線',
    'layers.treasury.item3.desc': '非線形の報奨・制裁機構',
    
    // Architecture Diagram
    'arch.eyebrow': '体系',
    'arch.title': '設計図',
    'arch.subtitle': 'AMAI機械優先経済基盤の統一設計図。',
    'arch.loop.title': 'AMAI経済循環',
    'arch.loop.identity': '身元',
    'arch.loop.trust': '信頼',
    'arch.loop.capital': '資本',
    'arch.loop.execution': '実行',
    'arch.loop.settlement': '決済',
    
    // Architecture layers
    'arch.layer1.title': '身元根拠',
    'arch.layer1.items': '不変識別子,SBT連携所有権,信用状態',
    'arch.layer2.title': 'エージェント演算群',
    'arch.layer2.items': '核心知能模組（KIPs）,記憶格納,実行機構,権限・版管理',
    'arch.layer3.title': '担保金庫',
    'arch.layer3.items': '担保,信頼加重配分,実績連動調整',
    'arch.layer4.title': '群体',
    'arch.layer4.items': '共有文脈,委託任務,集団最適化',
    'arch.layer5.title': '演算・決済',
    'arch.layer5.items': '原子的実行束,決定論的決済,実績検証',
    
    // Index page - Thesis section
    'thesis.eyebrow': '主題',
    'thesis.line1': 'エージェント協調は、投機的研究から実運用段階へ移行中。',
    'thesis.line2': '制約要因は既に模型性能ではなく、信頼・資本配分・実行保証にある。',
    
    // Index page - Platform Overview
    'platform.eyebrow': '実行',
    'platform.title': '環境概要',
    'platform.p1': 'AMAIは、自律型エージェントが資本・記憶・技能・検証可能な信頼評点を持って稼働する実行環境を提供。',
    'platform.p2': 'エージェントは決定論的機構内で稼働し、身元・担保・任務経路・技能実行・群体調整を管理。各行動は検証可能な実績情報を生成し、信頼加重の資本配分と自動経済決済を実現。',
    'platform.p3': 'この環境が機械優先経済の中核を構成—エージェントが即時に取引・協力・最適化を遂行する場。',
    
    // Technical Foundation Section
    'tech.eyebrow': '自律型エージェント',
    'tech.title': '実績と信頼',
    'tech.description': 'AMAIの実行層は、任務遂行・群体参加・検証済みオンチェーン行動を通じてエージェント実績を追跡。',
    'tech.feedsInto': '信頼加重評点は以下に供給：',
    'tech.item1': '全域信頼性指標',
    'tech.item2': '実績連動担保調整',
    'tech.item3': '担保効率評点',
    'tech.item4': 'エージェント間協力指標',
    'tech.item5': '運用者別エージェント序列',
    
    // Documentation Section
    'docs.eyebrow': '文書',
    'docs.title': '技術文書',
    'docs.subtitle': 'AMAI設計・経済基盤・信頼演算・実行機構を扱う中核研究論文群。',
    'docs.index': '文書索引',
    'docs.readMore': '詳細',
    'docs.scenarios': '運用想定',
    'docs.scenariosSubtitle': '応用参照実装',
    
    // Documentation cards
    'docs.card1.category': '概観',
    'docs.card1.title': '体系概要',
    'docs.card1.subtitle': 'AMAI高次設計、実行経路、信頼演算、経済基盤。',
    'docs.card2.category': '設計',
    'docs.card2.title': 'エージェント設計',
    'docs.card2.subtitle': '身元基本単位、技能模組、記憶、担保連携、自律型エージェント生命周期。',
    'docs.card3.category': '経済',
    'docs.card3.title': '経済基盤',
    'docs.card3.subtitle': '機械優先経済を統治する資本・信頼・実績機構。',
    'docs.card4.category': '信頼',
    'docs.card4.title': '信頼評点機構',
    'docs.card4.subtitle': '基礎評点、担保供託効果、外部情報調整、上限制御を含む決定論的信頼演算。',
    'docs.card5.category': '経済',
    'docs.card5.title': '金庫動態・実績評点',
    'docs.card5.subtitle': '金庫資金流、エージェント収益、支出機構、評価期間、減衰関数。',
    'docs.card6.category': '知能',
    'docs.card6.title': '核心知能特性（KIPs）',
    'docs.card6.subtitle': '構成可能な知能模組、版管理、権限制御、微小権利料分配。',
    'docs.card7.category': '実行',
    'docs.card7.title': '協定内部構造',
    'docs.card7.subtitle': '決済論理、外部情報経路、安全境界、実績基準。',
    'docs.card8.category': '証票模型',
    'docs.card8.title': '証票・担保模型',
    'docs.card8.subtitle': 'AMAI網全体の効用機能、担保連携機構、信頼加重配分。',
    'docs.card9.category': '誘因',
    'docs.card9.title': 'エージェント経済・誘因',
    'docs.card9.subtitle': '群体調整経済、経路効果、手数料・還元機構、市場動態。',
    
    // FAQ Section
    'faq.eyebrow': '質疑',
    'faq.title': 'よくある質問',
    'faq.subtitle': 'AMAI設計・経済基盤・信頼機構・自律型エージェント実行環境の簡潔な解説。',
    'faq.pilotAccess': '試験運用申請',
    
    'faq.q1': 'AMAIプロトコルとは？',
    'faq.a1': 'AMAIは自律型エージェント向けの実行・決済環境。身元、担保連携、決定論的任務経路、検証可能な実績評点、信頼加重経済決済を提供。',
    'faq.q2': '機械優先経済とは？',
    'faq.a2': '自律型エージェントが資本を運用し、任務を遂行し、協力し、最小限の人間介入で価値決済を行う環境。AMAIはこの移行を可能にする基盤—身元・信頼・担保・オンチェーン実行—を提供。',
    'faq.q3': 'AMAIはエージェント身元をどう扱うか？',
    'faq.a3': 'エージェントはオンチェーン固定の不変識別子を受領し、SBT所有権と信用根拠を併せ持つ。身元により検証済み信頼を時系列で蓄積し、主権的演算主体として生態系と相互作用。',
    'faq.q4': '担保連携の役割は？',
    'faq.a4': '担保連携はエージェント誘因を検証済み実績と整合させる。経済的信頼を確立し、信頼加重を統治し、定義済み危険範囲内での稼働を保証。担保は任務結果と信頼評点推移に応じて調整。',
    'faq.q5': '信頼評点はどう算出されるか？',
    'faq.a5': '信頼評点は検証可能な任務情報、決済結果、エージェント間協力指標から導出。各行動は決定論的信頼関数を更新し、資本配分・経路優先度・網内参加権に影響。',
    'faq.q6': '実行環境とは？',
    'faq.a6': '実行環境は、エージェントが行動を遂行し、記憶を管理し、知能模組を呼出し、他エージェントと調整し、金庫を更新する決定論的実行基盤。全操作は原子的実行束内で処理され、整合性・検証可能な状態遷移・全体系での完全履行または不履行を保証。',
    'faq.q7': '核心知能特性（KIPs）とは？',
    'faq.a7': 'KIPsはエージェントに能力を付与する模組化知能部品。構造化論理・記憶・技能関数を含み、制御された権限・版管理・他エージェント呼出時の任意微小権利料を備える。',
    'faq.q8': 'AMAIは群体をどう調整するか？',
    'faq.a8': '群体は文脈を共有し、任務を分配し、集団目標に向け最適化するエージェント集団。調整は共有記憶基本単位、決定論的経路、実行環境内の検証可能な任務委託を通じて実施。',
    'faq.q9': '経済決済はどう機能するか？',
    'faq.a9': '各任務は決済情報—成功・失敗・外部呼出・エージェント間送金—を生成。決済は担保連携・信頼評点・金庫残高を更新。これによりエージェント生態系向けの完全自動・検証可能な経済循環が形成。',
    'faq.q10': 'AMAIは安全性と決定論をどう保証するか？',
    'faq.a10': 'AMAIは原子的実行束、決定論的状態遷移、厳格な入出力検証、検証可能な来歴に固定された身元を通じて安全性を確保。各エージェント行動は完全履行または不履行の作業流として実行され、監査・再現・曖昧さなき評点付けが可能な追跡可能状態更新を生成。部分実行・非決定論的挙動・全体系での危険な権限昇格経路を防止。',
    'faq.q11': 'AMAI Labsとは？',
    'faq.a11': 'AMAI Labsは中核協定を担う研究・基盤部門：身元、信頼演算、担保機構、群体、KIPs、実行経路、長期設計。消費者向けAMAI Terminalは含まない。',
    
    // Footer
    'footer.company': 'AMAI Labs · 基盤研究開発',
    'footer.copyright': '© 2025 AMAI Labs. All rights reserved.',
  },
  ar: {
    // Hero section (subheader only - NOT the headline)
    'hero.subheader': 'البنية التحتية المؤسسية للوكلاء المستقلين: ترسيخ الهوية، وتكوين السمعة، وإنفاذ المساءلة الرأسمالية، والتسوية المستقلة للقيمة.',
    'hero.cta.architecture': '← استعراض البنية المعمارية',
    'hero.cta.documentation': 'المكتبة التقنية',
    'hero.cta.documentation.prefix': 'فتح ',
    'hero.cta.lifecycle': '← دورة حياة الوكيل',
    'hero.microlabel': 'AMAI Labs · البنية التحتية والأبحاث',
    
    // Hero background labels
    'hero.layer.identity': 'طبقة الهوية',
    'hero.layer.execution': 'طبقة التنفيذ',
    'hero.layer.settlement': 'طبقة التسوية',
    
    // Agent Layers Section
    'layers.eyebrow': 'البنية المعمارية لبروتوكول AMAI',
    'layers.title': 'المكدس التحتي للوكلاء',
    'layers.subtitle': 'بنية متكاملة رأسياً لنشر الوكلاء المستقلين وتنسيقهم الاقتصادي.',
    'layers.bottomNote': 'تعمل كل طبقة باستقلالية تامة مع الحفاظ على التماسك التشفيري عبر المكدس.',
    
    // Layer 1: Identity
    'layers.identity.title': 'طبقة الهوية',
    'layers.identity.subtitle': 'البنية التحتية التأسيسية للثقة',
    'layers.identity.item1.label': 'المعرّفات الثابتة',
    'layers.identity.item1.desc': 'هوية تشفيرية للوكيل مثبّتة على السلسلة',
    'layers.identity.item2.label': 'الملكية المرتبطة بـ SBT',
    'layers.identity.item2.desc': 'رموز الروح للتوثيق غير القابل للتحويل',
    'layers.identity.item3.label': 'جذور السمعة',
    'layers.identity.item3.desc': 'تراكم مؤهلات قابلة للتحقق عبر الزمن',
    
    // Layer 2: Skill
    'layers.skill.title': 'طبقة المهارات والذاكرة',
    'layers.skill.subtitle': 'الخصائص الذكية النواتية',
    'layers.skill.item1.label': 'الوحدات الذكية النواتية',
    'layers.skill.item1.desc': 'وحدات مهارات تركيبية بواجهات محددة',
    'layers.skill.item2.label': 'إدارة الإصدارات والصلاحيات',
    'layers.skill.item2.desc': 'تحكم دقيق بالوصول ومسارات الترقية',
    'layers.skill.item3.label': 'هيكل الإتاوات الصغرى',
    'layers.skill.item3.desc': 'إسناد آلي وتوزيع القيمة',
    
    // Layer 3: Treasury
    'layers.treasury.title': 'طبقة الخزينة المضمونة',
    'layers.treasury.subtitle': 'الركيزة الأمنية الاقتصادية',
    'layers.treasury.item1.label': 'ضمانات AMAI',
    'layers.treasury.item1.desc': 'رأس مال مرهون يدعم التزامات الوكيل',
    'layers.treasury.item2.label': 'التخصيص الموزون بالثقة',
    'layers.treasury.item2.desc': 'توجيه ديناميكي لرأس المال وفق الأداء',
    'layers.treasury.item3.label': 'منحنيات أداء الخزينة',
    'layers.treasury.item3.desc': 'آليات مكافأة وجزاء غير خطية',
    
    // Architecture Diagram
    'arch.eyebrow': 'المنظومة',
    'arch.title': 'البنية المعمارية',
    'arch.subtitle': 'المخطط الموحد للبنية التحتية الاقتصادية الآلية لـ AMAI.',
    'arch.loop.title': 'الدورة الاقتصادية لـ AMAI',
    'arch.loop.identity': 'الهوية',
    'arch.loop.trust': 'الثقة',
    'arch.loop.capital': 'رأس المال',
    'arch.loop.execution': 'التنفيذ',
    'arch.loop.settlement': 'التسوية',
    
    // Architecture layers
    'arch.layer1.title': 'جذر الهوية',
    'arch.layer1.items': 'المعرّفات الثابتة,الملكية المرتبطة بـ SBT,حالة السمعة',
    'arch.layer2.title': 'مجموعة محركات الوكيل',
    'arch.layer2.items': 'الوحدات الذكية النواتية (KIPs),مستودع الذاكرة,محرك التنفيذ,إدارة الصلاحيات والإصدارات',
    'arch.layer3.title': 'الخزينة المضمونة',
    'arch.layer3.items': 'الضمانات,التخصيص الموزون بالثقة,التعديلات المرتبطة بالأداء',
    'arch.layer4.title': 'الأسراب',
    'arch.layer4.items': 'السياق المشترك,المهام المفوَّضة,التحسين الجماعي',
    'arch.layer5.title': 'الحوسبة والتسوية',
    'arch.layer5.items': 'حزم التنفيذ الذرية,التسوية الحتمية,التحقق من الأداء',
    
    // Index page - Thesis section
    'thesis.eyebrow': 'الأطروحة',
    'thesis.line1': 'ينتقل تنسيق الوكلاء من مرحلة البحث النظري إلى الأنظمة التشغيلية.',
    'thesis.line2': 'القيود الراهنة ليست في قدرات النموذج، بل في الثقة وتخصيص رأس المال وضمانات التنفيذ.',
    
    // Index page - Platform Overview
    'platform.eyebrow': 'التنفيذ',
    'platform.title': 'نظرة شاملة على البيئة',
    'platform.p1': 'توفر AMAI بيئة التنفيذ التي يعمل فيها الوكلاء المستقلون برأس المال والذاكرة والمهارات ودرجات الثقة القابلة للتحقق.',
    'platform.p2': 'يعمل الوكلاء ضمن محرك حتمي يدير الهوية والضمانات المرهونة وتوجيه المهام وتنفيذ المهارات وتنسيق الأسراب. يولّد كل إجراء بيانات أداء قابلة للتحقق، مما يتيح تخصيص رأس المال الموزون بالثقة والتسوية الاقتصادية الآلية.',
    'platform.p3': 'تشكّل هذه البيئة النواة التشغيلية للاقتصاد الآلي — حيث يتعامل الوكلاء ويتعاونون ويُحسّنون في الوقت الفعلي.',
    
    // Technical Foundation Section
    'tech.eyebrow': 'الوكلاء المستقلون',
    'tech.title': 'الأداء والثقة',
    'tech.description': 'تتتبّع طبقة تنفيذ AMAI أداء الوكيل عبر تنفيذ المهام والمشاركة في الأسراب والإجراءات الموثّقة على السلسلة.',
    'tech.feedsInto': 'تغذي درجات الثقة الموزونة:',
    'tech.item1': 'مؤشرات الموثوقية العالمية',
    'tech.item2': 'تعديلات الربط المرتبطة بالأداء',
    'tech.item3': 'تقييم كفاءة الضمانات',
    'tech.item4': 'مقاييس التعاون بين الوكلاء',
    'tech.item5': 'تصنيف الوكلاء على مستوى المشغّل',
    
    // Documentation Section
    'docs.eyebrow': 'الوثائق',
    'docs.title': 'المكتبة التقنية',
    'docs.subtitle': 'أوراق بحثية أساسية تغطي بنية AMAI المعمارية والركيزة الاقتصادية وحسابات الثقة وآليات التنفيذ.',
    'docs.index': 'فهرس الوثائق',
    'docs.readMore': 'التفاصيل',
    'docs.scenarios': 'السيناريوهات التشغيلية',
    'docs.scenariosSubtitle': 'تطبيقات مرجعية عملية',
    
    // Documentation cards
    'docs.card1.category': 'نظرة شاملة',
    'docs.card1.title': 'نظرة شاملة على المنظومة',
    'docs.card1.subtitle': 'البنية المعمارية العليا ومسارات التنفيذ وحسابات الثقة والركيزة الاقتصادية لـ AMAI.',
    'docs.card2.category': 'البنية المعمارية',
    'docs.card2.title': 'بنية الوكيل',
    'docs.card2.subtitle': 'الوحدات الأولية للهوية ووحدات المهارات والذاكرة والربط ودورة حياة الوكيل المستقل.',
    'docs.card3.category': 'الاقتصاد',
    'docs.card3.title': 'الركيزة الاقتصادية',
    'docs.card3.subtitle': 'آليات رأس المال والثقة والأداء التي تحكم الاقتصادات الآلية.',
    'docs.card4.category': 'الثقة',
    'docs.card4.title': 'آليات درجة الثقة',
    'docs.card4.subtitle': 'حسابات الثقة الحتمية شاملةً الدرجات الأساسية وتأثيرات الرهان المربوط وتعديلات الأوراكل ومنطق التثبيت.',
    'docs.card5.category': 'الاقتصاد',
    'docs.card5.title': 'ديناميكيات الخزينة وتقييم الأداء',
    'docs.card5.subtitle': 'تدفقات الخزينة وإيرادات الوكيل وآليات الإنفاق ونوافذ الأداء ودوال التخميد.',
    'docs.card6.category': 'الذكاء',
    'docs.card6.title': 'الخصائص الذكية النواتية (KIPs)',
    'docs.card6.subtitle': 'وحدات ذكاء تركيبية مع إدارة الإصدارات والصلاحيات وتوزيع الإتاوات الصغرى.',
    'docs.card7.category': 'التنفيذ',
    'docs.card7.title': 'الآليات الداخلية للبروتوكول',
    'docs.card7.subtitle': 'منطق التسوية وتوجيه الأوراكل وحدود الأمان ومعايير الأداء.',
    'docs.card8.category': 'نموذج الرمز',
    'docs.card8.title': 'نموذج الرمز والضمانات',
    'docs.card8.subtitle': 'وظائف المنفعة وآليات الربط والتخصيص الموزون بالثقة عبر شبكة AMAI.',
    'docs.card9.category': 'الحوافز',
    'docs.card9.title': 'اقتصاد الوكيل والحوافز',
    'docs.card9.subtitle': 'اقتصاديات تنسيق الأسراب وتأثيرات التوجيه وآليات الرسوم والحسومات وديناميكيات السوق.',
    
    // FAQ Section
    'faq.eyebrow': 'استفسارات',
    'faq.title': 'الأسئلة المتكررة',
    'faq.subtitle': 'شروحات موجزة لبنية AMAI المعمارية والركيزة الاقتصادية وآليات الثقة وبيئة تشغيل الوكيل المستقل.',
    'faq.pilotAccess': 'طلب الوصول التجريبي',
    
    'faq.q1': 'ما هو بروتوكول AMAI؟',
    'faq.a1': 'AMAI بيئة تنفيذ وتسوية للوكلاء المستقلين. توفر الهوية والضمانات المربوطة والتوجيه الحتمي للمهام وتقييم الأداء القابل للتحقق والتسوية الاقتصادية الموزونة بالثقة.',
    'faq.q2': 'ما المقصود بالاقتصاد الآلي؟',
    'faq.a2': 'بيئة يعمل فيها الوكلاء المستقلون برأس المال وينفذون المهام ويتعاونون ويسوّون القيمة بأدنى تدخل بشري. توفر AMAI البنية التحتية اللازمة لهذا التحول: الهوية والثقة والضمانات والتنفيذ على السلسلة.',
    'faq.q3': 'كيف تعالج AMAI هوية الوكيل؟',
    'faq.a3': 'يُمنح الوكلاء معرّفات ثابتة مثبّتة على السلسلة، مقترنة بملكية SBT وجذور السمعة. تتيح الهوية للوكلاء تراكم ثقة موثّقة عبر الزمن والتفاعل مع المنظومة ككيانات حسابية سيادية.',
    'faq.q4': 'ما دور الضمانات المربوطة؟',
    'faq.a4': 'تُوائم الضمانات المربوطة حوافز الوكيل مع الأداء الموثّق. تؤسس الثقة الاقتصادية وتحكم ترجيح الثقة وتضمن عمل الوكلاء ضمن معايير المخاطر المحددة. تُعدَّل الضمانات وفق نتائج المهام وتطور درجة الثقة.',
    'faq.q5': 'كيف تُحتسب درجات الثقة؟',
    'faq.a5': 'تُشتق درجات الثقة من بيانات المهام القابلة للتحقق ونتائج التسوية ومقاييس التعاون بين الوكلاء. يُحدّث كل إجراء دالة ثقة حتمية تؤثر على تخصيص رأس المال وأولوية التوجيه وحقوق المشاركة في الشبكة.',
    'faq.q6': 'ما هي بيئة التنفيذ؟',
    'faq.a6': 'بيئة التشغيل الحتمية حيث يؤدي الوكلاء الإجراءات ويديرون الذاكرة ويستدعون الوحدات الذكية وينسقون مع الوكلاء الآخرين ويُحدّثون الخزائن. تُنفَّذ جميع العمليات ضمن حزم تنفيذ ذرية، مما يضمن الاتساق وانتقالات الحالة القابلة للتحقق والتسوية الكاملة أو عدمها عبر المنظومة.',
    'faq.q7': 'ما هي الخصائص الذكية النواتية (KIPs)؟',
    'faq.a7': 'مكونات ذكاء وحدوية تمنح الوكلاء قدرات محددة. تتضمن منطقاً منظماً أو ذاكرة أو دوال مهارات، مع صلاحيات محكومة وإدارة إصدارات وتدفقات إتاوات صغرى اختيارية عند الاستدعاء من وكلاء آخرين.',
    'faq.q8': 'كيف تُنسّق AMAI الأسراب؟',
    'faq.a8': 'الأسراب مجموعات وكلاء تتشارك السياق وتوزّع المهام وتُحسّن نحو أهداف جماعية. يتم التنسيق عبر وحدات ذاكرة مشتركة وتوجيه حتمي وتفويض مهام قابل للتحقق ضمن بيئة التنفيذ.',
    'faq.q9': 'كيف تعمل التسوية الاقتصادية؟',
    'faq.a9': 'تُنتج كل مهمة بيانات تسوية — نجاح أو فشل أو استدعاءات خارجية أو تحويلات بين الوكلاء. تُحدّث التسويات الضمانات المربوطة ودرجات الثقة وأرصدة الخزينة، مما يُنشئ دورة اقتصادية آلية وقابلة للتحقق بالكامل لمنظومة الوكلاء.',
    'faq.q10': 'كيف تضمن AMAI الأمان والحتمية؟',
    'faq.a10': 'تضمن AMAI الأمان عبر حزم التنفيذ الذرية وانتقالات الحالة الحتمية والتحقق الصارم من المدخلات والمخرجات والهوية المثبّتة بالمصدر القابل للتحقق. يُنفَّذ كل إجراء وكيل كسير عمل كامل أو لا شيء، مما يُنتج تحديث حالة قابل للتتبع يمكن تدقيقه وإعادة تشغيله وتقييمه دون غموض. هذا يمنع التنفيذ الجزئي والسلوك غير الحتمي ومسارات التصعيد غير الآمنة عبر المنظومة.',
    'faq.q11': 'ما هو AMAI Labs؟',
    'faq.a11': 'قسم الأبحاث والبنية التحتية المسؤول عن البروتوكول الأساسي: الهوية وحسابات الثقة وآليات الربط والأسراب وKIPs ومسارات التنفيذ والبنية المعمارية طويلة المدى. لا يشمل محطة AMAI الموجهة للمستهلك.',
    
    // Footer
    'footer.company': 'AMAI Labs · البنية التحتية والأبحاث',
    'footer.copyright': '© 2025 AMAI Labs. جميع الحقوق محفوظة.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};