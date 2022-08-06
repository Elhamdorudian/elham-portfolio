import { Link } from "react-router-dom";
import "../assets/styles/Main.css";
import "../assets/styles/LeftSBar.css";

const LeftSBar = ({ social }) => {
  return (
    <li>
      <Link
        to={social.link}
        rel="noreferrer"
        target="_blank"
        className="social-links"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          {" "}
          <path d={social.path}></path>
        </svg>
      </Link>
    </li>
  );
};
export default LeftSBar;
