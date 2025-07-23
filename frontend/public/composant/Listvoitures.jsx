import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';

function Listvoitures() {
    const [voitures, setVoitures] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/voiture')
            .then(res => setVoitures(res.data))
    }, [])
    return (
        <div>
            <h1 className='text-center'>Voitures list</h1>
            <div className='row'>
                {voitures && voitures.map((voiture) => (
                    <div key={voiture.id} className='col-md-4'>
                        <div className="card">
                            <div className="card-header">{voiture.matricul}</div>
                            <div className="card-body">{voiture.marque}</div>
                            <div className="card-footer">{voiture.prix} dh
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <NavLink to={'/infovoiture/' + voiture.id} className='btn btn-primary'>Voir Details</NavLink>

                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}
export default Listvoitures;