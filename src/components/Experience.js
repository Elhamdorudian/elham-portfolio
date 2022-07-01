const Experience = ({ experiences, setExperiences }) => {
  const handleExp = (id, e) => {
    setExperiences(
      experiences.map((exp) => {
        if (exp.id === id) {
          return { ...exp, isSelected: true };
        } else {
          return { ...exp, isSelected: false };
        }
      })
    );
  };
  //   const handleExp = (e) => {
  //     console.log(e.target.id);
  //     const id = e.target.id;
  //     console.log("id is:", id);
  //     const experience = experiences.map((exp) => {
  //       console.log(exp.id);
  //       if (exp.id === id) {
  //         exp.isSelected = true;
  //         console.log(exp.isSelected);
  //       } else {
  //         exp.isSelected = false;
  //         console.log(exp.isSelected);
  //       }
  //       return exp;
  //     });
  //     console.log(experience);
  //     return experience;
  //   };
  return (
    <div className="exp-content">
      {experiences.map((exp) => {
        return (
          <>
            <div className="exp-titles">
              <button
                className={`exp-btn ${exp.isSelected ? "active" : "deactive"}`}
                onClick={(e) => handleExp(exp.id, e)}
                id={exp.id}
              >
                {exp.title}
              </button>
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
