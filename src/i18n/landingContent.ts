import type { Language } from '@/contexts/LanguageContext';

export type FaqLink = {
  label: string;
  to?: string;
  href?: string;
  arrow: string;
};

export type LandingCopy = {
  hero: { headline: string; sub: string; scroll: string };
  pools: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    intro: string;
    colJob: string;
    colAgent: string;
    rows: { job: string; desc: string }[];
    deniedLabel: string;
    deniedLine1: string;
    deniedLine2: string;
  };
  existing: { eyebrow: string; title: string; body: string; cta: string; note: string };
  launchpad: {
    eyebrow: string;
    title: string;
    lead: string;
    p1: string;
    p2: string;
    link: string;
    comingSoon: string;
    close: string;
    zoomLabel: string;
  };
  transition: { t1: string; em1: string; t2: string; em2: string; t3: string };
  token: { line1: string; line2: string; caption: string };
  tari: { label: string; title: string; body: string; link: string };
  evidence: { eyebrow: string; title: string; body: string; aucLabel: string; ci: string };
  faq: {
    eyebrow: string;
    title: string;
    tag: string;
    items: { q: string; a: string; links?: FaqLink[] }[];
  };
};

const en: LandingCopy = {
  hero: {
    headline: 'Agents work. You get paid.',
    sub: 'Discover how Agent Operated pools can transform the way\ncreators and communities earn *together.*',
    scroll: 'Scroll',
  },
  pools: {
    eyebrow: 'Agent-operated pools.',
    titleA: 'Liquidity Pools.',
    titleB: 'Built to reward.',
    intro: 'The World’s First Agent Operated liquidity pools that pay holders in Tokenized Stocks.',
    colJob: 'Job',
    colAgent: 'AMAI Operator Agent',
    rows: [
      { job: 'Collect', desc: 'Collect the swap fees the pool’s position has earned.' },
      { job: 'Convert', desc: 'Swap fees into the tokenized stocks. NVDA, TSLA and more.' },
      { job: 'Pay', desc: "Distribute the holders' share to their wallets." },
      { job: 'Lend idle', desc: 'Put idle treasury to work within defined limits.' },
      { job: 'Rebalance', desc: 'Adjust the liquidity range as conditions change.' },
      { job: 'Sit out', desc: 'Pause collections around specified market events.' },
    ],
    deniedLabel: 'Denied Permissions',
    deniedLine1: 'The operator cannot withdraw the pool’s principal.',
    deniedLine2: 'It cannot expand its own permissions.',
  },
  existing: {
    eyebrow: 'For Existing Pools',
    title: 'Hello, Operator.',
    body: 'Add an Operator to existing pools and your community gets a share of fees earned. The operator turns that share into Stock Tokens and delivers them to your holders.',
    cta: 'Meet your operator',
    note: 'Coming soon on Robinhood Chain.',
  },
  launchpad: {
    eyebrow: 'Tokens that pay',
    title: 'The Launchpad.',
    lead: 'Your community earns with you.',
    p1: 'Creators launch for $0 and receive 75% of trading fees, before and after graduation.',
    p2: 'You choose the Stock Token and how much of your share goes to holders. Every launch comes with an AI operator to handle the payouts.',
    link: 'Launchpad details',
    comingSoon: 'Coming Soon',
    close: 'Close',
    zoomLabel: 'Open a larger view of the launchpad',
  },
  transition: {
    t1: 'Fees generated ',
    em1: 'buy and burn AMAI',
    t2: ', while paying holders in ',
    em2: 'Stock Tokens',
    t3: '.',
  },
  token: {
    line1: 'Hold AMAI.',
    line2: 'Get paid in',
    caption: 'Stock tokens on Robinhood Chain',
  },
  tari: {
    label: 'Trust & Risk Index',
    title: 'Backed By TARI™.',
    body: 'A credit score built from onchain history and observed agent behavior.',
    link: 'How it works',
  },
  evidence: {
    eyebrow: 'The evidence',
    title: 'Compromise leaves a pattern.',
    body: 'Across 726 benchmark runs, compromised agents tended to score lower. TARI measured the difference using tool-call metadata alone.',
    aucLabel: 'AUC · Benchmark discrimination',
    ci: '95% confidence interval: 0.805–0.864',
  },
  faq: {
    eyebrow: 'Questions?',
    title: 'AMAI Labs.',
    tag: 'Infrastructure & Research',
    items: [
      {
        q: 'What are AMAI Operators?',
        a: "Operators are agents assigned to manage a pool's trading-fee income. They collect fees, convert them into selected Stock Tokens, and distribute the holders' share. Each operator has a defined job and wallet permissions that limit what it can do.",
        links: [{ label: 'Explore Operators', to: '/operators', arrow: '→' }],
      },
      {
        q: 'What is TARI?',
        a: "TARI is AMAI's Trust & Risk Index. It has two separate scoring engines: one assesses observed AI-agent behavior, and the other assesses onchain wallet credit history. Scores include confidence information. They help you assess risk, but do not guarantee safety.",
        links: [
          { label: 'Explore TARI', to: '/tari', arrow: '→' },
          { label: 'Read the methodology', to: '/methodology', arrow: '→' },
        ],
      },
      {
        q: 'What is the Launchpad?',
        a: "The Launchpad brings token creation, a liquidity pool, and an attached operator into one flow. It is designed for projects that want an operator to manage their pool's fee income and distribute a share to their token holders.",
        links: [{ label: 'Explore Launchpad', to: '/launchpad', arrow: '→' }],
      },
      {
        q: 'What is Lens?',
        a: "Lens makes an agent's activity inspectable through recorded tool calls, findings, and history. Its content-off approach focuses on tool-use metadata rather than the contents of prompts or documents. Where configured, Interceptor can hold a tool call for human approval before it executes.",
      },
      {
        q: 'What is the Bureau?',
        a: "The Bureau is AMAI's public interface for onchain credit scores. Explore supported wallet records, their scores, and the evidence behind them. It gives the credit research a place where people can inspect individual results.",
        links: [{ label: 'Open the Bureau', href: 'https://bureau.amai.net/', arrow: '↗' }],
      },
      {
        q: 'Which token makes me eligible for distributions?',
        a: "Eligibility is tied to the token specified for each participating pool and your balance at its distribution snapshot. For the $AMAI pool, that token is $AMAI. For another project's pool, it is that project's token. Each pool's distribution rules determine the eligible holders and their shares.",
      },
      {
        q: 'Where do the distributions come from?',
        a: "Distributions are funded by trading fees earned by the pool's liquidity position. The operator converts collected fees into the selected Stock Tokens and allocates the holders' share under the pool's rules. Amounts depend on trading activity, costs, and those rules. There is no fixed payout.",
      },
      {
        q: 'What are Stock Tokens?',
        a: "Robinhood Stock Tokens are tokenized debt securities that provide economic exposure to underlying stocks or ETFs. They do not confer ownership of the underlying shares. Availability and eligibility depend on the issuer's terms and jurisdiction.",
        links: [{ label: 'About Stock Tokens', href: 'https://docs.robinhood.com/chain/stock-tokens/', arrow: '↗' }],
      },
      {
        q: "Can an operator withdraw the pool's principal?",
        a: "The operator's role excludes withdrawing pool principal and changing its own permissions. These restrictions apply to the operator role. They do not eliminate market risk or every risk involving collected fees.",
      },
      {
        q: 'What can I use today?',
        a: 'You can explore the Bureau, read the published methodology and benchmark results, and use the TARI SDK for local agent observation on PyPI. The integrated operator and launchpad experience is still being built and tested. The demonstrated pool payout cycle ran on a local fork of Robinhood Chain.',
        links: [
          { label: 'Bureau', href: 'https://bureau.amai.net/', arrow: '↗' },
          { label: 'Methodology', to: '/methodology', arrow: '→' },
          { label: 'PyPI', href: 'https://pypi.org/project/amai-tari/', arrow: '↗' },
        ],
      },
    ],
  },
};

