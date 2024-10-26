import { createBrowserRouter } from "react-router-dom";

import Element from "./components/Element";
import children from "./components/children";

const router = createBrowserRouter([
  {
    element: <Element />,
    children: children,
  },
]);

export default router;
