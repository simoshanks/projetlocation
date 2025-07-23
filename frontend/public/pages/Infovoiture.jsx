import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Formreserve from "../composant/Formreserve";

function Infovoiture({user}) {
  const [voiture, setVoiture] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:3000/voiture/' + id)
      .then(res => setVoiture(res.data[0]));
  }, [id]);

  return (
    <div className="container mt-4">
      <h1>Détails de la voiture</h1>
      {voiture && (
        <div className="card">
          <div className="card-header">
            Matricule : <strong>{voiture.matricul}</strong>
          </div>
          <div className="card-body">
            <p>Marque : <strong>{voiture.marque}</strong></p>
            <p>Status : <strong>{voiture.status}</strong></p>
            <p>Prix : <strong>{voiture.prix} Dh</strong></p>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <button className="btn btn-primary w-50" onClick={() => setShowModal(true)}>
              Réserver cette voiture
            </button>
            <NavLink className="btn btn-outline-danger w-25" to={'/voitures'}>
              Retour
            </NavLink>
          </div>
        </div>
      )}

      {/* Modal d'ajout de réservation */}
      <Formreserve show={showModal} onClose={() => setShowModal(false)} voitureid={voiture?.id} user={JSON.parse(localStorage.getItem("user"))}/>
    </div>
  );
}

export default Infovoiture;