const ja: LandingCopy = {
  hero: {
    headline: 'エージェントが働き、あなたが受け取る。',
    sub: 'Agent Operated プールが、クリエイターとコミュニティの*新しい収益のかたち*をどのように実現するかをご覧ください。',
    scroll: 'スクロール',
  },
  pools: {
    eyebrow: 'エージェント運用プール',
    titleA: '流動性プール。',
    titleB: '報酬のために構築。',
    intro: 'トークン化された株式で保有者に分配する、世界初のエージェント運用型流動性プール。',
    colJob: '役割',
    colAgent: 'AMAI オペレーターエージェント',
    rows: [
      { job: '回収', desc: 'プールのポジションが得たスワップ手数料を回収します。' },
      { job: '変換', desc: '手数料をトークン化株式に交換します。NVDA、TSLA など。' },
      { job: '分配', desc: '保有者の取り分をそれぞれのウォレットへ分配します。' },
      { job: '遊休資金の運用', desc: '定められた上限の範囲内で遊休資金を運用します。' },
      { job: 'リバランス', desc: 'market の状況に応じて流動性レンジを調整します。' },
      { job: '待機', desc: '指定された市場イベントの前後は回収を一時停止します。' },
    ],
    deniedLabel: '許可されない操作',
    deniedLine1: 'オペレーターはプールの元本を引き出せません。',
    deniedLine2: '自身の権限を拡大することもできません。',
  },
  existing: {
    eyebrow: '既存プールの方へ',
    title: 'こんにちは、オペレーター。',
    body: '既存のプールに AI オペレーターを追加すると、コミュニティが得た手数料の取り分を受け取ります。オペレーターがその取り分を株式トークンに変え、保有者へ届けます。',
    cta: 'オペレーターを見る',
    note: 'Robinhood Chain で近日公開。',
  },
  launchpad: {
    eyebrow: '分配するトークン',
    title: 'ローンチパッド。',
    lead: 'コミュニティと共に収益を得る。',
    p1: '作成者は費用 $0 でローンチでき、卒業の前後を通じて取引手数料の 75% を受け取ります。',
    p2: '株式トークンと、自分の取り分のうち保有者へ回す割合を選べます。すべてのローンチには分配を担う AI オペレーターが付きます。',
    link: 'ローンチパッドの詳細',
    comingSoon: '近日公開',
    close: '閉じる',
    zoomLabel: 'ローンチパッドの拡大表示を開く',
  },
  transition: {
    t1: '発生した手数料は ',
    em1: 'AMAI を買い戻してバーン',
    t2: 'し、保有者には ',
    em2: '株式トークン',
    t3: ' が支払われます。',
  },
  token: {
    line1: 'AMAI を保有。',
    line2: '受け取るのは',
    caption: 'Robinhood Chain 上の株式トークン',
  },
  tari: {
    label: '信用・リスク指数',
    title: 'TARI™ が裏付け。',
    body: 'オンチェーン履歴と観測されたエージェントの挙動から算出される信用スコア。',
    link: '仕組みを見る',
  },
  evidence: {
    eyebrow: 'エビデンス',
    title: '侵害はパターンを残す。',
    body: '726 件のベンチマーク実行において、侵害されたエージェントはスコアが低くなる傾向がありました。TARI はツール呼び出しのメタデータのみでその差を測定しています。',
    aucLabel: 'AUC · ベンチマーク判別性能',
    ci: '95% 信頼区間: 0.805–0.864',
  },
  faq: {
    eyebrow: 'ご質問',
    title: 'AMAI Labs.',
    tag: 'インフラストラクチャと研究',
    items: [
      {
        q: 'AMAI オペレーターとは何ですか？',
        a: 'オペレーターは、プールの取引手数料収入を管理するために割り当てられたエージェントです。手数料を回収し、選択された株式トークンに変換し、保有者の取り分を分配します。各オペレーターには定められた役割と、実行できる範囲を制限するウォレット権限があります。',
        links: [{ label: 'オペレーターを見る', to: '/operators', arrow: '→' }],
      },
      {
        q: 'TARI とは何ですか？',
        a: 'TARI は AMAI の信用・リスク指数です。観測された AI エージェントの挙動を評価するエンジンと、オンチェーンのウォレット信用履歴を評価するエンジンの 2 つで構成されます。スコアには信頼度の情報が含まれます。リスク評価の助けにはなりますが、安全性を保証するものではありません。',
        links: [
          { label: 'TARI を見る', to: '/tari', arrow: '→' },
          { label: '方法論を読む', to: '/methodology', arrow: '→' },
        ],
      },
      {
        q: 'ローンチパッドとは何ですか？',
        a: 'ローンチパッドは、トークンの作成、流動性プール、そして紐づくオペレーターを一つの流れにまとめます。プールの手数料収入をオペレーターに管理させ、その一部をトークン保有者へ分配したいプロジェクト向けです。',
        links: [{ label: 'ローンチパッドを見る', to: '/launchpad', arrow: '→' }],
      },
      {
        q: 'Lens とは何ですか？',
        a: 'Lens は、記録されたツール呼び出し、検出事項、履歴を通じてエージェントの活動を検証可能にします。コンテンツを読み取らない方式で、プロンプトや文書の内容ではなくツール利用のメタデータに注目します。設定に応じて、Interceptor が実行前にツール呼び出しを保留し、人の承認を求めることができます。',
      },
      {
        q: 'Bureau とは何ですか？',
        a: 'Bureau は、オンチェーン信用スコアの公開インターフェースです。対応するウォレットの記録、スコア、その根拠を確認できます。信用に関する研究結果を個別に検証できる場所です。',
        links: [{ label: 'Bureau を開く', href: 'https://bureau.amai.net/', arrow: '↗' }],
      },
      {
        q: 'どのトークンを保有すれば分配の対象になりますか？',
        a: '対象となるかは、参加する各プールで指定されたトークンと、分配スナップショット時点の残高によって決まります。$AMAI のプールでは $AMAI が該当します。他プロジェクトのプールでは、そのプロジェクトのトークンです。対象となる保有者と取り分は各プールの分配ルールが定めます。',
      },
      {
        q: '分配の原資はどこから来ますか？',
        a: '分配は、プールの流動性ポジションが得た取引手数料から支払われます。オペレーターは回収した手数料を選択された株式トークンに変換し、プールのルールに従って保有者の取り分を割り当てます。金額は取引状況、コスト、ルールによって変動します。固定の支払い額はありません。',
      },
      {
        q: '株式トークンとは何ですか？',
        a: 'Robinhood の株式トークンは、原資産となる株式や ETF への経済的エクスポージャーを提供するトークン化された債務証券です。原株の所有権を与えるものではありません。提供状況や対象要件は発行者の条件と法域によって異なります。',
        links: [{ label: '株式トークンについて', href: 'https://docs.robinhood.com/chain/stock-tokens/', arrow: '↗' }],
      },
      {
        q: 'オペレーターはプールの元本を引き出せますか？',
        a: 'オペレーターの役割には、プール元本の引き出しや自身の権限の変更は含まれません。これらの制限はオペレーターの役割に適用されるものであり、市場リスクや回収済み手数料に関わるすべてのリスクを排除するものではありません。',
      },
      {
        q: '今日利用できるものは何ですか？',
        a: 'Bureau を閲覧し、公開されている方法論とベンチマーク結果を読み、ローカルでのエージェント観測に TARI SDK を PyPI から利用できます。オペレーターとローンチパッドを統合した体験は現在も構築とテストの途上です。実演したプールの分配サイクルは Robinhood Chain のローカルフォーク上で実行されました。',
        links: [
          { label: 'Bureau', href: 'https://bureau.amai.net/', arrow: '↗' },
          { label: '方法論', to: '/methodology', arrow: '→' },
          { label: 'PyPI', href: 'https://pypi.org/project/amai-tari/', arrow: '↗' },
        ],
      },
    ],
  },
};

