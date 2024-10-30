import { NavLink, Outlet } from "react-router-dom";
import Back from "../../components/back";

const Nav = () => {
  const menu = [
    { title: "Statut & Régimes", to: "statut" },
    { title: "TVA", to: "TVA" },
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

export default function Juridique() {
  return (
    <section>
      <Back />
      <Nav />
      <Outlet />
    </section>
  );
}
