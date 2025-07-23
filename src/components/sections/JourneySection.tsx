'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import SectionTitle from '../SectionTitle';

const journeyData = [
    {
        date: 'Chapter 1',
        title: 'The Day I Noticed You',
        description: `Semua berawal pada tahun 2015, pada saat turnamen bulutangkis di Batam: Banda Baru Open. Saat itu, dia (sang gadis)  sedang pemanasan di lapangan, bersiap untuk bertanding di partai final. Aku hanya bisa memperhatikan dari kejauhan, karena memang sejak pertama melihat, aku sudah tertarik. Tapi waktu itu, aku tidak berani mendekat. Rasanya seperti tidak ada gunanya—cukup mengagumi diam-diam saja.

Tahun 2021, aku berbincang dengan salah satu temanku dan tanpa sengaja menceritakan momen itu. Ternyata, dunia memang sempit—dia adalah teman kuliah temanku! Dari situ, aku mulai mencari cara agar bisa bertemu. Aku mengajak temanku nongkrong, dan bahkan mentraktir, dengan satu syarat: temanku harus mengajak dia juga.

Akhirnya, untuk pertama kalinya, kami duduk di meja yang sama. Aku gugup setengah mati. Tidak tahu harus mulai dari mana. Mungkin pertemuan pertama itu tidak meninggalkan kesan mendalam untuknya. Tapi untukku, itu adalah awal dari segalanya.
`,
        image: '/images/gallery-16.jpeg',
    },
    {
        date: 'Chapter 2',
        title: 'From Rejection to a Promise',
        description: `Tahun 2023, aku sudah sempat menyerah mengejar sang gadis—karena berkali-kali ditolak. Tapi suatu hari, saat ngopi bareng Nuna (kakak sang gadis) di dekat kantorku, dia bilang ada janji temu dengan sang gadis. Spontan aku bilang, “Aku juga mau ikut!”

Aku menjemput sang gadis hari itu, dengan niat benar-benar ingin mengenal lebih jauh. Di perjalanan kami mulai ngobrol—tentang hidup, tujuan, dan mimpi. Berbeda dari sebelumnya, kali ini aku lebih santai. Mungkin karena sudah sempat ‘hopeless’, jadi bisa lebih lepas.

Sejak hari itu kami semakin dekat. Sampai akhirnya, aku sempat salah paham—kupikir dia ingin kepastian, jadi aku nyatakan perasaan. Tapi justru ditolak 😅. Tapi lucunya, setelah itu kami malah makin dekat.

Hingga suatu hari di bulan Agustus 2023, sang gadis bertanya,
"Aku nggak mau kita deket terlalu lama. Kira-kira, berapa lama dari sekarang kamu bisa nikahin aku?"
Padahal saat itu status kami belum pacaran!

Tapi aku jawab dengan yakin, “Paling lama dua tahun.”
Dan ternyata, janji itu sedang kami tepati hari ini.
`,
        image: '/images/gallery-15.jpeg',
    },
    {
        date: 'Chapter 3',
        title: 'The Beginning of Something Unexpected',
        description: `Setelah lika - liku panjang, di bulan April 2025, kami sepakat untuk bertemu dua keluarga, untuk melamar sang gadis. Sebuah ucapan yang diharapkan sebagai doa baik pada dua tahun lalu, Allah kabulkan hingga akhirnya kami mengambil satu langkah pasti dalam hidup ini.

Sekarang, kami siap untuk melangkah ke jenjang yang lebih sakral,
dan dengan penuh kebahagiaan, kami mengundang anda semua
untuk hadir menjadi bagian dari hari spesial kami.
`,
        image: '/images/gallery-20.jpeg',
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
                    Love is a journey that finds beauty in every step.
                    Here is a glimpse of our story, from the beginning to the happy day.
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
                                            <p
                                                className={cn(
                                                    'text-sm leading-relaxed text-[#5C4033]/80'
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
