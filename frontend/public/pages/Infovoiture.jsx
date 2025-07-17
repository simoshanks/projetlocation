import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Formreserve from "../composant/Formreserve";

function Infovoiture() {
    const [voiture, setVoiture] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get('http://localhost:3000/voitures/' + id)
            .then(res => setVoiture(res.data[0]))
    }, [])

    return (
        <div>
            <h1>info voiture</h1>
            {voiture && (
                <div className="card ">
                    <div className="card-header">le matricule de voitures :  <h2>{voiture.matricul}</h2></div>
                    <div className="card-body"> la marque de voiture  :<h3>{voiture.marque}</h3></div>
                    <br /><div className="card-body"> le status de voiture :<h3>{voiture.status}</h3></div>
                    <hr />
                    <div>le prix de voiture :<h2>{voiture.prix}</h2> Dh</div>

                    <div className="card-footer d-flex justify-content-between" >
                        <div className=" w-50"  >
                            <Formreserve  />
                            
                        </div>
                        <NavLink className="btn btn-outline-danger w-25" to={'/voitures'}>
                            retour
                        </NavLink>
                    </div>
                </div>
            )

            }
        
        </div>
    )
}
export default Infovoiture;