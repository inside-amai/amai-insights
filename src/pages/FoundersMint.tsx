import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Crown, Shield, Users, Star, Zap, TrendingUp } from "lucide-react";
import { Header } from "@/components/Header";

const FoundersMint = () => {
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

  const benefits = [
    {
      icon: Crown,
      title: "Governance Token",
      description: "A unique NFT carrying influence in the AMAI ecosystem."
    },
    {
      icon: Users,
      title: "Founders Circle Access",
      description: "Private VIP Telegram group for OTC deals, early platform access, and direct contact with team."
    },
    {
      icon: Star,
      title: "Rare @Handles",
      description: "First priority to claim ultra-rare names (e.g., @Vision, @Zero)."
    },
    {
      icon: Shield,
      title: "Gold Wing Badge",
      description: "Only 12 exist, permanently marking your identity across the platform."
    },
    {
      icon: Zap,
      title: "Unlimited Exotic Agents",
      description: "Mint unlimited exotic-tier agents without staking bonds (minus gas)."
    },
    {
      icon: TrendingUp,
      title: "OTC Liquidity Hub",
      description: "Access to curated large OTC opportunities within the Founders Circle."
    }
  ];

  const faqData = [
    {
      question: "How many Founders Mints exist?",
      answer: "Only 12 Founders Mints will ever exist, making them ultra-rare governance tokens in the AMAI ecosystem."
    },
    {
      question: "How do I claim one?",
      answer: "Founders Mints are available on a first-come, first-serve basis. Each mint costs $1,000,000 and grants immediate access to all benefits."
    },
    {
      question: "What utilities are permanent?",
      answer: "All Founders Mint benefits are permanent and non-transferable, including Founders Circle access, Gold Wing badges, and unlimited Exotic agent minting."
    },
    {
      question: "Can I resell my Founders Mint?",
      answer: "Founders Mints are governance tokens that can be traded, but certain benefits like Circle access are tied to the original holder."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-amber-950/20" />
        {/* Golden shimmer particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 md:pt-0">
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent mb-8 shimmer-text-gold">
                Founders Mint
              </h1>
              <div className="absolute -inset-8 bg-gradient-to-r from-amber-400/20 to-amber-600/20 blur-3xl rounded-full opacity-40" />
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl text-amber-100/80 mb-16 max-w-3xl mx-auto font-light text-center"
          >
            <p>The rarest mint in AMAI's history.</p>
            <p>Only 12 exist.</p>
          </motion.div>

          {/* Centerpiece Visual */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay: 0.6, duration: 1.5 }}
            className="relative mb-16"
          >
            <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center py-8">
              {/* Floating wings */}
              <div className="relative">
                <div className="absolute inset-0 bg-amber-400/30 blur-3xl rounded-full animate-pulse" />
                <img 
                  src="/lovable-uploads/4aff46bf-7135-435e-af82-c37542b446d7.png"
                  alt="AMAI Golden Wings"
                  className="h-72 md:h-96 w-auto relative z-10 drop-shadow-2xl animate-float"
                />
                
                {/* Orbiting particles */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-amber-400 rounded-full opacity-80"
                    style={{
                      left: `${50 + 40 * Math.cos((i * 45 * Math.PI) / 180)}%`,
                      top: `${50 + 40 * Math.sin((i * 45 * Math.PI) / 180)}%`,
                      animation: `gentle-float ${3 + i * 0.2}s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center space-y-2"
          >
            {/* Three pulsing arrows pointing down */}
            <div className="flex flex-col items-center space-y-1">
              <div className="w-6 h-6 border-r-2 border-b-2 border-amber-400 transform rotate-45 animate-pulse" 
                   style={{ animationDelay: '0s', animationDuration: '2s' }} />
              <div className="w-6 h-6 border-r-2 border-b-2 border-amber-400 transform rotate-45 animate-pulse" 
                   style={{ animationDelay: '0.3s', animationDuration: '2s' }} />
              <div className="w-6 h-6 border-r-2 border-b-2 border-amber-400 transform rotate-45 animate-pulse" 
                   style={{ animationDelay: '0.6s', animationDuration: '2s' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Is Founders Mint Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left - Gold Crest */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-amber-400/20 via-amber-600/10 to-transparent rounded-full flex items-center justify-center border border-amber-400/30">
                  <div className="w-60 h-60 bg-gradient-to-br from-amber-500/30 to-amber-700/20 rounded-full flex items-center justify-center border border-amber-400/40">
                    <Shield className="w-32 h-32 text-amber-400" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-amber-400/10 blur-3xl rounded-full" />
              </div>
            </div>

            {/* Right - Copy */}
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-amber-400 relative z-10">
                  What Is Founders Mint?
                </h2>
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                fontSize: '1.125rem',
                color: '#ffffff',
                lineHeight: '1.75',
                fontFamily: 'inherit',
                position: 'relative',
                zIndex: 9999
              }}>
                <div style={{ color: '#ffffff' }}>Only 12 governance tokens will ever exist, making you one of the most exclusive members of the AMAI ecosystem.</div>
                <div style={{ color: '#ffffff' }}>First-come, first-serve allocation ensures immediate ownership for committed visionaries.</div>
                <div style={{ color: '#ffffff' }}>A place inside the Founders Circle grants you direct influence over AMAI's strategic direction and access to the most valuable opportunities.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-amber-400 mb-8 relative z-10 shimmer-text-gold">
              Exclusive Benefits
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-black/60 backdrop-blur-xl border border-amber-400/30 hover:border-amber-400/60 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-8 relative z-10">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-16 h-16 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-2xl shadow-amber-400/25">
                        <benefit.icon className="w-8 h-8 text-black" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-amber-400">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Founders Circle Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="relative h-96 bg-gradient-to-br from-gray-900 via-black to-amber-950/20 rounded-3xl overflow-hidden border border-amber-400/20">
              {/* Golden table */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64 bg-gradient-to-r from-amber-400/30 to-amber-600/30 rounded-full border-4 border-amber-400/50">
                  {/* 12 chairs around the table */}
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-6 bg-amber-500/60 rounded-sm"
                      style={{
                        left: `${50 + 45 * Math.cos((i * 30 * Math.PI) / 180)}%`,
                        top: `${50 + 45 * Math.sin((i * 30 * Math.PI) / 180)}%`,
                        transform: `rotate(${i * 30}deg) translateX(-50%) translateY(-50%)`
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <div className="mb-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-amber-400 relative z-10">
                    The Founders Circle
                  </h3>
                </div>
                <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                  Where whales, visionaries, and builders align. The Circle is the heartbeat of AMAI's early governance and opportunity flow.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Callout Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-amber-900/30 via-black/80 to-amber-800/30 border-2 border-amber-400/50 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_70%)]" />
              <CardContent className="p-16 text-center relative z-10">
                <div className="space-y-8">
                  <div className="mb-8">
                    <h3 className="text-4xl md:text-5xl font-bold text-amber-400 relative z-10">
                      Only 12 Founders Mints Will Ever Exist
                    </h3>
                  </div>
                  
                  <div className="text-6xl font-bold text-white">
                    $1,000,000
                    <div className="text-lg font-normal text-gray-300 mt-2">each</div>
                  </div>
                  
                  <p className="text-2xl text-amber-200 font-semibold">
                    First-come, first-serve
                  </p>
                  
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:from-amber-300 hover:to-amber-500 px-12 py-6 text-2xl font-bold rounded-2xl shadow-2xl shadow-amber-400/50 transition-all duration-300 hover:scale-105 border-2 border-amber-300/50 mt-8"
                  >
                    <Crown className="mr-3 w-8 h-8" />
                    Discover
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-amber-400 mb-8 relative z-10 shimmer-text-gold">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Accordion type="single" collapsible className="space-y-6">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-black/40 border border-amber-400/20 backdrop-blur-sm rounded-xl px-8 data-[state=open]:border-amber-400/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:text-amber-400 transition-colors py-8 text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-8 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-32 px-6 bg-gradient-to-t from-amber-950/20 via-black to-black">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-amber-400 max-w-4xl mx-auto leading-tight relative z-10 shimmer-text-gold">
              Enter the Circle. Shape the Machine-First Economy.
            </h2>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-700 text-black hover:from-amber-400 hover:to-amber-600 px-16 py-8 text-2xl font-bold rounded-2xl shadow-2xl shadow-amber-500/50 transition-all duration-300 hover:scale-105 border-2 border-amber-400/50"
            >
              <Crown className="mr-4 w-8 h-8" />
              Discover
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FoundersMint;