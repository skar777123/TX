import { useRef, useEffect, forwardRef, useImperativeHandle, useCallback } from 'react';

export interface AudioPlayerHandle {
  play: () => void;
  pause: () => void;
  toggle: () => void;
  isPlaying: () => boolean;
}

interface AudioPlayerProps {
  onPlayStateChange?: (isPlaying: boolean) => void;
}

const AudioPlayer = forwardRef<AudioPlayerHandle, AudioPlayerProps>(
  ({ onPlayStateChange }, ref) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const isPlayingRef = useRef(false);
    const onPlayStateChangeRef = useRef(onPlayStateChange);

    // Keep callback ref updated
    useEffect(() => {
      onPlayStateChangeRef.current = onPlayStateChange;
    }, [onPlayStateChange]);

    const notifyStateChange = useCallback((playing: boolean) => {
      isPlayingRef.current = playing;
      onPlayStateChangeRef.current?.(playing);
    }, []);

    useImperativeHandle(ref, () => ({
      play: () => {
        if (audioRef.current) {
          audioRef.current.play().then(() => {
            notifyStateChange(true);
          }).catch(() => {
            // Handle autoplay block
          });
        }
      },
      pause: () => {
        if (audioRef.current) {
          audioRef.current.pause();
          notifyStateChange(false);
        }
      },
      toggle: () => {
        if (audioRef.current) {
          if (audioRef.current.paused) {
            audioRef.current.play().then(() => {
              notifyStateChange(true);
            }).catch(() => {
              // Handle autoplay block
            });
          } else {
            audioRef.current.pause();
            notifyStateChange(false);
          }
        }
      },
      isPlaying: () => isPlayingRef.current,
    }), [notifyStateChange]);

    const audioSrc = "/audio/bgsong.mp3";

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
      }
    }, []);

    // Auto-play on mount
    useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;

      const tryPlay = async () => {
        try {
          await audio.play();
          notifyStateChange(true);
        } catch {
          // Browser blocked autoplay, wait for user interaction
          const startAudio = async () => {
            try {
              await audio.play();
              notifyStateChange(true);
            } catch {
              // Still blocked
            }
            document.removeEventListener('click', startAudio);
          };
          document.addEventListener('click', startAudio, { once: true });
        }
      };

      tryPlay();
    }, [notifyStateChange]);

    return <audio ref={audioRef} src={audioSrc} loop />;
  }
);

AudioPlayer.displayName = 'AudioPlayer';

export default AudioPlayer;
