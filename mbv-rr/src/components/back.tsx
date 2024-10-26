import { NavLink } from "react-router-dom";

const Back = () => {
  return (
    <NavLink to=".." end>
      ← Retour
    </NavLink>
  );
};

export default Back;
