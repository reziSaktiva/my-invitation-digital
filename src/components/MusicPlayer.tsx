"use client";

import { useState, useRef, useEffect } from "react";
import { Disc } from "lucide-react";

export const MusicPlayer = ({ isInvitationOpen }: { isInvitationOpen: boolean }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const hasStarted = useRef(false);

    useEffect(() => {
        if (isInvitationOpen && audioRef.current && !hasStarted.current) {
            audioRef.current.play();
            setIsPlaying(true);
            hasStarted.current = true;
        }
    }, [isInvitationOpen]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed bottom-4 left-4 z-50">
            <audio ref={audioRef} src="/music/musik.mp3" loop />
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