"use client";
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
            imageSrc2={"/Fenway.jpg"}
            alternative2={"Fenway"}
            text1=
            {"During the summer of 2023, I went to Boston, Massachusetts to work on an Unemployment Insurance project for the state of Massachusetts. My role was 'Implementation Intern', which entailed me doing a combination of system configuration and solution development. "
              + "FAST hase a 'core system' that meets the needs of government agencies. However, the system is not a one-size-fits-all solution. The team I was on was in charge of the part of the system that made sure applicants were eligible for unemployment insurance. "

            }
            text2={"Due to the way FAST's core system was built, there is tremendous potential for customization through the systems user interface. I spent most of my time at FAST completing config tickets. Often, after completing these tickets, I would have to test the changes I made to ensure quality. "
              + "Afterwards, I would demo the solution to both our internal team and the client. Towards the end of the project, a couple of opportunities arose for me to work on solution development. While FAST's system had a lot of configuration potential, sometimes a developed 'cog' would need to get added to the system. "
              + "I was able to develop a few cogs, utilizing C# and SQL. My time in Boston with FAST was the first time I worked in a full-time job. It was also the first time living on the East Coast. I was able to meet new people and grow great relationships that I still cherish today. "
              }
            text3={"There were many things I learned during my time with FAST. Through multiple demonstrations to the client, I learned how to communicate technical concepts to non-technical people. It was always a balancing act of making sure the client understood the solution while not overwhelming them with technical jargon. "
              + "Additionally, I learned how to handle changing requirements. Often times, the client would ask for changes to a process or solution that I had already completed. This forced me to be flexible and adaptible. "
            }
            
              text4={"During my first few weeks at FAST, I often felt overwhelmed by the large system and the many moving parts. "
              + "I had to learn the balance of doing research to find answers to my questions and going to a team member or team lead for help. I learned that it is important to be able to find answers on your own, but also that struggling to find an answer for too long is not helpful. "
              + "Lastly, I learned the principles of developing in an existing system. During my time in school, I'd often build software apps or solutions on my own. Doing this meant that I could decide the format, naming conventions, and overall style of the app. Stepping into FAST, all of those things had already been decided. "
              + "I had to learn how to work within the existing structure of the system, leveraging built classes and processes to solve my problem. Overall, I'm very grateful for my time at FAST and the many lessons I learned."
              }
              >

            </ExperienceBody>
        </div>
            )
  }