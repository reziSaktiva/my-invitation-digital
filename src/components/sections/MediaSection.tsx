'use client';

import * as React from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import SectionTitle from '../SectionTitle';
import ChessboardDivider from '../ChessboardDivider';

const prewedImages = Array.from({ length: 11 }, (_, i) => `https://ik.imagekit.io/0yyvfumv6/prewedding/prewed-${i + 1}.jpg`);
const galleryImages = Array.from({ length: 16 }, (_, i) => `https://ik.imagekit.io/0yyvfumv6/gallery-${i + 1}.jpeg`);

const mediaSectionData = {
    title: 'Portraits of Love',
    description: 'A glimpse into our cherished moments, each frame a testament to the love that has blossomed between us. These are the snapshots of our journey, the portraits of a love story written in smiles and stolen glances.',
    images: [...prewedImages, ...galleryImages],
    videoUrl: 'https://ik.imagekit.io/0yyvfumv6/footage/video-footage.mp4?updatedAt=1753327568458',
    videoTitle: 'Our Footage',
};

export function MediaSection() {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

    return (
        <>
            <section className="bg-[#FBF6EE] py-20 relative overflow-hidden">
                <motion.div
                    className="absolute top-20 -left-1/4 z-0"
                    animate={{ x: ['0%', '150%'] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: 'mirror',
                            duration: 40,
                            ease: 'easeInOut',
                        },
                    }}
                >
                    <Image
                        src="/icons/cloud.png"
                        alt="Moving cloud"
                        width={250}
                        height={100}
                        className="opacity-60"
                    />
                </motion.div>
                <motion.div
                    className="absolute bottom-20 -right-1/4 z-0"
                    animate={{ x: ['0%', '-150%'] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: 'mirror',
                            duration: 50,
                            ease: 'easeInOut',
                        },
                    }}
                >
                    <Image
                        src="/icons/cloud.png"
                        alt="Moving cloud"
                        width={300}
                        height={125}
                        className="opacity-50"
                    />
                </motion.div>
                <div className="container mx-auto px-4 relative z-10">
                    <SectionTitle
                        firstText="Potraits"
                        secondText="of Love"
                        firstColor="text-[#5C4033]"
                        secondColor="text-[#D3738D]"
                    />
                    <p
                        className={cn(
                            'mx-auto max-w-2xl text-center text-lg text-[#5C4033] pb-3'
                        )}
                    >
                        {mediaSectionData.description}
                    </p>

                    <div className="grid grid-cols-3 grid-flow-dense gap-2">
                        {mediaSectionData.images.map((src, idx) => {
                            const isHighlighted = (idx + 1) % 5 === 0;
                            return (
                                <motion.div
                                    key={idx}
                                    className={cn(
                                        'relative group',
                                        isHighlighted
                                            ? 'col-span-2 row-span-2'
                                            : 'col-span-1'
                                    )}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: idx * 0.1,
                                    }}
                                    onHoverStart={() => setHoveredIndex(idx)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                >
                                    <Image
                                        src={src}
                                        alt={`Love portrait ${idx + 1}`}
                                        className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-white/80 transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                        width={500}
                                        height={500}
                                    />
                                    <AnimatePresence>
                                        {hoveredIndex === idx && (
                                            <motion.div
                                                className="absolute inset-0 bg-black/40 rounded-lg"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            ></motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div
                        className="mt-20 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3
                            className="text-5xl text-[#D3738D] mb-8"
                        >
                            {mediaSectionData.videoTitle}
                        </h3>
                        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border-4 border-white/80">
                            <video
                                src={mediaSectionData.videoUrl}
                                controls={false}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </motion.div>
                </div>
            </section>
            <ChessboardDivider />
        </>
    );
}
