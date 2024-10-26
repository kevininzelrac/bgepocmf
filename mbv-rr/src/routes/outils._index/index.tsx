import { NavLink } from "react-router-dom";

const Menu = () => {
  const menu = [
    { title: "Entrepreneur", to: "entrepreneur" },
    { title: "Modele", to: "modele" },
    { title: "Previsionnel", to: "previsionnel" },
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

export default function Outils() {
  return <Menu />;
}
