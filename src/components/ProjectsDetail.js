
import Black from "../assets/images/black.PNG"
const ProjectsDetail = ({projects}) => {


  return (
    <>
            {projects.map((project) => (
          

      <div className="project-content" key={project.id}>

          <div className="proj-imgs">
              <a href={project.link} target="_blank" rel="noreferrer">
              <img className="overlay" src={Black} alt="My Projects"/>
              <img className="project-img" src={project.img} alt="My Projects"/>
              </a>
          </div>
          <div className="proj-exp">
            <h2>
              <a href={project.link} target="_blank" rel="noreferrer">{project.title}</a>
            </h2>
            <div className="content-wrapper">
                <p className="project-exp-content">
                {project.content}
                </p>
            </div>
            <div className="proj-links">
                <a href={project.github} target="_blank" rel="noreferrer" >github</a>
                <a href={project.link} target="_blank" rel="noreferrer" >link</a>
            </div>

          </div>
      </div>

))}
      </>
  );
};

export default ProjectsDetail;
