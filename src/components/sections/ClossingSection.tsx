'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const closingData = {
    backgroundUrl: '/images/gallery-1.jpeg',
    greeting: 'Terima Kasih',
    mainText: 'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai. Atas kehadiran dan doa restu, kami ucapkan terima kasih.',
    coupleName: 'Rezi & Pracilia',
};

export function ClosingSection() {
    const textContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const textItemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="relative h-screen w-full text-white">
            <Image
                src={closingData.backgroundUrl}
                alt="Thank you background"
                layout="fill"
                objectFit="cover"
                className="z-0"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative z-20 flex h-full flex-col items-center justify-center text-center p-8">
                <motion.div
                    variants={textContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        variants={textItemVariants}
                        className={cn(
                            'text-6xl md:text-7xl mb-6',
                        )}
                    >
                        {closingData.greeting}
                    </motion.h2>
                    <motion.p
                        variants={textItemVariants}
                        className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8"
                    >
                        {closingData.mainText}
                    </motion.p>
                    <motion.h3
                        variants={textItemVariants}
                        className={cn(
                            'text-5xl md:text-6xl',
                        )}
                    >
                        {closingData.coupleName}
                    </motion.h3>
                </motion.div>
            </div>
        </section>
    );
}
