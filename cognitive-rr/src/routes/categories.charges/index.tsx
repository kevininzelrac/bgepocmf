import { NavLink, Outlet } from "react-router-dom";
import Back from "../../components/back";

const Nav = () => {
  const menu = [
    { title: "Charges Variables", to: "variables" },
    { title: "Charges Fixes", to: "fixes" },
    { title: "Rémunération Dirigeant", to: "dirigeant" },
    { title: "Rémunération Salariés", to: "salaries" },
  ];

  return (
    <nav>
      {menu.map(({ title, to }) => (
        <NavLink key={title} to={to}>
          {title}
        </NavLink>
      ))}
    </nav>
  );
};

export default function Charges() {
  return (
    <section>
      <Back />
      <Nav />
      <Outlet />
    </section>
  );
}
