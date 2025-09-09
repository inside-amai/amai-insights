import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
// import amaiLogo from '@/assets/amai-logo-new.png';

export const ExplainerHero = () => {
  const [shootingStars, setShootingStars] = useState<Array<{ id: number; x: number; y: number; delay: number; direction: { x: number; y: number; angle: number } }>>([]);
  
  useEffect(() => {
    const createShootingStar = () => {
      const id = Date.now();
      const x = Math.random() * 60 + 10; // Random x position between 10% and 70%
      const y = Math.random() * 40 + 10; // Random y position between 10% and 50%
      const delay = Math.random() * 1000; // Random delay up to 1 second
      
      // Generate random direction
      const angle = Math.random() * 360; // Random angle in degrees
      const distance = 120; // Distance to travel
      const directionX = Math.cos(angle * Math.PI / 180) * distance;
      const directionY = Math.sin(angle * Math.PI / 180) * distance;
      const trailAngle = angle + 180; // Trail points opposite to movement direction
      
      const direction = { x: directionX, y: directionY, angle: trailAngle };
      
      const newStar = { id, x, y, delay, direction };
      setShootingStars(prev => [...prev, newStar]);
      
      // Remove the star after animation completes
      setTimeout(() => {
        setShootingStars(prev => prev.filter(star => star.id !== id));
      }, 2500 + delay);
    };
    
    // Create first star after 5 seconds
    const firstTimeout = setTimeout(createShootingStar, 5000);
    
    // Then create stars every 7 seconds
    const interval = setInterval(createShootingStar, 7000);
    
    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center snap-start bg-black relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {/* Large moving stars */}
        <div className="absolute top-20 left-20 w-2 h-2 animate-bounce" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3s', animationDelay: '0s' }} />
        <div className="absolute top-32 right-32 w-3 h-3 animate-pulse" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '4s', animationDelay: '1s', transform: 'translateY(-10px)', animation: 'float 6s ease-in-out infinite' }} />
        <div className="absolute bottom-40 left-40 w-2 h-2" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 8s linear infinite' }} />
        <div className="absolute bottom-20 right-20 w-3 h-3 animate-pulse" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '5s', animationDelay: '2s' }} />
        <div className="absolute top-10 left-1/2 w-2 h-2" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'sway 7s ease-in-out infinite' }} />
        <div className="absolute bottom-10 left-1/3 w-3 h-3" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'float 5s ease-in-out infinite reverse' }} />
        
        {/* Medium moving stars */}
        <div className="absolute top-60 left-60 w-1.5 h-1.5" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'twinkle 4s ease-in-out infinite' }} />
        <div className="absolute top-96 right-60 w-1.5 h-1.5 animate-bounce" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3.5s', animationDelay: '1.5s' }} />
        <div className="absolute bottom-60 left-80 w-1.5 h-1.5" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 10s linear infinite reverse' }} />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'sway 6s ease-in-out infinite reverse' }} />
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'float 7s ease-in-out infinite' }} />
        
        {/* Small moving stars */}
        <div className="absolute top-40 left-96 w-1 h-1 animate-ping" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '3s' }} />
        <div className="absolute top-80 right-96 w-1 h-1" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'twinkle 3s ease-in-out infinite' }} />
        <div className="absolute bottom-80 left-20 w-1 h-1" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 12s linear infinite' }} />
        <div className="absolute bottom-96 right-40 w-1 h-1 animate-pulse" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '2.5s' }} />
        <div className="absolute top-1/4 left-1/4 w-1 h-1" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'sway 8s ease-in-out infinite' }} />
        <div className="absolute top-3/4 right-1/4 w-1 h-1" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'float 4.5s ease-in-out infinite reverse' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 animate-ping" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-16 right-16 w-1 h-1" 
             style={{ background: '#D6A6FC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'twinkle 5s ease-in-out infinite' }} />
        <div className="absolute bottom-16 left-16 w-1 h-1" 
             style={{ background: '#A6FCFC', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', animation: 'drift 9s linear infinite reverse' }} />
        
        {/* Constellation in top right */}
        <div className="absolute top-32 right-16 w-64 h-48">
          <svg className="w-full h-full opacity-60" viewBox="0 0 280 180">
            {/* Constellation lines */}
            <line x1="20" y1="20" x2="60" y2="40" stroke="#A6FCFC" strokeWidth="0.5" opacity="0.4">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
            </line>
            <line x1="60" y1="40" x2="100" y2="30" stroke="#D6A6FC" strokeWidth="0.5" opacity="0.4">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" begin="1s" />
            </line>
            <line x1="100" y1="30" x2="140" y2="60" stroke="#A6FCFC" strokeWidth="0.5" opacity="0.4">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" begin="2s" />
            </line>
            <line x1="60" y1="40" x2="80" y2="80" stroke="#D6A6FC" strokeWidth="0.5" opacity="0.4">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4.5s" repeatCount="indefinite" begin="0.5s" />
            </line>
            <line x1="80" y1="80" x2="120" y2="90" stroke="#A6FCFC" strokeWidth="0.5" opacity="0.4">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.5s" repeatCount="indefinite" begin="1.5s" />
            </line>
            <line x1="140" y1="60" x2="160" y2="100" stroke="#D6A6FC" strokeWidth="0.5" opacity="0.4">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" begin="2.5s" />
            </line>
            
            {/* Constellation stars */}
            <circle cx="20" cy="20" r="1.5" fill="#A6FCFC">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="60" cy="40" r="2" fill="#D6A6FC">
              <animate attributeName="r" values="2;3;2" dur="4s" repeatCount="indefinite" begin="1s" />
            </circle>
            <circle cx="100" cy="30" r="1.5" fill="#A6FCFC">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
            </circle>
            <circle cx="140" cy="60" r="2.5" fill="#D6A6FC">
              <animate attributeName="r" values="2.5;3.5;2.5" dur="5s" repeatCount="indefinite" begin="2s" />
            </circle>
            <circle cx="80" cy="80" r="1.5" fill="#A6FCFC">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="3s" repeatCount="indefinite" begin="1.5s" />
            </circle>
            <circle cx="120" cy="90" r="1.5" fill="#D6A6FC">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="4s" repeatCount="indefinite" begin="0.8s" />
            </circle>
            <circle cx="160" cy="100" r="1.5" fill="#A6FCFC">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="3.5s" repeatCount="indefinite" begin="2.5s" />
            </circle>
          </svg>
        </div>
        
        {/* Shooting stars */}
        {shootingStars.map((star) => (
          <div
            key={star.id}
            className="shooting-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.delay}ms`,
              '--end-x': `${star.direction.x}px`,
              '--end-y': `${star.direction.y}px`,
              '--trail-angle': `${star.direction.angle}deg`,
            } as React.CSSProperties}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img 
              src="https://images.squarespace-cdn.com/content/v1/67609414493d9c7734fa7b83/64396d1f-bdeb-491d-a6d7-cdbf42c57c52/AMAI+logos+%2881%29.png?format=2500w"
              alt="AMAI Logo" 
              className="h-20 lg:h-28 xl:h-32 w-auto"
              loading="eager"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
          >
            Bringing A Billion Agents
            <span className="block shimmer-text text-transparent">
              On-Chain
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Capitalized AI swarms, bonded trust, and real-time settlement.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-row gap-8 justify-center items-center pt-8"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};