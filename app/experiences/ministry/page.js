"use client";
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
            imageSrc2={"/Campus.jpg"}
            alternative2={"Campus"}
            imageSrc1={"/WeekOfWelcome.jpg"}
            alternative1={"Week of Welcome"}
            imageSrc3={"/WorshipNight.jpg"}
            alternative3={"Worship Night"}
            imageSrc4={"/CookieCompetition.jpg"}
            alternative4={"Cookie Competition"}

            text1=
            {"My internship with Resonate started in the spring of 2024. My official title has been 'Campus Missionary Intern'. Since Resonate is a college church, the majority of our members are college students. This means that people who work for Resonate have to externally support raise their wages, which is a little different than most churches. I spent the spring/summer of 2024 raising support for the school year. " +
              "Once fall came, my roles and responsibilities shifted. During freshmen orientation week, we spent a lot of time meeting new students and throwing fun events like glow in the dark capture the flag, camping trips, cliff jumping, and swing dancing. We believe that the first week and month of college can be hard as students meet a billion people and try to figure out where they belong. We want to meet students in the midst of this and extend a hand into our community. "
              + "The picture on the left is of our glow in the dark capture the flag game during freshmen orientation week."
             
            }
            text2={"As the year went on, I fell into a more regular rhythm. Most of my responsibilties during this internship were revolved around meeting new students and leading the ones in our community. Every Tuesday and Wednesday, a group of staff members and students would head to the University Center and Lodge dining hall to meet students. " +
              "This often looked like walking up to students and asking them if they would be interested in having a spiritual conversation. If they agreed, we would sit down and engage with them in conversation, asking them questions about their background and their spiritual beliefs. If they didn't, we would wish them well and continue on. " +
              "At Resonate, we believe that a student's time in college is the most formative time in their life. We think that students are away from their parents for the first time and are trying to figure out who they are and what they believe. As Christians, we believe that the bible is clear when it comes to people choosing to follow Jesus. " +
              "We believe that God is fully in control and is the one that changes people's hearts, resulting in them choosing to follow Jesus. As a result, we believe that our job as believers is to go out and try and figure out who God is already working in. We do not believe that we can change people's hearts or convert them, which is why we only talk with students who are open to having spiritual conversation. "
              + "We do this because God tells us to, but also because we've experienced the joy in following Jesus and want to share the treasure we've found. The picture to the left was of a group of us before we went out to meet students. "
              }

              text3={" When it comes to leading students, it often revolves around weekly meetings. These might be one on one or with a group of students. The content and purpose of these meetings/groups depends on the students and where they are at in their faith journey. New believers often start with a bible study, learning the fundamentals of the faith. Those more mature in their walk focus on what God is saying to them and how they can act on that, a more practical and action based group. " + 
              "In addition to meeting new students and leading them, I also spent a lot of time planning and organizing community events. These vary from movie nights to worship nights to olympic games. The goal of these events was to enrich and bond the existing students in our community while also providing a fun and safe space for new students to come and meet people." }

            text4={"During my time going on campus and meeting new students, I learned a lot about communication. I learned how to read people's body language, which often informed me about how interested they were in talking with me. I also learned how to ask good questions and how to listen well. Since I was the one initiating the conversation, I took responsability for leading the conversation. I would often come in with a few questions to ask, but I had to be flexible and adapt to the conversation. " +
              "I engaged with many different students over the course of the year, growing my ability to conversate and connect with people from different backgrounds. Lastly, the time I spent on campus taught me how to be bold and confident in my faith. Going up to a random person and asking them if they would be interested in having a spiritual conversation is rather unusual in today's world. I learned to embrace the uncomfortable and push through. While it wasn't always easy, the reps over the course of the year made it easier. "
            }

            text5={"Since I had to support raise my income during the course of the year, I learned valuable lessons about presenting. In a way, support raising is not that different from sales. I was trying to connect a service (leading collegiate men in their relationships with Christ) with people who were interested in that. I have both believers and non-believers on my support team, reflecting my ability to curate proposals that resonated with whoever I was talking to."}

            text6={"God taught me so much about leadership this year. He taught me the importance of taking ownership of the people and spaces I was leading. If something was going bad, it ultimately led back to me. This mindset of ownership pushed me to action and thoughtfulness. "
              + "He also taught me that leading people requires a combination of challenge and invitation. Since our hope for everyone is for them to grow and mature in their relationship with Christ, this often involved challenging them to 'step up'. I learned that these challenges were most effective when I had a relatively equal invitation. Instead of only ever meeting up with guys to challenge them, I made sure to do fun things like play ping pong, hike, or go get food, so they knew I wasn't there to just challenge, but to invite them to do life with me. "
              + "Not only this, but also encouraging and celebrating their wins along the way. This combination of challenge and invitation is key to leadership. The picture to the right is of a cookie competition we did one Friday night."
            }
              >
            </ExperienceBody>


        </div>



            )
  }