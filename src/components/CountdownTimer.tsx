import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  });

  const targetDate = new Date('2025-10-12T13:00:00-05:00'); // Oct 12, 2025 at 1:00 PM EST

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const milliseconds = Math.floor((distance % 1000) / 10); // Show as centiseconds (0-99)

        setTimeLeft({ days, hours, minutes, seconds, milliseconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
      }
    }, 10); // Update every 10ms for smoother milliseconds

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
    { label: 'Milliseconds', value: timeLeft.milliseconds }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="relative mb-16"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Genesis Begins In
        </h3>
      </div>
      
      <div className="flex justify-center items-center gap-6 md:gap-12 flex-wrap mb-6">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
            className={`text-center ${unit.label === 'Milliseconds' ? 'hidden md:block' : ''}`}
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent shimmer-text mb-2">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm md:text-base text-white font-medium uppercase tracking-wider">
              {unit.label}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-muted-foreground">October 12, 2025 • 1:00 PM EST</p>
      </div>
    </motion.div>
  );
};