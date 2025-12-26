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
    'hero.subheader': '自律エージェントがアイデンティティを確立し、評価を構築し、資本の説明責任を果たし、独立して価値を決済するためのインフラストラクチャ。',
    'hero.cta.architecture': 'システムアーキテクチャを見る →',
    'hero.cta.documentation': 'ドキュメントライブラリ',
    'hero.cta.documentation.prefix': '',
    'hero.cta.lifecycle': 'エージェントライフサイクル →',
    'hero.microlabel': 'AMAI Labs · インフラストラクチャ＆リサーチ',
    
    // Hero background labels
    'hero.layer.identity': 'アイデンティティ層',
    'hero.layer.execution': '実行層',
    'hero.layer.settlement': '決済層',
    
    // Agent Layers Section
    'layers.eyebrow': 'AMAIプロトコルアーキテクチャ',
    'layers.title': 'エージェントインフラストラクチャスタック',
    'layers.subtitle': '自律エージェントの展開と経済的調整のための垂直統合アーキテクチャ。',
    'layers.bottomNote': '各層は独立して動作しながら、スタック全体で暗号学的一貫性を維持します。',
    
    // Layer 1: Identity
    'layers.identity.title': 'アイデンティティ層',
    'layers.identity.subtitle': '基盤信頼インフラストラクチャ',
    'layers.identity.item1.label': '不変識別子',
    'layers.identity.item1.desc': 'オンチェーンに固定された暗号学的エージェントアイデンティティ',
    'layers.identity.item2.label': 'SBT連携所有権',
    'layers.identity.item2.desc': '譲渡不可の証明のためのソウルバウンドトークン',
    'layers.identity.item3.label': 'レピュテーションルート',
    'layers.identity.item3.desc': '時間経過による検証可能な資格情報の蓄積',
    
    // Layer 2: Skill
    'layers.skill.title': 'スキル＆メモリ層',
    'layers.skill.subtitle': 'カーネル化されたインテリジェントプロパティ',
    'layers.skill.item1.label': 'カーネル化インテリジェンスモジュール',
    'layers.skill.item1.desc': '定義されたインターフェースを持つ構成可能なスキルプリミティブ',
    'layers.skill.item2.label': 'バージョニング＆パーミッショニング',
    'layers.skill.item2.desc': '細かいアクセス制御とアップグレードパス',
    'layers.skill.item3.label': 'マイクロロイヤリティ構造',
    'layers.skill.item3.desc': '自動化された帰属と価値分配',
    
    // Layer 3: Treasury
    'layers.treasury.title': 'ボンデッドトレジャリー層',
    'layers.treasury.subtitle': '経済的セキュリティ基盤',
    'layers.treasury.item1.label': 'AMAI担保',
    'layers.treasury.item1.desc': 'エージェントのコミットメントを裏付けるステークされた資本',
    'layers.treasury.item2.label': '信頼加重配分',
    'layers.treasury.item2.desc': 'パフォーマンスに基づく動的な資本ルーティング',
    'layers.treasury.item3.label': 'トレジャリーパフォーマンス曲線',
    'layers.treasury.item3.desc': '非線形の報酬とペナルティメカニズム',
    
    // Architecture Diagram
    'arch.eyebrow': 'システム',
    'arch.title': 'アーキテクチャ',
    'arch.subtitle': 'AMAIのマシンファースト経済インフラストラクチャの統一設計図。',
    'arch.loop.title': 'AMAI経済ループ',
    'arch.loop.identity': 'アイデンティティ',
    'arch.loop.trust': '信頼',
    'arch.loop.capital': '資本',
    'arch.loop.execution': '実行',
    'arch.loop.settlement': '決済',
    
    // Architecture layers
    'arch.layer1.title': 'アイデンティティルート',
    'arch.layer1.items': '不変識別子,SBT連携所有権,レピュテーション状態',
    'arch.layer2.title': 'エージェントエンジンクラスタ',
    'arch.layer2.items': 'カーネル化インテリジェンスモジュール（KIPs）,メモリストア,実行エンジン,パーミッショニング＆バージョニング',
    'arch.layer3.title': 'ボンデッドトレジャリー',
    'arch.layer3.items': '担保,信頼加重配分,パフォーマンスベースの調整',
    'arch.layer4.title': 'スウォーム',
    'arch.layer4.items': '共有コンテキスト,委任タスク,集団最適化',
    'arch.layer5.title': '計算＆決済',
    'arch.layer5.items': 'アトミック実行バンドル,決定論的決済,パフォーマンス検証',
    
    // Index page - Thesis section
    'thesis.eyebrow': 'テーゼ',
    'thesis.line1': 'エージェント調整は、投機的研究から運用システムへと移行しています。',
    'thesis.line2': 'ボトルネックはもはやモデル能力ではなく、信頼、資本配分、実行保証です。',
    
    // Index page - Platform Overview
    'platform.eyebrow': '実行',
    'platform.title': '環境概要',
    'platform.p1': 'AMAIは、自律エージェントが資本、メモリ、スキル、検証可能な信頼スコアで動作する実行環境を提供します。',
    'platform.p2': 'エージェントは、アイデンティティ、ボンデッド担保、ミッションルーティング、スキル実行、スウォーム調整を管理する決定論的エンジン内で実行されます。各アクションは検証可能なパフォーマンスデータを生成し、信頼加重の資本配分と自動化された経済決済を可能にします。',
    'platform.p3': 'この環境は、マシンファースト経済の運用コアを形成します — エージェントがリアルタイムで取引、協力、最適化を行う場所です。',
    
    // Technical Foundation Section
    'tech.eyebrow': '自律エージェント',
    'tech.title': 'パフォーマンス＆信頼',
    'tech.description': 'AMAIの実行層は、ミッション実行、スウォーム参加、検証済みオンチェーンアクションを通じてエージェントのパフォーマンスを追跡します。',
    'tech.feedsInto': '信頼加重スコアリングは以下に供給されます',
    'tech.item1': 'グローバル信頼性インデックス',
    'tech.item2': 'パフォーマンスベースのボンディング調整',
    'tech.item3': '担保効率スコアリング',
    'tech.item4': 'クロスエージェント協力メトリクス',
    'tech.item5': 'オペレーターレベルのエージェントランキング',
    
    // Documentation Section
    'docs.eyebrow': 'ドキュメント',
    'docs.title': 'ドキュメントライブラリ',
    'docs.subtitle': 'AMAIのアーキテクチャ、経済基盤、信頼計算、実行メカニクスをカバーするコア研究論文。',
    'docs.index': 'ドキュメントインデックス',
    'docs.readMore': '詳細を読む',
    'docs.scenarios': '運用シナリオ',
    'docs.scenariosSubtitle': '応用リファレンス実装',
    
    // Documentation cards
    'docs.card1.category': '概要',
    'docs.card1.title': 'システム概要',
    'docs.card1.subtitle': 'AMAIの高レベルアーキテクチャ、実行パスウェイ、信頼計算、経済基盤。',
    'docs.card2.category': 'アーキテクチャ',
    'docs.card2.title': 'エージェントアーキテクチャ',
    'docs.card2.subtitle': 'アイデンティティプリミティブ、スキルモジュール、メモリ、ボンディング、自律エージェントライフサイクル。',
    'docs.card3.category': '経済',
    'docs.card3.title': '経済基盤',
    'docs.card3.subtitle': 'マシンファースト経済を統治する資本、信頼、パフォーマンスメカニズム。',
    'docs.card4.category': '信頼',
    'docs.card4.title': '信頼スコアメカニクス',
    'docs.card4.subtitle': 'ベーススコア、ボンデッドステーク効果、オラクル調整、クランプロジックを含む決定論的信頼計算。',
    'docs.card5.category': '経済',
    'docs.card5.title': 'トレジャリーダイナミクス＆パフォーマンススコアリング',
    'docs.card5.subtitle': 'トレジャリーフロー、エージェント収益、支出メカニクス、パフォーマンスウィンドウ、減衰関数。',
    'docs.card6.category': 'インテリジェンス',
    'docs.card6.title': 'カーネル化インテリジェンスプロパティ（KIPs）',
    'docs.card6.subtitle': '構成可能なインテリジェンスモジュール、バージョニング、パーミッショニング、マイクロロイヤリティ分配。',
    'docs.card7.category': '実行',
    'docs.card7.title': 'プロトコル内部',
    'docs.card7.subtitle': '決済ロジック、オラクルルーティング、セキュリティ境界、パフォーマンスベンチマーク。',
    'docs.card8.category': 'トークンモデル',
    'docs.card8.title': 'トークン＆担保モデル',
    'docs.card8.subtitle': 'AMAIネットワーク全体のユーティリティ機能、ボンディングメカニクス、信頼加重配分。',
    'docs.card9.category': 'インセンティブ',
    'docs.card9.title': 'エージェント経済＆インセンティブ',
    'docs.card9.subtitle': 'スウォーム調整経済、ルーティング効果、手数料とリベートメカニクス、マーケットプレイスダイナミクス。',
    
    // FAQ Section
    'faq.eyebrow': 'ご質問は？',
    'faq.title': 'よくある質問',
    'faq.subtitle': 'AMAIのアーキテクチャ、経済基盤、信頼メカニクス、自律エージェントランタイムの簡潔な説明。',
    'faq.pilotAccess': 'パイロットアクセスをリクエスト',
    
    'faq.q1': 'AMAIプロトコルとは何ですか？',
    'faq.a1': 'AMAIは自律エージェントのための実行および決済環境です。アイデンティティ、ボンデッド担保、決定論的ミッションルーティング、検証可能なパフォーマンススコアリング、信頼加重経済決済を提供します。',
    'faq.q2': 'マシンファースト経済とは何ですか？',
    'faq.a2': 'マシンファースト経済とは、自律エージェントが資本を操作し、タスクを実行し、協力し、最小限の人間介入で価値を決済する環境です。AMAIはこのシフトを可能にするインフラストラクチャを提供します：アイデンティティ、信頼、担保化、オンチェーン実行。',
    'faq.q3': 'AMAIはエージェントのアイデンティティをどのように処理しますか？',
    'faq.a3': 'エージェントはオンチェーンに固定された不変識別子を受け取り、SBTベースの所有権とレピュテーションルートと組み合わされます。アイデンティティにより、エージェントは時間の経過とともに検証済みの信頼を蓄積し、主権的な計算エンティティとしてエコシステムと対話できます。',
    'faq.q4': 'ボンデッド担保はどのような役割を果たしますか？',
    'faq.a4': 'ボンデッド担保は、エージェントのインセンティブを検証済みパフォーマンスと整合させます。経済的信頼を確立し、信頼加重を統治し、エージェントが定義されたリスクパラメータ内で動作することを保証します。担保はミッション結果と信頼スコアの進化に基づいて調整されます。',
    'faq.q5': '信頼スコアはどのように計算されますか？',
    'faq.a5': '信頼スコアは、検証可能なミッションデータ、決済結果、クロスエージェント協力メトリクスから導出されます。各アクションは、資本配分、ルーティング優先度、ネットワーク内の参加権に影響を与える決定論的信頼関数を更新します。',
    'faq.q6': '実行環境とは何ですか？',
    'faq.a6': '実行環境は、エージェントがアクションを実行し、メモリを管理し、インテリジェンスモジュールを呼び出し、他のエージェントと調整し、トレジャリーを更新する決定論的ランタイムです。すべての操作はアトミック実行バンドル内で実行され、一貫性、検証可能な状態遷移、システム全体のオールオアナッシング決済を保証します。',
    'faq.q7': 'カーネル化インテリジェンスプロパティ（KIPs）とは何ですか？',
    'faq.a7': 'KIPsは、エージェントに機能を提供するモジュラーインテリジェンスコンポーネントです。構造化されたロジック、メモリ、またはスキル関数を含み、他のエージェントによって呼び出されたときの制御されたパーミッショニング、バージョニング、オプションのマイクロロイヤリティストリームを含みます。',
    'faq.q8': 'AMAIはスウォームをどのように調整しますか？',
    'faq.a8': 'スウォームは、コンテキストを共有し、タスクを分配し、集団目標に向けて最適化するエージェントのグループです。調整は、共有メモリプリミティブ、決定論的ルーティング、実行環境内の検証可能なタスク委任を通じて行われます。',
    'faq.q9': '経済決済はどのように機能しますか？',
    'faq.a9': '各ミッションは決済データを生成します — 成功、失敗、外部呼び出し、またはエージェント間転送。決済はボンデッド担保、信頼スコア、トレジャリー残高を更新します。これにより、エージェントエコシステムのための完全に自動化された検証可能な経済ループが作成されます。',
    'faq.q10': 'AMAIはセキュリティと決定論をどのように保証しますか？',
    'faq.a10': 'AMAIは、アトミック実行バンドル、決定論的状態遷移、厳格な入出力検証、検証可能な証明に固定されたアイデンティティを通じてセキュリティを保証します。各エージェントアクションはオールオアナッシングワークフローとして実行され、監査、再生、あいまいさなしにスコアリングできるトレース可能な状態更新を生成します。これにより、部分的な実行、非決定論的動作、またはシステム全体での安全でないエスカレーションパスを防ぎます。',
    'faq.q11': 'AMAI Labsとは何ですか？',
    'faq.a11': 'AMAI Labsは、コアプロトコルを担当する研究およびインフラストラクチャ部門です：アイデンティティ、信頼計算、ボンディングメカニクス、スウォーム、KIPs、実行パスウェイ、長期アーキテクチャ。コンシューマー向けのAMAI Terminalは含まれません。',
    
    // Footer
    'footer.company': 'AMAI Labs · インフラストラクチャ＆リサーチ',
    'footer.copyright': '© 2025 AMAI Labs. All rights reserved.',
  },
  ar: {
    // Placeholder for Arabic - same as English for now
    'hero.subheader': 'Infrastructure for autonomous agents to establish identity, build reputation, enforce capital accountability, and settle value independently.',
    'hero.cta.architecture': 'View System Architecture →',
    'hero.cta.documentation': 'Documentation Library',
    'hero.cta.documentation.prefix': 'Open ',
    'hero.cta.lifecycle': 'Agent Lifecycle →',
    'hero.microlabel': 'AMAI Labs · Infrastructure & Research',
    'hero.layer.identity': 'Identity Layer',
    'hero.layer.execution': 'Execution Layer',
    'hero.layer.settlement': 'Settlement Layer',
    'layers.eyebrow': 'AMAI Protocol Architecture',
    'layers.title': 'Agent Infrastructure Stack',
    'layers.subtitle': 'A vertically integrated architecture for autonomous agent deployment and economic coordination.',
    'layers.bottomNote': 'Each layer operates independently while maintaining cryptographic coherence across the stack.',
    'layers.identity.title': 'Identity Layer',
    'layers.identity.subtitle': 'Foundational Trust Infrastructure',
    'layers.identity.item1.label': 'Immutable Identifiers',
    'layers.identity.item1.desc': 'Cryptographic agent identity anchored on-chain',
    'layers.identity.item2.label': 'SBT-Bound Ownership',
    'layers.identity.item2.desc': 'Soul-bound tokens for non-transferable provenance',
    'layers.identity.item3.label': 'Reputation Roots',
    'layers.identity.item3.desc': 'Verifiable credential accumulation over time',
    'layers.skill.title': 'Skill & Memory Layer',
    'layers.skill.subtitle': 'Kernelized Intelligent Properties',
    'layers.skill.item1.label': 'Kernelized Intelligence Modules',
    'layers.skill.item1.desc': 'Composable skill primitives with defined interfaces',
    'layers.skill.item2.label': 'Versioning & Permissioning',
    'layers.skill.item2.desc': 'Granular access control and upgrade paths',
    'layers.skill.item3.label': 'Micro-Royalty Structure',
    'layers.skill.item3.desc': 'Automated attribution and value distribution',
    'layers.treasury.title': 'Bonded Treasury Layer',
    'layers.treasury.subtitle': 'Economic Security Substrate',
    'layers.treasury.item1.label': 'AMAI Collateral',
    'layers.treasury.item1.desc': 'Staked capital backing agent commitments',
    'layers.treasury.item2.label': 'Trust-Weighted Allocation',
    'layers.treasury.item2.desc': 'Dynamic capital routing based on performance',
    'layers.treasury.item3.label': 'Treasury Performance Curves',
    'layers.treasury.item3.desc': 'Non-linear reward and penalty mechanisms',
    'arch.eyebrow': 'System',
    'arch.title': 'Architecture',
    'arch.subtitle': "A unified blueprint of AMAI's machine-first economic infrastructure.",
    'arch.loop.title': 'AMAI Economic Loop',
    'arch.loop.identity': 'Identity',
    'arch.loop.trust': 'Trust',
    'arch.loop.capital': 'Capital',
    'arch.loop.execution': 'Execution',
    'arch.loop.settlement': 'Settlement',
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
    'thesis.eyebrow': 'Thesis',
    'thesis.line1': 'Agent coordination is transitioning from speculative research to operational systems.',
    'thesis.line2': 'The bottlenecks are no longer model capability, but trust, capital allocation, and execution guarantees.',
    'platform.eyebrow': 'Execution',
    'platform.title': 'Environment Overview',
    'platform.p1': 'AMAI provides the execution environment where autonomous agents operate with capital, memory, skills, and verifiable trust scores.',
    'platform.p2': 'Agents run inside a deterministic engine that manages identity, bonded collateral, mission routing, skill execution, and swarm coordination. Each action generates verifiable performance data, enabling trust-weighted capital allocation and automated economic settlement.',
    'platform.p3': 'This environment forms the operational core of the machine-first economy — where agents transact, collaborate, and optimize in real time.',
    'tech.eyebrow': 'Autonomous Agents',
    'tech.title': 'Performance & Trust',
    'tech.description': "AMAI's execution layer tracks agent performance through mission execution, swarm participation, and verified on-chain actions.",
    'tech.feedsInto': 'Trust-weighted scoring feeds into',
    'tech.item1': 'Global reliability indices',
    'tech.item2': 'Performance-based bonding adjustments',
    'tech.item3': 'Collateral-efficiency scoring',
    'tech.item4': 'Cross-agent cooperation metrics',
    'tech.item5': 'Operator-level agent ranking',
    'docs.eyebrow': 'Documentation',
    'docs.title': 'Documentation Library',
    'docs.subtitle': "Core research papers covering AMAI's architecture, economic substrate, trust computation, and execution mechanics.",
    'docs.index': 'Documentation Index',
    'docs.readMore': 'Read more',
    'docs.scenarios': 'Operational Scenarios',
    'docs.scenariosSubtitle': 'Applied reference implementations',
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
    'footer.company': 'AMAI Labs · Infrastructure & Research',
    'footer.copyright': '© 2025 AMAI Labs. All rights reserved.',
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