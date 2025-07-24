import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ChessboardDivider from '../ChessboardDivider';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const weddingDate = '2025-08-02T00:00:00';

const DateSection: React.FC = () => {
    const formattedWeddingDate = new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(new Date(weddingDate));

    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date(weddingDate) - +new Date();
        let timeLeft: TimeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const addLeadingZeros = (value: number) => {
        return value < 10 ? `0${value}` : value.toString();
    };

    const CountdownBox: React.FC<{ value: number; label: string }> = ({ value, label }) => (
        <div className="text-center">
            <div
                suppressHydrationWarning
                className="text-5xl font-bold text-white bg-[#D3738D]/80 backdrop-blur-sm p-4 rounded-lg shadow-lg w-24 h-24 flex items-center justify-center"
            >
                {addLeadingZeros(value)}
            </div>
            <p className="text-lg font-semibold text-[#5C4033] mt-4">{label}</p>
        </div>
    );

    return (
        <>
            <ChessboardDivider />
            <section
                className="py-20 text-center font-sans relative overflow-hidden bg-[#FBF6EE]"
            >
                <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 z-0">
                    <Image
                        src="/icons/flower.png"
                        alt="Flower decoration"
                        width={250}
                        height={250}
                        className="opacity-50 -scale-x-100"
                    />
                </div>
                <div className="relative container mx-auto flex flex-col items-center px-4 gap-4">
                    <h2 className="text-5xl text-[#D3738D] mb-4">
                        Save The Date
                    </h2>
                    <div className="flex justify-center space-x-2 mb-12">
                        <CountdownBox value={timeLeft.days} label="Hari" />
                        <CountdownBox value={timeLeft.hours} label="Jam" />
                        <CountdownBox value={timeLeft.minutes} label="Menit" />
                        <CountdownBox value={timeLeft.seconds} label="Detik" />
                    </div>
                    <p className="text-3xl font-semibold text-[#5C4033]">
                        {formattedWeddingDate}
                    </p>
                </div>
            </section>
        </>
    );
};

export default DateSection;
