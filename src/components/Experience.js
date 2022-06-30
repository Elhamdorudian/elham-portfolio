const Experience = ({ experiences }) => {
  return (
    <div className="exp-content">
      {experiences.map((exp) => {
        return (
          <>
            <div className="exp-titles">
              <p>{exp.title}</p>
            </div>
            {/* <div>
              <p>{exp.company}</p>
              <p>{exp.location}</p>
              <p>{exp.date}</p>
              <p>{exp.content}</p>
            </div> */}
          </>
        );
      })}
    </div>
  );
};

export default Experience;
