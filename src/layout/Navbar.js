import "../assets/styles/Navbar.css";
import DropDown from "../components/DropDown";
import RegularNav from "../components/RegularNav";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Navbar = ({ navbarMenu, openMenu, setOpenMenu }) => {

  useEffect(() => {
    AOS.init({duration:500,
    });
  },[]);

  return (
    <>
      <div className="navbar-wrapper l-nav">
        <ul className="navbar-menu l-nav-list" data-aos="fade-down">
          <div className="navbar-logo">navbar logo</div>
          <RegularNav navbarMenu={navbarMenu} />
        </ul>
      </div>
      <div className="s-nav">
        <ul className="navbar-menu s-nav-list">
          <DropDown navbarMenu={navbarMenu} openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
