import "../assets/styles/Introduction.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Introduction = () => {

useEffect(() => {
  AOS.init({duration:500});
},[]);

  return (
    <div className="main-content-intro">
      <p className="main-content-p" data-aos="fade-up">Hi, my name is</p>
      <h1 data-aos="fade-down">Elham Doroodian</h1>
      <h2 data-aos="fade-down">I'm a web web developer and marketing analyst.</h2>
      <p className="main-content-desc intro-p" data-aos="fade-down">
        I'm a web developer with a passion to learn new tech and tools. I'm
        currently working as a Front-End Developer and Marketing-Analystat{" "}
        <a href="https://www.mci.ir/" rel="noreferrer" target="_blank">
          MCI
        </a>
        .
      </p>
      <a className="btn" href="/files/resume.pdf" data-aos="fade-up" download >Resume</a>
    </div>
  );
};

export default Introduction;
