"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { useRef } from "react";
import HeroSection from "@/components/heroSection";



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
        </div>

            )
  }