
import { NavLink } from "react-router-dom";
import Tablevoiture from "../composant/Tablevoiture";
import Listusers from "../composant/Tableusers";
import Tablereservation from "../composant/Tablereservation";

function Admin() {
    return (<div>
        <div className="d-flex justify-content-between">
            <h1 className="text-success">Admin page</h1>
            <NavLink to={'/Nouvel-voiture'} className="btn btn-success">Nouvelle voiture</NavLink>
        </div>
        <Tablevoiture />
        <br />
        <hr className="border-2" />

        <Listusers />
        <br />
        <hr className="border-2" />
        <Tablereservation/>

    </div>)
}
export default Admin;