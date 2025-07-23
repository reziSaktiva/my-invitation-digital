'use client';

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import SectionTitle from '../SectionTitle';
import ChessboardDivider from '../ChessboardDivider';
import { motion } from 'framer-motion';

const images = Array.from({ length: 19 }, (_, i) => `/images/gallery-${i + 1}.jpeg`);

const mediaSectionData = {
    title: 'Portraits of Love',
    description: 'A glimpse into our cherished moments, each frame a testament to the love that has blossomed between us. These are the snapshots of our journey, the portraits of a love story written in smiles and stolen glances.',
    images: images,
    videoUrl: '/videos/video-footage.mp4',
    videoTitle: 'Our Footage',
};

export function MediaSection() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        const handleSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        handleSelect(); // Set initial value
        api.on('select', handleSelect);

        return () => {
            api.off('select', handleSelect);
        };
    }, [api]);

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
                        firstText="Portraits"
                        secondText="of Love"
                        firstColor="text-[#3A4D39]"
                        secondColor="text-[#D3738D]"
                    />
                    <p
                        className={cn(
                            'mx-auto max-w-2xl text-center text-lg text-[#3A4D39] pb-3'
                        )}
                    >
                        {mediaSectionData.description}
                    </p>
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: 'center',
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {mediaSectionData.images.map((src, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-1/3"
                                >
                                    <div className="p-1">
                                        <Card
                                            className={cn(
                                                'overflow-hidden border-4 border-white/80 shadow-lg transition-transform duration-300 ease-in-out',
                                                index === current
                                                    ? 'scale-125'
                                                    : 'scale-85 opacity-50',
                                            )}
                                        >
                                            <CardContent className="relative flex aspect-[3/4] items-center justify-center p-0">
                                                <Image
                                                    src={src}
                                                    alt={`Love portrait ${index + 1}`}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="transition-transform duration-500 hover:scale-110"
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="ml-16 hidden sm:flex" />
                        <CarouselNext className="mr-16 hidden sm:flex" />
                    </Carousel>

                    <motion.div
                        className="mt-20 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3
                            className="text-5xl md:text-6xl text-[#D3738D] mb-8"
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
