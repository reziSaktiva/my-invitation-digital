"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Disc3 } from "lucide-react";
import { motion } from "framer-motion";

export const MusicPlayer = ({ isInvitationOpen }: { isInvitationOpen: boolean }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const hasAttemptedPlay = useRef(false);
    const wasPlayingBeforeHidden = useRef(false);

    const attemptPlay = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(() => setIsPlaying(false));
        }
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.3;
        }
    }, []);

    useEffect(() => {
        if (isInvitationOpen && !hasAttemptedPlay.current) {
            hasAttemptedPlay.current = true;
            attemptPlay();
        }
    }, [isInvitationOpen, attemptPlay]);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (!audioRef.current) return;

            if (document.hidden) {
                if (isPlaying) {
                    wasPlayingBeforeHidden.current = true;
                    audioRef.current.pause();
                    setIsPlaying(false);
                }
            } else {
                if (wasPlayingBeforeHidden.current) {
                    attemptPlay();
                    wasPlayingBeforeHidden.current = false;
                }
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [isPlaying, attemptPlay]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
                wasPlayingBeforeHidden.current = false;
            } else {
                attemptPlay();
            }
        }
    };

    return (
        <motion.div
            className="fixed bottom-4 left-4 z-50"
            initial={false}
            animate={{ scale: isPlaying ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <audio
                ref={audioRef} src="https://ik.imagekit.io/0yyvfumv6/music/musik-2.mp3?updatedAt=1753352065466" loop />
            <motion.button
                onClick={togglePlay}
                className={`p-2 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 ${isPlaying ? "animate-glow" : ""}`}
                aria-label={isPlaying ? "Pause music" : "Play music"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <motion.div
                    animate={{ rotate: isPlaying ? 360 : 0 }}
                    transition={{
                        repeat: isPlaying ? Infinity : 0,
                        ease: "linear",
                        duration: 2
                    }}
                >
                    <Disc3 className="w-8 h-8" />
                </motion.div>
            </motion.button>
        </motion.div>
    );
}; 