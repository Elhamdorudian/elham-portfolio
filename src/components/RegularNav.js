import { Link } from "react-router-dom";
const RegularNav = ({ navbarMenu }) => {
  return (
    <>
      {navbarMenu.map((item) => {
        return (
          <li className="navbar-item" key={item.id}>
            <Link to={item.path}>
              <span>{item.number}.</span>
              {item.title}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default RegularNav;
