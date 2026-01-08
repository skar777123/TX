import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicToggle = memo(({ isPlaying, onToggle }: MusicToggleProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-primary/30 hover:border-primary/60 transition-all duration-300 group"
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
    >
      {/* Pulsing ring when playing */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0 rounded-full bg-primary/30"
          />
        )}
      </AnimatePresence>

      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-full transition-all duration-300 ${isPlaying
          ? 'bg-primary/20 shadow-[0_0_20px_rgba(239,68,68,0.4)]'
          : 'bg-transparent'
        }`} />

      {/* Icon */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Volume2 className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors" />
            </motion.div>
          ) : (
            <motion.div
              key="muted"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <VolumeX className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-card border border-border rounded text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {isPlaying ? 'Music On' : 'Music Off'}
      </div>
    </motion.button>
  );
});

MusicToggle.displayName = 'MusicToggle';

export default MusicToggle;
