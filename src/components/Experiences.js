import Experience from "./Experience";
import "../assets/styles/Experiences.css";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experiences = () => {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: "Front-End Developer",
      isSelected: true,
      company: "Mobile Telecommunication Company of Iran",
      location: "Tehran, Iran",
      date: "May 2018 - Aug 2022",
      content: "lorem lorem lorem2",
    },
    {
      id: 2,
      title: "Business Analyst",
      isSelected: false,
      company: "Mobile Telecommunication Company of Iran",
      location: "Tehran, Iran",
      date: "May 2016 - Aug 2018",
      content: "lorem lorem lorem3",
    },
    {
      id: 3,
      title: "MBA",
      isSelected: false,
      company: "Sharif University of Technology",
      location: "Tehran, Iran",
      date: "Sep 2013 - Feb 2016",
      content: "lorem lorem lorem4",
    },
    {
      id: 4,
      title: "Engineering",
      isSelected: false,
      company: "Sharif University of Technology",
      location: "Tehran, Iran",
      date: "Sep 2009 - Aug 2013",
      content: "lorem lorem lorem5",
    },
  ]);


  useEffect(() => {
    AOS.init({duration:500,
      delay:0,
      easing: "ease-in-out",
    });
  },[]);

  return (
    <div className="main-content-section" id="experiences">
      <h3 className="section-h-exp section-h-gen">
        <span className="section-no">02. </span>My Experiences
      </h3>
      <div className=" main-content-desc" data-aos="fade-up">
        <Experience experiences={experiences} setExperiences={setExperiences} />
      </div>
    </div>
  );
};
export default Experiences;
