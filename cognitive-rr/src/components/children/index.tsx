import { Navigate } from "react-router-dom";

import Categories from "../../routes/categories";
/*  */ import Synthese from "../../routes/categories.synthese";
/*  */ import Produits from "../../routes/categories.produits";
/*  */ import Charges from "../../routes/categories.charges";
/*    */ import Variables from "../../routes/categories.charges.variables";
/*    */ import Fixes from "../../routes/categories.charges.fixes";
/*    */ import Dirigeants from "../../routes/categories.charges.dirigeants";
/*    */ import Salaries from "../../routes/categories.charges.salaries";
/*  */ import Investissements from "../../routes/categories.investissements";
/*  */ import Financements from "../../routes/categories.financements";
/*  */ import BFR from "../../routes/categories.BFR";
/*  */ import Juridique from "../../routes/categories.juridique";
/*  */ import Fiscalite from "../../routes/categories.fiscalite";
import Tableau from "../../routes/tableau";

const children = [
  { index: true, element: <Navigate to="categories" replace /> },
  {
    path: "categories",
    element: <Categories />,
    children: [
      { index: true, element: <Navigate to="synthese" replace /> },
      { path: "synthese", element: <Synthese /> },
      { path: "produits", element: <Produits /> },
      {
        path: "charges",
        element: <Charges />,
        children: [
          { index: true, element: <Navigate to="variables" replace /> },
          { path: "variables", element: <Variables /> },
          { path: "fixes", element: <Fixes /> },
          { path: "dirigeants", element: <Dirigeants /> },
          { path: "salaries", element: <Salaries /> },
        ],
      },
      { path: "investissements", element: <Investissements /> },
      { path: "financements", element: <Financements /> },
      { path: "bfr", element: <BFR /> },
      { path: "juridique", element: <Juridique /> },
      { path: "fiscalite", element: <Fiscalite /> },
    ],
  },
  { path: "tableau", element: <Tableau /> },
];

export default children;
