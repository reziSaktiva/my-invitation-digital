'use client';

import { motion, Variants } from 'framer-motion';
import { Button } from '../ui/button';
import SectionTitle from '../SectionTitle';
import { Calendar, Clock, MapPin, HeartHandshake, PartyPopper } from 'lucide-react';

const timelineData = [
    {
        icon: <HeartHandshake size={48} className="text-[#D3738D]" />,
        title: 'Akad Nikah',
        date: 'Sabtu, 02 Agustus 2025',
        time: '08:00 - 10:00 WIB',
        venue: 'Gedung Keuangan Negara',
        address: 'Jl. Asia Afrika No. 114, Bandung',
        mapLink: 'https://maps.app.goo.gl/5sugahLvz8UrgLo27',
    },
    {
        icon: <PartyPopper size={48} className="text-[#D3738D]" />,
        title: 'Resepsi',
        date: 'Sabtu, 02 Agustus 2025',
        time: '11:00 - 14:00 WIB',
        venue: 'Gedung Keuangan Negara',
        address: 'Jl. Asia Afrika No. 114, Bandung',
        mapLink: 'https://maps.app.goo.gl/5sugahLvz8UrgLo27',
    },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.8,
            ease: 'easeOut',
        },
    }),
};

function TimelineSection() {
    return (
        <section className="bg-[#FBF6EE] py-20">
            <div className="container mx-auto px-4">
                <SectionTitle
                    firstText="Wedding"
                    secondText="Events"
                    firstColor="text-[#5C4033]"
                    secondColor="text-[#D3738D]"
                />
                <div className="mt-16 grid gap-12">
                    {timelineData.map((event, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-center bg-white/50 rounded-lg shadow-xl p-8 backdrop-blur-sm border border-white/60"
                        >
                            <div className="mb-6 flex justify-center">{event.icon}</div>
                            <h3
                                className="text-4xl text-[#5C4033] mb-6"
                                style={{ fontFamily: '"Great Vibes", cursive' }}
                            >
                                {event.title}
                            </h3>
                            <div className="space-y-4 text-[#5C4033]/80">
                                <div className="flex items-center justify-center gap-3">
                                    <Calendar size={18} />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center justify-center gap-3">
                                    <Clock size={18} />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center justify-center gap-3 mt-2">
                                    <MapPin size={18} />
                                    <span className="font-semibold">{event.venue}</span>
                                </div>
                                <p className="text-sm px-4">{event.address}</p>
                            </div>
                            <Button
                                onClick={() => window.open(event.mapLink, '_blank')}
                                className="mt-8 bg-[#D3738D] text-white hover:bg-[#c5637c] transition-colors duration-300 rounded-full px-8 py-6"
                            >
                                View Location
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TimelineSection;
