import { NavLink } from "react-router-dom";
import Tablevoiture from "../composant/Tablevoiture";
import Listusers from "../composant/Tableusers";
import Tablereservation from "../composant/Tablereservation";

function Admin() {
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Admin page</h1>
        <NavLink to="/Nouvel-voiture" className="btn btn-success">
          Nouvelle voiture
        </NavLink>
      </div>

      <div className="mb-5">
        <Tablevoiture />
      </div>

      <hr className="border-2" />

      <div className="my-5">
        <Listusers />
      </div>

      <hr className="border-2" />

      <div className="my-5">
        <Tablereservation />
      </div>
    </div>
  );
}

export default Admin;