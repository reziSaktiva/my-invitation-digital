'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import SectionTitle from '../SectionTitle';

const journeyData = [
    {
        date: 'Bagian 1',
        title: 'The Day I Noticed You',
        description: `Semua berawal di tahun 2015, saat turnamen bulutangkis Banda Baru Open di Batam. Dia sedang pemanasan untuk final, dan aku hanya bisa memperhatikannya dari jauh—tertarik sejak pandangan pertama, tapi tak berani mendekat. Enam tahun kemudian, aku menceritakan momen itu ke temanku, dan ternyata dia teman kuliah temanku sendiri! Aku langsung cari cara untuk bertemu, bahkan mentraktir temanku asal dia diajak juga. Untuk pertama kalinya, kami duduk di meja yang sama. Aku gugup setengah mati. Mungkin tak berarti banyak baginya, tapi bagiku, itulah awal dari segalanya.
`,
        image: 'https://ik.imagekit.io/0yyvfumv6/lamaran/lamaran-1.jpeg',
    },
    {
        date: 'Bagian 2',
        title: 'From Rejection to a Promise',
        description: `Tahun 2023, setelah berkali-kali ditolak, aku sempat menyerah mengejar sang gadis. Tapi saat ngopi dengan kakaknya, muncul kesempatan bertemu lagi, dan aku langsung ikut. Obrolan kami mengalir santai, dan sejak itu kami semakin dekat—meski sempat ditolak lagi saat aku nyatakan perasaan. Lucunya, justru dari situ hubungan kami makin erat. Hingga di bulan Agustus, dia bertanya, “Kapan kamu bisa nikahin aku?” Padahal kami belum pacaran! Aku jawab, “Paling lama dua tahun,” dan hari ini, janji itu sedang kami tepati.
`,
        image: 'https://ik.imagekit.io/0yyvfumv6/lamaran/lamaran-2.jpeg',
    },
    {
        date: 'Bagian 3',
        title: 'The Beginning of Something Unexpected',
        description: `Setelah perjalanan panjang, pada April 2025 kami mempertemukan dua keluarga untuk melamar sang gadis—sebuah doa dua tahun lalu yang akhirnya Allah kabulkan. Kini, dengan hati yang mantap dan penuh kebahagiaan, kami siap melangkah ke jenjang yang lebih sakral, dan dengan tulus mengundang Anda semua untuk hadir di hari istimewa kami.`,
        image: 'https://ik.imagekit.io/0yyvfumv6/lamaran/lamaran-3.jpeg',
    },
];

const journeySectionData = {
    title: 'Our Journey',
    description: 'Perjalanan cinta adalah perjalanan yang menemukan keindahan di setiap langkah. Berikut adalah gambaran dari perjalanan kami, dari awal hingga hari spesial kami.',
};

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
                    firstText={journeySectionData.title.split(' ')[0]}
                    secondText={journeySectionData.title.split(' ')[1]}
                    firstColor="text-[#5C4033]"
                    secondColor="text-[#D3738D]"
                />
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className={cn(
                        'mx-auto mb-16 max-w-2xl text-center text-lg text-[#5C4033]'
                    )}
                >
                    {journeySectionData.description}
                </motion.p>
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[#D3738D]/30"></div>
                    <motion.div
                        variants={containerVariants}
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-8"
                    >
                        {journeyData.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative flex items-center"
                            >
                                <div className="w-full">
                                    <div className="relative overflow-hidden rounded-lg bg-white p-6 shadow-lg">
                                        <div
                                            className={cn(
                                                'absolute top-4 hidden h-4 w-4 rotate-45 transform bg-white md:block',
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
                                                'mb-3 text-2xl text-[#5C4033]',
                                            )}
                                        >
                                            {item.title}
                                        </h3>
                                        <div className="relative mb-4 h-80 w-full overflow-hidden rounded-md">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                        <div
                                            className={cn(
                                                'text-sm leading-relaxed text-justify text-[#5C4033]/80'
                                            )}
                                        >
                                            {item.description
                                                .split('\n\n')
                                                .map((paragraph, index) => (
                                                    <p
                                                        key={index}
                                                        className="mb-4 last:mb-0"
                                                    >
                                                        {paragraph.trim()}
                                                    </p>
                                                ))}
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
