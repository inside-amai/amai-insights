export const launchpadMarkdown = `
# The Launchpad

Launch a token. It comes with a worker.

## TL;DR

The AMAI launchpad is where a token is created, traded on a curve, and graduated into its own liquidity pool. Everything about it is standard except one thing: every token launched here comes with an AI operator attached to its pool, so the token can pay its holders in real stock. The creator pays nothing to launch and keeps 75% of every fee, on the curve and in the pool, forever. At launch the creator picks the stock their holders get paid in and how much of that 75 goes to them, from none of it to all of it. The fee schedule is four numbers, it is fixed for the life of each launch, and what AMAI takes at graduation is written on the page rather than buried. Every day, one of the hundred busiest traders on the launchpad wins a jackpot funded out of AMAI's own share.

## Summary

Launchpads are a solved problem, and the solution is boring on purpose: a bonding curve that sells a fixed supply, a threshold that graduates the token into a real pool, and liquidity locked so nobody can pull it. AMAI copies that machinery exactly, down to the curve constants, because a launchpad is not the place to be creative.

What changes is what happens after the token exists. Every pool here has an operator attached to it, an agent that collects the pool's trading fees, turns them into a stock token, and pays that stock to the people holding the token, cycle after cycle, with a receipt for every payment. The creator decides at launch whether that happens and how much of their own share funds it. Set it to zero and the token behaves like any other token anywhere. Set it high and the community holds something that pays them in shares of a real company while they hold it.

The money is simple enough to say in four numbers. Launching costs the creator nothing. Trading on the curve costs 1.25%. Trading in the pool after graduation costs 1%, forever. Every one of those fees splits the same way, 75% to the creator, 25% to AMAI. There is one more number, and it is the one launchpads usually hide: at graduation, 20.69% of the ETH that seeds the pool goes to AMAI. It is here, in plain words, because a platform selling trust cannot have fine print about its own take.

Creators bring the audience, so creators keep the larger share. That is the entire commercial thesis, and it is why the split is 75 rather than 70.

## The deep dive

### 1. Launching

A creator names a token, picks the stock their holders will be paid in, sets the share of their fees that funds those payments, and launches. The token is a plain ERC20 with a fixed supply and no transfer tax, made by the factory at an address known before it exists.

Launching costs the creator nothing. No creation fee, no gas. The creator signs the launch off chain and the first person to buy pays the deployment, which is how a creator with an audience and no ETH can still launch. If nobody ever buys, nothing was ever spent.

Two choices at launch are permanent, so they are worth understanding. The trade fee and its split are frozen for the life of the token, which means the terms a creator launches under are the terms they keep. The creator tax, an optional 0 to 10% that goes entirely to the creator on every trade, is also set once and frozen.

Every launch is quoted in ETH.

### 2. The curve

Before a token graduates it trades on a bonding curve: a fixed supply sold against a virtual reserve, where the price rises as the supply sells. Five sevenths of the supply sells on the curve. The rest is held back to seed the pool.

Every trade on the curve pays 1.25%. Three quarters of that goes to the creator and a quarter to AMAI, and that is true from the first trade.

The first three seconds have a snipe tax. It opens at 99% and decays to zero across those seconds, which makes the opening moment worthless to a bot and survivable for everyone else. What it collects joins the same fee pool and splits the same way, 75 to the creator, 25 to AMAI.

The curve's own constants, the virtual reserve, the graduation threshold, the multiple from open to graduation, are copied exactly from the launchpad this one forks. They are known quantities and traders recognize them.

### 3. Graduation

When the curve has taken 4.2 ETH of buying, the token graduates automatically, which is roughly twelve times the opening price. Nobody has to trigger it and it cannot be jumped.

At that moment the ETH from the curve and the held back supply seed a Uniswap v4 pool, and the position goes into a locker with no withdrawal path. The liquidity is gone in the sense that matters: nobody can pull it, including AMAI.

AMAI takes 20.69% of the ETH that seeds the pool. The pool opens at exactly the price the curve closed at, so the chart does not jump and no holder is diluted by the take. This is stated here rather than in fine print, because every launchpad takes something at graduation and the ones that hide it are telling you what they are.

### 4. After graduation

The pool charges 1% on every trade, forever. The pool's own fee is set to zero, so this is the only charge, and it splits 75 to the creator and 25 to AMAI like everything else. There is no second take, and the operator itself takes nothing.

The creator's 75 is where the interesting part lives. At launch the creator chose a holder share, any portion of their own 75 from zero to all of it, and that portion is routed to the operator's wallet rather than to them. That is the only way money reaches an operator, and it is a decision the creator makes about their own money.

The share can change later with three days of public notice, so holders see a cut coming before it happens. Setting it to zero fires the operator.

### 5. The operator, in one paragraph

Each launch has its own operator with its own wallet, and that wallet is a Safe behind a permission policy written into the chain. It may do four things: collect the fees, swap them into the chosen stock, approve the payout contract, and pay the holders. Everything else is refused before it happens, which we prove by attempting it in tests. Payouts wait six hours in public before they land, an independent watcher rebuilds the payout list and cancels anything that does not match, and every action lands in a public record that produces the operator's TARI score. The operator never buys or burns the token it works for. The full account is on the operator page.

### 6. The jackpot

Every day, one trader wins.

Eligibility is the top 100 addresses by that day's volume across the launchpad, counting the curve and the graduated pools together. Each of the hundred gets exactly one ticket and the winner is drawn uniformly, so the largest trader of the day has the same chance as the hundredth. Holding $AMAI is not required and gives no advantage; the only way in is trading here.

The prize is 5% of what AMAI earned that day, so it rises and falls with the platform rather than being a marketing budget that runs out. It is paid in stock, through the same payout contract that pays every holder on the platform, under a reserved pool of its own, which means the win carries the same public wait and the same receipt as everything else. Nobody hands a winner anything by hand.

The draw needs randomness nobody can steer. The preference is Chainlink's verifiable randomness where the chain offers it, with a published fallback where it does not, and the source that produced any given draw is named so it can be checked.

One honest caveat. A determined address can buy its way into the top hundred with volume of its own making, paying the fee on every trade for a one in a hundred chance. The arithmetic makes it a poor trade, and the fees it pays flow straight back into the same split that funds the jackpot, so the attempt pays for the prize it is chasing.

### 7. The fee schedule, complete

Launching: free for the creator. The first buyer covers the deployment.

Curve trades: 1.25%, split 75 creator and 25 AMAI, fixed for the life of the launch.

Creator tax: 0 to 10% if the creator sets one, all of it to the creator, fixed at launch.

Snipe tax: decaying from 99% to zero over the first three seconds, split 75 and 25 like every other fee.

Graduation: 4.2 ETH of buying, about twelve times the opening price, liquidity locked, and 20.69% of the seeded ETH to AMAI with the pool price unchanged.

Pool trades: 1% forever, split 75 and 25. The pool's own fee is zero.

Holder share: whatever part of their 75 the creator chooses, converted to stock and paid to holders by the operator, changeable with three days of notice.

The jackpot: 5% of AMAI's share each day, one winner drawn from the day's hundred highest volume traders, paid in stock with a receipt.

Pairing: every launch is quoted in ETH.

### 8. Tokens that already exist

A token that launched somewhere else can hire an operator without moving liquidity or capital. The creator points their pool's fee recipient at the operator, in one transaction, and chooses the share they route. Of what arrives, 75% is paid to their holders in stock and 25% goes to AMAI. Pointing the recipient back fires the operator. Nothing about their token, their pool or their existing liquidity changes.

### 9. What AMAI does with its quarter

The 25% is split four ways: 30% runs the company, 40% buys $AMAI on the open market and burns it, 25% is converted to stock and paid to $AMAI holders, and 5% funds the daily jackpot described above.

That split touches AMAI's own money and $AMAI alone. No operator ever buys or burns the token whose pool it works for. The detail lives on the $AMAI page.

### 10. What is fixed and what can move

A launch's own economics, the trade fee, the split and the creator tax, are frozen when it launches. Nobody can change the terms of a token that already exists, including us.

Platform policy, the rates a future launch gets and the way AMAI's quarter is divided, can change, and changes are stated in advance rather than discovered. Anything that lives inside the payout contract, such as registering a pool or moving a payout delay, sits in public for seven days before it can execute.

### 11. Where it stands today

The payout contract that pays every holder is built, audited and deployed on Robinhood Chain testnet, and an operator runs full cycles there against Robinhood's own test stock tokens. The launchpad described on this page is the next phase of the build, forked from code that has run at scale and changed by small reviewed steps. No token has launched here yet, and this page describes the design rather than a history.

### Glossary

Bonding curve: the pricing mechanism a token trades on before graduation. Graduation: the moment the curve completes and the liquidity pool opens. Locker: the contract that holds the pool position with no way to withdraw it. Snipe tax: the decaying tax on the first seconds of trading. Creator tax: the optional charge a creator sets for themselves. Holder share: the part of the creator's fees routed to the operator to pay holders. Operator: the agent that turns fees into stock and pays holders. Distributor: the shared payout contract. TARI: the operator's credit score, built from its record. Bureau: the public site where every operator's record lives.
`;
