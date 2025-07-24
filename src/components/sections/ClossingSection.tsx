'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '../SectionTitle';

const closingData = {
    backgroundUrl: 'https://ik.imagekit.io/0yyvfumv6/gallery-6.jpeg',
    greeting: 'With Love and Gratitude',
    mainText:
        'We are so grateful for your presence and blessings on our special day. Your support means the world to us as we begin our new journey together.',
    coupleName: 'Rezi & Pracilia',
};

export function ClosingSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                delayChildren: 0.5,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1], // A more expressive ease
            },
        },
    };

    return (
        <section className="relative h-screen w-full overflow-hidden text-white">
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 15, ease: 'linear' }}
            >
                <Image
                    src={closingData.backgroundUrl}
                    alt="Thank you background"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-50" // Adjusted brightness directly
                />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />
            <div className="relative z-20 flex h-full flex-col items-center justify-center text-center p-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col items-center justify-center gap-6"
                >
                    <motion.div variants={itemVariants}>
                        <Image
                            src="/icons/flower.png"
                            alt="Flower decoration"
                            width={150}
                            height={150}
                            className="opacity-80"
                        />
                    </motion.div>
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl font-light tracking-widest uppercase text-gray-200"
                    >
                        {closingData.greeting}
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="max-w-2xl mx-auto text-base leading-relaxed text-gray-300"
                    >
                        {closingData.mainText}
                    </motion.p>
                    <motion.div variants={itemVariants} className="mt-8">
                        <SectionTitle
                            firstText={closingData.coupleName.split(' & ')[0]}
                            secondText={`& ${closingData.coupleName.split(' & ')[1]}`}
                            firstColor="text-white"
                            secondColor="text-white"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
