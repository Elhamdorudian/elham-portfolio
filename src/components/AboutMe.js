import "../assets/styles/AboutMe.css";
import myImg from "../assets/images/myPic.jpeg";
const AboutMe = () => {
  return (
    <div className="main-content-about">
      <h3 className="about-h">
        <span>01. </span>About Me
      </h3>
      <div className="about-content">
        <p className="main-content-desc">
          I'm a web developer with a passion to learn new tech and tools. I'm
          currently working as a Front-End Developer and Marketing-Analystat{" "}
          <a href="https://www.mci.ir/" rel="noreferrer" target="_blank">
            MCI
          </a>
          .
        </p>
        <div className="about-img-wrapper">
          <img src={myImg} alt="myImg" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
