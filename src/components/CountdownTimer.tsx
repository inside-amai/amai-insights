import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const targetDate = new Date('2025-10-12T13:00:00-07:00'); // Oct 12, 2025 at 1:00 PM PST

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="relative mb-16"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent shimmer-text mb-2">
          Genesis Begins In
        </h3>
        <p className="text-muted-foreground">October 12, 2025 • 1:00 PM PST</p>
      </div>
      
      <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
            className="relative group"
          >
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Timer unit container */}
            <div className="relative bg-black/40 backdrop-blur-sm border border-gradient-to-r border-cyan-400/30 rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[120px] group-hover:border-purple-400/50 transition-all duration-300">
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative z-10 text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent shimmer-text mb-2">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                  {unit.label}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Animated connecting lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent -translate-y-1/2 -z-10" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-pulse ${i % 2 === 0 ? 'bg-cyan-400' : 'bg-purple-400'}`}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};