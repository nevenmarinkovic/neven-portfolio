"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { useRef } from "react";
import HeroSection from "@/components/heroSection";
import ExperienceBody from "@/components/experienceBody";



export default function Page() {
    return (
        <div className="space-y-16">

          <HeroSection
            imageSrc={"/boston.jpg"}
            heading={"Boston"}
            text={"Fast Internship"}
            secondText={""}
            >
            </HeroSection>

            <ExperienceBody
            imageSrc1={"/Professional.jpg"}
            alternative1={"Professional"}
            imageSrc2={"/Professional.jpg"}
            alternative2={"Professional"}
            heading1={"What I did at FAST"}
            heading2={"My Takeaways from the internship"}
            text1=
            {"During the summer of 2023, I went to Boston, Massachusetts to work on an Unemployment Insurance project for the state of Massachusetts. My role was 'Implementation Intern', which entailed me doing a combination of system configuration and solution development. "
              + "FAST hase a 'core system' that meets the needs of government agencies. However, the system is not a one-size-fits-all solution. The team I was on was in charge of the part of the system that made sure applicants were eligible for unemployment insurance. "
              + "Due to the way FAST's core system was built, there is tremendous potential for customization through the systems user interface. I spent most of my time at FAST completing config tickets. Often, after completing these tickets, I would have to test the changes I made to ensure quality. "
              + "Afterwards, I would demo the solution to both our internal team and the client. Towards the end of the project, a couple of opportunities arose for me to work on solution development. While FAST's system had a lot of configuration potential, sometimes a developed 'cog' would need to get added to the system. "
              + "I was able to develop a few cogs, utilizing C# and SQL. My time in Boston with FAST was the first time I worked in a full-time job. It was also the first time living on the East Coast. I was able to meet new people and grow great relationships that I still cherish today."

            }
            text2={"Section about what I learned."}
            >

            </ExperienceBody>
        </div>
            )
  }