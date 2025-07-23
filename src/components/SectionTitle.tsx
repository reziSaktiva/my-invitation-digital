'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
    firstText: string;
    secondText: string;
    firstColor?: string;
    secondColor?: string;
}

const titleVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
            staggerChildren: 0.3,
        },
    },
};

const spanVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

function SectionTitle({
    firstText,
    secondText,
    firstColor = 'text-gray-800',
    secondColor = 'text-pink-500',
}: SectionTitleProps) {
    return (
        <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mb-12 text-center"
        >
            <h2
                className={cn('text-6xl text-shadow md:text-8xl')}
            >
                <motion.span variants={spanVariants} className={cn(firstColor)}>
                    {firstText}
                </motion.span>{' '}
                <motion.span variants={spanVariants} className={cn(secondColor)}>
                    {secondText}
                </motion.span>
            </h2>
        </motion.div>
    );
}

export default SectionTitle; 