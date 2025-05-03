import Navbar from "@/components/navbar";
import { motion } from "framer-motion";

export default function HeroSection({ imageSrc, heading, text, secondText }) {
  const fadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (

              <motion.section
                  variants={fadeVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                >
                
                <div className="relative h-screen">
                            {/* Background image */}
                            <img
                              src={imageSrc}
                              alt={heading}
                              className="absolute inset-0 h-full w-full object-cover opacity-70"
                            />

                            {/* Overlay (optional dark tint) */}
                            <div className="absolute inset-0 bg-black/30 z-0" />

                            {/* Content on top */}
                            <div className="relative z-10">
                              <Navbar />
                              <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] text-white text-center px-4">
                                <h1 className="text-4xl md:text-6xl font-bold">{text}</h1>
                                <p className="mt-4 text-lg md:text-xl">{secondText}</p>
                              </div>
                            </div>
                          </div>
                
                </motion.section>
                  
  )
}