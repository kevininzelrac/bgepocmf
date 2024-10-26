/// <reference types="vite/client" />

declare module "cognitive/App" {
  export default function App({ message }: { message?: string }): JSX.Element;
}

declare module "cognitive/Element" {
  export default function Element(): JSX.Element;
}

declare module "cognitive/children" {
  // import { RouteObject } from "react-router-dom";
  // const children: RouteObject[];
  const children: [];
  export default children;
}
