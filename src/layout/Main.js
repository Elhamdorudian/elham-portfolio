import Introduction from "../components/Introduction";
import AboutMe from "../components/AboutMe";
import "../assets/styles/Main.css";
import LeftSBar from "./LeftSBar";
import RightSBar from "./RightSBar";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";

const Main = ({ socials, links, projects }) => {
  return (
    <div className="main-wrapper">
      <div className="side-nav">
        <ul className="side-nav-list">
          {socials.map((social) => {
            return <LeftSBar key={social.id} social={social} />;
          })}
          <li>
            <div className="nav-line"></div>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <Introduction />
        <AboutMe />
        <Experiences />
        <Projects links={links} projects={projects} />
      </div>
      <div className="side-nav right-nav">
        <ul className="side-nav-list right-nav-list">
          <RightSBar />
        </ul>
      </div>
    </div>
  );
};

export default Main;
