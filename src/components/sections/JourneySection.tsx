'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import SectionTitle from '../SectionTitle';

const journeyData = [
    {
        date: '12 Juni 2020',
        title: 'Awal Mula Kisah Cinta',
        description:
            'Pada suatu senja yang tenang, di tengah keramaian sebuah kafe kecil yang nyaman, takdir mempertemukan kami. Secangkir kopi menjadi saksi bisu awal dari sebuah cerita, di mana dua hati mulai merasakan getaran yang sama. Dari obrolan ringan, kami menemukan kesamaan yang tak terduga, seolah semesta telah merancang pertemuan ini jauh sebelum kami menyadarinya.',
        image: '/images/gallery-8.jpeg',
    },
    {
        date: '24 Desember 2022',
        title: 'Momen Lamaran',
        description:
            'Di bawah langit yang dihiasi bintang, dengan deburan ombak sebagai musiknya, sebuah pertanyaan tulus terucap. Momen itu bukan hanya tentang cincin yang berkilau, tapi tentang janji untuk selamanya. Di hadapan keindahan alam yang megah, kami mengikat janji untuk berjalan bersama, memulai babak baru yang penuh harapan dan cinta.',
        image: '/images/gallery-15.jpeg',
    },
    {
        date: '10 Oktober 2024',
        title: 'Hari Pernikahan',
        description:
            'Dan inilah kami sekarang, di ambang gerbang pernikahan. Hari di mana dua jiwa menjadi satu, di mana janji diikrarkan di hadapan Tuhan dan orang-orang terkasih. Ini adalah awal dari petualangan seumur hidup kami, sebuah perjalanan yang akan kami tempuh bersama, dengan cinta sebagai kompas dan tawa sebagai pengiring langkah.',
        image: '/images/gallery-13.jpeg',
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.5,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
        },
    },
};

function JourneySection() {
    return (
        <section className="relative overflow-hidden bg-[#FBF6EE] py-20">
            {/* Background Decorations */}
            <motion.div
                className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: 'linear',
                }}
            >
                <Image
                    src="/icons/zinnia.png"
                    alt="decoration"
                    width={200}
                    height={200}
                    className="opacity-50"
                />
            </motion.div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
                <Image
                    src="/icons/flower.png"
                    alt="decoration"
                    width={200}
                    height={200}
                    className="opacity-50"
                />
            </div>

            <div className="container mx-auto px-4">
                <SectionTitle
                    firstText="Our"
                    secondText="Journey"
                    firstColor="text-[#3A4D39]"
                    secondColor="text-[#D3738D]"
                />
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className={cn(
                        'mx-auto mb-16 max-w-2xl text-center text-lg text-[#3A4D39]'
                    )}
                >
                    Cinta adalah perjalanan yang menemukan keindahannya di setiap langkah.
                    Berikut adalah sekelumit kisah kami, dari awal mula hingga menuju
                    hari bahagia.
                </motion.p>
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[#D3738D]/30"></div>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-16"
                    >
                        {journeyData.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative flex items-center"
                            >
                                <div
                                    className={cn(
                                        'flex w-full items-center',
                                        index % 2 === 0 ? 'justify-start' : 'justify-end',
                                    )}
                                >
                                    <div
                                        className={cn(
                                            'w-full',
                                        )}
                                    >
                                        <div className="relative overflow-hidden rounded-lg bg-white p-6 shadow-lg">
                                            <div
                                                className={cn(
                                                    'absolute top-4 h-4 w-4 rotate-45 transform bg-white',
                                                    index % 2 === 0
                                                        ? 'right-0 -translate-y-1/2 translate-x-1/2'
                                                        : 'left-0 -translate-y-1/2 -translate-x-1/2',
                                                )}
                                            ></div>
                                            <p
                                                className={cn(
                                                    'mb-2 text-sm font-bold tracking-widest text-[#D3738D]'
                                                )}
                                            >
                                                {item.date}
                                            </p>
                                            <h3
                                                className={cn(
                                                    'mb-3 text-2xl text-[#3A4D39]',
                                                )}
                                            >
                                                {item.title}
                                            </h3>
                                            <div className="relative mb-4 h-40 w-full overflow-hidden rounded-md">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    layout="fill"
                                                    objectFit="cover"
                                                />
                                            </div>
                                            <p
                                                className={cn(
                                                    'text-sm leading-relaxed text-[#3A4D39]/80'
                                                )}
                                            >
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default JourneySection;
