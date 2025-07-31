import { NavLink } from "react-router-dom";
import Tablevoiture from "../composant/Tablevoiture";
import Listusers from "../composant/Tableusers";
import Tablereservation from "../composant/Tablereservation";
import Tablemessages from "../composant/tablemessages";


function Admin() {
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className=" fw-bold" style={{ color: '#414e36ff',  }}>Admin page</h1>
        <NavLink
          to="/Nouvel-voiture"
          className="btn btn-success shadow-sm fw-semibold"
          style={{ backgroundColor: '#6fa342ff', border: 'none' }}
        >
          + Nouvelle voiture
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
      <hr className="border-2" />
      <Tablemessages />
    </div>
  );
}

export default Admin;