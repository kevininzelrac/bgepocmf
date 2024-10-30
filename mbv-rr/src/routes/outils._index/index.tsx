import { NavLink } from "react-router-dom";

const Menu = () => {
  const menu = [
    { title: "L'Entrepreneur", to: "entrepreneur" },
    { title: "Le modèle économique", to: "modele" },
    { title: "Le prévisionnel et le juridique", to: "previsionnel" },
  ];

  return (
    <nav id="outils">
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
