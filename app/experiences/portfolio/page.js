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
            secondText={"Read about the process of building this site"}
            >
            </HeroSection>

          <ExperienceBody
            imageSrc1={"/html.jpg"}
            alternative1={"HTML"}
            imageSrc2={"/design.jpg"}
            alternative2={"Design"}
            text1=
            {"Paragraph 1"

            }
            text2={"Paragraph 2"
              }
            text3={"Paragraph 3"
            }
            
              text4={"Paragraph 4"
              }
              >
            </ExperienceBody>



        </div>

            )
  }