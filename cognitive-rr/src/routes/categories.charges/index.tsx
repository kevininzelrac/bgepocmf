import { NavLink, Outlet } from "react-router-dom";

const Nav = () => {
  const menu = [
    { title: "Charges Variables", to: "variables" },
    { title: "Charges Fixes", to: "fixes" },
    { title: "Rémunération Dirigeants", to: "dirigeants" },
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
      <Nav />
      <Outlet />
    </section>
  );
}
