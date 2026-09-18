import type { Language } from '@/contexts/LanguageContext';

export const editorialMarkdown: Record<Language, Record<'operators' | 'token' | 'launchpad', string>> = {
  "en": {
    "operators": "# The Operator\n\nEvery pool in DeFi is a vault. This one has a worker.\n\n## TL;DR\n\nAMAI operators turn a share of pool trading fees into Stock Token payouts for holders.\n\n## Summary\n\nCreators choose the Stock Token and the share of fees their holders receive. An AI operator handles collection, conversion and payouts within permissions enforced onchain. An independent watcher checks payout lists before release, every payment produces a receipt, and the operator's record informs its TARI score. The operator and payout contract currently run on Robinhood Chain testnet.\n\n## The deep dive\n\n### 1. What an operator is\n\nAn operator is three pieces working together. A wallet: a Safe, the multisig standard most of DeFi keeps its treasuries in, holding only the fees that have arrived and the stock they became, for hours at most, and never a position, a launch token or any principal. A policy: a Zodiac Roles module bolted onto that Safe, which is the industry standard way to give a key a narrow job; it lists exactly what the operator's key may call and with which arguments, and the chain enforces that list before any transaction executes. And a worker: the agent process that runs the cycle, applies the rules, writes the receipts and talks to the payout contract.\n\nThe operator's key is a working key. It signs the everyday actions. It cannot widen its own permissions, cannot move the Safe's ownership, and cannot pull anything out of the pool. Ownership of the Safe belongs to AMAI's treasury multisig, and every owner action on it passes through a delay module so it is visible before it lands.\n\n### 2. Where the money comes from\n\nOn the launchpad, every token's pool charges a 1% fee on every trade, forever, and the fee is split at the source: 75% to the creator, 25% to AMAI. The creator decides at launch how much of their 75 goes to holders through the operator. That share arrives in the operator's Safe in ETH, the pool's quote asset. That is the only way money enters the operator.\n\nFor a token that already exists elsewhere on the chain, the creator points their pool's fee recipient at an operator. The fees they were already earning flow to the Safe instead. Of what arrives, 75% goes to their holders in stock and 25% to AMAI. Nothing else changes about their token, their pool or their liquidity, and pointing the recipient back fires the operator.\n\nFor $AMAI, AMAI's own 25% of every launchpad fee is split four ways: 30% runs the company, 40% buys $AMAI on the open market and burns it, 25% is converted to stock and paid to $AMAI holders, and 5% funds a daily jackpot. Only the holder slice runs through an operator, the same way any other token's does. The buying and the burning are AMAI's own treasury actions, funded by AMAI's share and pointed at $AMAI alone. No operator ever buys or burns the token whose pool it works for, so a creator's community is paid in stock and its supply is left alone.\n\n### 3. The cycle, step by step\n\nA cycle has four steps, and each step evaluates its rules before it acts.\n\nCollect. The operator pulls the fees that have accumulated since the last cycle. Before it does, the schedule rule checks the cycle is inside its window and not too soon after the last one.\n\nConvert. The operator swaps the collected ETH into the chosen stock token through the Universal Router, with the Safe pinned as the only recipient. The price sanity rule compares the quote it received with a reference price for the stock and holds the cycle when the two are more than a few percent apart. The daily cap rule adds up the day's conversions and payouts in dollars and holds anything that would take the day over its cap.\n\nSnapshot. The operator reads the token's holders at a specific block from its own indexer and hashes the list. The snapshot hash rule refuses to pay against a holder list that does not verify.\n\nPay. The operator builds the payout list from the snapshot, applies the dust floor so no payment is too small to be worth its gas, and hands the list to the payout contract as a single committed root. The new recipient rule holds any payout to an address that has never been paid before, so a stranger appearing in the list is a human decision. The destination rule blocks any destination that is not on the record.\n\nTwo more rules complete the seven: the corporate action window, which holds conversions around splits and dividends and switches on with the live price feeds, and the destination allowlist, which is built from the record itself.\n\nEvery rule decision, allow, hold, skip or block, is a receipt. A hold parks the cycle and creates a HELD line on the operator's page with a countdown. A human approves what they saw, and that specific approval is itself a receipt; the rule stays on.\n\n### 4. The payout contract\n\nPayouts do not leave the Safe as direct transfers. They go through one shared payout contract, the distributor, built from OpenZeppelin components and audited before it saw money.\n\nThe operator funds a cycle by moving the stock into the contract, then commits a Merkle root: one hash that fixes every holder, every amount and the order, along with the head of its own receipt chain, so the payout on chain and the record off chain are tied together. From the moment the root is committed, a clock starts. For a launchpad pool the wait is six hours; for the $AMAI pool it is twelve. During the wait, a separate watcher, the hub, rebuilds the whole payout list from its own copy of the holder data and compares root, total, count, sum and every recipient. Any mismatch and it cancels the root. Any guardian, and every treasury signer is one, can pause the contract on their own.\n\nWhen the wait ends, anyone can send the payment transactions; the contract only pays leaves that match the root, exactly once each, and it checks that the stock actually left in the exact amount before it marks a holder paid. A holder the stock issuer has blocklisted is skipped and can be retried later by anyone. Unclaimed money in a cycle rolls forward into the pool's next cycle after 90 days. The contract keeps a running count of what it owes and shouts the moment it holds less than that, so an issuer action against the stock is visible immediately.\n\n### 5. The fence: what the operator cannot do\n\nThe permission policy admits four things: collect the fees, swap ETH into the chosen stock with the Safe as recipient, approve and fund the payout contract for its own pool, and commit or sweep a root for its own pool. That is the whole list.\n\nEverything else is refused by the chain before it can happen, and we prove each refusal by attempting it in tests that run against the real Safe and the real policy on a fork of Robinhood Chain: withdrawing the pool's principal, moving the position, sending ETH out of the Safe, transferring stock to any address, approving anyone but the payout contract, touching another pool, and changing the policy itself. The same suite runs against the contract deployed on testnet.\n\nThis is the sentence we build to and test against: a stolen operator key can do nothing but pay the real holders their real amounts, after a public wait any guardian can stop.\n\n### 6. The seven day lock\n\nThe payout contract's admin is not a person and not a wallet. It is a Timelock, a small standard contract whose only job is to hold a proposal in public for a fixed period before it can execute. Ours is seven days.\n\nRegistering a pool, changing a pool's payout delay or daily cap, granting or revoking a role, and unpausing after a guardian pause all pass through it. The proposal is written on chain the moment it is made, with its exact contents, and an event fires that the hub and the Bureau watch. For seven days it is visible and can be cancelled. After seven days anyone can execute it, and the contract accepts the change only if the time and the contents match.\n\nWhat that buys: nobody can change the rules of a pool quietly. A thief with the admin key can post a proposal the whole world sees for a week, while a guardian pauses payouts instantly and a cancel takes one transaction. Every creator and holder gets a week's warning before their pool's delay or cap moves. The trade is that our own legitimate changes wait a week too, which is why the emergency levers, pause and cancel, sit outside the lock.\n\n### 7. The record\n\nEvery action produces a receipt: the rule decisions, the collection, the conversion with its quote and reference price, the snapshot with its hash and holder count, the committed root, each payout and each failure with its reason, each hold and its approval. Receipts are content off, meaning they carry hashes and amounts rather than anything private, and each one carries the hash of the receipt before it, so the chain cannot be edited after the fact without breaking.\n\nThe chain's head is written into every committed root, which anchors the off chain record to the on chain payout. Anyone can download an operator's log and verify it offline. The Bureau reads the same log and shows each operator's page: score, tier, stock delivered, the ledger with its HELD lines, and what it refused to do.\n\n### 8. The TARI score\n\nTARI is a credit score for AI agents, built from conduct. An operator's score is computed from its own record: the cycles it completed, the holds it raised, the rules it obeyed, the payouts it delivered. The score sets the tier, and the tier sets what the operator is allowed to do, such as the size of the daily cap it can work under. A new operator starts with no record and the lowest tier. Check the score before you trust the operator; it is on the Bureau, and the record behind it is public.\n\n### 9. Hire and fire\n\nAt launch, the creator names the stock their holders will be paid in and sets a holder share: any part of their 75% of fees, from none to all of it. That share is routed at the source to the operator's Safe. The share can be changed with three days' notice, which shows on the token's page before it takes effect. Setting it to zero fires the operator; nothing flows to it and nothing is owed. Every token page that pays its holders carries the badge: PAYS HOLDERS IN NVDA.\n\n### 10. Bring your pool\n\nA token that launched anywhere else on Robinhood Chain can hire an operator without moving liquidity or capital. The creator points their pool's fee recipient at the operator, in one transaction, and chooses the share they route. Of what arrives, 75% is paid to their holders in stock and 25% to AMAI. Partners with more than one recipient set their split through a Splits contract. Pointing the fee recipient back fires the operator.\n\n### 11. Real world examples\n\nA creator launches a token and picks TSLA. Trading is brisk for a week; the pool collects about 3 ETH in fees. The creator has set the holder share to all of their 75. Each cycle the operator collects, converts at a quote it checked against the reference, snapshots 2,000 holders, commits a root, waits six hours in public, and pays. A holder with 1% of the supply receives 1% of the day's TSLA, in their wallet, with a receipt they can find on the Bureau. The token's page shows PAYS HOLDERS IN TSLA and the running total delivered.\n\nAn existing token attaches. A project that launched months ago on another launchpad points its fee recipient at an operator. From the next block, the fees it already earns flow to the Safe. Its holders are paid in NVDA from the next cycle. The team moved no liquidity, signed one transaction, and can reverse it with one more.\n\nA bad day, handled. Someone steals an operator's key at 3 a.m. They try to transfer the Safe's stock to their own address: refused by the policy. They try to send the ETH out: refused. They commit a payout root naming themselves: the hub rebuilds the list, finds a stranger in it, and cancels the root inside the six hour window; a guardian pauses the contract. The holders lose nothing. The record shows exactly what was attempted and what was refused, and the operator's page shows it too.\n\nThe market closes. The schedule rule keeps cycles inside their window, the price sanity rule holds any conversion whose quote drifts from the reference while the stock is not trading, and the corporate action window holds conversions across a split or a dividend. The holders see a HELD line with a countdown instead of a bad fill.\n\n### 12. Where it stands today\n\nThe operator runs full cycles on testnet against Robinhood's official test stock tokens. The first pool registration is sitting in its seven day lock on testnet, which is the rehearsal for mainnet. The Bureau's operator pages and the live feed follow when the first operator runs for real.\n\n### Glossary\n\nSafe: the multisig wallet standard that holds the operator's funds. Roles policy: the module that lists what the operator's key may do; the chain enforces it. Distributor: the shared payout contract that pays holders from a committed root. Root: one hash that fixes an entire payout list. Guardian: a key that can pause payouts on its own. Hub: the independent watcher that rebuilds each payout list and cancels a mismatch. Timelock: the contract that holds every rule change in public for seven days. Receipt: one entry in the operator's hash chained record. HELD: a cycle paused by a rule, waiting for a human. TARI: the agent's credit score, built from its record. Bureau: the public site where every operator's page lives.\n",
    "token": "# $AMAI\n\nThe launchpad has a token. It is paid the way every token on the launchpad can be paid.\n\n## TL;DR\n\nLaunchpad trading fees fund $AMAI buybacks, burns and Stock Token payouts to holders.\n\n## Summary\n\nAMAI receives 25% of trading fees across the launchpad. That share funds $AMAI buybacks and burns, Stock Token payouts to AMAI holders, operations and a daily jackpot. An AI operator handles payouts, with a receipt for every payment. The payout system runs on Robinhood Chain testnet, with the launchpad in development.\n\n## The deep dive\n\n### 1. What $AMAI is\n\n$AMAI is the token of the AMAI launchpad. It trades in a Uniswap v4 pool on Robinhood Chain, quoted in ETH like every other token on the platform.\n\nIt is not a fee token. You do not need it to launch a token, to hire an operator, to attach one to a pool you already own, or to be paid by one. Launching costs the creator nothing and the fees are charged in the pool's own quote asset. $AMAI holds one position in the system: it is the claim on AMAI's own share of what the launchpad earns.\n\n### 2. Where the money comes from\n\nEvery launch feeds it, and there are four sources.\n\nThe curve. Before a token graduates, every trade on its bonding curve pays 1.25%. Three quarters of that goes to the creator and a quarter to AMAI.\n\nThe pool. After graduation, every trade in the token's liquidity pool pays 1% forever, split the same way. The pool's own fee is zero, so this is the only charge.\n\nThe snipe tax. Buys in the first three seconds of a launch pay a decaying tax that starts at 99% and reaches zero, split 75 to the creator and 25 to AMAI like everything else.\n\nGraduation. When a token graduates, 7% of the ETH that would seed its pool goes to the treasury instead. The pool's price is unchanged at that moment, so the chart does not jump.\n\nAll of it arrives in ETH. None of it depends on anyone buying $AMAI.\n\n### 3. The four ways AMAI's share is used\n\nThirty percent runs the company. Salaries, infrastructure, audits, the boring things that make the rest work.\n\nForty percent buys $AMAI on the open market and burns what it buys. Open market means the same pool anyone else trades in, at the same price, with no special allocation and no minting. Burn means the tokens are destroyed rather than parked in a vault, so the supply goes down and stays down.\n\nTwenty five percent is converted into a stock token and paid to $AMAI holders by an operator, the same way a creator's token pays its own holders.\n\nFive percent funds the daily jackpot.\n\nThe split is written down, the flows are on chain, and every conversion, payment, buy and burn carries a receipt.\n\n### 4. Hold $AMAI, get paid in stock\n\nThe holder slice runs through an operator attached to the $AMAI pool, and that operator obeys exactly the rules described on the operator page.\n\nIt collects the ETH, checks the price it is quoted against a reference before it converts, snapshots who holds $AMAI at a specific block, builds the payout list, and commits it to the payout contract as a single hash. Then it waits. For $AMAI the wait is twelve hours, longer than the six a launchpad token gets, because this is the pool closest to us and the longer public window is the point. During the wait an independent watcher rebuilds the entire list from its own data and cancels the payment if anything differs, and any guardian can pause the contract alone.\n\nWhen the wait ends anyone can send the payment transactions, and the contract pays only what matches the committed list, exactly once each. Every payment lands as a receipt on the public record.\n\n### 5. The buyback and the burn\n\nAMAI buys $AMAI with its own share of the fees and destroys what it buys.\n\nToday this runs from the treasury by hand, with a receipt published for every buy and every burn, because doing it by hand with proof is more honest than automating something nobody can yet inspect. Once the first operator has a real record on the Bureau, the same job moves to an agent, on the same terms, with the same receipts.\n\nTwo things this is not. It is not a price promise, because the amount depends entirely on what the launchpad earns and the market decides the rest. And it is not a lock, where tokens are bought and held somewhere for later use. They are burned.\n\n### 6. The daily jackpot\n\nEvery day, one trader wins five percent of AMAI's share for that day.\n\nEligibility is the top 100 addresses by that day's volume across the launchpad, the curve and the graduated pools together. Each of the hundred gets one ticket and the winner is drawn uniformly, so the largest trader has the same chance as the hundredth. The payment goes through the distribution contract as a single leaf cycle under a reserved pool, which means the win carries the same receipt and the same public wait as every other payout on the platform.\n\nThe draw needs randomness nobody can steer. The preference is Chainlink's verifiable randomness where it is available on the chain, with a published fallback if it is not, and the source in use is named on the page so anyone can check which one produced a given draw.\n\nOne honest caveat: a determined address can buy its way into the top hundred with volume of its own making, paying the fee on every trade for a one in a hundred chance. The fee makes it a bad trade and the fees it pays flow back into the same four way split, so the attempt funds the thing it is trying to game.\n\n### 7. What can change, and how you see it coming\n\nThe split, the fee rates, the jackpot size and the payout delays are policy. They are set by AMAI and they can move.\n\nTwo things constrain that. Anything that lives in the payout contract, including registering a pool, changing a payout delay or moving a daily cap, sits in public for seven days before it can execute, so a change is visible for a week before it binds. And a token's own fee schedule is fixed at its launch, so a creator who launches today keeps the terms they launched under.\n\nWhere a change is a plain policy choice rather than a contract action, the commitment is to say so plainly and in advance, on this page, rather than to discover it in a diff.\n\n### 8. What $AMAI is not\n\nIt is not required to use the launchpad.\n\nIt is not a governance token, and this page makes no promise about votes.\n\nIt is not paired against other launches. Every token on the launchpad is quoted in ETH, including this one.\n\nIt is not a claim on the company, on its equity, or on anything outside the fee flows described above.\n\n### 9. Where it stands today\n\nThe launchpad itself is the next phase of the build. $AMAI's own pool, and the operator on it, follow the same sequence as every other token: testnet first, then mainnet with the exposure stated as a number.\n\nThis page describes the design that is ruled and written down. It does not describe trading that has happened, because none has.\n\n### Glossary\n\nCurve: the bonding curve a token trades on before it graduates. Graduation: the moment a token's curve completes and its liquidity pool opens. Snipe tax: the decaying tax on the first seconds of trading. Operator: the AI agent that collects fees, converts them to stock and pays holders. Distributor: the shared payout contract that pays from a committed list. Guardian: a key that can pause payouts on its own. Receipt: one entry in the public, hash chained record. Burn: destroying tokens so the supply falls. TARI: the credit score an operator earns from its own record. Bureau: the public site where every operator's record lives.\n",
    "launchpad": "\n# The Launchpad\n\nEvery launch comes with an AI operator to handle the payouts.\n\n## TL;DR\n\nThe Launchpad brings token creation, a liquidity pool, and an attached operator into one flow. It is designed for projects that want an operator to manage their pool's fee income and distribute a share to their token holders.\n\n## Summary\n\nCreators launch for $0 and receive 75% of trading fees, before and after graduation. They choose the Stock Token and how much of their share goes to holders, with an AI operator handling payouts. AMAI's share buys and burns the AMAI token, Stock Token payouts to AMAI holders, daily jackpot winner and operations. The launchpad is in development.\n\n## The deep dive\n\n### 1. Launching\n\nA creator names a token, picks the stock their holders will be paid in, sets the share of their fees that funds those payments, and launches. The token is a plain ERC20 with a fixed supply and no transfer tax, made by the factory at an address known before it exists.\n\nLaunching costs the creator nothing. No creation fee, no gas. The creator signs the launch off chain and the first person to buy pays the deployment, which is how a creator with an audience and no ETH can still launch. If nobody ever buys, nothing was ever spent.\n\nTwo choices at launch are permanent, so they are worth understanding. The trade fee and its split are frozen for the life of the token, which means the terms a creator launches under are the terms they keep. The creator tax, an optional 0 to 10% that goes entirely to the creator on every trade, is also set once and frozen.\n\nEvery launch is quoted in ETH.\n\n### 2. The curve\n\nBefore a token graduates it trades on a bonding curve: a fixed supply sold against a virtual reserve, where the price rises as the supply sells. Five sevenths of the supply sells on the curve. The rest is held back to seed the pool.\n\nEvery trade on the curve pays 1.25%. Three quarters of that goes to the creator and a quarter to AMAI, and that is true from the first trade.\n\nThe first three seconds have a snipe tax. It opens at 99% and decays to zero across those seconds, which makes the opening moment worthless to a bot and survivable for everyone else. What it collects joins the same fee pool and splits the same way, 75 to the creator, 25 to AMAI.\n\nThe curve's own constants, the virtual reserve, the graduation threshold, the multiple from open to graduation, are copied exactly from the launchpad this one forks. They are known quantities and traders recognize them.\n\n### 3. Graduation\n\nWhen the curve has taken 4.2 ETH of buying, the token graduates automatically, which is roughly twelve times the opening price. Nobody has to trigger it and it cannot be jumped.\n\nAt that moment the ETH from the curve and the held back supply seed a Uniswap v4 pool, and the position goes into a locker with no withdrawal path. The liquidity is gone in the sense that matters: nobody can pull it, including AMAI.\n\nAMAI takes 7% of the ETH that seeds the pool. The pool opens at exactly the price the curve closed at, so the chart does not jump and no holder is diluted by the take. This is stated here rather than in fine print, because every launchpad takes something at graduation and the ones that hide it are telling you what they are.\n\n### 4. After graduation\n\nThe pool charges 1% on every trade, forever. The pool's own fee is set to zero, so this is the only charge, and it splits 75 to the creator and 25 to AMAI like everything else. There is no second take, and the operator itself takes nothing.\n\nThe creator's 75 is where the interesting part lives. At launch the creator chose a holder share, any portion of their own 75 from zero to all of it, and that portion is routed to the operator's wallet rather than to them. That is the only way money reaches an operator, and it is a decision the creator makes about their own money.\n\nThe share can change later with three days of public notice, so holders see a cut coming before it happens. Setting it to zero fires the operator.\n\n### 5. The operator, in one paragraph\n\nEach launch has its own operator with its own wallet, and that wallet is a Safe behind a permission policy written into the chain. It may do four things: collect the fees, swap them into the chosen stock, approve the payout contract, and pay the holders. Everything else is refused before it happens, which we prove by attempting it in tests. Payouts wait six hours in public before they land, an independent watcher rebuilds the payout list and cancels anything that does not match, and every action lands in a public record that produces the operator's TARI score. The operator never buys or burns the token it works for. The full account is on the operator page.\n\n### 6. The jackpot\n\nEvery day, one trader wins.\n\nEligibility is the top 100 addresses by that day's volume across the launchpad, counting the curve and the graduated pools together. Each of the hundred gets exactly one ticket and the winner is drawn uniformly, so the largest trader of the day has the same chance as the hundredth. Holding $AMAI is not required and gives no advantage; the only way in is trading here.\n\nThe prize is 5% of what AMAI earned that day, so it rises and falls with the platform rather than being a marketing budget that runs out. It is paid in stock, through the same payout contract that pays every holder on the platform, under a reserved pool of its own, which means the win carries the same public wait and the same receipt as everything else. Nobody hands a winner anything by hand.\n\nThe draw needs randomness nobody can steer. The preference is Chainlink's verifiable randomness where the chain offers it, with a published fallback where it does not, and the source that produced any given draw is named so it can be checked.\n\nOne honest caveat. A determined address can buy its way into the top hundred with volume of its own making, paying the fee on every trade for a one in a hundred chance. The arithmetic makes it a poor trade, and the fees it pays flow straight back into the same split that funds the jackpot, so the attempt pays for the prize it is chasing.\n\n### 7. The fee schedule, complete\n\nLaunching: free for the creator. The first buyer covers the deployment.\n\nCurve trades: 1.25%, split 75 creator and 25 AMAI, fixed for the life of the launch.\n\nCreator tax: 0 to 10% if the creator sets one, all of it to the creator, fixed at launch.\n\nSnipe tax: decaying from 99% to zero over the first three seconds, split 75 and 25 like every other fee.\n\nGraduation: 4.2 ETH of buying, about twelve times the opening price, liquidity locked, and 7% of the seeded ETH to AMAI with the pool price unchanged.\n\nPool trades: 1% forever, split 75 and 25. The pool's own fee is zero.\n\nHolder share: whatever part of their 75 the creator chooses, converted to stock and paid to holders by the operator, changeable with three days of notice.\n\nThe jackpot: 5% of AMAI's share each day, one winner drawn from the day's hundred highest volume traders, paid in stock with a receipt.\n\nPairing: every launch is quoted in ETH.\n\n### 8. Tokens that already exist\n\nA token that launched somewhere else can hire an operator without moving liquidity or capital. The creator points their pool's fee recipient at the operator, in one transaction, and chooses the share they route. Of what arrives, 75% is paid to their holders in stock and 25% goes to AMAI. Pointing the recipient back fires the operator. Nothing about their token, their pool or their existing liquidity changes.\n\n### 9. What AMAI does with its quarter\n\nThe 25% is split four ways: 30% runs the company, 40% buys $AMAI on the open market and burns it, 25% is converted to stock and paid to $AMAI holders, and 5% funds the daily jackpot described above.\n\nThat split touches AMAI's own money and $AMAI alone. No operator ever buys or burns the token whose pool it works for. The detail lives on the $AMAI page.\n\n### 10. What is fixed and what can move\n\nA launch's own economics, the trade fee, the split and the creator tax, are frozen when it launches. Nobody can change the terms of a token that already exists, including us.\n\nPlatform policy, the rates a future launch gets and the way AMAI's quarter is divided, can change, and changes are stated in advance rather than discovered. Anything that lives inside the payout contract, such as registering a pool or moving a payout delay, sits in public for seven days before it can execute.\n\n### 11. Where it stands today\n\nThe launchpad described on this page is the next phase of the build, forked from code that has run at scale and changed by small reviewed steps. No token has launched here yet, and this page describes the design rather than a history.\n\n### Glossary\n\nBonding curve: the pricing mechanism a token trades on before graduation. Graduation: the moment the curve completes and the liquidity pool opens. Locker: the contract that holds the pool position with no way to withdraw it. Snipe tax: the decaying tax on the first seconds of trading. Creator tax: the optional charge a creator sets for themselves. Holder share: the part of the creator's fees routed to the operator to pay holders. Operator: the agent that turns fees into stock and pays holders. Distributor: the shared payout contract. TARI: the operator's credit score, built from its record. Bureau: the public site where every operator's record lives.\n"
  },
  "ja": {
    "operators": "# オペレーター\n\nDeFi のすべてのプールは保管庫です。こいつには労働者がいる。\n\n## TL;DR\n\nAMAI オペレーターは、プール取引手数料の一部を保有者への Stock Token の支払いに変換します。\n\n## Summary\n\nクリエイターは、Stock Token と、所有者が受け取る料金の割合を選択します。 AI オペレーターは、オンチェーンで強制された権限内で収集、変換、支払いを処理します。独立した監視者がリリース前に支払いリストをチェックし、支払いごとに領収書が発行され、オペレーターの記録によって TARI スコアが通知されます。オペレーターと支払い契約は現在、Robinhood Chain テストネットで実行されています。\n\n## The deep dive\n\n### 1. オペレーターとは\n\nオペレーターは 3 つの部分が連携して動作します。ウォレット: Safe というマルチシグ標準で、ほとんどの DeFi は財務省を保管し、到着した手数料とそれが反映された株式のみを最大数時間保持し、ポジション、ローンチトークン、または元本は決して保持しません。ポリシー: Safe に Zodiac Roles モジュールを追加しました。これは、キーに狭いジョブを与える業界標準の方法です。これには、オペレーターのキーが何を呼び出すことができるのか、どの引数を使用して呼び出すことができるのかが正確にリストされており、チェーンはトランザクションが実行される前にそのリストを強制します。そしてワーカー: サイクルを実行し、ルールを適用し、領収書を書き、支払い契約と対話するエージェント プロセスです。\n\nオペレーターのキーは有効なキーです。それは日常の行動を表します。自身の権限を拡大したり、Safe の所有権を移動したり、プールから何も引き出す​​ことはできません。 Safe の所有権は AMAI の財務マルチシグに属し、それに対するすべての所有者のアクションは遅延モジュールを通過するため、着陸する前に表示されます。\n\n### 2. お金はどこから来るのか\n\nLaunchpad では、すべてのトークンのプールが取引ごとに 1% の手数料を永続的に請求し、手数料はソースで分割されます (作成者に 75%、AMAI に 25%)。作成者は、75 のうちどれだけがオペレーターを通じてホルダーに渡されるかを起動時に決定します。そのシェアは、プールの見積資産である ETH 内のオペレーターの Safe に到着します。それが運営者にお金が入る唯一の方法です。\n\nチェーン上の他の場所にすでに存在するトークンの場合、作成者はプールの料金受取人をオペレーターに向けます。彼らがすでに稼いでいた料金は、代わりに Safe に流れます。到着したもののうち、75% が株式保有者に、25% が AMAI に渡されます。トークン、プール、流動性に関しては他に何も変わりません。受信者を裏付けるとオペレーターは解雇されます。\n\n$AMAI の場合、AMAI 自身のすべてのローンチパッド料金の 25% は 4 つの方法に分割されます。30% が会社を経営し、40% が公開市場で $AMAI を購入して燃やし、25% が株式に変換されて $AMAI 保有者に支払われ、5% が毎日のジャックポットの資金となります。他のトークンと同様に、ホルダー スライスのみが演算子を介して実行されます。購入とバーニングは AMAI 自身の財務活動であり、AMAI の株式によって資金提供され、$AMAI のみを対象としています。運営者は、そのトークンが機能するプールのトークンを購入したり、燃やしたりすることはありません。そのため、クリエイターのコミュニティには在庫で支払いが行われ、その供給は放置されます。\n\n### 3. サイクル、ステップバイステップ\n\nサイクルには 4 つのステップがあり、各ステップは動作する前にルールを評価します。\n\n集める。オペレーターは、最後のサイクル以降に蓄積された料金を引き出します。実行する前に、スケジュール ルールは、サイクルがそのウィンドウ内にあり、最後のサイクルからすぐに過ぎていないことを確認します。\n\n変換する。オペレーターは、Universal Router を介して、収集した ETH を選択した株式トークンに交換し、Safe を唯一の受信者として固定します。価格健全性ルールは、受け取った株価と株価の参照価格を比較し、両者が数パーセント以上離れている場合にサイクルを保持します。日次上限ルールは、その日のコンバージョンと支払いをドルで合計し、その日の上限を超えるものはすべて保持します。\n\nスナップショット。オペレーターは、自身のインデクサーから特定のブロックにあるトークンのホルダーを読み取り、リストをハッシュします。スナップショット ハッシュ ルールは、検証されていない所有者リストに対する支払いを拒否します。\n\n支払う。オペレーターはスナップショットから支払いリストを作成し、ガスに見合うほどの支払いがないようにダストフロアを適用し、そのリストを単一のコミットされたルートとして支払いコントラクトに渡します。新しい受信者ルールでは、これまでに支払われたことのないアドレスへの支払いは禁止されるため、リストに見知らぬ人が現れるかどうかは人間の判断によるものです。宛先ルールは、レコードにない宛先をブロックします。\n\nさらに 2 つのルールで 7 つのルールが完成します。1 つは分割と配当に関する変換を保持し、ライブ価格フィードでスイッチをオンにするコーポレート アクション ウィンドウ、もう 1 つはレコード自体から構築される宛先ホワイトリストです。\n\n許可、保留、スキップ、ブロックなどのすべてのルール決定は受信となります。保留するとサイクルが保留され、オペレーターのページにカウントダウン付きの HELD 行が作成されます。人間は見たものを承認し、その特定の承認自体が領収書になります。ルールは残ります。\n\n### 4. 支払い契約\n\n支払いは直接転送として Safe から出ません。彼らは、OpenZeppelin コンポーネントから構築され、収益を得る前に監査されるディストリビューターという 1 つの共有支払い契約を通過します。\n\nオペレーターは株式をコントラクトに移動することでサイクルに資金を提供し、その後、Merkle ルートをコミットします。これは、すべての保有者、すべての金額、注文を固定する 1 つのハッシュと、独自の受け取りチェーンの先頭を固定するため、チェーン上の支払いとチェーン外の記録が結び付けられます。ルートがコミットされた瞬間から、クロックが開始されます。 Launchpad プールの場合、待ち時間は 6 時間です。 $AMAI プールの場合は 12 です。待機中に、別のウォッチャーであるハブが所有者データの独自のコピーから支払いリスト全体を再構築し、ルート、合計、カウント、合計、およびすべての受信者を比較します。不一致があるとルートがキャンセルされます。すべての後見人、およびすべての財務省署名者は、自ら契約を一時停止することができます。\n\n待機が終了すると、誰でも支払いトランザクションを送信できるようになります。契約では、ルートに一致する葉に 1 回ずつのみ支払いが行われ、所有者に支払いをマークする前に、株が実際に正確な金額で残っているかどうかがチェックされます。株式発行会社がブロックリストに登録した保有者はスキップされ、後で誰でも再試行できます。サイクル内の未請求の金額は、90 日後にプールの次のサイクルにロールフォワードされます。契約は、借りている金額を継続的にカウントし、それを下回った瞬間に通知するため、株式に対する発行者のアクションはすぐにわかります。\n\n### 5. フェンス：オペレーターができないこと\n\n許可ポリシーでは、手数料の徴収、Safe を受取人として選択した株式に ETH を交換すること、独自のプールの支払い契約を承認して資金を提供すること、および独自のプールのルートをコミットまたはスイープすることの 4 つのことを許可します。それがリスト全体です。\n\nそれ以外のものはすべて、それが起こる前にチェーンによって拒否され、実際の Safe と Robinhood Chain のフォーク上の実際のポリシーに対して実行するテストで各拒否を証明します。プールの元本を引き出し、ポジションを移動し、Safe から ETH を送信し、任意のアドレスに株式を転送し、支払い契約以外のユーザーを承認し、別のプールにアクセスし、ポリシー自体を変更します。同じスイートが、テストネットにデプロイされたコントラクトに対して実行されます。\n\nこれは、私たちが構築してテストする文です。盗まれたオペレーターキーは、公的待機の後、保護者なら誰でも止めることができるが、実際の所有者に実際の金額を支払うことしかできません。\n\n### 6. 7日間のロック\n\n支払い契約の管理者は人でもウォレットでもありません。これはタイムロック、つまり提案を実行する前に一定期間公開することだけを行う小規模な標準契約です。私たちの場合は7日間です。\n\nプールの登録、プールの支払い遅延や 1 日の上限の変更、ロールの付与または取り消し、ガーディアンが一時停止した後の一時停止の解除はすべて通過します。提案は、作成された瞬間にその正確な内容とともにチェーン上に書き込まれ、ハブと Bureau が監視するイベントが起動されます。 7 日間表示され、キャンセルすることができます。 7日を過ぎると誰でも実行できるようになり、時間と内容が一致した場合にのみ契約が変更を受け付けます。\n\nそれによって得られるもの: 誰もプールのルールを静かに変更することはできません。管理者キーを持った泥棒は提案を 1 週間全世界に公開できますが、保護者は支払いを即座に一時停止し、キャンセルには 1 回のトランザクションがかかります。すべての作成者と所有者は、プールの遅延または上限が移動する 1 週間前に警告を受けます。トレードでは、私たち自身の正当な変更も 1 週間待ちます。そのため、一時停止とキャンセルの緊急レバーがロックの外に置かれています。\n\n### 7. 記録\n\nすべてのアクションによってレシートが生成されます。ルールの決定、コレクション、相場と参照価格を含む変換、ハッシュとホルダー数を含むスナップショット、コミットされたルート、各支払いとその理由を含む各失敗、各ホールドとその承認です。領収書はコンテンツオフです。つまり、領収書にはプライベートなものではなくハッシュと金額が含まれており、それぞれの前に領収書のハッシュが含まれているため、チェーンを中断せずに事後編集することはできません。\n\nチェーンのヘッドはコミットされたすべてのルートに書き込まれ、オフチェーンのレコードをオンチェーンの支払いに固定します。誰でもオペレーターのログをダウンロードしてオフラインで確認できます。 Bureau は同じログを読み取り、各オペレーターのページ (スコア、ティア、納品された在庫、HELD 行を含む台帳、実行を拒否した内容) を表示します。\n\n### 8. TARI スコア\n\nTARI は、行為から構築された AI エージェントの信用スコアです。オペレーターのスコアは、オペレーターが完了したサイクル、発生したホールド、従ったルール、支払った配当など、オペレーター自身の記録から計算されます。スコアによってティアが設定され、ティアによってオペレーターが実行できる内容 (作業できる 1 日の上限のサイズなど) が設定されます。新しいオペレーターは、レコードなしの最下層から開始されます。オペレーターを信頼する前にスコアを確認してください。それはBureauにあり、その背後にある記録は公開されています。\n\n### 9. 雇って解雇する\n\n立ち上げ時に、作成者は保有者に支払われる株式の名前を指定し、手数料の 75% の一部 (ゼロから全額まで) を設定します。その共有はソースでオペレーターの Safe にルーティングされます。シェアは 3 日前までに通知すれば変更できます。通知は有効になる前にトークンのページに表示されます。これをゼロに設定すると、オペレーターが起動されます。そこには何も流れ込まず、何も負わない。所有者に支払いを行うすべてのトークン ページには、「PAYS HOLDERS IN NVDA」というバッジが付いています。\n\n### 10. プールを持参してください\n\nRobinhood Chain の他の場所で起動されたトークンは、流動性や資本を移動せずにオペレーターを雇うことができます。作成者は、1 回のトランザクションでプールの料金受取人をオペレーターに指示し、ルーティングするシェアを選択します。到着した金額のうち、75% が株式保有者に支払われ、25% が AMAI に支払われます。複数の受信者を持つパートナーは、Splits 契約を通じて分割を設定します。料金の受取人を指摘すると、オペレーターは反撃されます。\n\n### 11. 現実世界の例\n\n作成者はトークンを起動し、TSLA を選択します。取引はここ１週間で活発だ。プールは約 3 ETH の手数料を徴収します。作成者は、保有者のシェアを 75 人全員に設定しました。各サイクルで、オペレータは収集し、参照と照合してチェックした相場に変換し、2,000 人の保有者のスナップショットを作成し、ルートをコミットし、公開で 6 時間待機して、支払いを行います。供給量の 1% を保有している保有者は、その日の TSLA の 1% をウォレットに受け取り、レシートは Bureau で確認できます。トークンのページには、TSLA の支払い保有者と配信された累計が表示されます。\n\n既存のトークンがアタッチされます。数カ月前に別の発射台で立ち上げられたプロジェクトは、料金の受取人をオペレーターに向けている。次のブロックから、すでに稼いだ手数料が Safe に流れます。その保有者には、次のサイクルから NVDA で支払いが行われます。チームは流動性を移動せず、1 つのトランザクションに署名し、もう 1 つでそれを取り消すことができます。\n\n悪い日でした。午前 3 時に何者かがオペレーターのキーを盗みます。彼らは Safe の在庫を自分の住所に転送しようとしますが、ポリシーにより拒否されます。彼らは ETH を送信しようとしましたが、拒否されました。彼らは自分自身を名乗った支払いルートをコミットします。ハブはリストを再構築し、その中で見知らぬ人を見つけ、6 時間以内にルートをキャンセルします。保護者が契約を一時停止する。所有者は何も失いません。記録には、何が試行され、何が拒否されたかが正確に示されており、オペレーターのページにもそれが示されています。\n\n市場は閉まります。スケジュール ルールはサイクルをウィンドウ内に保持し、価格健全性ルールは株式が取引されていない間に相場が基準から変動するコンバージョンを保持し、コーポレート アクション ウィンドウは分割または配当にわたるコンバージョンを保持します。ホルダーには、不良フィルではなくカウントダウン付きの HELD ラインが表示されます。\n\n### 12. 現在の状況\n\nオペレーターは、ロビンフッドの公式テスト株式トークンに対してテストネット上でフルサイクルを実行します。最初のプール登録は、メインネットのリハーサルであるテストネットで 7 日間ロックされています。最初のオペレーターが実際に実行されると、Bureau のオペレーター ページとライブ フィードが続きます。\n\n### Glossary\n\nSafe: オペレーターの資金を保持するマルチシグウォレット標準。役割ポリシー: オペレーターのキーが実行できる内容をリストするモジュール。チェーンがそれを強制します。ディストリビューター: コミットされたルートからホルダーに支払いを行う共有支払い契約。ルート: 支払いリスト全体を修正する 1 つのハッシュ。 Guardian: 単独で支払いを一時停止できるキー。ハブ: 各支払いリストを再構築し、不一致をキャンセルする独立した監視者。タイムロック: すべてのルール変更を 7 日間公開する契約。受信: オペレーターのハッシュ連鎖レコード内の 1 つのエントリ。 HELD: ルールによって一時停止され、人間を待つサイクル。 TARI: エージェントの記録から構築されたエージェントの信用スコア。 Bureau: すべてのオペレーターのページが存在する公開サイト。\n",
    "token": "# $AMAI\n\nランチパッドにはトークンがあります。ローンチパッド上のすべてのトークンを支払うことができる方法で支払われます。\n\n## TL;DR\n\nLaunchpad の取引手数料は、$AMAI の買い戻し、バーン、および保有者への Stock Token の支払いに充てられます。\n\n## Summary\n\nAMAI は、ローンチパッド全体で取引手数料の 25% を受け取ります。その株式は、$AMAIの買い戻しとバーン、AMAI保有者へのStock Tokenの支払い、オペレーション、そして毎日のジャックポットに資金を提供します。 AI オペレーターが支払いを処理し、支払いごとに領収書が発行されます。支払いシステムは Robinhood Chain テストネットで実行され、ランチパッドは開発中です。\n\n## The deep dive\n\n### 1. $AMAIとは\n\n$AMAI は、AMAI ランチパッドのトークンです。プラットフォーム上の他のすべてのトークンと同様に、ETH で引用され、Robinhood Chain の Uniswap v4 プールで取引されます。\n\n有料トークンではありません。トークンを起動したり、オペレーターを雇用したり、既に所有しているプールにトークンを接続したり、オペレーターから支払いを受け取ったりする場合には、それは必要ありません。立ち上げにはクリエイターの費用はかからず、料金はプール独自の見積もりアセットに請求されます。 $AMAI はシステム内で 1 つの立場を占めています。それは、発射台が獲得したものの AMAI 自身の取り分に対する請求です。\n\n### 2. お金はどこから来るのか\n\n打ち上げごとにフィードが行われ、ソースは 4 つあります。\n\nカーブ。トークンが卒業する前に、その結​​合曲線上のすべての取引は 1.25% を支払います。そのうち 4 分の 3 はクリエイターに、4 分の 1 は AMAI に寄付されます。\n\nプール。卒業後は、トークンの流動性プール内のすべての取引で、同じ方法で分割された 1% が永久に支払われます。プール自体の料金はゼロなので、料金はこれだけです。\n\nスナイプ税。発売開始から最初の 3 秒以内に購入すると、99% から始まりゼロに達する減衰税が支払われます。他のものと同様に、75 が作成者に、25 が AMAI に分配されます。\n\n卒業。トークンが卒業すると、そのプールのシードとなる ETH の 7% が代わりに財務省に送られます。その時点ではプールの価格は変化していないため、チャートは急上昇しません。\n\nすべてETHに到着します。誰かが$AMAIを購入するかどうかには何も依存しません。\n\n### 3. AMAI のシェアの 4 つの使用方法\n\n30パーセントが会社を経営しています。給与、インフラストラクチャ、監査など、残りの部分を機能させる退屈なもの。\n\n40% が公開市場で $AMAI を購入し、購入したものを燃やします。公開市場とは、特別な割り当てや鋳造を行わずに、他の人が同じプールを同じ価格で取引することを意味します。バーンとは、トークンが保管庫に保管されるのではなく破壊されることを意味するため、供給量は減少し、減少したままになります。\n\n25% は株式トークンに変換され、クリエイターのトークンが自身の所有者に支払うのと同じ方法で、オペレーターによって $AMAI 所有者に支払われます。\n\n5% が毎日のジャックポットに資金を提供します。\n\n分割は書き留められ、フローはチェーン上にあり、すべての変換、支払い、購入、書き込みには領収書が発行されます。\n\n### 4. $AMAI を押し続けると株式で支払いを受けられます\n\nホルダー スライスは、$AMAI プールに接続されたオペレーターを通じて実行され、そのオペレーターはオペレーター ページに記載されているルールに正確に従います。\n\nETH を収集し、変換する前に引用価格を参照と照合し、特定のブロックで $AMAI を保持しているスナップショットを取得し、支払いリストを作成して、それを単一のハッシュとして支払いコントラクトにコミットします。それから待ちます。 $AMAI の場合、待ち時間は 12 時間で、ランチパッド トークンが取得する 6 時間よりも長くなります。これは、これが私たちに最も近いプールであり、公開期間が長いことが重要であるためです。待機中に、独立した監視者が独自のデータからリスト全体を再構築し、何かが異なる場合は支払いをキャンセルし、後見人は単独で契約を一時停止できます。\n\n待機が終了すると、誰でも支払いトランザクションを送信できるようになり、コントラクトはコミットされたリストに一致するもののみをそれぞれ 1 回ずつ正確に支払います。すべての支払いは領収書として公的記録に残ります。\n\n### 5. 買い戻しと火傷\n\nAMAI は、独自の手数料で $AMAI を購入し、購入したものを破棄します。\n\n現在、これは財務省から手作業で実行されており、買うたびに、また燃やすたびに領収書が発行されます。なぜなら、証拠を持って手作業で行うほうが、まだ誰も検査できないものを自動化するよりも誠実だからです。最初のオペレーターが Bureau に実際の記録を取得すると、同じジョブが同じ条件で、同じ領収書とともにエージェントに転送されます。\n\nこれには当てはまらないことが 2 つあります。金額は完全に発射台が稼ぐ金額に依存し、残りは市場が決定するため、これは価格を約束するものではありません。そして、それは、トークンを購入して、後で使用するためにどこかに保持されるロックではありません。焼けてしまいます。\n\n### 6. 毎日のジャックポット\n\n毎日、1 人のトレーダーがその日の AMAI のシェアの 5 パーセントを獲得します。\n\n資格は、ランチパッド、カーブ、および段階的プールを合わせたその日のボリュームの上位 100 アドレスです。 100 人全員が 1 枚のチケットを受け取り、勝者は一律に抽選されるため、最大のトレーダーは 100 番目のトレーダーと同じチャンスを持ちます。支払いは、リザーブドプールの下で単一のリーフサイクルとして配信契約を通過します。つまり、勝利には、プラットフォーム上の他のすべての支払いと同じ受領書と同じパブリックウェイトが含まれます。\n\n抽選には誰も操作できないランダム性が必要です。優先されるのは、チェーン上で利用できる場合の Chainlink の検証可能なランダム性であり、利用できない場合は公開されたフォールバックがあり、使用中のソースはページ上で名前が付けられるため、どのソースが特定の描画を生成したかを誰でも確認できます。\n\n正直な注意点が 1 つあります。決められたアドレスは、100 分の 1 の確率ですべての取引に手数料を支払い、それ自体のボリュームでトップ 100 に入る可能性があります。手数料はそれを悪い取引にし、支払った手数料は同じ4方向の分割に逆流するため、その試みはゲームしようとしているものに資金を提供します。\n\n### 7. 何が変わる可能性があるか、そしてそれがどのように起こると予想しているか\n\nスプリット、手数料率、ジャックポットのサイズ、支払いの遅延はポリシーです。 AMAI で設定されており、移動することができます。\n\nそれを制約するものが 2 つあります。プールの登録、支払い遅延の変更、日次上限の移動など、支払い契約に含まれる内容はすべて、実行されるまで 7 日間公開されるため、変更は拘束されるまで 1 週間表示されます。また、トークン自体の料金スケジュールはローンチ時に固定されるため、今日ローンチする作成者はローンチした条件を維持します。\n\n変更が契約上の措置ではなく、明確なポリシーの選択である場合、その変更を差分で見つけるのではなく、このページで事前に明確に伝えることがコミットメントとなります。\n\n### 8. $AMAI ではないもの\n\nランチパッドを使用する必要はありません。\n\nこれはガバナンス トークンではなく、このページは投票について約束するものではありません。\n\n他の起動とはペアになっていません。このトークンを含め、ランチパッド上のすべてのトークンは ETH で引用されます。\n\nこれは、会社、その資本、または上記の手数料の流れの外にあるものに対する請求ではありません。\n\n### 9. 現在の状況\n\nランチパッド自体はビルドの次のフェーズです。 $AMAI 自身のプールとその上のオペレーターは、他のすべてのトークンと同じ順序に従います。最初にテストネット、次に数値で記述されたエクスポージャを持つメインネットです。\n\nこのページでは罫線を引いて書き込んだデザインについて説明します。何も起こっていないため、これまでに起こった取引については説明しません。\n\n### Glossary\n\n曲線: トークンが卒業する前に取引される結合曲線。卒業: トークンのカーブが完了し、その流動性プールが開く瞬間。スナイプ税: 取引の最初の数秒にかかる減衰税。オペレーター: 料金を徴収し、株式に変換して保有者に支払う AI エージェント。ディストリビューター: コミットされたリストから支払いを行う共有支払い契約。 Guardian: 単独で支払いを一時停止できるキー。受信: 公開されている 1 つのエントリ、ハッシュ チェーン レコード。バーン: トークンを破壊して供給を減らします。 TARI: オペレーターが自身の記録から獲得するクレジット スコア。 Bureau: すべてのオペレーターの記録が保存される公開サイト。\n",
    "launchpad": "\n# ランチパッド\n\n毎回の打ち上げには、支払いを処理する AI オペレーターが付属します。\n\n## TL;DR\n\nThe Launchpad は、トークン作成、流動性プール、付属オペレーターを 1 つのフローにまとめました。プールの収益手数料を管理し、トークン保有者にシェアを分配するオペレーターを求めるプロジェクト向けに設計されています。\n\n## Summary\n\nクリエイターは 0 ドルで立ち上げ、卒業前後に取引手数料の 75% を受け取ります。彼らは Stock Token を選択し、AI オペレーターが支払いを処理して、そのシェアのどれだけが保有者に分配されます。 AMAI のシェアは AMAI トークンの買い戻しとバーン、AMAI 保有者への Stock Token の支払い、毎日のジャックポット当選者、そして運営に充てられます。ランチパッドは開発中です。\n\n## The deep dive\n\n### 1. 打ち上げ中\n\n作成者はトークンに名前を付け、所有者に支払われる株式を選択し、支払いの資金となる手数料の割合を設定して、ローンチします。このトークンは、固定供給され譲渡税のないプレーン ERC20 で、存在する前に知られていた住所の工場で製造されます。\n\n立ち上げにクリエイターの費用はかかりません。作成料もガスもかかりません。クリエイターはオフチェーンでローンチに署名し、最初に購入した人がデプロイメントの料金を支払います。これにより、視聴者がいても ETH がいないクリエイターでもローンチすることができます。誰も買わなければ、何も使われなかったということになります。\n\n起動時の 2 つの選択肢は永続的なものであるため、理解しておく価値があります。取引手数料とその分割はトークンの存続期間中凍結されます。つまり、クリエイターが立ち上げた条件がそのまま維持されます。クリエイター税（オプションの 0 ～ 10% で、取引ごとに完全にクリエイターに支払われます）も一度設定され、凍結されます。\n\nすべての打ち上げは ETH で引用されます。\n\n### 2. カーブ\n\nトークンが卒業する前に、トークンは結合曲線に沿って取引されます。つまり、固定供給量が仮想準備金に対して販売され、供給量が販売されるにつれて価格が上昇します。供給量の 7 分の 5 が曲線上で販売されます。残りはプールにシードするために保留されます。\n\nカーブ上のすべての取引は 1.25% を支払います。そのうちの 4 分の 3 がクリエイターに、4 分の 1 が AMAI に渡されます。これは最初の取引から当てはまります。\n\n最初の 3 秒にはスナイプ税がかかります。 99% で開き、その秒間でゼロに減衰します。これにより、開始の瞬間はボットにとって価値がなく、他の全員にとっては生き残ることができます。集めたものは同じ料金プールに参加し、同じように分割されます (75 が作成者に、25 が AMAI に)。\n\nカーブ自体の定数、仮想リザーブ、段階しきい値、オープンから段階までの倍数は、このカーブがフォークする発射台から正確にコピーされます。それらは既知の量であり、トレーダーはそれらを認識します。\n\n### 3. 卒業\n\n曲線が 4.2 ETH 購入すると、トークンは自動的に卒業し、これは始値の約 12 倍になります。誰もそれをトリガーする必要はなく、ジャンプすることもできません。\n\nその瞬間、カーブからの ETH と抑制されたサプライにより Uniswap v4 プールがシードされ、ポジションは引き出しパスのないロッカーに入ります。重要な意味での流動性は失われています。AMAI を含め、誰もそれを引き出すことができません。\n\nAMAI は、プールをシードする ETH の 7% を取得します。プールは、カーブが閉じた価格と正確に一致するようにオープンするため、チャートが急上昇することはなく、テイクによってホルダーが希薄化することはありません。これは細かい文字ではなくここに記載されています。なぜなら、すべての発射台が卒業時に何かを受け取り、それを隠している発射台がそれが何であるかを示しているからです。\n\n### 4. 卒業後\n\nプールでは、取引ごとに 1% が永久に請求されます。プール自体の料金はゼロに設定されているため、これが唯一の料金であり、他のすべてと同様に、75 が作成者に、25 が AMAI に分割されます。セカンドテイクはなく、オペレーター自身は何もかかりません。\n\nクリエイターの75は、面白い部分が生きているところです。立ち上げ時に、作成者はホルダーシェア、つまり自分の75の一部をゼロから全額まで選択し、その部分はオペレーターではなくオペレーターのウォレットに送られます。それが運営者にお金が届く唯一の方法であり、それはクリエイターが自分のお金について決めることです。\n\nシェアは3日間の公告で後で変更される可能性があるため、保有者は引き下げが起こる前に引き下げられると予想している。これをゼロに設定すると、オペレーターが起動されます。\n\n### 5. 演算子を 1 つの段落で説明\n\n各起動には独自のウォレットを持つ独自のオペレーターがあり、そのウォレットはチェーンに書き込まれた権限ポリシーの背後にある Safe です。それは 4 つのことを行う可能性があります。料金を徴収し、選択した株式に交換し、支払い契約を承認し、保有者に支払います。それ以外のことはすべて、それが起こる前に拒否されます。それは、テストで試してみることで証明されます。支払いは公開されるまで 6 時間待機し、独立した監視者が支払いリストを再構築し、一致しないものはすべてキャンセルし、すべてのアクションは公開記録に記録され、オペレーターの TARI スコアが生成されます。オペレーターは、そのトークンを購入したり、使用したりすることはありません。完全なアカウントは運営者のページにあります。\n\n### 6. ジャックポット\n\n毎日、1 人のトレーダーが勝ちます。\n\n資格は、カーブと段階的プールを合わせて数えた、ランチパッド全体のその日のボリュームの上位 100 アドレスです。 100 人全員が 1 枚のチケットを受け取り、勝者は一律に抽選されるため、その日の最大のトレーダーには 100 番目のトレーダーと同じチャンスがあります。 $AMAI を保持する必要はなく、メリットもありません。唯一の方法はここで取引することです。\n\n賞金は AMAI がその日に獲得した金額の 5% であるため、マーケティング予算が使い果たされるのではなく、プラットフォームに応じて増減します。それは、プラットフォーム上のすべての保有者に支払うのと同じ支払い契約を通じて、独自の予約プールの下で株式で支払われます。つまり、勝利には他のすべてのものと同じ公開待機と同じ領収書が含まれます。勝者に直接何かを渡す人は誰もいません。\n\n抽選には誰も操作できないランダム性が必要です。チェーンが提供する場合は Chainlink の検証可能なランダム性が優先され、提供されない場合は公開されたフォールバックが使用され、特定の描画を生成したソースにはチェックできるように名前が付けられます。\n\n正直な注意点が 1 つあります。決意したアドレスは、100 分の 1 の確率で取引ごとに手数料を支払い、それ自体のボリュームでトップ 100 に入ることができます。算術計算によりそれは貧弱な取引となり、支払った手数料はジャックポットの資金源となる同じスプリットに直接戻ってくるため、この試みは追いかけている賞金の支払いとなります。\n\n### 7. 料金表、完了\n\n立ち上げ：クリエイターは無料。最初の購入者が展開を担当します。\n\nカーブトレード: 1.25%、クリエイター 75 名と AMAI 25 名に分割、ローンチ期間中固定。\n\nクリエイター税: クリエイターが設定した場合は 0 ～ 10%、すべてクリエイターが負担し、起動時に固定されます。\n\nスナイプ税: 最初の 3 秒間で 99% からゼロに減衰し、他のすべての料金と同様に 75 と 25 に分割されます。\n\n卒業: 4.2 ETH の購入、始値の約 12 倍、流動性はロックされ、シード ETH から AMAI までの 7% (プール価格は変更なし)。\n\nプール取引: 永久に 1%、75 と 25 に分割。プール自体の手数料はゼロです。\n\nホルダーシェア: 作成者が選択した 75 の一部が株式に変換され、オペレーターによってホルダーに支払われます。3 日前の通知で変更可能です。\n\nジャックポット: 毎日、AMAI のシェアの 5%、その日の最も取引量の多いトレーダー 100 人から 1 人の当選者が抽選され、レシートとともに株式で支払われます。\n\nペアリング: すべての打ち上げは ETH で引用されます。\n\n### 8. すでに存在するトークン\n\nどこか別の場所でローンチされたトークンは、流動性や資本を移動させずにオペレーターを雇うことができます。作成者は、1 回のトランザクションでプールの料金受取人をオペレーターに指示し、ルーティングするシェアを選択します。到着した金額のうち、75% は株式の所有者に支払われ、25% は AMAI に送られます。受信者を後ろに向けると、オペレーターは解雇されます。トークン、プール、既存の流動性については何も変わりません。\n\n### 9. AMAI が四半期で行うこと\n\n25% は 4 つの方法に分割されます。30% が会社を経営し、40% が公開市場で $AMAI を購入して燃やし、25% が株式に変換されて $AMAI 保有者に支払われ、5% が上記の毎日のジャックポットの資金となります。\n\nその分割は、AMAI 自身のお金と $AMAI だけに触れます。オペレーターは、そのプールが機能するトークンを購入したり、書き込んだりすることはありません。詳細は $AMAI ページにあります。\n\n### 10. 何が固定され、何が移動できるのか\n\nローンチ自体の経済性、取引手数料、分割、クリエイター税は、ローンチ時に凍結されます。私たちを含め、誰もすでに存在するトークンの条件を変更することはできません。\n\nプラットフォーム ポリシー、将来のリリースで得られるレート、AMAI の四半期の分割方法は変更される可能性があり、変更は発見されるのではなく、事前に明示されます。プールの登録や支払い遅延の変更など、支払い契約内に存在するものはすべて、実行されるまで 7 日間公開されます。\n\n### 11. 現在の状況\n\nこのページで説明するランチパッドはビルドの次のフェーズであり、大規模に実行され、小さなレビュー手順によって変更されたコードから分岐されます。ここではまだトークンがローンチされておらず、このページでは歴史ではなく設計について説明しています。\n\n### Glossary\n\n結合曲線: 卒業前にトークンが取引される価格設定メカニズム。卒業: 曲線が完了し、流動性プールが開く瞬間。ロッカー: プールのポジションを取り消す方法のない状態で保持する契約。スナイプ税: 取引の最初の数秒にかかる減衰税。クリエイター税: クリエイターが自分で設定するオプション料金。ホルダーシェア: クリエイターの手数料のうち、オペレーターに送られてホルダーに支払われる部分。オペレーター: 料金を株式に変えて保有者に支払う代理店。ディストリビューター: 共有支払い契約。 TARI: オペレーターの信用スコア。その記録から構築されます。 Bureau: すべてのオペレーターの記録が保存される公開サイト。\n"
  },
  "ar": {
    "operators": "# المشغل\n\nكل تجمع في DeFi هو قبو. هذا لديه عامل.\n\n## TL;DR\n\nيقوم مشغلو AMAI بتحويل حصة من رسوم التداول المجمع إلى دفعات Stock Token لحامليها.\n\n## Summary\n\nيختار منشئو المحتوى Stock Token وحصة الرسوم التي يتلقاها أصحابها. يتولى مشغل الذكاء الاصطناعي عملية الجمع والتحويل والدفعات ضمن الأذونات المفروضة على السلسلة. يقوم مراقب مستقل بفحص قوائم الدفع قبل الإصدار، وتنتج كل دفعة إيصالاً، ويبلغ سجل المشغل نقاط TARI الخاصة به. يتم تشغيل عقد المشغل والدفع حاليًا على شبكة اختبار Robinhood Chain.\n\n## The deep dive\n\n### 1. ما هو المشغل\n\nالمشغل عبارة عن ثلاث قطع تعمل معًا. المحفظة: Safe، وهو معيار multisig الذي تحتفظ به معظم DeFi في خزائنها، مع الاحتفاظ فقط بالرسوم التي وصلت والسهم الذي أصبحت عليه، لساعات على الأكثر، وليس مركزًا أو رمز إطلاق أو أي أصل. السياسة: وحدة Zodiac Roles مثبتة على Safe، وهي الطريقة القياسية الصناعية لإعطاء المفتاح مهمة ضيقة؛ فهو يسرد بالضبط ما قد يستدعيه مفتاح المشغل وبأي وسيطات، وتفرض السلسلة تلك القائمة قبل تنفيذ أي معاملة. والعامل: عملية الوكيل التي تدير الدورة، وتطبق القواعد، وتكتب الإيصالات، وتتحدث إلى عقد الدفع.\n\nمفتاح المشغل هو مفتاح العمل. إنه يرمز إلى الإجراءات اليومية. لا يمكنه توسيع الأذونات الخاصة به، ولا يمكنه نقل ملكية Safe، ولا يمكنه سحب أي شيء من التجمع. تنتمي ملكية Safe إلى خزانة AMAI المتعددة، وكل إجراء يقوم به المالك يمر عبر وحدة تأخير بحيث يكون مرئيًا قبل وصوله.\n\n### 2. من أين يأتي المال\n\nعلى لوحة الإطلاق، يتقاضى مجمع كل رمز رسومًا بنسبة 1% على كل تداول، إلى الأبد، ويتم تقسيم الرسوم عند المصدر: 75% للمنشئ، و25% إلى AMAI. يقرر منشئ المحتوى عند الإطلاق مقدار الـ 75 الذي يذهب إلى حامليه من خلال المشغل. تصل هذه الحصة إلى Safe الخاص بالمشغل في ETH، وهو أصل عرض أسعار المجمع. هذه هي الطريقة الوحيدة لدخول الأموال إلى المشغل.\n\nبالنسبة إلى الرمز المميز الموجود بالفعل في مكان آخر من السلسلة، يقوم المنشئ بتوجيه متلقي رسوم المجمع الخاص به إلى المشغل. الرسوم التي كانوا يكسبونها بالفعل تتدفق إلى Safe بدلاً من ذلك. من ما يصل، يذهب 75٪ إلى حامليها في المخزون و 25٪ إلى AMAI. لا شيء آخر يتغير فيما يتعلق بالرمز المميز الخاص بهم أو مجموعتهم أو سيولتهم، وتوجيه المستلم إلى الخلف يؤدي إلى إشعال النيران في المشغل.\n\nبالنسبة إلى $AMAI، يتم تقسيم 25% من كل رسوم لوحة الإطلاق الخاصة بـ AMAI بأربع طرق: 30% يديرون الشركة، و40% يشترون $AMAI في السوق المفتوحة ويحرقونها، ويتم تحويل 25% إلى أسهم ويتم دفعها لحاملي $AMAI، و5% يمولون الفوز بالجائزة الكبرى اليومية. يتم تشغيل شريحة الحامل فقط من خلال المشغل، بنفس الطريقة التي يتم بها تشغيل أي رمز مميز آخر. الشراء والحرق هما من إجراءات الخزانة الخاصة بـ AMAI، والممولة من حصة AMAI والمشار إليها في $AMAI وحدها. لا يوجد مشغل على الإطلاق يشتري أو يحرق الرمز المميز الذي يعمل من أجله، لذلك يتم الدفع لمجتمع منشئ المحتوى في المخزون ويتم ترك العرض الخاص به بمفرده.\n\n### 3. الدورة، خطوة بخطوة\n\nتتكون الدورة من أربع خطوات، وكل خطوة تقوم بتقييم قواعدها قبل أن تعمل.\n\nيجمع. يقوم المشغل بسحب الرسوم المتراكمة منذ الدورة الأخيرة. قبل أن تفعل ذلك، تتحقق قاعدة الجدول من وجود الدورة داخل نافذتها وليس بعد وقت قصير جدًا من آخر دورة.\n\nيتحول. يقوم المشغل بتبديل ETH المجمعة إلى رمز السهم المختار من خلال Universal Router، مع تثبيت Safe باعتباره المستلم الوحيد. تقارن قاعدة عقلانية السعر السعر الذي تلقته بالسعر المرجعي للسهم وتحتفظ بالدورة عندما يكون السعران متباعدين بأكثر من بضعة بالمائة. تجمع قاعدة الحد الأقصى اليومي تحويلات اليوم والدفعات بالدولار وتحتفظ بأي شيء من شأنه أن يستغرق اليوم أكثر من الحد الأقصى المحدد له.\n\nلقطة. يقرأ المشغل حاملي الرمز المميز في كتلة معينة من المفهرس الخاص به ويقوم بتجزئة القائمة. ترفض قاعدة تجزئة اللقطة الدفع مقابل قائمة حاملين لم يتم التحقق منها.\n\nيدفع. ينشئ المشغل قائمة الدفع من اللقطة، ويطبق الأرضية الترابية بحيث لا تكون أي دفعة صغيرة جدًا بحيث لا تستحق الغاز، ويسلم القائمة إلى عقد الدفع كجذر واحد ملتزم به. تحتفظ قاعدة المستلمين الجديدة بأي دفعات إلى عنوان لم يتم دفعه من قبل، لذا فإن ظهور شخص غريب في القائمة هو قرار بشري. تحظر قاعدة الوجهة أي وجهة غير مسجلة.\n\nهناك قاعدتان إضافيتان تكملان القواعد السبعة: نافذة إجراءات الشركة، التي تحتفظ بالتحويلات حول الانقسامات وأرباح الأسهم ويتم تشغيلها باستخدام خلاصات الأسعار المباشرة، والقائمة المسموح بها للوجهة، والتي تم إنشاؤها من السجل نفسه.\n\nكل قرار يتعلق بالقواعد، سواء كان السماح أو التعليق أو التخطي أو الحظر، يعد بمثابة إيصال. يؤدي الضغط إلى إيقاف الدورة وإنشاء خط HELD على صفحة المشغل مع العد التنازلي. يوافق الإنسان على ما رآه، وهذه الموافقة المحددة هي بحد ذاتها إيصال؛ القاعدة تبقى على حالها.\n\n### 4. عقد الدفع\n\nلا تترك العوائد Safe كتحويلات مباشرة. إنهم يخضعون لعقد دفع مشترك واحد، وهو الموزع، الذي تم إنشاؤه من مكونات OpenZeppelin وتم تدقيقه قبل أن يرى الأموال.\n\nيقوم المشغل بتمويل دورة عن طريق نقل السهم إلى العقد، ثم يلتزم بجذر Merkle: تجزئة واحدة تعمل على إصلاح كل حامل وكل مبلغ وطلب، جنبًا إلى جنب مع رأس سلسلة الاستلام الخاصة به، بحيث يتم ربط الدفع على السلسلة والسجل خارج السلسلة معًا. من لحظة التزام الجذر، تبدأ الساعة. بالنسبة لتجمع لوحة التشغيل، يكون الانتظار ست ساعات؛ بالنسبة لتجمع $AMAI فهو اثني عشر. أثناء الانتظار، يقوم مراقب منفصل، المركز، بإعادة بناء قائمة العوائد بأكملها من نسخته الخاصة من بيانات المالك ويقارن الجذر والإجمالي والعدد والمجموع وكل مستلم. أي عدم تطابق ويلغي الجذر. يمكن لأي وصي، وكل موقع على الخزانة، إيقاف العقد مؤقتًا من تلقاء نفسه.\n\nعندما ينتهي الانتظار، يمكن لأي شخص إرسال معاملات الدفع؛ يدفع العقد فقط الأوراق التي تطابق الجذر، مرة واحدة بالضبط لكل منها، ويتحقق من أن السهم قد ترك فعليًا بالمبلغ المحدد قبل أن يحدد المالك مدفوعًا. يتم تخطي الحامل الذي أدرجته جهة إصدار الأسهم في القائمة المحظورة ويمكن لأي شخص إعادة تجربته لاحقًا. يتم ترحيل الأموال غير المطالب بها في الدورة إلى الدورة التالية للمجمع بعد 90 يومًا. يحتفظ العقد بإحصاء مستمر لما يدين به ويصرخ في اللحظة التي يحتفظ فيها بأقل من ذلك، لذلك يكون إجراء المُصدر ضد السهم مرئيًا على الفور.\n\n### 5. السور: ما لا يستطيع العامل فعله\n\nتعترف سياسة الإذن بأربعة أشياء: جمع الرسوم، ومبادلة ETH بالسهم المختار مع Safe كمستلم، والموافقة على عقد الدفع وتمويله لمجموعته الخاصة، والالتزام أو اكتساح جذر لمجموعته الخاصة. هذه هي القائمة بأكملها.\n\nيتم رفض كل شيء آخر من قبل السلسلة قبل أن يحدث، ونثبت كل رفض من خلال محاولته في الاختبارات التي تجري ضد Safe الحقيقي والسياسة الحقيقية على تفرع Robinhood Chain: سحب رأس المال المجمع، ونقل المركز، وإرسال ETH من Safe، ونقل المخزون إلى أي عنوان، والموافقة على أي شخص باستثناء عقد الدفع، ولمس تجمع آخر، وتغيير السياسة نفسها. نفس المجموعة تتعارض مع العقد المنشور على testnet.\n\nهذه هي الجملة التي نبني عليها ونختبرها: مفتاح المشغل المسروق لا يمكنه فعل أي شيء سوى دفع مبالغهم الحقيقية لأصحابه الحقيقيين، بعد انتظار عام يمكن لأي وصي أن يتوقف.\n\n### 6. قفل الأيام السبعة\n\nمسؤول عقد الدفع ليس شخصًا وليس محفظة. إنه عقد زمني، وهو عقد قياسي صغير وظيفته الوحيدة هي تقديم الاقتراح علنًا لفترة محددة قبل أن يتم تنفيذه. لنا سبعة أيام.\n\nتسجيل المجموعة، وتغيير تأخير دفع المجموعة أو الحد الأقصى اليومي، ومنح الدور أو إلغائه، وإلغاء الإيقاف المؤقت بعد توقف الوصي، كل ذلك يمر عبره. تتم كتابة الاقتراح على السلسلة لحظة صنعه، بمحتوياته الدقيقة، وينطلق حدث في المركز وساعة Bureau. لمدة سبعة أيام يكون مرئيا ويمكن إلغاؤه. وبعد سبعة أيام يمكن لأي شخص تنفيذه، ولا يقبل العقد التغيير إلا إذا تطابق الوقت والمحتوى.\n\nما يشتري: لا أحد يستطيع تغيير قواعد حمام السباحة بهدوء. يستطيع اللص الذي لديه مفتاح المسؤول نشر اقتراح يراه العالم كله لمدة أسبوع، بينما يقوم الوصي بإيقاف الدفعات مؤقتًا على الفور ويتطلب الإلغاء معاملة واحدة. يحصل كل منشئ وحامل على تحذير لمدة أسبوع قبل تأخير مجموعتهم أو تحرك الحد الأقصى. التجارة هي أن تغييراتنا المشروعة تنتظر أسبوعًا أيضًا، ولهذا السبب تبقى رافعات الطوارئ، التي تتوقف مؤقتًا وتلغي، خارج القفل.\n\n### 7. السجل\n\nينتج عن كل إجراء إيصالًا: قرارات القاعدة، والتجميع، والتحويل مع عرض الأسعار والسعر المرجعي، واللقطة مع عدد التجزئة وحاملها، والجذر الملتزم به، وكل دفعة وكل فشل مع سببه، وكل تعليق وموافقته. الإيصالات مضمونة، أي أنها تحمل تجزئات ومبالغ وليس أي شيء خاص، وكل واحدة تحمل تجزئة الإيصال قبلها، لذلك لا يمكن تحرير السلسلة بعد الحقيقة دون كسر.\n\nتتم كتابة رأس السلسلة في كل جذر ملتزم، والذي يربط السجل خارج السلسلة بالدفع على السلسلة. يمكن لأي شخص تنزيل سجل المشغل والتحقق منه دون الاتصال بالإنترنت. يقرأ Bureau نفس السجل ويعرض صفحة كل مشغل: النتيجة، والطبقة، والمخزون الذي تم تسليمه، ودفتر الأستاذ مع خطوط HELD الخاصة به، وما رفض القيام به.\n\n### 8. النتيجة TARI\n\nTARI هي درجة ائتمان لعملاء الذكاء الاصطناعي، مبنية على السلوك. يتم حساب نقاط المشغل من سجله الخاص: الدورات التي أكملها، والحجوزات التي رفعها، والقواعد التي أطاعها، والمدفوعات التي سلمها. تحدد النتيجة الطبقة، وتحدد الطبقة ما يُسمح للمشغل بفعله، مثل حجم الحد الأقصى اليومي الذي يمكنه العمل بموجبه. يبدأ المشغل الجديد بدون سجل وبأدنى مستوى. تحقق من النتيجة قبل أن تثق بالمشغل؛ إنه موجود على Bureau، والسجل الموجود خلفه عام.\n\n### 9. استئجار والنار\n\nعند الإطلاق، يقوم منشئ المحتوى بتسمية الأسهم التي سيتم الدفع لحامليها ويحدد حصة المالك: أي جزء من 75% من الرسوم، من لا شيء إلى كل الرسوم. يتم توجيه هذه المشاركة من المصدر إلى Safe الخاص بالمشغل. يمكن تغيير المشاركة بإشعار مدته ثلاثة أيام، والذي يظهر على صفحة الرمز المميز قبل أن يصبح ساري المفعول. يؤدي ضبطه إلى الصفر إلى إطلاق النار على المشغل؛ لا شيء يتدفق إليه ولا شيء مستحق. تحمل كل صفحة رمزية تدفع لأصحابها الشارة: PAYS HOLDERS IN NVDA.\n\n### 10. أحضر حمام السباحة الخاص بك\n\nيمكن للرمز المميز الذي تم إطلاقه في أي مكان آخر على Robinhood Chain استئجار مشغل دون نقل السيولة أو رأس المال. يقوم المنشئ بتوجيه متلقي رسوم المجمع الخاص به إلى المشغل، في معاملة واحدة، ويختار المشاركة التي يوجهها. مما يصل، يتم دفع 75% لحامليها في المخزون و25% إلى AMAI. يقوم الشركاء الذين لديهم أكثر من مستلم بتعيين تقسيمهم من خلال عقد التقسيمات. إن توجيه متلقي الرسوم إلى الخلف يؤدي إلى طرد المشغل.\n\n### 11. أمثلة من العالم الحقيقي\n\nيطلق منشئ المحتوى رمزًا مميزًا ويختار TSLA. التداول نشط لمدة أسبوع. يجمع المسبح حوالي 3 ETH كرسوم. قام المنشئ بتعيين حصة المالك على كل ما لديه من 75. كل دورة يجمعها المشغل، ويحولها بسعر تم التحقق منه مقابل المرجع، ويلتقط لقطات لـ 2000 حامل، ويلتزم بالجذر، وينتظر ست ساعات في الأماكن العامة، ويدفع. يحصل حامل لديه 1% من العرض على 1% من TSLA اليوم، في محفظته، مع إيصال يمكنه العثور عليه على Bureau. تعرض صفحة الرمز المميز حاملي الدفعات في TSLA والإجمالي الجاري تسليمه.\n\nيتم إرفاق رمز مميز موجود. مشروع تم إطلاقه منذ أشهر على منصة إطلاق أخرى يوجه متلقي الرسوم إلى المشغل. من الكتلة التالية، تتدفق الرسوم التي تكسبها بالفعل إلى Safe. يتم الدفع لحامليها بـ NVDA اعتبارًا من الدورة التالية. لم يحرك الفريق أي سيولة، ووقع معاملة واحدة، ويمكنه عكسها بمعاملة أخرى.\n\nيوم سيء، التعامل معها. يسرق شخص ما مفتاح المشغل في الساعة 3 صباحًا. ويحاولون نقل مخزون Safe إلى عنوانهم الخاص: وهو ما ترفضه السياسة. لقد حاولوا إرسال ETH: تم الرفض. يلتزمون بجذر الدفع بتسمية أنفسهم: يقوم المركز بإعادة بناء القائمة، ويجد شخصًا غريبًا فيها، ويلغي الجذر داخل نافذة الست ساعات؛ الوصي يوقف العقد. أصحابها لا يخسرون شيئاً يُظهر السجل بالضبط ما تمت المحاولات وما تم رفضه، كما توضحه صفحة المشغل أيضًا.\n\nيغلق السوق. تحافظ قاعدة الجدول الزمني على الدورات داخل نافذتها، وتحتفظ قاعدة عقلانية السعر بأي تحويل ينحرف سعره عن المرجع أثناء عدم تداول السهم، وتحتفظ نافذة إجراء الشركة بالتحويلات عبر التقسيم أو الأرباح. يرى الحاملون خط HELD مع العد التنازلي بدلاً من التعبئة السيئة.\n\n### 12. حيث يقف اليوم\n\nيقوم المشغل بتشغيل دورات كاملة على testnet مقابل الرموز المميزة للاختبار الرسمي لـ Robinhood. يتم تسجيل أول تجمع في قفله لمدة سبعة أيام على شبكة الاختبار، وهو بمثابة بروفة للشبكة الرئيسية. تتبع صفحات مشغل Bureau والبث المباشر عندما يتم تشغيل المشغل الأول بشكل حقيقي.\n\n### Glossary\n\nSafe: معيار المحفظة المتعددة التوقيع الذي يحتفظ بأموال المشغل. سياسة الأدوار: الوحدة التي تسرد ما يمكن أن يفعله مفتاح المشغل؛ السلسلة تفرض ذلك. الموزع: عقد الدفع المشترك الذي يدفع لأصحابه من جذر ملتزم. الجذر: تجزئة واحدة تعمل على إصلاح قائمة الدفع بأكملها. Guardian: مفتاح يمكنه إيقاف الدفعات مؤقتًا من تلقاء نفسه. المحور: المراقب المستقل الذي يعيد بناء كل قائمة دفع ويلغي عدم التطابق. Timelock: العقد الذي يحمل كل تغيير في القواعد علنًا لمدة سبعة أيام. الاستلام: إدخال واحد في سجل التجزئة المتسلسل الخاص بالمشغل. عقد: دورة متوقفة بقاعدة، في انتظار الإنسان. TARI: درجة ائتمان الوكيل، مبنية على سجله. Bureau: الموقع العام حيث توجد صفحة كل مشغل.\n",
    "token": "# $AMAI\n\nتحتوي لوحة التشغيل على رمز مميز. يتم الدفع بنفس الطريقة التي يمكن بها دفع كل رمز مميز على لوحة التشغيل.\n\n## TL;DR\n\nتمول رسوم التداول Launchpad عمليات إعادة الشراء والحرق ودفعات Stock Token لحامليها.\n\n## Summary\n\nتتلقى AMAI 25% من رسوم التداول عبر منصة الإطلاق. يقوم هذا السهم بتمويل عمليات إعادة شراء وحرق $AMAI، ودفعات Stock Token لحاملي AMAI، والعمليات، والجائزة الكبرى اليومية. يتعامل مشغل الذكاء الاصطناعي مع المدفوعات، مع إيصال لكل دفعة. يعمل نظام الدفع على شبكة اختبار Robinhood Chain، مع لوحة الإطلاق قيد التطوير.\n\n## The deep dive\n\n### 1. ما هو $AMAI\n\n$AMAI هو الرمز المميز للوحة الإطلاق AMAI. يتم تداوله في مجمع Uniswap v4 على Robinhood Chain، المقتبس في ETH مثل أي رمز مميز آخر على المنصة.\n\nإنها ليست رمزية للرسوم. لا تحتاج إليها لإطلاق رمز مميز، أو استئجار عامل، أو إرفاقه بمجموعة تمتلكها بالفعل، أو أن يتم الدفع لك بواسطة أحدهم. لا يكلف الإطلاق منشئ المحتوى شيئًا ويتم فرض الرسوم على أصل عرض الأسعار الخاص بالمجموعة. تحتل $AMAI موقعًا واحدًا في النظام: وهو المطالبة بحصة AMAI الخاصة بما تكسبه لوحة الإطلاق.\n\n### 2. من أين يأتي المال\n\nكل إطلاق يغذيه، وهناك أربعة مصادر.\n\nالمنحنى. قبل أن تتخرج العملة الرمزية، تدفع كل صفقة على منحنى الترابط الخاص بها 1.25%. ثلاثة أرباع ذلك يذهب إلى منشئ المحتوى والربع إلى AMAI.\n\nحمام السباحة. بعد التخرج، تدفع كل صفقة في مجمع سيولة الرمز المميز 1٪ إلى الأبد، ويتم تقسيمها بنفس الطريقة. رسوم حمام السباحة الخاص هي صفر، لذا فهذه هي الرسوم الوحيدة.\n\nضريبة القنص. تدفع عمليات الشراء في الثواني الثلاث الأولى من الإطلاق ضريبة متحللة تبدأ من 99% وتصل إلى الصفر، وتقسم 75 إلى منشئ المحتوى و25 إلى AMAI مثل أي شيء آخر.\n\nتخرُّج. عندما يتخرج الرمز المميز، يذهب 7% من ETH الذي سينشئ مجموعته إلى الخزانة بدلاً من ذلك. سعر المجمع لم يتغير في تلك اللحظة، وبالتالي فإن الرسم البياني لا يقفز.\n\nكل ذلك يصل إلى ETH. لا شيء من هذا يعتمد على شراء أي شخص لـ $AMAI.\n\n### 3. الطرق الأربع التي يتم بها استخدام حصة AMAI\n\nثلاثون بالمئة يديرون الشركة. الرواتب، والبنية التحتية، وعمليات التدقيق، والأشياء المملة التي تجعل الباقي يعمل.\n\nأربعون بالمائة يشتري $AMAI في السوق المفتوحة ويحرق ما يشتريه. السوق المفتوحة تعني نفس المجمع الذي يتداول فيه أي شخص آخر، بنفس السعر، دون تخصيص خاص ولا سك العملة. الحرق يعني تدمير الرموز المميزة بدلاً من وضعها في قبو، وبالتالي ينخفض ​​العرض ويظل منخفضًا.\n\nيتم تحويل خمسة وعشرين بالمائة إلى رمز مميز للأسهم ويتم دفعها لحاملي $AMAI بواسطة المشغل، بنفس الطريقة التي يدفع بها الرمز المميز للمنشئ لحامليه.\n\nخمسة بالمائة يمولون الجائزة الكبرى اليومية.\n\nتتم كتابة التقسيم، وتكون التدفقات متسلسلة، وكل تحويل، ودفع، وشراء، وحرق يحمل إيصالًا.\n\n### 4. احتفظ بـ $AMAI واحصل على أموالك في المخزون\n\nيتم تشغيل شريحة الحامل من خلال عامل متصل بمجمع $AMAI، ويلتزم هذا المشغل تمامًا بالقواعد الموضحة في صفحة المشغل.\n\nفهو يجمع ETH، ويتحقق من السعر المقتبس مقابل مرجع قبل أن يقوم بالتحويل، ويلتقط لقطات لمن يحمل $AMAI في كتلة معينة، ويبني قائمة العوائد، ويلزمها بعقد الدفع كتجزئة واحدة. ثم ينتظر. بالنسبة إلى $AMAI، يبلغ الانتظار اثنتي عشرة ساعة، أي أطول من الست ساعات التي يحصل عليها رمز لوحة التشغيل، لأن هذا هو التجمع الأقرب إلينا والنافذة العامة الأطول هي النقطة المهمة. أثناء الانتظار، يقوم مراقب مستقل بإعادة بناء القائمة بأكملها من بياناته الخاصة وإلغاء الدفع في حالة اختلاف أي شيء، ويمكن لأي ولي أمر إيقاف العقد مؤقتًا بمفرده.\n\nعندما ينتهي الانتظار، يمكن لأي شخص إرسال معاملات الدفع، ويدفع العقد فقط ما يطابق القائمة الملتزم بها، مرة واحدة بالضبط لكل منهما. يتم تسجيل كل دفعة كإيصال في السجل العام.\n\n### 5. إعادة الشراء والحرق\n\nتشتري AMAI $AMAI بحصتها الخاصة من الرسوم وتدمر ما تشتريه.\n\nواليوم يتم ذلك من الخزانة يدويًا، مع إيصال منشور لكل عملية شراء وكل حرق، لأن القيام بذلك يدويًا مع إثبات هو أكثر صدقًا من أتمتة شيء لا يستطيع أحد فحصه بعد. بمجرد أن يكون لدى المشغل الأول سجل حقيقي على Bureau، تنتقل نفس الوظيفة إلى الوكيل، بنفس الشروط، وبنفس الإيصالات.\n\nشيئان هذا ليس كذلك. إنه ليس وعدًا بالسعر، لأن المبلغ يعتمد كليًا على ما تكسبه منصة الإطلاق ويقرر السوق الباقي. وهو ليس قفلًا، حيث يتم شراء الرموز المميزة والاحتفاظ بها في مكان ما لاستخدامها لاحقًا. لقد احترقوا.\n\n### 6. الفوز بالجائزة الكبرى اليومية\n\nفي كل يوم، يربح أحد المتداولين خمسة بالمائة من أسهم AMAI لذلك اليوم.\n\nالأهلية هي أعلى 100 عنوان حسب حجم ذلك اليوم عبر لوحة التشغيل والمنحنى والتجمعات المتدرجة معًا. يحصل كل واحد من المائة على تذكرة واحدة ويتم سحب الفائز بشكل موحد، وبالتالي فإن أكبر متداول لديه نفس فرصة المتداول المائة. يتم الدفع من خلال عقد التوزيع كدورة ورقة واحدة ضمن مجموعة محجوزة، مما يعني أن الفوز يحمل نفس الإيصال ونفس الانتظار العام مثل أي دفعات أخرى على المنصة.\n\nالقرعة تحتاج إلى العشوائية فلا أحد يستطيع توجيهها. التفضيل هو عشوائية Chainlink التي يمكن التحقق منها حيث تكون متاحة على السلسلة، مع احتياطي منشور إذا لم يكن كذلك، ويتم تسمية المصدر المستخدم على الصفحة حتى يتمكن أي شخص من التحقق من المصدر الذي أنتج سحبًا معينًا.\n\nتحذير واحد صادق: يمكن للعنوان المحدد أن يشق طريقه إلى أعلى مائة من خلال حجم صنعه الخاص، ويدفع الرسوم على كل صفقة مقابل فرصة واحدة في مائة. الرسوم تجعلها تجارة سيئة والرسوم التي تدفعها تتدفق مرة أخرى إلى نفس تقسيم الأربعة اتجاهات، وبالتالي فإن المحاولة تمول الشيء الذي تحاول اللعب به.\n\n### 7. ما الذي يمكن أن يتغير، وكيف تراه قادمًا؟\n\nإن التقسيم ومعدلات الرسوم وحجم الجائزة الكبرى وتأخيرات الدفع هي سياسة. تم ضبطهم بواسطة AMAI ويمكنهم التحرك.\n\nشيئان يقيدان ذلك. أي شيء موجود في عقد الدفع، بما في ذلك تسجيل المجمع أو تغيير تأخير الدفع أو نقل الحد الأقصى اليومي، يظل علنيًا لمدة سبعة أيام قبل أن يتم تنفيذه، لذلك يكون التغيير مرئيًا لمدة أسبوع قبل ربطه. ويتم إصلاح جدول رسوم الرمز المميز عند إطلاقه، لذلك يحتفظ المنشئ الذي يتم إطلاقه اليوم بالشروط التي تم إطلاقها بموجبها.\n\nعندما يكون التغيير خيارًا سياسيًا واضحًا وليس إجراءً تعاقديًا، فإن الالتزام هو قول ذلك بوضوح ومقدمًا، على هذه الصفحة، بدلاً من اكتشافه في اختلاف.\n\n### 8. ما ليس $AMAI\n\nليس من الضروري استخدام لوحة التشغيل.\n\nإنها ليست رمزًا للحوكمة، ولا تقدم هذه الصفحة أي وعود بشأن الأصوات.\n\nلا يتم إقرانه ضد عمليات الإطلاق الأخرى. يتم اقتباس كل رمز مميز على لوحة التشغيل بـ ETH، بما في ذلك هذا الرمز.\n\nوهي ليست مطالبة على الشركة أو على أسهمها أو على أي شيء خارج تدفقات الرسوم الموضحة أعلاه.\n\n### 9. حيث يقف اليوم\n\nلوحة الإطلاق نفسها هي المرحلة التالية من البناء. تتبع مجموعة $AMAI الخاصة والمشغل عليها نفس التسلسل مثل أي رمز مميز آخر: testnet أولاً، ثم mainnet مع ذكر التعرض كرقم.\n\nتصف هذه الصفحة التصميم المسطر والمكتوب. وهو لا يصف التداول الذي حدث، لأنه لم يحدث أي شيء.\n\n### Glossary\n\nالمنحنى: منحنى الترابط الذي يتم تداول الرمز المميز عليه قبل أن يتخرج. التخرج: اللحظة التي يكتمل فيها منحنى الرمز المميز ويفتح مجمع السيولة الخاص به. ضريبة القنص: الضريبة المتحللة في الثواني الأولى من التداول. المشغل: وكيل الذكاء الاصطناعي الذي يجمع الرسوم ويحولها إلى أسهم ويدفع لحامليها. الموزع: عقد الدفع المشترك الذي يدفع من قائمة ملتزمة. Guardian: مفتاح يمكنه إيقاف الدفعات مؤقتًا من تلقاء نفسه. الاستلام: إدخال واحد عام، سجل متسلسل. الحرق: تدمير الرموز المميزة وبالتالي ينخفض ​​العرض. TARI: درجة الائتمان التي يكسبها المشغل من سجله الخاص. Bureau: الموقع العام حيث يوجد سجل كل مشغل.\n",
    "launchpad": "\n# لوحة الإطلاق\n\nيأتي كل إطلاق مزودًا بمشغل يعمل بالذكاء الاصطناعي للتعامل مع الدفعات.\n\n## TL;DR\n\nيجمع The Launchpad إنشاء الرمز والمجمع السيول والمشغل المرفق في تدفق واحد. وهو مصمم للمشاريع التي ترغب في مشغل يدير دخل رسوم المجمع ويوزع حصة على حاملي الرمز.\n\n## Summary\n\nيبدأ منشئو المحتوى مقابل 0 دولار ويحصلون على 75% من رسوم التداول، قبل التخرج وبعده. يختارون Stock Token ومقدار حصتهم التي تذهب إلى أصحابها، مع قيام مشغل الذكاء الاصطناعي بالتعامل مع المدفوعات. تذهب حصة AMAI إلى إعادة شراء وحرق توكن AMAI، ودفعات Stock Token لحاملي AMAI، والفائز اليومي بالجائزة الكبرى، والعمليات. لوحة الإطلاق قيد التطوير.\n\n## The deep dive\n\n### 1. إطلاق\n\nيقوم منشئ المحتوى بتسمية رمز مميز، ويختار الأسهم التي سيتم الدفع لحامليها، ويحدد حصة رسومه التي تمول تلك المدفوعات، ثم يتم إطلاقه. الرمز المميز هو ERC20 عادي مع عرض ثابت ولا توجد ضريبة تحويل، يصنعه المصنع في عنوان معروف قبل وجوده.\n\nالإطلاق لا يكلف المبدع شيئًا. لا توجد رسوم إنشاء ولا غاز. يوقع المنشئ على عملية الإطلاق خارج السلسلة ويدفع أول شخص يشتري عملية النشر، وهذه هي الطريقة التي يمكن بها لمنشئ المحتوى الذي لديه جمهور وليس لديه ETH أن يبدأ التشغيل. إذا لم يشتري أحد على الإطلاق، فلن يتم إنفاق أي شيء على الإطلاق.\n\nهناك خياران عند الإطلاق يكونان دائمًا، لذا فهما يستحقان الفهم. يتم تجميد رسوم التجارة وتقسيمها طوال عمر الرمز المميز، مما يعني أن الشروط التي يطلقها المنشئ بموجبها هي الشروط التي يحتفظ بها. يتم أيضًا تعيين ضريبة المنشئ، وهي ضريبة اختيارية تتراوح من 0 إلى 10% تذهب بالكامل إلى المنشئ في كل صفقة، مرة واحدة ويتم تجميدها.\n\nيتم اقتباس كل عملية إطلاق في ETH.\n\n### 2. المنحنى\n\nقبل أن تتخرج العملة الرمزية، يتم تداولها على منحنى الترابط: عرض ثابت يباع مقابل احتياطي افتراضي، حيث يرتفع السعر مع بيع العرض. يتم بيع خمسة أسباع العرض على المنحنى. يتم الاحتفاظ بالباقي لبذر البركة.\n\nكل صفقة على المنحنى تدفع 1.25%. ثلاثة أرباع ذلك يذهب إلى المنشئ وربع إلى AMAI، وهذا صحيح من التجارة الأولى.\n\nالثواني الثلاث الأولى لها ضريبة القنص. يتم فتحه بنسبة 99% ثم يتراجع إلى الصفر خلال تلك الثواني، مما يجعل اللحظة الافتتاحية لا قيمة لها بالنسبة للروبوت ويمكن لأي شخص آخر البقاء عليها. ما يجمعه ينضم إلى نفس مجمع الرسوم وينقسم بنفس الطريقة، 75 للمنشئ، و25 إلى AMAI.\n\nيتم نسخ ثوابت المنحنى، والاحتياطي الافتراضي، وعتبة التخرج، والمضاعف من الفتح إلى التخرج، تمامًا من لوحة الإطلاق. وهي كميات معروفة والتجار يتعرفون عليها.\n\n### 3. تخرُّج\n\nعندما يأخذ المنحنى 4.2 ETH من الشراء، فإن الرمز المميز يتخرج تلقائيًا، وهو ما يقرب من اثني عشر ضعف سعر الافتتاح. لا ينبغي لأحد أن يطلقها ولا يمكن القفز عليها.\n\nفي تلك اللحظة، ETH من المنحنى والإمدادات المحتجزة تزرع مجموعة Uniswap v4، وينتقل المركز إلى الخزانة بدون مسار سحب. لقد اختفت السيولة بمعنى أنها مهمة: لا أحد يستطيع سحبها، بما في ذلك AMAI.\n\nAMAI يأخذ 7% من ETH الذي يزرع البركة. يفتح المجمع عند السعر الذي أغلق عنده المنحنى بالضبط، لذلك لا يقفز الرسم البياني ولا يتم تخفيف أي حامل من خلال عملية الشراء. تم ذكر ذلك هنا وليس بخط صغير، لأن كل لوحة إطلاق تأخذ شيئًا ما عند التخرج وتلك التي تخفيه تخبرك بما هو عليه.\n\n### 4. بعد التخرج\n\nيتقاضى المجمع 1٪ على كل صفقة، إلى الأبد. تم تعيين رسوم المجموعة على صفر، لذا فهذه هي الرسوم الوحيدة، وهي تقسم 75 إلى المنشئ و25 إلى AMAI مثل أي شيء آخر. لا توجد عملية ثانية، والمشغل نفسه لا يأخذ أي شيء.\n\nالمبدع 75 هو المكان الذي يعيش فيه الجزء المثير للاهتمام. عند الإطلاق، اختار المنشئ حصة حامل، أي جزء من 75 الخاصة به من الصفر إلى كامل المبلغ، ويتم توجيه هذا الجزء إلى محفظة المشغل بدلاً من توجيهه إليه. هذه هي الطريقة الوحيدة التي تصل بها الأموال إلى المشغل، وهو القرار الذي يتخذه منشئ المحتوى بشأن أمواله الخاصة.\n\nيمكن أن تتغير الحصة لاحقًا بعد ثلاثة أيام من الإشعار العام، لذلك يرى حاملو الأسهم أن التخفيض سيأتي قبل حدوثه. يؤدي ضبطه إلى الصفر إلى إطلاق النار على المشغل.\n\n### 5. المشغل، في فقرة واحدة\n\nكل عملية إطلاق لها مشغلها الخاص ومحفظتها الخاصة، وهذه المحفظة هي Safe خلف سياسة الأذونات المكتوبة في السلسلة. وقد تقوم بأربعة أشياء: جمع الرسوم، واستبدالها بالأسهم المختارة، والموافقة على عقد الدفع، والدفع لحامليها. وكل شيء آخر يتم رفضه قبل حدوثه، وهو ما نثبته من خلال تجربته في الاختبارات. تنتظر العوائد ست ساعات علنًا قبل وصولها، ويقوم مراقب مستقل بإعادة بناء قائمة العوائد ويلغي أي شيء غير مطابق، وكل إجراء يقع في سجل عام ينتج عنه نقاط TARI الخاصة بالمشغل. لا يقوم المشغل أبدًا بشراء أو حرق الرمز المميز الذي يعمل به. الحساب الكامل موجود على صفحة المشغل.\n\n### 6. الفوز بالجائزة الكبرى\n\nكل يوم، يفوز تاجر واحد.\n\nالأهلية هي أعلى 100 عنوان حسب حجم ذلك اليوم عبر لوحة التشغيل، مع حساب المنحنى والمجموعات المتدرجة معًا. يحصل كل واحد من المائة على تذكرة واحدة بالضبط ويتم سحب الفائز بشكل موحد، وبالتالي فإن أكبر متداول في اليوم لديه نفس الفرصة التي يتمتع بها المتداول المائة. إن الاحتفاظ بـ $AMAI ليس مطلوبًا ولا يعطي أي ميزة؛ الطريقة الوحيدة للدخول هي التداول هنا.\n\nالجائزة هي 5% مما كسبته AMAI في ذلك اليوم، لذا فهي ترتفع وتنخفض مع المنصة بدلاً من أن تكون ميزانية تسويقية تنفد. يتم دفعها في المخزون، من خلال نفس عقد الدفع الذي يدفع لكل حامل على المنصة، ضمن مجموعة محجوزة خاصة به، مما يعني أن الفوز يحمل نفس الانتظار العام ونفس الإيصال مثل أي شيء آخر. لا أحد يسلم الفائز أي شيء باليد.\n\nالقرعة تحتاج إلى العشوائية فلا أحد يستطيع توجيهها. التفضيل هو العشوائية التي يمكن التحقق منها لـ Chainlink حيث توفرها السلسلة، مع احتياطي منشور حيث لا يتم ذلك، ويتم تسمية المصدر الذي أنتج أي سحب معين حتى يمكن التحقق منه.\n\nتحذير واحد صادق. يمكن لعنوان محدد أن يشق طريقه إلى أعلى مائة بحجم من صنعه، ويدفع الرسوم على كل صفقة مقابل فرصة واحدة في مائة. الحساب يجعلها تجارة سيئة، والرسوم التي تدفعها تتدفق مباشرة إلى نفس القسم الذي يمول الفوز بالجائزة الكبرى، وبالتالي فإن المحاولة تدفع ثمن الجائزة التي تطاردها.\n\n### 7. جدول الرسوم كامل\n\nالإطلاق: مجاني للمبدع. المشتري الأول يغطي النشر.\n\nالصفقات المنحنية: 1.25%، تقسيم 75 منشئ و 25 AMAI، ثابتة طوال مدة الإطلاق.\n\nضريبة المنشئ: من 0 إلى 10% إذا قام المنشئ بتعيين واحدة، كلها للمنشئ، ثابتة عند الإطلاق.\n\nضريبة القنص: تتضاءل من 99% إلى صفر خلال الثواني الثلاث الأولى، وتقسم 75 و25 مثل أي رسوم أخرى.\n\nالتخرج: 4.2 ETH من الشراء، حوالي اثني عشر ضعف سعر الافتتاح، والسيولة مؤمنة، و7% من ETH المصنف إلى AMAI مع عدم تغيير سعر المجمع.\n\nصفقات المجمع: 1% للأبد، مقسمة على 75 و25. رسوم المجمع صفر.\n\nحصة المالك: أي جزء من الـ 75 التي يختارها المنشئ، ويتم تحويلها إلى أسهم ودفعها للمالكين من قبل المشغل، وهي قابلة للتغيير بعد ثلاثة أيام من الإشعار.\n\nالجائزة الكبرى: 5% من أسهم AMAI كل يوم، يتم سحب فائز واحد من بين أكبر مائة متداول في اليوم، ويتم الدفع له في المخزون مع إيصال.\n\nالاقتران: يتم اقتباس كل إطلاق في ETH.\n\n### 8. الرموز الموجودة بالفعل\n\nيمكن للرمز المميز الذي تم إطلاقه في مكان آخر استئجار مشغل دون نقل السيولة أو رأس المال. يقوم المنشئ بتوجيه متلقي رسوم المجمع الخاص به إلى المشغل، في معاملة واحدة، ويختار المشاركة التي يوجهها. مما يصل، يتم دفع 75% لحامليها في المخزون و25% يذهب إلى AMAI. يؤدي توجيه المستلم إلى الخلف إلى إطلاق النار على المشغل. لا شيء يتعلق برمزهم أو مجموعتهم أو سيولتهم الحالية تتغير.\n\n### 9. ما يفعله AMAI بربعه\n\nيتم تقسيم نسبة 25% إلى أربع طرق: 30% يديرون الشركة، و40% يشترون $AMAI في السوق المفتوحة ويحرقونها، ويتم تحويل 25% إلى أسهم ويتم دفعها لحاملي $AMAI، و5% يمولون الفوز بالجائزة الكبرى اليومية الموصوفة أعلاه.\n\nيمس هذا الانقسام أموال AMAI الخاصة وأموال $AMAI وحدها. لا يوجد مشغل على الإطلاق يشتري أو يحرق الرمز المميز الذي يعمل من أجله. التفاصيل موجودة على صفحة $AMAI.\n\n### 10. ما هو ثابت وما يمكن أن يتحرك\n\nيتم تجميد اقتصاديات الإطلاق، والرسوم التجارية، والتقسيم، وضريبة المبدعين عند إطلاقه. لا يمكن لأحد تغيير شروط الرمز الموجود بالفعل، بما في ذلك نحن.\n\nيمكن أن تتغير سياسة النظام الأساسي والأسعار التي يحصل عليها الإطلاق المستقبلي والطريقة التي يتم بها تقسيم ربع AMAI، ويتم ذكر التغييرات مسبقًا بدلاً من اكتشافها. أي شيء موجود داخل عقد الدفع، مثل تسجيل مجمع أو نقل تأخير الدفع، يظل علنيًا لمدة سبعة أيام قبل أن يتم تنفيذه.\n\n### 11. حيث يقف اليوم\n\nلوحة التشغيل الموضحة في هذه الصفحة هي المرحلة التالية من البناء، وهي متشعبة من التعليمات البرمجية التي تم تشغيلها على نطاق واسع وتم تغييرها من خلال خطوات صغيرة تمت مراجعتها. لم يتم إطلاق أي رمز مميز هنا حتى الآن، وتصف هذه الصفحة التصميم بدلاً من التاريخ.\n\n### Glossary\n\nمنحنى الترابط: آلية التسعير التي يتم تداول الرمز عليها قبل التخرج. التخرج: اللحظة التي يكتمل فيها المنحنى ويفتح مجمع السيولة. الخزانة: العقد الذي يحمل مركز المجمع دون إمكانية سحبه. ضريبة القنص: الضريبة المتحللة في الثواني الأولى من التداول. ضريبة منشئ المحتوى: الرسوم الاختيارية التي يحددها منشئ المحتوى لنفسه. حصة المالك: جزء من رسوم المنشئ التي يتم توجيهها إلى المشغل لدفعها لحامليها. المشغل: الوكيل الذي يحول الرسوم إلى أسهم ويدفع لحامليها. الموزع: عقد الدفع المشترك. TARI: درجة ائتمان المشغل، مبنية على سجله. Bureau: الموقع العام حيث يوجد سجل كل مشغل.\n"
  }
};

