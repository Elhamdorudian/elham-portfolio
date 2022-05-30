import { Link } from "react-router-dom";
import "../assets/styles/RightSBar.css";

const RightSBar = () => {
  return (
    <>
      <li className="right-nav-website">
        <Link
          to="www.google.com"
          rel="noreferrer"
          target="_blank"
          className="website-url"
        >
          www.google.com
        </Link>
      </li>
      <li>
        <div className="nav-line"></div>
      </li>
    </>
  );
};
export default RightSBar;
