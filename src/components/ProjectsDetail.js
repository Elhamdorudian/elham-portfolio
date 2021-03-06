// import Link from react-router-dom;
const ProjectsDetail = ({projects}) => {


  return (
    <>
            {projects.map((project) => (
          

      <div className="project-content" key={project.id}>

          <div className="proj-imgs">
            
              <img className="project-img" src={project.img} alt="My Projects"/>

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
