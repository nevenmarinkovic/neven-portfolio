"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import HeroSection from "@/components/heroSection";
import {motion, useInView} from "framer-motion";

export default function Home() {
  const scrollRef = useRef(null);

  // Refs for sections
  const heroRef = useRef(null);
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);

  // Detect when sections are in view
  const isHeroInView = useInView(heroRef, { once: true });
  const isFirstSectionInView = useInView(firstSectionRef, { once: true });
  const isSecondSectionInView = useInView(secondSectionRef, { once: true });

  const experiences = [
    { title: "Financial App", link: "/experiences/finance", desc: "I developed an internal financial app for the finance director of the College of Business to streamline payroll tracking." },
    { title: "Student Minister", link: "/experiences/ministry", desc: "I currently work for the college church I have been a part of during my time in Missoula. Through this job, I learned a ton about communication, leadership, people, and myself." },
    { title: "FAST Internship", link: "/experiences/internship", desc: "I went to Boston in between my junior and senior year to work on an unemployment insurance project for the state of Massachusetts. This was my first 'real job'." },
    { title: "Portfolio Website", link: "/experiences/portfolio", desc: "The website your currently on! This was a dream of mine for quite some time." },
    { title: "Data Visualization", link: "/experiences/data", desc: "An analysis and visualization of Christianity rates in Western Europe over time." },
  ];

  return (
    <div className="space-y-16">

    <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: -50 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="motion-container"
      >
      <HeroSection
          imageSrc={"Flathead.jpg"}
          heading={"Flathead"}
          text={"Hi, I'm Neven"}
          secondText={"Welcome to my site!"}
          >
      </HeroSection>
      </motion.div>
    
      

      <motion.div
        ref={firstSectionRef}
        initial={{ opacity: 0, y: -50 }}
        animate={isFirstSectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5 }}
      >
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
          <p className="text-black dark:text-black-300 ">
            I'm Neven Marinkovic, a follower of Christ, graduating senior from the University of Montana, associate consultant with Ravus, soon-to-be married man, 
            and lover of pickleball. Click the button below to read more about me and my story.
          </p>
          
          {/* This wrapper centers the button */}
          <div className="flex justify-center">
            <Link href="/about">
              <button className="mt-4 px-6 py-2 bg-white dark:bg-gray-800 text-white rounded hover:bg-[#D2ECF0] ">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </section>
      </motion.div>

      <motion.div
        ref={secondSectionRef}
        initial={{ opacity: 0, y: -50 }}
        animate={isSecondSectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5 }}
      >
      {/* Experiences Card Slider Section */}
      <section className="relative overflow-x-auto max-w-full px-4 bg-[#D3D3D3]">
      <h2 className="text-center text-3xl font-bold text-black py-8">My experiences</h2>
      <div className= "flex justify-center">
        <div ref={scrollRef} className="mx-auto h-65 scrollbar-thin scrollbar-thumb-[#2E798A] scrollbar-track-[#f1f1f1] flex gap-8 overflow-x-scroll pb-4">
          {experiences.map((exp, i) => (
            <Link key={i} href={exp.link}>
              <div className="w-[250px] h-[200px] bg-white dark:bg-gray-800 rounded-l shadow-md p-6 hover:scale-110 transition cursor-pointer">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                  {exp.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
        </div>
      </section>
      </motion.div>
      </div>
  );
}