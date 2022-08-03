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

  return (
    <div className="exp-content">
      <div className="exp-titles-wrapper">
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
          </>
        );
      })}
      </div>
      
      <div className="exp-details-wrapper">
            {experiences.map((exp) => {
        return (
          <>
            <div className={`exp-detail ${exp.isSelected ? "show-details" : "hide-details"}`}>
              <p className="detail-company">@ {exp.company}</p>
              <p>{exp.location}</p>
              <p>{exp.date}</p>
              <p>{exp.content}</p>
            </div>
          </>
        );
      })}
      </div>

    </div>
  );
};

export default Experience;
