import { NavLink, Outlet } from "react-router-dom";

const Nav = () => {
  const menu = [
    { title: "Synthèse", to: "synthese" },
    { title: "Produits", to: "produits" },
    { title: "Charges", to: "charges" },
    { title: "Investissements", to: "investissements" },
    { title: "Financements", to: "financements" },
    { title: "BFR", to: "bfr" },
    { title: "Juridique", to: "juridique" },
    { title: "Fiscalité", to: "fiscalite" },
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

export default function Categories() {
  return (
    <article>
      <Nav />
      <Outlet />
    </article>
  );
}
