import { NavLink } from "react-router-dom";

const Nav = () => {
  const menu = [
    { title: "Les produits", to: "produits" },
    { title: "Les charges", to: "charges" },
    { title: "Les investissements", to: "investissements" },
    { title: "Les financements", to: "financements" },
    { title: "Le juridique, le fiscal et le social", to: "juridique" },
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

export default function Categories_Index() {
  return <Nav />;
}
