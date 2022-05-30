import { Link } from "react-router-dom";
import "../assets/styles/Navbar.css";
import DropDown from "../components/DropDown";

const Navbar = ({ navbarMenu }) => {
  return (
    <div className="navbar-wrapper">
      <ul className="navbar-menu">
        <div className="navbar-logo">navbar logo</div>
        {navbarMenu.map((item) => {
          return (
            <li className="navbar-item" key={item.id}>
              <Link href={item.path}>
                <span>{item.number}.</span>
                {item.title}
              </Link>
            </li>
          );
        })}

        <DropDown navbarMenu={navbarMenu} />
      </ul>
    </div>
  );
};

export default Navbar;