const ar: LandingCopy = {
  hero: {
    headline: 'الوكلاء يعملون. وأنت تتلقى الأرباح.',
    sub: 'اكتشف كيف يمكن لمجمّعات Agent Operated أن تغيّر طريقة كسب المبدعين والمجتمعات *معاً.*',
    scroll: 'انزل للأسفل',
  },
  pools: {
    eyebrow: 'مجمعات يديرها وكلاء',
    titleA: 'مجمعات السيولة.',
    titleB: 'مصمم للمكافآت.',
    intro: 'أول مجمعات سيولة في العالم يديرها وكلاء أذكياء وتوزع على الحاملين أسهماً مرمزة.',
    colJob: 'المهمة',
    colAgent: 'وكيل التشغيل AMAI',
    rows: [
      { job: 'التحصيل', desc: 'تحصيل رسوم المبادلة التي حققها مركز المجمع.' },
      { job: 'التحويل', desc: 'تحويل الرسوم إلى أسهم مرمزة مثل NVDA وTSLA وغيرها.' },
      { job: 'التوزيع', desc: 'توزيع حصة الحاملين على محافظهم.' },
      { job: 'تشغيل الأرصدة الخاملة', desc: 'تشغيل الأرصدة الخاملة داخل حدود محددة.' },
      { job: 'إعادة التوازن', desc: 'تعديل نطاق السيولة مع تغير الظروف.' },
      { job: 'التوقف المؤقت', desc: 'إيقاف التحصيل مؤقتاً حول أحداث سوقية محددة.' },
    ],
    deniedLabel: 'صلاحيات ممنوعة',
    deniedLine1: 'لا يمكن للوكيل سحب رأس مال المجمع.',
    deniedLine2: 'ولا يمكنه توسيع صلاحياته بنفسه.',
  },
  existing: {
    eyebrow: 'للمجمعات القائمة',
    title: 'مرحباً، أيها المشغل.',
    body: 'أضف وكيلاً ذكياً إلى المجمّعات الحالية ليحصل مجتمعك على حصة من الرسوم المحققة. يحوّل الوكيل تلك الحصة إلى أسهم مرمزة ويوصلها إلى الحاملين.',
    cta: 'تعرف على وكيلك',
    note: 'قريباً على Robinhood Chain.',
  },
  launchpad: {
    eyebrow: 'عملات توزع أرباحاً',
    title: 'منصة الإطلاق.',
    lead: 'مجتمعك يكسب معك.',
    p1: 'يطلق المنشئون بدون أي تكلفة ويحصلون على 75% من رسوم التداول، قبل التخرج وبعده.',
    p2: 'أنت تختار السهم المرمز ونسبة حصتك التي تذهب إلى الحاملين. ويأتي كل إطلاق مع وكيل ذكي يتولى التوزيعات.',
    link: 'تفاصيل منصة الإطلاق',
    comingSoon: 'قريباً',
    close: 'إغلاق',
    zoomLabel: 'فتح عرض أوسع لمنصة الإطلاق',
  },
  transition: {
    t1: 'الرسوم المُحقَّقة ',
    em1: 'تشتري AMAI وتحرقها',
    t2: '، وتُدفع للحاملي على شكل ',
    em2: 'أسهم مرمزة',
    t3: '.',
  },
  token: {
    line1: 'احتفظ بـ AMAI.',
    line2: 'واستلم أرباحك بـ',
    caption: 'أسهم مرمزة على Robinhood Chain',
  },
  tari: {
    label: 'مؤشر الثقة والمخاطر',
    title: 'مدعوم بـ TARI™.',
    body: 'درجة ثقة تُبنى من السجل على الشبكة ومن سلوك الوكيل المرصود.',
    link: 'كيف يعمل',
  },
  evidence: {
    eyebrow: 'الأدلة',
    title: 'الاختراق يترك نمطاً.',
    body: 'عبر 726 تشغيلاً مرجعياً، حصل الوكلاء المخترقون على درجات أدنى في المتوسط. وقاس TARI هذا الفرق باستخدام بيانات نداءات الأدوات وحدها.',
    aucLabel: 'AUC · قدرة التمييز المرجعية',
    ci: 'فاصل ثقة 95%: 0.805–0.864',
  },
  faq: {
    eyebrow: 'أسئلة؟',
    title: 'AMAI Labs.',
    tag: 'البنية التحتية والبحث',
    items: [
      {
        q: 'ما هم وكلاء AMAI؟',
        a: 'الوكلاء هم برامج ذكية تُكلَّف بإدارة إيرادات رسوم التداول في المجمع. تحصّل الرسوم، وتحولها إلى الأسهم المرمزة المختارة، وتوزع حصة الحاملين. ولكل وكيل مهمة محددة وصلاحيات محفظة تحد مما يستطيع فعله.',
        links: [{ label: 'استكشف الوكلاء', to: '/operators', arrow: '→' }],
      },
      {
        q: 'ما هو TARI؟',
        a: 'TARI هو مؤشر الثقة والمخاطر من AMAI. يعمل بمحركي تقييم منفصلين: أحدهما يقيّم سلوك الوكيل الذكي المرصود، والآخر يقيّم السجل الائتماني للمحفظة على الشبكة. وتتضمن الدرجات معلومات عن مستوى الثقة. تساعدك على تقدير المخاطر لكنها لا تضمن السلامة.',
        links: [
          { label: 'استكشف TARI', to: '/tari', arrow: '→' },
          { label: 'اقرأ المنهجية', to: '/methodology', arrow: '→' },
        ],
      },
      {
        q: 'ما هي منصة الإطلاق؟',
        a: 'تجمع منصة الإطلاق إنشاء العملة، ومجمع السيولة، والوكيل المرتبط به في مسار واحد. وهي مخصصة للمشاريع التي تريد وكيلاً يدير إيرادات رسوم مجمعها ويوزع حصة منها على حاملي عملتها.',
        links: [{ label: 'استكشف منصة الإطلاق', to: '/launchpad', arrow: '→' }],
      },
      {
        q: 'ما هو Lens؟',
        a: 'يجعل Lens نشاط الوكيل قابلاً للفحص عبر نداءات الأدوات المسجلة والنتائج والسجل. ويركز نهجه على بيانات استخدام الأدوات دون قراءة محتوى الأوامر أو المستندات. وحيث يكون مهيأً، يمكن لـ Interceptor تعليق نداء أداة لانتظار موافقة بشرية قبل تنفيذه.',
      },
      {
        q: 'ما هو Bureau؟',
        a: 'Bureau هو الواجهة العامة من AMAI لدرجات الائتمان على الشبكة. استعرض سجلات المحافظ المدعومة ودرجاتها والأدلة التي تقف خلفها. وهو يمنح البحث الائتماني مكاناً يمكن فيه فحص النتائج الفردية.',
        links: [{ label: 'افتح Bureau', href: 'https://bureau.amai.net/', arrow: '↗' }],
      },
      {
        q: 'أي عملة تجعلني مؤهلاً للتوزيعات؟',
        a: 'تتحدد الأهلية بالعملة المحددة لكل مجمع مشارك وبرصيدك عند لحظة التقاط بيانات التوزيع. في مجمع $AMAI تكون العملة هي $AMAI. وفي مجمع مشروع آخر تكون عملة ذلك المشروع. وقواعد التوزيع لكل مجمع تحدد الحاملين المؤهلين وحصصهم.',
      },
      {
        q: 'من أين تأتي التوزيعات؟',
        a: 'تُموَّل التوزيعات من رسوم التداول التي يحققها مركز السيولة في المجمع. يحوّل الوكيل الرسوم المحصلة إلى الأسهم المرمزة المختارة ويخصص حصة الحاملين وفق قواعد المجمع. وتعتمد المبالغ على نشاط التداول والتكاليف وتلك القواعد. ولا توجد دفعة ثابتة.',
      },
      {
        q: 'ما هي الأسهم المرمزة؟',
        a: 'أسهم Robinhood المرمزة هي أوراق دين مرمزة تمنح تعرضاً اقتصادياً لأسهم أو صناديق مؤشرات أساسية. ولا تمنح ملكية في الأسهم الأساسية. ويعتمد توفرها والأهلية لها على شروط الجهة المصدرة وعلى النطاق القضائي.',
        links: [{ label: 'عن الأسهم المرمزة', href: 'https://docs.robinhood.com/chain/stock-tokens/', arrow: '↗' }],
      },
      {
        q: 'هل يمكن للوكيل سحب رأس مال المجمع؟',
        a: 'لا يشمل دور الوكيل سحب رأس مال المجمع ولا تغيير صلاحياته. وتنطبق هذه القيود على دور الوكيل، لكنها لا تلغي مخاطر السوق ولا كل المخاطر المتعلقة بالرسوم المحصلة.',
      },
      {
        q: 'ما المتاح اليوم؟',
        a: 'يمكنك استعراض Bureau، وقراءة المنهجية المنشورة ونتائج القياس المرجعي، واستخدام حزمة TARI لرصد الوكلاء محلياً من PyPI. أما التجربة المتكاملة للوكيل ومنصة الإطلاق فلا تزال قيد البناء والاختبار. وقد نُفذت دورة التوزيع المعروضة على نسخة محلية من Robinhood Chain.',
        links: [
          { label: 'Bureau', href: 'https://bureau.amai.net/', arrow: '↗' },
          { label: 'المنهجية', to: '/methodology', arrow: '→' },
          { label: 'PyPI', href: 'https://pypi.org/project/amai-tari/', arrow: '↗' },
        ],
      },
    ],
  },
};

export const landingContent: Record<Language, LandingCopy> = { en, ja, ar };

export const pickLanding = (lang: Language): LandingCopy => landingContent[lang] || en;
