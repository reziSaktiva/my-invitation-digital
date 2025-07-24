'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const groom = {
    name: 'Rezi',
    fullName: 'Rezi Saktiva, SE',
    parents: {
        father: 'Bpk. H. Andripan',
        mother: 'Ibu Hj. Heni Herlina',
    },
    photo: 'https://ik.imagekit.io/0yyvfumv6/rezi-acil/rezi.jpeg',
};

const bride = {
    name: 'Pracilia',
    fullName: 'Pracilia Aldri Pertiwi, M.Or',
    parents: {
        father: 'Bpk. Hendry Hendarman, SE',
        mother: 'Ibu Hj. Nunung Teti Laeli',
    },
    photo: 'https://ik.imagekit.io/0yyvfumv6/rezi-acil/pracilia.jpeg',
};

const weddingSectionData = {
    groom: groom,
    bride: bride,
};

function WeddingSection() {
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.3,
                duration: 0.8,
                ease: 'easeOut' as const,
            },
        }),
    };

    return (
        <section className="relative overflow-hidden bg-[#FBF6EE] py-20 text-center">
            {/* Decorations */}
            <motion.div
                initial={{ opacity: 0, x: -100, rotate: -45 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-10 left-10 z-0"
            >
                <Image
                    src="/icons/zinnia.png"
                    alt="decoration"
                    width={120}
                    height={120}
                    className="opacity-70"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 100, rotate: 45 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-10 right-10 z-0"
            >
                <Image
                    src="/icons/flower-1.png"
                    alt="decoration"
                    width={120}
                    height={120}
                    className="opacity-70 -scale-x-100"
                />
            </motion.div>

            <div className="container relative z-10 mx-auto px-4">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={cn(
                        'mb-12 text-2xl tracking-widest text-[#5C4033]',
                    )}
                >
                    The Wedding Of
                </motion.p>

                <div className="flex flex-col items-center justify-center gap-12">
                    {/* Groom Card */}
                    <motion.div
                        custom={0}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full max-w-sm text-center"
                    >
                        <div className="relative mx-auto mb-6 h-48 w-48 overflow-hidden rounded-full shadow-lg ring-4 ring-[#D3738D]/50">
                            <Image
                                src={weddingSectionData.groom.photo}
                                alt={weddingSectionData.groom.name}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <h3
                            className={cn(
                                'text-6xl text-[#D3738D]',
                            )}
                        >
                            {weddingSectionData.groom.name}
                        </h3>
                        <p className={cn('mt-2 text-xl text-[#5C4033]')}>
                            {weddingSectionData.groom.fullName}
                        </p>
                        <p
                            className={cn(
                                'mt-4 text-sm text-[#5C4033]/80'
                            )}
                        >
                            Putra dari
                        </p>
                        <p
                            className={cn(
                                'mt-1 text-base font-medium text-[#5C4033]',
                            )}
                        >
                            {weddingSectionData.groom.parents.father} & {weddingSectionData.groom.parents.mother}
                        </p>
                    </motion.div>

                    {/* Ampersand */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className={cn(
                            'my-4 text-8xl text-[#5C4033]',
                        )}
                    >
                        &
                    </motion.div>

                    {/* Bride Card */}
                    <motion.div
                        custom={1}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full max-w-sm text-center"
                    >
                        <div className="relative mx-auto mb-6 h-48 w-48 overflow-hidden rounded-full shadow-lg ring-4 ring-[#D3738D]/50">
                            <Image
                                src={weddingSectionData.bride.photo}
                                alt={weddingSectionData.bride.name}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <h3
                            className={cn(
                                'text-6xl text-[#D3738D]',
                            )}
                        >
                            {weddingSectionData.bride.name}
                        </h3>
                        <p className={cn('mt-2 text-xl text-[#5C4033]')}>
                            {weddingSectionData.bride.fullName}
                        </p>
                        <p
                            className={cn(
                                'mt-4 text-sm text-[#5C4033]/80'
                            )}
                        >
                            Putri dari
                        </p>
                        <p
                            className={cn(
                                'mt-1 text-base font-medium text-[#5C4033]',
                            )}
                        >
                            {weddingSectionData.bride.parents.father} & {weddingSectionData.bride.parents.mother}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default WeddingSection; 