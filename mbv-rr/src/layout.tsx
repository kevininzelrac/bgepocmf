import Nav from "./components/nav";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <h1>Mon Bureau Virtuel</h1>
      <main>
        <Nav />
        <Outlet />
      </main>
    </>
  );
}
