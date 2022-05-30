import Introduction from "../assets/components/Introduction";
import "../assets/styles/Main.css";
import LeftSBar from "./LeftSBar";
import RightSBar from "./RightSBar";

const Main = ({ socials }) => {
  return (
    <div className="main-wrapper">
      <div className="left-nav">
        <ul className="left-nav-social">
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
      </div>
      <div className="right-nav">
        <ul className="right-nav-list">
          <RightSBar />
        </ul>
      </div>
    </div>
  );
};

export default Main;
