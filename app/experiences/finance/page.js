"use client";
import HeroSection from "@/components/heroSection";
import ExperienceBody from "@/components/experienceBody";


export default function Page() {

  return (
    <div className="space-y-16">
      {/* Hero Section with motion */}

        <HeroSection
          imageSrc={"/spreadsheet.jpg"}
          heading={"Spreadsheet"}
          text={"Internal Financial App"}
          secondText={"Taking initiative"}
        />


      {/* Experience Body with motion */}
        <ExperienceBody
          imageSrc1={"/montana.jpg"}
          alternative1={"Montana"}
          imageSrc3={"/idea.jpg"}
          alternative3={"Idea"}
          imageSrc4={"/design.jpg"}
          alternative4={"Design"}
          text1={"For the first two years at the University of Montana, I worked in the College of Business Deans' Office as a student worker. My responsibilities varied from data entry, event planning, and general office duties. One of my routine tasks was inputting payroll data into a spreadsheet for the Finance Director. "
            + "The purpose of this was to ensure that all faculty, staff, and student workers were getting paid accurately and on time. When I first started doing this, I was going person by person through a PDF, copying and pasting their payment amounts into the spreadsheet by payroll period. This was a very tedious and inefficient process, and I knew that there had to be a better way. "
          + "I asked the Finance Director if it would be okay for me to develop an app that essentially parsed through the PDF, extracted the data, and then wrote it into the spreadsheet. She agreed, and I began development. I utilized Python and the openpyxl and tkinter libraries for reading/writing to Excel and creating the UI, respectively. I worked on this project off and on for about a semester, fine tuning it and adding features (such as the UI) as I went. "
          }
          text2={"Eventually, I finished the app and was able to distribute it to the Finance Director, accomplishing my goal of making the payroll tracking process more efficient. "
            +"While it was great that the app was able to save and time for the Director, it's success was short lived. The app was functional and working at the end of the semester. However, when I came back in the fall, I was informed that the app was no longer working with the new year's payroll data. "
          + "Due to me no longer being a student worker at the college and having other responsibilties, I was unable to continue development on the app."}
          text4={"This was my first real experience with software development. While I have programmed in my classes before, this was the first time I actually created something that solved a real world problem. I am proud of the initiative I took to go beyond my job responsibilities and created a functional (for a period) app. However, if I were to go back and do it again, I would have done a lot of things differently. "
            + "First, I didn't do a good job designing out a solution. I immediately jumped into figuring out how to read/write to Excel and later create a UI. By not designing out a solution, I spent a lot of time (on the go) trying to figure out how to do things that I could have easily designed out before. Not taking the time to design a solution at the beginning of the project led to a lot of frustration and time spent debugging. "
            + "Second, and similar to the first point, I didn't take the time to research different technology options. I went with Python because I was familiar with it and believed it would be the easiest to get up and running. I went with openpyxl because it seemed easy to use, and it was, enabling me to get the read/write process down. However, I later learned that there are other libraries that could have been better suited for the task. "
            + "Finally, I didn't do a great job of documenting my code. My repository still doesn't have a README file explaining how to use the app and what the different files do. I also didn't do a great job of commenting my code. I was so focused on getting the app up and running that I didn't take the time to document it. This made it difficult for me to come back to the project after a long break and remember what code block did what. "
            + "Overall, I am proud of the app I created and the initiative I took to go beyond my job responsibilities. However, I learned a lot from this experience and will take those lessons with me into my future projects. "
          }
          text5 = {"Due to the sensitivity of the data, I am unable to share any screenshots of the app or a link to my GitHub repository. However, I am happy to discuss the project in more detail if you are interested."}
        />


    </div>
  );
}