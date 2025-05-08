"use client";
import Image from "next/image";
import { useRef } from "react";
import HeroSection from "@/components/heroSection";
import { motion, useInView } from "framer-motion";

export default function Page() {
   // Refs for sections
   const heroRef = useRef(null);
   const firstSectionRef = useRef(null);
   const secondSectionRef = useRef(null);
 
   // Detect when sections are in view
   const isHeroInView = useInView(heroRef, { once: true });
   const isFirstSectionInView = useInView(firstSectionRef, { once: true });
   const isSecondSectionInView = useInView(secondSectionRef, { once: true });
    return (
      //This is the initial photo and navbar part of the page
      <div className="space-y-16">

        <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: -50 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="motion-container"
      >
        <HeroSection
                imageSrc={"/Glacier.jpg"}
                heading={"Glacier"}
                text={"This is me"}
                secondText={""}
                >
            </HeroSection>

        </motion.div>



        <motion.div
        ref={firstSectionRef}
        initial={{ opacity: 0, y: -50 }}
        animate={isFirstSectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5 }}
      >
      <div className="w-full max-w-5xl space-y-4 mx-auto p-6 rounded-lg items-center justify-center">
        <h1 className="text-black text-2xl md:text-6xl py-4 font-bold">I'm not perfect, but He is.</h1>
          <p className="text-black dark:text-black-300 font-serif">
            I grew up in Kirkland, Washington, a suburb of Seattle, in a very loving family. I was very much a rule-following kid, always looking to ensure that mom and dad were happy with me. Due to both my parents following Jesus
            and my rule-following nature, I am sure that people looked at me and thought I was a follower as well. However, that was not the case. When I arrived at my religious high school, I quickly learned that most of 
            the "believers" around me lived weekend-lives that did not align with their proclaimed beliefs. I remember having the thought "religion must not mean much" since people didn't care that their actions didn't align with their beliefs.
            However, I stayed away from the partying for my first years in high school. I was in a friend group that was focused on athletics and academics. We found fun in playing video games, board games, and spike ball. In coming to high school,
            I had aspirations of playing basketball in college. Basketball had always been my favorite sport and Seattle has a very strong basketball league. However, by my senior year, I knew that I didn't want to play after high school. Our basketball coach
            pushed us hard, attempting to replicate a collegiate environment. Looking back, I am so grateful for the way he ran the program as it taught me so many important life lessons. It also showed me that I didn't love the grind of basketball training and practices
            enough to try and play at the next level. Before my senior year, my main rationale for staying away from the party scene was because I wanted to play college basketball and because I respected my parents. When I decided I wasn't going to play after high school,
            it was as if one of the two gates holding back the flood was gone. Soon after, the other gate was gone too. My senior year was filled with me pursuing whatever I wanted. It led me into dangerous situations as a result of poor decision making. I knew that
            my behavior was dangerous and wrong, but I couldn't pull myself up out of it. A few weeks before I came to Missoula for college, my parents found out about my shenanigans. While it sucked to tell my parents what I had been up to and see how upset they were, it was probably the most freeing conversation I've ever had.
            They grounded me and I was left mostly alone during my last three weeks before college. I had lots of time to reflect on the previous year. I remember feeling like I had woken up from a dream. That I was Neven from birht to senior year, some other guy during senior year, and I was back to being Neven.
            I had decided that I was not going to do the same things in college, and that, to repair my relationship with my parents, I was going to find a church to go to (because I knew they wanted me to).
          </p>
          <h2 className="text-black text-2xl md:text-6xl py-4 font-bold">The good news</h2>
          <p className="text-black dark:text-black-300 font-serif">
            I decided to come to the University of Montana because it was affordable, far enough away from home, and I thought the people were down to earth when I visited. On my first day on campus, after moving into my dorm, I was walking around the oval (center of campus).
            All of the clubs and organizations were out on the oval tabling. I started talking to this very tall guy at one of the tables. His name is Jordan. I found out that he used to play basketball at the University of Idaho. We connected over basketball and I remember thinking that he was a cool guy.
            He got my number and as I was leaving I realized that the table he was standing at was for a college church. I thought "awesome, I made a friend and I can just go to his church". We met up for lunch later that week and he started asking me about my faith background. 
            I told him that I was a Christian. I grew up going to church and went to a Catholic high school, I was Christian. He asked me a couple of questions and I realized that I didn't actually know who Jesus was or what it meant to follow him. He told me that God created a perfect world out of love.
            He made us to be in relationship with him and with one another. However, people, being imperfect as they are, naturally make decisions all the time that go against God's design for how we were meant to live. He told me that these decisions lead us to a place of brokenness, which is where the world is today.
            However, God, being loving and gracious, doesn't want to see his children and creation in a state of brokenness. He actually wants us to return to him, which is why he sent his son Jesus to live the perfect life according to his design, and then pay for all our shortcomings on the cross. 
            He told me that belief in Jesus and his sacrifice was the only way to return to God. He told me that it doesn't mean followers are perfect, by any means. But it means that we have hope in something greater than ourselves and hope for the future after death. Additionallly, it gives us daily direction and purpose
            in trying to be more like Christ each day. I remmeber thinking, "woah, if this is true, it certainly is worth following." I joined a bible study with Jordan than semester and started going to church consistently. I've been growing in my faith ever since. 
          </p>
          <p className="text-black dark:text-black-300 font-serif">
            The most treasured part of my life is my relationship with Jesus. In following him, I've become a much better man as he challenges my emotions and natural instincts. I put my faith in him and his perfect word, and have found that to be much better than putting faith in myself and my ideas. 
            I often receive compliments about my character and work ethic. That I'm a hard worker, good communicator, and good friend. It is very important to me that people know that this is not me, but Christ in me. I am not perfect, but he is. 
          </p>
          <p className="text-black dark:text-black-300 font-serif">
          I had a couple of reasons for wanting to build this website. I've never built a website from the ground up before and I wanted to learn how to do it. But, more importantly, I wanted to share my story and the story of Jesus. My hope is that all those who read this will recognize that 
          Jesus is the center of my life and the reason why I am who I am. His love and grace is not just for me, but for all of us. I hope that you can see that in my story and in my life.
            </p>
          </div>

          </motion.div>


        <motion.div
        ref={secondSectionRef}
        initial={{ opacity: 0, y: -50 }}
        animate={isSecondSectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5 }}
      >
          <section className="flex flex-col items-center max-w-full bg-[#D3D3D3] py-8">
  
            {/* Heading */}
            <h2 className="text-black text-2xl md:text-6xl py-8 font-bold">
              Looking forward
            </h2>

            {/* Flex container for image and text */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4">
              
              {/* Image */}
              <div className="max-w-lg h-full md:w-1/2 mx-auto py-4">
                <Image
                  src="/Engaged.jpg" // replace with your image in public/
                  alt="Engaged"
                  width={1000}
                  height={1000}
                  className="rounded-xl"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 space-y-4 mx-auto p-6 rounded-lg flex items-center justify-center">
                <p className="text-black dark:text-black-300 font-serif">
                  I'm super blessed to be marrying my best friend, Hannah, right after graduation in May. Hannah is also a follower of Christ and has been a huge part of my life since meeting her at the recreation center in the fall of 2023. Hannah is graduating from The University of Montana Law School in May.
                  She is a 2nd Lieutenant in the Marines and plans on joining their Judge Advocate Division. She is strong, smart, passionate, and so fun to spend time with. I am so excited to be marrying her and starting a family together. Hannah and I enjoy running, hiking, weight lifting, playing spike ball, and reading. 
                  This photo was taken right after I proposed to her (we were on a run).
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl py-4 px-4">
                <div className="w-full md:w-1/2 space-y-4 mx-auto p-6 rounded-lg items-center justify-center">
                  <p className="text-black dark:text-black-300 font-serif">
                    Due to Hannah's job, we will be moving around a lot in the next few years. We are both super excited about this as it will allow us to see new places and meet new people. It meant that, when I was looking for a full time job, I needed to find a place that would allow me to work remote.
                    I was very grateful to find a role with Ravus. Ravus is a Missoula based consulting firm that specializes in helping customers implement BillingPlatform and Stripe to optimize their billing and revenue management processes. When interviewing with them, I was immidiately drawn to their 
                    culture and values. Ravus is a group of people who are passionate about delivering quality work to their customers. It's been a joy to work with them in a part-time capacity during my last semester. I'm very excited to start full time with them in August.
                  </p>
                </div>
            
                <div className="max-w-lg h-full md:w-1/2 mx-auto">
                  <Image
                    src="/Ravus2.png" // replace with your image in public/
                    alt="Ravus"
                    width={1000}
                    height={500}
                    className="rounded-xl"
                    onClick={() => window.open("https://www.ravusinc.com/", "_blank")}
                    style={{ cursor: "pointer" }}
                  />

                </div>
            </div>
          </section>
          </motion.div>
      </div>
    );
  }