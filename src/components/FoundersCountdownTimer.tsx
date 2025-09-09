import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export const FoundersCountdownTimer = () => {
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
    }, 10); // Update every 10ms for smooth milliseconds

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
    <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl shadow-2xl shadow-amber-400/50 border-2 border-amber-300/50 mt-8 p-6">
      <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-black mb-1">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-black/80 font-medium uppercase tracking-wider">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};