import { useState, useRef, lazy, Suspense, memo, useCallback } from 'react';
import IntroAnimation from '@/components/IntroAnimation';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import Footer from '@/components/Footer';
import AudioPlayer, { AudioPlayerHandle } from '@/components/AudioPlayer';
import MusicToggle from '@/components/MusicToggle';

// Lazy load below-fold components
const AboutSection = lazy(() => import('@/components/sections/AboutSection'));
const EventsSection = lazy(() => import('@/components/sections/EventsSection'));
const ScheduleSection = lazy(() => import('@/components/sections/ScheduleSection'));
const GallerySection = lazy(() => import('@/components/sections/GallerySection'));
const SponsorsSection = lazy(() => import('@/components/sections/SponsorsSection'));

// Lazy load atmosphere effects
const VecnaVeins = lazy(() => import('@/components/VecnaVeins'));
const LightningEffect = lazy(() => import('@/components/LightningEffect'));
const StrangerThingsCharacters = lazy(() => import('@/components/StrangerThingsCharacters'));
const AnimatedVines = lazy(() => import('@/components/AnimatedVines'));
const MindFlayer = lazy(() => import('@/components/MindFlayer'));

// Loading fallback
const SectionLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = memo(() => {
  const [showIntro, setShowIntro] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const audioRef = useRef<AudioPlayerHandle>(null);

  const handleMusicToggle = useCallback(() => {
    audioRef.current?.toggle();
  }, []);

  const handlePlayStateChange = useCallback((isPlaying: boolean) => {
    setIsMusicPlaying(isPlaying);
  }, []);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <>
      {showIntro && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}

      <div className={`min-h-screen bg-background transition-opacity duration-500 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        {/* Atmosphere Elements - lazy loaded */}
        {!showIntro && (
          <Suspense fallback={null}>
            <MindFlayer />
            <VecnaVeins />
            <AnimatedVines />
            <StrangerThingsCharacters />
            <LightningEffect />
          </Suspense>
        )}

        <Navbar />

        <main className="relative z-10">
          <HeroSection />

          <Suspense fallback={<SectionLoader />}>
            <AboutSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <EventsSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <ScheduleSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <GallerySection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <SponsorsSection />
          </Suspense>
        </main>

        <Footer />

        <AudioPlayer ref={audioRef} onPlayStateChange={handlePlayStateChange} />
        <MusicToggle isPlaying={isMusicPlaying} onToggle={handleMusicToggle} />
      </div>
    </>
  );
});

Index.displayName = 'Index';

export default Index;