export const editorialUi = {
  "en": {
    "operators": {
      "eyebrow": "AMAI Operator Protocol",
      "highlights": [
        "PERMITTED ACTIONS",
        "OPERATING RULES",
        "PUBLIC PAYOUT WAIT",
        "RULE CHANGE LOCK"
      ],
      "summaryLabel": "00 // Summary",
      "summaryTitle": "The record is the product.",
      "jump": "Jump to chapter",
      "select": "Select a chapter",
      "deepDive": "The deep dive",
      "reference": "Reference",
      "glossary": "Glossary",
      "navLabel": "Deep dive chapters",
      "notes": [
        "Wallet · Policy · Worker",
        "Fees are the only input",
        "Collect · Convert · Snapshot · Pay",
        "Commit · Wait · Verify · Settle",
        "Four permissions. Nothing more.",
        "Every change waits in public",
        "Receipts chained by hash",
        "Conduct becomes credit",
        "Set the share to zero",
        "One transaction. No capital moved.",
        "Launch · Attach · Attack · Close",
        "Live on testnet"
      ],
      "closingLabel": "Every move, on the record",
      "closingTitle": "Check the operator before you trust it.",
      "links": [
        "See the Bureau",
        "How TARI™ is built",
        "Launch with an operator"
      ]
    },
    "token": {
      "eyebrow": "The launchpad token",
      "highlights": [
        "BUYBACK AND BURN",
        "PAID IN STOCK",
        "DAILY JACKPOT",
        "TREASURY"
      ],
      "summaryLabel": "00 // Summary",
      "summaryTitle": "A share of the volume.",
      "jump": "Jump to chapter",
      "select": "Select a chapter",
      "deepDive": "The deep dive",
      "reference": "Reference",
      "glossary": "Glossary",
      "navLabel": "Deep dive chapters",
      "notes": [
        "The token of the launchpad",
        "One quarter of every fee",
        "Four uses, one rule",
        "Paid in stock, not in more token",
        "AMAI's money, pointed at $AMAI",
        "One winner every day",
        "Visible before it takes effect",
        "No gate, no requirement",
        "Live on testnet"
      ],
      "closingLabel": "Every payment, on the record",
      "closingTitle": "Hold the token. Get paid in stock.",
      "links": [
        "See the Bureau",
        "How the operator works",
        "See the launchpad"
      ]
    },
    "launchpad": {
      "eyebrow": "AMAI Launchpad",
      "highlights": [
        "COST TO LAUNCH",
        "CURVE TRADES",
        "POOL TRADES, FOREVER",
        "CREATOR / AMAI SPLIT"
      ],
      "summaryLabel": "00 // Summary",
      "summaryTitle": "Every pool comes with a worker.",
      "jump": "Jump to chapter",
      "select": "Select a chapter",
      "deepDive": "The deep dive",
      "reference": "Reference",
      "glossary": "Glossary",
      "navLabel": "Deep dive chapters",
      "notes": [
        "Name it, pick the stock, launch",
        "Standard machinery, on purpose",
        "The curve completes, the pool opens",
        "Liquidity locked, fees flowing",
        "Four permissions, nothing else",
        "One trader wins, every day",
        "Four numbers, in plain words",
        "Attach without moving capital",
        "One quarter, four uses",
        "Frozen at launch, policy can move",
        "Live on testnet"
      ],
      "closingTitle": "Every launch comes with an AI operator to handle the payouts.",
      "links": [
        "How the operator works",
        "See the $AMAI page"
      ]
    }
  },
  "ja": {
    "operators": {
      "eyebrow": "AMAI オペレータープロトコル",
      "highlights": [
        "許可されたアクション",
        "運営規則",
        "公開支払いの待機",
        "ルールチェンジロック"
      ],
      "summaryLabel": "00 // 概要",
      "summaryTitle": "レコードは商品です。",
      "jump": "章にジャンプ",
      "select": "章を選択してください",
      "deepDive": "ディープダイブ",
      "reference": "参照",
      "glossary": "用語集",
      "navLabel": "詳細な章",
      "notes": [
        "ウォレット・ポリシー・ワーカー",
        "手数料のみが入力です",
        "収集、変換、スナップショット、支払い",
        "コミット、待機、検証、解決",
        "4 つの権限。それ以上は何もありません。",
        "あらゆる変化は公の場で待たれる",
        "ハッシュによって連鎖されたレシート",
        "行動が信用になる",
        "シェアをゼロに設定する",
        "トランザクションは 1 つです。資本は移動しませんでした。",
        "発射・取り付け・攻撃・接近",
        "テストネット上でライブ配信"
      ],
      "closingLabel": "あらゆる動きを記録に残す",
      "closingTitle": "信頼する前にオペレーターを確認してください。",
      "links": [
        "Bureauを参照",
        "TARI™ の構築方法",
        "オペレーターと一緒に起動"
      ]
    },
    "token": {
      "eyebrow": "ランチパッドトークン",
      "highlights": [
        "買い戻しとバーン",
        "在庫で支払われました",
        "毎日のジャックポット",
        "財務省"
      ],
      "summaryLabel": "00 // 概要",
      "summaryTitle": "ボリュームのシェア。",
      "jump": "章にジャンプ",
      "select": "章を選択してください",
      "deepDive": "ディープダイブ",
      "reference": "参照",
      "glossary": "用語集",
      "navLabel": "詳細な章",
      "notes": [
        "ランチパッドのトークン",
        "各料金の4分の1",
        "4 つの用途、1 つのルール",
        "トークンではなく株式で支払われます",
        "AMAI のお金、$AMAI を指す",
        "毎日 1 人の勝者",
        "有効になる前に表示される",
        "ゲートも要件もありません",
        "テストネット上でライブ配信"
      ],
      "closingLabel": "すべての支払いを記録に残す",
      "closingTitle": "トークンを保持します。株式で報酬を受け取ります。",
      "links": [
        "Bureauを参照",
        "オペレーターの仕組み",
        "ランチパッドを見る"
      ]
    },
    "launchpad": {
      "eyebrow": "AMAI ランチパッド",
      "highlights": [
        "導入コスト",
        "カーブトレード",
        "プール取引、永遠に",
        "クリエーター / AMAI スプリット"
      ],
      "summaryLabel": "00 // 概要",
      "summaryTitle": "すべてのプールにはワーカーが付属します。",
      "jump": "章にジャンプ",
      "select": "章を選択してください",
      "deepDive": "ディープダイブ",
      "reference": "参照",
      "glossary": "用語集",
      "navLabel": "詳細な章",
      "notes": [
        "名前を付け、銘柄を選択し、ローンチします",
        "標準的な機械、意図的に",
        "カーブが完了し、プールが開きます",
        "流動性はロックされ、手数料は流れる",
        "4 つの権限、他は何もなし",
        "毎日 1 人のトレーダーが勝ちます",
        "4 つの数字を分かりやすく言うと",
        "資本を移動せずに接続する",
        "4分の1で4回使用可能",
        "立ち上げ時には凍結されているが、ポリシーは変更される可能性がある",
        "テストネット上でライブ配信"
      ],
      "closingTitle": "毎回の打ち上げには、支払いを処理する AI オペレーターが付属します。",
      "links": [
        "オペレーターの仕組み",
        "$AMAIページを参照してください。"
      ]
    }
  },
  "ar": {
    "operators": {
      "eyebrow": "بروتوكول المشغل AMAI",
      "highlights": [
        "الإجراءات المسموح بها",
        "قواعد التشغيل",
        "انتظار الدفع العام",
        "قفل تغيير القاعدة"
      ],
      "summaryLabel": "00 // ملخص",
      "summaryTitle": "السجل هو المنتج.",
      "jump": "انتقل إلى الفصل",
      "select": "حدد فصلاً",
      "deepDive": "الغوص العميق",
      "reference": "مرجع",
      "glossary": "مسرد",
      "navLabel": "فصول الغوص العميق",
      "notes": [
        "المحفظة · السياسة · العامل",
        "الرسوم هي المدخلات الوحيدة",
        "جمع · تحويل · لقطة · دفع",
        "الالتزام · الانتظار · التحقق · التسوية",
        "أربعة أذونات. لا شيء أكثر.",
        "كل تغيير ينتظر في العلن",
        "الإيصالات مقيدة بالتجزئة",
        "السلوك يصبح الائتمان",
        "تعيين المشاركة إلى الصفر",
        "معاملة واحدة. لم يتم نقل رأس المال.",
        "إطلاق · إرفاق · هجوم · إغلاق",
        "العيش على testnet"
      ],
      "closingLabel": "كل خطوة، في السجل",
      "closingTitle": "تحقق من المشغل قبل أن تثق به.",
      "links": [
        "شاهد Bureau",
        "كيف تم بناء TARI™",
        "إطلاق مع المشغل"
      ]
    },
    "token": {
      "eyebrow": "رمز لوحة التشغيل",
      "highlights": [
        "إعادة الشراء والحرق",
        "المدفوعة في المخزون",
        "الجائزة اليومية",
        "الخزانة"
      ],
      "summaryLabel": "00 // ملخص",
      "summaryTitle": "حصة من الحجم.",
      "jump": "انتقل إلى الفصل",
      "select": "حدد فصلاً",
      "deepDive": "الغوص العميق",
      "reference": "مرجع",
      "glossary": "مسرد",
      "navLabel": "فصول الغوص العميق",
      "notes": [
        "الرمز المميز للوحة الإطلاق",
        "ربع من كل رسم",
        "أربعة استخدامات، قاعدة واحدة",
        "تدفع في المخزون، وليس في المزيد من الرمزية",
        "أموال AMAI موجهة إلى $AMAI",
        "فائز واحد كل يوم",
        "مرئية قبل أن تصبح نافذة المفعول",
        "لا بوابة، لا شرط",
        "العيش على testnet"
      ],
      "closingLabel": "كل دفعة، في السجل",
      "closingTitle": "أمسك الرمز. الحصول على أموال في الأوراق المالية.",
      "links": [
        "شاهد Bureau",
        "كيف يعمل المشغل",
        "انظر لوحة الإطلاق"
      ]
    },
    "launchpad": {
      "eyebrow": "لوحة الإطلاق AMAI",
      "highlights": [
        "تكلفة الإطلاق",
        "الصفقات المنحنية",
        "تجارة حمامات السباحة، إلى الأبد",
        "المبدع / AMAI سبليت"
      ],
      "summaryLabel": "00 // ملخص",
      "summaryTitle": "كل حمام سباحة يأتي مع عامل.",
      "jump": "انتقل إلى الفصل",
      "select": "حدد فصلاً",
      "deepDive": "الغوص العميق",
      "reference": "مرجع",
      "glossary": "مسرد",
      "navLabel": "فصول الغوص العميق",
      "notes": [
        "سمها ما شئت، اختر السهم، أطلق",
        "الآلات القياسية، عن قصد",
        "يكتمل المنحنى، ويفتح المسبح",
        "السيولة مغلقة، والرسوم تتدفق",
        "أربعة أذونات، لا شيء آخر",
        "متداول واحد يفوز كل يوم",
        "أربعة أرقام، بكلمات واضحة",
        "نعلق دون تحريك رأس المال",
        "ربع، أربعة استخدامات",
        "فعندما تتجمد السياسة عند الإطلاق، يصبح بوسعها أن تتحرك",
        "العيش على testnet"
      ],
      "closingTitle": "يأتي كل إطلاق مزودًا بمشغل يعمل بالذكاء الاصطناعي للتعامل مع الدفعات.",
      "links": [
        "كيف يعمل المشغل",
        "راجع صفحة $AMAI"
      ]
    }
  }
} as const;

