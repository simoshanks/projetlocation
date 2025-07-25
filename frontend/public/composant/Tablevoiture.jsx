import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


function Tablevoiture() {
    const [voitures, setVoitures] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3000/voiture')
            .then(res => setVoitures(res.data))
            .catch(err => console.log(err))
    }, [])
    const supprimer = (id) => {
        if (window.confirm("Voulez-vous vraiment supprimer cette voiture ?")) {
            axios.delete(`http://localhost:3000/voiture/${id}`)
                .then(() => {
                    alert("Voiture supprimée");

                    axios.get('http://localhost:3000/voiture')
                        .then(res => setVoitures(res.data))
                        .catch(err => console.log(err));

                })
                .catch(err => console.error(err));
        }
    };
    return (
        <div>
            <h1 className='text-center mt-4'>List de voitures</h1>
            <div className="container">
                <table className="table table-striped table-hover table-bordered mt-4 text-center">
                    <thead className="table-danger">
                        <tr>
                            <th>#</th>
                            <th>Matricule</th>
                            <th>Marque</th>
                            <th>Prix</th>
                            <th>image</th>
                            <th>status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {voitures && voitures.map((voiture, index) => (
                            <tr key={voiture.id}>
                                <td>{index + 1}</td>
                                <td>{voiture.matricul}</td>
                                <td>{voiture.marque}</td>
                                <td>{voiture.prix} DH</td>
                                <td>{voiture.img}</td>
                                <td>{voiture.status}</td>
                                <td>
                                    <NavLink to={`/modifier/${voiture.id}`} className="btn btn-sm btn-outline-primary me-2">Modifier</NavLink>
                                    <button onClick={() => supprimer(voiture.id)} className="btn btn-sm btn-outline-danger" >Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}
export default Tablevoiture;

