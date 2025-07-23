import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ChessboardDivider from '../ChessboardDivider';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const DateSection: React.FC = () => {
    const weddingDate = '2025-08-02T00:00:00';

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
                className="text-5xl md:text-7xl font-bold text-white bg-[#D3738D]/80 backdrop-blur-sm p-4 rounded-lg shadow-lg w-24 h-24 md:w-32 md:h-32 flex items-center justify-center"
            >
                {addLeadingZeros(value)}
            </div>
            <p className="text-lg md:text-xl font-semibold text-[#5C4033] mt-4">{label}</p>
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
                <div className="relative container mx-auto px-4 z-10">
                    <h2 className="text-5xl md:text-6xl text-[#D3738D] mb-4">
                        Save The Date
                    </h2>
                    <p className="text-2xl font-semibold text-[#5C4033] mb-12">
                        We are getting married
                    </p>
                    <div className="flex justify-center space-x-2 md:space-x-8 mb-12">
                        <CountdownBox value={timeLeft.days} label="Days" />
                        <CountdownBox value={timeLeft.hours} label="Hours" />
                        <CountdownBox value={timeLeft.minutes} label="Minutes" />
                        <CountdownBox value={timeLeft.seconds} label="Seconds" />
                    </div>
                    <p className="text-3xl font-semibold text-[#5C4033]">
                        Saturday, 02 August 2025
                    </p>
                </div>
            </section>
        </>
    );
};

export default DateSection;
