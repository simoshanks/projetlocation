import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Formreserve from "../composant/Formreserve";

function Infovoiture({ user }) {
  const [voiture, setVoiture] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:3000/voiture/' + id)
      .then(res => setVoiture(res.data[0]))
      .catch(err => console.error("Erreur récupération voiture:", err));
  }, [id]);

  return (
    <div className="container mt-4" style={{ backgroundColor: '#bcb8b1', minHeight: '100vh', padding: '20px' }}>
      <h1 className="text-center mb-4">Détails de la voiture</h1>

      {voiture && (
        <div
          className="card shadow"
          style={{
            backgroundColor: '#8a817c',
            color: '#f4f3ee',
            border: 'none',
            borderRadius: '10px',
            overflow: 'hidden'
          }}
        >
          {/* صورة السيارة */}
          {voiture.img && (
            <img
              src={`http://localhost:3000/uploads/${voiture.img}`}
              alt="voiture"
              className="card-img-top"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          )}

          <div className="card-header border-0" style={{ backgroundColor: '#726f6a', color: '#fff' }}>
            Matricule : <strong>{voiture.matricul}</strong>
          </div>

          <div className="card-body">
            <p>Marque : <strong>{voiture.marque}</strong></p>
            <p>Status : <strong>{voiture.status}</strong></p>
            <p>Prix : <strong>{voiture.prix} Dh</strong></p>
          </div>

          <div className="card-footer border-0 d-flex justify-content-between" style={{ backgroundColor: '#726f6a' }}>
            <button className="btn btn-light text-dark w-50 me-2" onClick={() => setShowModal(true)}>
              Réserver cette voiture
            </button>
            <NavLink className="btn btn-outline-light w-25" to={'/voitures'}>
              Retour
            </NavLink>
          </div>
        </div>
      )}

      
      <Formreserve
        show={showModal}
        onClose={() => setShowModal(false)}
        voitureid={voiture?.id}
        user={user ?? JSON.parse(localStorage.getItem("user"))}
      />
    </div>
  );
}

export default Infovoiture;