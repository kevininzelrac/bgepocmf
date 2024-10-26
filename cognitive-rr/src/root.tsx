import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./router.tsx";

import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
