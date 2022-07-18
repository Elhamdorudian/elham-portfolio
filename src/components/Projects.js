import "../assets/styles/Projects.css";
import Todo from "../assets/images/Todo.jpeg";
import Timer from "../assets/images/Timer.jpeg";
import MyBlog from "../assets/images/MyBlog.jpeg";
import ProjectsDetail from "./ProjectsDetail";
const Projects = () => {
  const projects = [
{
  id:1,
  title:"Personal Blog",
  img: MyBlog,
  content: "1Lorem Ipsum is simply dummyok. It h",
  link:"https://elhamdorudian.github.io/eli-blog/",
  github:"https://github.com/Elhamdorudian/eli-blog"
},
{
  id:2,
  title:"Timer",
  img: Timer,
  content: "1Lorem Ipsum is simply dummyok. It h",
  link:"https://elhamdorudian.github.io/simple-timer/",
  github:"https://github.com/Elhamdorudian/simple-timer"
},
{
  id:3,
  title:"Todo List",
  img: Todo,
  content: "1Lorem Ipsum is simply dummyok. It h",
  link:"https://elhamdorudian.github.io/Todo_List/",
  github:"https://github.com/Elhamdorudian/Todo_List"
},
{
  id:4,
  title:"Weather App",
  img: Todo,
  content: "1Lorem Ipsum is simply dummyok. It h",
  link:"",
  github:"https://github.com/Elhamdorudian/my-weather-app"
},

  ];

  return (
    <div className="main-content-section" id="about">
      <h3 className="section-h-gen section-h-proj">
        <span className="section-no">03. </span>Some Things I've Built
      </h3>
      <ProjectsDetail projects={projects} />
    </div>
  );
};

export default Projects;
