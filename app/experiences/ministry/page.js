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
            imageSrc={"/rescon.jpg"}
            heading={"Resonate"}
            text={"Student Ministry"}
            secondText={"It's more than Sunday"}
            >
            </HeroSection>

          <ExperienceBody
            imageSrc1={"/Campus.jpg"}
            alternative1={"Campus"}
            imageSrc2={"/WorshipNight.jpg"}
            alternative2={"Worship Night"}
            heading1={"My time at Resonate"}
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