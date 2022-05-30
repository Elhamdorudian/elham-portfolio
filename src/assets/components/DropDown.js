import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/styles/DropDown.css";

const DropDown = ({ navbarMenu }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuToggler = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };
  return (
    <div className="burger-wrapper">
      <Link to="#" onClick={menuToggler}>
        click me
      </Link>
      <div className={`dropdown ${openMenu ? "open" : "close"}`}>
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
      </div>
    </div>
  );
};

export default DropDown;
