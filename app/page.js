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
  ];

  return (
    <div className="space-y-16">

      {/* Title Bar */}
      <div className="text-center py-12 bg-gray-100 dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Welcome to my site
        </h1>
      </div>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto px-4 gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/globe.jpg" // replace with your image in public/
            alt="Profile"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">A little about me</h2>
          <p className="text-gray-600 dark:text-black-300">
            I'm Neven Marinkovic — a student, builder, and leader with a passion
            for tech and people. This site highlights some of the work and roles
            I’ve taken on along the way.
          </p>
          <Link href="/about">
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Experiences Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">My Experiences</h2>
      </div>

      {/* Card Slider Section */}
      <section className="relative overflow-x-auto max-w-6xl mx-auto px-4">
        <div ref={scrollRef} className="flex gap-4 overflow-x-scroll no-scrollbar pb-4">
          {experiences.map((exp, i) => (
            <Link key={i} href={exp.link}>
              <div className="min-w-[250px] bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:scale-105 transition cursor-pointer">
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