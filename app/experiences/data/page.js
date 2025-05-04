"use client";
import HeroSection from "@/components/heroSection";
import ExperienceBody from "@/components/experienceBody";


export default function Page() {

  return (
    <div className="space-y-16">
      {/* Hero Section with motion */}

        <HeroSection
          imageSrc={"/data.jpg"}
          heading={"Data"}
          text={"Data Visualization"}
          secondText={"A look at Christianity and marriage rates over time"}
        />


      {/* Experience Body with motion */}
        <ExperienceBody
          imageSrc1={"/Europe.png"}
          alternative1={"Europe"}
          imageSrc3={"/checkbox.png"}
          alternative3={"Checkbox"}
          text1={"This project was completed in a Data Visualization class I took in the fall of 2024. I took this class as a computer science elective. The goal of this project was to display more than three variables in a single visualization. "
            + "Since I'm a Christian, I was interested in looking at the relationship between Christianity and marriage rates over time. Since Western Europe has been predominantly Christian (broad sense) for a long time, I thought it would be interesting to look at these rates over time. "
            + "The project began with a lot of research, trying to find data that would be useful for this project. The Association of Religion Data Archives (ARDA) and Our World in Data were two of the main sources. I also used a json that had each European country's geojson data. I used this data to draw country borders on the map. "
            + "After finding the data, I uploaded it to an Observable notebook, where I prepped and cleaned it for the visualizations. I found that since the 1900's, marriage rates and Christianity rates have been declining in every Western Europe country. The rate of decline varied, but there was a common trend. "
          }
          text4 = {"Throughout my data visualization class, I learned a lot about JavaScript and visualization techniques. The principle of displaying data with as little ink as possible was a north star throughout the class. It was also interesting to build in interactive capabilties to visualizations. "
            + "Things like checkboxes and sliders are great ways to allow users to interact with the data and see how it changes over time. Even something as simple as a color scheme has lots of implications for how the data is perceived. In this project, I used colors that matched the countries' flags (as seen in the screenshot to the right) and a blue gradient in the map visualization. "
            + "These color choices are intuitive and decrease the amount of time it takes for the user to understand what's going on. "
            + "If you are interested in seeing the code for this project and the process I went through to build it, click the Observable (O) link in the footer below."
          }
        />


    </div>
  );
}