import { Outlet } from "react-router-dom";
import Nav from "../nav";
import "./styles.css";

export default function Element() {
  return (
    <main data-cognitive>
      <header>
        <h2>Cognitive</h2>
        <p>
          Micro Front-End Proof of Concept with Prefixed Vanilla CSS & React
          Router
        </p>
      </header>
      <Nav />
      <Outlet />
    </main>
  );
}
