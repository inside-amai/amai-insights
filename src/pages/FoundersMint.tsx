import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Crown, Feather, Users, Star, Zap, TrendingUp, Trophy } from "lucide-react";
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
      title: "Founders Key",
      description: "A tradable Token that unlocks all Founders benefits on the AMAI platform, including Exotic Agent mints and VIP status."
    },
    {
      icon: Users,
      title: "Founders Circle Access",
      description: "Private channel with early access to platform features and direct dialogue with the AMAI team."
    },
    {
      icon: Star,
      title: "Rare @Handles",
      description: "First rights to claim ultra-rare names (e.g., @Aura, @Empire)."
    },
    {
      icon: Feather,
      title: "Gold Wing Badge",
      description: "Only 12 exist, a permanent mark of prestige displayed across the platform."
    },
    {
      icon: Zap,
      title: "Unlimited Exotic Agents",
      description: "Mint unlimited Exotic-tier agents without bond staking (minus gas)."
    },
    {
      icon: TrendingUp,
      title: "OTC Liquidity Hub",
      description: "Exclusive access to a brokered network for high-value trades, ensuring whales can transact seamlessly without impacting the open market."
    }
  ];

  const faqData = [
    {
      question: "How many Founders Keys exist?",
      answer: "Only 12 Founders Keys will ever exist. They are the rarest, most prestigious tokens in the AMAI ecosystem, enshrining holders as members of the Council of 12. No more will ever be minted."
    },
    {
      question: "What does a Founders Key give me?",
      answer: "A Founders Key unlocks the full suite of Founders privileges: A permanent seat in the Council of 12. Unlimited Exotic Agent mints (normally $10K each). Priority to claim rare @handles. A permanent Gold Wing badge on the platform. Access to the private Founders Circle channel. Entry to the OTC Liquidity Hub for discreet, brokered block trades."
    },
    {
      question: "Are Founders Keys tradable?",
      answer: "Yes. A Founders Key is a token that can be transferred or traded. All privileges, Exotic Agent mints, badges, Council seat, and Circle access follow the token itself. When you log into the platform, the system verifies your wallet and unlocks benefits automatically."
    },
    {
      question: "How is my token allocation calculated?",
      answer: "Each Founders Key represents 0.25% of AMAI's total supply. Every Founders Key carries a guaranteed floor of 10M tokens (valued at $1M at the $0.10 base price). If 0.25% of supply is less than 10M, you still receive 10M tokens. If the Genesis Mint expands supply enough that 0.25% > 10M tokens, you receive the full percentage allocation. This means your token count scales with AMAI's growth."
    },
    {
      question: "What is the OTC Liquidity Hub?",
      answer: "A private channel where large trades can be discreetly matched among Founders, protecting open-market stability. Think of it as a private block desk, connecting major holders without impacting the broader market."
    },
    {
      question: "How else are Founders recognized?",
      answer: "Each holder is permanently enshrined on-chain in the Genesis Contract. The Council of 12 is featured on the Founders Circle page and platform leaderboards. The Gold Wing badge marks your identity across all of AMAI."
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          html:has(.founders-mint-page)::-webkit-scrollbar {
            width: 12px !important;
          }
          html:has(.founders-mint-page)::-webkit-scrollbar-track {
            background: hsl(0 0% 8%) !important;
            border-radius: 6px !important;
          }
          html:has(.founders-mint-page)::-webkit-scrollbar-thumb {
            background: #fbbf24 !important;
            border-radius: 6px !important;
            border: 2px solid hsl(0 0% 8%) !important;
          }
          html:has(.founders-mint-page)::-webkit-scrollbar-thumb:hover {
            background: #f59e0b !important;
          }
          html:has(.founders-mint-page) {
            scrollbar-width: thin !important;
            scrollbar-color: #fbbf24 hsl(0 0% 8%) !important;
          }
        `
      }} />
    <div className="min-h-screen bg-black text-white overflow-x-hidden founders-mint-page">
      <Header />
      
      {/* Fixed Back to Genesis Button */}
      <div className="absolute md:fixed top-20 left-6 z-50">
        <Button 
          size="sm"
          variant="outline"
          className="md:bg-[#D6A6FC]/10 md:border-[#D6A6FC]/50 md:text-[#D6A6FC] hover:text-white hover:border-[#D6A6FC] px-4 py-2 text-sm font-medium md:rounded-full transition-all duration-300 md:backdrop-blur-sm text-white bg-transparent border-none"
          onClick={() => window.location.href = '/genesis-mint'}
        >
          Back to Genesis
        </Button>
      </div>
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
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 md:pt-24">
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
            <div className="relative w-full max-w-[16rem] md:max-w-xs mx-auto flex items-center justify-center py-8">
              {/* Floating wings */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/4aff46bf-7135-435e-af82-c37542b446d7.png"
                  alt="AMAI Golden Wings"
                  className="w-full h-auto relative z-10"
                  style={{ 
                    imageRendering: 'auto'
                  }}
                />
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-7xl mx-auto">
            {/* Left - Golden Wings Image */}
            <div className="flex justify-end lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/lovable-uploads/8155b2f4-c371-4049-aeac-063428e6f3fc.png"
                  alt="Golden Wings"
                  className="w-full h-[335px] lg:h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Right - Copy */}
            <div className="space-y-8 lg:col-span-6 relative z-20">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-amber-400">
                  What Is Founders Mint?
                </h2>
              </div>
              
              <div className="space-y-6 relative z-20">
                <div className="text-lg text-gray-300 mb-6 relative z-20">Only 12 Founders Key tokens will ever exist, making you one of the most exclusive members of the AMAI ecosystem.</div>
                <div className="text-lg text-gray-300 mb-6 relative z-20">First-come, first-serve allocation ensures immediate ownership for committed visionaries.</div>
                <div className="text-lg text-gray-300 relative z-20">A place inside the Founders Circle grants you a seat on the Council of 12. Your voice is formally heard on major decisions, offering prestige and advisory influence.</div>
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
                <Card className="h-full bg-black/30 backdrop-blur-2xl border-2 border-transparent hover:border-amber-400/60 transition-all duration-700 group cursor-pointer relative overflow-hidden shadow-2xl shadow-black/50">
                  {/* Glassmorphic background layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-black/20 to-amber-400/10 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Glow border effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
                  
                  <CardContent className="p-10 text-center relative z-10">
                    {/* Icon with aura ring */}
                    <div className="relative mb-8 flex justify-center">
                      {/* Outer aura ring */}
                      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-amber-400/30 to-amber-600/30 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
                      
                      {/* Inner glow ring */}
                      <div className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-amber-400/50 to-amber-600/50 blur-md opacity-40 group-hover:opacity-80 transition-all duration-700" />
                      
                      {/* Icon container */}
                      <div className="relative w-16 h-16 bg-gradient-to-br from-amber-400/20 to-amber-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 group-hover:border-amber-400/50 transition-all duration-700 group-hover:scale-110">
                        <benefit.icon className="w-8 h-8 text-white group-hover:text-amber-400 transition-all duration-700 group-hover:animate-pulse" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-amber-400 transition-colors duration-500 tracking-wide">
                      {benefit.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed transition-colors duration-500 font-medium">
                      {benefit.description}
                    </p>
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
            <div className="relative bg-gradient-to-br from-gray-900 via-black to-amber-950/20 rounded-3xl overflow-hidden border border-amber-400/20 p-12 text-center">
              {/* Badge Image */}
              <div className="flex justify-center mb-8">
                <img 
                  src="/lovable-uploads/96c48a61-1742-4245-9f95-91de86487e29.png" 
                  alt="Founders Circle Badge" 
                  className="w-64 h-64 object-contain"
                />
              </div>
              
              {/* Text below image */}
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                The Founders Circle is the Council of 12, an inner sanctum where influence carries weight, strategy is previewed first, and opportunities are surfaced before they reach the world.
              </p>
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
            <Card className="relative overflow-hidden bg-gradient-to-br from-amber-900/30 via-black/80 to-amber-800/30 border-2 border-amber-400/50 backdrop-blur-xl shadow-2xl shadow-black/50">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_70%)]" />
              <CardContent className="p-16 text-center relative z-10">
                  <div className="space-y-6 md:space-y-8">
                    <div className="mb-6 md:mb-8">
                      <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-amber-400 relative z-10 leading-tight">
                        Only 12 Founders Mints Will Ever Exist
                      </h3>
                    </div>
                    
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                      $1,000,000
                      <div className="text-base md:text-lg font-normal text-gray-300 mt-1 md:mt-2">each</div>
                    </div>
                    
                    <p className="text-lg md:text-xl lg:text-2xl text-amber-200 font-semibold">
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

      {/* Mobile Back to Genesis Button - Bottom */}
      <div className="md:hidden py-8 px-6 bg-black flex justify-center">
        <button 
          className="text-white bg-transparent border-none px-4 py-2 text-sm font-medium"
          onClick={() => window.location.href = '/genesis-mint'}
        >
          Back to Genesis
        </button>
      </div>

      {/* Hero Image Section */}
      <section className="w-full relative z-20 bg-black">
        <img 
          src="/lovable-uploads/0db2b495-15e0-45cc-889f-aa5d65af0514.png"
          alt="Enter the Circle - Golden Wings"
          className="w-full h-auto block"
          style={{ display: 'block' }}
        />
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900/50 border-t border-amber-400/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm">© 2025 AMAI Labs. All rights reserved.</p>
        </div>
      </footer>
     </div>
    </>
  );
};

export default FoundersMint;