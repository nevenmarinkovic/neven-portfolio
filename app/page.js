"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef(null);

  const experiences = [
    { title: "Project 1", link: "/experiences" },
    { title: "Leadership Role", link: "/experiences" },
    { title: "Internship", link: "/experiences" },
    { title: "Example 2", link: "/experiences" },
    { title: "Example 3", link: "/experiences" },
    { title: "Example 4", link: "/experiences" },
  ];

  return (
    <div className="space-y-16">

      {/* Title Bar */}
      <div className="text-center py-6 bg-[#C2E3EB]">
        <h1 className="text-4xl font-bold text-black">
          Hi! I'm Neven
        </h1>
        <h3 className="text-2xl font-bold text-gray-700 mt-2">
          Welcome to my site!
        </h3>
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
        <div className="w-full md:w-1/2 space-y-4 bg-[#C2E3EB] mx-auto p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-black font-semibold">A little about me</h2>
          <p className="text-black dark:text-black-300 ">
            I'm Neven Marinkovic — a student, builder, and leader with a passion
            for tech and people. This site highlights some of the work and roles
            I’ve taken on along the way.
          </p>
          <Link href="/about">
            <button className="mt-4 px-6 py-2 bg-[#245E6B] text-white rounded hover:bg-[#D2ECF0]">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Experiences Card Slider Section */}
      <section className="relative overflow-x-auto max-w-full px-4 bg-[#C2E3EB]">
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