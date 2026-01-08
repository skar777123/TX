import { memo, useEffect, useState, useCallback } from 'react';

const LightningEffect = memo(() => {
  const [isFlashing, setIsFlashing] = useState(false);

  const triggerFlash = useCallback(() => {
    // Start glow effect - reveals MindFlayer
    setIsFlashing(true);

    // Quick triple-flash effect for realism
    setTimeout(() => setIsFlashing(false), 60);
    setTimeout(() => setIsFlashing(true), 100);
    setTimeout(() => setIsFlashing(false), 160);
    setTimeout(() => setIsFlashing(true), 200);
    setTimeout(() => setIsFlashing(false), 280);
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const scheduleFlash = () => {
      const delay = 8000 + Math.random() * 12000;
      timeoutId = setTimeout(() => {
        triggerFlash();
        scheduleFlash();
      }, delay);
    };

    // First flash on load
    timeoutId = setTimeout(() => {
      triggerFlash();
      scheduleFlash();
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [triggerFlash]);

  if (!isFlashing) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {/* Glow effect - illuminates MindFlayer silhouette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(255,120,100,0.08) 0%, transparent 60%)',
        }}
      />
    </div>
  );
});

LightningEffect.displayName = 'LightningEffect';

export default LightningEffect;
