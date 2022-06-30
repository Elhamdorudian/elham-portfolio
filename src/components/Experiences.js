import Experience from "./Experience";
import "../assets/styles/Experiences.css";
const Experiences = () => {
  const experiences = [
    {
      id: 1,
      title: "Engineering Management",
      University: "University of Ottawa",
      location: "Ottawa, Canada",
      date: "Sep 2022 - Present",
      content: "lorem lorem lorem1",
    },
    {
      id: 2,
      title: "Front-End Developer",
      company: "MCI",
      location: "Tehran, Iran",
      date: "May 2018 - Aug 2022",
      content: "lorem lorem lorem2",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "MCI",
      location: "Tehran, Iran",
      date: "May 2016 - Aug 2018",
      content: "lorem lorem lorem3",
    },
    {
      id: 4,
      title: "MBA",
      company: "Sharif University of Technology",
      location: "Tehran, Iran",
      date: "Sep 2013 - Feb 2016",
      content: "lorem lorem lorem4",
    },
    {
      id: 5,
      title: "Mechanical Engineering",
      company: "Sharif University of Technology",
      location: "Tehran, Iran",
      date: "Sep 2009 - Aug 2013",
      content: "lorem lorem lorem5",
    },
  ];
  return (
    <div className="main-content-section" id="experiences">
      <h3 className="section-h">
        <span>02. </span>My Experiences
      </h3>
      <div className="section-content main-content-desc">
        <Experience experiences={experiences} />
        {/* {experiences.map((experience) => {
          return ;
        })} */}
      </div>
    </div>
  );
};
export default Experiences;
