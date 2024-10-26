import { NavLink } from "react-router-dom";

const menu = [
  { title: "Categories", to: "categories" },
  { title: "Tableau", to: "tableau" },
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
