'use client';

import { motion } from 'framer-motion';
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
    title: 'UNDANGAN PERNIKAHAN',
    coupleNames: 'Rezi & Pracilia',
    guestGreeting: 'Kepada',
    defaultGuest: 'Tamu Undangan',
    backgroundImage: 'https://ik.imagekit.io/0yyvfumv6/prewedding/prewed-11.jpg',
};


function OpeningContent({
    onOpenInvitation,
    isDesktop,
}: OpeningContentProps) {
    const searchParams = useSearchParams();
    const guestName = searchParams.get('to') || openingContentData.defaultGuest;

    return (
        <div
            className="relative h-screen w-full"
            onClick={isDesktop ? onOpenInvitation : undefined}
        >
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
                <h1 className='my-4 text-7xl'>
                    {openingContentData.coupleNames}
                </h1>
            </div>

            <div className="absolute bottom-32 left-0 right-0 text-center">
                <p className="text-white text-lg">{openingContentData.guestGreeting}, {guestName}</p>
            </div>

            {!isDesktop && (
                <motion.div
                    onClick={onOpenInvitation}
                    className={cn(
                        'absolute z-20 cursor-pointer',
                        'bottom-10 left-1/2 -translate-x-1/2',
                        'flex flex-col items-center'
                    )}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                    }}
                >
                    <p className="mb-2 text-white">Click Here</p>
                    <svg
                        className="h-10 w-10 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </motion.div>
            )}
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

    return (
        <motion.div
            className="absolute top-0 left-0 right-0 z-50 cursor-pointer"
            initial={{ y: 0 }}
            animate={{ y: isOpen ? '-100vh' : 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            onClick={handleOpen}
        >
            <OpeningContent onOpenInvitation={handleOpen} isDesktop={isDesktop} />
        </motion.div>
    );
} 