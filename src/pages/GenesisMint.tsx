import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Zap, Users, TrendingUp, Star, Crown, Sparkles, CircleDot, Trophy, Gem } from "lucide-react";
import { Header } from "@/components/Header";

const GenesisMint = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const mechanics = [
    {
      icon: TrendingUp,
      title: "Dynamic Supply",
      description: "Final supply discovered after mint closes."
    },
    {
      icon: Star,
      title: "Tiered Mints",
      description: "Early minters receive modest discounts."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "70% of supply minted by participants."
    }
  ];

  const tokenUnlocks = [
    { 
      icon: Star, 
      headline: "First 3M Tokens", 
      discount: "19% discount", 
      iconColor: "text-cyan-300", 
      glowColor: "shadow-cyan-500/50",
      borderGlow: "border-cyan-400/60"
    },
    { 
      icon: Zap, 
      headline: "Next 5M Tokens", 
      discount: "14% discount", 
      iconColor: "text-violet-300", 
      glowColor: "shadow-violet-500/50",
      borderGlow: "border-violet-400/60"
    },
    { 
      icon: Trophy, 
      headline: "Next 7M Tokens", 
      discount: "10% discount", 
      iconColor: "text-amber-300", 
      glowColor: "shadow-amber-400/50",
      borderGlow: "border-amber-400/60"
    },
    { 
      icon: Gem, 
      headline: "Next 10M Tokens", 
      discount: "5% discount", 
      iconColor: "text-blue-300", 
      glowColor: "shadow-blue-400/50",
      borderGlow: "border-blue-400/60"
    },
    { 
      icon: Shield, 
      headline: "Remaining Supply", 
      discount: "Full price", 
      iconColor: "text-gray-300", 
      glowColor: "shadow-gray-400/30",
      borderGlow: "border-gray-400/40"
    }
  ];

  const allocation = [
    { label: "Genesis Mint", percentage: 70, color: "from-primary to-accent" },
    { label: "Team, Partners, Liquidity", percentage: 30, color: "from-accent to-purple-400" }
  ];

  const faqData = [
    {
      question: "How is the final supply calculated?",
      answer: (
        <div className="space-y-4">
          <p>The final supply is discovered once the Genesis Mint ends. The total number of tokens minted across all tiers is used to determine the community's share (70%), with the remaining 30% allocated to team, partners, liquidity, and reserve.</p>
          
          <div className="bg-card/50 border border-primary/20 rounded-lg p-8 my-6">
            <div className="text-center">
              <div className="text-xl font-mono flex items-center justify-center gap-6">
                <span className="text-primary font-bold text-2xl">Final Supply</span>
                <span className="text-muted-foreground text-2xl">=</span>
                <div className="flex flex-col items-center">
                  <div className="text-accent font-semibold text-lg mb-1">
                    Total Minted Value
                  </div>
                  <div className="w-full h-px bg-muted-foreground/60"></div>
                  <div className="text-muted-foreground text-base mt-1">
                    Weighted Average Price
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "What is the base price and how do the discount tiers work?",
      answer: "The base price for $AMAI is $0.10. Early minters are rewarded with tiered discounts (ranging from 19% off down to 5% off). As each tier is filled, the mint naturally progresses to the next price level until the supply is minted or the time window closes."
    },
    {
      question: "How are tokens distributed after the mint?",
      answer: "When the mint closes, the finalized supply is minted and distributed as follows: 70% to the community and 30% to the ecosystem (team, partners, and liquidity)."
    },
    {
      question: "What are the vesting terms for team and partners?",
      answer: "Team tokens vest over 14 months, with a 4-month cliff releasing 25%, followed by linear vesting thereafter."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden dark">{/* Force dark theme */}
      <Header />
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        {[...Array(50)].map((_, i) => {
          const isCyan = Math.random() > 0.5;
          return (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full opacity-20 animate-pulse ${isCyan ? 'bg-cyan-400' : 'bg-purple-400'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          );
        })}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <div className="text-white">Chapter 1:</div>
                <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent shimmer-text">Genesis Mint</div>
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl rounded-full opacity-30" />
            </div>
          </motion.div>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            The first moment to mint <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent shimmer-text font-bold">AMAI</span> into existence.
          </motion.p>

          {/* Agent Creation Wizard Visual */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="relative mb-12"
          >
            <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-primary/20 backdrop-blur-sm">
              <img 
                src="/lovable-uploads/5021e898-804d-411f-9439-03301fea2c1e.png" 
                alt="4-Step Agent Creation Wizard"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Genesis Mint Mechanics Section */}
      <section className="py-24 px-6 bg-gray-800">{/* Dark section */}
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white relative z-10">
              How It Works
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {mechanics.map((mechanic, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-black/40 backdrop-blur-xl border border-cyan-accent/20 hover:border-cyan-accent/40 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/5 via-transparent to-purple-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-accent to-purple-accent rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                      <div className="relative w-16 h-16 mx-auto bg-gradient-to-r from-cyan-accent to-purple-accent rounded-full flex items-center justify-center shadow-2xl shadow-cyan-accent/25">
                        <mechanic.icon className="w-8 h-8 text-black" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{mechanic.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{mechanic.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tier Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white relative z-10">
              Mint Tiers
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {tokenUnlocks.map((unlock, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <Card className={`bg-black/60 backdrop-blur-xl border-2 ${unlock.borderGlow} hover:shadow-2xl ${unlock.glowColor} transition-all duration-500 group cursor-pointer relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-current/5 via-transparent to-current/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                  <CardContent className="p-8 text-center min-w-[200px] relative z-10">
                    <div className="relative mb-6">
                      <unlock.icon className={`w-12 h-12 mx-auto ${unlock.iconColor} group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl`} 
                        style={{ filter: `drop-shadow(0 0 20px currentColor)` }}
                      />
                      <div className="absolute inset-0 bg-current/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="text-lg font-bold text-white mb-3">{unlock.headline}</div>
                    <div className="text-base font-medium text-gray-400">{unlock.discount}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Allocation Section */}
      <section className="py-24 px-6 bg-gray-800">{/* Dark section */}
        <div className="container mx-auto">
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '4rem',
            position: 'relative',
            zIndex: 9999
          }}>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem', 
              color: '#ffffff',
              fontFamily: 'inherit'
            }}>
              Token Allocation
            </h2>
            <div style={{ 
              fontSize: '1.125rem', 
              maxWidth: '56rem', 
              margin: '0 auto', 
              lineHeight: '1.75',
              color: '#d1d5db',
              fontFamily: 'inherit',
              padding: '0 1rem'
            }}>
              The AMAI Genesis Mint distributes tokens transparently with a base price of $0.10 and tiered discounts, where the final supply is discovered based on total tokens minted and allocated across community, team, partners, liquidity, and reserve.
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Pie Chart Representation */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 overflow-visible">
                    {allocation.map((item, index) => {
                      const accumulated = allocation.slice(0, index).reduce((sum, item) => sum + item.percentage, 0);
                      const circumference = 2 * Math.PI * 40;
                      const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`;
                      const strokeDashoffset = -accumulated * circumference / 100;
                      
                      return (
                        <circle
                          key={index}
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke={index === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))"}
                          strokeWidth="8"
                          strokeDasharray={strokeDasharray}
                          strokeDashoffset={strokeDashoffset}
                          className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                          style={{
                            filter: `drop-shadow(0 0 10px ${index === 0 ? 'hsl(var(--primary) / 0.3)' : 'hsl(var(--accent) / 0.3)'})`
                          }}
                        />
                      );
                    })}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-foreground">100%</div>
                      <div className="text-sm text-muted-foreground">Total Supply</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-4">
                {allocation.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-card/30 border border-primary/10 backdrop-blur-sm hover:border-primary/20 transition-all"
                  >
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`} />
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{item.label}</div>
                      <div className="text-sm text-muted-foreground">{item.percentage}% of total supply</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Mint Highlight */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-amber-900/20 via-black/60 to-amber-800/20 border border-amber-400/30 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(251,191,36,0.15),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(217,119,6,0.1),transparent_50%)]" />
              <CardContent className="p-12 text-center relative z-10">
                <div className="mb-8">
                  <Crown className="w-20 h-20 mx-auto text-amber-400 mb-6 drop-shadow-2xl" />
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent shimmer-text-gold">
                    Founders Mint
                  </h3>
                </div>
                
                <p className="text-lg text-amber-100/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Ultra-rare: only 12 governance tokens. First-come, first-serve. Founders gain Gold Wing badges, 
                  rare @handles, unlimited Exotic agents, and access to the private Founders Circle.
                </p>

                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-amber-400 to-amber-600 text-amber-950 hover:from-amber-300 hover:to-amber-500 px-10 py-5 text-xl font-bold rounded-xl shadow-2xl shadow-amber-400/40 transition-all duration-300 hover:scale-105 border border-amber-300/50"
                  onClick={() => window.location.href = '/founders-mint'}
                >
                  <Crown className="mr-3 w-6 h-6" />
                  Discover Founders Mint
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gray-800">{/* Dark section */}
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white relative z-10">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card/30 border-primary/20 backdrop-blur-sm rounded-lg px-6 data-[state=open]:border-primary/40 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {typeof faq.answer === 'string' ? faq.answer : faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white relative z-10">
              Ready to be part of the Genesis?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
              <Button 
                size="lg"
                className="flex-1 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl shadow-primary/25 transition-all duration-300 hover:scale-105"
              >
                <Zap className="mr-2" />
                Join Genesis Mint
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="flex-1 border-amber-400/50 text-amber-400 hover:bg-amber-400/10 hover:border-amber-400 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = '/founders-mint'}
              >
                <Crown className="mr-2" />
                Discover Founders Mint
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GenesisMint;