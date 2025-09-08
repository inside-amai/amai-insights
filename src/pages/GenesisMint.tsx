import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Zap, Users, TrendingUp, Star, Crown, Sparkles, CircleDot } from "lucide-react";

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
      icon: Shield,
      title: "Fair Pricing",
      description: "Weighted average ensures everyone mints at a blended price."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "70% of supply minted by participants."
    }
  ];

  const tiers = [
    { tier: 1, discount: "19% off", label: "Tier 1" },
    { tier: 2, discount: "14% off", label: "Tier 2" },
    { tier: 3, discount: "10% off", label: "Tier 3" },
    { tier: 4, discount: "5% off", label: "Tier 4" },
    { tier: 5, discount: "Full price", label: "Tier 5" }
  ];

  const allocation = [
    { label: "Community", percentage: 70, color: "from-primary to-accent" },
    { label: "Team", percentage: 10, color: "from-accent to-purple-400" },
    { label: "Partners", percentage: 10, color: "from-purple-400 to-primary" },
    { label: "Liquidity", percentage: 5, color: "from-primary/80 to-accent/80" },
    { label: "Reserve", percentage: 5, color: "from-accent/60 to-primary/60" }
  ];

  const faqData = [
    {
      question: "How is the final supply calculated?",
      answer: "The final supply is determined dynamically based on total participation during the mint period. This ensures fair distribution and prevents artificial scarcity."
    },
    {
      question: "What is the wallet cap?",
      answer: "Each wallet is limited to ensure fair distribution among participants. Specific caps will be announced before the mint begins."
    },
    {
      question: "What happens if tiers don't sell out?",
      answer: "Unsold allocations from higher tiers automatically roll down to lower tiers, ensuring all participants benefit from the best available pricing."
    },
    {
      question: "How are tokens distributed?",
      answer: "Tokens are distributed immediately after the mint closes, with all participants receiving their allocation at the weighted average price."
    },
    {
      question: "When does the Genesis Mint begin?",
      answer: "The exact launch date will be announced across all official channels. Join our community to be among the first to know."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 shimmer-text">
                Chapter 1: Genesis Mint
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl rounded-full opacity-30" />
            </div>
          </motion.div>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            The first moment to mint AMAI into existence.
          </motion.p>

          {/* Cinematic Visual */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="relative mb-12"
          >
            <div className="relative w-full max-w-4xl mx-auto h-64 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-card via-card/50 to-transparent border border-primary/20 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse" />
                  <div className="absolute inset-4 bg-gradient-to-br from-accent to-primary rounded-full opacity-30 animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-8 bg-gradient-to-br from-primary to-accent rounded-full opacity-40 blur-sm" />
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-primary rounded-full opacity-60 float-gentle"
                      style={{
                        left: `${50 + 30 * Math.cos((i * 30 * Math.PI) / 180)}%`,
                        top: `${50 + 30 * Math.sin((i * 30 * Math.PI) / 180)}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="mr-2" />
              Enter Mint
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Genesis Mint Mechanics Section */}
      <section className="py-24 px-6 bg-section-alt-background">
        <div className="container mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              How It Works
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {mechanics.map((mechanic, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-card/50 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                      <div className="relative w-16 h-16 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                        <mechanic.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">{mechanic.title}</h3>
                    <p className="text-muted-foreground">{mechanic.description}</p>
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
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mint Tiers
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                variants={fadeInUp}
                className="relative"
              >
                <Card className="bg-card/30 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center min-w-[140px]">
                    <div className="relative mb-4">
                      <CircleDot className="w-8 h-8 mx-auto text-primary group-hover:text-accent transition-colors" />
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">{tier.label}</div>
                    <div className="text-lg font-bold text-foreground">{tier.discount}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Allocation Section */}
      <section className="py-24 px-6 bg-section-alt-background">
        <div className="container mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Token Allocation
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Pie Chart Representation */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
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
                          stroke={`url(#gradient-${index})`}
                          strokeWidth="8"
                          strokeDasharray={strokeDasharray}
                          strokeDashoffset={strokeDashoffset}
                          className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                        />
                      );
                    })}
                    <defs>
                      {allocation.map((item, index) => (
                        <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="100%" stopColor="hsl(var(--accent))" />
                        </linearGradient>
                      ))}
                    </defs>
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
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-card/30 border border-primary/10 backdrop-blur-sm hover:border-primary/20 transition-all"
                  >
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`} />
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{item.label}</div>
                      <div className="text-sm text-muted-foreground">{item.percentage}% of total supply</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
            <Card className="relative overflow-hidden bg-gradient-to-br from-amber-500/10 via-card/50 to-amber-600/10 border-amber-400/30 backdrop-blur-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]" />
              <CardContent className="p-12 text-center relative z-10">
                <div className="mb-8">
                  <Crown className="w-16 h-16 mx-auto text-amber-400 mb-4" />
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent shimmer-text">
                    Founders Mint
                  </h3>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  Ultra-rare: only 12 governance tokens. First-come, first-serve. Founders gain Gold Wing badges, 
                  rare @handles, unlimited Exotic agents, and access to the private Founders Circle.
                </p>

                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-amber-400 to-amber-600 text-amber-950 hover:from-amber-300 hover:to-amber-500 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl shadow-amber-400/25 transition-all duration-300 hover:scale-105"
                >
                  <Crown className="mr-2" />
                  Discover Founders Mint
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-section-alt-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
                    {faq.answer}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
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