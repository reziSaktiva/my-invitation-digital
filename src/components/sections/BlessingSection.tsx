import { motion } from "framer-motion";
import React from "react";
import ChessboardDivider from "../ChessboardDivider";
import Image from "next/image";

function BlessingSection() {
    return (
        <section>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="bg-[#F9EAE1] text-center relative"
            >
                <ChessboardDivider />
                <div className="max-w-md mx-auto m-8 py-12 px-4 relative">
                    <motion.div
                        animate={{ rotate: [0, -15, 15, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-10 left-10"
                    >
                        <Image src="/icons/moon.svg" alt="Moon" width={48} height={48} />
                    </motion.div>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1, 1.2, 1] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-15 left-20"
                    >
                        <Image
                            src="/icons/sparkle.svg"
                            alt="Sparkle"
                            width={32}
                            height={32}
                        />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="text-lg text-[#5C4033] mb-8 italic"
                    >
                        &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
                        untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan
                        merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan
                        sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
                        tanda-tanda bagi kaum yang berfikir.&rdquo;
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="text-lg text-[#5C4033] font-medium"
                    >
                        ~ QS. Ar-Rum: 21 ~
                    </motion.p>
                </div>
                <ChessboardDivider />
            </motion.div>
        </section>
    );
}

export default BlessingSection;
