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
        <h1 className="text-black">I'm not perfect, but He is.</h1>
          <p className="text-black dark:text-black-300 font-serif">
            I grew up in Kirkland, Washington, a suburb of Seattle, in a very loving family. I was very much a rule-following kid, always looking to ensure that mom and dad were happy with me. Due to my both my parents following Jesus
            and my rule-following nature, I am sure that people looking at me thought I was a follower as well. However, that was not the case. When I arrived at high school, a religious high school, I quickly learned that most of 
            the "believers" around me lived weekend-lives that did not align with their proclaimed beliefs. I remember having the thought "religion must not mean much" since people didn't care that their actions didn't align with their beliefs.
            However, I stayed away from the partying for my first years in high school. I was in a friend group that was focused on athletics and academics. We found fun in playing video games, board games, and spike ball. In coming to high school,
            I had aspirations of playing basketball in college. Basketball had always been my favorite sport and Seattle has a very strong basketball league. However, by my senior year, I knew that I didn't want to play after high school. Our basketball coach
            pushed us hard, attempting to replicate a collegiate environment. Looking back, I am so grateful for the way he ran the program as it taught me so many important life lessons. It also showed me that I didn't love the grind of basketball training and practices
            enough to try and play at the next level. Before my senior year, my main rationale for staying away from the party scene was because I wanted to play college basketball and because I respected my parents. When I decided I wasn't going to play after high school,
            it was as if one of the two gates holding back the flood was gone. Soon after, the other gate was gone too. My senior year was filled with me pursuing whatever I wanted. It led me into dangerous situations as a result of alcohol and marijuana consumption. I knew that
            my behavior was dangerous and wrong, but I couldn't pull myself up out of it. A few weeks before I came to Missoula for college, my parents found out about my shenanigans. While it sucked to tell my parents what I had been up to and see how upset they were, it was probably the most freeing conversation I've ever had.
            They grounded me and I was left mostly alone during my last three weeks before college. I had lots of time to reflect on the previous year. I remember feeling like I had woken up from a dream. That I was Neven from birht to senior year, some other guy during senior year, and I was back to being Neven.
            I had decided that I was not going to do the same things in college, and that, to repair my relationship with my parents, I was going to find a church to go to (because I knew they wanted me to).
          </p>
          <p className="text-black dark:text-black-300 font-serif">
            I decided to come to the University of Montana because it was affordable, far enough away from home, and the people were down to Earth.  
          </p>
          </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between max-w-full ">

      <div className="w-full md:w-1/2 space-y-4 mx-auto p-6 rounded-lg items-center justify-center">
          <p className="text-black dark:text-black-300 font-serif">
            The first major step in my professional career was attending Seattle Prep, a high school known for it's prestigious academics and competitive
            basketball team. During my time at Prep, I was pushed both academically and athletically. The basketball program taught me important lessons about discipline, communication, and working hard for the guy next to you. 
            I had a strong group of friends who excelled in the classroom and in their sports. My teammates went on to play basketball at elite programs and my other friends study engineering and business at some of the best schools in the country.
            Being around guys like this encouraged me to work hard and compete. It set a standard of excellence for me, accomplished with hard work, humility, and a servant heart. Prep did an excellent job instilling a foundation of hard work, communication, and organization in me.
            A foundation that prepared me to excel in college and my career.
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