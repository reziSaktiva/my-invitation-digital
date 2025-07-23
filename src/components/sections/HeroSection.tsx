'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const heroSectionData = {
    title: 'THE WEDDING OF',
    coupleNames: 'Rezi & Pracilia',
    date: '2.08.2025',
    text: 'WE ARE GETTING MARRIED',
    image: '/images/gallery-18.jpeg',
};

function HeroSection() {
    return (
        <section className="flex h-screen w-full flex-col bg-[#FBF6EE]">
            {/* Image Section */}
            <div className="relative h-1/2 w-full overflow-hidden">
                <motion.div
                    className="h-full w-full"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.5 }}
                    transition={{
                        duration: 8,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                >
                    <Image
                        src={heroSectionData.image}
                        alt={heroSectionData.coupleNames}
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </motion.div>
            </div>

            {/* Text Section */}
            <div className="relative flex h-1/2 w-full items-center justify-center overflow-hidden p-8">
                {/* Top-left flower */}
                <motion.div
                    style={{ transformOrigin: 'bottom right' }}
                    initial={{ opacity: 0, x: -50, y: -50 }}
                    animate={{ opacity: 1, x: 0, y: 0, rotate: [0, -2, 2, -2, 0] }}
                    transition={{
                        default: { duration: 1, delay: 1 },
                        rotate: {
                            repeat: Infinity,
                            duration: 5,
                            ease: 'easeInOut',
                            delay: 2,
                        },
                    }}
                    className="absolute top-0 left-0 z-10"
                >
                    <Image
                        src="/icons/flower.png"
                        alt="Flower decoration"
                        width={150}
                        height={150}
                    />
                </motion.div>

                {/* Bottom-right flower */}
                <motion.div
                    style={{ transformOrigin: 'top left' }}
                    initial={{ opacity: 0, x: 50, y: 50 }}
                    animate={{ opacity: 1, x: 0, y: 0, rotate: [0, 2, -2, 2, 0] }}
                    transition={{
                        default: { duration: 1, delay: 1 },
                        rotate: {
                            repeat: Infinity,
                            duration: 6,
                            ease: 'easeInOut',
                            delay: 2.5,
                        },
                    }}
                    className="absolute bottom-0 right-0 z-10"
                >
                    <Image
                        src="/icons/flower.png"
                        alt="Flower decoration"
                        width={150}
                        height={150}
                        className="-scale-x-100"
                    />
                </motion.div>

                <div className="text-center text-[#3A4D39]">
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={cn('mb-4 text-lg tracking-widest')}
                    >
                        {heroSectionData.title}
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={cn(
                            'my-6 text-7xl text-[#D3738D] md:text-8xl'
                        )}
                    >
                        {heroSectionData.coupleNames}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <p className="text-md">{heroSectionData.text}</p>
                        <p className="my-4 text-xl">{heroSectionData.date}</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
