import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./HeroSection";
import BlessingSection from "./BlessingSection";
import JourneySection from "./JourneySection";
import WeddingSection from './WeddingSection';
import DateSection from "./DateSection";
import { MediaSection } from "./MediaSection";
import TimelineSection from "./TimelineSection";
import { GiftSection } from "./GiftSection";
import { WishesSection } from "./WishesSection";
import { ClosingSection } from "./ClossingSection";

interface MainContentSectionProps {
    isOpen: boolean;
    isDesktop?: boolean;
}

export function MainContentSection({ isOpen, isDesktop = false }: MainContentSectionProps) {
    const content = (
        <>
            <HeroSection />
            <BlessingSection />
            <JourneySection />
            <WeddingSection />
            <DateSection />
            <MediaSection />
            <TimelineSection />
            <GiftSection />
            <WishesSection />
            <ClosingSection />
        </>
    );

    if (isDesktop) {
        return (
            <div className="h-full w-full bg-white relative">
                <div className="h-full overflow-y-auto">
                    <div className="w-full mx-auto">
                        {content}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="absolute top-0 left-0 right-0 z-30 bg-white min-h-screen h-screen overflow-y-auto"
                    initial={{ y: "100vh" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100vh" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {content}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export { HeroSection, BlessingSection, JourneySection, WeddingSection };