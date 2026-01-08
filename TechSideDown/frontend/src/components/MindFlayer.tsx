import { memo, useState, useEffect, useCallback } from 'react';
import mindFlayerImg from '@/assets/mindflayer.png';

const MindFlayer = memo(() => {
  const [showGlimpse, setShowGlimpse] = useState(false);

  // Trigger a brief MindFlayer glimpse with glow
  const triggerGlimpse = useCallback(() => {
    setShowGlimpse(true);
    setTimeout(() => setShowGlimpse(false), 250);
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const scheduleGlimpse = () => {
      // Random interval between 8-15 seconds
      const delay = 8000 + Math.random() * 7000;
      timeoutId = setTimeout(() => {
        triggerGlimpse();
        scheduleGlimpse();
      }, delay);
    };

    // First glimpse after 2 seconds
    timeoutId = setTimeout(() => {
      triggerGlimpse();
      scheduleGlimpse();
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [triggerGlimpse]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[8] overflow-hidden">
      {/* Sky glow effect on glimpse */}
      {showGlimpse && (
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 70% at 50% 0%, rgba(255,100,80,0.1) 0%, transparent 60%)',
          }}
        />
      )}

      {/* Mind Flayer image - hidden normally, glimpses on glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[10%] transition-opacity duration-150"
        style={{ opacity: showGlimpse ? 0.2 : 0.06 }}
      >
        <img
          src={mindFlayerImg}
          alt=""
          className="w-[2000px] h-auto object-contain"
          style={{
            filter: 'brightness(0.3) contrast(1.2)',
            mixBlendMode: 'screen',
          }}
          loading="eager"
        />
      </div>

      {/* Reduced particles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-particle"
            style={{
              left: `${20 + i * 12}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
});

MindFlayer.displayName = 'MindFlayer';

export default MindFlayer;