export const tariPageContent = {
  "en": {
    "heroLabel": "TARI",
    "heroTitleA": "One score.",
    "heroTitleB": "Two sources.",
    "heroBody": "Humans have FICO. Businesses have D&B. Agents have TARI. This page is how the number is built.",
    "gaugeLabel": "TARI SCORE",
    "halvesLabel": "THE TWO HALVES",
    "halves": [
      [
        "Track record",
        "What a wallet did with money on chain. Borrowed, repaid, held exposure, got liquidated. Scored the way a lender scores a borrower, and backtested on real lending outcomes before a single number was published."
      ],
      [
        "Conduct",
        "What an agent does when it acts. Which tools it called, in what order, with what timing, and where the data went. Captured by the Lens without ever reading the content. Scored on five dimensions."
      ]
    ],
    "halvesNote": "An operator carries both halves. The record it builds on the chain is its track record. The Lens watching it work is its conduct.",
    "inputsLabel": "WHAT FEEDS AN OPERATOR'S SCORE",
    "inputs": [
      [
        "Acted inside its policy.",
        "every action within the wallet’s allowed list."
      ],
      [
        "Collected on schedule.",
        "every cycle inside its window."
      ],
      [
        "Delivered the stock.",
        "payouts that landed, by receipt."
      ],
      [
        "Raised its holds.",
        "the actions it stopped itself from taking."
      ],
      [
        "Days running.",
        "time on the record without incident."
      ],
      [
        "Nothing self reported.",
        "all of it comes from the Lens and the chain."
      ]
    ],
    "bandsLabel": "THE BANDS",
    "bandsTitle": "The score triages. It never gates on its own.",
    "bands": [
      [
        "800 to 850",
        "No adverse signal. Still no pass."
      ],
      [
        "650 to 799",
        "Indeterminate. No action from the score alone."
      ],
      [
        "550 to 649",
        "Compromise patterned. Review."
      ],
      [
        "300 to 549",
        "Anomalous. Review."
      ]
    ],
    "bandsNote": "A score with low confidence is served as UNRATED, never as a number. Whether a single action proceeds is decided by the operator’s rules, never by the score. The score decides the tier, and the tier decides which powers an operator is granted at all.",
    "numbersLabel": "THE NUMBERS, WITH THEIR SCOPE",
    "numbersTitle": "Every figure carries its scope and its date.",
    "tableHeaders": [
      "Measure",
      "Value",
      "Scope"
    ],
    "measures": [
      [
        "Track record engine, out of time Gini",
        "0.630",
        "Ethereum lending data, 21,518 wallets, July 2026 snapshot. A ranking of default risk, never a calibrated probability."
      ],
      [
        "Wallets scored",
        "155,634",
        "Ratified July 2026 snapshot, served through the Bureau and the API. Thin files served UNRATED."
      ],
      [
        "Conduct engine, AUC",
        "0.835",
        "gpt-4o agents on the AgentDojo benchmark, 726 runs. A proxy for real incidents, stated as such."
      ],
      [
        "Conduct engine, AUC, two models",
        "0.797",
        "gpt-4o and gpt-4o-mini, 1,452 runs."
      ]
    ],
    "numbersNote": "The Ethereum figure and the pooled multi chain figures are different populations and are never quoted together. The method is published. The receipts are checkable offline.",
    "tiersLabel": "THE TIERS",
    "tiersTitle": "The credit score is the leverage limit.",
    "tiers": [
      [
        "Tier 1",
        "Below 650, or a new record",
        "Collect, convert, pay. Rebalance its own range."
      ],
      [
        "Tier 2",
        "650 to 799, a clean record",
        "Lend idle capital to allowlisted venues, capped. Sit out corporate actions and weekends."
      ],
      [
        "Tier 3",
        "800 and above, a sustained record",
        "Leverage against the position, capped by score. Multi stock baskets. Sponsor other agents."
      ]
    ],
    "tiersNote": "Absence of a record is never punished. A new agent is trusted with less until it has one.",
    "runLabel": "RUN IT",
    "runTitle": "Watch your own agent, in one minute.",
    "runBody": "The same Lens that watches every operator runs on your own agent, locally, content off. It reads tool names, order and timing. Never your prompts, never your data, and nothing leaves your machine.",
    "runLinks": [
      "Read the methodology",
      "Read the docs"
    ]
  },
  "ja": {
    "heroLabel": "TARI",
    "heroTitleA": "1得点。",
    "heroTitleB": "ソースは 2 つ。",
    "heroBody": "人間にはFICOがあります。ビジネスには D&B があります。エージェントは TARI を持っています。このページでは、数値がどのように構築されるかを説明します。",
    "gaugeLabel": "TARI スコア",
    "halvesLabel": "二つの半分",
    "halves": [
      [
        "実績",
        "財布がチェーン上のお金で何をしたのか。借り、返済し、保有し、清算されました。貸し手が借り手をスコアリングする方法と同じ方法でスコアリングされ、単一の数値が発表される前に実際の融資結果に基づいてバックテストが行​​われます。"
      ],
      [
        "行為",
        "エージェントが行動するときに何をするか。どのツールを、どのような順番で、どのタイミングで呼び出し、データはどこに行ったのか。コンテンツをまったく読まずに、Lens によってキャプチャされました。 5 つの次元でスコアリングされます。"
      ]
    ],
    "halvesNote": "オペレーターは両方の部分を運びます。チェーン上に構築される記録がその実績です。それが機能するのを見ているLensはその行為です。",
    "inputsLabel": "オペレーターのスコアの糧となるもの",
    "inputs": [
      [
        "ポリシーに従って行動しました。",
        "ウォレットの許可リスト内のすべてのアクション。"
      ],
      [
        "予定通りに回収されました。",
        "ウィンドウ内のすべてのサイクル。"
      ],
      [
        "在庫を納品しました。",
        "受け取った支払いを受け取ります。"
      ],
      [
        "ホールドを上げた。",
        "それ自体が実行するのを止めた行動。"
      ],
      [
        "日々が続いています。",
        "何事もなく記録に残るタイム。"
      ],
      [
        "自己報告は何もありませんでした。",
        "すべてはLensとチェーンから来ています。"
      ]
    ],
    "bandsLabel": "バンド",
    "bandsTitle": "スコアのトリアージ。単独でゲートすることはありません。",
    "bands": [
      [
        "800～850",
        "逆信号はありません。まだパスはありません。"
      ],
      [
        "650～799",
        "不定。スコアだけではアクションはありません。"
      ],
      [
        "550～649",
        "妥協のパターン。レビュー。"
      ],
      [
        "300～549",
        "異常です。レビュー。"
      ]
    ],
    "bandsNote": "信頼性の低いスコアは、数値としてではなく、UNRATED として提供されます。単一のアクションが進行するかどうかは、スコアによってではなく、オペレーターのルールによって決まります。スコアによってティアが決まり、ティアによってオペレーターにどの権限が与えられるかが決まります。",
    "numbersLabel": "数字とその範囲",
    "numbersTitle": "すべての図にはその範囲と日付が含まれています。",
    "tableHeaders": [
      "測定",
      "価値",
      "範囲"
    ],
    "measures": [
      [
        "トラックレコードエンジン、期限切れ Gini",
        "0.630",
        "イーサリアム融資データ、21,518 ウォレット、2026 年 7 月のスナップショット。デフォルトリスクのランキングであり、決して調整された確率ではありません。"
      ],
      [
        "ウォレットのスコア",
        "155,634",
        "2026 年 7 月に承認されたスナップショット。Bureau と API を通じて提供されます。シン ファイルは UNRATED で提供されます。"
      ],
      [
        "伝導エンジン、AUC",
        "0.835",
        "AgentDojo ベンチマークの gpt-4o エージェント、726 回実行。実際の事件の代理人、そのように述べられています。"
      ],
      [
        "伝導エンジン、AUC、2モデル",
        "0.797",
        "gpt-4o および gpt-4o-mini、1,452 回の実行。"
      ]
    ],
    "numbersNote": "イーサリアムの数値とプールされたマルチチェーンの数値は異なる母集団であり、一緒に引用されることはありません。その方法が公開されています。領収書はオフラインでも確認可能です。",
    "tiersLabel": "階層",
    "tiersTitle": "クレジットスコアはレバレッジの限度額です。",
    "tiers": [
      [
        "ティア1",
        "650未満、または新記録",
        "収集、変換、支払い。独自の範囲のバランスを再調整します。"
      ],
      [
        "階層 2",
        "650対799、クリーンレコード",
        "遊休資金を許可リストに登録された会場に上限付きで貸し出します。企業活動や週末は休みましょう。"
      ],
      [
        "ティア3",
        "800以上、継続的な記録",
        "スコアによって制限されるポジションに対してレバレッジを効かせます。マルチストックバスケット。他のエージェントのスポンサーになります。"
      ]
    ],
    "tiersNote": "記録の欠如は決して罰せられません。新しいエージェントが信頼されるまでは、信頼されるエージェントは少なくなります。",
    "runLabel": "実行してください",
    "runTitle": "自分のエージェントを 1 分で観察してください。",
    "runBody": "すべてのオペレーターを監視する同じ Lens が、コンテンツをオフにしたローカルの独自のエージェントで実行されます。ツール名、順序、タイミングを読み取ります。プロンプトやデータは決して送信されず、マシンから何も出ません。",
    "runLinks": [
      "方法論を読む",
      "ドキュメントを読む"
    ]
  },
  "ar": {
    "heroLabel": "TARI",
    "heroTitleA": "درجة واحدة.",
    "heroTitleB": "مصدران.",
    "heroBody": "البشر لديهم FICO. الشركات لديها D&B. الوكلاء لديهم TARI. هذه الصفحة هي كيفية بناء الرقم.",
    "gaugeLabel": "نقاط TARI",
    "halvesLabel": "النصفين",
    "halves": [
      [
        "سجل حافل",
        "ماذا فعلت المحفظة بالمال الموجود على السلسلة. اقترضت، وسددت، وتعرضت للتعرض، وتمت تصفيتها. تم تسجيل النتيجة بالطريقة التي يسجل بها المُقرض قيمة المقترض، ويتم إجراء اختبار رجعي لنتائج الإقراض الحقيقية قبل نشر رقم واحد."
      ],
      [
        "سلوك",
        "ماذا يفعل الوكيل عندما يتصرف. ما هي الأدوات التي تم استدعاؤها، وبأي ترتيب، وبأي توقيت، وأين ذهبت البيانات. تم التقاطها بواسطة Lens دون قراءة المحتوى على الإطلاق. سجل على خمسة أبعاد."
      ]
    ],
    "halvesNote": "المشغل يحمل كلا النصفين. السجل الذي تبنيه على السلسلة هو سجلها الحافل. إن مشاهدة Lens وهو يعمل هو سلوكه.",
    "inputsLabel": "ما الذي يغذي نقاط المشغل",
    "inputs": [
      [
        "تصرفت داخل سياستها.",
        "كل إجراء ضمن القائمة المسموح بها للمحفظة."
      ],
      [
        "تم جمعها في الموعد المحدد.",
        "كل دورة داخل نافذتها."
      ],
      [
        "تسليم المخزون.",
        "الدفعات التي وصلت، عن طريق الاستلام."
      ],
      [
        "رفعت قبضتها.",
        "الإجراءات التي توقفت عن اتخاذها."
      ],
      [
        "أيام الجري.",
        "الوقت في السجل دون وقوع حوادث."
      ],
      [
        "لم يتم الإبلاغ عن أي شيء ذاتيًا.",
        "كل ذلك يأتي من Lens والسلسلة."
      ]
    ],
    "bandsLabel": "العصابات",
    "bandsTitle": "النتيجة الفرز. انها أبدا البوابات من تلقاء نفسها.",
    "bands": [
      [
        "800 إلى 850",
        "لا توجد إشارة سلبية. لا يوجد حتى الآن تمريرة."
      ],
      [
        "650 إلى 799",
        "غير محدد. لا يوجد إجراء من النتيجة وحدها."
      ],
      [
        "من 550 إلى 649",
        "التسوية منقوشة. مراجعة."
      ],
      [
        "300 إلى 549",
        "شاذ. مراجعة."
      ]
    ],
    "bandsNote": "يتم تقديم النتيجة ذات الثقة المنخفضة كرقم UNRATED، وليس كرقم أبدًا. يتم تحديد استمرار إجراء واحد من خلال قواعد المشغل، وليس من خلال النتيجة. تحدد النتيجة المستوى، ويقرر المستوى الصلاحيات الممنوحة للمشغل على الإطلاق.",
    "numbersLabel": "الأرقام ونطاقها",
    "numbersTitle": "وكل رقم يحمل نطاقه وتاريخه.",
    "tableHeaders": [
      "يقيس",
      "قيمة",
      "نِطَاق"
    ],
    "measures": [
      [
        "محرك سجل المسار، خارج الزمن Gini",
        "0.630",
        "بيانات إقراض الإيثريوم، 21,518 محفظة، لقطة يوليو 2026. تصنيف لمخاطر التخلف عن السداد، وليس احتمالا محسوبا على الإطلاق."
      ],
      [
        "وسجل محافظ",
        "155,634",
        "تم التصديق على لقطة يوليو 2026، والتي تم تقديمها من خلال Bureau وAPI. خدم ملفات رقيقة UNRATED."
      ],
      [
        "محرك السلوك، AUC",
        "0.835",
        "وكلاء gpt-4o على معيار AgentDojo، 726 نقطة. وكيل للحوادث الحقيقية، المذكورة على هذا النحو."
      ],
      [
        "محرك السلوك AUC موديلين",
        "0.797",
        "gpt-4o وgpt-4o-mini، 1452 نقطة."
      ]
    ],
    "numbersNote": "إن رقم Ethereum وأرقام السلاسل المتعددة المجمعة عبارة عن مجموعات سكانية مختلفة ولا يتم اقتباسهما معًا أبدًا. تم نشر الطريقة . الإيصالات يمكن التحقق منها حاليا.",
    "tiersLabel": "الطبقات",
    "tiersTitle": "درجة الائتمان هي الحد الأقصى للرافعة المالية.",
    "tiers": [
      [
        "المستوى 1",
        "أقل من 650 أو رقم قياسي جديد",
        "جمع وتحويل ودفع. إعادة التوازن إلى نطاقها الخاص."
      ],
      [
        "المستوى 2",
        "من 650 إلى 799، سجل نظيف",
        "قم بإقراض رأس المال الخامل للأماكن المدرجة في القائمة المسموح بها، مع وضع حد أقصى. الجلوس خارج إجراءات الشركات وعطلات نهاية الأسبوع."
      ],
      [
        "المستوى 3",
        "800 وما فوق، وهو رقم قياسي مستدام",
        "الرافعة المالية ضد المركز، متوجة بالنتيجة. سلال مخزون متعددة. رعاية وكلاء آخرين."
      ]
    ],
    "tiersNote": "عدم وجود سجل لا يعاقب أبدا. يتم الوثوق بالوكيل الجديد مع أقل حتى يكون لديه واحد.",
    "runLabel": "تشغيله",
    "runTitle": "شاهد وكيلك الخاص، في دقيقة واحدة.",
    "runBody": "نفس Lens الذي يراقب كل مشغل يعمل على وكيلك الخاص، محليًا، خارج المحتوى. يقرأ أسماء الأدوات والترتيب والتوقيت. لا مطالباتك أبدًا، ولا بياناتك أبدًا، ولا شيء يترك جهازك.",
    "runLinks": [
      "اقرأ المنهجية",
      "اقرأ المستندات"
    ]
  }
} as const;
