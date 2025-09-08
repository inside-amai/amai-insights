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
      description: "Early minters unlock rare discounts."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "70% of the supply is minted by you."
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
      discount: "12% discount", 
      iconColor: "text-violet-300", 
      glowColor: "shadow-violet-500/50",
      borderGlow: "border-violet-400/60"
    },
    { 
      icon: Trophy, 
      headline: "Next 7M Tokens", 
      discount: "8% discount", 
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
      discount: "No discount", 
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
          <p>The final supply is discovered once the Genesis Mint ends. The total number of tokens minted across all tiers is used to determine the community's share (70%), with the remaining 30% allocated to team, partners, liquidity, & reserve.</p>
          
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
      answer: "When the mint closes, the finalized supply is minted & distributed as follows: 70% to the community & 30% to the ecosystem (team, partners, & liquidity)."
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
              <div className="text-lg md:text-xl text-white mb-2 font-medium">Chapter 1:</div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
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

          {/* Hero Images - Mobile and Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="relative mb-12"
          >
            {/* Mobile Image - Vertical */}
            <div className="block md:hidden relative flex justify-center mb-12">
              <img 
                src="/lovable-uploads/b74c26f1-82a6-4960-827f-c0f680e402ed.png" 
                alt="Legendary PudgyAgent"
                className="max-w-sm w-auto h-auto rounded-2xl border border-primary/20"
              />
            </div>
            
            {/* Desktop Image - Horizontal */}
            <div className="hidden md:block relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-primary/20 backdrop-blur-sm shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
              <img 
                src="/lovable-uploads/be436350-f096-489a-9ec9-09cc71d0d068.png" 
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
                <Card className="h-full bg-black/30 backdrop-blur-2xl border-2 border-transparent hover:border-[#A6FCFC]/60 transition-all duration-700 group cursor-pointer relative overflow-hidden shadow-2xl shadow-black/50">
                  {/* Glassmorphic background layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A6FCFC]/10 via-black/20 to-[#D6A6FC]/10 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Glow border effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#A6FCFC]/20 to-[#D6A6FC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
                  
                  <CardContent className="p-10 text-center relative z-10">
                    {/* Icon with aura ring */}
                    <div className="relative mb-8 flex justify-center">
                      {/* Outer aura ring */}
                      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-[#A6FCFC]/30 to-[#D6A6FC]/30 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
                      
                      {/* Inner glow ring */}
                      <div className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-[#A6FCFC]/50 to-[#D6A6FC]/50 blur-md opacity-40 group-hover:opacity-80 transition-all duration-700" />
                      
                      {/* Icon container */}
                      <div className="relative w-16 h-16 bg-gradient-to-br from-[#A6FCFC]/20 to-[#D6A6FC]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 group-hover:border-[#A6FCFC]/50 transition-all duration-700 group-hover:scale-110">
                        <mechanic.icon className="w-8 h-8 text-[#A6FCFC] transition-all duration-700 drop-shadow-2xl" 
                          style={{ filter: `drop-shadow(0 0 15px rgba(166,252,252,0.5))` }}
                        />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#A6FCFC] transition-colors duration-500 tracking-wide">
                      {mechanic.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed transition-colors duration-500 font-medium">
                      {mechanic.description}
                    </p>
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
            className="grid grid-cols-1 md:flex md:flex-wrap md:justify-center gap-8 md:gap-6 mb-12 max-w-5xl mx-auto md:max-w-none"
          >
            {tokenUnlocks.map((unlock, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <Card className={`h-full bg-black/30 backdrop-blur-2xl border-2 border-transparent hover:${unlock.borderGlow} transition-all duration-700 group cursor-pointer relative overflow-hidden shadow-2xl ${unlock.glowColor}`}>
                  {/* Glassmorphic background layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Angled glow effect - positioned corners */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-2xl rotate-45 ${
                    unlock.iconColor.includes('cyan') ? 'bg-gradient-to-br from-cyan-300/50 to-transparent' :
                    unlock.iconColor.includes('violet') ? 'bg-gradient-to-br from-violet-300/50 to-transparent' :
                    unlock.iconColor.includes('amber') ? 'bg-gradient-to-br from-amber-300/50 to-transparent' :
                    unlock.iconColor.includes('blue') ? 'bg-gradient-to-br from-blue-300/50 to-transparent' :
                    'bg-gradient-to-br from-gray-300/50 to-transparent'
                  }`} />
                  <div className={`absolute -bottom-20 -left-20 w-40 h-40 opacity-15 group-hover:opacity-30 transition-opacity duration-700 blur-2xl rotate-45 ${
                    unlock.iconColor.includes('cyan') ? 'bg-gradient-to-tr from-cyan-300/50 to-transparent' :
                    unlock.iconColor.includes('violet') ? 'bg-gradient-to-tr from-violet-300/50 to-transparent' :
                    unlock.iconColor.includes('amber') ? 'bg-gradient-to-tr from-amber-300/50 to-transparent' :
                    unlock.iconColor.includes('blue') ? 'bg-gradient-to-tr from-blue-300/50 to-transparent' :
                    'bg-gradient-to-tr from-gray-300/50 to-transparent'
                  }`} />
                  
                  <CardContent className="p-10 md:p-8 text-center md:min-w-[200px] relative z-10">
                    {/* Icon with simple glow */}
                    <div className="relative mb-6 flex justify-center">
                      <unlock.icon className={`w-12 h-12 ${unlock.iconColor} transition-all duration-300 drop-shadow-2xl`} 
                        style={{ filter: `drop-shadow(0 0 20px currentColor)` }}
                      />
                    </div>
                    
                    {/* Title */}
                    <div className="text-lg font-bold text-white mb-3 group-hover:text-[#A6FCFC] transition-colors duration-500 tracking-wide">
                      {unlock.headline}
                    </div>
                    
                    {/* Description */}
                    <div className="text-base font-medium text-gray-400 group-hover:text-gray-100 transition-colors duration-500">
                      {unlock.discount}
                    </div>
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
              The AMAI Genesis Mint distributes tokens transparently with a base price of $0.10 & tiered discounts, where the final supply is discovered based on total tokens minted & allocated across community, team, partners & liquidity.
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
                  rare @handles, unlimited Exotic agents, & access to the private Founders Circle.
                </p>

                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-amber-400 to-amber-600 text-amber-950 hover:from-amber-300 hover:to-amber-500 px-10 py-5 text-xl font-bold rounded-xl shadow-2xl shadow-amber-400/40 transition-all duration-300 hover:scale-105 border border-amber-300/50"
                  onClick={() => window.location.href = '/founders-mint'}
                >
                  <Crown className="mr-3 w-6 h-6" />
                  <span className="block md:hidden">Discover</span>
                  <span className="hidden md:block">Discover Founders Mint</span>
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
              Stay up to date
            </h2>
            
            <div className="flex flex-row gap-8 justify-center items-center">
              <a 
                href="https://t.me/AMAIOfficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-105 opacity-60 hover:opacity-100"
              >
                <img 
                  src="/lovable-uploads/f688c83b-1c4d-44c4-bbc4-f9328559a323.png" 
                  alt="Join Telegram" 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain filter brightness-50 hover:brightness-100 transition-all duration-300"
                  style={{ width: '40px', height: '40px' }}
                />
              </a>
              
              <a 
                href="https://x.com/InsideAMAI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-105 opacity-60 hover:opacity-100"
              >
                <img 
                  src="/lovable-uploads/53e90b93-7fe0-4c2c-b053-df64d7a767d0.png" 
                  alt="Follow on X" 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain filter brightness-50 hover:brightness-100 transition-all duration-300"
                  style={{ width: '40px', height: '40px' }}
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900/50 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm">© 2025 AMAI Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GenesisMint;