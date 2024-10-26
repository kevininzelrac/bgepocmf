import { NavLink } from "react-router-dom";
import "./styles.css";

const menu = [
  { title: "Mon Bureau Virtuel", to: "./" },
  { title: "Mon Parcours", to: "parcours" },
  { title: "Mes Outils", to: "outils" },
  { title: "Mon Réseau", to: "reseau" },
  { title: "Mes actualités & évènements", to: "actus" },
];
export default function Nav() {
  return (
    <nav>
      {menu.map(({ title, to }) => (
        <NavLink key={title} to={to}>
          {title}
        </NavLink>
      ))}
    </nav>
  );
}
