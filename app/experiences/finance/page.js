"use client";
import HeroSection from "@/components/heroSection";
import ExperienceBody from "@/components/experienceBody";

export default function Page() {
    return (
        <div className="space-y-16">

          <HeroSection
            imageSrc={"/coding.jpg"}
            heading={"Coding"}
            text={"Internal Financial App"}
            secondText={"Making my life easier"}
            >
            </HeroSection>

          <ExperienceBody
            imageSrc1={"/financeApp.png"}
            alternative1={"Finance App"}
            imageSrc2={"/idea.jpg"}
            alternative2={"Idea"}
            heading1={"The process"}
            heading2={"What I learned"}
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