"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { useRef } from "react";

export default function Page() {
    return (
      //This is the initial photo and navbar part of the page
      <div className="space-y-16">
      
          <div className="relative h-screen">
                {/* Background image */}
                <img
                  src="/Glacier.jpg"
                  alt="Background"
                  className="absolute inset-0 h-full w-full object-cover opacity-70"
                />
      
                {/* Overlay (optional dark tint) */}
                <div className="absolute inset-0 bg-black/30 z-0" />
      
                {/* Content on top */}
                <div className="relative z-10">
                  <Navbar />
                  <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">This is me</h1>
                  </div>
                </div>
              </div>
      

      //This will be the personal about me section of the page
      <section className="flex flex-col md:flex-row items-center justify-between max-w-full ">
        <div className="max-w-lg h-full md:w-1/2 mx-auto">
          <Image
            src="/Engaged.jpg" // replace with your image in public/
            alt="Engaged"
            width={1000}
            height={1000}
            className="rounded-lg"
          />

        </div>
        <div className="w-full md:w-1/2 space-y-4 mx-auto p-6 rounded-lg items-center justify-center">
          <p className="text-black dark:text-black-300 font-serif">
            Here is a blurb about myself.
          </p>
          </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between max-w-full ">

      <div className="w-full md:w-1/2 space-y-4 mx-auto p-6 rounded-lg items-center justify-center">
          <p className="text-black dark:text-black-300 font-serif">
            Here is a blurb about my professional aspirations.
          </p>
      </div>

        <div className="max-w-lg h-full md:w-1/2 mx-auto">
          <Image
            src="/Professional.jpg" // replace with your image in public/
            alt="Professional"
            width={1000}
            height={500}
            className="rounded-lg"
          />

        </div>
        
      </section>

    </div>
    );
  }