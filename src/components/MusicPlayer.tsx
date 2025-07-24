"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Disc } from "lucide-react";

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
        <div className="fixed bottom-4 left-4 z-50">
            <audio
                ref={audioRef} src="https://ik.imagekit.io/0yyvfumv6/music/musik-2.mp3?updatedAt=1753352065466" loop />
            <button
                onClick={togglePlay}
                className="p-2 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                aria-label={isPlaying ? "Pause music" : "Play music"}
            >
                <Disc className={`w-8 h-8 ${isPlaying ? "animate-spin-slow" : ""}`} />
            </button>
        </div>
    );
}; 