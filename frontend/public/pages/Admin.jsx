
import { NavLink } from "react-router-dom";
import Tablevoiture from "../composant/Tablevoiture";

function Admin(){
    return(<div>
        <div className="d-flex justify-content-between">
            <h1 className="text-success">Admin page</h1>
            <NavLink to={'/Nouvel-voiture'} className="btn btn-success">Nouvelle voiture</NavLink>
        </div>
        <Tablevoiture/>
    
    </div>)
}
export default Admin;