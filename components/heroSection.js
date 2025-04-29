import Image from "next/image";
import Navbar from "@/components/navbar";

export default function HeroSection({ imageSrc, heading, text, secondText }) {
  return (

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
  )
}