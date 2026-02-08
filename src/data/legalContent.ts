import { Language } from '@/contexts/LanguageContext';

interface BulletSection {
  label?: string;
  items: string[];
}

interface LegalSection {
  title: string;
  paragraphs?: string[];
  bullets?: BulletSection[];
  /** Alternating paragraphs and bullets in order */
  content: Array<{ type: 'p'; text: string } | { type: 'label'; text: string } | { type: 'bullets'; items: string[] }>;
}

export interface LegalContent {
  sections: LegalSection[];
}

export const legalContent: Record<Language, LegalContent> = {
  en: {
    sections: [
      {
        title: '1. Introduction',
        content: [
          { type: 'p', text: 'Welcome to AMAI Labs.' },
          { type: 'p', text: 'By accessing this portal, its documentation, research materials, conceptual descriptions, diagrams, prototypes, or any related content (collectively, the "Materials"), you acknowledge and agree to the following Terms & Conditions ("Terms").' },
          { type: 'p', text: 'AMAI Labs is a research division responsible for describing, evaluating, and exploring a decentralized computational infrastructure for autonomous agents (the "AMAI Protocol"). Accessing this portal indicates your understanding that AMAI Labs does not provide a commercial product, and that all Materials are offered solely for informational, educational, and experimental purposes.' },
          { type: 'p', text: 'If you do not agree with these Terms, you must discontinue use immediately.' },
        ],
      },
      {
        title: '2. Non-Commercial, Non-Advisory Nature of Materials',
        content: [
          { type: 'label', text: 'All Materials provided through AMAI Labs' },
          { type: 'bullets', items: [
            'do not constitute a commercial offering',
            'do not establish any advisory, fiduciary, brokerage, or client relationship',
            'do not represent investment guidance',
            'do not constitute legal, financial, or regulatory advice',
            'do not form part of any solicitation, inducement, or marketing activity',
          ]},
          { type: 'p', text: 'Nothing herein should be construed as a representation that any system, protocol, feature, or capability described will be implemented, deployed, or function as anticipated.' },
        ],
      },
      {
        title: '3. Purpose of AMAI Labs',
        content: [
          { type: 'label', text: 'AMAI Labs provides' },
          { type: 'bullets', items: [
            'protocol research and conceptual frameworks',
            'architectural diagrams and technical primitives',
            'economic models and trust-scoring mechanics',
            'forward-looking development plans',
            'experimental specifications, prototypes, and tests',
          ]},
          { type: 'p', text: 'These Materials describe potential infrastructure for autonomous computational agents. They may contain early-stage ideas, experimental components, or draft specifications.' },
          { type: 'label', text: 'Access is provided solely for' },
          { type: 'bullets', items: [
            'Educational analysis',
            'Technical evaluation',
            'Research review',
            'Non-commercial experimentation',
          ]},
          { type: 'p', text: 'Any other use is strictly prohibited.' },
        ],
      },
      {
        title: '4. Forward-Looking Statements',
        content: [
          { type: 'label', text: 'Materials may include forward-looking statements such as' },
          { type: 'bullets', items: [
            'anticipated architecture',
            'proposed features',
            'conceptual economic models',
            'trust-scoring methodologies',
            'potential integrations',
            'long-term ecosystem trajectories',
          ]},
          { type: 'p', text: 'These statements are inherently uncertain and subject to change.' },
          { type: 'label', text: 'AMAI Labs' },
          { type: 'bullets', items: [
            'does not guarantee accuracy, completeness, or future occurrence of any concept described',
            'makes no commitment to deliver any feature, capability, or version',
            'reserves the right to modify or discontinue any component of the research at any time',
          ]},
          { type: 'p', text: 'Nothing in the Materials should be relied upon as a promise of performance, value creation, system release, or commercial outcome.' },
        ],
      },
      {
        title: '5. No Warranties or Guarantees',
        content: [
          { type: 'p', text: 'All Materials are provided "as is" without warranties of any kind, whether express or implied.' },
          { type: 'label', text: 'This includes, but is not limited to' },
          { type: 'bullets', items: [
            'fitness for a particular purpose',
            'performance guarantees',
            'reliability, correctness, or completeness',
            'security guarantees',
            'suitability for commercial deployment',
            'legal or regulatory compliance',
          ]},
          { type: 'p', text: 'The AMAI Protocol, if deployed, may contain defects, design limitations, or risks inherent to decentralized, distributed, or autonomous computational systems. You assume all responsibility for your interpretation and use of the Materials.' },
        ],
      },
      {
        title: '6. Intellectual Property',
        content: [
          { type: 'p', text: 'All content accessible through AMAI Labs—including diagrams, text, models, research papers, graphics, conceptual architectures, and system descriptions—is the intellectual property of AMAI Labs unless otherwise noted.' },
          { type: 'label', text: 'You may not' },
          { type: 'bullets', items: ['reproduce', 'modify', 'distribute', 'publish', 'adapt', 'commercialize'] },
          { type: 'p', text: 'any Materials without explicit written permission.' },
        ],
      },
      {
        title: '7. Prohibited Uses',
        content: [
          { type: 'label', text: 'You agree not to use AMAI Labs' },
          { type: 'bullets', items: [
            'to evaluate the Materials for competitive commercial development',
            'to create derivative systems marketed as AMAI Labs or the AMAI Protocol',
            'to misrepresent the status, readiness, or capabilities of AMAI\'s research',
            'to imply endorsement, partnership, or affiliation',
            'to perform unlawful, fraudulent, or harmful activities',
            'to provide investment, financial, or advisory statements using the Materials',
            'to make public claims about AMAI\'s roadmap or future performance',
          ]},
          { type: 'p', text: 'AMAI Labs reserves all rights to restrict or terminate access for violations.' },
        ],
      },
      {
        title: '8. No Investment, Security, or Token Claims',
        content: [
          { type: 'p', text: 'Any descriptions of token mechanics, collateral models, trust-weighting, or economic substrates are purely conceptual and intended for research evaluation.' },
          { type: 'label', text: 'They' },
          { type: 'bullets', items: [
            'are not investment vehicles',
            'do not represent ownership, revenue rights, governance rights, or equity',
            'are not security instruments',
            'may not correspond to any future token or asset',
            'may not ever be implemented',
          ]},
          { type: 'p', text: 'No part of AMAI Labs constitutes an offering under securities laws of any jurisdiction.' },
        ],
      },
      {
        title: '9. Risk of Digital and Autonomous Systems',
        content: [
          { type: 'label', text: 'Research into autonomous agents and decentralized infrastructure involves risks including' },
          { type: 'bullets', items: [
            'computational failures',
            'unpredictable agent behavior',
            'economic model instability',
            'adversarial interactions',
            'vulnerabilities in cryptographic or distributed systems',
            'network disruptions',
            'regulatory constraints',
          ]},
          { type: 'p', text: 'You understand and accept that the Materials may reference systems that are theoretical, incomplete, or subject to significant future revision.' },
        ],
      },
      {
        title: '10. Jurisdictional and Regulatory Neutrality',
        content: [
          { type: 'label', text: 'AMAI Labs does not guarantee that its research or conceptual materials comply with the legal or regulatory requirements of any jurisdiction, including but not limited to' },
          { type: 'bullets', items: [
            'securities laws',
            'financial regulations',
            'data-protection frameworks',
            'AI safety regulations',
            'cross-border digital-asset requirements',
            'sovereign technology controls',
          ]},
          { type: 'p', text: 'Users are solely responsible for understanding and complying with applicable laws in their jurisdictions. AMAI Labs disclaims all responsibility for regulatory interpretation or outcomes.' },
        ],
      },
      {
        title: '11. Limitation of Liability',
        content: [
          { type: 'label', text: 'To the fullest extent permitted by law, the following shall not be liable' },
          { type: 'bullets', items: ['AMAI Labs', 'its contributors', 'affiliates', 'researchers', 'engineers', 'and associated entities'] },
          { type: 'label', text: 'for any damages arising from' },
          { type: 'bullets', items: [
            'access to or use of the Materials',
            'reliance on the Materials',
            'errors or omissions',
            'system failures',
            'loss of data or business opportunities',
            'misinterpretation or misuse of research content',
            'or any other interaction with AMAI Labs',
          ]},
          { type: 'p', text: 'Your sole remedy for dissatisfaction with the Materials is to discontinue use.' },
        ],
      },
      {
        title: '12. No Guarantee of Availability',
        content: [
          { type: 'label', text: 'AMAI Labs may temporarily or permanently' },
          { type: 'bullets', items: ['restrict access', 'modify the portal', 'alter content', 'limit features', 'remove sections', 'suspend the site'] },
          { type: 'p', text: 'without notice and without liability.' },
        ],
      },
      {
        title: '13. Acceptance of Terms',
        content: [
          { type: 'label', text: 'By accessing AMAI Labs in any capacity, you affirm that' },
          { type: 'bullets', items: [
            'you have read and understood these Terms',
            'you agree to use the Materials solely for non-commercial research purposes',
            'you acknowledge the experimental nature of all Materials',
            'you understand the lack of warranties, commitments, and guarantees',
            'and you accept all limitations of liability',
          ]},
          { type: 'p', text: 'If you do not accept, you must leave immediately.' },
        ],
      },
    ],
  },
  ja: {
    sections: [
      {
        title: '1. はじめに',
        content: [
          { type: 'p', text: 'AMAI Labsへようこそ。' },
          { type: 'p', text: '本ポータル、その文書、研究資料、概念的説明、図表、プロトタイプ、またはその他の関連コンテンツ（総称して「資料」）にアクセスすることにより、以下の利用規約（「規約」）に同意したものとみなされます。' },
          { type: 'p', text: 'AMAI Labsは、自律エージェントのための分散型計算インフラストラクチャ（「AMAIプロトコル」）の記述、評価、探索を担当する研究部門です。本ポータルへのアクセスは、AMAI Labsが商用製品を提供していないこと、およびすべての資料が情報提供、教育、実験目的でのみ提供されていることをご理解いただいた上で行われるものです。' },
          { type: 'p', text: 'これらの規約に同意されない場合は、直ちに利用を中止してください。' },
        ],
      },
      {
        title: '2. 資料の非商業的・非助言的性質',
        content: [
          { type: 'label', text: 'AMAI Labsを通じて提供されるすべての資料は' },
          { type: 'bullets', items: [
            '商業的提供を構成するものではありません',
            '助言、受託、仲介、またはクライアント関係を構築するものではありません',
            '投資ガイダンスを表すものではありません',
            '法的、財務的、または規制上の助言を構成するものではありません',
            '勧誘、誘引、またはマーケティング活動の一部を構成するものではありません',
          ]},
          { type: 'p', text: '本書のいかなる内容も、記載されたシステム、プロトコル、機能、または能力が実装、展開、または予想通りに機能することを表明するものと解釈されるべきではありません。' },
        ],
      },
      {
        title: '3. AMAI Labsの目的',
        content: [
          { type: 'label', text: 'AMAI Labsは以下を提供します' },
          { type: 'bullets', items: [
            'プロトコル研究と概念的フレームワーク',
            'アーキテクチャ図と技術プリミティブ',
            '経済モデルと信頼スコアリング機構',
            '将来の開発計画',
            '実験的仕様、プロトタイプ、テスト',
          ]},
          { type: 'p', text: 'これらの資料は、自律計算エージェントのための潜在的なインフラストラクチャを記述しています。初期段階のアイデア、実験的コンポーネント、またはドラフト仕様を含む場合があります。' },
          { type: 'label', text: 'アクセスは以下の目的でのみ提供されます' },
          { type: 'bullets', items: [
            '教育的分析',
            '技術的評価',
            '研究レビュー',
            '非商業的実験',
          ]},
          { type: 'p', text: 'その他の使用は厳しく禁止されています。' },
        ],
      },
      {
        title: '4. 将来の見通しに関する記述',
        content: [
          { type: 'label', text: '資料には以下のような将来の見通しに関する記述が含まれる場合があります' },
          { type: 'bullets', items: [
            '予定されているアーキテクチャ',
            '提案された機能',
            '概念的経済モデル',
            '信頼スコアリング方法論',
            '潜在的な統合',
            '長期的なエコシステムの軌道',
          ]},
          { type: 'p', text: 'これらの記述は本質的に不確実であり、変更される可能性があります。' },
          { type: 'label', text: 'AMAI Labs' },
          { type: 'bullets', items: [
            '記述された概念の正確性、完全性、または将来の発生を保証しません',
            'いかなる機能、能力、またはバージョンの提供も約束しません',
            '研究のいかなるコンポーネントも随時変更または中止する権利を留保します',
          ]},
          { type: 'p', text: '資料のいかなる内容も、パフォーマンス、価値創造、システムリリース、または商業的成果の約束として依拠されるべきではありません。' },
        ],
      },
      {
        title: '5. 保証の否認',
        content: [
          { type: 'p', text: 'すべての資料は、明示的または黙示的を問わず、いかなる種類の保証もなく「現状のまま」提供されます。' },
          { type: 'label', text: 'これには以下が含まれますが、これらに限定されません' },
          { type: 'bullets', items: [
            '特定目的への適合性',
            'パフォーマンス保証',
            '信頼性、正確性、または完全性',
            'セキュリティ保証',
            '商業展開への適合性',
            '法的または規制上の準拠',
          ]},
          { type: 'p', text: 'AMAIプロトコルは、展開された場合、分散型、分散型、または自律計算システムに固有の欠陥、設計上の制限、またはリスクを含む可能性があります。資料の解釈と使用に関するすべての責任はお客様が負うものとします。' },
        ],
      },
      {
        title: '6. 知的財産',
        content: [
          { type: 'p', text: 'AMAI Labsを通じてアクセス可能なすべてのコンテンツ（図表、テキスト、モデル、研究論文、グラフィックス、概念的アーキテクチャ、システム記述を含む）は、特に記載がない限り、AMAI Labsの知的財産です。' },
          { type: 'label', text: '以下の行為は禁止されています' },
          { type: 'bullets', items: ['複製', '改変', '配布', '公開', '翻案', '商業化'] },
          { type: 'p', text: '明示的な書面による許可なしに資料を使用することはできません。' },
        ],
      },
      {
        title: '7. 禁止される使用',
        content: [
          { type: 'label', text: 'AMAI Labsを以下の目的で使用しないことに同意するものとします' },
          { type: 'bullets', items: [
            '競合的な商業開発のための資料の評価',
            'AMAI LabsまたはAMAIプロトコルとして販売される派生システムの作成',
            'AMAIの研究の状態、準備状況、または能力の虚偽表示',
            '推薦、パートナーシップ、または提携の示唆',
            '違法、詐欺的、または有害な活動の実行',
            '資料を使用した投資、財務、または助言声明の提供',
            'AMAIのロードマップまたは将来のパフォーマンスに関する公的主張',
          ]},
          { type: 'p', text: 'AMAI Labsは、違反に対するアクセスの制限または終了に関するすべての権利を留保します。' },
        ],
      },
      {
        title: '8. 投資、証券、またはトークンに関する主張の否認',
        content: [
          { type: 'p', text: 'トークンメカニクス、担保モデル、信頼加重、または経済基盤に関するいかなる記述も、純粋に概念的であり、研究評価を目的としています。' },
          { type: 'label', text: 'それらは' },
          { type: 'bullets', items: [
            '投資手段ではありません',
            '所有権、収益権、ガバナンス権、またはエクイティを表すものではありません',
            '証券商品ではありません',
            '将来のトークンまたは資産に対応しない場合があります',
            '実装されない可能性があります',
          ]},
          { type: 'p', text: 'AMAI Labsのいかなる部分も、いかなる法域の証券法に基づく募集を構成するものではありません。' },
        ],
      },
      {
        title: '9. デジタルおよび自律システムのリスク',
        content: [
          { type: 'label', text: '自律エージェントおよび分散型インフラストラクチャの研究には、以下を含むリスクが伴います' },
          { type: 'bullets', items: [
            '計算上の障害',
            '予測不可能なエージェントの動作',
            '経済モデルの不安定性',
            '敵対的な相互作用',
            '暗号化または分散システムの脆弱性',
            'ネットワークの中断',
            '規制上の制約',
          ]},
          { type: 'p', text: '資料が理論的、不完全、または大幅な将来の改訂の対象となるシステムを参照している可能性があることを理解し、受け入れるものとします。' },
        ],
      },
      {
        title: '10. 管轄および規制上の中立性',
        content: [
          { type: 'label', text: 'AMAI Labsは、その研究または概念的資料が、以下を含むがこれに限定されない、いかなる法域の法的または規制上の要件に準拠していることを保証しません' },
          { type: 'bullets', items: [
            '証券法',
            '金融規制',
            'データ保護フレームワーク',
            'AI安全規制',
            '国境を越えたデジタル資産要件',
            '主権的技術管理',
          ]},
          { type: 'p', text: 'ユーザーは、自身の法域における適用法の理解と遵守に単独で責任を負います。AMAI Labsは、規制上の解釈または結果に関するすべての責任を否認します。' },
        ],
      },
      {
        title: '11. 責任の制限',
        content: [
          { type: 'label', text: '法律で許容される最大限の範囲で、以下は責任を負いません' },
          { type: 'bullets', items: ['AMAI Labs', 'その寄稿者', '関連会社', '研究者', 'エンジニア', '関連団体'] },
          { type: 'label', text: '以下から生じるいかなる損害についても' },
          { type: 'bullets', items: [
            '資料へのアクセスまたは使用',
            '資料への依存',
            '誤りまたは脱漏',
            'システム障害',
            'データまたはビジネス機会の喪失',
            '研究コンテンツの誤解または誤用',
            'AMAI Labsとのその他の相互作用',
          ]},
          { type: 'p', text: '資料に対する不満に対するお客様の唯一の救済手段は、使用を中止することです。' },
        ],
      },
      {
        title: '12. 可用性の保証なし',
        content: [
          { type: 'label', text: 'AMAI Labsは、一時的または恒久的に以下を行う場合があります' },
          { type: 'bullets', items: ['アクセスの制限', 'ポータルの変更', 'コンテンツの変更', '機能の制限', 'セクションの削除', 'サイトの一時停止'] },
          { type: 'p', text: '通知および責任なく行われる場合があります。' },
        ],
      },
      {
        title: '13. 規約の承諾',
        content: [
          { type: 'label', text: 'AMAI Labsにいかなる形でアクセスすることにより、以下を確認するものとします' },
          { type: 'bullets', items: [
            'これらの規約を読み、理解したこと',
            '資料を非商業的研究目的でのみ使用することに同意すること',
            'すべての資料の実験的性質を認識すること',
            '保証、コミットメント、および保証の欠如を理解すること',
            'すべての責任の制限を受け入れること',
          ]},
          { type: 'p', text: '同意されない場合は、直ちに退出してください。' },
        ],
      },
    ],
  },
  ar: {
    sections: [
      {
        title: '1. مقدمة',
        content: [
          { type: 'p', text: 'مرحباً بكم في AMAI Labs.' },
          { type: 'p', text: 'من خلال الوصول إلى هذه البوابة أو وثائقها أو موادها البحثية أو أوصافها المفاهيمية أو مخططاتها أو نماذجها الأولية أو أي محتوى ذي صلة (يُشار إليها مجتمعة بـ "المواد")، فإنك تقر وتوافق على الشروط والأحكام التالية ("الشروط").' },
          { type: 'p', text: 'AMAI Labs هو قسم بحثي مسؤول عن وصف وتقييم واستكشاف بنية تحتية حاسوبية لامركزية للوكلاء المستقلين ("بروتوكول AMAI"). يشير وصولك إلى هذه البوابة إلى فهمك بأن AMAI Labs لا يقدم منتجاً تجارياً، وأن جميع المواد مقدمة فقط لأغراض إعلامية وتعليمية وتجريبية.' },
          { type: 'p', text: 'إذا كنت لا توافق على هذه الشروط، يجب عليك التوقف عن الاستخدام فوراً.' },
        ],
      },
      {
        title: '2. الطبيعة غير التجارية وغير الاستشارية للمواد',
        content: [
          { type: 'label', text: 'جميع المواد المقدمة من خلال AMAI Labs' },
          { type: 'bullets', items: [
            'لا تشكل عرضاً تجارياً',
            'لا تنشئ أي علاقة استشارية أو ائتمانية أو وساطة أو علاقة عميل',
            'لا تمثل إرشادات استثمارية',
            'لا تشكل مشورة قانونية أو مالية أو تنظيمية',
            'لا تشكل جزءاً من أي طلب أو حث أو نشاط تسويقي',
          ]},
          { type: 'p', text: 'لا ينبغي تفسير أي شيء هنا على أنه تمثيل بأن أي نظام أو بروتوكول أو ميزة أو قدرة موصوفة سيتم تنفيذها أو نشرها أو ستعمل كما هو متوقع.' },
        ],
      },
      {
        title: '3. غرض AMAI Labs',
        content: [
          { type: 'label', text: 'يقدم AMAI Labs' },
          { type: 'bullets', items: [
            'البحث البروتوكولي والأطر المفاهيمية',
            'المخططات المعمارية والأوليات التقنية',
            'النماذج الاقتصادية وآليات تسجيل الثقة',
            'خطط التطوير المستقبلية',
            'المواصفات التجريبية والنماذج الأولية والاختبارات',
          ]},
          { type: 'p', text: 'تصف هذه المواد بنية تحتية محتملة للوكلاء الحاسوبيين المستقلين. قد تحتوي على أفكار في مراحلها المبكرة أو مكونات تجريبية أو مواصفات أولية.' },
          { type: 'label', text: 'يُقدم الوصول فقط لأغراض' },
          { type: 'bullets', items: [
            'التحليل التعليمي',
            'التقييم التقني',
            'المراجعة البحثية',
            'التجريب غير التجاري',
          ]},
          { type: 'p', text: 'أي استخدام آخر محظور بشكل صارم.' },
        ],
      },
      {
        title: '4. البيانات التطلعية',
        content: [
          { type: 'label', text: 'قد تتضمن المواد بيانات تطلعية مثل' },
          { type: 'bullets', items: [
            'البنية المعمارية المتوقعة',
            'الميزات المقترحة',
            'النماذج الاقتصادية المفاهيمية',
            'منهجيات تسجيل الثقة',
            'التكاملات المحتملة',
            'مسارات النظام البيئي طويلة المدى',
          ]},
          { type: 'p', text: 'هذه البيانات غير مؤكدة بطبيعتها وقابلة للتغيير.' },
          { type: 'label', text: 'AMAI Labs' },
          { type: 'bullets', items: [
            'لا يضمن دقة أو اكتمال أو حدوث أي مفهوم موصوف في المستقبل',
            'لا يلتزم بتقديم أي ميزة أو قدرة أو إصدار',
            'يحتفظ بالحق في تعديل أو إيقاف أي مكون من مكونات البحث في أي وقت',
          ]},
          { type: 'p', text: 'لا ينبغي الاعتماد على أي شيء في المواد كوعد بالأداء أو خلق القيمة أو إصدار النظام أو النتائج التجارية.' },
        ],
      },
      {
        title: '5. عدم وجود ضمانات',
        content: [
          { type: 'p', text: 'جميع المواد مقدمة "كما هي" دون أي ضمانات من أي نوع، سواء كانت صريحة أو ضمنية.' },
          { type: 'label', text: 'يشمل ذلك، على سبيل المثال لا الحصر' },
          { type: 'bullets', items: [
            'الملاءمة لغرض معين',
            'ضمانات الأداء',
            'الموثوقية أو الصحة أو الاكتمال',
            'ضمانات الأمان',
            'الملاءمة للنشر التجاري',
            'الامتثال القانوني أو التنظيمي',
          ]},
          { type: 'p', text: 'قد يحتوي بروتوكول AMAI، في حال نشره، على عيوب أو قيود تصميمية أو مخاطر متأصلة في الأنظمة الحاسوبية اللامركزية أو الموزعة أو المستقلة. أنت تتحمل كامل المسؤولية عن تفسيرك واستخدامك للمواد.' },
        ],
      },
      {
        title: '6. الملكية الفكرية',
        content: [
          { type: 'p', text: 'جميع المحتويات المتاحة من خلال AMAI Labs — بما في ذلك المخططات والنصوص والنماذج والأوراق البحثية والرسومات والبنى المعمارية المفاهيمية وأوصاف الأنظمة — هي ملكية فكرية لـ AMAI Labs ما لم يُذكر خلاف ذلك.' },
          { type: 'label', text: 'لا يجوز لك' },
          { type: 'bullets', items: ['النسخ', 'التعديل', 'التوزيع', 'النشر', 'التكييف', 'التسويق التجاري'] },
          { type: 'p', text: 'لأي مواد دون إذن كتابي صريح.' },
        ],
      },
      {
        title: '7. الاستخدامات المحظورة',
        content: [
          { type: 'label', text: 'توافق على عدم استخدام AMAI Labs' },
          { type: 'bullets', items: [
            'لتقييم المواد لأغراض التطوير التجاري التنافسي',
            'لإنشاء أنظمة مشتقة يتم تسويقها باسم AMAI Labs أو بروتوكول AMAI',
            'لتحريف حالة أو جاهزية أو قدرات أبحاث AMAI',
            'للإيحاء بالتأييد أو الشراكة أو الانتماء',
            'لتنفيذ أنشطة غير قانونية أو احتيالية أو ضارة',
            'لتقديم بيانات استثمارية أو مالية أو استشارية باستخدام المواد',
            'لتقديم ادعاءات عامة حول خارطة طريق AMAI أو أدائها المستقبلي',
          ]},
          { type: 'p', text: 'يحتفظ AMAI Labs بجميع الحقوق في تقييد أو إنهاء الوصول في حالة الانتهاكات.' },
        ],
      },
      {
        title: '8. عدم وجود مطالبات استثمارية أو أوراق مالية أو رموز',
        content: [
          { type: 'p', text: 'أي أوصاف لآليات الرموز أو نماذج الضمانات أو ترجيح الثقة أو الركائز الاقتصادية هي مفاهيمية بحتة ومخصصة للتقييم البحثي.' },
          { type: 'label', text: 'هي' },
          { type: 'bullets', items: [
            'ليست أدوات استثمارية',
            'لا تمثل حقوق ملكية أو إيرادات أو حوكمة أو حقوق ملكية',
            'ليست أدوات مالية',
            'قد لا تتوافق مع أي رمز أو أصل مستقبلي',
            'قد لا يتم تنفيذها أبداً',
          ]},
          { type: 'p', text: 'لا يشكل أي جزء من AMAI Labs عرضاً بموجب قوانين الأوراق المالية في أي ولاية قضائية.' },
        ],
      },
      {
        title: '9. مخاطر الأنظمة الرقمية والمستقلة',
        content: [
          { type: 'label', text: 'ينطوي البحث في الوكلاء المستقلين والبنية التحتية اللامركزية على مخاطر تشمل' },
          { type: 'bullets', items: [
            'الأعطال الحسابية',
            'سلوك الوكيل غير المتوقع',
            'عدم استقرار النموذج الاقتصادي',
            'التفاعلات العدائية',
            'الثغرات في الأنظمة المشفرة أو الموزعة',
            'انقطاعات الشبكة',
            'القيود التنظيمية',
          ]},
          { type: 'p', text: 'أنت تفهم وتقبل أن المواد قد تشير إلى أنظمة نظرية أو غير مكتملة أو خاضعة لمراجعة مستقبلية كبيرة.' },
        ],
      },
      {
        title: '10. الحياد القضائي والتنظيمي',
        content: [
          { type: 'label', text: 'لا يضمن AMAI Labs أن أبحاثه أو مواده المفاهيمية تتوافق مع المتطلبات القانونية أو التنظيمية لأي ولاية قضائية، بما في ذلك على سبيل المثال لا الحصر' },
          { type: 'bullets', items: [
            'قوانين الأوراق المالية',
            'اللوائح المالية',
            'أطر حماية البيانات',
            'لوائح سلامة الذكاء الاصطناعي',
            'متطلبات الأصول الرقمية عبر الحدود',
            'ضوابط التكنولوجيا السيادية',
          ]},
          { type: 'p', text: 'يتحمل المستخدمون وحدهم مسؤولية فهم والامتثال للقوانين المعمول بها في ولاياتهم القضائية. يُخلي AMAI Labs مسؤوليته عن التفسير أو النتائج التنظيمية.' },
        ],
      },
      {
        title: '11. تحديد المسؤولية',
        content: [
          { type: 'label', text: 'إلى أقصى حد يسمح به القانون، لا يتحمل المسؤولية كل من' },
          { type: 'bullets', items: ['AMAI Labs', 'المساهمون', 'الشركات التابعة', 'الباحثون', 'المهندسون', 'والكيانات المرتبطة'] },
          { type: 'label', text: 'عن أي أضرار ناشئة عن' },
          { type: 'bullets', items: [
            'الوصول إلى المواد أو استخدامها',
            'الاعتماد على المواد',
            'الأخطاء أو السهو',
            'أعطال النظام',
            'فقدان البيانات أو الفرص التجارية',
            'سوء تفسير أو إساءة استخدام المحتوى البحثي',
            'أو أي تفاعل آخر مع AMAI Labs',
          ]},
          { type: 'p', text: 'العلاج الوحيد لعدم رضاك عن المواد هو التوقف عن الاستخدام.' },
        ],
      },
      {
        title: '12. عدم ضمان التوفر',
        content: [
          { type: 'label', text: 'قد يقوم AMAI Labs مؤقتاً أو بشكل دائم بـ' },
          { type: 'bullets', items: ['تقييد الوصول', 'تعديل البوابة', 'تغيير المحتوى', 'تقييد الميزات', 'إزالة الأقسام', 'تعليق الموقع'] },
          { type: 'p', text: 'دون إشعار ودون مسؤولية.' },
        ],
      },
      {
        title: '13. قبول الشروط',
        content: [
          { type: 'label', text: 'من خلال الوصول إلى AMAI Labs بأي صفة، فإنك تؤكد أنك' },
          { type: 'bullets', items: [
            'قرأت وفهمت هذه الشروط',
            'توافق على استخدام المواد فقط لأغراض البحث غير التجاري',
            'تقر بالطبيعة التجريبية لجميع المواد',
            'تفهم عدم وجود ضمانات أو التزامات أو كفالات',
            'وتقبل جميع قيود المسؤولية',
          ]},
          { type: 'p', text: 'إذا كنت لا تقبل، يجب عليك المغادرة فوراً.' },
        ],
      },
    ],
  },
};
