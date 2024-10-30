import { Navigate } from "react-router-dom";

import Categories from "../../routes/categories";
/*  */ import Categories_Index from "../../routes/categories._index";
/*  */ import Produits from "../../routes/categories.produits";
/*  */ import Charges from "../../routes/categories.charges";
/*    */ import Variables from "../../routes/categories.charges.variables";
/*    */ import Fixes from "../../routes/categories.charges.fixes";
/*    */ import Dirigeant from "../../routes/categories.charges.dirigeant";
/*    */ import Salaries from "../../routes/categories.charges.salaries";
/*  */ import Investissements from "../../routes/categories.investissements";
/*  */ import Financements from "../../routes/categories.financements";
/*    */ import Long_terme from "../../routes/categories.financements.long_terme";
/*    */ import BFR from "../../routes/categories.financements.BFR";
/*  */ import Juridique from "../../routes/categories.juridique";
/*     */ import Statut from "../../routes/categories.juridique.statut";
/*     */ import TVA from "../../routes/categories.juridique.tva";
import Tableau from "../../routes/tableau";

const children = [
  { index: true, element: <Navigate to="categories" replace /> },
  {
    path: "categories",
    element: <Categories />,
    children: [
      { index: true, element: <Categories_Index /> },
      { path: "produits", element: <Produits /> },
      {
        path: "charges",
        element: <Charges />,
        children: [
          { index: true, element: <Navigate to="variables" replace /> },
          { path: "variables", element: <Variables /> },
          { path: "fixes", element: <Fixes /> },
          { path: "dirigeant", element: <Dirigeant /> },
          { path: "salaries", element: <Salaries /> },
        ],
      },
      { path: "investissements", element: <Investissements /> },
      {
        path: "financements",
        element: <Financements />,
        children: [
          { index: true, element: <Navigate to="long_terme" replace /> },
          { path: "long_terme", element: <Long_terme /> },
          { path: "bfr", element: <BFR /> },
        ],
      },
      {
        path: "juridique",
        element: <Juridique />,
        children: [
          { index: true, element: <Navigate to="statut" replace /> },
          { path: "statut", element: <Statut /> },
          { path: "tva", element: <TVA /> },
        ],
      },
    ],
  },
  { path: "tableau", element: <Tableau /> },
];

export default children;
