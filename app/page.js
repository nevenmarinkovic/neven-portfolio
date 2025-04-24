"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef(null);

  const experiences = [
    { title: "Financial App", link: "/experiences" },
    { title: "Student Minister", link: "/experiences" },
    { title: "FAST Internship", link: "/experiences" },
    { title: "Portfolio Website", link: "/experiences" },
    { title: "Coming Soon...", link: "/experiences" },
  ];

  return (
    <div className="space-y-16">

    <div className="relative h-screen">
          {/* Background image */}
          <img
            src="/Flathead.jpg"
            alt="Background"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />

          {/* Overlay (optional dark tint) */}
          <div className="absolute inset-0 bg-black/30 z-0" />

          {/* Content on top */}
          <div className="relative z-10">
            <Navbar />
            <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Neven</h1>
              <p className="mt-4 text-lg md:text-xl">Welcome to my site!</p>
            </div>
          </div>
        </div>
      

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-full ">
        <div className="max-w-lg h-full md:w-1/2 mx-auto">
          <Image
            src="/Hannah.jpg" // replace with your image in public/
            alt="Hiking"
            width={1000}
            height={1000}
            className="rounded-lg"
          />

        </div>
        <div className="w-full md:w-1/2 space-y-4 bg-[#A8DCF0] mx-auto p-6 rounded-lg shadow-md items-center justify-center">
          <h2 className="text-2xl text-black font-semibold text-center">A little about me</h2>
          <p className="text-black dark:text-black-300">
            I'm Neven Marinkovic — a student, builder, and leader with a passion
            for tech and people. This site highlights some of the work and roles
            I’ve taken on along the way.
          </p>
          
          {/* This wrapper centers the button */}
          <div className="flex justify-center">
            <Link href="/about">
              <button className="mt-4 px-6 py-2 bg-[#245E6B] text-white rounded hover:bg-[#D2ECF0]">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experiences Card Slider Section */}
      <section className="relative overflow-x-auto max-w-full px-4 bg-[#D3D3D3]">
      <h2 className="text-center text-3xl font-bold text-black py-8">My Experiences</h2>
        <div ref={scrollRef} className="mx-auto h-100 scrollbar-thin scrollbar-thumb-[#2E798A] scrollbar-track-[#f1f1f1] flex gap-8 overflow-x-scroll pb-4">
          {experiences.map((exp, i) => (
            <Link key={i} href={exp.link}>
              <div className="min-w-[250px] min-h-[300px] bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:scale-105 transition cursor-pointer">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                  Click to learn more
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}