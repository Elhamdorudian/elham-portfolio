import "../assets/styles/Projects.css";
import Todo from "../assets/images/Todo.jpeg";
import Timer from "../assets/images/Timer.jpeg";
import MyBlog from "../assets/images/MyBlog.jpeg";
import WeatherApp from "../assets/images/WeatherApp.jpeg";
import ProjectsDetail from "./ProjectsDetail";
const Projects = ({links}) => {
  const projects = [
{
  id:1,
  title:"Personal Blog",
  img: MyBlog,
  content: "This is a Personal sample blog written in React.js where I talk about my interests and daily life.",
  link:"https://elhamdorudian.github.io/eli-blog/",
  github:"https://github.com/Elhamdorudian/eli-blog"
},
{
  id:2,
  title:"Weather App",
  img: WeatherApp,
  content: "Here you can find a weather forcast for cities around the world. It uses an API from Accuweather and is written with vanilla Javascript. The app also shows you the weather image and Icon and has an acceptable visualization same as well known ones.",
  link:"",
  github:"https://github.com/Elhamdorudian/my-weather-app"
},
{
  id:3,
  title:"Todo List",
  img: Todo,
  content: "Use Todo List app to add your tasks and manage them easily. You can both add tasks and delete them if needed. It has also a search bar where you can easily search the tasks.",
  link:"https://elhamdorudian.github.io/Todo_List/",
  github:"https://github.com/Elhamdorudian/Todo_List"
},
{
  id:4,
  title:"Timer",
  img: Timer,
  content: "It is a simple Timer app which shows you the time in detal. I wrote this project to make use of Math library in Javascript.",
  link:"https://elhamdorudian.github.io/simple-timer/",
  github:"https://github.com/Elhamdorudian/simple-timer"
},

  ];

  return (
    <div className="main-content-section" id="about">
      <h3 className="section-h-gen section-h-proj">
        <span className="section-no">03. </span>Some Things I've Built
      </h3>
      <ProjectsDetail projects={projects} links={links} />
    </div>
  );
};

export default Projects;
