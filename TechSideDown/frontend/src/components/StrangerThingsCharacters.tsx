import { motion, useScroll, useTransform } from 'framer-motion';
import { memo } from 'react';
import demogorgon from '@/assets/demogorgon.png';
import vecna from '@/assets/vecna.png';
import vecnaClock from '@/assets/vecnaClock.png';
import abcd from '@/assets/ABCD.png';

const StrangerThingsCharacters = memo(() => {
  const { scrollYProgress } = useScroll();

  const vecnaY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const vecnaOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.6, 0.6, 0.3]);

  const demogorgonY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const demogorgonOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.5, 0.2]);

  return (
    <>
      {/* Vecna Clock - Top Left */}
      <div className="fixed left-4 top-20 z-[5] pointer-events-none">
        <img
          src={vecnaClock}
          alt=""
          className="w-[150px] md:w-[200px] lg:w-[250px] h-auto object-contain opacity-[0.08]"
          style={{
            filter: 'brightness(0.8) saturate(0.8)',
          }}
          loading="lazy"
        />
      </div>

      {/* ABCD Letters - Bottom Right */}
      <div className="fixed right-4 bottom-20 z-[5] pointer-events-none">
        <img
          src={abcd}
          alt=""
          className="w-[200px] md:w-[280px] lg:w-[350px] h-auto object-contain opacity-[0.08]"
          style={{
            filter: 'brightness(0.7) saturate(0.8)',
          }}
          loading="lazy"
        />
      </div>

      {/* Vecna - Right side */}
      <motion.div
        className="fixed right-0 top-1/4 z-[5] pointer-events-none"
        style={{ y: vecnaY, opacity: vecnaOpacity }}
      >
        <motion.img
          src={vecna}
          alt=""
          className="w-[300px] md:w-[400px] lg:w-[500px] h-auto object-contain opacity-40"
          style={{
            filter: 'brightness(0.6) saturate(1.5) hue-rotate(-10deg)',
            maskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
          }}
          animate={{
            filter: [
              'brightness(0.5) saturate(1.5) hue-rotate(-10deg)',
              'brightness(0.7) saturate(2) hue-rotate(0deg)',
              'brightness(0.5) saturate(1.5) hue-rotate(-10deg)',
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Demogorgon - Left side (reduced size) */}
      <motion.div
        className="fixed left-0 bottom-0 z-[5] pointer-events-none"
        style={{ y: demogorgonY, opacity: demogorgonOpacity }}
      >
        <motion.img
          src={demogorgon}
          alt=""
          className="w-[150px] md:w-[200px] lg:w-[250px] h-auto object-contain opacity-30"
          style={{
            filter: 'brightness(0.5) saturate(1.3)',
            maskImage: 'linear-gradient(to right, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 40%, transparent 100%)',
          }}
          animate={{
            scale: [1, 1.02, 1],
            filter: [
              'brightness(0.4) saturate(1.3)',
              'brightness(0.6) saturate(1.8)',
              'brightness(0.4) saturate(1.3)',
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Mind Flayer Shadow - Top */}
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 z-[5] pointer-events-none w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div
          className="w-full h-[300px] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent"
          style={{
            maskImage: 'radial-gradient(ellipse at center top, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center top, black 0%, transparent 70%)',
          }}
        />
      </motion.div>
    </>
  );
});

StrangerThingsCharacters.displayName = 'StrangerThingsCharacters';

export default StrangerThingsCharacters;
