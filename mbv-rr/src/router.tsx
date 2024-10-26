import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";

import Layout from "./layout";
/*  */ import Home from "./routes/home";
/*  */ import Parcours from "./routes/parcours";
/*  */ import Outils from "./routes/outils";
/*   */ import Outils_index from "./routes/outils._index";
/*    */ import Entrepreneur from "./routes/outils.entrepreneur";
/*    */ import Modele from "./routes/outils.modele";
/*  */ import Reseau from "./routes/reseau";
/*  */ import Actus from "./routes/actus";
import Back from "./components/back";

const Element = lazy(() => import("cognitive/Element"));
let children: any[];
try {
  children = (await import("cognitive/children")).default;
} catch (error) {
  console.error("Failed to load children:", error);
  children = [];
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "parcours", element: <Parcours /> },
      {
        path: "outils",
        element: <Outils />,
        children: [
          { index: true, element: <Outils_index /> },
          { path: "entrepreneur", element: <Entrepreneur /> },
          { path: "modele", element: <Modele /> },
          {
            path: "previsionnel",
            element: (
              <>
                <Back />
                <ErrorBoundary>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Element />
                  </Suspense>
                </ErrorBoundary>
              </>
            ),
            children: children,
          },
        ],
      },
      { path: "reseau", element: <Reseau /> },
      { path: "actus", element: <Actus /> },
    ],
  },
]);

export default router;
