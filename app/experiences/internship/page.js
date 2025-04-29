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
            imageSrc={"/boston.jpg"}
            heading={"Boston"}
            text={"Fast Internship"}
            secondText={""}
            >
            </HeroSection>
        </div>

            )
  }