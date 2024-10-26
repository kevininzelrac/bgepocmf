import { Outlet } from "react-router-dom";
import Nav from "../nav";
import "./styles.css";

export default function Element() {
  return (
    <main data-cognitive>
      <Nav />
      <Outlet />
    </main>
  );
}
