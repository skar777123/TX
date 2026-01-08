import { memo } from 'react';

const VecnaVeins = memo(() => {
  return (
    // z-20 - visible layer, behind navbar (z-50) but over main content
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="vein-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2a0505" stopOpacity="0" />
            <stop offset="50%" stopColor="#b91c1c" stopOpacity="1" />
            <stop offset="100%" stopColor="#2a0505" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Left side veins */}
        <path
          d="M0,200 Q80,180 120,220 Q180,280 200,250 Q280,200 350,260 Q420,320 500,280"
          fill="none"
          stroke="url(#vein-grad)"
          strokeWidth="3"
          filter="url(#glow)"
          opacity="0.7"
          className="animate-vein-pulse"
        />
        <path
          d="M0,600 Q100,580 150,640 Q220,720 300,680 Q380,620 450,700"
          fill="none"
          stroke="url(#vein-grad)"
          strokeWidth="2.5"
          filter="url(#glow)"
          opacity="0.6"
          className="animate-vein-pulse"
          style={{ animationDelay: '2s' }}
        />

        {/* Right side veins */}
        <path
          d="M1920,300 Q1840,280 1780,340 Q1700,420 1620,380 Q1540,320 1460,400"
          fill="none"
          stroke="url(#vein-grad)"
          strokeWidth="3"
          filter="url(#glow)"
          opacity="0.7"
          className="animate-vein-pulse"
          style={{ animationDelay: '1s' }}
        />
        <path
          d="M1920,750 Q1820,720 1760,800 Q1680,880 1580,820"
          fill="none"
          stroke="url(#vein-grad)"
          strokeWidth="2.5"
          filter="url(#glow)"
          opacity="0.6"
          className="animate-vein-pulse"
          style={{ animationDelay: '3s' }}
        />

        {/* Top veins */}
        <path
          d="M700,0 Q720,80 680,140 Q620,220 680,300 Q740,380 700,460"
          fill="none"
          stroke="url(#vein-grad)"
          strokeWidth="2.5"
          filter="url(#glow)"
          opacity="0.6"
          className="animate-vein-pulse"
          style={{ animationDelay: '0.5s' }}
        />
        <path
          d="M1300,0 Q1280,100 1340,180 Q1400,260 1340,360"
          fill="none"
          stroke="url(#vein-grad)"
          strokeWidth="2.5"
          filter="url(#glow)"
          opacity="0.6"
          className="animate-vein-pulse"
          style={{ animationDelay: '2.5s' }}
        />
      </svg>
    </div>
  );
});

VecnaVeins.displayName = 'VecnaVeins';

export default VecnaVeins;
