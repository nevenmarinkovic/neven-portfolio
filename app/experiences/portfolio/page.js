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
              + "It has been a goal of mine for awhile to build a personal portfolio website. I have never built a website before using code, so I was excited to take on this challenge and build something that displays my experiences and lessons learned. More than that, I wanted a website that did a better job of illustrating my work, and more importantly myself. This website is meant to go beyond what's on my resume. I want someone to visit my site and leave with a pretty good understanding of who I am, what my skills are, and what I'd be like as an employee/co-worker. "
              + "I utilized next.js, a React framework, to build this site. I also used Tailwind CSS for styling. I am still learning how to harness the power of these tools, but I am excited with the progress I have made so far. "

            }
            text4={"I am proud that I took some time to design out the site before I started coding. I used Lucid to get an idea of how I wanted the site's pages to look. As you can see, the original diagram is not that different from the finished site. I utilized squarespace as a reference for the design of the site. Looking at their example sites gave me the idea of including a hero section at the top of each page. I also liked the idea of having some animation in between sections of the page. "
              + "I am still growing in my ability to design a site, but I am proud of the strides I've made in understanding and getting comfortable using React and CSS. I am very excited to continue to refine and improve this site as I grow in my capabilities and have more experiences to share. Through the process of building this site, I realized I don't take a ton of photos. I am going to make a conscious effort to take more photos of my experiences so that I can share them with others. "
              + "Click the GitHub link below to see the code for this site."
            }
            
              >
            </ExperienceBody>



        </div>

            )
  }