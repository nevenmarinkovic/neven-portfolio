"use client";
import HeroSection from "@/components/heroSection";
import ExperienceBody from "@/components/experienceBody";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="space-y-16">
      {/* Hero Section with motion */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 2 }}
      >
        <HeroSection
          imageSrc={"/spreadsheet.jpg"}
          heading={"Spreadsheet"}
          text={"Internal Financial App"}
          secondText={"Making my life easier"}
        />
      </motion.div>

      {/* Experience Body with motion */}

        <ExperienceBody
          imageSrc1={"/montana.jpg"}
          alternative1={"Montana"}
          imageSrc3={"/idea.jpg"}
          alternative3={"Idea"}
          text1={"Paragraph 1"}
          text2={"Paragraph 2"}
          text3={"Paragraph 3"}
          text4={"Paragraph 4"}
        />

    </div>
  );
}