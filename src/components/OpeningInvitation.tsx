'use client';

import { motion, PanInfo } from 'framer-motion';
import type { WheelEvent } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';

interface OpeningInvitationProps {
    isOpen: boolean;
    onOpenInvitation: () => void;
    isDesktop?: boolean;
}

interface OpeningContentProps {
    onOpenInvitation: () => void;
    isDesktop?: boolean;
}

const openingContentData = {
    title: 'THE WEDDING OF',
    coupleNames: 'Rezi & Pracilia',
    guestGreeting: 'Dear,',
    defaultGuest: 'Tamu Undangan',
    backgroundImage: '/images/gallery-16.jpeg',
};


function OpeningContent({
    onOpenInvitation,
    isDesktop,
}: OpeningContentProps) {
    const searchParams = useSearchParams();
    const guestName = searchParams.get('to') || 'Tamu Undangan';

    return (
        <div className="relative h-screen w-full">
            <Image
                src={openingContentData.backgroundImage}
                alt="Wedding background"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                <p className="tracking-widest">{openingContentData.title}</p>
                <h1 className={cn('my-4 text-7xl md:text-8xl')}>
                    {openingContentData.coupleNames}
                </h1>
            </div>

            <div className="absolute bottom-32 left-0 right-0 text-center">
                <p className="text-white text-lg">{openingContentData.guestGreeting}, {guestName}</p>
            </div>

            <motion.div
                onClick={onOpenInvitation}
                className={cn(
                    'absolute z-20 cursor-pointer',
                    isDesktop
                        ? 'top-1/2 -translate-y-1/2 right-10 pt-10'
                        : 'bottom-10 left-1/2 -translate-x-1/2',
                )}
                animate={
                    isDesktop ? { x: [0, 10, 0] } : { y: [0, -10, 0] }
                }
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                }}
            >
                <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isDesktop ? (
                        <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    ) : (
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    )}
                </svg>
            </motion.div>
        </div>
    );
}

export function OpeningInvitation({
    isOpen,
    onOpenInvitation,
    isDesktop = false,
}: OpeningInvitationProps) {
    if (isDesktop) {
        return (
            <OpeningContent
                onOpenInvitation={onOpenInvitation}
                isDesktop={isDesktop}
            />
        );
    }

    const handleOpen = () => {
        if (!isOpen) {
            onOpenInvitation();
        }
    };

    const handlePan = (
        _event: Event,
        info: PanInfo,
    ) => {
        // Pan up to open
        if (info.offset.y < -50) {
            handleOpen();
        }
    };

    const handleWheel = (event: WheelEvent) => {
        // Scroll down to open
        if (event.deltaY > 0) {
            handleOpen();
        }
    };

    return (
        <motion.div
            className="absolute top-0 left-0 right-0 z-50"
            initial={{ y: 0 }}
            animate={{ y: isOpen ? '-100vh' : 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            onPan={handlePan}
            onWheel={handleWheel}
        >
            <OpeningContent onOpenInvitation={handleOpen} isDesktop={isDesktop} />
        </motion.div>
    );
} 