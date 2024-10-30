import { NavLink, Outlet } from "react-router-dom";
import Back from "../../components/back";

const Nav = () => {
  const menu = [
    { title: "Financements Long termes", to: "long_terme" },
    { title: "BFR", to: "BFR" },
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

export default function Financements() {
  return (
    <section>
      <Back />
      <Nav />
      <Outlet />
    </section>
  );
}
