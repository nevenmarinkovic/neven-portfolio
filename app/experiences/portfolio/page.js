"use client";
import HeroSection from "@/components/heroSection";
import ExperienceBody from "@/components/experienceBody";



export default function Page() {
    return (
        <div className="space-y-16">

          <HeroSection
            imageSrc={"/coding.jpg"}
            heading={"Coding"}
            text={"Personal Portfolio"}
            secondText={"My passion project"}
            >
            </HeroSection>

          <ExperienceBody
            imageSrc1={"/html.jpg"}
            alternative1={"HTML"}
            imageSrc3={"/Lucid.png"}
            alternative3={"Lucid"}
            text1=
            {"One of the classes I am taking is Creative Coding. This is an introductory coding class that teaches the basics of HTML, CSS, JavaScript, and more. We have a final project in the class, and when I read the description of the project, I was not thrilled. I reached out to my professor and asked if I could instead build a personal potfolio website. He agreed, and here we are. "
              + "It has been a goal of mine for awhile to build a personal portfolio website. I have never built a website before using code, so I was excited to take on this challenge. More than that, I wanted a website that did a better job of illustrating my work, and more importantly myself. This website is meant to go beyond what's on my resume. I want someone to visit my site and leave with a pretty good understanding of who I am, what my skills are, and what I'd be like as an employee/co-worker."

            }
            text2={"Paragraph 2"
              }
            text4={"Paragraph 3"
            }
            
              text5={"Paragraph 4"
              }
              >
            </ExperienceBody>



        </div>

            )
  }